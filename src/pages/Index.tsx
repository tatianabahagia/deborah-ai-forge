import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AIBrainShowcase from "@/components/AIBrainShowcase";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AIBrainShowcase />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
