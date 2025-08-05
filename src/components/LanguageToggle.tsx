import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

interface LanguageToggleProps {
  language: 'en' | 'ar';
  onToggle: () => void;
}

export const LanguageToggle = ({ language, onToggle }: LanguageToggleProps) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onToggle}
      className="glass-effect text-black border-white/30 hover:bg-white/20 transition-all duration-300"
    >
      <Languages className="h-4 w-4 mr-2" />
      {language === 'en' ? 'العربية' : 'English'}
    </Button>
  );
};