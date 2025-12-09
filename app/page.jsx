import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="grid">
        <div className="card">
          <h2>Welcome to AI Tools Hub</h2>
          <p className="small">Pick a tool from the menu or try the quick tools below.</p>
          <ul>
            <li><Link href="/tools/summarizer">Summarizer</Link></li>
            <li><Link href="/tools/grammar">Grammar Fixer</Link></li>
            <li><Link href="/tools/caption">Caption Generator</Link></li>
          </ul>
        </div>
        <div className="card">
          <h3>Quick Start</h3>
          <p className="small">Deploy to Vercel, add <code>GROQ_KEY</code>, then open any tool page.</p>
        </div>
      </div>
    </div>
  );
}
