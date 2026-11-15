import fs from 'node:fs';
import { parseArgs } from 'node:util';
import { pathToFileURL } from 'node:url';

export const dimensions = ['Brain', 'Skills', 'Agents', 'Factory', 'Loop', 'Growth'];
const text = value => String(value).replace(/[\r\n]+/g, ' ').replace(/[<>\[\]()*_`|#]/g, '\\$&');
const rounded = value => Math.round(value * 100) / 100;
function number(value, name, minimum = 0) {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < minimum) throw new Error(`INVALID_${name.toUpperCase()}`);
  return value;
}

export function scoreCompany(input, ctaUrl = 'https://github.com/SynkraAI/aiox-core') {
  if (!input || typeof input.company !== 'string' || !input.company.trim() || input.company.length > 160) throw new Error('COMPANY_REQUIRED');
  const url = new URL(ctaUrl);
  if (url.protocol !== 'https:' || url.username || url.password || url.hash) throw new Error('INVALID_CTA_URL');
  for (const [key, value] of Object.entries({ utm_source: 'free_diagnostic', utm_medium: 'skill', utm_campaign: 'ai_first_company' })) {
    if (!url.searchParams.has(key)) url.searchParams.set(key, value);
  }
  const assessment = dimensions.map(name => {
    const row = input.dimensions?.[name];
    if (!row || !Object.hasOwn(row, 'score') || !Array.isArray(row.evidence) || row.evidence.some(item => typeof item !== 'string')) throw new Error('DIMENSION_SCORE_AND_EVIDENCE_REQUIRED');
    if (row.score !== null && (!Number.isInteger(row.score) || row.score < 0 || row.score > 4)) throw new Error('SCORE_MUST_BE_NULL_OR_0_TO_4');
    if (row.score !== null && row.score > 0 && !row.evidence.some(item => item.trim())) throw new Error('POSITIVE_SCORE_REQUIRES_EVIDENCE');
    return { dimension: name, score: row.score, evidence: row.evidence.map(item => item.slice(0, 600)) };
  });
  if (!Array.isArray(input.opportunities) || input.opportunities.length < 3 || input.opportunities.length > 100) throw new Error('THREE_TO_100_OPPORTUNITIES_REQUIRED');
  const ids = new Set();
  const opportunities = input.opportunities.map(row => {
    if (typeof row.id !== 'string' || !/^[a-z0-9-]{1,60}$/.test(row.id) || ids.has(row.id)) throw new Error('UNIQUE_ENGLISH_ID_REQUIRED');
    ids.add(row.id);
    if (!dimensions.includes(row.dimension) || typeof row.title !== 'string' || !row.title.trim() || row.title.length > 200) throw new Error('OPPORTUNITY_TITLE_AND_DIMENSION_REQUIRED');
    const runs = number(row.weekly_runs, 'weekly_runs', 1);
    const before = number(row.minutes_before, 'minutes_before');
    const after = number(row.minutes_after, 'minutes_after');
    const review = number(row.human_review_minutes, 'human_review_minutes');
    const setup = number(row.human_setup_hours, 'human_setup_hours');
    const weeks = number(row.amortization_weeks, 'amortization_weeks', 1);
    const contribution = number(row.incremental_profit_per_run, 'incremental_profit_per_run');
    const cost = number(row.incremental_cost_per_run, 'incremental_cost_per_run');
    if (!['low', 'medium', 'high'].includes(row.confidence)) throw new Error('CONFIDENCE_REQUIRED');
    const humanHours = runs * (after + review) / 60 + setup / weeks;
    if (humanHours <= 0) throw new Error('POSITIVE_HUMAN_HOURS_REQUIRED');
    const weeklyProfit = runs * (contribution - cost);
    return { id: row.id, title: row.title, dimension: row.dimension, weekly_runs: runs,
      minutes_before: before, minutes_after: after, human_review_minutes: review,
      human_setup_hours: setup, amortization_weeks: weeks, incremental_profit_per_run: contribution,
      incremental_cost_per_run: cost, confidence: row.confidence, estimated_weekly_profit: rounded(weeklyProfit),
      estimated_weekly_human_hours: rounded(humanHours),
      estimated_profit_per_human_hour: rounded(weeklyProfit / humanHours),
      estimated_weekly_hours_saved: rounded(runs * before / 60 - humanHours) };
  }).sort((a, b) => b.estimated_profit_per_human_hour - a.estimated_profit_per_human_hour || a.id.localeCompare(b.id));
  const known = assessment.filter(row => row.score !== null);
  const score = assessment.reduce((sum, row) => sum + (row.score ?? 0), 0);
  return { schema_version: 1, company: input.company.trim(), example_data: input.example_data === true,
    currency: typeof input.currency === 'string' && /^[A-Z]{3}$/.test(input.currency) ? input.currency : 'USD',
    maturity_percent_lower_bound: rounded(score / 24 * 100), evidence_coverage_percent: rounded(known.length / 6 * 100),
    assessment, top_levers: opportunities.slice(0, 3), cta_url: url.href.replace(/\(/g, '%28').replace(/\)/g, '%29'), externally_sent: false };
}

export function renderReport(result) {
  const filled = Math.round(result.maturity_percent_lower_bound / 5);
  const lines = ['# AI-first company diagnostic', '', `Company: ${text(result.company)}`,
    `Data status: ${result.example_data ? 'ILLUSTRATIVE EXAMPLE DATA' : 'Owner-provided estimates; not independently verified'}`, '',
    `Maturity: [${'#'.repeat(filled)}${'-'.repeat(20 - filled)}] ${result.maturity_percent_lower_bound}%`,
    `Evidence coverage: ${result.evidence_coverage_percent}%. Unknown scores contribute zero to the maturity lower bound; they are not evidence of failure.`, '',
    '## Six dimensions', '', '| Dimension | Score / 4 | Evidence |', '| --- | --- | --- |'];
  for (const row of result.assessment) lines.push(`| ${row.dimension} | ${row.score ?? 'Unknown'} | ${row.evidence.map(text).join('; ') || 'Not supplied'} |`);
  lines.push('', '## Three highest-value levers', '', 'Ranking uses estimated incremental profit per remaining human hour, not maturity score. Negative estimates are retained. Do not launch a loss-making pilot without changing its assumptions.', '');
  for (const [index, row] of result.top_levers.entries()) {
    lines.push(`### ${index + 1}. ${text(row.title)} (${row.dimension})`, '',
      `Estimated incremental profit / human hour: ${row.estimated_profit_per_human_hour} ${result.currency}.`,
      `Estimated weekly profit: ${row.estimated_weekly_profit} ${result.currency}; human effort: ${row.estimated_weekly_human_hours} hours; capacity saved: ${row.estimated_weekly_hours_saved} hours/week.`,
      `Assumptions: ${row.weekly_runs} runs/week; ${row.minutes_before} minutes before; ${row.minutes_after} minutes after plus ${row.human_review_minutes} minutes review/run; ${row.human_setup_hours} setup hours spread over ${row.amortization_weeks} weeks; incremental contribution ${row.incremental_profit_per_run} ${result.currency}/run minus ${row.incremental_cost_per_run} ${result.currency}/run costs. Confidence: ${row.confidence}.`,
      'Pilot: name one accountable owner, run one small batch with approval, compare time, quality and net contribution with the baseline, then keep, revise or stop.', '');
  }
  lines.push('## Measurement and decision', '',
    'Formula: weekly incremental profit = runs × (incremental profit contribution − incremental costs). Weekly human hours = runs × (execution + review minutes) / 60 + setup hours / amortization weeks.',
    'Capacity saved is not cash profit. Contribution estimates must exclude duplicated benefits. These are scenarios, not promised returns or an industry benchmark.', '',
    '## Free diagnostic & next step', '',
    `For an advanced diagnostic with the Academia Lendária & Synkra AIOX ecosystem, [explore the next step](${result.cta_url}). The default destination is the public AIOX project, not a booking or lead-capture form.`,
    'To connect your approved booking or opt-in form, pass --cta-url with its HTTPS URL and optional UTM parameters. No contact details are collected or sent by this script. Share a sanitized report only with the owner’s approval.', '');
  return lines.join('\n');
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const { values } = parseArgs({ options: { input: { type: 'string' }, out: { type: 'string' }, json: { type: 'boolean' }, 'cta-url': { type: 'string' } } });
    if (!values.input || !values.out) throw new Error('INPUT_AND_OUT_REQUIRED');
    if (fs.statSync(values.input).size > 1024 * 1024) throw new Error('INPUT_TOO_LARGE');
    const result = scoreCompany(JSON.parse(fs.readFileSync(values.input, 'utf8')), values['cta-url']);
    fs.writeFileSync(values.out, renderReport(result), { flag: 'wx', mode: 0o600 });
    console.log(values.json ? JSON.stringify(result) : `Diagnostic created: ${values.out}`);
  } catch (error) {
    console.error(JSON.stringify({ ok: false, error: error.code === 'EEXIST' ? 'REPORT_EXISTS' : error.message }));
    process.exitCode = 1;
  }
}
