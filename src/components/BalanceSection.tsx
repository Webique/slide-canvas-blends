interface BalanceSectionProps {
  language: 'en' | 'ar';
}

export const BalanceSection = ({ language }: BalanceSectionProps) => {
  const content = {
    en: {
      title: "The Balance",
      founders: "550 founders and teams. (Research by Abdul Rahman Sarhan Company Limited)",
      expansion: "Re-establishing and expanding 50 under the new founding identity (International Group Wejha)"
    },
    ar: {
      title: "التنياق",
      founders: "550 أعضاء مؤسس. (بحث مسح شركة عبد الرحمن سرحان المحدودة)",
      expansion: "إعادة التأسيس والتوسع 50 تحت الهوية التأسيسية الجديدة (وجهة إنترناشيونال جروب)"
    }
  };

  const { title, founders, expansion } = content[language];

  return (
    <section className={`section-padding bg-background relative overflow-hidden ${language === 'ar' ? 'rtl font-arabic' : 'ltr'}`}>
      {/* Balance-inspired decorative elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="relative">
          {/* Balance scale visualization */}
          <div className="w-96 h-2 bg-gradient-primary rounded-full"></div>
          <div className="absolute left-1/4 -top-20 w-24 h-24 bg-gradient-secondary rounded-full"></div>
          <div className="absolute right-1/4 -top-20 w-24 h-24 bg-gradient-primary rounded-full"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-32 w-4 h-32 bg-gradient-primary rounded-full"></div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-8">
              {title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Statistics */}
            <div className="space-y-8">
              <div className="glass-effect p-8 rounded-3xl border-l-4 border-primary">
                <div className="text-6xl md:text-8xl font-bold gradient-text mb-4">550</div>
                <p className="text-xl text-foreground/80 leading-relaxed">
                  {founders}
                </p>
              </div>

              <div className="glass-effect p-8 rounded-3xl border-l-4 border-secondary">
                <div className="text-6xl md:text-8xl font-bold gradient-text mb-4">50</div>
                <p className="text-xl text-foreground/80 leading-relaxed">
                  {expansion}
                </p>
              </div>
            </div>

            {/* Right side - Visual balance */}
            <div className="relative">
              <div className="flex justify-center items-center">
                {/* Interactive balance visualization */}
                <div className="relative w-80 h-80">
                  {/* Central pivot */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-20 bg-gradient-primary rounded-full"></div>
                  
                  {/* Balance beam */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-2 bg-gradient-secondary rounded-full"></div>
                  
                  {/* Left scale */}
                  <div className="absolute left-8 top-1/2 transform -translate-y-1/2 floating-animation">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full shadow-glow flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">550</span>
                    </div>
                  </div>
                  
                  {/* Right scale */}
                  <div className="absolute right-8 top-1/2 transform -translate-y-1/2 floating-animation" style={{animationDelay: '0.5s'}}>
                    <div className="w-20 h-20 bg-gradient-secondary rounded-full shadow-glow flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">50</span>
                    </div>
                  </div>
                  
                  {/* Support lines */}
                  <div className="absolute left-8 top-1/2 w-px h-12 bg-gradient-primary/60 transform -translate-y-6"></div>
                  <div className="absolute right-8 top-1/2 w-px h-12 bg-gradient-secondary/60 transform -translate-y-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};