import BoulevardNavbar from "@/components/BoulevardNavbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import BoulevardFooter from "@/components/BoulevardFooter";
import LadiesNightSection from "@/components/LadiesNightSection";
import SiteLoader from "@/components/SiteLoader";
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from "@/components/ui/scroll-to-top";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SiteLoader />
      <BoulevardNavbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <LadiesNightSection />
        <CTASection />
        <ContactSection />
      </main>
      <BoulevardFooter />
      <Toaster />
      {/* Scroll-to-top floating button */}
      <ScrollToTop />
    </div>
  );
};

export default Index;
