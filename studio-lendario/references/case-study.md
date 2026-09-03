# Estudo de caso: do setup carregado ao resultado aprovado

## Contexto

Talking head/podcast num escritório doméstico com Sony A7 IV, lente 24–70 mm f/2.8, SM7B, RØDECaster Pro II, placa NZXT Signal 4K30, OBS, uma luz COB com softbox e luzes cenográficas.

Este caso demonstra o método. Os números pertencem ao ambiente testado e não são presets universais.

## Baseline antigo

- câmera observada em 1080p30, 1/60, f/5.6, ISO 3200 e WB 3600 K;
- diversas fontes iluminando rosto e fundo;
- 4K via USB limitado a 15 fps, com movimento entrecortado;
- áudio percebido inicialmente como pouco encorpado e depois com atraso A/V;
- reflexos de monitores e equipamentos no óculos.

## Descobertas

1. A abertura e a iluminação permitiram reduzir ISO e melhorar separação do fundo.
2. 4K15 tinha mais detalhe parado, porém cadência inadequada para fala e gestos.
3. HDMI por placa de captura permitiu 4K30 estável na cadeia testada.
4. O SM7B funcionou sem booster porque a RØDECaster ofereceu ganho suficiente com baixo ruído.
5. Retirar o fill e a luz de cabelo produziu o contraste dramático preferido.
6. Reduzir intensidade e reposicionar a key preservou textura da testa sem eliminar a sombra.
7. Monitores e LEDs, não apenas o softbox, contribuíam para reflexos no óculos.
8. A cadeia exigiu delay de áudio próximo de 200 ms, medido para aquele caminho específico.
9. MKV foi escolhido por segurança; HEVC e seus parâmetros determinaram compressão, não a extensão.

## Configuração final aprovada naquele ambiente

### Imagem

- Sony A7 IV em modo manual;
- HDMI 3840 × 2160, 30 fps;
- 1/60 s, f/3.2, ISO 1250;
- WB 4000 K fixo;
- Creative Look ST, Picture Profile Off e DRO Off;
- AF-C, assunto humano e prioridade de rosto/olhos;
- SteadyShot Off em tripé.

### Luz

- uma CL60 com softbox de 60 cm iluminando o rosto;
- aproximadamente 4100 K e 10%;
- posição próxima de 45° à direita e acima dos olhos;
- fill lateral e recorte de cabelo desligados;
- parede escura funcionando como negative fill;
- ciano e luminária quente usados apenas como cenário.

### Áudio

- SM7B → XLR → RØDECaster Pro II → USB → OBS;
- ganho próximo de 61 dB naquele canal e voz;
- phantom power desligado;
- sem Cloudlifter/Dynamite;
- microfone próximo, levemente fora do jato direto de ar;
- áudio 48 kHz/24-bit na cadeia de gravação.

### OBS

- 3840 × 2160, 30 fps;
- Apple VideoToolbox HEVC por hardware;
- controle de qualidade exibido como CRF 70 naquela versão/encoder;
- keyframe de 2 s, B-frames e BT.709 em faixa parcial;
- MKV para captura segura e remux quando necessário;
- compensação aproximada de +200 ms no canal de voz.

## Princípios transferíveis

- Copiar a função das peças, não a marca nem o número.
- Mais luzes não significam imagem melhor.
- A relação entre key e fill cria a sombra; baixar a key não a apaga automaticamente.
- Estabilidade de movimento vence resolução nominal.
- Proximidade e sala importam mais que acessórios caros no áudio.
- A cadeia completa precisa sustentar o formato anunciado.
- A configuração só é final quando um teste real é aprovado e registrado.
