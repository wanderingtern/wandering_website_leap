import {
  Award,
  BadgeCheck,
  MessageCircle,
  HeadphonesIcon,
  BookOpen,
  Shield,
} from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "17 Years, 2,500+ Audits",
    description: "Deep experience with Alaska homes and climate challenges",
  },
  {
    icon: BadgeCheck,
    title: "AHFC Certified Rater",
    description: "Authorized to perform ratings for all AHFC rebate programs",
  },
  {
    icon: MessageCircle,
    title: "I Explain Things Clearly",
    description: "No jargon. You'll understand your home and your options.",
  },
  {
    icon: HeadphonesIcon,
    title: "I'm Here After the Audit",
    description: "Questions later? Call me. I want your project to succeed.",
  },
  {
    icon: BookOpen,
    title: "Deep Technical Knowledge",
    description: "Building science, HVAC, and energy systems expertise",
  },
  {
    icon: Shield,
    title: "Independent & Unbiased",
    description: "I don't sell products or services. Just honest advice.",
  },
];

export default function WhyWanderingTern() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Wandering Tern Energy?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Experience, expertise, and commitment you can trust
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-lg mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
