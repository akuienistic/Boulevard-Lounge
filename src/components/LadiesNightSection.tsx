import ladiesNight from "@/assets/ladies-night.jpg";
import {
  Wine,
  Music2,
  DoorOpen,
  Flame,
  Waves,
  Clock,
  Star,
} from "lucide-react";

const perks = [
  {
    icon: Wine,
    title: "Free Cocktails",
    desc: "Complimentary cocktails for all ladies from 6:00 PM – 7:00 PM.",
    highlight: "6 PM – 7 PM",
  },
  {
    icon: Music2,
    title: "Live DJ & Music",
    desc: "Non-stop music all night long with our resident DJ spinning the best beats.",
    highlight: "All Night",
  },
  {
    icon: DoorOpen,
    title: "Free Entry",
    desc: "Ladies get in absolutely free — no cover charge, no minimum spend.",
    highlight: "Ladies Free",
  },
  {
    icon: Flame,
    title: "Shisha for Adults",
    desc: "Premium flavoured shisha available for adult guests throughout the evening.",
    highlight: "Adults Only",
  },
  {
    icon: Waves,
    title: "Pool Access",
    desc: "Exclusive swimming pool access included for all ladies night attendees.",
    highlight: "Included",
  },
];

export default function LadiesNightSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="ladies-night"
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(270 60% 8%) 0%, hsl(330 40% 12%) 50%, hsl(270 50% 10%) 100%)",
      }}
    >
      {/* Ambient glows */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-lounge-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-pink-400/30 bg-pink-500/10 backdrop-blur-sm">
            <Star size={13} className="text-pink-400 fill-pink-400" />
            <span className="font-body text-xs font-semibold tracking-widest uppercase text-pink-300">
              Every Wednesday
            </span>
            <Star size={13} className="text-pink-400 fill-pink-400" />
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-14">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
            Ladies'{" "}
            <span
              className="italic"
              style={{
                background:
                  "linear-gradient(90deg, hsl(330 90% 70%), hsl(280 80% 75%), hsl(330 90% 70%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Night
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-pink-400/60" />
            <Clock size={16} className="text-pink-300" />
            <span className="font-body text-sm font-medium text-pink-200/80 tracking-wide">
              Every Wednesday — Doors open from 6:00 PM
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-pink-400/60" />
          </div>
          <p className="font-body text-base text-white/55 max-w-xl mx-auto font-light">
            Celebrate mid-week in style. Boulevard Lounge & SPA hosts the most
            glamorous ladies' night in Juba — cocktails, music, shisha, and pool
            access, all in one unforgettable evening.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(236,72,153,0.2)] group">
              <img
                src={ladiesNight}
                alt="Ladies Night at Boulevard Lounge — glamorous women celebrating with cocktails by the pool"
                className="w-full h-80 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay shimmer */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/60 via-transparent to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 px-5 py-3 rounded-2xl bg-black/50 backdrop-blur-md border border-pink-400/20">
                <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
                <span className="font-body text-sm text-white/90 font-medium">
                  Every Wednesday Night · Juba's #1 Ladies Event
                </span>
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-pink-400/50 rounded-tl-xl" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-pink-400/50 rounded-br-xl" />
            </div>
          </div>

          {/* Perks */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-4">
            {perks.map(({ icon: Icon, title, desc, highlight }) => (
              <div
                key={title}
                className="flex items-start gap-4 p-5 rounded-2xl border border-pink-400/10 bg-white/5 backdrop-blur-sm hover:border-pink-400/30 hover:bg-white/8 transition-all duration-300 group"
              >
                <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-pink-500/20 border border-pink-400/20 group-hover:bg-pink-500/30 transition-colors">
                  <Icon size={18} className="text-pink-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-body font-semibold text-white text-sm">
                      {title}
                    </p>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-body font-semibold text-pink-200 bg-pink-500/20 border border-pink-400/20">
                      {highlight}
                    </span>
                  </div>
                  <p className="font-body text-xs text-white/50 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA */}
            <button
              onClick={() => scrollTo("contact")}
              className="mt-2 w-full py-4 rounded-full font-body font-semibold text-sm transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] flex items-center justify-center gap-2"
              style={{
                background:
                  "linear-gradient(90deg, hsl(330 80% 55%), hsl(280 70% 55%))",
                color: "white",
              }}
            >
              <Star size={15} className="fill-white/80" />
              Reserve Your Spot for Ladies' Night
              <Star size={15} className="fill-white/80" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
