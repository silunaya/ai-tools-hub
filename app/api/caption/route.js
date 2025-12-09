import Groq from "groq-sdk";

export async function POST(req) {
  try {
    const { text } = await req.json();

    const client = new Groq({ apiKey: process.env.GROQ_KEY });

    const completion = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: "You are a creative social media caption generator."}, // <-- change this
        { role: "user", content: text }
      ]
    });

    return Response.json({
      output: completion.choices?.[0]?.message?.content || "No response"
    });

  } catch (error) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
