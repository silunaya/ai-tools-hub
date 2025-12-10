"use client";
import Link from "next/link";

export default function Navbar() {
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
    <>
      {/* Overlay for mobile touch */}
      <div className="fixed inset-0 z-20 md:hidden" id="overlay"></div>

      <aside className="fixed top-0 left-0 h-full w-16 md:w-16 lg:w-20 xl:w-64 bg-white shadow-lg hover:w-64 transition-all duration-300 ease-in-out z-30 flex flex-col">
        <div className="flex items-center justify-center h-16 border-b">
          <span className="hidden lg:block text-2xl font-bold text-purple-600">
            AI Tools Hub
          </span>
          <span className="lg:hidden text-purple-600 font-bold text-xl">
            AI
          </span>
        </div>

        <nav className="flex-1 mt-4 flex flex-col overflow-y-auto">
          {tools.map((tool) => (
            <Link
              key={tool}
              href={`/tools/${tool}`}
              className="flex items-center gap-4 px-4 py-3 text-gray-800 hover:bg-purple-100 hover:text-purple-600 transition-colors rounded-md m-1"
            >
              <span className="font-medium capitalize">{tool}</span>
            </Link>
          ))}
        </nav>

        <div className="h-16 border-t flex items-center justify-center text-sm text-gray-500">
          © {new Date().getFullYear()}
        </div>
      </aside>

      {/* Push content right */}
      <div className="ml-16 lg:ml-64 transition-all duration-300 ease-in-out">
        {/* Page content will go here */}
      </div>
    </>
  );
}

