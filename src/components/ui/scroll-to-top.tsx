import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 320);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="Scroll to top"
      title="Back to top"
      onClick={handleClick}
      className={`fixed right-6 bottom-6 z-50 w-11 h-11 rounded-full flex items-center justify-center shadow-card transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-lounge-gold/40 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-6 pointer-events-none"
      } bg-lounge-gold text-lounge-brown hover:scale-105`}
    >
      <ArrowUp size={18} />
    </button>
  );
}
