# Modos e Studio Gate

Use esta referência quando o usuário invocar um modo, pedir refinamento estético ou quando for necessário decidir se a base técnica está pronta.

## Contrato comum

Para qualquer modo:

1. identificar objetivo, restrições e equipamento disponível;
2. listar somente as evidências necessárias;
3. separar **Confirmado**, **Provável** e **Preferência**;
4. escolher a mudança reversível de maior impacto;
5. alterar uma variável por teste;
6. validar o arquivo resultante;
7. registrar decisão, número específico do setup e condição para recalibrar.

Se o usuário pedir apenas análise, não alterar arquivos, aplicativos ou dispositivos. Se pedir configuração, preservar backup e estado anterior.

## Modos de diagnóstico

### `audit`

**Entrada mínima:** objetivo, foto ampla ou descrição do ambiente, amostra original e configurações conhecidas.

**Ação:** mapear visual, luz, voz, captura, sincronização, segurança e consistência. Ordenar gargalos por impacto, custo, reversibilidade e dependência.

**Saída:** inventário confirmado, achados por camada, maior gargalo, primeira mudança gratuita e teste decisivo.

### `critique`

**Entrada mínima:** arquivo ou frame específico e objetivo da gravação.

**Ação:** avaliar a peça entregue sem transformar preferência estética em defeito técnico. Comparar com referência apenas quando as condições forem equivalentes ou a diferença for declarada.

**Saída:** o que funciona, o que limita, evidência observável e uma próxima ação.

## Modos de base técnica

### `calibrate`

**Entrada mínima:** baseline e cadeia completa conhecida.

**Ação:** corrigir primeiro erros que contaminam todas as decisões posteriores. Percorrer composição, luz, câmera, voz, captura e sincronização somente até a base ficar previsível.

**Saída:** itens corrigidos, itens ainda bloqueantes e estado do Studio Gate.

### `camera`

**Entrada mínima:** modelo do dispositivo, lente quando existir, formato de saída e frame atual.

**Ação:** ajustar exposição, obturador coerente com fps, abertura, ISO, balanço de branco, foco, estabilização e saída limpa conforme o controle disponível.

**Saída:** configuração atual, mudança proposta, motivo, risco e teste de movimento, foco e highlights.

### `light`

**Entrada mínima:** foto ampla mostrando fontes e um frame no lugar real de gravação.

**Ação:** definir direção, tamanho aparente, distância, contraste, negative fill, recorte, fundo e reflexos. Começar reposicionando ou desligando fontes antes de adicionar equipamentos.

**Saída:** mapa funcional de luzes, uma mudança por rodada e sinais para avaliar pele, olhos, sombra e separação.

### `voice`

**Entrada mínima:** áudio original com silêncio, fala normal e fala forte; distância e cadeia do microfone.

**Ação:** priorizar posição, proximidade, sala e ganho antes de equalização ou redução de ruído. Processar com moderação e evitar cadeias duplicadas.

**Saída:** diagnóstico de captação, níveis observados quando mensuráveis, cadeia proposta e comparação auditiva controlada.

### `capture`

**Entrada mínima:** destino, capacidade da câmera/celular, placa, computador, perfil do OBS e arquivo gravado.

**Ação:** alinhar resolução, fps, espaço de cor, encoder, qualidade, container, trilhas e remux. Preferir estabilidade e recuperação à especificação nominal.

**Saída:** perfil de gravação ou live, justificativa de codec/container, teste de estresse e condição para reduzir carga.

### `sync`

**Entrada mínima:** clipe com evento audiovisual nítido no começo e no fim.

**Ação:** medir separadamente offset constante e drift. Aplicar atraso fixo somente para offset constante e investigar relógios, fps ou amostragem quando houver drift.

**Saída:** diagnóstico, medição quando possível, correção aplicada e validação no começo e no fim.

## Modos de refinamento estético

