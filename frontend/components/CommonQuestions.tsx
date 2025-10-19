import { HelpCircle, Lightbulb, Home } from "lucide-react";

const questions = [
  {
    icon: HelpCircle,
    title: "Confused by AHFC programs?",
    description:
      "I'll help you understand which programs you qualify for and how to maximize your rebates.",
  },
  {
    icon: Lightbulb,
    title: "Which improvements matter?",
    description:
      "Not all upgrades are equal. I'll show you which ones will actually save you money.",
  },
  {
    icon: Home,
    title: "House problems?",
    description:
      "Ice dams? High bills? Drafts? I'll identify the root causes and recommend solutions.",
  },
];

export default function CommonQuestions() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {questions.map((question, index) => {
            const Icon = question.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
                  <Icon className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {question.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {question.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
