import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      <div className="container relative z-10 mx-auto px-4 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Experienced Independent Energy Rater in Alaska
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
          2,500+ homes audited since 2008
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-teal-600 hover:bg-teal-700 text-white text-lg px-8"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="bg-white/10 hover:bg-white/20 text-white border-white text-lg px-8"
          >
            <a href="tel:907-727-0443" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
