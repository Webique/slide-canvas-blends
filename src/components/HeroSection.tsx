import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  language: 'en' | 'ar';
}

export const HeroSection = ({ language }: HeroSectionProps) => {
  const content = {
    en: {
      title: "Shaping the",
      subtitle: "Future",
      description: "Professional International Group",
      scroll: "Explore Our Journey"
    },
    ar: {
      title: "تشكيل",
      subtitle: "المشهد",
      description: "مجموعة وجهة إنترناشيونال",
      scroll: "استكشف رحلتنا"
    }
  };

  const { title, subtitle, description, scroll } = content[language];

  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Animated background */}
      <div className="absolute inset-0 animated-gradient"></div>
      
      {/* Geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 border-4 border-white/20 rounded-full floating-animation"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border-4 border-secondary/30 rounded-lg rotating-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full pulse-glow"></div>
      </div>

      <div className="container-custom section-padding text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight">
              {title}
              <br />
              <span className="gradient-text bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent">
                {subtitle}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide">
              {description}
            </p>
          </div>
          
          <div className="flex justify-center pt-8">
            <div className="glass-effect px-6 py-3 rounded-full">
              <span className="text-white/90 text-sm font-medium">{scroll}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/60" />
      </div>
    </section>
  );
};