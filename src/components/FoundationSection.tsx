interface FoundationSectionProps {
  language: 'en' | 'ar';
}

export const FoundationSection = ({ language }: FoundationSectionProps) => {
  const content = {
    en: {
      title: "Foundation",
      founders: "550 Founders",
      foundersDesc: "Company established in 2015",
      expansion: "Re-establishment and Expansion",
      expansionDesc: "Re-founding and expansion in 2025 under the new identity (Wejha International Group)"
    },
    ar: {
      title: "النشأة",
      founders: "550 مؤسس",
      foundersDesc: "تأسست الشركة عام 2015",
      expansion: "إعادة التأسيس والتوسع", 
      expansionDesc: "إعادة التأسيس والتوسع عام 2025 تحت الهوية الجديدة (وجهة إنترناشيونال جروب)"
    }
  };

  const { title, founders, foundersDesc, expansion, expansionDesc } = content[language];

  return (
    <section className={`section-padding bg-background relative overflow-hidden ${language === 'ar' ? 'rtl font-arabic' : 'ltr'}`}>
      {/* Foundation timeline background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-primary transform -translate-x-1/2"></div>
        <div className="absolute top-1/4 left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 pulse-glow"></div>
        <div className="absolute top-3/4 left-1/2 w-4 h-4 bg-secondary rounded-full transform -translate-x-1/2 pulse-glow"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-8">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left side - 550 Founders */}
            <div className={`${language === 'ar' ? 'md:order-2' : ''}`}>
              <div className="glass-effect p-8 rounded-3xl border-l-4 border-primary shadow-elevated hover:shadow-glow transition-all duration-300">
                <div className="text-center">
                  <div className="text-8xl md:text-9xl font-bold gradient-text mb-4 floating-animation">
                    2015
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {founders}
                  </h3>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    {foundersDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Re-establishment */}
            <div className={`${language === 'ar' ? 'md:order-1' : ''}`}>
              <div className="glass-effect p-8 rounded-3xl border-l-4 border-secondary shadow-elevated hover:shadow-glow transition-all duration-300">
                <div className="text-center">
                  <div className="text-8xl md:text-9xl font-bold gradient-text mb-4 floating-animation" style={{animationDelay: '0.5s'}}>
                    2025
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {expansion}
                  </h3>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    {expansionDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Foundation journey visualization */}
          <div className="mt-16 relative">
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-4xl">
                {/* Timeline line */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-primary rounded-full transform -translate-y-1/2"></div>
                
                {/* Foundation milestone */}
                <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full shadow-glow flex items-center justify-center">
                    <span className="text-white font-bold text-lg">2015</span>
                  </div>
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="text-sm text-foreground/60">{language === 'en' ? 'Foundation' : 'التأسيس'}</span>
                  </div>
                </div>

                {/* Growth milestone */}
                <div className="absolute right-1/4 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full shadow-glow flex items-center justify-center">
                    <span className="text-white font-bold text-lg">2025</span>
                  </div>
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="text-sm text-foreground/60">{language === 'en' ? 'Expansion' : 'التوسع'}</span>
                  </div>
                </div>

                {/* Arrow indicating progression */}
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                  <div className="w-6 h-6 border-t-2 border-r-2 border-primary transform rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-6 h-6 bg-primary/20 rounded-full floating-animation"></div>
      <div className="absolute bottom-32 right-16 w-4 h-4 bg-secondary/20 rounded-full floating-animation" style={{animationDelay: '1s'}}></div>
    </section>
  );
};