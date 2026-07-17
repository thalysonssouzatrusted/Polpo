"use client";

import { WaitlistForm } from "@/components/WaitlistForm";

export default function CmvLandingPage() {

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
              <img src="/Polpo/Rodrigo.png" alt="Agente Polpo" className="floating-avatar" />
              <div className="hero-badge">
                <span className="hero-badge-accent"></span>
                Para quem vende bem e não entende por que o caixa não fecha
              </div>
              <h1 className="hero-main-title">
                Você sabe quanto <em className="logo-font-highlight">custa cada prato</em> com os preços de <em className="logo-font-highlight">hoje?</em>
              </h1>
              <p className="lead">
                O Agente Polpo recalcula o custo dos pratos toda semana usando suas notas fiscais. Você vê onde a margem está vazando.
              </p>
              <div className="hero-buttons">
                <button onClick={scrollToWaitlist} className="btn btn-primary">
                  Quero saber onde estou perdendo
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
                      <img src="/Polpo/Rodrigo.png" alt="Agente Polpo" style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }} />
                    </div>
                    <div>
                      <div className="phone-wa-name">Agente Polpo · Estoque</div>
                      <div className="phone-wa-status">online agora</div>
                    </div>
                  </div>
                  <div className="phone-chat">
                    <div className="phone-bubble in">
                      Bom dia! Fechamento de CMV da semana pronto. 📊
                      <div className="phone-bubble-alert" style={{ borderColor: "#ffbd2e", backgroundColor: "rgba(255,189,46,0.1)" }}>
                        <strong>Alerta:</strong> CMV subiu para 41%<br />
                        <span style={{ color: "var(--accent)", fontSize: "12px" }}>5 pontos acima da meta de 36%.</span>
                      </div>
                      <div className="phone-bubble-time">08:00</div>
                    </div>
                    <div className="phone-bubble out" style={{ marginTop: 8 }}>
                      O que está pesando mais?
                      <div className="phone-bubble-time">08:12</div>
                    </div>
                    <div className="phone-bubble in" style={{ marginTop: 8 }}>
                      Proteínas subiram 22% no mês. Os 3 pratos mais impactados:<br/>
                      • Filé Grelhado: CMV foi de 31% → <strong>39%</strong><br/>
                      • Steak Burger: 28% → <strong>35%</strong><br/>
                      • Frango Parmegiana: 26% → <strong>32%</strong>
                      <div className="phone-bubble-time">08:13</div>
                    </div>
                    <div className="phone-bubble out" style={{ marginTop: 8 }}>
                      Preciso reajustar preço?
                      <div className="phone-bubble-time">08:15</div>
                    </div>
                    <div className="phone-bubble in" style={{ marginTop: 8 }}>
                      Simulei: aumento de R$ 2,00 no Filé e R$ 1,50 no Burger normaliza o CMV em 35%. 🐙
                      <div className="phone-bubble-time">08:15</div>
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
              <span className="eyebrow">Diagnóstico invisível</span>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", lineHeight: 1.2 }}>
                O CMV saudável fica entre <em className="logo-font-highlight">28% e 35%.</em> Acima disso, o lucro desaparece em silêncio.
              </h2>
            </div>
            
            <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
              <div className="reveal reveal-up delay-100">
                <p className="lead" style={{ fontSize: "18px", marginBottom: "16px" }}>
                  Insumos caros pesam no fechamento. O salão lota, o mês é bom, mas a conta não fecha. O motivo quase nunca é óbvio, pois o vazamento ocorre aos poucos em cada prato.
                </p>
              </div>
              <div className="reveal reveal-up delay-200">
                <div className="feature-card" style={{ padding: "24px", borderRadius: "16px", background: "var(--bg-card)", border: "1px solid var(--border)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", height: "fit-content" }}>
                  <div style={{ fontSize: "16px", lineHeight: 1.5, color: "var(--text)", fontWeight: 400 }}>
                    "Seu CMV subiu para 41% esta semana, 5 pontos acima da meta. A origem está nas proteínas. Veja o custo por prato."
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
                  O que o Agente Polpo acompanha pra você <em className="logo-font-highlight">toda semana.</em>
                </h2>
                <p style={{ fontSize: "18px", color: "var(--text-muted)" }}>
                  Custo real, não estimativa. Calculado com o preço que você pagou — puxado direto das suas notas fiscais.
                </p>
              </div>
              <div>
                <img src="/Polpo/illustration-polpo.png" alt="Ilustração Polpo" style={{ maxWidth: "100%", height: "auto" }} />
              </div>
            </div>
            
            <div className="bento-grid" style={{ marginTop: "40px" }}>
              <div className="feature-card bento-card-large reveal reveal-up delay-100">
                <h3>Custo real por prato</h3>
                <p>Notas fiscais atualizam automaticamente o custo dos pratos. Chega de ficha técnica desatualizada.</p>
                <div className="feature-card-ui-wrapper">
                  <div className="ui-mock-item anim-slide-up" style={{ animationDelay: "0.1s" }}>
                     <span>Pão Brioche</span>
                     <strong>R$ 1,40</strong>
                  </div>
                  <div className="ui-mock-item anim-slide-up" style={{ animationDelay: "0.3s" }}>
                     <span>Blend 160g</span>
                     <strong>R$ 4,50</strong>
                  </div>
                  <div className="ui-mock-item anim-slide-up" style={{ animationDelay: "0.5s", backgroundColor: "#f0f0f0" }}>
                     <span>Custo Total</span>
                     <strong>R$ 5,90</strong>
                  </div>
                </div>
              </div>
              
              <div className="feature-card reveal reveal-up delay-200">
                <h3>Alerta de insumos</h3>
                <p>Ficou mais caro? O Agente avisa na hora e mostra o impacto direto no prato.</p>
                <div className="feature-card-ui-wrapper" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div className="ui-mock-item anim-slide-up" style={{ width: "100%", flexDirection: "column", alignItems: "flex-start", gap: "8px", animationDelay: "0.2s", background: "#fff8e1", borderColor: "#f57f17" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                      <strong style={{ color: "#f57f17" }}>Alerta de Preço</strong>
                      <div className="anim-pulse-dot" style={{ backgroundColor: "#f57f17" }}></div>
                    </div>
                    <div style={{ fontSize: "12px", color: "#666" }}>O preço da <strong>Cebola Roxa</strong> subiu 15% nos últimos 7 dias.</div>
                  </div>
                </div>
              </div>
              
              <div className="feature-card reveal reveal-up delay-300">
                <h3>Sugestão de preço</h3>
                <p>Margem caiu? Sugerimos um reajuste com o novo CMV projetado para sua aprovação.</p>
                <div className="feature-card-ui-wrapper">
                  <div className="ui-mock-item anim-slide-up" style={{ flexDirection: "column", alignItems: "flex-start", gap: "8px", animationDelay: "0.3s" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%", fontSize: "11px", color: "var(--text-muted)" }}>
                      <span>Preço Atual</span>
                      <span style={{ textDecoration: "line-through" }}>R$ 32,00</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%", borderBottom: "1px solid var(--border)", paddingBottom: "8px" }}>
                      <span>Novo Preço Sugerido</span>
                      <strong style={{ color: "#2e7d32" }}>R$ 35,90</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%", fontSize: "11px", color: "var(--text-muted)" }}>
                      <span>Nova Margem</span>
                      <span style={{ color: "#2e7d32", fontWeight: "bold" }}>32%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="feature-card bento-card-large reveal reveal-up delay-400">
                <h3>Gestão na palma da mão</h3>
                <p>Acompanhe sua margem e aprove reajustes sem sair do WhatsApp. Nada de planilhas complexas, apenas inteligência direto no seu celular.</p>
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
                      Sugestão de reajuste do <strong>Burger Clássico</strong>. Margem projetada: 32%.
                    </p>
                    <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
                      <button style={{ flex: 1, padding: "8px", borderRadius: "8px", background: "#f5f5f5", color: "#666", fontSize: "11px", fontWeight: "600", border: "none", cursor: "pointer", transition: "background 0.2s" }}>Ignorar</button>
                      <button style={{ flex: 1, padding: "8px", borderRadius: "8px", background: "#1a1a1a", color: "#ffffff", fontSize: "11px", fontWeight: "600", border: "none", cursor: "pointer", transition: "background 0.2s" }}>Aprovar</button>
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
                  Por que o cardápio de <em className="logo-font-highlight">dois anos atrás</em> está te custando caro agora.
                </h2>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginTop: "32px" }}>
                  <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
                    <p style={{ fontSize: "16px", lineHeight: 1.5, color: "var(--text)", fontWeight: 500 }}>
                      O preço dos insumos mudou dezenas de vezes desde que você precificou o cardápio. O preço dos seus pratos, provavelmente, não. Sem acompanhar o CMV semana a semana, você precifica no sentimento — e o sentimento não percebe inflação de 0,8% ao mês.
                    </p>
                  </div>
                  <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px", paddingBottom: "16px" }}>
                    <p style={{ fontSize: "15px", lineHeight: 1.5, color: "var(--text-muted)" }}>
                      Restaurantes sem controle ativo de CMV perdem muito dinheiro. O Agente Polpo fecha essa lacuna de forma automática usando apenas suas notas fiscais, sem precisar de planilhas.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="reveal reveal-up delay-200" style={{ position: "relative", minHeight: "450px", borderRadius: "24px", overflow: "hidden", backgroundColor: "#f9f9f9" }}>
                <img src="/Polpo/mercado-cmv.png" alt="Mercado CMV" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }} />
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
                <h3>Entre na lista e receba o <em className="logo-font-highlight">custo real dos seus pratos principais.</em></h3>
                <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>
                  O Polpo está em acesso antecipado. Quando sua vaga abrir, o Agente Polpo já entrega o custo atualizado dos pratos mais vendidos para você avaliar a margem real antes de decidir algo.
                </p>
              </div>
              
              <WaitlistForm buttonText="Quero minha vaga" />

              <div style={{ marginTop: "24px", fontSize: "12px", color: "var(--text-muted)", textAlign: "center" }}>
                Sem spam. Sem vendedor ligando. Quando sua vaga abrir, o Agente Polpo trará resultados numéricos ao invés de promessas de vendas.
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
