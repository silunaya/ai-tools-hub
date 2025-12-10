import "../styles/globals.css";
import Link from "next/link";

export const metadata = { title: "AI Tools Hub" };

import "../styles/globals.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 w-full max-w-5xl mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
