"use client";

import { WaitlistForm } from "@/components/WaitlistForm";
import { useEffect, useState, useRef } from "react";

export default function DeliveryLandingPage() {
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
              <img src="/Polpo/Leo.png" alt="Léo" className="floating-avatar" />
              <span className="eyebrow" style={{ margin: "0 auto 16px auto" }}>Pare de assumir o prejuízo das plataformas</span>
              <h1 className="hero-main-title">
                Você paga a conta dos <em className="logo-font-highlight">extravios e cancelamentos</em> do seu delivery?
              </h1>
              <p className="lead" style={{ fontSize: "19px", marginBottom: "32px" }}>
                O Polpo monitora cada pedido, detecta fraudes e automatiza suas disputas para recuperar o seu dinheiro.
              </p>
              <div style={{ display: "flex", gap: "16px", alignItems: "center", justifyContent: "center" }}>
                <button onClick={scrollToWaitlist} className="btn btn-primary">
                  Quero estancar as perdas
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
                      <img src="/Polpo/Leo.png" alt="Leo" style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }} />
                    </div>
                    <div>
                      <div className="phone-wa-name">Léo · Operações Polpo</div>
                      <div className="phone-wa-status">online agora</div>
                    </div>
                  </div>
                  <div className="phone-chat">
                    <div className={`phone-bubble in chat-bubble-animated ${scrollProgress > 0.1 ? 'visible' : ''}`}>
                      Liguei para o iFood e contestamos os 3 cancelamentos indevidos de ontem.
                      <div className="phone-bubble-alert" style={{ borderColor: "#28a745", backgroundColor: "rgba(40,167,69,0.1)" }}>
                        <strong>Status:</strong> R$ 145,00 reembolsados.<br />
                        <span style={{ color: "#28a745", fontSize: "12px" }}>Já está na sua conta.</span>
                      </div>
                      <div className="phone-bubble-time">10:00</div>
                    </div>
                    <div className={`phone-bubble in chat-bubble-animated ${scrollProgress > 0.4 ? 'visible' : ''}`} style={{ marginTop: 8 }}>
                      Notei que 4 pedidos atrasaram mais de 20 min. Ajustei o tempo de preparo na plataforma para evitar punição no algoritmo.
                      <div className="phone-bubble-time">10:02</div>
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
                  Extravios, golpes e cancelamentos caem direto <em className="logo-font-highlight">na sua conta.</em>
                </h2>
                <p className="lead" style={{ fontSize: "18px", marginBottom: "16px" }}>
                  Muitos pedidos são cancelados injustamente e a plataforma joga o prejuízo para você.
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "15px" }}>
                  Você não tem tempo de conferir cada pedido no portal e abrir disputa. O Polpo detecta as fraudes e facilita a recuperação do seu dinheiro.
                </p>
              </div>
              <div className="reveal reveal-up delay-200">
                <blockquote className="editorial-quote" style={{ margin: 0, paddingLeft: "24px", borderLeft: "4px solid var(--accent)", fontSize: "20px" }}>
                  "3 cancelamentos ontem. R$134 em aberto. 2 têm chance real de disputa."<br/>
                  <br/>
                  <span style={{ fontSize: "14px", fontStyle: "normal", color: "var(--text-muted)" }}>O Léo, agente de delivery do Polpo</span>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: A Solução (O Léo) */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header-split reveal reveal-up">
              <div>
                <span className="eyebrow">Execução contínua</span>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.1, marginBottom: 20 }}>
                  Três coisas que o Léo resolve pra você <em className="logo-font-highlight">todo dia.</em>
                  Três pilares para blindar seu <em className="logo-font-highlight">faturamento.</em>
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
                <h3>Alerta de Extravios</h3>
                <p>Pedidos que saíram para entrega e foram reportados como não recebidos. Identificamos se o erro foi da plataforma.</p>
                <div className="feature-card-ui-wrapper">
                  <div className="ui-mock-item anim-slide-up" style={{ animationDelay: "0.1s" }}>
                    <span>Pedido #8902</span>
                    <span className="ui-mock-badge warning">Extraviado</span>
                  </div>
                  <div className="ui-mock-item anim-slide-up" style={{ animationDelay: "0.3s" }}>
                    <span>Pedido #8903</span>
                    <span className="ui-mock-badge success">Entregue</span>
                  </div>
                  <div className="ui-mock-item anim-slide-up" style={{ animationDelay: "0.5s" }}>
                    <span>Pedido #8904</span>
                    <span className="ui-mock-badge warning">Extraviado</span>
                  </div>
                </div>
              </div>
              
              <div className="feature-card reveal reveal-up delay-200">
                <h3>Rastreio de Cancelamentos</h3>
                <p>Filtramos cancelamentos indevidos após o preparo e que têm grandes chances de sucesso na contestação.</p>
                <div className="feature-card-ui-wrapper" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div className="ui-mock-item anim-slide-up" style={{ width: "100%", flexDirection: "column", alignItems: "flex-start", gap: "8px", animationDelay: "0.2s" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                      <strong>Alerta iFood</strong>
                      <div className="anim-pulse-dot"></div>
                    </div>
                    <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>2 cancelamentos indevidos detectados.</div>
                    <button style={{ width: "100%", padding: "6px", background: "var(--accent)", color: "#000", border: "none", borderRadius: "4px", fontSize: "11px", fontWeight: "bold", marginTop: "8px", cursor: "default" }}>Contestar no Portal</button>
                  </div>
                </div>
              </div>
              
              <div className="feature-card reveal reveal-up delay-300">
                <h3>Disputas Facilitadas</h3>
                <p>Reunimos os dados que você precisa para provar que o pedido foi feito e enviado corretamente sem perder dinheiro.</p>
                <div className="feature-card-ui-wrapper">
                  <div className="ui-mock-item anim-slide-up" style={{ flexDirection: "column", alignItems: "flex-start", gap: "8px", animationDelay: "0.3s" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%", borderBottom: "1px solid var(--border)", paddingBottom: "8px" }}>
                      <span>Disputa #409</span>
                      <strong>R$ 125,00</strong>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%", fontSize: "11px", color: "var(--text-muted)" }}>
                      <span>Status</span>
                      <span style={{ color: "#27c93f" }}>Aprovada</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%", fontSize: "11px", color: "var(--text-muted)" }}>
                      <span>Reembolso</span>
                      <span style={{ color: "#27c93f" }}>Previsto p/ dia 10</span>
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
                      Restaurantes de médio porte perdem todos os meses milhares de reais apenas aceitando calados os cancelamentos, fraudes de clientes e extravios de motoboys.
                    </p>
                  </div>
                  <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px", paddingBottom: "16px" }}>
                    <p style={{ fontSize: "15px", lineHeight: 1.5, color: "var(--text-muted)" }}>
                      O Polpo foi construído para virar o jogo. Nós vasculhamos a operação diariamente em busca de anomalias, garantindo que você tenha as ferramentas para contestar o que é seu.
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
                <h3>Entre na lista. <em className="logo-font-highlight">Sem compromisso.</em></h3>
                <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>
                  O Polpo está em fase de acesso antecipado para restaurantes selecionados. Você entra na fila e a gente avisa quando sua vaga abrir.
                </p>
              </div>
              
              <WaitlistForm buttonText="Quero minha vaga" />

              <div style={{ marginTop: "24px", fontSize: "12px", color: "var(--text-muted)", textAlign: "center" }}>
                Sem spam. Sem vendedor ligando. Quando abrirmos sua vaga, o Léo entra em contato direto.
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
