// Implementação Supabase do SignupStore. Importada dinamicamente por getStore()
// só quando há credenciais — mantém o caminho de teste livre da dependência.
//
// Tabela esperada (criar no Supabase):
//   create table waitlist_signups (
//     id uuid primary key default gen_random_uuid(),
//     restaurante text not null,
//     whatsapp text not null unique,
//     num_lojas int not null,
//     usa_ifood boolean not null default false,
//     created_at timestamptz not null default now()
//   );

import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { NormalizedSignup } from "./validation";
import type { SignupStore, AddResult } from "./store";

export class SupabaseSignupStore implements SignupStore {
  private client: SupabaseClient;

  constructor(url: string, key: string) {
    this.client = createClient(url, key);
  }

  async has(whatsapp: string): Promise<boolean> {
    const { data } = await this.client
      .from("waitlist_signups")
      .select("whatsapp")
      .eq("whatsapp", whatsapp)
      .limit(1);
    return !!(data && data.length);
  }

  async add(signup: NormalizedSignup): Promise<AddResult> {
    if (await this.has(signup.whatsapp)) return { created: false };

    const { error } = await this.client.from("waitlist_signups").insert({
      restaurante: signup.restaurante,
      whatsapp: signup.whatsapp,
      num_lojas: signup.numLojas,
      usa_ifood: signup.usaIfood,
    });

    if (error) {
      // 23505 = unique_violation → corrida de cadastro duplicado, idempotente
      if ((error as { code?: string }).code === "23505") return { created: false };
      throw error;
    }
    return { created: true };
  }
}
