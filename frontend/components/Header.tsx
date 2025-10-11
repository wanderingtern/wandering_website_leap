import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://i.imgur.com/5FVZ3K6.png"
              alt="Wandering Tern Energy Logo"
              className="h-12 w-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">
                Wandering Tern Energy Consulting
              </span>
              <span className="text-sm text-gray-600 hidden sm:block">
                Alaska Home Energy Audits
              </span>
            </div>
          </div>
          <Button
            asChild
            className="bg-teal-600 hover:bg-teal-700 text-white"
          >
            <a href="tel:907-727-0443" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Call</span> 907-727-0443
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
