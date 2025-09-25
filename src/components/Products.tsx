import ProductCard from "./ProductCard";
import bowlWhite from "@/assets/bowl-white.jpg";
import bowlOrange from "@/assets/bowl-orange.jpg";
import bowlWood from "@/assets/bowl-wood.jpg";
import bowlSteel from "@/assets/bowl-steel.jpg";
import bowlCollection from "@/assets/bowl-collection-1.jpg";
import bowlHero from "@/assets/bowl-hero.jpg";

interface ProductsProps {
  language: 'es' | 'en';
}

const Products = ({ language }: ProductsProps) => {
  const texts = {
    es: {
      title: 'Nuestra Colección',
      subtitle: 'Descubre bowls únicos que transforman cada comida en una experiencia especial',
      promo: 'Fin de semana especial: 15% dto'
    },
    en: {
      title: 'Our Collection',
      subtitle: 'Discover unique bowls that transform every meal into a special experience',
      promo: 'Special weekend: 15% off'
    }
  };

  const products = [
    {
      name: language === 'es' ? 'Bowl Minimalista Blanco' : 'Minimalist White Bowl',
      price: '$24.99',
      originalPrice: '$29.99',
      image: bowlWhite,
      tags: ['Food grade', 'Microwave safe', 'Dishwasher safe'],
      description: language === 'es' 
        ? 'Elegante bowl de cerámica blanca con diseño atemporal. Perfecto para cualquier ocasión.'
        : 'Elegant white ceramic bowl with timeless design. Perfect for any occasion.'
    },
    {
      name: language === 'es' ? 'Bowl Terracota Premium' : 'Premium Terracotta Bowl',
      price: '$32.99',
      image: bowlOrange,
      tags: ['Oven safe', 'Food grade', 'Artisan made'],
      description: language === 'es'
        ? 'Bowl artesanal en terracota natural. Aporta calidez y autenticidad a tu mesa.'
        : 'Handcrafted bowl in natural terracotta. Brings warmth and authenticity to your table.'
    },
    {
      name: language === 'es' ? 'Bowl Madera Natural' : 'Natural Wood Bowl',
      price: '$45.99',
      image: bowlWood,
      tags: ['Eco-friendly', 'Natural finish', 'Handcrafted'],
      description: language === 'es'
        ? 'Bowl de madera maciza con acabado natural. Sostenible y único en cada pieza.'
        : 'Solid wood bowl with natural finish. Sustainable and unique in every piece.'
    },
    {
      name: language === 'es' ? 'Bowl Acero Inoxidable' : 'Stainless Steel Bowl',
      price: '$28.99',
      image: bowlSteel,
      tags: ['Durable', 'Dishwasher safe', 'Modern design'],
      description: language === 'es'
        ? 'Bowl de acero inoxidable con diseño moderno. Resistente y fácil de mantener.'
        : 'Stainless steel bowl with modern design. Durable and easy to maintain.'
    },
    {
      name: language === 'es' ? 'Set Bowls Coloridos' : 'Colorful Bowl Set',
      price: '$89.99',
      originalPrice: '$105.99',
      image: bowlCollection,
      tags: ['Set of 3', 'Mix & match', 'Gift ready'],
      description: language === 'es'
        ? 'Set de tres bowls en colores vibrantes. Ideal para compartir y regalar.'
        : 'Set of three bowls in vibrant colors. Ideal for sharing and gifting.'
    },
    {
      name: language === 'es' ? 'Bowl Sage Edición Limitada' : 'Limited Edition Sage Bowl',
      price: '$55.99',
      image: bowlHero,
      tags: ['Limited edition', 'Premium ceramic', 'Collector\'s item'],
      description: language === 'es'
        ? 'Bowl en verde sage de edición limitada. Pieza de colección para los amantes del diseño.'
        : 'Limited edition sage green bowl. Collector\'s piece for design lovers.'
    }
  ];

  return (
    <section id="products" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-section-title text-foreground mb-4">
            {texts[language].title}
          </h2>
          <p className="text-elegant text-lg max-w-2xl mx-auto">
            {texts[language].subtitle}
          </p>
          {/* Promotion Banner */}
          <div className="mt-8 inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            {texts[language].promo}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard
                {...product}
                language={language}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;