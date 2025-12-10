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
          content:"You generate short, engaging, original captions. They must be concise, creative, and tailored to the user's topic. Do not include hashtags unless requested. Only return the caption." 
        },
        { role: "user", content: text }
      ]
    });

    const output = completion.choices?.[0]?.message?.content || "No response";

    // Return plain text
    return new Response(output, {
      status: 200,
      headers: { "Content-Type": "text/plain" }
    });

  } catch (err) {
    console.error(err);
    return new Response("Server error: " + err.message, {
      status: 500,
      headers: { "Content-Type": "text/plain" }
    });
  }
}




