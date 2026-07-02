# Roteiro de Pesquisa — Wizard-of-Oz WhatsApp
## Polpo · Validação de Tentáculo · v1

**Status:** Draft para aprovação do Paulo  
**Objetivo:** Validar qual dos três tentáculos (Delivery, Conciliação, CMV) ressoa como dor prioritária para donos de restaurante — e se o operador consegue interagir via interface de chat.  
**Formato:** Conversa conduzida pelo agente Léo no WhatsApp. O operador nunca sabe que é um roteiro.  
**Duração estimada:** 8–12 minutos de conversa assíncrona  
**Critério de go:** ≥ 6/10 restaurantes retornam espontaneamente após o primeiro contato.

---

## Premissas do roteiro

- Cada pergunta é uma mensagem separada — nunca bloco de texto longo.
- O agente espera a resposta antes de avançar. Não dispara a próxima pergunta automaticamente.
- Respostas abertas são preferidas às de múltipla escolha — o que o operador verbaliza espontaneamente é o dado.
- Se o operador divergir do fluxo (contar algo não previsto), o agente acompanha e registra. Não força retorno ao roteiro.
- O agente nunca menciona "pesquisa", "validação" ou "formulário".

---

## Fluxo Principal

### BLOCO 0 — Abertura e qualificação (não pulável)

> **[Léo]**  
> Oi! Sou o Léo, do Polpo. A gente ajuda donos de restaurante a entender melhor o backoffice — caixa, delivery, custo de prato.  
> Antes de te mostrar o que a gente faz, posso te fazer 3 perguntas rápidas sobre a sua operação?

*Aguarda confirmação. Se não responder em 24h → encerrar sem follow-up nesta janela.*

---

> **[Léo]**  
> Primeiro: você tem quantas unidades hoje?

**Dado coletado:** número de unidades  
**Segmentação:** 1 unidade / 2–3 / 4+  
**Nota:** Operadores com 4+ unidades são fora do ICP do MVP — registrar mas não aprofundar.

---

> **[Léo]**  
> E você opera delivery? iFood, Rappi, alguma outra plataforma?

**Dado coletado:** canais de delivery ativos  
**Ramificação:**  
- Sim → segue fluxo padrão  
- Não → pula BLOCO 2 (Delivery), vai direto para BLOCO 3 (Conciliação)

---

### BLOCO 1 — Diagnóstico de dor (aberto, sem indução)

> **[Léo]**  
> Me conta uma coisa: qual é o maior problema que você enfrenta hoje na gestão do restaurante? Pode ser qualquer coisa — operacional, financeiro, fornecedor, o que vier.

**Dado coletado:** dor espontânea, vocabulário do operador  
**O que observar:**
- Menciona delivery/iFood sem ser perguntado → sinal forte para tentáculo Delivery
- Menciona "não sei quanto recebo" / "maquininha" / "fechamento" → sinal para Conciliação
- Menciona "custo" / "cardápio" / "insumo subindo" / "margem" → sinal para CMV
- Menciona outro problema (RH, fornecedor, licença) → registrar, não é o ICP desta fase

**Instrução ao operador humano (Wizard):** não sugerir categorias, não completar a frase. Silêncio é dado.

---

> **[Léo]**  
> Faz sentido. E isso acontece com que frequência — você sente esse problema todo dia, toda semana, ou mais no fechamento do mês?

**Dado coletado:** frequência percebida da dor  
**Por que importa:** dores diárias têm maior potencial de hábito (relevante para Polpo Pay).

---

> **[Léo]**  
> Como você resolve hoje? Tem alguma ferramenta, planilha, alguém que cuida disso?

**Dado coletado:** solução atual (workaround), nível de maturidade operacional  
**O que observar:**
- "Resolvo na mão" / "não resolvo" → alta urgência, baixa sofisticação
- "Tenho planilha" → maturidade média, pode comparar com benchmark
- "Uso sistema X" → concorrência direta — registrar qual

---

### BLOCO 2 — Sondagem Delivery (só se opera delivery)

> **[Léo]**  
> Você sabe qual é a sua margem real por pedido no iFood — depois de comissão, taxa de entrega e promoção?

**Dado coletado:** consciência de margem  
**Resposta esperada A:** "Não sei exatamente" → alta relevância do tentáculo  
**Resposta esperada B:** "Sei sim, fica em torno de X%" → registrar o número, aprofundar abaixo  
**Resposta esperada C:** "Acho que sei" → aprofundar

---

> **[Léo]**  
> E cancelamento? Você costuma contestar os cancelamentos que chegam pelo app?

**Dado coletado:** awareness de disputa, comportamento atual  
**O que observar:**
- "Não sabia que dava contestar" → oportunidade de valor imediato (Léo)
- "Contesto às vezes" → conhece mas não tem processo
- "Contesto tudo" → operador avançado, talvez fora do ICP inicial

---

> **[Léo]**  
> Se você soubesse exatamente quais cancelamentos têm chance de recuperação — e quanto dinheiro está em aberto — você agiria diferente?

**Dado coletado:** disposição para agir com informação  
**Por que importa:** testa se o problema é de visibilidade (dado) ou de processo (hábito). Ambos são relevantes, mas têm implicações diferentes para o produto.

---

### BLOCO 3 — Sondagem Conciliação

> **[Léo]**  
> Outra coisa: você consegue conferir se tudo que o iFood, a maquininha e o PIX prometeram realmente caiu na sua conta?

