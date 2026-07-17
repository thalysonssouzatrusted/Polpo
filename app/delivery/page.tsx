"use client";

import { WaitlistForm } from "@/components/WaitlistForm";

export default function DeliveryLandingPage() {

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
        {/* SEÇÃO 1: Hero Card (Nearo Style) */}
        <section style={{ paddingTop: "92px", paddingBottom: "0" }}>
          <div className="hero-card">
            <div className="hero-card-content">
              <img src="/Polpo/Leo.png" alt="Agente Polpo" className="floating-avatar" />
              <div className="hero-badge">
                <span className="hero-badge-accent"></span>
                Pare de assumir o prejuízo das plataformas
              </div>
              <h1 className="hero-main-title">
                Quantos pedidos cancelados você pagou do próprio bolso <em className="logo-font-highlight">este mês?</em>
              </h1>
              <p className="lead">
                O Agente Polpo audita cada pedido do seu delivery, separa os cancelamentos com chance de contestação e monta a disputa automaticamente.
              </p>
              <div className="hero-buttons">
                <button onClick={scrollToWaitlist} className="btn btn-primary">
                  Quero auditar meus cancelamentos
                </button>
                <button onClick={(e) => { e.preventDefault(); document.getElementById("problema")?.scrollIntoView({ behavior: "smooth" }); }} className="btn btn-outline">
                  Como funciona
                </button>
              </div>
            </div>

            {/* Phone Mockup inside the card */}
            <div className="hero-phone-wrapper">
              <div className="phone-mockup" style={{ boxShadow: "none" }}>
                <div className="phone-notch" />
                <div className="phone-screen">
                  <div className="phone-statusbar">
                    <span className="phone-statusbar-time">09:41</span>
                  </div>
                  <div className="phone-wa-header">
                    <div className="phone-wa-avatar" style={{ background: 'transparent', padding: 0 }}>
                      <img src="/Polpo/Leo.png" alt="Leo" style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }} />
                    </div>
                    <div>
                      <div className="phone-wa-name">Agente Polpo · Operações</div>
                      <div className="phone-wa-status">online agora</div>
                    </div>
                  </div>
                  <div className="phone-chat">
                    <div className="phone-bubble in">
                      Bom dia! Auditoria do delivery de ontem pronta. 🛵<br/>
                      <strong>3 cancelamentos</strong> depois do preparo, total de <strong>R$ 145,00</strong>.<br/>
                      2 têm chance alta de reembolso.
                      <div className="phone-bubble-time">08:02</div>
                    </div>
                    <div className="phone-bubble out" style={{ marginTop: 8 }}>
                      Consegue contestar pra mim?
                      <div className="phone-bubble-time">08:10</div>
                    </div>
                    <div className="phone-bubble in" style={{ marginTop: 8 }}>
                      Já montei as disputas com as provas. ✅<br/>
                      Pedido #4521 — cliente alegou não entrega, mas rastreio mostra entrega às 19:42.<br/>
                      Pedido #4533 — cancelado 38min após aceite.
                      <div className="phone-bubble-time">08:11</div>
                    </div>
                    <div className="phone-bubble out" style={{ marginTop: 8 }}>
                      Quanto posso recuperar?
                      <div className="phone-bubble-time">08:12</div>
                    </div>
                    <div className="phone-bubble in" style={{ marginTop: 8 }}>
                      Estimativa: <strong>R$ 98,00</strong> dos R$ 145,00. Enviei as contestações agora. 🐙
                      <div className="phone-bubble-time">08:12</div>
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

        {/* SEÇÃO 2: O Problema */}
        <section id="problema" className="section">
          <div className="container">
            <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
              <div className="reveal reveal-up delay-100">
                <span className="eyebrow">Prejuízo silencioso</span>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", lineHeight: 1.2, marginBottom: "16px" }}>
                  Extravio, golpe e cancelamento indevido caem <em className="logo-font-highlight">na sua conta</em>.
                </h2>
                <p className="lead" style={{ fontSize: "18px", marginBottom: "16px" }}>
                  Clientes que não receberam, motoboys que somem e cancelamentos após o preparo. Quem paga é você, a menos que conteste no prazo com as provas certas.
                </p>
              </div>
              <div className="reveal reveal-up delay-200">
                <div className="feature-card" style={{ padding: "24px", borderRadius: "16px", background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", height: "fit-content" }}>
                  <div style={{ fontSize: "16px", lineHeight: 1.5, color: "var(--text)", fontWeight: 400 }}>
                    "3 cancelamentos ontem. R$ 145 em jogo. 2 têm chance real de disputa. Já montei as provas."
                  </div>
                  <div style={{ fontSize: "14px", marginTop: "16px", color: "var(--text-muted)", fontWeight: 600 }}>
                    Agente Polpo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: A Solução (O Agente Polpo) */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header-split reveal reveal-up">
              <div>
                <span className="eyebrow">Execução contínua</span>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.1, marginBottom: 20 }}>
                  Três coisas que o Agente Polpo resolve pra você <em className="logo-font-highlight">todo dia.</em>
                </h2>
                <p style={{ fontSize: "18px", color: "var(--text-muted)" }}>
                  Auditoria diária do seu delivery, focada em uma coisa: dinheiro que era seu voltar pra sua conta.
                </p>
              </div>
              <div>
                <img src="/Polpo/illustration-polpo.png" alt="Ilustração Polpo" style={{ maxWidth: "100%", height: "auto" }} />
              </div>
            </div>
            
            <div className="bento-grid" style={{ marginTop: "40px" }}>
              <div className="feature-card bento-card-large reveal reveal-up delay-100">
                <h3>Radar de Extravios</h3>
                <p>Cruzamos dados de despacho e rastreio para identificar erros da plataforma e sinalizar contestações.</p>
                <div className="feature-card-ui-wrapper">
                  <div className="ui-mock-item anim-slide-up" style={{ animationDelay: "0.1s" }}>
                    <span className="ui-icon" style={{ background: "#fee2e2", color: "#ef4444" }}>✕</span>
                    <div>
                      <strong>Pedido #4092</strong>
                      <span style={{ display: "block", fontSize: "10px", color: "var(--text-muted)" }}>Cliente reportou não recebido</span>
                    </div>
                  </div>
                  <div className="ui-mock-item anim-slide-up" style={{ animationDelay: "0.3s", background: "#f0fdf4", borderColor: "#bbf7d0" }}>
                    <span className="ui-icon" style={{ background: "#dcfce7", color: "#22c55e" }}>✓</span>
                    <div>
                      <strong>Comprovante Encontrado</strong>
                      <span style={{ display: "block", fontSize: "10px", color: "var(--text-muted)" }}>Despachado 19:42 — Pronto para contestar</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="feature-card reveal reveal-up delay-200">
                <h3>Filtro de Cancelamentos</h3>
                <p>Filtramos cancelamentos indevidos após o preparo. Foco apenas no que tem chance de reembolso.</p>
                <div className="feature-card-ui-wrapper" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div className="ui-mock-item anim-slide-up" style={{ width: "100%", flexDirection: "column", alignItems: "flex-start", gap: "8px", animationDelay: "0.2s" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                      <strong>Alerta iFood</strong>
                      <div className="anim-pulse-dot"></div>
                    </div>
                    <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>2 cancelamentos indevidos detectados.</div>
                    <div style={{ width: "100%", color: "var(--accent)", fontSize: "12px", fontWeight: "bold", marginTop: "4px" }}>Revisar contestação →</div>
                  </div>
                </div>
              </div>
              
              <div className="feature-card reveal reveal-up delay-300">
                <h3>Disputa Pronta</h3>
                <p>Reunimos as provas e montamos a contestação. Você aprova, nós acompanhamos.</p>
                <div className="feature-card-ui-wrapper">
                  <div className="ui-mock-item anim-slide-up" style={{ flexDirection: "column", alignItems: "flex-start", gap: "8px", animationDelay: "0.3s" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%", borderBottom: "1px solid var(--border)", paddingBottom: "8px" }}>
                      <span>Disputa #409</span>
                      <strong>R$ 125,00</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%", fontSize: "11px", color: "var(--text-muted)" }}>
                      <span>Status</span>
                      <span className="ui-mock-badge" style={{ backgroundColor: "#fdf1de", color: "#c77700", padding: "2px 6px" }}>Aberta</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%", fontSize: "11px", color: "var(--text-muted)" }}>
                      <span>Resposta prevista</span>
                      <span style={{ fontWeight: "bold" }}>5 dias úteis</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="feature-card bento-card-large reveal reveal-up delay-400">
                <h3>Tudo via WhatsApp</h3>
                <p>Aprove disputas de cancelamento em segundos diretamente pelo seu celular. Nada de portais lentos e burocráticos.</p>
                <div className="feature-card-ui-wrapper" style={{ background: "transparent", border: "none", padding: 0, marginTop: "16px", display: "flex", justifyContent: "center" }}>
                  <div className="mobile-decision-mockup anim-slide-up" style={{ 
                    background: "#ffffff", 
                    borderRadius: "16px", 
                    padding: "16px", 
                    boxShadow: "0 8px 24px rgba(0,0,0,0.04)", 
                    border: "1px solid rgba(0,0,0,0.06)",
                    width: "100%",
                    maxWidth: "300px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "10px", color: "var(--text-muted)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <div style={{ width: "16px", height: "16px", borderRadius: "4px", background: "var(--accent)" }}></div>
                        <strong>Agente Polpo</strong>
                      </div>
                      <span>Agora</span>
                    </div>
                    <p style={{ fontSize: "12px", color: "var(--text)", lineHeight: "1.4", margin: 0 }}>
                      Cancelamento indevido detectado. Pedido <strong>#4092</strong>.<br/>Contestação pré-preenchida.
                    </p>
                    <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
                      <button style={{ flex: 1, padding: "8px", borderRadius: "8px", background: "#f5f5f5", color: "#666", fontSize: "11px", fontWeight: "600", border: "none", cursor: "pointer", transition: "background 0.2s" }}>Descartar</button>
                      <button style={{ flex: 1, padding: "8px", borderRadius: "8px", background: "#1a1a1a", color: "#ffffff", fontSize: "11px", fontWeight: "600", border: "none", cursor: "pointer", transition: "background 0.2s" }}>Contestar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 4: A Urgência */}
        <section className="section">
          <div className="container">
            <div className="grid-2" style={{ alignItems: "center", gap: "60px" }}>
              <div className="reveal reveal-up">
                <span className="eyebrow">Mercado</span>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.1, marginBottom: 20 }}>
                  Quanto você está <em className="logo-font-highlight">perdendo</em> sem saber?
                </h2>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "32px" }}>
                  <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
                    <p style={{ fontSize: "16px", lineHeight: 1.5, color: "var(--text)", fontWeight: 500 }}>
                      Cerca de 1% a 3% dos pedidos de delivery terminam em cancelamento ou extravio. Para um faturamento de R$ 60 mil/mês, são <strong>R$ 600 a R$ 1.800 perdidos mensalmente</strong>. A maior parte pode ser contestada no prazo certo.
                    </p>
                  </div>
                  <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px", paddingBottom: "16px" }}>
                    <p style={{ fontSize: "15px", lineHeight: 1.5, color: "var(--text-muted)" }}>
                      O Agente Polpo existe para ser esse alguém. Ele vasculha sua operação todos os dias, separa o que é recuperável e não deixa prazo de contestação vencer em silêncio.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="reveal reveal-up delay-200" style={{ position: "relative", minHeight: "450px", borderRadius: "24px", overflow: "hidden", backgroundColor: "#f9f9f9" }}>
                <img src="/Polpo/mercado-delivery.png" alt="Mercado Delivery" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }} />
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 5: Cadastro Waitlist */}
        <section id="cadastro-waitlist" className="section section-alt">
          <div className="container">
            <div className="form-container reveal reveal-up">
              <div className="form-title">
                <span className="eyebrow">Onboarding Controlado</span>
                <h3>Entre na lista e receba a <em className="logo-font-highlight">auditoria dos seus últimos 30 dias.</em></h3>
                <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>
                  O Polpo está em acesso antecipado. Quando sua vaga abrir, o Agente Polpo entregará uma auditoria mostrando suas perdas com cancelamentos e o que poderia ter sido recuperado.
                </p>
              </div>
              
              <WaitlistForm buttonText="Quero minha vaga" />

              <div style={{ marginTop: "24px", fontSize: "12px", color: "var(--text-muted)", textAlign: "center" }}>
                Sem spam. Sem vendedor ligando. Quando sua vaga abrir, o Agente Polpo trará números reais em vez de discursos de vendas.
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
