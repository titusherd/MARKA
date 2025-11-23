import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  title: string;
  craftsman: string;
  location: string;
  imageUrl: string;
  verified: boolean;
}

const ProductCard = ({ title, craftsman, location, imageUrl, verified }: ProductCardProps) => {
  const navigate = useNavigate();
  
  return (
    <Card 
      className="group overflow-hidden border-0 shadow-card hover-lift bg-card cursor-pointer"
      onClick={() => navigate("/product/UCT-001-2024")}
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Verification badge */}
        {verified && (
          <div className="absolute top-4 right-4 badge-shine">
            <div className="bg-gold text-gold-foreground px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
              <Shield className="h-4 w-4" />
              <span className="text-xs font-semibold">Terverifikasi</span>
            </div>
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="space-y-1 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            <span className="font-medium text-foreground">Pengrajin:</span>
            {craftsman}
          </p>
          <p className="flex items-center gap-2">
            <span className="font-medium text-foreground">Asal:</span>
            {location}
          </p>
        </div>

        {/* Tags */}
        <div className="flex gap-2 pt-2">
          <Badge variant="secondary" className="text-xs">
            Budaya Tradisional
          </Badge>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
