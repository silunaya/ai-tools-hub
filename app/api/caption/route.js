import Groq from "groq-sdk";

export async function POST(req) {
  try {
    // Get the text input from frontend
    const { text } = await req.json();

    if (!text) {
      return new Response(
        JSON.stringify({ error: "No text provided" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Initialize Groq client
    const client = new Groq({ apiKey: process.env.GROQ_KEY });

    // Generate the caption using LLaMA 3.1
    const completion = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: "You are a creative social media caption generator." },
        { role: "user", content: text }
      ]
    });

    // Return JSON output
    return new Response(
      JSON.stringify({
        output: completion.choices?.[0]?.message?.content || "No response"
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: error.message || "Unknown error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}


