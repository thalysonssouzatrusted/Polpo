"use client";

import { WaitlistForm } from "@/components/WaitlistForm";
import { useEffect, useState, useRef } from "react";

export default function CmvLandingPage() {
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
              <img src="/Rodrigo.png" alt="Rodrigo" className="floating-avatar" />
              <span className="eyebrow" style={{ margin: "0 auto 16px auto" }}>Para quem vende bem e não entende por que o caixa não fecha</span>
              <h1 className="hero-main-title">
                Você sabe o quanto <em className="logo-font-highlight">custa cada prato</em> que sai da sua cozinha?
              </h1>
              <p className="lead" style={{ fontSize: "19px", marginBottom: "32px" }}>
                O Polpo calcula o custo real do que você serve e aponta exatamente onde a sua margem está vazando.
              </p>
              <div style={{ display: "flex", gap: "16px", alignItems: "center", justifyContent: "center" }}>
                <button onClick={scrollToWaitlist} className="btn btn-primary">
                  Quero saber onde estou perdendo
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
                      <img src="/Rodrigo.png" alt="Rodrigo" style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }} />
                    </div>
                    <div>
                      <div className="phone-wa-name">Rodrigo · Estoque Polpo</div>
                      <div className="phone-wa-status">online agora</div>
                    </div>
                  </div>
                  <div className="phone-chat">
                    <div className={`phone-bubble in chat-bubble-animated ${scrollProgress > 0.1 ? 'visible' : ''}`}>
                      Bom dia! Fechamento de CMV da semana gerado. 📊
                      <div className="phone-bubble-alert" style={{ borderColor: "#ffbd2e", backgroundColor: "rgba(255,189,46,0.1)" }}>
                        <strong>Alerta:</strong> CMV subiu para 41%<br />
                        <span style={{ color: "var(--accent)", fontSize: "12px" }}>5 pontos acima do ideal.</span>
                      </div>
                      <div className="phone-bubble-time">08:00</div>
                    </div>
                    <div className={`phone-bubble in chat-bubble-animated ${scrollProgress > 0.4 ? 'visible' : ''}`} style={{ marginTop: 8 }}>
                      Vale olhar o desperdício na linha de proteínas, detectei fuga de margem ali.
                      <div className="phone-bubble-time">08:01</div>
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
                O CMV ideal para a maioria dos restaurantes fica entre <em className="logo-font-highlight">28% e 35%</em>. Quando passa disso, a margem de lucro desaparece.
              </h2>
            </div>
            
            <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
              <div className="reveal reveal-up delay-100">
                <p className="lead" style={{ fontSize: "18px", marginBottom: "16px" }}>
                  O problema é que o alto custo dos ingredientes não dói na hora. Ele dói no fechamento. Quando o caixa não fecha e ninguém sabe explicar o motivo.
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "15px" }}>
                  Mesmo com as vendas altas, operar com margem vazando é encher um balde furado. Acompanhar na planilha é muito lento e quando você descobre o mês já virou.
                </p>
              </div>
              <div className="reveal reveal-up delay-200">
                <blockquote className="editorial-quote" style={{ margin: 0, paddingLeft: "24px", borderLeft: "4px solid var(--accent)", fontSize: "20px" }}>
                  "Seu CMV subiu para 41% esta semana, 5 pontos acima do normal. É bom verificar o desperdício nas proteínas."<br/>
                  <br/>
                  <span style={{ fontSize: "14px", fontStyle: "normal", color: "var(--text-muted)" }}>O Rodrigo, agente de estoque do Polpo</span>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 3: A Solução (O Rodrigo) */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header-split reveal reveal-up">
              <div>
                <span className="eyebrow">Execução contínua</span>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.1, marginBottom: 20 }}>
                  O que o Rodrigo acompanha pra você <em className="logo-font-highlight">toda semana.</em>
                </h2>
                <p style={{ fontSize: "18px", color: "var(--text-muted)" }}>
                  Automação focada no seu caixa. Chega de surpresas e margens espremidas.
                </p>
              </div>
              <div>
                <img src="/illustration-polpo.png" alt="Ilustração Polpo" style={{ maxWidth: "100%", height: "auto" }} />
              </div>
            </div>
            
            <div className="grid-3" style={{ marginTop: "40px" }}>
              <div className="feature-card reveal reveal-up delay-100">
                <h3>Custo por prato</h3>
                <p>Calculamos o custo real de hoje com base nos insumos da semana e no preço que você pagou, não apenas na estimativa inicial.</p>
                <div className="feature-card-ui-wrapper">
                  <div className="ui-mock-item anim-slide-up" style={{ animationDelay: "0.1s" }}>
                    <span>Pão Brioche</span>
                    <span style={{ fontWeight: 600 }}>R$ 1,40</span>
                  </div>
                  <div className="ui-mock-item anim-slide-up" style={{ animationDelay: "0.3s" }}>
                    <span>Blend 160g</span>
                    <span style={{ fontWeight: 600 }}>R$ 4,50</span>
                  </div>
                  <div className="ui-mock-item anim-slide-up" style={{ animationDelay: "0.5s", background: "#f0f0f0", borderTop: "2px solid #ccc" }}>
                    <span style={{ fontWeight: 600 }}>Custo Total</span>
                    <span style={{ fontWeight: 600 }}>R$ 5,90</span>
                  </div>
                </div>
              </div>
              
              <div className="feature-card reveal reveal-up delay-200">
                <h3>Alertas de insumos</h3>
                <p>Você vê o CMV da semana e do mês por categoria. Se os preços subirem demais, o Rodrigo te avisa na hora.</p>
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
                <p>O Polpo aponta onde o desperdício está consumindo sua margem e sugere reajustes para equilibrar os lucros.</p>
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
                      O preço dos insumos mudou mas o preço do seu prato provavelmente continua o mesmo. Sem acompanhar o CMV toda semana, você precifica no sentimento e o sentimento não percebe a inflação.
                    </p>
                  </div>
                  <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px", paddingBottom: "16px" }}>
                    <p style={{ fontSize: "15px", lineHeight: 1.5, color: "var(--text-muted)" }}>
                      Restaurantes que não rastreiam o CMV de forma ativa operam com margem de 8 a 15 pontos abaixo do potencial. O Polpo fecha essa lacuna sem você precisar preencher nenhuma planilha.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="reveal reveal-up delay-200" style={{ position: "relative", minHeight: "450px", borderRadius: "24px", overflow: "hidden", backgroundColor: "#f9f9f9" }}>
                <img src="/mercado-cmv.png" alt="Mercado CMV" style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }} />
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
                Sem spam. Sem vendedor ligando. Quando abrirmos sua vaga, o Rodrigo já chega com o custo estimado dos seus pratos principais.
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
