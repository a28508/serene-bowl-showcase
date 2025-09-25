import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface NavbarProps {
  language: 'es' | 'en';
  onLanguageChange: (lang: 'es' | 'en') => void;
}

const Navbar = ({ language, onLanguageChange }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState('home');

  const texts = {
    es: {
      home: 'Inicio',
      products: 'Productos',
      collections: 'Colecciones',
      cta: 'Comprar ahora'
    },
    en: {
      home: 'Home',
      products: 'Products',
      collections: 'Collections',
      cta: 'Shop now'
    }
  };

  const navItems = [
    { id: 'home', label: texts[language].home },
    { id: 'products', label: texts[language].products },
    { id: 'collections', label: texts[language].collections }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-light tracking-wide text-foreground">
              Bowl<span className="text-primary">.</span>
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right side - Language selector and CTA */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <button
                onClick={() => onLanguageChange(language === 'es' ? 'en' : 'es')}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {language === 'es' ? 'EN' : 'ES'}
              </button>
            </div>

            {/* CTA Button */}
            <Button variant="hero" size="sm">
              {texts[language].cta}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;