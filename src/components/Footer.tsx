import { Mail, Phone, MapPin, Instagram, Twitter, Facebook } from "lucide-react";

interface FooterProps {
  language: 'es' | 'en';
}

const Footer = ({ language }: FooterProps) => {
  const texts = {
    es: {
      contact: 'Contacto',
      navigation: 'Navegación',
      social: 'Síguenos',
      copyright: '© 2024 Bowl Collection. Todos los derechos reservados.',
      nav: {
        home: 'Inicio',
        products: 'Productos',
        collections: 'Colecciones',
        about: 'Sobre nosotros',
        shipping: 'Envíos',
        returns: 'Devoluciones'
      }
    },
    en: {
      contact: 'Contact',
      navigation: 'Navigation',
      social: 'Follow us',
      copyright: '© 2024 Bowl Collection. All rights reserved.',
      nav: {
        home: 'Home',
        products: 'Products',
        collections: 'Collections',
        about: 'About us',
        shipping: 'Shipping',
        returns: 'Returns'
      }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      text: 'hello@bowlcollection.com'
    },
    {
      icon: Phone,
      text: '+1 (555) 123-4567'
    },
    {
      icon: MapPin,
      text: language === 'es' ? 'Barcelona, España' : 'Barcelona, Spain'
    }
  ];

  const navigationLinks = [
    { name: texts[language].nav.home, href: '#home' },
    { name: texts[language].nav.products, href: '#products' },
    { name: texts[language].nav.collections, href: '#collections' },
    { name: texts[language].nav.about, href: '#about' },
    { name: texts[language].nav.shipping, href: '#shipping' },
    { name: texts[language].nav.returns, href: '#returns' }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-light tracking-wide mb-4">
              Bowl<span className="text-primary">.</span>
            </h3>
            <p className="text-background/70 leading-relaxed">
              {language === 'es' 
                ? 'Creamos bowls únicos que combinan diseño elegante con funcionalidad práctica para transformar cada comida en una experiencia especial.'
                : 'We create unique bowls that combine elegant design with practical functionality to transform every meal into a special experience.'
              }
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-4">{texts[language].contact}</h4>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-background/70">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-medium mb-4">{texts[language].navigation}</h4>
            <div className="space-y-2">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-background/70 hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-medium mb-4">{texts[language].social}</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/50 text-sm">
            {texts[language].copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;