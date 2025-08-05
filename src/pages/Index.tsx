import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { VisionSection } from "@/components/VisionSection";
import { BusinessModelSection } from "@/components/BusinessModelSection";
import { BalanceSection } from "@/components/BalanceSection";
import { WorkAreasSection } from "@/components/WorkAreasSection";

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  return (
    <div className="min-h-screen">
      <Navigation language={language} onLanguageToggle={toggleLanguage} />
      
      <div id="hero">
        <HeroSection language={language} />
      </div>
      
      <div id="intro">
        <IntroSection language={language} />
      </div>
      
      <div id="vision">
        <VisionSection language={language} />
      </div>
      
      <div id="business">
        <BusinessModelSection language={language} />
      </div>
      
      <div id="balance">
        <BalanceSection language={language} />
      </div>
      
      <div id="areas">
        <WorkAreasSection language={language} />
      </div>
    </div>
  );
};

export default Index;
