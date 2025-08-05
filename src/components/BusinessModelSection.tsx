import { Network, Zap, Target } from "lucide-react";

interface BusinessModelSectionProps {
  language: 'en' | 'ar';
}

export const BusinessModelSection = ({ language }: BusinessModelSectionProps) => {
  const content = {
    en: {
      title: "Business Model",
      subtitle: "Strategic investment in leading digital projects and innovation development within the Kingdom, creating a comprehensive professional digital environment.",
      points: [
        "Specialized digital consultation and strategic development",
        "Professional digital project development across all sectors", 
        "Building innovative solutions and technological services"
      ]
    },
    ar: {
      title: "نموذج العمل",
      subtitle: "استثمار استراتيجي في شركات ومشاريع رقمية رائدة وقائمة، وتطوير عمليات تجارية متخصصة ضمن قطاعات الرقمية البرمجية الذكية، ضمن منظومة مؤسسية احترافية تواكب متطلبات السوق السعودي والقليلي.",
      points: [
        "استثمار استراتيجي في الشركات والمشاريع الرقمية الرائدة والقائمة",
        "تطوير عمليات تجارية متخصصة ضمن قطاعات الرقمية",
        "بناء شراكات وحلول متكاملة محلية وإقليمية وعولية"
      ]
    }
  };

  const { title, subtitle, points } = content[language];

  return (
    <section className={`section-padding bg-gradient-dark relative overflow-hidden ${language === 'ar' ? 'rtl font-arabic' : 'ltr'}`}>
      {/* Network-inspired background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full pulse-glow"></div>
        <div className="absolute top-32 left-40 w-2 h-2 bg-secondary rounded-full"></div>
        <div className="absolute top-40 left-60 w-3 h-3 bg-primary/60 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-4 h-4 bg-secondary rounded-full pulse-glow"></div>
        <div className="absolute bottom-60 right-40 w-2 h-2 bg-primary rounded-full"></div>
        
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 800">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(255, 85%, 65%)" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="hsl(140, 60%, 55%)" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
          <path d="M 100 150 Q 300 100 500 200 T 800 150" 
                stroke="url(#connectionGradient)" 
                strokeWidth="2" 
                fill="none"
                className="animate-pulse"/>
          <path d="M 150 600 Q 400 500 600 550 T 850 480" 
                stroke="url(#connectionGradient)" 
                strokeWidth="2" 
                fill="none"
                className="animate-pulse"/>
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              {title}
            </h2>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {points.map((point, index) => (
              <div key={index} className="group">
                <div className="glass-effect p-6 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-glow">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                    {index === 0 && <Network className="h-8 w-8 text-white" />}
                    {index === 1 && <Zap className="h-8 w-8 text-white" />}
                    {index === 2 && <Target className="h-8 w-8 text-white" />}
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed">
                    {point}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};