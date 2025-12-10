import Groq from "groq-sdk";

export async function POST(req) {
  try {
    const { text } = await req.json();

    if (!text) {
      return new Response(
        JSON.stringify({ error: "No text provided" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Initialize Groq client
    const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

    // Call Groq
    const completion = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: "You are a creative caption generator." },
        { role: "user", content: text }
      ]
    });

    // Clean the output to remove extra quotes
    const rawOutput = completion.choices?.[0]?.message?.content || "No response";
    const cleanOutput = rawOutput.replace(/^"(.*)"$/, "$1").trim();

    return new Response(
      JSON.stringify({ output: cleanOutput }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: err.message || "Unknown error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}


