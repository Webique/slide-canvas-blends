interface IntroSectionProps {
  language: 'en' | 'ar';
}

export const IntroSection = ({ language }: IntroSectionProps) => {
  const content = {
    en: {
      title: "Introduction",
      description: "Wejha International Group was founded in the digital sector in Saudi Arabia and has been committed to leadership within the Kingdom since its establishment. Professional in nature, we specialize in digital consultancy and advanced development, focusing on supporting our clients with innovative technology, human resources development, and technological advancements within institutional frameworks that meet the requirements of the Saudi market.",
    },
    ar: {
      title: "مقدمة",
      description: "مجموعة وجهة إنترناشيونال هي مجموعة سعودية رائدة في قطاع الرقمي أُسست برؤية طموحة لصناعة مستقبل رقمي مزدهر داخل المملكة وخارجها. تعمل المجموعة بعمق شغف هدفي يجمع بين التشغيل المباشر داخل المملكة والاستثمار الأجنبي وتطوير العلامات التجارية المخصصة ضمن قطاعات الرقمية المتطلبات السوق السعودي والقليلي."
    }
  };

  const { title, description } = content[language];

  return (
    <section className={`section-padding bg-gradient-dark relative overflow-hidden ${language === 'ar' ? 'rtl font-arabic' : 'ltr'}`}>
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `repeating-linear-gradient(
                 45deg,
                 transparent,
                 transparent 10px,
                 rgba(255,255,255,0.1) 10px,
                 rgba(255,255,255,0.1) 20px
               )`
             }}>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {title}
            </h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
          </div>

          <div className="glass-effect p-8 md:p-12 rounded-3xl">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 right-10 w-4 h-4 bg-secondary rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 left-8 w-6 h-6 border-2 border-primary rounded-full floating-animation"></div>
    </section>
  );
};