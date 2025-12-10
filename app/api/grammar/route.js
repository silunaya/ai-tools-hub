import Groq from "groq-sdk";

export async function POST(req) {
  try {
    const { text } = await req.json();

    if (!text) {
      return new Response("No text provided", {
        status: 400,
        headers: { "Content-Type": "text/plain" }
      });
    }

    const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

    const completion = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content:
            "You are a strict grammar correction engine. Correct grammar, spelling, and sentence structure without adding any words. Do not explain. Only return corrected text."
        },
        { role: "user", content: text }
      ]
    });

    const result =
      completion.choices?.[0]?.message?.content?.trim() || "No response";

    return new Response(result, {
      status: 200,
      headers: { "Content-Type": "text/plain" }
    });

  } catch (err) {
    console.error(err);
    return new Response(err.message || "Unknown error", {
      status: 500,
      headers: { "Content-Type": "text/plain" }
    });
  }
}

