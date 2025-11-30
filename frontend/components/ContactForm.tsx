import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import backend from "~backend/client";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await backend.contact.submit({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address || undefined,
        message: formData.message,
      });

      toast({
        title: "Success!",
        description: response.message,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Error",
        description:
          "There was a problem submitting your form. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Contact us for a comprehensive energy audit
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div
              className="relative h-64 lg:h-full min-h-[300px] rounded-xl overflow-hidden shadow-lg bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1722248214740-d35304c6ca2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080)",
              }}
              data-unsplash-id="uSwzOTGgJHc"
              data-unsplash-author="Lisa Anna"
              data-unsplash-query="warm woodstove cozy alaska cabin"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-900/20" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="tel:907-727-0443"
                    className="flex items-center gap-3 hover:text-teal-400 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span>907-727-0443</span>
                  </a>
                  <a
                    href="mailto:matt@wanderingtern.com"
                    className="flex items-center gap-3 hover:text-teal-400 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>matt@wanderingtern.com</span>
                  </a>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 mt-0.5" />
                    <span>
                      Serving Anchorage, Eagle River, Wasilla, Palmer &
                      surrounding areas
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-slate-900 mb-2"
                >
                  Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-900 mb-2"
                >
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-slate-900 mb-2"
                >
                  Phone *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full"
                  placeholder="(907) 555-1234"
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-semibold text-slate-900 mb-2"
                >
                  Address (optional)
                </label>
                <Input
                  id="address"
                  type="text"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="w-full"
                  placeholder="Your home address"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-900 mb-2"
                >
                  Message *
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 text-lg"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
