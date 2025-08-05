import { Eye, Star } from "lucide-react";

interface VisionSectionProps {
  language: 'en' | 'ar';
}

export const VisionSection = ({ language }: VisionSectionProps) => {
  const content = {
    en: {
      title: "Our Vision",
      vision: {
        title: "Vision",
        description: "To be the leading Saudi group in developing and operating digital platforms, becoming the most pioneering contemporary element in the region."
      },
      message: {
        title: "Message", 
        description: "We strive to understand talents, skills, and capabilities from within specialized companies and professional teams through strategic professional development that operates with professional integration at all levels."
      }
    },
    ar: {
      title: "رؤيتنا",
      vision: {
        title: "الرؤية",
        description: "تكون المجموعة السعودية في تطوير وتشغيل منصات الرقمية، وتصبح أكثر العناصر الرائدة المعاصرة الأكثر تأثيراً وريادة."
      },
      message: {
        title: "الرسالة",
        description: "نسعى لفهم المواهب والمهارات والعمليات من خلال شركات متخصصة وموجهة ترقميت هندسية تعمد على فرق احترافية وكامل التشغيل بمستوى عال."
      }
    }
  };

  const { title, vision, message } = content[language];

  return (
    <section className={`section-padding bg-background relative overflow-hidden ${language === 'ar' ? 'rtl font-arabic' : 'ltr'}`}>
      {/* Tower/antenna graphic inspired background */}
      <div className="absolute inset-0 geometric-bg"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Vision Card */}
          <div className="group">
            <div className="bg-gradient-primary p-8 rounded-3xl shadow-glow transform transition-all duration-500 hover:scale-105 hover:rotate-1">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {vision.title}
                </h3>
              </div>
              <p className="text-white/90 text-lg leading-relaxed text-justify">
                {vision.description}
              </p>
            </div>
          </div>

          {/* Message Card */}
          <div className="group">
            <div className="bg-gradient-secondary p-8 rounded-3xl shadow-elevated transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {message.title}
                </h3>
              </div>
              <p className="text-white/90 text-lg leading-relaxed text-justify">
                {message.description}
              </p>
            </div>
          </div>
        </div>

        {/* Decorative tower element */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="relative">
            <div className="w-2 h-32 bg-gradient-primary rounded-full"></div>
            <div className="absolute -top-4 -left-2 w-6 h-6 border-4 border-primary rounded-full"></div>
            <div className="absolute top-8 -left-4 w-10 h-10 border-2 border-secondary rounded-full opacity-60"></div>
            <div className="absolute top-16 -left-6 w-14 h-14 border border-primary rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};