import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://i.imgur.com/5FVZ3K6.png"
            alt="Wandering Tern Energy"
            className="h-12 w-auto"
          />
        </div>
        <a
          href="tel:907-727-0443"
          className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
        >
          <Phone className="h-5 w-5" />
          <span className="hidden sm:inline">Call Now</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}
