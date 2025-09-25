import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Collections from "@/components/Collections";
import Footer from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const handleLanguageChange = (lang: 'es' | 'en') => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar language={language} onLanguageChange={handleLanguageChange} />
      <Hero language={language} />
      <Products language={language} />
      <Collections language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;