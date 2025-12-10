"use client";
import { useState } from "react";

export default function ToolPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    setOutput("");

    try {
      const res = await fetch("/api/imagedesc", {    // << CHANGE THIS
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
    <div style={{
      maxWidth: "700px",
      margin: "0 auto",
      padding: "20px",
      width: "100%"
    }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        IMAGE DESCRIBING TOOL
      </h1>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={6}
        placeholder="Enter text..."
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "16px",
          resize: "vertical",
          marginBottom: "15px"
        }}
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{
          width: "100%",
          padding: "12px",
          background: "#000",
          color: "#fff",
          borderRadius: "8px",
          border: "none",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        {loading ? "Processing..." : "Generate"}
      </button>

      {output && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#f8f8f8",
            borderRadius: "8px",
            fontSize: "16px",
            whiteSpace: "pre-wrap"
          }}
        >
          {output}
        </div>
      )}
    </div>
  );
}
