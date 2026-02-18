import spaTreatment from "@/assets/spa-treatment.jpg";
import poolBar from "@/assets/pool-bar.jpg";
import events from "@/assets/events.jpg";
import dining from "@/assets/dining.jpg";
import {
  Flower2,
  Waves,
  PartyPopper,
  UtensilsCrossed,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "spa",
    icon: Flower2,
    label: "Spa & Wellness",
    title: "Spa Treatments",
    description:
      "Surrender to expert hands. From deep-tissue massages and hot-stone therapy to aromatic facials and body wraps — every treatment is crafted to restore balance and radiance.",
    image: spaTreatment,
    imgAlt: "Luxury massage room with candles and orchids at Boulevard Spa",
    cta: "Book a Massage",
    ctaIcon: Flower2,
    theme: "spa",
    features: ["Aromatherapy Massage", "Hot Stone Therapy", "Facial Rituals", "Body Scrubs & Wraps"],
  },
  {
    id: "pool",
    icon: Waves,
    label: "Pool & Bar",
    title: "Pool & Bar",
    description:
      "Lounge beside our sparkling pool, sip handcrafted cocktails, or enjoy refreshing mocktails and light bites. A tropical escape — without leaving Juba.",
    image: poolBar,
    imgAlt: "Tropical infinity pool with bar and palm trees at sunset",
    cta: "View Menu",
    ctaIcon: Waves,
    theme: "lounge",
    features: ["Infinity Pool", "Cocktail & Mocktail Bar", "Light Bites & Snacks", "Poolside Service"],
  },
  {
    id: "events",
    icon: PartyPopper,
    label: "Events",
    title: "Events & Catering",
    description:
      "Host your next celebration, corporate event, or wedding in our elegantly appointed event hall. Our catering team curates bespoke menus that delight every palate.",
    image: events,
    imgAlt: "Elegant banquet hall setup with floral centerpieces for events",
    cta: "Plan Your Event",
    ctaIcon: PartyPopper,
    theme: "spa",
    features: ["Private Banquet Hall", "Wedding Packages", "Corporate Events", "Custom Catering"],
  },
  {
    id: "dining",
    icon: UtensilsCrossed,
    label: "Dining",
    title: "Dining Menu",
    description:
      "Indulge in an eclectic menu spanning East African classics, continental favourites, and international cuisine — all prepared with the finest fresh ingredients.",
    image: dining,
    imgAlt: "Beautifully plated gourmet dish in fine dining setting",
    cta: "Reserve Your Table",
    ctaIcon: UtensilsCrossed,
    theme: "lounge",
    features: ["East African Cuisine", "Continental Dishes", "Vegetarian Options", "Private Dining"],
  },
];

function SectionLabel({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lounge-gold/15 border border-lounge-gold/30 mb-4">
      <Icon size={14} className="text-lounge-gold" />
      <span className="font-body text-xs font-semibold text-lounge-gold tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
}

export default function ServicesSection() {
  const scrollTo = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {services.map((svc, idx) => {
        const isEven = idx % 2 === 0;
        const bgClass = svc.theme === "spa" ? "gradient-spa" : "gradient-lounge";
        const CtaIcon = svc.ctaIcon;

        return (
          <section
            key={svc.id}
            id={svc.id}
            className={`${bgClass} section-padding`}
          >
            <div className="max-w-7xl mx-auto">
              <div
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 lg:gap-16`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-card-hover group">
                    <img
                      src={svc.image}
                      alt={svc.imgAlt}
                      className="w-full h-80 lg:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gold corner accent */}
                    <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-lounge-gold/60 rounded-tl-xl" />
                    <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-lounge-gold/60 rounded-br-xl" />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-5">
                  <SectionLabel icon={svc.icon} label={svc.label} />

                  <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
                    {svc.title}
                  </h2>

                  <div className="w-16 h-px bg-lounge-gold" />

                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    {svc.description}
                  </p>

                  {/* Feature pills */}
                  <ul className="flex flex-wrap gap-2 pt-1">
                    {svc.features.map((f) => (
                      <li
                        key={f}
                        className="px-4 py-1.5 rounded-full border border-primary/20 bg-card/60 font-body text-xs text-foreground/70 font-medium"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={scrollTo}
                    className="mt-4 inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body font-semibold gradient-cta text-primary-foreground hover:opacity-90 transition-all duration-200 shadow-card text-sm"
                  >
                    <CtaIcon size={15} />
                    {svc.cta}
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
