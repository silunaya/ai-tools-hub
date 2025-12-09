import { callGroq } from "../_shared";

export async function POST(req) {
  const { text } = await req.json();
  const output = await callGroq(`Write a short, catchy caption for:\n\n${text}`);
  return new Response(JSON.stringify({ output }), { status: 200 });
}

