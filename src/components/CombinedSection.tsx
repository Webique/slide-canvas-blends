import { Target, Users, Lightbulb, Award, Building2, Globe, MapPin, Mail, Instagram, Twitter, Linkedin, MessageCircle } from "lucide-react";

interface CombinedSectionProps {
  language: 'en' | 'ar';
}

export const CombinedSection = ({ language }: CombinedSectionProps) => {
  const content = {
    en: {
      excellenceTitle: "Excellence Points & Work Areas",
      clientsTitle: "50+ Trusted Clients",
      contactTitle: "Get In Touch",
      headquarters: "Global Presence: Jeddah • Riyadh • Cairo",
      email: "INFO@WAJIHGROUP.CO",
      website: "WWW.WAJIHGROUP.CO",
      social: "Follow @Wajihgroup",
      excellence: [
        "Professional Work Teams",
        "Strategic Partnerships", 
        "Advanced Tech Infrastructure",
        "International Awards"
      ],
      workAreas: [
        "Operations Organization",
        "HR & Talent Development",
        "Logistics Solutions",
        "Digital Marketing",
        "Investment Projects"
      ]
    },
    ar: {
      excellenceTitle: "نقاط التميز ومجالات العمل",
      clientsTitle: "أكثر من 50 عميل",
      contactTitle: "تواصل معنا",
      headquarters: "تواجد عالمي: جدة • الرياض • القاهرة",
      email: "INFO@WAJIHGROUP.CO",
      website: "WWW.WAJIHGROUP.CO", 
      social: "تابعنا @Wajihgroup",
      excellence: [
        "فرق عمل محترفة",
        "شراكات استراتيجية",
        "بنية تقنية متطورة", 
        "جوائز دولية"
      ],
      workAreas: [
        "تنظيم العمليات",
        "تطوير المواهب",
        "حلول لوجستية",
        "التسويق الرقمي",
        "مشاريع استثمارية"
      ]
    }
  };

  const { excellenceTitle, clientsTitle, contactTitle, headquarters, email, website, social, excellence, workAreas } = content[language];

  const socialLinks = [
    { 
      icon: Instagram, 
      color: 'from-pink-500 to-purple-600',
      url: 'https://instagram.com/wajihgroup',
      label: 'Instagram'
    },
    { 
      icon: MessageCircle, 
      color: 'from-green-500 to-green-600',
      url: 'https://wa.me/966500000000',
      label: 'WhatsApp'
    },
    { 
      icon: Twitter, 
      color: 'from-blue-400 to-blue-600',
      url: 'https://twitter.com/wajihgroup',
      label: 'Twitter'
    },
    { 
      icon: Linkedin, 
      color: 'from-blue-600 to-blue-800',
      url: 'https://linkedin.com/company/wajihgroup',
      label: 'LinkedIn'
    }
  ];

  return (
    <section className={`section-padding bg-gradient-dark relative overflow-hidden ${language === 'ar' ? 'rtl font-arabic' : 'ltr'}`}>
      <div className="container-custom relative z-10">
        {/* Excellence & Work Areas Combined */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              {excellenceTitle}
            </h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Excellence Points */}
            <div className="space-y-6">
              {excellence.map((point, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full shadow-glow flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="glass-effect p-4 rounded-xl flex-1">
                    <p className="text-white font-medium">{point}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Work Areas */}
            <div className="space-y-6">
              {workAreas.map((area, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full shadow-glow flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="glass-effect p-4 rounded-xl flex-1">
                    <p className="text-white font-medium">{area}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Clients & Contact Combined */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Clients Section */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              {clientsTitle}
            </h3>
            
            <div className="relative inline-block">
              <div className="w-40 h-40 bg-gradient-secondary rounded-full shadow-glow flex items-center justify-center transform hover:scale-110 transition-all duration-300 cursor-pointer">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">50+</div>
                  <div className="text-white/80 text-sm">
                    {language === 'en' ? 'Clients' : 'عميل'}
                  </div>
                </div>
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
                <div className="absolute -top-3 left-1/2 w-6 h-6 bg-primary rounded-full transform -translate-x-1/2"></div>
                <div className="absolute top-1/2 -right-3 w-4 h-4 bg-white rounded-full transform -translate-y-1/2"></div>
                <div className="absolute -bottom-3 left-1/2 w-6 h-6 bg-primary rounded-full transform -translate-x-1/2"></div>
                <div className="absolute top-1/2 -left-3 w-4 h-4 bg-white rounded-full transform -translate-y-1/2"></div>
              </div>
            </div>

            <div className="mt-8 space-y-2">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-white/80">
                {language === 'en' ? 'Client Satisfaction' : 'رضا العملاء'}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              {contactTitle}
            </h3>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="glass-effect p-4 rounded-xl flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <span className="text-white font-medium">{email}</span>
              </div>

              <div className="glass-effect p-4 rounded-xl flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <span className="text-white font-medium">{website}</span>
              </div>

              <div className="glass-effect p-4 rounded-xl flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <span className="text-white font-medium">{headquarters}</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="grid grid-cols-4 gap-4 mt-8">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    aria-label={social.label}
                  >
                    <div className="relative transform transition-all duration-300 group-hover:scale-110">
                      <div className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl shadow-glow flex items-center justify-center`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="text-center mt-6">
              <p className="text-white/80 text-sm">{social}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};