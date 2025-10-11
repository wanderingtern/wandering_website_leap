import Header from "./components/Header";
import Hero from "./components/Hero";
import CommonQuestions from "./components/CommonQuestions";
import Services from "./components/Services";
import WhyWanderingTern from "./components/WhyWanderingTern";
import HowItWorks from "./components/HowItWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <CommonQuestions />
        <Services />
        <WhyWanderingTern />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
