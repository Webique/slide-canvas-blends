import { MapPin, Building, Globe } from "lucide-react";

interface HeadquartersSectionProps {
  language: 'en' | 'ar';
}

export const HeadquartersSection = ({ language }: HeadquartersSectionProps) => {
  const content = {
    en: {
      title: "Official Headquarters",
      locations: [
        "Main Headquarters: Jeddah",
        "Regional Office: Riyadh", 
        "Cairo Office: Egypt"
      ]
    },
    ar: {
      title: "المقرات الرسمية",
      locations: [
        "المقر الرئيسي: جدة",
        "مكتب إقليمي: الرياض",
        "مكتب إقليمي: القاهرة"
      ]
    }
  };

  const { title, locations } = content[language];

  return (
    <section className={`section-padding bg-gradient-dark relative overflow-hidden ${language === 'ar' ? 'rtl font-arabic' : 'ltr'}`}>
      {/* Animated map background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-secondary rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-secondary rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="connectionLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(140, 60%, 55%)" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="hsl(255, 85%, 65%)" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          <path d="M 250 150 Q 500 200 750 180" 
                stroke="url(#connectionLine)" 
                strokeWidth="2" 
                fill="none"
                strokeDasharray="5,5"
                className="animate-pulse"/>
          <path d="M 250 150 Q 400 350 500 450" 
                stroke="url(#connectionLine)" 
                strokeWidth="2" 
                fill="none"
                strokeDasharray="5,5"
                className="animate-pulse"/>
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Interactive map visualization */}
          <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 mb-12 backdrop-blur-sm border border-white/10">
            <div className="grid md:grid-cols-3 gap-8 relative">
              {locations.map((location, index) => (
                <div key={index} className="group relative">
                  {/* Location pin */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-secondary rounded-full shadow-glow flex items-center justify-center group-hover:scale-110 transition-all duration-300 cursor-pointer">
                        <MapPin className="h-8 w-8 text-white" />
                      </div>
                      
                      {/* Ripple effect */}
                      <div className="absolute inset-0 w-16 h-16 bg-secondary/30 rounded-full animate-ping"></div>
                      <div className="absolute inset-2 w-12 h-12 bg-secondary/20 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                    </div>
                  </div>

                  {/* Location info card */}
                  <div className="glass-effect p-6 rounded-2xl text-center transform group-hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      {index === 0 && <Building className="h-6 w-6 text-white" />}
                      {index === 1 && <Globe className="h-6 w-6 text-white" />}
                      {index === 2 && <Building className="h-6 w-6 text-white" />}
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2">
                      {location}
                    </h3>
                    
                    <div className="w-16 h-0.5 bg-gradient-secondary mx-auto"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Central hub indicator */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
              <div className="w-8 h-8 bg-gradient-primary rounded-full shadow-glow animate-pulse"></div>
            </div>
          </div>

          {/* Global reach stats */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="glass-effect p-6 rounded-2xl">
              <div className="text-4xl font-bold gradient-text mb-2">3</div>
              <div className="text-white/80">
                {language === 'en' ? 'Countries' : 'دول'}
              </div>
            </div>
            <div className="glass-effect p-6 rounded-2xl">
              <div className="text-4xl font-bold gradient-text mb-2">5+</div>
              <div className="text-white/80">
                {language === 'en' ? 'Cities' : 'مدن'}
              </div>
            </div>
            <div className="glass-effect p-6 rounded-2xl">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-white/80">
                {language === 'en' ? 'Support' : 'دعم'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};