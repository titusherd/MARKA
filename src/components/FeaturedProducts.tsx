import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Kain Tenun Sumba",
    craftsman: "Ibu Mariana",
    location: "Sumba, NTT",
    imageUrl: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
    verified: true,
  },
  {
    title: "Batik Tulis Solo",
    craftsman: "Pak Sutrisno",
    location: "Solo, Jawa Tengah",
    imageUrl: "https://images.unsplash.com/photo-1591588582259-e675bd2e6088?w=800&q=80",
    verified: true,
  },
  {
    title: "Ukiran Kayu Jepara",
    craftsman: "Pak Hendra",
    location: "Jepara, Jawa Tengah",
    imageUrl: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80",
    verified: true,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-24 pattern-overlay relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 animate-fade-in">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Produk Terverifikasi
            </h2>
            <p className="text-lg text-muted-foreground">
              Karya budaya autentik dari pengrajin terpilih di seluruh Indonesia
            </p>
          </div>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full group"
          >
            Lihat Semua
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={index}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
