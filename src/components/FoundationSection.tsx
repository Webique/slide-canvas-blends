interface FoundationSectionProps {
  language: 'en' | 'ar';
}

export const FoundationSection = ({ language }: FoundationSectionProps) => {
  const content = {
    en: {
      title: "Foundation",
      establishment: "Established 2025",
      establishmentDesc: "Founded in 2025 with a new vision and identity",
      expansion: "Future Expansion",
      expansionDesc: "Continuous growth and development under Wejha International Group"
    },
    ar: {
      title: "النشأة",
      establishment: "تأسست 2025",
      establishmentDesc: "تأسست عام 2025 برؤية وهوية جديدة",
      expansion: "التوسع المستقبلي",
      expansionDesc: "نمو وتطوير مستمر تحت مجموعة وجهة إنترناشيونال"
    }
  };

  const { title, establishment, establishmentDesc, expansion, expansionDesc } = content[language];

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

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center">
            {/* Single centered card for establishment */}
            <div className="glass-effect p-12 rounded-3xl border-l-4 border-primary shadow-elevated hover:shadow-glow transition-all duration-300 text-center max-w-2xl">
              <div className="text-8xl md:text-9xl font-bold gradient-text mb-6 floating-animation">
                2025
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {establishment}
              </h3>
              <p className="text-xl text-foreground/70 leading-relaxed">
                {establishmentDesc}
              </p>
            </div>
          </div>

          {/* Simple decorative element */}
          <div className="mt-16 flex justify-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-full shadow-glow flex items-center justify-center">
              <div className="text-white font-bold text-2xl">2025</div>
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