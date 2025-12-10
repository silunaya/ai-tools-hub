"use client";
import { useState } from "react";

export default function ToolLayout({ toolName, apiEndpoint }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/${apiEndpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });
      const data = await res.text(); // plain text output
      setOutput(data);
    } catch (err) {
      setOutput("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container tool-card">
      <h2 className="text-2xl font-bold mb-4">{toolName}</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter text here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Run"}
        </button>
      </form>
      {output && <div className="output-box mt-4">{output}</div>}
    </div>
  );
}

