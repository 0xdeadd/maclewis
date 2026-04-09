import { Phone, Mail, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

// TODO: Replace with real contact info
const PHONE = "770-328-4984";
const EMAIL = "info@maclewisgrading.com";

const SERVICE_LINKS = [
  { href: "#services", label: "Clearing" },
  { href: "#services", label: "Grading" },
  { href: "#services", label: "Utilities" },
  { href: "#services", label: "Concrete" },
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="font-heading font-bold text-xl tracking-tight mb-4">
              <span className="text-mac-red">MAC LEWIS</span>
              <span className="block text-xs tracking-[0.2em] font-sans font-normal text-white/60">
                CLEARING & GRADING
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Professional site development in West Georgia. Licensed and
              insured for residential and commercial projects.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Service Area
            </h4>
            <ul className="space-y-2 text-white/50 text-sm">
              <li>Coweta County</li>
              <li>Fayette County</li>
              <li>Carroll County</li>
              <li>Heard County</li>
              <li>Troup County</li>
              <li>Meriwether County</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:+1${PHONE.replace(/-/g, "")}`}
                  className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-mac-red" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 text-mac-red" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-mac-red" />
                {/* TODO: Replace with real address */}
                Newnan, GA
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Mac Lewis Clearing and Grading, LLC. All rights reserved.</p>
          <p>Licensed & Insured in Georgia</p>
        </div>
      </div>
    </footer>
  );
}
