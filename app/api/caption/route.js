import Groq from "groq-sdk";
import { PROMPTS } from "../../../lib/prompts";

export async function POST(req) {
  const { text } = await req.json();
  const client = new Groq({ apiKey: process.env.GROQ_API_KEY });
  const completion = await client.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      { role: "system", content: PROMPTS.caption },
      { role: "user", content: text }
    ]
  });
  const output = completion.choices?.[0]?.message?.content?.trim() || "No response";
  return new Response(output, { status: 200, headers: { "Content-Type": "text/plain" } });
}

  }
}


