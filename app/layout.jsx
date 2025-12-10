import "../styles/globals.css";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";

export const metadata = { title: "AI Tools Hub" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="flex-1 w-full max-w-5xl mx-auto p-4">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

