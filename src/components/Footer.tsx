export default function Footer() {
  return (
    <footer className="w-full text-white py-4 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Studios Farol
          </p>
        </div>
      </div>
    </footer>
  );
}