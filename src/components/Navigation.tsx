import { LanguageToggle } from "./LanguageToggle";

interface NavigationProps {
  language: 'en' | 'ar';
  onLanguageToggle: () => void;
}

export const Navigation = ({ language, onLanguageToggle }: NavigationProps) => {
  const content = {
    en: {
      home: "Home",
      about: "Introduction", 
      vision: "Vision",
      business: "Business Model",
      foundation: "Foundation",
      companies: "Companies",
      excellence: "Excellence"
    },
    ar: {
      home: "الرئيسية",
      about: "مقدمة",
      vision: "رؤيتنا", 
      business: "نموذج العمل",
      foundation: "النشأة",
      companies: "الشركات",
      excellence: "التميز"
    }
  };

  const navItems = content[language];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="container-custom px-4 py-3">
        <div className={`flex items-center justify-between ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
          <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
            <div className={`text-lg md:text-xl font-bold text-white ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'en' ? 'Wejha International' : 'وجهة إنترناشيونال'}
            </div>
            
            {/* Mobile menu - simplified */}
            <div className={`hidden xl:flex ${language === 'ar' ? 'space-x-reverse space-x-3 font-arabic' : 'space-x-4'} text-xs`}>
              <button 
                onClick={() => scrollToSection('hero')}
                className={`text-white/80 hover:text-white transition-colors duration-300 ${language === 'ar' ? 'text-right' : 'text-left'}`}
              >
                {navItems.home}
              </button>
              <button 
                onClick={() => scrollToSection('intro')}
                className={`text-white/80 hover:text-white transition-colors duration-300 ${language === 'ar' ? 'text-right' : 'text-left'}`}
              >
                {navItems.about}
              </button>
              <button 
                onClick={() => scrollToSection('vision')}
                className={`text-white/80 hover:text-white transition-colors duration-300 ${language === 'ar' ? 'text-right' : 'text-left'}`}
              >
                {navItems.vision}
              </button>
              <button 
                onClick={() => scrollToSection('business')}
                className={`text-white/80 hover:text-white transition-colors duration-300 ${language === 'ar' ? 'text-right' : 'text-left'}`}
              >
                {navItems.business}
              </button>
              <button 
                onClick={() => scrollToSection('foundation')}
                className={`text-white/80 hover:text-white transition-colors duration-300 ${language === 'ar' ? 'text-right' : 'text-left'}`}
              >
                {navItems.foundation}
              </button>
              <button 
                onClick={() => scrollToSection('companies')}
                className={`text-white/80 hover:text-white transition-colors duration-300 ${language === 'ar' ? 'text-right' : 'text-left'}`}
              >
                {navItems.companies}
              </button>
              <button 
                onClick={() => scrollToSection('combined')}
                className={`text-white/80 hover:text-white transition-colors duration-300 ${language === 'ar' ? 'text-right' : 'text-left'}`}
              >
                {navItems.excellence}
              </button>
            </div>
          </div>

          <LanguageToggle language={language} onToggle={onLanguageToggle} />
        </div>
      </div>
    </nav>
  );
};