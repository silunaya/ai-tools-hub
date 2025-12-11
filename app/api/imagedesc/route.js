import Replicate from "replicate";

export async function POST(req) {
  try {
    const form = await req.formData();
    const file = form.get("image");

    if (!file) {
      return new Response("No image provided", { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const base64 = buffer.toString("base64");
    const mime = file.type;

    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN
    });

    // BLIP (image captioning model)
    const output = await replicate.run(
      "salesforce/blip-image-captioning:1a011c1c776f3dbfc2a8d0f6ee34dbb8",
      {
        input: {
          image: `data:${mime};base64,${base64}`
        }
      }
    );

    return new Response(output, {
      status: 200,
      headers: { "Content-Type": "text/plain" }
    });

  } catch (err) {
    console.error(err);
    return new Response("Server error: " + err.message, { status: 500 });
  }
}





