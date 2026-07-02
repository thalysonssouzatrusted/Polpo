# Polpo — Design System
**Capturado de praboni.github.io/Polpo · v1.2 · mai 2026**
*Construído pelo Paulo (co-fundador). Base para Claude Design.*

---

## 1. Identidade & Voz

### Nome e símbolo
- **Marca:** Polpo (polvo em italiano)
- **Glifo de marca:** 蛸 (kanji japonês para polvo) — usado como logotipo e como divisor de seção
- **Versão:** v1.2 · interno
- **Tom do documento:** "Apresentação a sócios" — denso, direto, sem marketing vazio

### Personalidade visual
O site é um **documento de produto vivo**, não um site marketing. A linguagem visual é editorial e técnica ao mesmo tempo: pensa num relatório interno da Stripe ou do Linear, mas adaptado ao universo brasileiro de food service.

**Princípio de design central:** Texto como design. Os títulos são poesia. Os dados são argumentos. Nada é decoração.

---

## 2. Paleta de Cores

### Fundo
| Papel | Valor | Uso |
|---|---|---|
| Background primário | `#0A0A08` (near-black) | Fundo de toda a página |
| Background de seção | `#111110` | Seções alternadas / cartões |
| Background de card | `#1A1A17` | Cards de produto (WhatsApp mock, Polpo Web mock) |

> **Nota do Paulo:** O site usa fundo quase-preto com texto claro — dark mode como padrão, nunca como variante.

### Texto
| Papel | Valor | Uso |
|---|---|---|
| Primário | `#E8E6DE` (off-white quente) | Corpo de texto principal |
| Secundário | `#9C9A92` | Labels, metadados, eyebrows |
| Terciário | `#5C5A54` | Divisores, placeholders |
| Destaque / Bold inline | `#F5F3EA` | Itens em negrito dentro do texto |

### Cor de acento
| Papel | Valor | Uso |
|---|---|---|
| Acento primário | `#C8A96E` (ocre dourado) | Números grandes, destaques, hover |
| Acento quente | `#D4855A` (terracota) | CTAs secundários, badges de status |
| Verde sucesso | `#5A8A5A` | Valores positivos, deltas positivos |
| Vermelho atenção | `#8A4A4A` | Alertas, deltas negativos |

### Separadores e bordas
- Linha horizontal: `1px solid rgba(255,255,255,0.08)` — quase invisível
- Borda de card: `0.5px solid rgba(255,255,255,0.12)`

---

## 3. Tipografia

### Hierarquia
O site usa uma escala tipográfica agressiva com saltos grandes entre níveis. Funciona como um **documento de imprensa de alta qualidade**.

| Nível | Tamanho aprox. | Peso | Uso |
|---|---|---|---|
| Display hero | 64–80px | 300 (light) | Headline da seção Home |
| H1 de capítulo | 48–56px | 300–400 | Título de cada aba |
| H2 de seção | 36–44px | 300 | Subtítulos principais |
| H3 de bloco | 24–28px | 400–500 | Títulos de cards, features |
| Body | 16–18px | 400 | Corpo de texto corrido |
| Label / Eyebrow | 11–13px | 500 | Metadados, labels ALL CAPS com letter-spacing |
| Mono / Dado | 14–16px | 400–500 | Números, estatísticas, valores |

### Família de fonte
**Inferência do visual:** A fonte principal parece ser uma **sans-serif grotesca de alta qualidade** — provavelmente `Inter`, `Geist`, ou similar. Os títulos usam peso muito leve (300) em tamanho grande, o que dá a impressão de elegância editorial.

Para implementar com fidelidade:
```css
--font-display: 'Inter', 'Geist', system-ui;
--font-body: 'Inter', system-ui;
--font-weight-display: 300;
--font-weight-heading: 400;
--font-weight-body: 400;
--font-weight-bold: 500;
```

### Características tipográficas marcantes
- **Letter-spacing amplo em labels:** `0.12em` ou mais nos eyebrows
- **Line-height generoso:** `1.15` nos displays, `1.6` no body
- **Negrito com moderação:** `**bold**` em inline é used para dados e termos-chave, nunca para chamar atenção estética
- **Itálico para conceitos:** *italics* marcam conceitos fundadores, citações, e frases de efeito

