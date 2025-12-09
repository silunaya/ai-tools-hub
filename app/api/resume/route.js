import { callGroq } from "../_shared";

export async function POST(req) {
  const { text } = await req.json();
  const output = await callGroq(`Create a professional resume from this info:\n\n${text}`);
  return new Response(JSON.stringify({ output }), { status: 200 });
}
