import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { VisionSection } from "@/components/VisionSection";
import { BusinessModelSection } from "@/components/BusinessModelSection";
import { FoundationSection } from "@/components/FoundationSection";
import { GroupCompaniesSection } from "@/components/GroupCompaniesSection";
import { CombinedSection } from "@/components/CombinedSection";
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
      
      <div id="foundation">
        <FoundationSection language={language} />
      </div>
      
      <div id="companies">
        <GroupCompaniesSection language={language} />
      </div>
      
      <div id="areas">
        <WorkAreasSection language={language} />
      </div>
      
      <div id="combined">
        <CombinedSection language={language} />
      </div>
    </div>
  );
};

export default Index;
