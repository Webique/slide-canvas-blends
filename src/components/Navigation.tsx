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
      areas: "Work Areas"
    },
    ar: {
      home: "الرئيسية",
      about: "مقدمة",
      vision: "رؤيتنا", 
      business: "نموذج العمل",
      areas: "مجالات العمل"
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
      <div className="container-custom px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-white">
              {language === 'en' ? 'Wejha International' : 'وجهة إنترناشيونال'}
            </div>
            
            <div className={`hidden md:flex space-x-6 ${language === 'ar' ? 'space-x-reverse' : ''}`}>
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                {navItems.home}
              </button>
              <button 
                onClick={() => scrollToSection('intro')}
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                {navItems.about}
              </button>
              <button 
                onClick={() => scrollToSection('vision')}
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                {navItems.vision}
              </button>
              <button 
                onClick={() => scrollToSection('business')}
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                {navItems.business}
              </button>
              <button 
                onClick={() => scrollToSection('areas')}
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                {navItems.areas}
              </button>
            </div>
          </div>

          <LanguageToggle language={language} onToggle={onLanguageToggle} />
        </div>
      </div>
    </nav>
  );
};