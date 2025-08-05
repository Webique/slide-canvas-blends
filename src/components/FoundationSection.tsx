interface FoundationSectionProps {
  language: 'en' | 'ar';
}

export const FoundationSection = ({ language }: FoundationSectionProps) => {
  const content = {
    en: {
      title: "Foundation",
      founding: "2015",
      foundingDesc: "Founded under Abdul Rahman Sarhan Limited Company",
      expansion: "2025", 
      expansionDesc: "Re-establishment and expansion under the new institutional identity (Wejha International Group)"
    },
    ar: {
      title: "النشأة",
      founding: "2015",
      foundingDesc: "سنة التأسيس تحت مسمى شركة عبد الرحمن سرحان المحدودة",
      expansion: "2025",
      expansionDesc: "إعادة التأسيس والتوسع تحت الهوية المؤسسية الجديدة (وجيه إنترناشونال جروب)"
    }
  };

  const { title, founding, foundingDesc, expansion, expansionDesc } = content[language];

  return (
    <section className={`section-padding bg-background relative overflow-hidden ${language === 'ar' ? 'rtl font-arabic' : 'ltr'}`}>
      {/* Timeline background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/3 bottom-1/3 w-1 bg-gradient-primary transform -translate-x-1/2 rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-8">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* 2015 Founding */}
            <div className={`${language === 'ar' ? 'md:order-2' : ''}`}>
              <div className="bg-gradient-primary p-8 rounded-3xl shadow-glow transform hover:scale-105 transition-all duration-300">
                <div className="text-center text-white">
                  <div className="text-7xl md:text-8xl font-bold mb-6 floating-animation">
                    {founding}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">
                    {language === 'en' ? 'Founded' : 'سنة التأسيس'}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {foundingDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* 2025 Re-establishment */}
            <div className={`${language === 'ar' ? 'md:order-1' : ''}`}>
              <div className="bg-gradient-secondary p-8 rounded-3xl shadow-glow transform hover:scale-105 transition-all duration-300">
                <div className="text-center text-white">
                  <div className="text-7xl md:text-8xl font-bold mb-6 floating-animation" style={{animationDelay: '0.5s'}}>
                    {expansion}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">
                    {language === 'en' ? 'Re-establishment' : 'إعادة التأسيس'}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {expansionDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline connector */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-8">
              <div className="w-6 h-6 bg-gradient-primary rounded-full shadow-glow"></div>
              <div className="w-24 h-1 bg-gradient-primary rounded-full"></div>
              <div className="w-6 h-6 bg-gradient-secondary rounded-full shadow-glow"></div>
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