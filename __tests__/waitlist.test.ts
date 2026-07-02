// Roda com `node --test` (Node 22.18+/23.6+ faz type stripping nativo).
// Não precisa de node_modules: só toca validation.ts e o InMemorySignupStore.

import { test } from "node:test";
import assert from "node:assert/strict";
import { validateSignup, normalizeWhatsapp } from "../lib/validation.ts";
import { InMemorySignupStore } from "../lib/store.ts";

test("validação: cadastro válido passa e normaliza o whatsapp", () => {
  const r = validateSignup({
    restaurante: "Cantina do Zé",
    whatsapp: "(11) 99999-9999",
    numLojas: 2,
    usaIfood: true,
  });
  assert.equal(r.ok, true);
  if (r.ok) {
    assert.equal(r.value.whatsapp, "11999999999");
    assert.equal(r.value.numLojas, 2);
    assert.equal(r.value.restaurante, "Cantina do Zé");
    assert.equal(r.value.usaIfood, true);
  }
});

test("validação: campos obrigatórios ausentes falham", () => {
  const r = validateSignup({ restaurante: "", whatsapp: "123", numLojas: 0 });
  assert.equal(r.ok, false);
  if (!r.ok) {
    assert.ok(r.errors.length >= 3, "deve acusar restaurante, whatsapp e numLojas");
  }
});

test("validação: whatsapp sem DDD suficiente é rejeitado", () => {
  const r = validateSignup({ restaurante: "X", whatsapp: "99999999", numLojas: 1 });
  assert.equal(r.ok, false);
});

test("normalizeWhatsapp remove tudo que não é dígito", () => {
  assert.equal(normalizeWhatsapp("+55 (11) 98888-7777"), "5511988887777");
});

test("store: dedup por whatsapp — segundo cadastro não cria", async () => {
  const store = new InMemorySignupStore();
  const signup = { restaurante: "Zé", whatsapp: "11999999999", numLojas: 1, usaIfood: true };

  const first = await store.add(signup);
  assert.equal(first.created, true);

  const second = await store.add(signup);
  assert.equal(second.created, false);

  assert.equal(await store.has("11999999999"), true);
  assert.equal(await store.has("11000000000"), false);
});
