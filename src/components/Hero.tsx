import { Button } from "@/components/ui/button";
import heroImage from "@/assets/bowl-hero.jpg";

interface HeroProps {
  language: 'es' | 'en';
}

const Hero = ({ language }: HeroProps) => {
  const texts = {
    es: {
      title: 'Bowl Collection',
      subtitle: 'Explora nuestra colección de bowls que combina estilo y practicidad, perfectos para cualquier mesa.',
      cta: 'Explorar Colección'
    },
    en: {
      title: 'Bowl Collection',
      subtitle: 'Explore our collection of bowls that combine style and practicality, perfect for any table.',
      cta: 'Explore Collection'
    }
  };

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left fade-in">
            <h1 className="text-hero text-foreground mb-6">
              {texts[language].title}
            </h1>
            <p className="text-elegant text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              {texts[language].subtitle}
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToProducts}
              className="hover-lift"
            >
              {texts[language].cta}
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative fade-in">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={heroImage}
                alt="Featured bowl"
                className="w-full h-auto object-cover hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;