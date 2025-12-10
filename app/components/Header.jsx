"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md w-full flex items-center justify-between p-4">
      <h1 className="text-2xl font-bold text-purple-600">AI Tools Hub</h1>
      <nav className="hidden md:flex space-x-4">
        <Link href="/tools/grammar" className="hover:text-purple-600">Grammar</Link>
        <Link href="/tools/caption" className="hover:text-purple-600">Caption</Link>
        <Link href="/tools/translate" className="hover:text-purple-600">Translate</Link>
        <Link href="/tools/summarize" className="hover:text-purple-600">Summarize</Link>
      </nav>
    </header>
  );
}



