import "../styles/globals.css";
import Link from "next/link";

export const metadata = { title: "AI Tools Hub" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="site-title">AI Tools Hub</div>
          <div className="subtitle">Fast, free AI utilities — zero sign-up</div>
          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/tools/summarizer">Summarizer</Link>
            <Link href="/tools/grammar">Grammar</Link>
            <Link href="/tools/caption">Caption</Link>
            <Link href="/tools/translate">Translate</Link>
            <Link href="/tools/title">Title</Link>
            <Link href="/tools/resume">Resume</Link>
            <Link href="/tools/codeexplain">Code</Link>
            <Link href="/tools/textexpand">Expand</Link>
            <Link href="/tools/meta">SEO Meta</Link>
            <Link href="/tools/imagedesc">ImageDesc</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">Built with ⚡ Groq & Next.js — Add <code>GROQ_KEY</code> in Vercel env</footer>
      </body>
    </html>
  );
}


