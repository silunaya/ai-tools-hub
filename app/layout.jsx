import "../styles/globals.css";
import Link from "next/link";

export const metadata = { title: "AI Tools Hub" };

import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 w-full max-w-5xl mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
