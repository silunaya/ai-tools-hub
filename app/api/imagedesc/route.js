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

    const result = await client.vision.generate({
      model: "llama-3.2-11b-vision",   // << THE ONLY CURRENT VISION MODEL
      prompt: "Describe this image accurately and objectively.",
      images: [
        {
          mimeType: file.type,
          data: base64Image
        }
      ]
    });

    const output = result.output_text || "No response";

    return new Response(output, { status: 200 });

  } catch (err) {
    console.error(err);
    return new Response("Server error: " + err.message, { status: 500 });
  }
}



