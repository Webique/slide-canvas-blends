interface ClientsSectionProps {
  language: 'en' | 'ar';
}

export const ClientsSection = ({ language }: ClientsSectionProps) => {
  const content = {
    en: {
      title: "Our Clients",
      subtitle: "Trusted by leading organizations across various sectors"
    },
    ar: {
      title: "عملاؤنا", 
      subtitle: "موثوقون من قبل المؤسسات الرائدة في مختلف القطاعات"
    }
  };

  const { title, subtitle } = content[language];

  // Simulated client logos (you would replace these with actual logos)
  const clientLogos = Array.from({ length: 23 }, (_, i) => ({
    id: i + 1,
    name: `Client ${i + 1}`,
  }));

  return (
    <section className={`section-padding bg-background relative overflow-hidden ${language === 'ar' ? 'rtl font-arabic' : 'ltr'}`}>
      {/* Floating logo elements background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-primary rounded-full floating-animation"></div>
        <div className="absolute bottom-32 right-32 w-12 h-12 bg-gradient-secondary rounded-full floating-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-primary/40 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            {title}
          </h2>
          <p className="text-xl text-foreground/70 mb-8">
            {subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
        </div>

        {/* Clients grid with mosaic layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {clientLogos.map((client, index) => (
              <div key={client.id} className="group relative">
                <div className="aspect-square bg-white rounded-2xl shadow-elevated hover:shadow-glow transition-all duration-300 flex items-center justify-center p-4 group-hover:scale-105 transform">
                  {/* Placeholder for client logo */}
                  <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 rounded-xl flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full opacity-60"></div>
                  </div>
                </div>
                
                {/* Hover overlay with client name */}
                <div className="absolute inset-0 bg-gradient-primary/90 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium text-sm">{client.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* +50 More indicator */}
          <div className="flex justify-center">
            <div className="relative group cursor-pointer">
              <div className="w-32 h-32 bg-gradient-secondary rounded-full shadow-glow flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">+50</div>
                  <div className="text-white/80 text-sm">
                    {language === 'en' ? 'More' : 'أكثر'}
                  </div>
                </div>
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
                <div className="absolute -top-2 left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
                <div className="absolute top-1/2 -right-2 w-3 h-3 bg-white rounded-full transform -translate-y-1/2"></div>
                <div className="absolute -bottom-2 left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
                <div className="absolute top-1/2 -left-2 w-3 h-3 bg-white rounded-full transform -translate-y-1/2"></div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">73+</div>
              <div className="text-foreground/70">
                {language === 'en' ? 'Active Clients' : 'عميل نشط'}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">15+</div>
              <div className="text-foreground/70">
                {language === 'en' ? 'Industries Served' : 'قطاع مخدوم'}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">100%</div>
              <div className="text-foreground/70">
                {language === 'en' ? 'Client Satisfaction' : 'رضا العملاء'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};