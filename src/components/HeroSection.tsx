import heroSpa from "@/assets/hero-spa.jpg";
import { Flower2, UtensilsCrossed } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src={heroSpa}
        alt="Boulevard Lounge & SPA interior — serene massage room with candlelight and pool view"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Tagline badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-lounge-gold/30 mb-8 animate-fade-in">
          <span className="text-lounge-gold text-xs font-body font-medium tracking-widest uppercase">
            Juba, South Sudan's Premier Destination
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up">
          Your Oasis of{" "}
          <span className="text-lounge-gold italic">Relaxation</span>
          <br />
          and Flavor in Juba
        </h1>

        {/* Sub-heading */}
        <p
          className="font-body text-lg md:text-xl text-primary-foreground/75 max-w-2xl mx-auto mb-10 font-light animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Where world-class spa treatments, vibrant pool & bar experiences,
          elegant dining, and unforgettable events come together under one roof.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <button
            onClick={() => scrollTo("spa")}
            className="flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-primary-foreground gradient-cta hover:opacity-90 transition-all duration-300 shadow-hero text-base"
          >
            <Flower2 size={17} />
            Book a Massage
          </button>
          <button
            onClick={() => scrollTo("dining")}
            className="flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/10 backdrop-blur-sm transition-all duration-300 text-base"
          >
            <UtensilsCrossed size={17} />
            Reserve Your Table
          </button>
        </div>

      </div>
    </section>
  );
}
