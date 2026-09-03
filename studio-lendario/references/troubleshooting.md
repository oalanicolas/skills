# Troubleshooting por sintoma

## Imagem parece webcam ou lavada

Possíveis causas: luz frontal sem direção, fill excessivo, AWB/exposição automática, pouco contraste entre pessoa e fundo, nitidez/processamento agressivo.

Teste decisivo: desligar preenchimentos, manter uma key lateral, travar exposição/WB e comparar o mesmo frame.

## Testa ou bochecha estourando

Possíveis causas: exposição alta, hotspot da key, pele especular, luz pequena/direta, zebras mal configuradas.

Teste decisivo: proteger highlights na câmera e fazer feathering/reposicionar a key. Confirmar textura no arquivo original.

## Sombra perdeu dramaticidade

Possíveis causas: fill, monitor, parede clara ou luz do cenário rebatendo no rosto.

Teste decisivo: apagar cada fonte suspeita separadamente ou inserir negative fill. Manter a key constante.

## Reflexo no óculos

Possíveis causas: softbox, monitor, janela ou LEDs no ângulo especular.

Teste decisivo: exibir tela escura e reduzir brilho; depois mover/elevar uma fonte por vez observando o reflexo.

## 4K parece travado

Possíveis causas: fonte em 15 fps, porta/cabo limitado, conversão, encoder sobrecarregado ou preview com atraso.

Teste decisivo: verificar fps negociado e arquivo final. Comparar 1080p30 e 4K30 reais com movimento de mãos.

## Imagem boa parada, ruim em movimento

Possíveis causas: fps baixo, shutter inadequado, dropped frames, bitrate/encoder insuficiente ou foco oscilando.

Teste decisivo: movimento repetível com monitoramento de frames e inspeção do arquivo.

## Voz sem corpo

Possíveis causas: microfone distante, eixo incorreto, HPF/EQ excessivo, efeito de proximidade ausente ou cancelamento por duplicação.

Teste decisivo: comparar distâncias e ângulos sem mudar processamento; verificar fontes duplicadas.

## Voz com ruído ao aumentar ganho

Possíveis causas: microfone distante, pré limitado, cabo/entrada, ruído ambiente ou processamento elevando o piso.

Teste decisivo: aproximar a voz, desligar processamento, testar silêncio e outro cabo/entrada antes de recomendar booster.

## Som atrasado em relação à boca

Possíveis causas: processamento da mesa, captura de vídeo, buffers e caminhos diferentes.

Teste decisivo: palma e waveform. Medir começo e fim antes de aplicar delay.

## Sincroniza no começo e desvia depois

Possíveis causas: drift de clock, fps variável, sample rate ou frames perdidos.

Teste decisivo: palmas separadas por vários minutos e comparação do erro. Não usar apenas offset fixo.

## Cor muda durante a fala

Possíveis causas: AWB, autoexposição, luz externa ou monitores mudando conteúdo.

Teste decisivo: travar WB/exposição e usar conteúdo constante nos monitores.

## Fundo chama mais atenção que o rosto

Possíveis causas: práticas clipadas, RGB saturado, objetos claros, excesso de detalhe ou composição tangente.

Teste decisivo: reduzir ou reposicionar uma prática/objeto por vez, mantendo exposição do rosto.

## Resultado não se repete no dia seguinte

Possíveis causas: luz externa, marcas ausentes, automações, zoom/foco, cadeira, roupa e WB.

Teste decisivo: checklist com posições marcadas, parâmetros fixos e frame aprovado lado a lado.
