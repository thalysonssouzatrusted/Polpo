// Validação pura dos cadastros da lista de espera.
// Sem imports externos — roda sob `node --test` com type stripping.

export interface WaitlistInput {
  restaurante?: string;
  whatsapp?: string;
  numLojas?: number | string;
  usaIfood?: boolean;
}

export interface NormalizedSignup {
  restaurante: string;
  whatsapp: string; // só dígitos
  numLojas: number;
  usaIfood: boolean;
}

export type ValidationResult =
  | { ok: true; value: NormalizedSignup }
  | { ok: false; errors: string[] };

/** Remove tudo que não é dígito (DDD + número). */
export function normalizeWhatsapp(raw: unknown): string {
  return String(raw ?? "").replace(/\D/g, "");
}

export function validateSignup(input: WaitlistInput): ValidationResult {
  const errors: string[] = [];

  const restaurante = String(input.restaurante ?? "").trim();
  if (!restaurante) errors.push("restaurante é obrigatório");

  const whatsapp = normalizeWhatsapp(input.whatsapp);
  if (whatsapp.length < 10) errors.push("whatsapp inválido — inclua o DDD");

  const numLojas = Number(input.numLojas);
  if (!Number.isInteger(numLojas) || numLojas < 1) {
    errors.push("numLojas deve ser um inteiro >= 1");
  }

  const usaIfood = input.usaIfood === true;

  if (errors.length) return { ok: false, errors };
  return { ok: true, value: { restaurante, whatsapp, numLojas, usaIfood } };
}