---

## 4. Layout & Grid

### Estrutura geral
- **Layout:** Full-page vertical scroll, seções de tela cheia (100vh ou similar)
- **Largura máxima de conteúdo:** ~960–1100px, centrado
- **Padding lateral:** 40–80px em desktop

### Padrões de layout por tipo de seção

#### Hero (texto puro)
```
[eyebrow label pequeno]
[H1 em 3 linhas, peso leve]
[parágrafo de 2–3 linhas]
```
Sem imagens no hero. **O texto é o visual.**

#### Dados + prova (seção de problema)
```
[H2 de impacto]
[grid 2–3 colunas de métricas grandes]
[fonte em label]
```
Números como `80%`, `1,38mi`, `R$ 455 bi` — gigantes, acento dourado, label minúsculo abaixo.

#### Card de produto (mockup inline)
```
[label de seção: "01 WhatsApp · O canal"]
[card dark com conteúdo simulado]
[descrição breve à direita ou abaixo]
```

#### Tabela comparativa
Duas colunas lado a lado com título diferenciado. Nenhuma usa bordas pesadas — divisão por cor de fundo sutil.

#### Timeline / steps
```
[PASSO 01] [título] [duração]
[PASSO 02] ...
```
Linha vertical conectando passos (thin, cor terciária).

### Navegação
- Navbar fixa no topo, minimal
- Links com número + nome: `01Home`, `02Produto`, `03Equipe`...
- Logo em texto: `polpo` em minúsculas, sem ícone
- Versão + status em canto: `蛸 v1.2 · interno · mai 2026`

---

## 5. Componentes

### Eyebrow (label de seção)
```
[glifo japonês] + texto descritivo
ex: 興 Nosso propósito
ex: 問 O problema · em quatro atos
```
Glifos variam por seção e carregam significado (興=florescer, 問=questionar, 時=momento, etc.)

### Card de número / métrica
- Número grande em destaque (acento dourado ou branco)
- Label de fonte abaixo em 11px, opacidade baixa
- Sem borda, fundo levemente mais claro que o bg

### Card de feature (Polpo Start / Deploy)
```
[label A ou B com letra grande]  [badge de inspiração]
[nome do produto]
[lista numerada de agentes]
[preço]
```

### Tag / badge
- `Polpo Start` / `Polpo Deploy`
- Background transparente com borda sutil
- Texto pequeno, sem caps-lock

### Linha do tempo (onboarding)
- Steps numerados em sequência
- Cada step: número + título + tempo + descrição breve
- Linha vertical fina conectando

### Mockup de WhatsApp
- Fundo cinza-escuro simulando tela
- Mensagens com avatar circular (inicial da letra)
- Interface realista com barra de status, nome do grupo, ícones
- Tipo de fonte: sistema / sans-serif leve

### Mockup da Polpo Web
- Interface de dashboard minimalista
- Sem widgets coloridos — tudo em prosa + números inline
- Score como barra de progresso + número grande
- Tabelas de dados sem bordas pesadas (linhas finas)
- Timeline "O time hoje" com timestamps e avatares

### Diagrama de arquitetura
- Layout hub-and-spoke
- Texto denso com labels de função
- Nenhum ícone, apenas texto e linhas
- Estrutura em camadas: `USER → ORQUESTRADOR → AGENTES → SUB-AGENTES`

---

## 6. Motion & Micro-interações

**Princípio:** Sem animações decorativas. Se mover, é para comunicar estado.

- Transição de seção: fade suave ou nenhuma
- Hover em link de navegação: sublinhado aparece
- Scroll-reveal implícito na estrutura (conteúdo denso pagina-por-seção)

---

## 7. Copywriting & Voz

### Características da voz
- **Direta:** Frases curtas. Verbos fortes. Sem adjetivos vagos.
- **Técnica sem ser fria:** "LangGraph supervisor com MCP" ao lado de "o dono dorme tranquilo"
- **Narrativa em atos:** A seção de problema é literalmente "Ato 01, Ato 02, Ato 03, Ato 04"
- **Emocional com precisão:** "Cansa. Quebra." é mais poderoso que "enfrenta dificuldades operacionais"

