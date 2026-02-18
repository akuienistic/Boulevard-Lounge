import { ExternalLink } from "lucide-react";
import boulevardLogo from "@/assets/boulevard-logo.jpg";

const footerLinks = [
  { label: "Spa Treatments", href: "#spa" },
  { label: "Pool & Bar", href: "#pool" },
  { label: "Events & Catering", href: "#events" },
  { label: "Dining Menu", href: "#dining" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="gradient-footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-lounge-gold/40 shrink-0 shadow-[0_0_8px_rgba(184,134,11,0.12)]">
                <img
                  src={boulevardLogo}
                  alt="Boulevard Lounge & SPA logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="leading-none">
                <p className="font-display text-2xl font-bold text-primary-foreground">
                  Boulevard
                </p>
                <p className="font-body text-xs text-primary-foreground/50 tracking-[0.25em] uppercase">
                  Lounge & SPA
                </p>
              </div>
            </div>
            <p className="font-body text-sm text-primary-foreground/55 leading-relaxed max-w-xs">
              Juba's premier destination for relaxation, fine dining, and
              unforgettable experiences. Where luxury meets warmth.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-body text-xs font-semibold text-lounge-gold tracking-widest uppercase mb-5">
              Quick Links
            </p>
            <ul className="space-y-2.5">
              {footerLinks.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="font-body text-sm text-primary-foreground/55 hover:text-lounge-gold transition-colors duration-200"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening & tagline */}
          <div>
            <p className="font-body text-xs font-semibold text-lounge-gold tracking-widest uppercase mb-5">
              Hours of Bliss
            </p>
            <div className="space-y-2 font-body text-sm text-primary-foreground/55">
              <p>Monday – Friday</p>
              <p className="text-primary-foreground/80 font-medium">8:00 AM – 11:00 PM</p>
              <p className="mt-3">Saturday – Sunday</p>
              <p className="text-primary-foreground/80 font-medium">9:00 AM – Midnight</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-primary-foreground/35 text-center sm:text-left">
            © {new Date().getFullYear()} Boulevard Lounge & SPA, Juba, South Sudan. All rights reserved.
          </p>

          {/* Simon Star Tech credit */}
          <a
            href="https://www.linkedin.com/in/simon-akuien-atem-710895290/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-body text-xs text-primary-foreground/40 hover:text-lounge-gold transition-colors duration-200 group"
          >
            Designed & Built by{" "}
            <span className="text-primary-foreground/60 group-hover:text-lounge-gold font-semibold transition-colors">
              Simon Star Tech
            </span>
            <ExternalLink size={11} className="opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </footer>
  );
}
