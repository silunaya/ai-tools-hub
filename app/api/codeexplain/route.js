import { callGroq } from "../_shared";

export async function POST(req) {
  const { text } = await req.json();
  const output = await callGroq(`Explain this code in plain English:\n\n${text}`);
  return new Response(JSON.stringify({ output }), { status: 200 });
}
