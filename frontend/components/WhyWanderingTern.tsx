import { Award, CheckCircle2, GraduationCap, MessageCircle, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: TrendingUp,
    title: "17 Years, 2,500+ Audits",
    description: "Deep experience with Alaska homes and climate challenges",
  },
  {
    icon: Award,
    title: "AHFC Certified Rater",
    description: "Authorized to perform ratings for all AHFC rebate programs",
  },
  {
    icon: MessageCircle,
    title: "I Explain Things Clearly",
    description: "No jargon. You'll understand your home and your options.",
  },
  {
    icon: Shield,
    title: "I'm Here After the Audit",
    description: "Questions later? Call me. I want your project to succeed.",
  },
  {
    icon: GraduationCap,
    title: "Deep Technical Knowledge",
    description: "Building science, HVAC, and energy systems expertise",
  },
  {
    icon: CheckCircle2,
    title: "Independent & Unbiased",
    description: "I don't sell products or services. Just honest advice.",
  },
];

export default function WhyWanderingTern() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Why Wandering Tern Energy?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Independent expertise you can trust
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="rounded-lg bg-teal-100 p-3 w-fit">
                    <benefit.icon className="h-6 w-6 text-teal-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
