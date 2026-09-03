# OBS, captura, formatos e sincronização

## Antes de alterar

- Confirmar versão do OBS, sistema operacional, câmera, captura e encoder disponível.
- Fechar a gravação em andamento.
- Fazer backup de perfil e coleção de cenas antes de editar arquivos ou automações.
- Não presumir que um caminho de menu permanece igual entre versões.

## Cadeia de sinal

Mapear:

```text
câmera/celular → cabo/USB → captura/porta → fonte do OBS → canvas → encoder → container → editor/publicação
microfone → pré/interface/mesa → driver/dispositivo → fonte do OBS → processamento → trilha
```

Qualquer elo pode limitar resolução, fps, bit depth, chroma, latência ou estabilidade.

## Configuração de vídeo

- Fazer fonte e canvas corresponderem ao objetivo real.
- Usar fps constante e sustentável.
- Confirmar as propriedades negociadas pela fonte de captura.
- Preferir encoder por hardware quando ele oferece estabilidade e qualidade adequadas.
- Entender a escala do controle de qualidade daquele encoder; “CRF” não tem semântica idêntica em todas as implementações.
- Fazer teste de 60 segundos com movimento, voz e monitoramento de dropped frames/overload.
- Validar resolução, fps e codec no arquivo gerado.

Criar perfis separados para HD e 4K quando o usuário precisar dos dois. Nomear explicitamente resolução, fps e finalidade.

## Container e codec

- **Container** organiza streams e metadados: MKV, MP4 e MOV.
- **Codec** comprime áudio/vídeo: H.264, HEVC, AV1, ProRes, AAC, ALAC e outros.
- **Remux** troca container sem recodificar quando os streams são compatíveis.
- **Transcode** decodifica e recodifica, podendo alterar qualidade e tamanho.

Não dizer que MKV tem imagem melhor que MP4. O valor do MKV no OBS é principalmente recuperação após interrupções e flexibilidade. Hybrid MP4/MOV pode oferecer recuperação e compatibilidade em versões recentes. Verificar editor e versão antes de escolher.

HEVC costuma oferecer boa relação qualidade/tamanho, mas H.264 tem compatibilidade ampla. AV1 e ProRes dependem de encoder, editor, armazenamento e finalidade. Escolher pela cadeia completa.

## Áudio no OBS

- Manter 48 kHz ao longo da cadeia de vídeo.
- Evitar fontes duplicadas.
- Planejar trilhas para master, segurança e edição.
- Usar codec lossless quando houver motivo e compatibilidade; isso não corrige captação ruim.
- Conferir se monitoramento não cria eco ou loop.

## Sincronização

### Offset constante

O intervalo entre gesto e som permanece aproximadamente igual no começo e no final. Corrigir com delay positivo na fonte que chega antes ou com ajuste equivalente no editor.

### Drift

O intervalo cresce ou diminui ao longo do tempo. Delay fixo não resolve. Investigar clocks diferentes, fps variável, sample rate, conversões, fonte instável ou frames perdidos.

### Teste

1. Gravar palma seca e visível no começo.
2. Para clipe longo, repetir perto do final.
3. Examinar quadro a quadro o contato das mãos.
4. Comparar com o início do transiente na forma de onda.
5. Ajustar em pequenos passos.
6. Regravar e validar começo e fim.

Não estimar “100 ms” ou “200 ms” por sensação se o arquivo permite medir. Recalibrar após trocar conexão, captura, porta, resolução, processamento ou dispositivo de áudio.

## HDMI OUT da captura

Em placas com passthrough, a saída HDMI normalmente replica o sinal para monitor/TV com baixa latência. Ela não é necessária para o OBS receber o vídeo via USB. Confirmar no manual do modelo antes de prometer resolução, HDR ou taxa de atualização do passthrough.

## Teste de confiabilidade

Antes de gravação importante:

- gravar duração representativa;
- observar temperatura e alimentação da câmera;
- confirmar espaço em disco;
- revisar começo, meio e fim;
- conferir áudio em ambos os canais/trilhas;
- simular o fluxo de remux e edição;
- manter gravação interna de segurança quando possível e útil.
