export async function GET() {
  const exists = !!process.env.GROQ_KEY;
  return new Response(exists ? "KEY OK" : "KEY MISSING", { status: 200 });
}
