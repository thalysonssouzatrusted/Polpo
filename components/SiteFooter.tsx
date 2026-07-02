import Link from "next/link";

export function SiteFooter() {
  return (
    <footer style={{ padding: "40px 0", borderTop: "1px solid var(--border)", marginTop: "80px", backgroundColor: "#fff" }}>
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img src="/polpo-logo-dark.svg" alt="Polpo" style={{ height: "20px", opacity: 0.8 }} />
        </div>
        <div style={{ display: "flex", gap: "32px", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/" style={{ color: "var(--text-muted)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>Visão Geral</Link>
          <Link href="/delivery" style={{ color: "var(--text-muted)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>Agente Delivery</Link>
          <Link href="/conciliacao" style={{ color: "var(--text-muted)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>Agente de Conciliação</Link>
          <Link href="/cmv" style={{ color: "var(--text-muted)", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>Agente de CMV</Link>
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: "13px", margin: 0, opacity: 0.7 }}>
          © 2026 Polpo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
