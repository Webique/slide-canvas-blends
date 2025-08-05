import { Mail, Phone, Globe, MessageCircle, Instagram, Twitter, Linkedin } from "lucide-react";

interface ContactSectionProps {
  language: 'en' | 'ar';
}

export const ContactSection = ({ language }: ContactSectionProps) => {
  const content = {
    en: {
      title: "Contact Us",
      email: "INFO@WAJIHGROUP.CO",
      website: "WWW.WAJIHGROUP.CO", 
      social: "Follow us on social media @Wajihgroup",
      getInTouch: "Get in Touch"
    },
    ar: {
      title: "للتواصل",
      email: "INFO@WAJIHGROUP.CO",
      website: "WWW.WAJIHGROUP.CO",
      social: "تابعنا على منصات التواصل الاجتماعي @Wajihgroup",
      getInTouch: "تواصل معنا"
    }
  };

  const { title, email, website, social, getInTouch } = content[language];

  const contactMethods = [
    { icon: Mail, label: email, type: 'email' },
    { icon: Phone, label: '+966 XX XXX XXXX', type: 'phone' },
    { icon: Globe, label: website, type: 'website' },
    { icon: MessageCircle, label: social, type: 'social' }
  ];

  const socialIcons = [
    { icon: Instagram, color: 'from-pink-500 to-purple-600' },
    { icon: Twitter, color: 'from-blue-400 to-blue-600' },
    { icon: Linkedin, color: 'from-blue-600 to-blue-800' },
    { icon: MessageCircle, color: 'from-green-500 to-green-600' }
  ];

  return (
    <section className={`section-padding bg-gradient-hero relative overflow-hidden ${language === 'ar' ? 'rtl font-arabic' : 'ltr'}`}>
      {/* Floating cubes background inspired by the wooden blocks */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-8 h-8 bg-white/10 transform rotate-12 floating-animation"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-white/10 transform -rotate-12 floating-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-10 h-10 bg-white/10 transform rotate-45 floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-white/10 transform -rotate-45 floating-animation" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            {title}
          </h2>
          <div className="w-24 h-1 bg-white/40 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact methods as 3D blocks */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div key={index} className="group relative">
                    {/* 3D block effect */}
                    <div className="relative transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-1">
                      {/* Main block face */}
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                        {/* Block depth effect */}
                        <div className="absolute -bottom-2 -right-2 w-full h-full bg-white/5 rounded-2xl -z-10"></div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-white font-medium">
                              {method.label}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social media cubes */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {getInTouch}
                  </h3>
                </div>

                {/* 3D cube arrangement */}
                <div className="grid grid-cols-2 gap-4 perspective-1000">
                  {socialIcons.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <div key={index} className="group cursor-pointer">
                        <div className="relative transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-y-12">
                          {/* Main cube face */}
                          <div className={`w-20 h-20 bg-gradient-to-br ${social.color} rounded-2xl shadow-glow flex items-center justify-center relative`}>
                            <IconComponent className="h-8 w-8 text-white" />
                            
                            {/* Cube depth */}
                            <div className="absolute -bottom-1 -right-1 w-full h-full bg-black/20 rounded-2xl -z-10"></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Central connecting element */}
                <div className="mt-8 flex justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full shadow-glow flex items-center justify-center backdrop-blur-md border border-white/30">
                    <div className="w-8 h-8 bg-gradient-secondary rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-16 text-center">
            <div className="glass-effect p-8 rounded-3xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                {language === 'en' ? 'Ready to Start Your Digital Journey?' : 'مستعد لبدء رحلتك الرقمية؟'}
              </h3>
              <p className="text-white/80 mb-6">
                {language === 'en' 
                  ? 'Contact us today and let\'s build something amazing together.'
                  : 'تواصل معنا اليوم ولنبني شيئاً مذهلاً معاً.'
                }
              </p>
              <button className="bg-gradient-secondary text-white px-8 py-3 rounded-full font-medium hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                {language === 'en' ? 'Get Started' : 'ابدأ الآن'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};