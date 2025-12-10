"use client";
import { useState } from "react";

export default function GrammarTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGrammar() {
    setLoading(true);
    setOutput("");

    try {
      const res = await fetch("/api/grammar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input })
      });

      const text = await res.text();   // IMPORTANT!

      setOutput(text);
    } catch (err) {
      setOutput("Error: " + err.message);
    }

    setLoading(false);
  }

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <h2>Grammar Correction Tool</h2>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={5}
        style={{ width: "100%", marginBottom: 10 }}
        placeholder="Enter your text..."
      />

      <button onClick={handleGrammar} disabled={loading}>
        {loading ? "Processing..." : "Fix Grammar"}
      </button>

      {output && (
        <div
          style={{
            marginTop: 20,
            padding: 10,
            background: "#f4f4f4",
            borderRadius: 8
          }}
        >
          <strong>Corrected:</strong>
          <p>{output}</p>
        </div>
      )}
    </div>
  );
}

