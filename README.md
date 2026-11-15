# Skills de Alan Nicolas

Skills originais para ampliar as capacidades de agentes compatíveis com Agent Skills.

## Studio Lendário

Transforma o equipamento que você já tem em um sistema audiovisual mais consistente. É uma camada de craft para produção audiovisual: diagnostica a cadeia, corrige a base técnica, dirige o refinamento estético e valida o arquivo antes de congelar um setup.

Útil para:

- vídeos para YouTube, VSLs, cursos e conteúdo curto;
- podcasts, entrevistas e lives;
- reuniões, aulas e apresentações remotas;
- gravações com celular, webcam ou câmera dedicada;
- redução de ruído, reflexos, dessincronia e inconsistência entre sessões;
- documentação de um setup que outra pessoa consegue repetir.

### Instalação assistida

Peça ao Codex:

```text
Instale a skill studio-lendario deste repositório:
https://github.com/oalanicolas/skills/tree/main/studio-lendario
```

Depois, use:

```text
Use $studio-lendario audit para analisar esta gravação. Primeiro inventarie o equipamento que já tenho e não recomende compras. Escolha a mudança gratuita de maior impacto, diga como testar e compare o arquivo novo com o anterior.
```

### Modos

- `audit` e `critique`: entender o sistema ou uma gravação;
- `calibrate`, `camera`, `light`, `voice`, `capture` e `sync`: corrigir a base técnica;
- `polish`, `cinematic`, `bolder` e `quieter`: dirigir o acabamento estético;
- `live`, `lock` e `teach`: acompanhar testes, registrar o setup e ensinar o processo.

Os modos estéticos só entram depois do **Studio Gate**, que confere pele, foco, cor, movimento, flicker, áudio, sincronização, formato seguro e montagem física.

### Princípio

Configuração antes de compra. Evidência antes de opinião. Uma variável por teste. Arquivo final antes de aprovação.

## Opus 5.5 Converter

Converte prompts, system prompts, agentes, subagentes, slash commands, CLAUDE.md, skills e prompts de integração com a API para rodarem bem no Claude Opus 5.5. Também escreve prompts novos a partir de uma descrição da necessidade. Entrega o prompt convertido, um log com cada corte ou troca, a regra que o justifica e o grau de confiança, a configuração de API e harness (effort, `max_tokens`, `thinking.display`, ferramentas, mensagens automáticas) e os testes para rodar antes de produção.

Útil para:

- migrar prompts escritos para o Opus 5, para o Fable ou para modelos mais antigos;
- agentes autônomos que param no meio da tarefa depois de reportar progresso;
- integrações que rodavam com thinking desligado ou com `tool_choice` forçado, que retornam erro no Opus 5.5;
- chats, agentes que trabalham em vários apps, times de agentes e geração de frontend;
- auditar um prompt antes de colocá-lo em produção.

### Instalação assistida

Peça ao Claude Code:

```text
Instale a skill opus-5-5-converter deste repositório em ~/.claude/skills:
https://github.com/oalanicolas/skills/tree/main/opus-5-5-converter
```

Depois, use:

```text
/opus-5-5-converter converta o system prompt do agente que roda de madrugada no nosso pipeline de CI. Ele está em prompts/nightly-agent.md.
```

### Princípio

Subtrair antes de somar. Cada mudança cita uma regra. Blocos canônicos entram literalmente, só onde a classe do prompt pede. Rodar o prompt original no Opus 5.5 antes de editar qualquer coisa.

Verificada contra a documentação oficial em 2026-09-23. O Opus 5.5 foi lançado em 2026-09-22.

## Catalog

- [Studio Lendário](studio-lendario/SKILL.md): improve an existing audiovisual setup.
- [Opus 5.5 Converter](opus-5-5-converter/SKILL.md): adapt prompts and agent instructions.
- [AI-first Company Diagnostic](ai-first-company-diagnostic/SKILL.md): audit Brain, Skills, Agents, Factory, Loop and Growth; rank three profit-per-human-hour pilots.

## Free Diagnostic & Next Step

Use the free [AI-first Company Diagnostic](ai-first-company-diagnostic/SKILL.md) to create an executive readiness report from your own evidence and economic assumptions. It runs locally with Node.js and collects no contact details.

```sh
node ai-first-company-diagnostic/scripts/score-company.mjs --input company.json --out report.md --json
```

The skill includes the input schema and an explicitly illustrative example. The report shows a maturity bar, evidence gaps and three ranked pilots, with estimated returns separated from actual results.

For the advanced next step with the Academia Lendária & Synkra AIOX ecosystem, [explore the public AIOX project](https://github.com/SynkraAI/aiox-core?utm_source=skills&utm_medium=readme&utm_campaign=free_diagnostic). Set `--cta-url` to an approved HTTPS booking or opt-in destination to prepare your own funnel; UTM values are configurable. The default link is a project page, not a booking service. No form, outreach or automatic transmission is included.

## Licença

MIT.
