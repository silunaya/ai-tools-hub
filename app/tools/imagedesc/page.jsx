"use client";
import { useState } from "react";

export default function ImageDescTool() {
  const [file, setFile] = useState(null);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!file) {
      setOutput("Please select an image");
      return;
    }

    setLoading(true);
    setOutput("");

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("/api/imagedesc", {
      method: "POST",
      body: formData
    });

    const text = await res.text();
    setOutput(text);
    setLoading(false);
  }

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h2>Image Description Tool</h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Processing..." : "Generate Description"}
      </button>

      <div style={{ marginTop: 20, whiteSpace: "pre-wrap" }}>{output}</div>
    </div>
  );
}
