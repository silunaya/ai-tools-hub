export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("image");

    if (!file) {
      return new Response("No image provided", { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const base64Image = Buffer.from(arrayBuffer).toString("base64");

    const apiKey = process.env.GROQ_API_KEY;

    const res = await fetch("https://api.groq.com/openai/v1/vision", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.2-11b-vision",
        prompt: "Describe the image accurately and objectively.",
        images: [
          {
            data: base64Image,
            mimeType: file.type
          }
        ]
      })
    });

    const data = await res.json();

    if (!res.ok) {
      return new Response(
        "Groq error: " + JSON.stringify(data),
        { status: 500 }
      );
    }

    return new Response(data.output_text, { status: 200 });

  } catch (err) {
    return new Response("Server error: " + err.message, { status: 500 });
  }
}




