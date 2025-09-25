import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  tags: string[];
  description: string;
  language: 'es' | 'en';
}

const ProductCard = ({ name, price, originalPrice, image, tags, description, language }: ProductCardProps) => {
  const texts = {
    es: {
      details: 'Ver detalles'
    },
    en: {
      details: 'View details'
    }
  };

  return (
    <div className="group bg-card rounded-xl overflow-hidden hover-lift border border-muted">
      {/* Product Image */}
      <div className="aspect-square overflow-hidden bg-muted/30">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Product Name */}
        <h3 className="text-product-title text-foreground mb-2">{name}</h3>

        {/* Description */}
        <p className="text-elegant text-sm mb-4 line-clamp-2">{description}</p>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-foreground">{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
            )}
          </div>
          <Button variant="minimal" size="sm">
            {texts[language].details}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;