import Header from "./components/Header";
import Hero from "./components/Hero";
import CommonQuestions from "./components/CommonQuestions";
import Services from "./components/Services";
import WhyWanderingTern from "./components/WhyWanderingTern";
import HowItWorks from "./components/HowItWorks";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CommonQuestions />
      <Services />
      <WhyWanderingTern />
      <HowItWorks />
      <ContactForm />
      <Footer />
    </div>
  );
}
