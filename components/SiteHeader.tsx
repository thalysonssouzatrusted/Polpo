"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();

  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("cadastro-waitlist");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#cadastro-waitlist");
    }
  };

  return (
    <header className="fixed-header" style={{ height: "72px" }}>
      <div className="container header-container" style={{ height: "100%" }}>
        <div 
          className="logo" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ cursor: "pointer" }}
        >
          <picture style={{ display: "flex", alignItems: "center" }}>
            <source media="(max-width: 768px)" srcSet="/avatar-polpo-svg.svg" />
            <img src="/polpo-logo-dark.svg" alt="Polpo" style={{ height: "24px" }} />
          </picture>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px", justifyContent: "center" }}>
          <div className="header-meta" style={{ display: "flex", alignItems: "center", gap: "5px", margin: 0 }}>
            <span>lista de espera · 2026</span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button onClick={scrollToWaitlist} className="btn btn-accent">
            Garantir minha vaga
          </button>
        </div>
      </div>
    </header>
  );
}