Estes modos exigem Studio Gate `APROVADO` ou aceitação explícita de um item `NÃO VERIFICÁVEL`.

### `polish`

Refinar detalhes sem alterar a intenção central. Procurar pequenas distrações, inconsistências, reflexos, ruído residual, enquadramento e acabamento de cor ou som.

### `cinematic`

Traduzir uma referência em relações controláveis: direção e razão de luz, profundidade, contraste, paleta, distância focal, movimento e textura. Não copiar números ou marcas da referência.

### `bolder`

Aumentar presença e hierarquia por contraste, separação, cor, proximidade e enquadramento. Proteger pele, inteligibilidade e segurança antes de intensificar o look.

### `quieter`

Reduzir competição visual e sonora. Remover ou atenuar fontes, objetos, cores, reflexos, processamento e informação que não servem ao objetivo.

Para os quatro modos, a saída deve conter: intenção em uma frase, três mudanças ordenadas, teste A/B e limite que não deve ser ultrapassado.

## Modos de operação

### `live`

Conduzir uma rodada por vez. Dar uma instrução curta, dizer o que manter igual, aguardar nova evidência e comparar com o baseline. Não acumular uma lista de ajustes enquanto o usuário opera câmera, luz ou software.

### `lock`

Executar somente depois da aprovação do usuário. Registrar modelos confirmados, valores, posições, fotos de referência, arquivos aprovados, checklist e gatilhos de recalibração. Valores pertencem ao setup, não viram regra universal.

### `teach`

Transformar o processo em material transferível. Separar princípio universal, decisão específica do caso, evidência, erro evitado e alternativa para celular, webcam ou orçamento limitado. Ensinar o método, não vender a lista de equipamentos.

## Combinação e precedência

- `audit` pode abrir qualquer trabalho quando o gargalo é desconhecido.
- `critique` avalia uma amostra; não substitui `audit` quando o problema está na cadeia.
- `calibrate` coordena os modos técnicos necessários para o Studio Gate.
- `camera light` é útil quando exposição e direção da luz estão acopladas.
- `capture sync` é útil quando atraso pode nascer da placa, OBS, fps ou áudio.
- `live` muda a cadência de qualquer modo para instrução, teste e retorno.
- `lock` encerra o ciclo; qualquer alteração física ou técnica relevante reabre a calibração.
- `teach` só deve ser aplicado depois que fatos e preferências do caso estiverem separados.

Quando modos conflitarem, segurança e base técnica têm precedência sobre estética.

## Studio Gate detalhado

Marcar cada item como `APROVADO`, `REPROVADO`, `NÃO APLICÁVEL` ou `NÃO VERIFICÁVEL`:

- pele e highlights preservados;
- olhos em foco durante uso real;
- balanço de branco estável;
- fps constante e sem frames perdidos relevantes;
- flicker não perceptível;
- áudio sem clipping, duplicação ou bombeamento destrutivo;
- voz inteligível e ruído controlado;
- sincronização conferida no início e no fim;
- arquivo gravado em container seguro e reproduzível;
- montagem física, energia, calor e cabos seguros.

Resultado geral:

- qualquer `REPROVADO`: Studio Gate `REPROVADO`;
- nenhum reprovado, mas existe item relevante `NÃO VERIFICÁVEL`: Studio Gate `NÃO VERIFICÁVEL`;
- todos os itens relevantes aprovados ou não aplicáveis: Studio Gate `APROVADO`.

## Antipadrões bloqueados

- aplicar LUT para esconder exposição ou balanço de branco incorretos;
- aumentar resolução para compensar fps instável ou motion blur inadequado;
- equalizar agressivamente uma voz captada longe;
- usar redução de ruído para ignorar ganho ou acústica ruins;
- corrigir drift com atraso fixo;
- adicionar fill quando o objetivo pede contraste e negative fill;
- recomendar compra antes de provar o limite do equipamento disponível;
- aprovar pelo preview sem abrir o arquivo gravado.
