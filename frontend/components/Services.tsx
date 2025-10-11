import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "Home Energy Rating",
    price: "$450-$600",
    description:
      "Comprehensive energy audit including blower door test, thermal imaging, and detailed report. Required for AHFC rebates.",
    features: [
      "Blower door test",
      "Thermal imaging",
      "Detailed report",
      "AHFC certification",
    ],
  },
  {
    title: "Post-Improvement Rating",
    price: "$250",
    description:
      "Follow-up rating after improvements to verify work and unlock rebates.",
    features: [
      "Verification test",
      "Updated certification",
      "Rebate documentation",
    ],
  },
  {
    title: "Additional Blower Door Testing",
    price: "$250+",
    description:
      "Extra testing for troubleshooting or verifying air sealing work.",
    features: ["Detailed diagnostics", "Air leakage analysis", "Problem identification"],
  },
  {
    title: "Energy Consulting",
    price: "$90/hour",
    description:
      "Expert advice on energy efficiency, building science, and HVAC systems.",
    features: [
      "Technical guidance",
      "Project planning",
      "Problem solving",
    ],
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Services & Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional energy auditing services for homeowners throughout
            Alaska
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <div className="text-3xl font-bold text-teal-600">
                  {service.price}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="bg-teal-50 border-teal-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Service Area
            </h3>
            <p className="text-gray-700">
              Serving Anchorage, Eagle River, Wasilla, Palmer, and surrounding
              areas. Travel fees may apply for locations outside the primary
              service area. Contact us for availability in other Alaska
              communities.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
