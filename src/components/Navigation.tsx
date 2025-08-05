import { LanguageToggle } from "./LanguageToggle";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

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
      <div className="container-custom px-3 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/e65ec05a-c217-45f6-b102-c7a562e777ce.png" 
              alt="WajiH International Group Logo" 
              className="h-16 md:h-20 lg:h-24 w-auto max-w-[200px] md:max-w-[250px] lg:max-w-[300px]"
            />
          </div>
          
          {/* Desktop Navigation Menu */}
          <div className={`hidden md:flex gap-3 lg:gap-4 ${language === 'ar' ? 'font-arabic' : ''} text-sm`}>
            <button 
              onClick={() => scrollToSection('hero')}
              className={`text-white/80 hover:text-white transition-colors duration-300 px-2 py-1 ${language === 'ar' ? 'text-right' : 'text-left'}`}
            >
              {navItems.home}
            </button>
            <button 
              onClick={() => scrollToSection('intro')}
              className={`text-white/80 hover:text-white transition-colors duration-300 px-2 py-1 ${language === 'ar' ? 'text-right' : 'text-left'}`}
            >
              {navItems.about}
            </button>
            <button 
              onClick={() => scrollToSection('vision')}
              className={`text-white/80 hover:text-white transition-colors duration-300 px-2 py-1 ${language === 'ar' ? 'text-right' : 'text-left'}`}
            >
              {navItems.vision}
            </button>
            <button 
              onClick={() => scrollToSection('business')}
              className={`text-white/80 hover:text-white transition-colors duration-300 px-2 py-1 ${language === 'ar' ? 'text-right' : 'text-left'}`}
            >
              {navItems.business}
            </button>
            <button 
              onClick={() => scrollToSection('foundation')}
              className={`text-white/80 hover:text-white transition-colors duration-300 px-2 py-1 ${language === 'ar' ? 'text-right' : 'text-left'}`}
            >
              {navItems.foundation}
            </button>
            <button 
              onClick={() => scrollToSection('companies')}
              className={`text-white/80 hover:text-white transition-colors duration-300 px-2 py-1 ${language === 'ar' ? 'text-right' : 'text-left'}`}
            >
              {navItems.companies}
            </button>
            <button 
              onClick={() => scrollToSection('combined')}
              className={`text-white/80 hover:text-white transition-colors duration-300 px-2 py-1 ${language === 'ar' ? 'text-right' : 'text-left'}`}
            >
              {navItems.excellence}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className={`w-48 bg-black/90 border-white/20 backdrop-blur-md ${language === 'ar' ? 'font-arabic' : ''}`}
              >
                <DropdownMenuItem 
                  onClick={() => scrollToSection('hero')}
                  className="text-white hover:bg-white/20 cursor-pointer"
                >
                  {navItems.home}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => scrollToSection('intro')}
                  className="text-white hover:bg-white/20 cursor-pointer"
                >
                  {navItems.about}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => scrollToSection('vision')}
                  className="text-white hover:bg-white/20 cursor-pointer"
                >
                  {navItems.vision}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => scrollToSection('business')}
                  className="text-white hover:bg-white/20 cursor-pointer"
                >
                  {navItems.business}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => scrollToSection('foundation')}
                  className="text-white hover:bg-white/20 cursor-pointer"
                >
                  {navItems.foundation}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => scrollToSection('companies')}
                  className="text-white hover:bg-white/20 cursor-pointer"
                >
                  {navItems.companies}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => scrollToSection('combined')}
                  className="text-white hover:bg-white/20 cursor-pointer"
                >
                  {navItems.excellence}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <LanguageToggle language={language} onToggle={onLanguageToggle} />
        </div>
      </div>
    </nav>
  );
};