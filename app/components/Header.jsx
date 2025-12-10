"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const tools = [
    "grammar",
    "caption",
    "translate",
    "summarize",
    "title",
    "resume",
    "codeexplain",
    "textexpand",
    "meta",
    "imagedesc",
  ];

  return (
    <header className="bg-black text-white shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-xl">AI Tools Hub</h1>

        {/* Desktop Links */}
        <nav className="hidden md:flex flex-wrap gap-2">
          {tools.map((tool) => (
            <Link
              key={tool}
              href={`/tools/${tool}`}
              className="px-3 py-1 rounded hover:bg-gray-700 transition"
            >
              {tool.charAt(0).toUpperCase() + tool.slice(1)}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden px-2 py-1 border rounded hover:bg-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <nav className="md:hidden bg-gray-900">
          {tools.map((tool) => (
            <Link
              key={tool}
              href={`/tools/${tool}`}
              className="block px-4 py-2 border-b hover:bg-gray-800"
              onClick={() => setIsOpen(false)}
            >
              {tool.charAt(0).toUpperCase() + tool.slice(1)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
