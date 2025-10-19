import { Phone, ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Experienced Independent
          <br />
          <span className="text-teal-400">Energy Rater in Alaska</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-slate-200 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          2,500+ homes audited since 2008
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
          >
            Get Started
            <ArrowDown className="h-5 w-5" />
          </button>
          <a
            href="tel:907-727-0443"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-white opacity-75" />
      </div>
    </section>
  );
}
