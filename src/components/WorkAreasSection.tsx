interface WorkAreasSectionProps {
  language: 'en' | 'ar';
}

export const WorkAreasSection = ({ language }: WorkAreasSectionProps) => {
  const content = {
    en: {
      title: "Work Areas",
      areas: [
        {
          number: "1",
          title: "Operations and Proposals Organization",
          description: "Streamlined business operations and strategic proposal development"
        },
        {
          number: "2", 
          title: "HR Management and Talent Development",
          description: "Comprehensive human resources and talent development programs"
        },
        {
          number: "3",
          title: "Logistics and Equipment Solutions", 
          description: "Integrated logistics management and equipment optimization"
        },
        {
          number: "4",
          title: "Digital Pathways Operations",
          description: "Advanced digital transformation and pathway optimization"
        },
        {
          number: "5",
          title: "Digital Marketing and Creative Communications",
          description: "Strategic digital marketing and innovative communication solutions"
        },
        {
          number: "6",
          title: "Investment in Digital Projects and Promotional Activities",
          description: "Strategic investments in digital innovation and promotional initiatives"
        }
      ]
    },
    ar: {
      title: "مجالات العمل",
      areas: [
        {
          number: "1",
          title: "تنظيم العمليات والعروض الجارية",
          description: "تنظيم العمليات التجارية وتطوير العروض الاستراتيجية"
        },
        {
          number: "2",
          title: "إدارة وتأهيل المناصر والمواهب", 
          description: "برامج شاملة لإدارة الموارد البشرية وتطوير المواهب"
        },
        {
          number: "3",
          title: "حلول لوجستية وتجهيزات",
          description: "إدارة لوجستية متكاملة وتحسين التجهيزات"
        },
        {
          number: "4", 
          title: "تشغيل المسارات الرقمية",
          description: "التحول الرقمي المتقدم وتحسين المسارات"
        },
        {
          number: "5",
          title: "التسويق الرقمي والإعلام الإبداعي",
          description: "التسويق الرقمي الاستراتيجي وحلول الاتصال الإبداعية"
        },
        {
          number: "6",
          title: "الاستثمار في المشاريع الترقيمية والأنشطة الترويجية",
          description: "استثمارات استراتيجية في الابتكار الرقمي والمبادرات الترويجية"
        }
      ]
    }
  };

  const { title, areas } = content[language];

  return (
    <section className={`section-padding bg-gradient-dark relative overflow-hidden ${language === 'ar' ? 'rtl font-arabic' : 'ltr'}`}>
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
        </div>

        {/* Circular workflow diagram */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <div key={index} className="group relative">
                {/* Connection lines for larger screens */}
                {index < areas.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary opacity-50 z-0"></div>
                )}
                
                <div className="glass-effect p-6 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-glow relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg ${
                      index % 2 === 0 ? 'bg-gradient-primary' : 'bg-gradient-secondary'
                    } pulse-glow`}>
                      {area.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Central connecting circle for visual flow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-dashed border-primary/30 rounded-full hidden lg:block animate-spin" style={{animationDuration: '20s'}}></div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-6 h-6 bg-secondary/40 rounded-full floating-animation"></div>
      <div className="absolute bottom-32 left-16 w-4 h-4 bg-primary/40 rounded-full floating-animation" style={{animationDelay: '1s'}}></div>
    </section>
  );
};