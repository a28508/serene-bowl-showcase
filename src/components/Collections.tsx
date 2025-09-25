import { Button } from "@/components/ui/button";
import bowlCollection from "@/assets/bowl-collection-1.jpg";
import bowlWood from "@/assets/bowl-wood.jpg";
import bowlSteel from "@/assets/bowl-steel.jpg";

interface CollectionsProps {
  language: 'es' | 'en';
}

const Collections = ({ language }: CollectionsProps) => {
  const texts = {
    es: {
      title: 'Nuestras Colecciones',
      subtitle: 'Explora nuestras colecciones cuidadosamente curadas para cada estilo',
      explore: 'Explorar',
      collections: {
        minimalist: {
          title: 'Minimalistas',
          description: 'Líneas limpias y elegancia atemporal. Perfectos para espacios modernos que valoran la simplicidad.'
        },
        natural: {
          title: 'Naturales',
          description: 'Materiales orgánicos y texturas auténticas. Conecta con la naturaleza en cada comida.'
        },
        modern: {
          title: 'Modernos',
          description: 'Diseño contemporáneo y funcionalidad avanzada. Para quienes buscan innovación en la mesa.'
        }
      }
    },
    en: {
      title: 'Our Collections',
      subtitle: 'Explore our carefully curated collections for every style',
      explore: 'Explore',
      collections: {
        minimalist: {
          title: 'Minimalists',
          description: 'Clean lines and timeless elegance. Perfect for modern spaces that value simplicity.'
        },
        natural: {
          title: 'Natural',
          description: 'Organic materials and authentic textures. Connect with nature in every meal.'
        },
        modern: {
          title: 'Modern',
          description: 'Contemporary design and advanced functionality. For those seeking innovation at the table.'
        }
      }
    }
  };

  const collections = [
    {
      id: 'minimalist',
      image: bowlCollection,
      title: texts[language].collections.minimalist.title,
      description: texts[language].collections.minimalist.description
    },
    {
      id: 'natural',
      image: bowlWood,
      title: texts[language].collections.natural.title,
      description: texts[language].collections.natural.description
    },
    {
      id: 'modern',
      image: bowlSteel,
      title: texts[language].collections.modern.title,
      description: texts[language].collections.modern.description
    }
  ];

  return (
    <section id="collections" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-section-title text-foreground mb-4">
            {texts[language].title}
          </h2>
          <p className="text-elegant text-lg max-w-2xl mx-auto">
            {texts[language].subtitle}
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div 
              key={collection.id}
              className="group bg-card rounded-xl overflow-hidden hover-lift border border-muted fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Collection Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Collection Info */}
              <div className="p-8">
                <h3 className="text-xl font-medium text-foreground mb-3">
                  {collection.title}
                </h3>
                <p className="text-elegant mb-6">
                  {collection.description}
                </p>
                <Button variant="minimal" size="sm">
                  {texts[language].explore}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;