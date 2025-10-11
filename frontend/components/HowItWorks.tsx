import { Calendar, ClipboardCheck, FileText, Phone } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Phone,
    title: "Contact Us",
    description:
      "Call or fill out the form. We'll discuss your needs and schedule an appointment.",
  },
  {
    number: 2,
    icon: Calendar,
    title: "Schedule Audit",
    description:
      "We'll set a convenient time. The audit typically takes 2-3 hours.",
  },
  {
    number: 3,
    icon: ClipboardCheck,
    title: "On-Site Assessment",
    description:
      "Comprehensive testing including blower door, thermal imaging, and inspection.",
  },
  {
    number: 4,
    icon: FileText,
    title: "Receive Report",
    description:
      "Detailed report with findings, recommendations, and AHFC certification if applicable.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple process from start to finish
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-600 text-white text-2xl font-bold">
                    {step.number}
                  </div>
                  <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-teal-100">
                    <step.icon className="h-5 w-5 text-teal-600" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
