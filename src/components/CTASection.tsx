import { Flower2, UtensilsCrossed } from "lucide-react";

export default function CTASection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding gradient-cta relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary-foreground/5 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="divider-ornament font-body text-xs font-semibold text-primary-foreground/60 tracking-widest uppercase mb-6 inline-block">
          Your Journey Starts Here
        </p>

        <h2 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-5">
          Ready to Experience
          <br />
          <em className="not-italic text-lounge-gold/90">True Luxury?</em>
        </h2>

        <p className="font-body text-lg text-primary-foreground/70 max-w-xl mx-auto mb-10 font-light">
          Whether you seek deep relaxation, vibrant social dining, or the
          perfect venue for your celebration — Boulevard Lounge & SPA awaits.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-200 shadow-hero text-base min-w-[200px]"
          >
            <Flower2 size={17} />
            Book a Massage
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200 text-base min-w-[200px]"
          >
            <UtensilsCrossed size={17} />
            Reserve Your Table
          </button>
        </div>
      </div>
    </section>
  );
}
