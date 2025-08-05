import { Target, Users, Lightbulb, Award } from "lucide-react";

interface ExcellencePointsSectionProps {
  language: 'en' | 'ar';
}

export const ExcellencePointsSection = ({ language }: ExcellencePointsSectionProps) => {
  const content = {
    en: {
      title: "Excellence Points",
      points: [
        {
          number: "01",
          title: "Professional Work Experiences and Teams",
          description: "Expert teams with proven track record",
          icon: Target
        },
        {
          number: "02",
          title: "Strategic Partnerships with Government and Private Entities",
          description: "Strong network of institutional relationships",
          icon: Users
        },
        {
          number: "03",
          title: "Smart and Advanced Technical Infrastructure",
          description: "Cutting-edge technology solutions",
          icon: Lightbulb
        },
        {
          number: "04",
          title: "Regional and International Awards",
          description: "Recognized excellence and achievements",
          icon: Award
        }
      ]
    },
    ar: {
      title: "نقاط التميز",
      points: [
        {
          number: "01",
          title: "خبرات تنفيذية محلية وإقليمية رفيقة",
          description: "فرق عمل محترفة وموجعة",
          icon: Target
        },
        {
          number: "02",
          title: "شراكات استراتيجية مع أبرز الجهات الحكومية والخاصة",
          description: "شبكة قوية من العلاقات المؤسسية",
          icon: Users
        },
        {
          number: "03",
          title: "بنية تقنية ذكية ومتطورة",
          description: "حلول تقنية متطورة ومبتكرة",
          icon: Lightbulb
        },
        {
          number: "04",
          title: "جوائز إقليمية وعالمية",
          description: "تميز معترف به وإنجازات مؤكدة",
          icon: Award
        }
      ]
    }
  };

  const { title, points } = content[language];

  return (
    <section className={`section-padding bg-gradient-dark relative overflow-hidden ${language === 'ar' ? 'rtl font-arabic' : 'ltr'}`}>
      {/* Flowing connection background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(140, 60%, 55%)" stopOpacity="0.2"/>
              <stop offset="50%" stopColor="hsl(255, 85%, 65%)" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="hsl(140, 60%, 55%)" stopOpacity="0.2"/>
            </linearGradient>
          </defs>
          <path d="M 0 400 Q 300 350 600 400 T 1200 400" 
                stroke="url(#flowGradient)" 
                strokeWidth="4" 
                fill="none"
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

        {/* Horizontal flow design for larger screens */}
        <div className="hidden lg:block relative max-w-7xl mx-auto">
          <div className="flex items-center justify-between relative">
            {/* Connecting flow line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-secondary rounded-full transform -translate-y-1/2 z-0"></div>
            
            {points.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <div key={index} className="relative z-10 group">
                  {/* Main circle */}
                  <div className="w-32 h-32 bg-gradient-primary rounded-full shadow-glow flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300 relative">
                    <div className="text-white font-bold text-2xl">{point.number}</div>
                    
                    {/* Icon satellite */}
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="glass-effect p-6 rounded-2xl max-w-xs transform group-hover:scale-105 transition-all duration-300">
                    <h3 className="text-lg font-bold text-white mb-3 text-center">
                      {point.title}
                    </h3>
                    <p className="text-white/80 text-sm text-center leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vertical stack for mobile */}
        <div className="lg:hidden space-y-8">
          {points.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="flex items-center space-x-6 group">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full shadow-glow flex items-center justify-center group-hover:scale-110 transition-all duration-300 relative">
                    <div className="text-white font-bold text-lg">{point.number}</div>
                    <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center">
                      <IconComponent className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 glass-effect p-4 rounded-xl">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Flowing particles animation */}
        <div className="absolute top-1/4 left-10 w-3 h-3 bg-secondary rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </div>
    </section>
  );
};