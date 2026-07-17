"use client";

import { WaitlistForm } from "@/components/WaitlistForm";

export default function ConciliacaoLandingPage() {

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
              <img src="/Polpo/Ana.png" alt="Agente Polpo" className="floating-avatar" />
              <div className="hero-badge">
                <span className="hero-badge-accent"></span>
                Para quem recebe de todo lado e não fecha o mês
              </div>
              <h1 className="hero-main-title">
                O que você vendeu e o que <em className="logo-font-highlight">caiu na conta</em> são dois números diferentes.
              </h1>
              <p className="lead">
                O Agente Polpo confere diariamente se os repasses do iFood, maquininhas e Pix realmente entraram na sua conta. Qualquer falta, você fica sabendo no mesmo dia.
              </p>
              <div className="hero-buttons">
                <button onClick={scrollToWaitlist} className="btn btn-primary">
                  Quero conferir meus repasses
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
                      <img src="/Polpo/Ana.png" alt="Agente Polpo" style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }} />
                    </div>
                    <div>
                      <div className="phone-wa-name">Agente Polpo · Financeiro</div>
                      <div className="phone-wa-status">online agora</div>
                    </div>
                  </div>
                  <div className="phone-chat">
                    <div className="phone-bubble in">
                      Bom dia! Conciliação de ontem fechada. ✅<br/>
                      <strong>Vendas nos canais:</strong> R$ 3.240,00<br/>
                      <strong>Caiu na conta:</strong> R$ 3.097,50
                      <div className="phone-bubble-time">08:00</div>
                    </div>
                    <div className="phone-bubble out" style={{ marginTop: 8 }}>
                      Faltou dinheiro? Quanto?
                      <div className="phone-bubble-time">08:05</div>
                    </div>
                    <div className="phone-bubble in" style={{ marginTop: 8 }}>
                      Sim, diferença de <strong>R$ 142,50</strong>. Identifiquei a origem:<br/>
                      Cielo cobrou taxa de 2,1% — seu contrato diz 1,5%.<br/>
                      Já separei tudo pra reclamação. 📋
                      <div className="phone-bubble-time">08:06</div>
                    </div>
                    <div className="phone-bubble out" style={{ marginTop: 8 }}>
                      Pode abrir a reclamação?
                      <div className="phone-bubble-time">08:08</div>
                    </div>
                    <div className="phone-bubble in" style={{ marginTop: 8 }}>
                      Feito! Protocolo aberto na Cielo. Prazo de resposta: 5 dias úteis. Acompanho pra você. 🐙
                      <div className="phone-bubble-time">08:09</div>
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
            <div style={{ marginBottom: 48, maxWidth: "700px" }} className="reveal reveal-up">
              <span className="eyebrow">A dor da conciliação</span>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", lineHeight: 1.2 }}>
                Você sabe quanto vendeu ontem. Mas sabe quanto e <em className="logo-font-highlight">quando</em> vai receber?
              </h2>
            </div>
            
            <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
              <div className="reveal reveal-up delay-100">
                <p className="lead" style={{ fontSize: "18px", marginBottom: "16px" }}>
                  Cada meio de pagamento tem seu prazo. Além disso, as taxas mudam sem aviso prévio. Um pequeno reajuste na maquininha some do seu repasse sem deixar rastro.
                </p>
              </div>
              <div className="reveal reveal-up delay-200">
                <div className="feature-card" style={{ padding: "24px", borderRadius: "16px", background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", height: "fit-content" }}>
                  <div style={{ fontSize: "16px", lineHeight: 1.5, color: "var(--text)", fontWeight: 400 }}>
                    "Faltam R$ 142,50 do repasse da Cielo. A taxa veio 2,1%, seu contrato diz 1,5%. Já separei tudo pra reclamação."
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
                  O que o Agente Polpo confere pra você <em className="logo-font-highlight">todo dia.</em>
                </h2>
                <p style={{ fontSize: "18px", color: "var(--text-muted)" }}>
                  Conferência silenciosa, centavo a centavo. Ela só te chama quando algo não bate.
                </p>
              </div>
              <div>
                <img src="/Polpo/illustration-polpo.png" alt="Ilustração Polpo" style={{ maxWidth: "100%", height: "auto" }} />
              </div>
            </div>
            
            <div className="bento-grid" style={{ marginTop: "40px" }}>
              <div className="feature-card bento-card-large reveal reveal-up delay-100">
                <h3>Batimento diário</h3>
                <p>Cruzamos o repasse declarado com o valor liquidado na conta. Só alertamos se houver divergência.</p>
                <div className="feature-card-ui-wrapper">
                  <div className="ui-mock-item anim-slide-up" style={{ animationDelay: "0.1s" }}>
                    <span>Liquidado (Stone)</span>
                    <strong style={{ color: "#1e9e5a" }}>R$ 1.200,00</strong>
                  </div>
                  <div className="ui-mock-item anim-slide-up" style={{ animationDelay: "0.3s" }}>
                    <span>Declarado (Sistema)</span>
                    <strong>R$ 1.250,00</strong>
                  </div>
                  <div className="ui-mock-item anim-slide-up" style={{ animationDelay: "0.5s", background: "#fdf1de", borderColor: "#c77700" }}>
                    <span style={{ color: "#c77700" }}>Divergência Encontrada</span>
                    <strong style={{ color: "#c77700" }}>- R$ 50,00</strong>
                  </div>
                </div>
              </div>

              <div className="feature-card reveal reveal-up delay-200">
                <h3>Fim da conciliação cega</h3>
                <p>Chega de planilhas. Resumo mastigado do iFood, maquininhas e Pix direto para você.</p>
                <div className="feature-card-ui-wrapper" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div className="ui-mock-item anim-slide-up" style={{ width: "100%", flexDirection: "column", alignItems: "flex-start", gap: "8px", animationDelay: "0.2s" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                      <strong>Taxa maquininha</strong>
                      <div className="anim-pulse-dot"></div>
                    </div>
                    <div style={{ fontSize: "12px", color: "var(--text-muted)", display: "flex", justifyContent: "space-between", width: "100%" }}>
                      <span>Acordado: 1.5%</span>
                      <span>Cobrado: <span style={{ color: "var(--accent)", fontWeight: "bold" }}>2.1%</span></span>
                    </div>
                    <div style={{ fontSize: "12px", color: "#d32f2f", marginTop: "4px" }}>Divergência de R$ 45,00 → Contestar</div>
                  </div>
                </div>
              </div>

              <div className="feature-card reveal reveal-up delay-300">
                <h3>Previsibilidade</h3>
                <p>Acabe com as dúvidas. Projetamos os repasses dos próximos 30 dias para você planejar seus pagamentos.</p>
                <div className="feature-card-ui-wrapper">
                  <div className="ui-mock-item anim-slide-up" style={{ animationDelay: "0.1s", justifyContent: "flex-start", gap: "12px" }}>
                    <div style={{ background: "var(--accent)", color: "#000", padding: "4px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: "bold" }}>HOJE</div>
                    <span>Entra: R$ 840</span>
                  </div>
                  <div className="ui-mock-item anim-slide-up" style={{ animationDelay: "0.3s", justifyContent: "flex-start", gap: "12px" }}>
                    <div style={{ background: "#eee", color: "#666", padding: "4px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: "bold" }}>AMANHÃ</div>
                    <span>Entra: R$ 1.250</span>
                  </div>
                </div>
              </div>

              <div className="feature-card bento-card-large reveal reveal-up delay-400">
                <h3>Relatórios no WhatsApp</h3>
                <p>Acorde com a visão clara do que caiu na conta, direto no seu celular. Resumos diários sem acessar sistemas pesados.</p>
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
                      Encontrei uma divergência de <strong>R$ 50,00</strong>. Preparei os dados para notificar a adquirente.
                    </p>
                    <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
                      <button style={{ flex: 1, padding: "8px", borderRadius: "8px", background: "#f5f5f5", color: "#666", fontSize: "11px", fontWeight: "600", border: "none", cursor: "pointer", transition: "background 0.2s" }}>Ignorar</button>
                      <button style={{ flex: 1, padding: "8px", borderRadius: "8px", background: "#1a1a1a", color: "#ffffff", fontSize: "11px", fontWeight: "600", border: "none", cursor: "pointer", transition: "background 0.2s" }}>Ver Dados</button>
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
                      Restaurantes que usam múltiplos canais de venda acumulam divergências invisíveis, como taxas reajustadas ou repasses incompletos. Juntas, essas pequenas falhas somam <strong>centenas de reais perdidos por mês</strong>.
                    </p>
                  </div>
                  <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px", paddingBottom: "16px" }}>
                    <p style={{ fontSize: "15px", lineHeight: 1.5, color: "var(--text-muted)" }}>
                      O Agente Polpo acaba com essa incerteza. Ele faz uma auditoria diária automática e te avisa apenas quando algo dá errado, já indicando o caminho para resolver.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="reveal reveal-up delay-200" style={{ position: "relative", minHeight: "450px", borderRadius: "24px", overflow: "hidden", backgroundColor: "#f9f9f9" }}>
                <img src="/Polpo/mercado-conciliacao.png" alt="Mercado Conciliação" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }} />
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
                <h3>Entre na lista e receba seu <em className="logo-font-highlight">primeiro fechamento pronto.</em></h3>
                <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>
                  O Polpo está em acesso antecipado. Quando sua vaga abrir, o Agente Polpo entregará o seu primeiro fechamento completo. Você verá as vendas, os recebimentos e as divergências antes de decidir continuar.
                </p>
              </div>
              
              <WaitlistForm buttonText="Quero minha vaga" />

              <div style={{ marginTop: "24px", fontSize: "12px", color: "var(--text-muted)", textAlign: "center" }}>
                Sem spam. Sem vendedor ligando. Quando sua vaga abrir, o Agente Polpo entra em contato com o resumo do seu primeiro fechamento.
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
