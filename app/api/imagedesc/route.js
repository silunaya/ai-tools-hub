import Groq from "groq-sdk";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("image");

    if (!file) {
      return new Response("No image provided", { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const base64Image = Buffer.from(arrayBuffer).toString("base64");

    const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

    const completion = await client.chat.completions.create({
      model: "llama-3.2-11b-vision-preview",
      messages: [
        {
          role: "system",
          content:
            "You are an image description engine. Describe the image accurately and objectively."
        },
        {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: {
                url: `data:${file.type};base64,${base64Image}`
              }
            }
          ]
        }
      ]
    });

    const output =
      completion.choices?.[0]?.message?.content || "No response";

    return new Response(output, { status: 200 });

  } catch (err) {
    console.error(err);
    return new Response("Server error: " + err.message, { status: 500 });
  }
}

