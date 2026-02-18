import { useEffect, useState } from "react";
import boulevardLogo from "@/assets/boulevard-logo.jpg";

export default function SiteLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1800);
    const removeTimer = setTimeout(() => setVisible(false), 2300);
    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        background:
          "linear-gradient(135deg, hsl(25 40% 12%) 0%, hsl(30 30% 8%) 100%)",
      }}
    >
      {/* Ambient glow */}
      <div className="absolute w-96 h-96 rounded-full bg-lounge-gold/10 blur-3xl" />

      {/* Logo */}
      <div className="relative flex flex-col items-center gap-6 animate-fade-in">
        <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-lounge-gold/40 shadow-[0_0_40px_rgba(184,134,11,0.3)]">
          <img
            src={boulevardLogo}
            alt="Boulevard Lounge & SPA"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center">
          <p className="font-display text-3xl font-bold text-lounge-gold tracking-wide">
            Boulevard
          </p>
          <p className="font-body text-xs text-white/50 tracking-[0.3em] uppercase mt-1">
            Lounge & SPA · Juba
          </p>
        </div>

        {/* Animated bar */}
        <div className="w-48 h-0.5 rounded-full overflow-hidden bg-white/10">
          <div
            className="h-full rounded-full bg-lounge-gold animate-[loader_1.8s_ease-in-out_forwards]"
            style={{
              width: "0%",
              animation: "loader 1.8s ease-in-out forwards",
            }}
          />
        </div>

        <p className="font-body text-xs text-white/30 tracking-widest uppercase animate-pulse">
          Your Oasis Awaits…
        </p>
      </div>

      <style>{`
        @keyframes loader {
          0% { width: 0%; }
          60% { width: 80%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
