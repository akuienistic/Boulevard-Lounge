import { useState, useEffect } from "react";
import {
  Flower2,
  Waves,
  PartyPopper,
  UtensilsCrossed,
  Phone,
  Menu,
  X,
  Home,
  Sparkles,
  CalendarHeart,
} from "lucide-react";
import boulevardLogo from "@/assets/boulevard-logo.jpg";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Spa Treatments", href: "#spa", icon: Flower2 },
  { label: "Pool & Bar", href: "#pool", icon: Waves },
  { label: "Ladies' Night", href: "#ladies-night", icon: CalendarHeart },
  { label: "Events", href: "#events", icon: PartyPopper },
  { label: "Dining", href: "#dining", icon: UtensilsCrossed },
  { label: "Contact", href: "#contact", icon: Phone },
];

export default function BoulevardNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-lounge-brown/95 backdrop-blur-md shadow-hero py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-3 group"
          aria-label="Go to homepage"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border border-lounge-gold/40 shrink-0 shadow-[0_0_12px_rgba(184,134,11,0.25)] group-hover:shadow-[0_0_20px_rgba(184,134,11,0.4)] transition-shadow">
            <img src={boulevardLogo} alt="Boulevard Lounge & SPA logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col leading-none text-left">
            <span className="font-display text-xl font-bold text-lounge-gold tracking-wide group-hover:opacity-80 transition-opacity">
              Boulevard
            </span>
            <span className="font-body text-[10px] font-light text-primary-foreground/70 tracking-[0.22em] uppercase">
              Lounge & SPA
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map(({ label, href, icon: Icon }) => (
            <button
              key={label}
              onClick={() => handleNavClick(href)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-body font-medium text-primary-foreground/80 hover:text-lounge-gold hover:bg-primary-foreground/10 transition-all duration-200"
            >
              <Icon size={14} className="shrink-0" />
              {label}
            </button>
          ))}
        </nav>

        {/* CTA button (desktop) */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#contact");
          }}
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full font-body text-sm font-semibold bg-lounge-gold text-lounge-brown hover:bg-lounge-gold/90 transition-all duration-200 shadow-sm"
        >
          <Sparkles size={14} />
          Book Now
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-full text-primary-foreground/80 hover:text-lounge-gold hover:bg-primary-foreground/10 transition-all"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile overlay — keep clickable but transparent so only drawer is dark */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto bg-transparent" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer — fully solid dark background for clearer separation */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-1/2 min-w-[240px] bg-lounge-brown shadow-hero border-l border-primary-foreground/10 flex flex-col pt-20 pb-8 px-5 gap-1 transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Navigation menu"
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full text-primary-foreground/70 hover:text-lounge-gold hover:bg-primary-foreground/10 transition-all"
          aria-label="Close menu"
        >
          <X size={20} />
        </button>

        <p className="font-display text-lounge-gold text-lg font-semibold mb-4 px-2 pb-3 border-b border-white/30">
          Explore Services
        </p>

        <div className="space-y-3 bg-black/12 rounded-2xl p-3">
          {navItems.map(({ label, href, icon: Icon }) => (
            <button
              key={label}
              onClick={() => handleNavClick(href)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg font-body text-sm text-primary-foreground hover:text-lounge-gold hover:bg-lounge-gold/10 transition-all duration-200 text-left"
            >
              <Icon size={16} className="shrink-0 text-lounge-gold" />
              {label}
            </button>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-primary-foreground/10">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-full font-body text-sm font-semibold bg-lounge-gold text-lounge-brown hover:bg-lounge-gold/90 transition-all"
          >
            <Sparkles size={14} />
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}
