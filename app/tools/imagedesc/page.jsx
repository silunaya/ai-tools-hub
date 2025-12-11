"use client";
import { useState } from "react";

export default function ToolPage() {
  const [image, setImage] = useState(null);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!image) return;

    setLoading(true);
    setOutput("");

    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await fetch("/api/imagedesc", {
        method: "POST",
        body: formData
      });

      const text = await res.text();
      setOutput(text);
    } catch (err) {
      setOutput("Error: " + err.message);
    }

    setLoading(false);
  }

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Image Description Tool
      </h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        style={{ marginBottom: "15px" }}
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{
          width: "100%",
          padding: "12px",
          background: "#000",
          color: "#fff",
          fontSize: "16px",
          borderRadius: "8px"
        }}
      >
        {loading ? "Processing..." : "Generate Description"}
      </button>

      {output && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#f8f8f8",
            borderRadius: "8px",
            whiteSpace: "pre-wrap"
          }}
        >
          {output}
        </div>
      )}
    </div>
  );
}

