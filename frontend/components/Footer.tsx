import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Wandering Tern Energy</h3>
            <p className="text-slate-300 leading-relaxed">
              Alaska's trusted independent energy rater since 2008. Over 2,500
              homes audited with expert, unbiased guidance.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:907-727-0443"
                className="flex items-center gap-2 text-slate-300 hover:text-teal-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>907-727-0443</span>
              </a>
              <a
                href="mailto:matt@wanderingtern.com"
                className="flex items-center gap-2 text-slate-300 hover:text-teal-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>matt@wanderingtern.com</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Service Areas</h3>
            <div className="flex items-start gap-2 text-slate-300">
              <MapPin className="h-4 w-4 mt-1" />
              <span>
                Anchorage, Eagle River, Wasilla, Palmer & surrounding areas
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Wandering Tern Energy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
