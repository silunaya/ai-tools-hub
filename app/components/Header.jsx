"use client";
import Link from "next/link";

const tools = ["grammar","caption","translate","summarize","title","resume","codeexplain","textexpand","meta","imagedesc"];

export default function Navbar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-4">
      <h2 className="text-2xl font-bold text-purple-600 mb-6">AI Tools Hub</h2>
      <ul className="nav-list">
        {tools.map(tool => (
          <li key={tool}>
            <Link
              href={`/tools/${tool}`}
              className="capitalize"
            >
              {tool}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}


