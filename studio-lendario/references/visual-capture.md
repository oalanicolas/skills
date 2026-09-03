# Imagem, câmera e iluminação

## Ordem de correção

1. composição e posição da câmera;
2. luz principal e luz ambiente;
3. exposição e WB;
4. foco e movimento;
5. fundo, práticas e recorte;
6. resolução, bit depth e perfil de imagem.

Não tentar compensar luz ruim com LUT, ISO extremo ou nitidez artificial.

## Composição

- Posicionar a lente próxima da altura dos olhos para talking head, salvo intenção diferente.
- Criar distância entre pessoa e fundo para separação e controle de sombras.
- Usar distância focal e distância física antes de zoom digital.
- Verificar linhas saindo da cabeça, objetos tangentes, encosto da cadeira e microfone cobrindo o rosto.
- Preservar espaço coerente com a direção do olhar.

## Iluminação por função

Começar com uma única key. Adicionar luz apenas quando houver função clara.

- **Key:** define exposição e modela o rosto.
- **Fill:** reduz o contraste criado pela key.
- **Negative fill:** remove rebatimento e aprofunda o lado sombreado.
- **Rim/hair light:** separa cabelo e ombro do fundo; não é obrigatória.
- **Practical/background:** cria profundidade e cor no cenário; não deve contaminar a pele por acidente.

Para visual dramático, aumentar a relação key-to-fill reduzindo fill ou usando material escuro. Diminuir a intensidade geral da key não elimina essa relação se o lado sombreado permanecer sem preenchimento.

## Teste da key

Usar ponto inicial lateral e levemente acima dos olhos. Ajustar ângulo e altura observando:

- textura da testa e bochecha;
- triângulo de luz no lado sombreado;
- sombra do nariz;
- catchlight nos olhos;
- reflexo no óculos;
- queda de luz sobre barba, roupa e fundo.

Se a testa clipar, proteger primeiro a exposição ou tirar o hotspot do rosto com posição/feathering. Reduzir potência não destrói automaticamente a sombra; o contraste depende da proporção entre os dois lados.

## Reflexos em óculos

Testar nesta ordem, uma variável por vez:

1. escurecer o conteúdo e reduzir o brilho dos monitores;
2. mover ou inclinar o monitor refletido;
3. elevar e inclinar a key para que a reflexão saia do ângulo câmera–óculos;
4. deslocar a key lateralmente e usar feathering;
5. ajustar levemente o óculos ou a posição do rosto, sem desconforto;
6. considerar polarizador apenas depois, pois ele pode custar luz e não elimina todos os reflexos.

LEDs de equipamentos também podem refletir. Preferir desligar ou atenuar apenas indicadores não essenciais conforme o manual, sem cobrir ventilação nem status de segurança.

## Exposição

- Proteger a pele e highlights especulares antes de clarear sombras.
- Usar zebras, waveform ou false color quando disponíveis; confirmar no arquivo.
- Escolher abertura pela profundidade de campo e tolerância ao movimento do usuário.
- Manter ISO manual quando a iluminação estiver controlada; usar auto ISO somente se a cena realmente variar.
- Tratar a regra de shutter de 180° como ponto inicial, não dogma. Para 30 fps, 1/60 é comum; flicker pode exigir 1/50, 1/60 ou ajuste fino.
- Testar LEDs em movimento e por alguns segundos; um frame estático não revela pulsação.

## Cor e perfil

- Travar WB depois de finalizar as luzes.
- Preferir WB customizado ou Kelvin consistente a AWB flutuante.
- Usar perfil padrão ou look direto quando o usuário não fará color grading.
- Usar log somente com exposição, bit depth e fluxo de cor adequados.
- Aplicar LUT de forma não destrutiva e somente depois de estabilizar exposição e WB.

## Foco e estabilidade

- Para talking head, priorizar rosto/olho quando a câmera oferecer detecção confiável.
- Testar se microfone, mãos ou objetos roubam o foco.
- Em tripé, desligar estabilização quando o fabricante recomendar; ela pode recortar ou criar movimento indesejado.
- Confirmar foco nos olhos em frame 100%, não apenas no preview pequeno.

## Smartphone

- Preferir câmera traseira principal; usar tele apenas com luz suficiente e distância adequada.
- Evitar ultrawide próximo do rosto quando a distorção não for intencional.
- Apoiar ou usar tripé.
- Bloquear exposição, foco e WB quando o aplicativo permitir.
- Reduzir a exposição até preservar pele e fontes práticas.
- Evitar desfoque artificial se ele recortar barba, óculos ou microfone de forma instável.
- Se houver aplicativo manual, controlar ISO, shutter, foco e WB sem pressupor que todos os modelos oferecem as mesmas opções.

## Captura e resolução

- Verificar o formato negociado em toda a cadeia: câmera → cabo → captura → porta → aplicativo.
- Preferir fps estável a resolução maior com movimento quebrado.
- Confirmar no arquivo final resolução, fps, dropped frames e duração.
- Não chamar uma saída de 10-bit ou 4:2:2 apenas porque a câmera suporta; a captura e o software também precisam preservar o sinal.
