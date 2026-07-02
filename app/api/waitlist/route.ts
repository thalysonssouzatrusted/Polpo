import { NextResponse } from "next/server";
import { validateSignup, type WaitlistInput } from "@/lib/validation";
import { getStore } from "@/lib/store";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const result = validateSignup(body as WaitlistInput);
  if (!result.ok) {
    return NextResponse.json({ errors: result.errors }, { status: 400 });
  }

  const store = await getStore();
  const { created } = await store.add(result.value);

  if (!created) {
    return NextResponse.json({ ok: true, duplicate: true }, { status: 200 });
  }
  return NextResponse.json({ ok: true }, { status: 201 });
}
