"use client";

import { WaitlistForm } from "@/components/WaitlistForm";
import { useEffect, useState, useRef } from "react";

export default function ConciliacaoLandingPage() {
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
              <img src="/Polpo/Ana.png" alt="Ana" className="floating-avatar" />
              <span className="eyebrow" style={{ margin: "0 auto 16px auto" }}>Para quem recebe de todo lado e não fecha o mês</span>
              <h1 className="hero-main-title">
                O que você vendeu e o que <em className="logo-font-highlight">caiu na conta</em> são dois números diferentes.
              </h1>
              <p className="lead" style={{ fontSize: "19px", marginBottom: "32px" }}>
                O Polpo cruza todos os dados e mostra exatamente se alguém está te devendo.
              </p>
              <div style={{ display: "flex", gap: "16px", alignItems: "center", justifyContent: "center" }}>
                <button onClick={scrollToWaitlist} className="btn btn-primary">
                  Quero conferir meus repasses
                </button>
                <button onClick={(e) => { e.preventDefault(); document.getElementById("problema")?.scrollIntoView({ behavior: "smooth" }); }} className="btn btn-outline">
                  Como funciona
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
                      <img src="/Polpo/Ana.png" alt="Ana" style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }} />
                    </div>
                    <div>
                      <div className="phone-wa-name">Ana · Financeiro Polpo</div>
                      <div className="phone-wa-status">online agora</div>
                    </div>
                  </div>
                  <div className="phone-chat">
                    <div className={`phone-bubble in chat-bubble-animated ${scrollProgress > 0.1 ? 'visible' : ''}`}>
                      Fechamento de ontem: Receita R$3.240. Custos R$1.180. Saldo R$2.060.
                      <div className="phone-bubble-time">08:00</div>
                    </div>
                    <div className={`phone-bubble in chat-bubble-animated ${scrollProgress > 0.4 ? 'visible' : ''}`} style={{ marginTop: 8 }}>
                      CMV em 36%. Tudo dentro do ideal. ✔️
                      <div className="phone-bubble-time">08:00</div>
                    </div>
                    <div className={`phone-bubble in chat-bubble-animated ${scrollProgress > 0.7 ? 'visible' : ''}`} style={{ marginTop: 8 }}>
                      <div className="phone-bubble-alert" style={{ borderColor: "#d83a21", backgroundColor: "rgba(216,58,33,0.1)" }}>
                        <strong>Discrepância:</strong> Faltam R$ 142,50 do repasse da Cielo. Já sinalizei no sistema.
                      </div>
                      <div className="phone-bubble-time">08:02</div>
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
                Você sabe o quanto vendeu ontem. Mas sabe o quanto e quando vai <em className="logo-font-highlight">receber?</em>
              </h2>
            </div>
            
            <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
              <div className="reveal reveal-up delay-100">
                <p className="lead" style={{ fontSize: "18px", marginBottom: "16px" }}>
                  Cada canal tem prazo de repasse diferente. Cada taxa muda sem aviso prévio.
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "15px" }}>
                  Conferir na mão leva horas e errar nisso custa muito caro. Sem um cruzamento diário, pequenas diferenças se acumulam e comprometem todo o seu lucro no fim do mês.
                </p>
              </div>
              <div className="reveal reveal-up delay-200">
                <blockquote className="editorial-quote" style={{ margin: 0, paddingLeft: "24px", borderLeft: "4px solid var(--accent)", fontSize: "20px" }}>
                  "Fechamento de ontem: Receita R$3.240. Custos R$1.180. Saldo R$2.060. CMV 36% e tudo dentro do ideal."<br/>
                  <br/>
                  <span style={{ fontSize: "14px", fontStyle: "normal", color: "var(--text-muted)" }}>A Ana, agente financeira do Polpo</span>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: A Solução (A Ana) */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header-split reveal reveal-up">
              <div>
                <span className="eyebrow">Execução contínua</span>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.1, marginBottom: 20 }}>
                  O que a Ana confere pra você <em className="logo-font-highlight">todo dia.</em>
                </h2>
                <p style={{ fontSize: "18px", color: "var(--text-muted)" }}>
                  Automação focada no seu caixa. Chega de surpresas e margens espremidas.
                </p>
              </div>
              <div>
                <img src="/Polpo/illustration-polpo.png" alt="Ilustração Polpo" style={{ maxWidth: "100%", height: "auto" }} />
              </div>
            </div>
            
            <div className="grid-3" style={{ marginTop: "40px" }}>
              <div className="feature-card reveal reveal-up delay-100">
                <h3>Fechamento de caixa</h3>
                <p>O Polpo cruza o que cada canal prometeu com o que efetivamente entrou na sua conta.</p>
                <div className="feature-card-ui-wrapper">
                  <div className="ui-mock-item anim-slide-up" style={{ animationDelay: "0.1s" }}>
                    <span>Vendas iFood</span>
                    <span style={{ fontWeight: 600 }}>R$ 1.200</span>
                  </div>
                  <div className="ui-mock-item anim-slide-up" style={{ animationDelay: "0.3s" }}>
                    <span>Recebido Conta</span>
                    <span style={{ fontWeight: 600 }}>R$ 1.200</span>
                  </div>
                  <div className="ui-mock-item anim-slide-up" style={{ animationDelay: "0.5s", background: "#e8f5e9", borderColor: "#2e7d32" }}>
                    <span style={{ color: "#2e7d32", fontWeight: 600 }}>Batimento</span>
                    <span style={{ color: "#2e7d32" }}>✓ Ok</span>
                  </div>
                </div>
              </div>

              <div className="feature-card reveal reveal-up delay-200">
                <h3>Taxas cobradas</h3>
                <p>Uma simulação de todas as taxas sendo destacadas para você não pagar nada a mais.</p>
                <div className="feature-card-ui-wrapper" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div className="ui-mock-item anim-slide-up" style={{ width: "100%", flexDirection: "column", alignItems: "flex-start", gap: "8px", animationDelay: "0.2s" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                      <strong>Taxa Máquininha</strong>
                      <div className="anim-pulse-dot"></div>
                    </div>
                    <div style={{ fontSize: "12px", color: "var(--text-muted)", display: "flex", justifyContent: "space-between", width: "100%" }}>
                      <span>Acordado: 1.5%</span>
                      <span>Cobrado: <span style={{ color: "var(--accent)", fontWeight: "bold" }}>2.1%</span></span>
                    </div>
                    <div style={{ fontSize: "12px", color: "#d32f2f", marginTop: "4px" }}>Divergência de R$ 45,00.</div>
                  </div>
                </div>
              </div>

              <div className="feature-card reveal reveal-up delay-300">
                <h3>Previsão de recebimento</h3>
                <p>Previsão clara de fluxo de caixa mostrando exatamente os dias de recebimento futuros.</p>
                <div className="feature-card-ui-wrapper">
                  <div className="ui-mock-item anim-slide-up" style={{ animationDelay: "0.1s", justifyContent: "flex-start", gap: "12px" }}>
                    <div style={{ background: "var(--accent)", color: "#000", padding: "4px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: "bold" }}>HOJE</div>
                    <span>Entra: R$ 840</span>
                  </div>
                  <div className="ui-mock-item anim-slide-up" style={{ animationDelay: "0.3s", justifyContent: "flex-start", gap: "12px" }}>
                    <div style={{ background: "#eee", color: "#666", padding: "4px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: "bold" }}>AMANHÃ</div>
                    <span>Entra: R$ 1.250</span>
                  </div>
                  <div className="ui-mock-item anim-slide-up" style={{ animationDelay: "0.5s", justifyContent: "flex-start", gap: "12px" }}>
                    <div style={{ background: "#eee", color: "#666", padding: "4px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: "bold" }}>SEXTA</div>
                    <span>Entra: R$ 900</span>
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
                      Restaurantes que operam com vários canais de recebimento têm em média muitas discrepâncias por mês entre o prometido e o repassado. A maioria só descobre no fechamento mensal, ou às vezes nem percebe.
                    </p>
                  </div>
                  <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px", paddingBottom: "16px" }}>
                    <p style={{ fontSize: "15px", lineHeight: 1.5, color: "var(--text-muted)" }}>
                      O Polpo foi construído para encerrar essa incerteza. Não trazemos apenas um relatório a mais, mas uma conferência diária silenciosa que só te avisa quando algo está errado.
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
                <h3>Entre na lista. <em className="logo-font-highlight">Sem compromisso.</em></h3>
                <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>
                  O Polpo está em fase de acesso antecipado para restaurantes selecionados. Você entra na fila e a gente avisa quando sua vaga abrir.
                </p>
              </div>
              
              <WaitlistForm buttonText="Quero minha vaga" />

              <div style={{ marginTop: "24px", fontSize: "12px", color: "var(--text-muted)", textAlign: "center" }}>
                Sem spam. Sem vendedor ligando. Quando abrirmos sua vaga, a Ana entra em contato com o resumo do seu primeiro fechamento.
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
