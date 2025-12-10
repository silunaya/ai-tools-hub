export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4 mt-auto shadow-inner">
      <div className="max-w-5xl mx-auto text-center text-sm">
        © {new Date().getFullYear()} AI Tools Hub. All rights reserved.
      </div>
    </footer>
  );
}