### Padrões de copy
| Padrão | Exemplo |
|---|---|
| Headline em 3 linhas quebrando intencionalmente | "Todo dono de restaurante / já sonhou em ter / mais braços." |
| Dado + fonte minúscula | `80%` quebram em 2 anos · Sebrae · Abrasel |
| Frase de impacto final | "Até agora." / "Agora dá." |
| Metáfora técnica humanizada | "O polvo tem nove cérebros. Um central. Oito nos braços." |
| Comparação precisa com dado | "27× menor" |

### Labels de seção (padrão)
```
[número 01–06] [descrição] · [capítulo]
```
Ex: `01 Documento de produto · sócios internos · maio 2026`

---

## 8. Os 8 Agentes (identidade visual individual)

Cada agente tem nome, área e personalidade próprias. Essenciais para componentes de contato e timeline:

| Agente | Área | Letra |
|---|---|---|
| Polpo | Orquestrador / maestro | P |
| Camila | Recebíveis / conciliação iFood | C |
| Sofia | Fiscal / SEFAZ / contador | S |
| Regina | Contas a pagar / fluxo | R |
| Giana | Ponto e folha | G |
| Ricardo | Margem / CMV / cardápio | R |
| Bento | Compras / fornecedores | B |
| Clara | Estoque / operação | C |
| Nina | Clientes | N |

---

## 9. Tokens de Design (para implementação)

```css
:root {
  /* Cores */
  --color-bg: #0A0A08;
  --color-bg-section: #111110;
  --color-bg-card: #1A1A17;
  --color-text-primary: #E8E6DE;
  --color-text-secondary: #9C9A92;
  --color-text-tertiary: #5C5A54;
  --color-accent-gold: #C8A96E;
  --color-accent-terra: #D4855A;
  --color-success: #5A8A5A;
  --color-danger: #8A4A4A;
  --color-border: rgba(255,255,255,0.08);
  --color-border-card: rgba(255,255,255,0.12);

  /* Tipografia */
  --font-sans: 'Inter', 'Geist', system-ui, sans-serif;
  --font-size-display: clamp(48px, 7vw, 80px);
  --font-size-h1: clamp(36px, 5vw, 56px);
  --font-size-h2: clamp(28px, 4vw, 44px);
  --font-size-h3: clamp(20px, 2.5vw, 28px);
  --font-size-body: 17px;
  --font-size-label: 12px;
  --font-weight-thin: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --line-height-display: 1.1;
  --line-height-heading: 1.2;
  --line-height-body: 1.65;
  --letter-spacing-label: 0.1em;

  /* Layout */
  --max-width: 1080px;
  --padding-section: 80px 48px;
  --padding-card: 28px 32px;
  --gap-grid: 24px;
  --border-radius-card: 12px;
  --border-radius-badge: 6px;
}
```

---

## 10. O Elemento Assinatura

O elemento que torna o Polpo inconfundível visualmente:

> **Glifos japoneses como divisores de capítulo.**
> 蛸 · 興 · 問 · 時 · 門 · 学 · 始 · 製 · 組 · 城 · 道 · 案

Cada um tem um significado relacionado ao tema da seção. Aparecem em destaque antes do título de cada capítulo e no "carimbo" final de cada seção (ex: `始 POLPO · HOME CAPÍTULO 01 · SÃO PAULO · 23°S 46°W`).

Esse uso de kanji não é ornamental — é um **sistema de identidade visual paralelo** que comunica seriedade, internacionalidade e profundidade de pensamento sem uma única palavra em inglês.

---

## 11. Referências Visuais Citadas pelo Paulo

- **Ramp (dashboard)** — inspiração para Polpo Web: prosa, não widgets
- **Poke (Interaction Co, YC)** — WhatsApp-first, descoberta antes da pergunta
- **Flowscope (YC S26)** — consultoria agêntica como produto
- **Toast** — playbook SaaS→fintech
- **Duolingo** — gamificação da trilha de aprendizado

---

*Documento gerado automaticamente a partir de praboni.github.io/Polpo em jun 2026.*
*Use como briefing de entrada para Claude Design / Figma.*
