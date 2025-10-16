import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProblemsSection from "@/components/sections/ProblemsSection";
import AudienceSection from "@/components/sections/AudienceSection";
import DownloadSection from "@/components/sections/DownloadSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <ProblemsSection />
        <AudienceSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}