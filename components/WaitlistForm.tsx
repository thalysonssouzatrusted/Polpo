"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "ok" | "duplicate" | "error";

interface WaitlistFormProps {
  buttonText?: string;
}

export function WaitlistForm({ buttonText = "Entrar na lista de espera" }: WaitlistFormProps) {
  const [restaurante, setRestaurante] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [numLojas, setNumLojas] = useState("1");
  const [usaIfood, setUsaIfood] = useState(true);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<string[]>([]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrors([]);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ restaurante, whatsapp, numLojas: Number(numLojas), usaIfood }),
      });
      const data = await res.json();
      if (res.status === 400) {
        setErrors(data.errors ?? ["Confira os dados."]);
        setStatus("error");
        return;
      }
      setStatus(data.duplicate ? "duplicate" : "ok");
    } catch {
      setStatus("error");
      setErrors(["Algo deu errado. Tente de novo."]);
    }
  }

  if (status === "ok" || status === "duplicate") {
    return (
      <div className="msg-box success">
        <p style={{ fontWeight: 600 }}>
          {status === "ok"
            ? "Pronto — você está na lista. A gente fala com você em breve. 🐙"
            : "Você já estava na lista. Tudo certo. 🐙"}
        </p>
      </div>
    );
  }

  return (
    <form className="waitlist-form" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="restaurante">Nome do restaurante</label>
        <input
          id="restaurante"
          value={restaurante}
          onChange={(e) => setRestaurante(e.target.value)}
          placeholder="Ex: Cantina do Zé"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="whatsapp">WhatsApp (com DDD)</label>
        <input
          id="whatsapp"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder="(11) 99999-9999"
          inputMode="tel"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="numLojas">Quantas lojas?</label>
        <select id="numLojas" value={numLojas} onChange={(e) => setNumLojas(e.target.value)}>
          <option value="1">1 loja</option>
          <option value="2">2 lojas</option>
          <option value="3">3 lojas</option>
          <option value="4">4 ou mais</option>
        </select>
      </div>

      <div className="checkbox-row" onClick={() => setUsaIfood(!usaIfood)}>
        <input
          id="usaIfood"
          type="checkbox"
          checked={usaIfood}
          onChange={(e) => setUsaIfood(e.target.checked)}
        />
        <label htmlFor="usaIfood" onClick={(e) => e.stopPropagation()}>
          Opero no iFood
        </label>
      </div>

      <button className="submit" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Enviando…" : buttonText}
      </button>

      {status === "error" && errors.length > 0 && (
        <div className="msg-box error">
          {errors.join(" · ")}
        </div>
      )}
    </form>
  );
}
