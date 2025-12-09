export async function callGroq(prompt) {
  const res = await fetch("https://api.groq.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.GROQ_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) {
    throw new Error("Groq API error: " + res.statusText);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content || "No response from AI.";
}
