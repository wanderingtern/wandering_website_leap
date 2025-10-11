import { HelpCircle, Home, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const questions = [
  {
    icon: HelpCircle,
    title: "Confused by AHFC programs?",
    description:
      "I'll help you understand which programs you qualify for and how to maximize your rebates.",
  },
  {
    icon: Wrench,
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Common Questions
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {questions.map((question, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-teal-100 p-4">
                    <question.icon className="h-8 w-8 text-teal-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {question.title}
                </h3>
                <p className="text-gray-600">{question.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