**Dado coletado:** prática de conciliação  
**Resposta esperada A:** "Não, é muito difícil" → alta relevância  
**Resposta esperada B:** "Olho o extrato" → concilia de forma manual/incompleta  
**Resposta esperada C:** "Tenho sistema que faz isso" → registrar qual

---

> **[Léo]**  
> Quando você fecha o mês, você sabe dizer quantos reais de repasse ficaram por explicar — ou que chegaram diferente do esperado?

**Dado coletado:** impacto financeiro percebido da falta de conciliação  
**O que observar:** operador que responde com um número específico (mesmo estimado) tem consciência do problema. Operador que diz "não faço ideia" é lead quente para este tentáculo.

---

### BLOCO 4 — Sondagem CMV

> **[Léo]**  
> Agora me conta: você sabe qual é o custo real de cada prato que você vende hoje?

**Dado coletado:** consciência de CMV  
**Resposta esperada A:** "Tenho uma ideia, mas não exato" → maturidade média  
**Resposta esperada B:** "Não calculo" → oportunidade direta  
**Resposta esperada C:** "Tenho ficha técnica atualizada" → operador avançado

---

> **[Léo]**  
> Quando o preço de algum insumo sobe, você atualiza o preço do cardápio ou absorve o custo?

**Dado coletado:** comportamento de reação à inflação de custo  
**Por que importa:** quem absorve (maioria) está com margem comprimida sem saber. É o ponto de dor central do CMV.

---

> **[Léo]**  
> Você tem noção de qual prato da sua casa tem a menor margem hoje?

**Dado coletado:** profundidade da consciência de custo por item  
**O que observar:** quem não sabe responder, mas quer saber, é o ICP ideal para CMV.

---

### BLOCO 5 — Encerramento e ativação

> **[Léo]**  
> Valeu pela sinceridade — isso ajuda muito.  
> Com base no que você me contou, acho que consigo te mostrar algo útil em menos de 5 minutos.  
> Posso te mandar um resumo do que o Polpo faria pela sua operação?

**Dado coletado:** disposição para continuar a conversa (sinal de engajamento)  
**Se sim →** enviar resumo personalizado baseado no tentáculo que mais ressoou  
**Se não / sem resposta →** registrar como drop, não fazer follow-up imediato

---

> **[Léo]** *(após envio do resumo)*  
> Faz sentido com o que você vive no dia a dia?

**Dado coletado:** validação de fit problema–solução  
**Respostas a observar:**
- "Sim, exatamente" / variações → sinal forte
- "Mais ou menos" → aprofundar o que não ressoou
- "Não" → entender o porquê (problema errado? solução errada? timing?)

---

## Sinais de Qualificação por Tentáculo

| Sinal verbalizado pelo operador | Tentáculo primário | Tentáculo secundário |
|---|---|---|
| "Não sei minha margem no iFood" | Delivery | Conciliação |
| "Cancelamento me dá raiva" | Delivery | — |
| "O repasse não fecha" | Conciliação | Delivery |
| "Não sei o que cai na conta" | Conciliação | — |
| "Custo subiu mas não mexi no cardápio" | CMV | — |
| "Não sei o custo do prato" | CMV | — |
| "Caixa some mas não sei por quê" | CMV | Conciliação |
| "Tenho planilha mas não consigo manter" | Qualquer | — (maturidade média) |

---

## Dados a Registrar por Conversa

Para cada operador, registrar em planilha de validação:

| Campo | Tipo |
|---|---|
| ID do operador | Texto (anônimo) |
| Data do primeiro contato | Data |
| Número de unidades | Número |
| Opera delivery? | Booleano |
| Plataformas ativas | Lista |
| Dor espontânea (BLOCO 1, verbatim) | Texto livre |
| Frequência da dor | Diária / Semanal / Mensal |
| Solução atual | Texto livre |
| Tentáculo primário identificado | Delivery / Conciliação / CMV / Outro |
| Tentáculo secundário | Idem |
| Aceitou receber resumo? | Booleano |
| Respondeu ao fit check? | Booleano |
| Retornou espontaneamente? | Booleano + Data |
| Notas do operador (Wizard) | Texto livre |

---

## Critério de Retorno Espontâneo

Retorno espontâneo = operador inicia nova mensagem sem provocação do agente, dentro de 7 dias do encerramento do fluxo.

Não conta como espontâneo:
- Resposta a follow-up enviado pelo agente
- Resposta a broadcast/notificação
- Retorno após mais de 14 dias

Meta: ≥ 6/10 operadores com retorno espontâneo = sinal de go.

---

## Notas para o Wizard (operador humano)

- Você é o Léo. Responda sempre na voz do Léo (direta, rápida, sem floreio).
- Não explique o que o produto faz antes do BLOCO 5. Antes disso, só perguntas.
- Se o operador perguntar o preço, diga: "Ainda estamos definindo — o foco agora é entender se faz sentido pra você."
- Se o operador perguntar "como funciona", diga: "Deixa eu te mandar um resumo baseado no que você me contou — fica mais fácil do que explicar no geral."
- Registre o verbatim de respostas abertas. A linguagem do operador é o dado mais valioso.
- Nunca corrija o operador. Se ele usar um termo errado (ex: "fluxo de caixa" quando quer dizer "margem"), registre o termo dele — é como ele nomeia o problema.
