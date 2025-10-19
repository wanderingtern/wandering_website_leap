import { Phone, Calendar, ClipboardList, FileText } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Contact Us",
    description:
      "Call or fill out the form. We'll discuss your needs and schedule an appointment.",
  },
  {
    icon: Calendar,
    title: "Schedule Audit",
    description:
      "We'll set a convenient time. The audit typically takes 2-3 hours.",
  },
  {
    icon: ClipboardList,
    title: "On-Site Assessment",
    description:
      "Comprehensive testing including blower door, thermal imaging, and inspection.",
  },
  {
    icon: FileText,
    title: "Receive Report",
    description:
      "Detailed report with findings, recommendations, and AHFC certification if applicable.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Simple, straightforward process from start to finish
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative text-center group"
              >
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="flex items-center justify-center w-20 h-20 bg-teal-600 rounded-full mb-6 group-hover:bg-teal-700 transition-colors">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-teal-200 -translate-x-1/2" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
