"use client";
import { useState } from "react";

export default function ToolLayout({ toolName, apiEndpoint }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    setOutput("");

    try {
      const res = await fetch(`/api/${apiEndpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input })
      });
      const text = await res.text();
      setOutput(text);
    } catch (err) {
      setOutput("Error: " + err.message);
    }
    setLoading(false);
  }

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-center">{toolName}</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={6}
        placeholder={`Enter text for ${toolName}...`}
        className="w-full p-3 border rounded-md resize-none"
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full py-3 bg-black text-white rounded-md font-semibold hover:bg-gray-800"
      >
        {loading ? "Processing..." : "Generate"}
      </button>
      {output && (
        <div className="p-4 bg-white rounded-md border break-words whitespace-pre-wrap">
          {output}
        </div>
      )}
    </div>
  );
}
