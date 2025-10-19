import { ClipboardCheck, DollarSign, Target } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Energy Audits & Ratings",
    description:
      "Comprehensive home energy assessments including blower door testing, thermal imaging, and detailed reports.",
  },
  {
    icon: DollarSign,
    title: "AHFC Rebate Support",
    description:
      "Navigate Alaska Housing Finance Corporation programs and maximize your rebates.",
  },
  {
    icon: Target,
    title: "Expert Guidance",
    description:
      "Unbiased recommendations to improve comfort, reduce energy costs, and solve problems.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive energy solutions for Alaska homes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-xl hover:bg-teal-50 transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-teal-600"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-teal-600 rounded-full mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
