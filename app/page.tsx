"use client";

import { useState, useRef, useEffect } from "react";
import { WaitlistForm } from "@/components/WaitlistForm";

interface ModuleData {
  title: string;
  shortDesc: string;
  subtitle: string;
  badge: string;
  details: string;
  visualData: React.ReactNode;
}

const MODULES: ModuleData[] = [
  {
    title: "01. Conciliação iFood",
    shortDesc: "Repasses e cancelamentos auditados.",
    subtitle: "Conferência automática centavo a centavo.",
    badge: "CONCILIAÇÃO",
    details: "Varremos a API do iFood e maquininhas diariamente. Se houver desvio de taxas ou cancelamentos indevidos, nós identificamos e reportamos para contestação.",
    visualData: (
      <div className="preview-terminal">
        <div style={{ color: "#a09e98", marginBottom: 12 }}>// Logs de conciliação ativa - Polpo Hub</div>
        <div style={{ color: "#27c93f", marginBottom: 6 }}>✔ API iFood conectada: 128 transações importadas.</div>
        <div style={{ color: "#ffbd2e", marginBottom: 6 }}>⚠ ALERTA: Pedido #8912 cancelado pelo cliente após despacho.</div>
        <div style={{ color: "#27c93f", marginBottom: 12 }}>➔ Contestação automática. Status: DEFERIDO.</div>
        <div style={{ borderTop: "1px solid #333", paddingTop: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
            <span>Valor recuperado:</span>
            <span style={{ color: "#27c93f", fontWeight: "bold" }}>R$ 42,90</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "02. CMV Dinâmico",
    shortDesc: "O preço real de cada prato.",
    subtitle: "Previsão exata de margens e custos.",
    badge: "ANÁLISE DE CUSTOS",
    details: "Suas fichas técnicas integradas com as notas de entrada. Você vê na hora como a alta do preço dos insumos impacta a margem real de cada prato.",
    visualData: (
      <div className="preview-terminal">
        <div style={{ color: "#a09e98", marginBottom: 12 }}>// Ficha Técnica Digital: Burger Clássico</div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span>Preço de Venda:</span>
          <span>R$ 38,90</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span>CMV Projetado:</span>
          <span style={{ color: "#27c93f" }}>28.4% (R$ 11,04)</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <span>CMV Real (Nota Fiscal):</span>
          <span style={{ color: "#ffbd2e" }}>31.2% (R$ 12,13)</span>
        </div>
      </div>
    ),
  },
  {
    title: "03. Alerta de Compras",
    shortDesc: "Aumentos de fornecedores monitorados.",
    subtitle: "O seu time de compras rodando no automático.",
    badge: "COMPRAS",
    details: "Monitoramos as notas fiscais emitidas para o seu CNPJ. Quando um fornecedor cobra mais caro por um produto recorrente, você recebe um alerta na hora pelo WhatsApp.",
    visualData: (
      <div className="preview-terminal">
        <div style={{ color: "#a09e98", marginBottom: 12 }}>// Histórico de Flutuação de Preço - Junho</div>
        <div style={{ marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "600" }}>
            <span>Tomate Italiano (kg)</span>
            <span style={{ color: "#ff5f56" }}>+36.9%</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#a09e98", marginTop: 2 }}>
            <span>Última NF: R$ 8,90/kg | Média: R$ 6,50/kg</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "04. Projeção de Caixa",
    shortDesc: "Previsão de saldo para 30 dias.",
    subtitle: "Evite surpresas com boletos e prazos.",
    badge: "FLUXO DE CAIXA",
    details: "Cruzamos o histórico de vendas com o vencimento dos seus boletos faturados. Criamos a projeção de saldo para os próximos 30 dias para você antecipar decisões.",
    visualData: (
      <div className="preview-terminal">
        <div style={{ color: "#a09e98", marginBottom: 12 }}>// Análise Preditiva de Fluxo de Caixa</div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span>Saldo hoje:</span>
          <span>R$ 14.200,00</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <span>Projeção (30 dias):</span>
          <span style={{ color: "#27c93f", fontWeight: "bold" }}>R$ 48.910,00</span>
        </div>
      </div>
    ),
  },
];

interface CapabilityData {
  num: string;
  title: string;
  highlight: string;
  desc: string;
  sources: string;
  integrations: string;
  logic: string;
}

const CAPABILITIES: CapabilityData[] = [
  {
    num: "01",
    title: "Operating Truth",
    highlight: "O dado financeiro produtivo.",
    desc: "Coleta automática de extratos bancários, adquirentes e iFood. O que entra e sai de verdade na conta, sem input manual.",
    sources: "Extratos bancários (OFX/PDF), APIs financeiras de cartões.",
    integrations: "Open Finance, APIs de cartões, iFood Developer API.",
    logic: "Conciliação diária exata entre vendas declaradas e valores efetivamente liquidados."
  },
  {
    num: "02",
    title: "Workflow Embedding",
    highlight: "O software entra onde o trabalho já acontece.",
    desc: "Toda a interface principal é o WhatsApp. Suas notas fiscais são enviadas tirando uma foto, e as dúvidas são respondidas em segundos.",
    sources: "Notas fiscais (OCR/XML), fotos de cupons, mensagens.",
    integrations: "WhatsApp Cloud API, OCR proprietário de Notas Fiscais.",
    logic: "Leitura automática de boletos e notas com classificação automática de contas a pagar."
  },
  {
    num: "03",
    title: "Engenharia de Contexto",
    highlight: "O modelo de dados do restaurante.",
    desc: "Mapeamento inteligente da taxonomia real de alimentação. Sabemos a diferença de CMV, custo fixo e despesa operacional.",
    sources: "Fichas técnicas de pratos, cadastros de insumos e categorias.",
    integrations: "Ontologia de Alimentos Polpo Hub, classificadores neurais.",
    logic: "Tratamento automático de insumos semelhantes em uma única unidade lógica."
  },
  {
    num: "04",
    title: "Feedback Loop",
    highlight: "O aprendizado proprietário.",
    desc: "A cada semana de operação rodando, o sistema aprende a sazonalidade do cardápio e o comportamento de preços dos fornecedores.",
    sources: "Histórico de compras aprovadas, variações sazonais de venda.",
    integrations: "Banco de dados histórico Polpo DB, modelos estatísticos.",
    logic: "Ajuste dinâmico de limites de tolerância para alertas de preço de compras."
  },
  {
    num: "05",
    title: "Compliance Dashboard",
    highlight: "A governança da operação.",
    desc: "Monitoramento contra desvios, erros de lançamento ou cancelamentos atípicos no caixa ou no iFood.",
    sources: "Logs de cancelamento do PDV, cancelamentos do iFood, reembolsos.",
    integrations: "API iFood Developer, conectores locais de sistemas de caixa.",
    logic: "Alerta automático se os cancelamentos no dia ultrapassarem 10% da média histórica."
  },
  {
    num: "06",
    title: "Cross-Customer Signal",
    highlight: "Inteligência de rede.",
    desc: "Sabemos se o preço dos insumos subiu no atacado da sua região ou se as taxas do iFood estão fora do padrão do mercado.",
    sources: "Dados agregados e anonimizados de compras de estabelecimentos da rede.",
    integrations: "Mecanismo de análise regional de dados Polpo Market Index.",
    logic: "Detecção de picos de preço regionais e sugestão automática de fornecedores."
  },
  {
    num: "07",
    title: "Embedded Fintech",
    highlight: "A infraestrutura de pagamentos + crédito.",
    desc: "Antecipação de recebíveis inteligente e linhas de crédito sob medida desenhadas para o seu fluxo de caixa real.",
    sources: "Previsão de vendas de cartões, fluxo de caixa futuro projetado.",
    integrations: "Parceiros bancários credenciados (BaaS), Plataforma de Recebíveis.",
    logic: "Cálculo em tempo real de taxas ideais de antecipação com base na saúde operacional."
  },
  {
    num: "08",
    title: "Velocidade Composta",
    highlight: "A melhoria contínua do produto e do negócio.",
    desc: "Sua operação melhora a gestão financeira em 1% a cada dia de forma silenciosa, rodando em background.",
    sources: "Ações de correção aplicadas pela equipe de conciliação Polpo Hub.",
    integrations: "Agendador de tarefas automatizadas e microsserviços internos.",
    logic: "Geração diária de balanço financeiro às 06:00 e atualização automática do caixa."
  }
];

export default function Home() {
  const [activeModule, setActiveModule] = useState(0);
  const [activeCap, setActiveCap] = useState<number | null>(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const scrolled = -rect.top;
      const totalScrollable = rect.height - windowHeight;
      
      let progress = scrolled / totalScrollable;
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("cadastro-waitlist");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <main className="fade-in-entry">
        {/* SEÇÃO 1: Hero Text (Normal Flow) */}
        <section className="section" style={{ paddingTop: "120px", paddingBottom: "40px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <div className="hero-hook reveal reveal-up" style={{ paddingBottom: "10px", position: "relative" }}>
              <img src="/Polpo/avatar-polpo-svg.svg" alt="Polpo" className="floating-avatar" />
              <span className="eyebrow" style={{ margin: "0 auto 16px auto" }}><span>🐙</span> Polpo · lista de espera · junho 2026</span>
              <h1 className="hero-main-title">
                Todo dono de restaurante <em>já sonhou</em> em ter mais braços. Trouxemos <em className="logo-font-highlight">oito.</em>
              </h1>
              <p className="lead" style={{ fontSize: "19px", marginBottom: "32px" }}>
                A Polpo é o time de gestão financeira do seu restaurante direto no seu WhatsApp.
              </p>
              <div style={{ display: "flex", gap: "16px", alignItems: "center", justifyContent: "center" }}>
                <button onClick={scrollToWaitlist} className="btn btn-primary">
                  Garantir minha vaga na lista de espera
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2: Sticky Phone Animation */}
        <section ref={heroRef} style={{ height: "250vh", position: "relative", backgroundColor: "var(--accent)", borderTopLeftRadius: "40px", borderTopRightRadius: "40px", marginTop: "40px" }}>
          <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
            <div className="sticky-phone-container">
              <div className="phone-mockup reveal reveal-scale delay-200" style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.3)" }}>
                <div className="phone-notch" />
                <div className="phone-screen">
                  <div className="phone-statusbar">
                    <span className="phone-statusbar-time">09:41</span>
                  </div>
                  <div className="phone-wa-header">
                    <div className="phone-wa-avatar" style={{ background: 'transparent', padding: 0 }}>
                      <img src="/Polpo/avatar-polpo-svg.svg" alt="Polpo" style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }} />
                    </div>
                    <div>
                      <div className="phone-wa-name">Polpo Concierge</div>
                      <div className="phone-wa-status">online agora</div>
                    </div>
                  </div>
                  <div className="phone-chat">
                    <div className={`phone-bubble in chat-bubble-animated ${scrollProgress > 0.05 ? 'visible' : ''}`}>
                      Bom dia! Conciliação iFood de ontem finalizada. ✅
                      <div className="phone-bubble-alert">
                        <strong>Repasse:</strong> R$ 4.290,00<br />
                        <strong>Recuperado:</strong> R$ 42,90 (1 cancelamento)
                      </div>
                      <div className="phone-bubble-time">08:00</div>
                    </div>
                    <div className={`phone-bubble out chat-bubble-animated ${scrollProgress > 0.25 ? 'visible' : ''}`} style={{ marginTop: 8 }}>
                      E as notas de insumos?
                      <div className="phone-bubble-time">08:15</div>
                    </div>
                    <div className={`phone-bubble in chat-bubble-animated ${scrollProgress > 0.45 ? 'visible' : ''}`} style={{ marginTop: 8 }}>
                      Processadas e lançadas como CMV.
                      <div style={{ color: "var(--accent)", fontWeight: 600, marginTop: 3, fontSize: 10 }}>
                        ⚠ Óleo de Soja subiu 18.5% no fornecedor X.
                      </div>
                      <div className="phone-bubble-time">08:16</div>
                    </div>
                    <div className={`phone-bubble out chat-bubble-animated ${scrollProgress > 0.65 ? 'visible' : ''}`} style={{ marginTop: 8 }}>
                      Tem fornecedor mais barato?
                      <div className="phone-bubble-time">08:17</div>
                    </div>
                    <div className={`phone-bubble in chat-bubble-animated ${scrollProgress > 0.85 ? 'visible' : ''}`} style={{ marginTop: 8 }}>
                      Sim! Distribuidora Y: R$ 6,20/L (−22%). Cotação enviada. 🐙
                      <div className="phone-bubble-time">08:17</div>
                    </div>
                  </div>
                  <div className="phone-input-bar">
                    <div className="phone-input-field">Mensagem</div>
                    <div className="phone-send-btn">▶</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* SEÇÃO 2: Todo dono já sonhou... */}
      <section className="section">
        <div className="container">
          <div className="reveal reveal-up" style={{ marginBottom: 48, maxWidth: "700px" }}>
            <span className="eyebrow"><span>始</span> A Promessa</span>
            <h2>
              Todo dono <em>já sonhou</em> em ter mais braços. Trouxemos <em className="logo-font-highlight">oito.</em>
            </h2>
          </div>
          
          <div className="grid-3">
            <div className="reveal reveal-up delay-100">
              <h3 style={{ borderBottom: "1px solid var(--accent)", paddingBottom: 10, marginBottom: 12 }}>01. Rotina Intacta</h3>
              <p style={{ fontSize: "15px" }}>
                Entramos onde você já está: no <strong>WhatsApp</strong>. Sem novos sistemas ou tabelas complexas para aprender.
              </p>
            </div>
            <div className="reveal reveal-up delay-200">
              <h3 style={{ borderBottom: "1px solid var(--accent)", paddingBottom: 10, marginBottom: 12 }}>02. Ação Autônoma</h3>
              <p style={{ fontSize: "15px" }}>
                Auditamos o iFood, contestamos cancelamentos e enviamos alertas de insumos mais caros que a média.
              </p>
            </div>
            <div className="reveal reveal-up delay-300">
              <h3 style={{ borderBottom: "1px solid var(--accent)", paddingBottom: 10, marginBottom: 12 }}>03. Resumos Matinais</h3>
              <p style={{ fontSize: "15px" }}>
                Todo dia de manhã, um relatório curto das pendências resolvidas. Gestão financeira em segundo plano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: Oito em cada dez restaurantes fecham... */}
      <section className="section section-alt">
        <div className="container">
          <span className="eyebrow"><span>問</span> Mortalidade do Setor</span>
          <h2 style={{ maxWidth: "700px", marginBottom: 20 }}>
            Oito em cada dez restaurantes <em className="logo-font-highlight">fecham</em> antes de completar <em>dois anos.</em>
          </h2>
          <p className="lead" style={{ marginBottom: 40 }}>
            A operação diária engole a gestão financeira. O dono passa o dia apagando incêndios enquanto o lucro escorre silenciosamente.
          </p>
          
          <div className="grid-3">
            <div className="metric-box reveal reveal-up delay-100">
              <div className="metric-num">80%</div>
              <div className="metric-desc">Taxa de mortalidade em até 24 meses de funcionamento.</div>
            </div>
            <div className="metric-box reveal reveal-up delay-200">
              <div className="metric-num">1,38M</div>
              <div className="metric-desc">Estabelecimentos de alimentação ativos no Brasil.</div>
            </div>
            <div className="metric-box reveal reveal-up delay-300">
              <div className="metric-num">R$ 455B</div>
              <div className="metric-desc">Faturamento estimado de todo o setor por ano.</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: O dono cozinha, atende, compra... */}
      <section className="section">
        <div className="container">
          <div className="reveal reveal-up" style={{ maxWidth: "750px" }}>
            <span className="eyebrow"><span>城</span> Operação Extrema</span>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", lineHeight: 1.2, marginBottom: 20 }}>
              O dono <em>cozinha</em>, atende, compra, contrata, paga, demite, <em className="logo-font-highlight">erra</em>, fecha.
            </h2>
            <p className="lead" style={{ marginBottom: 16 }}>
              O tempo é escasso e a cozinha não espera. Gerenciar um restaurante é complexo porque o dia a dia impede que o dono pare para olhar os números.
            </p>
            <button onClick={scrollToWaitlist} className="cta-link">
              Quero simplificar minha gestão financeira →
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: Dois países. Dois mercados. */}
      <section className="section section-alt">
        <div className="container">
          <span className="eyebrow"><span>道</span> Toast vs Brasil</span>
          <h2>
            Dois países. Dois mercados. <em className="logo-font-highlight">A matemática do Toast</em> não funciona no Brasil.
          </h2>
          <p className="lead">
            Diferente do mercado americano focado em autoatendimento, a realidade brasileira exige conciliação pesada e acompanhamento de margens apertadas.
          </p>
          
          <div className="market-compare">
            <div className="market-col">
              <h4>Estados Unidos</h4>
              <ul>
                <li><strong>749 mil</strong> restaurantes ativos</li>
                <li>Mercado de <strong>R$ 5,1 trilhões</strong></li>
                <li><em>O Toast resolve com um software de PDV tudo em um.</em></li>
              </ul>
            </div>
            <div className="market-col">
              <h4>Brasil</h4>
              <ul>
                <li><strong>1,38 milhão</strong> estabelecimentos</li>
                <li>Mercado de <strong>R$ 455 bilhões</strong> (margens apertadas)</li>
                <li><em>Exige conciliação diária de adquirentes e auditoria de iFood.</em></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: Bloco de Contraste Escuro (Software vs Time) */}
      <section className="section section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="reveal reveal-up" style={{ maxWidth: "750px", margin: "0 auto" }}>
            <span className="eyebrow" style={{ color: "#D4855A" }}><span>動</span> Execução Ativa</span>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 42px)", lineHeight: 1.2, marginBottom: 20 }}>
              Software <em>registra dado.</em> Consultor <em>entrega plano</em> e vai embora. <em>Ninguém nunca entregou o time.</em>
            </h2>
            <p style={{ fontSize: "16px", color: "var(--text-dark-muted)", marginBottom: 28 }}>
              Não te damos mais gráficos para olhar no fim de semana. Nós executamos a gestão do seu restaurante direto no WhatsApp. Coletamos dados, identificamos perdas e resolvemos as pendências financeiras.
            </p>
            <button onClick={scrollToWaitlist} className="btn btn-accent">
              Quero esse time gerenciando meu caixa →
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7: Fortalecer cada restaurante e bar do Brasil (Watermark) */}
      <section id="proposito" className="section watermark-container">
        <div className="container">
          <div style={{ maxWidth: "700px", position: "relative", zIndex: 2 }}>
            <span className="eyebrow"><span>興</span> Propósito</span>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", lineHeight: 1.2, marginBottom: 20 }}>
              Fortalecer <em>cada restaurante e bar do Brasil</em> — e mudar a estatística que diz que oito em cada dez vão fechar.
            </h2>
            <p className="lead">
              Nascemos para dar ao pequeno e médio operador o mesmo nível de controle e inteligência financeira dos grandes grupos de alimentação.
            </p>
          </div>
          <div className="watermark-logo">Polpo</div>
        </div>
      </section>

      {/* SEÇÃO 8: A categoria está se formando agora */}
      <section className="section section-alt">
        <div className="container">
          <span className="eyebrow"><span>学</span> Categoria</span>
          <h2>
            A categoria está se formando <em className="logo-font-highlight">agora.</em>
          </h2>
          <p className="lead">
            Não somos ERP e não somos consultoria tradicional. Somos **AOM (Autonomous Operations Management)**: gestão financeira autônoma que executa as tarefas para você.
          </p>
        </div>
      </section>

      {/* SEÇÃO 9: Painel Interativo de Módulos (Software em Ação) */}
      <section id="produto" className="section">
        <div className="container">
          <span className="eyebrow"><span>製</span> Ferramentas em Ação</span>
          <h2>
            Gestão de dados <em className="logo-font-highlight">focada.</em> Feito por quem entende da operação.
          </h2>
          <p className="lead">
            Veja como organizamos e analisamos a informação do seu restaurante em tempo real. Escolha um módulo abaixo:
          </p>
          
          <div className="interactive-modules">
            <div className="module-selectors">
              {MODULES.map((mod, index) => (
                <button 
                  key={index} 
                  className={`module-btn ${activeModule === index ? "active" : ""}`}
                  onClick={() => setActiveModule(index)}
                >
                  <h4>{mod.title}</h4>
                  <p>{mod.shortDesc}</p>
                </button>
              ))}
            </div>
            
            <div className="module-preview-pane">
              <div className="preview-header">
                <div className="preview-title">
                  <div className="dot-status"></div>
                  <span style={{ fontSize: "11px", letterSpacing: "0.05em", color: "#a09e98", fontWeight: "650" }}>
                    {MODULES[activeModule].badge}
                  </span>
                </div>
                <div className="preview-window-controls">
                  <div className="win-dot"></div>
                  <div className="win-dot"></div>
                  <div className="win-dot"></div>
                </div>
              </div>
              
              <div className="preview-content">
                <h3 style={{ color: "#ffffff", marginBottom: 8, fontSize: "18px" }}>
                  {MODULES[activeModule].subtitle}
                </h3>
                <p style={{ color: "#a09e98", fontSize: "13.5px", lineHeight: "1.5", marginBottom: 20 }}>
                  {MODULES[activeModule].details}
                </p>
                
                {MODULES[activeModule].visualData}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 10: O que sobrevive cinco gerações de modelo */}
      <section id="moats" className="section section-alt">
        <div className="container">
          <span className="eyebrow"><span>組</span> Infraestrutura</span>
          <h2 style={{ maxWidth: "700px", marginBottom: 20 }}>
            O que sobrevive cinco gerações de <em>modelo.</em>
          </h2>
          <p className="lead" style={{ marginBottom: 40 }}>
            Modelos de IA mudam a cada semestre. O dado operacional real do seu restaurante — margens históricas, conciliação e compras — é o que não se recria. A inteligência é commodity; a estrutura de dados é a moat.
          </p>
          
          <div className="grid-8-capabilities">
            {CAPABILITIES.map((cap, index) => (
              <div key={index} style={{ borderTop: "1px solid var(--border)", paddingTop: 16 }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "baseline" }}>
                  <span style={{ fontStyle: "italic", fontFamily: "var(--font-serif)", fontSize: "18px", color: "var(--accent)" }}>
                    {cap.num}
                  </span>
                  <div>
                    <h3 style={{ marginBottom: 2, fontSize: "16px" }}>{cap.title}</h3>
                    <h4 style={{ fontSize: "13px", fontWeight: "500", fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--accent)", marginBottom: 6 }}>
                      {cap.highlight}
                    </h4>
                    <p style={{ fontSize: "13.5px", lineHeight: "1.5" }}>{cap.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 11: Frase de Efeito & Citação */}
      <section className="section">
        <div className="container">
          <blockquote className="editorial-quote">
            You can outsource your thinking, but you can't outsource your understanding.
          </blockquote>
          <div style={{ maxWidth: "700px", margin: "24px auto 0", textAlign: "center" }}>
            <p style={{ fontSize: "19px", color: "var(--text)", lineHeight: 1.4, fontWeight: "750" }}>
              Aplicado à Polpo: você pode terceirizar o framework ou o código. 
              <span style={{ color: "var(--accent)" }}> Você não pode terceirizar o entendimento da operação real do seu restaurante ou bar brasileiro.</span>
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 12: Como é viver com Polpo (Mockups Visuais) */}
      <section className="section section-alt">
        <div className="container">
          <div className="reveal reveal-up" style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 32px" }}>
            <span className="eyebrow"><span>時</span> Usabilidade</span>
            <h2>Como é viver com <em>Polpo.</em></h2>
            <p className="lead" style={{ margin: "0 auto" }}>
              Relatórios diários e alertas no seu WhatsApp integrados a um painel web minimalista de acompanhamento.
            </p>
          </div>
          
          <div className="viver-polpo-mockups">
            {/* WhatsApp Simulator */}
            <div className="reveal reveal-up delay-100">
              <div style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-light)", marginBottom: 12, textAlign: "center" }}>
                Notificações WhatsApp
              </div>
              <div className="wa-mockup">
                <div className="wa-header">
                  <div className="wa-avatar">🐙</div>
                  <div className="wa-name">
                    <h4>Polpo Concierge</h4>
                    <p>online agora</p>
                  </div>
                </div>
                <div className="wa-body">
                  <div className="wa-bubble received">
                    Olá! Conciliação iFood de ontem finalizada.
                    <div className="wa-card-alert">
                      <strong>Repasse:</strong> R$ 4.290,00<br />
                      <strong>Cancelamentos recuperados:</strong> R$ 42,90 (1 pedido)
                    </div>
                    <span className="wa-time">08:00</span>
                  </div>
                  
                  <div className="wa-bubble sent">
                    E as notas de insumos enviadas ontem?
                    <span className="wa-time">08:15</span>
                  </div>
                  
                  <div className="wa-bubble received">
                    Processadas e lançadas como CMV. 
                    <div style={{ color: "var(--accent)", fontWeight: "600", marginTop: 4 }}>
                      ⚠ O preço do Óleo de Soja subiu 18.5% no fornecedor X.
                    </div>
                    <span className="wa-time">08:16</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Mockup */}
            <div className="reveal reveal-up delay-300">
              <div style={{ fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-light)", marginBottom: 12, textAlign: "center" }}>
                Painel Web
              </div>
              <div className="dash-mockup">
                <div className="dash-header">
                  <span className="dash-logo">🐙 Polpo Hub</span>
                  <span className="dash-user">Cantina do Zé</span>
                </div>
                <div className="dash-body">
                  <div className="dash-widget">
                    <div className="dash-widget-title">Faturamento</div>
                    <div className="dash-widget-value">R$ 124K</div>
                    <div className="dash-widget-meta">+8.2% este mês</div>
                  </div>
                  <div className="dash-widget">
                    <div className="dash-widget-title">CMV Real</div>
                    <div className="dash-widget-value">29.4%</div>
                    <div className="dash-widget-meta negative">+1.2% desvio</div>
                  </div>
                  <div className="dash-widget">
                    <div className="dash-widget-title">Caixa 30d</div>
                    <div className="dash-widget-value">R$ 48.9K</div>
                    <div className="dash-widget-meta" style={{ color: "#27c93f" }}>Estável</div>
                  </div>
                  
                  <div className="dash-widget span-3">
                    <div className="dash-widget-title">CMV Semanal</div>
                    <div className="mini-chart">
                      <div className="mini-bar" style={{ height: "40px" }}></div>
                      <div className="mini-bar" style={{ height: "55px" }}></div>
                      <div className="mini-bar" style={{ height: "70px" }}></div>
                      <div className="mini-bar highlight" style={{ height: "85px" }}></div>
                      <div className="mini-bar" style={{ height: "50px" }}></div>
                      <div className="mini-bar" style={{ height: "60px" }}></div>
                      <div className="mini-bar" style={{ height: "65px" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
            <button onClick={scrollToWaitlist} className="btn btn-primary">
              Reservar onboarding da minha operação →
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 13: Polpo no centro. Accordion */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 40px" }}>
            <span className="eyebrow"><span>案</span> Gargalos Resolvidos</span>
            <h2>Polpo no centro. Oito <em>tentáculos.</em></h2>
            <p className="lead" style={{ margin: "0 auto" }}>
              Estrutura de governança e monitoramento de dados do restaurante. Clique nos fluxos para ver detalhes:
            </p>
          </div>
          
          {/* Capabilities Accordion */}
          <div className="capabilities-accordion">
            {CAPABILITIES.map((cap, index) => (
              <div 
                key={index} 
                className={`accordion-item ${activeCap === index ? "active" : ""}`}
              >
                <button 
                  className="accordion-trigger"
                  onClick={() => setActiveCap(activeCap === index ? null : index)}
                >
                  <div className="accordion-trigger-left">
                    <span className="accordion-num">{cap.num}</span>
                    <div className="accordion-title-block">
                      <h4>{cap.title}</h4>
                      <p className="serif-italic">{cap.highlight}</p>
                    </div>
                  </div>
                  <span className="accordion-icon">+</span>
                </button>
                
                <div className="accordion-content">
                  <div className="accordion-inner">
                    <p className="accordion-desc">{cap.desc}</p>
                    <table className="cap-table">
                      <thead>
                        <tr>
                          <th style={{ width: "30%" }}>Parâmetro</th>
                          <th>Detalhe Técnico</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>Fontes de Dados</strong></td>
                          <td>{cap.sources}</td>
                        </tr>
                        <tr>
                          <td><strong>Integrações</strong></td>
                          <td>{cap.integrations}</td>
                        </tr>
                        <tr>
                          <td><strong>Regra de Negócio</strong></td>
                          <td><span className="code-badge">{cap.logic}</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 14: Formulário de Conversão (Cadastro Waitlist) */}
        <section id="cadastro-waitlist" className="section reveal reveal-up section-alt">
          <div className="container">
            <div className="form-container reveal reveal-up">
              <div className="form-title">
              <span className="eyebrow"><span>門</span> Onboarding Controlado</span>
              <h3>Dois caminhos de entrada. <em className="logo-font-highlight">Uma única saída.</em></h3>
              <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>
                Liberamos vagas gradualmente para garantir a precisão no onboarding. Deixe seu contato para análise.
              </p>
            </div>
            
            <WaitlistForm />
          </div>
        </div>
      </section>

    </main>
    </>
  );
}
