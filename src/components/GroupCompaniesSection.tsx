import { Building2, Users, Lightbulb, Target, Zap } from "lucide-react";

interface GroupCompaniesSectionProps {
  language: 'en' | 'ar';
}

export const GroupCompaniesSection = ({ language }: GroupCompaniesSectionProps) => {
  const content = {
    en: {
      title: "Group Companies",
      companies: [
        {
          number: "01",
          name: "Layali Shado",
          description: "Operations Organization and Current Proposals",
          icon: Building2
        },
        {
          number: "02", 
          name: "Tempo Talent",
          description: "HR Management and Talent Development",
          icon: Users
        },
        {
          number: "03",
          name: "Stage Core",
          description: "Logistics and Equipment Solutions",
          icon: Target
        },
        {
          number: "04",
          name: "Brandora",
          description: "Creative Digital Marketing Agency specialized in Digital Operations",
          icon: Lightbulb
        },
        {
          number: "05",
          name: "Vibe X",
          description: "Digital Pathways Operations and Services",
          icon: Zap
        }
      ]
    },
    ar: {
      title: "شركات المجموعة",
      companies: [
        {
          number: "01",
          name: "ليالي شدو",
          description: "تنظيم العمليات والعروض الجارية",
          icon: Building2
        },
        {
          number: "02",
          name: "تمبو تالنت", 
          description: "إدارة وتأهيل الموارد والمواهب",
          icon: Users
        },
        {
          number: "03",
          name: "ستيج كور",
          description: "حلول لوجستية وتجهيزات",
          icon: Target
        },
        {
          number: "04",
          name: "براندورا",
          description: "وكالة تسويق إبداعي متخصصة في صناعة العمليات الرقمية",
          icon: Lightbulb
        },
        {
          number: "05",
          name: "فايب إكس",
          description: "تشغيل المسارات والعمليات الرقمية",
          icon: Zap
        }
      ]
    }
  };

  const { title, companies } = content[language];

  return (
    <section className={`section-padding bg-background relative overflow-hidden ${language === 'ar' ? 'rtl font-arabic' : 'ltr'}`}>
      {/* 3D Cube background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-primary transform rotate-12 floating-animation"></div>
        <div className="absolute bottom-32 right-20 w-12 h-12 bg-gradient-secondary transform -rotate-12 floating-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-primary/30 transform rotate-45 floating-animation" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-8">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {companies.map((company, index) => {
            const IconComponent = company.icon;
            return (
              <div key={index} className="group relative">
                {/* 3D Cube effect */}
                <div className="relative transform transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2">
                  {/* Main cube face */}
                  <div className={`relative bg-gradient-${index % 2 === 0 ? 'primary' : 'secondary'} p-8 rounded-2xl shadow-glow`}>
                    {/* Company number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-elevated">
                      <span className="text-2xl font-bold text-primary">{company.number}</span>
                    </div>

                    {/* Cube side effect */}
                    <div className={`absolute -bottom-2 -right-2 w-full h-full bg-gradient-${index % 2 === 0 ? 'secondary' : 'primary'} rounded-2xl opacity-60 -z-10`}></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 text-center">
                        {company.name}
                      </h3>

                      <p className="text-white/90 text-center leading-relaxed">
                        {company.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connecting lines for visual flow */}
                {index < companies.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary opacity-30 z-0"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Central connecting element */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-32 bg-gradient-primary rounded-full shadow-glow flex items-center justify-center relative">
            <div className="text-white font-bold text-xl">{companies.length}</div>
            <div className="absolute inset-0 border-4 border-dashed border-white/30 rounded-full animate-spin" style={{animationDuration: '10s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};