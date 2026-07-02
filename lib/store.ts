// Store de signups com dedup por WhatsApp.
// `import type` é apagado em runtime — store.ts roda sob `node --test`
// sem precisar resolver validation.ts nem instalar @supabase/supabase-js.

import type { NormalizedSignup } from "./validation";

export interface AddResult {
  created: boolean; // false = duplicado (idempotente)
}

export interface SignupStore {
  has(whatsapp: string): Promise<boolean>;
  add(signup: NormalizedSignup): Promise<AddResult>;
}

/** Store em memória — usado em dev/teste e como fallback. NÃO persiste. */
export class InMemorySignupStore implements SignupStore {
  private byPhone = new Map<string, NormalizedSignup>();

  async has(whatsapp: string): Promise<boolean> {
    return this.byPhone.has(whatsapp);
  }

  async add(signup: NormalizedSignup): Promise<AddResult> {
    if (this.byPhone.has(signup.whatsapp)) return { created: false };
    this.byPhone.set(signup.whatsapp, signup);
    return { created: true };
  }
}

let _store: SignupStore | null = null;

/** Supabase quando há credenciais; senão, memória (com aviso em produção). */
export async function getStore(): Promise<SignupStore> {
  if (_store) return _store;

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (url && key) {
    const { SupabaseSignupStore } = await import("./store-supabase");
    _store = new SupabaseSignupStore(url, key);
  } else {
    if (process.env.NODE_ENV === "production") {
      console.warn(
        "[waitlist] SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY ausentes — usando store em memória. Os cadastros NÃO serão persistidos.",
      );
    }
    _store = new InMemorySignupStore();
  }
  return _store;
}
