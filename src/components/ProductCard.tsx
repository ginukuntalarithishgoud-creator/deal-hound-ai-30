import { Star, TrendingDown, TrendingUp, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    image: string;
    category: string;
    lowestPrice: number;
    highestPrice: number;
    averageRating: number;
    reviewCount: number;
    priceChange: number;
    deals: Array<{
      retailer: string;
      price: number;
      rating: number;
      inStock: boolean;
      isLocal?: boolean;
      distance?: string;
    }>;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const priceDifference = product.highestPrice - product.lowestPrice;
  const savingsPercent = Math.round((priceDifference / product.highestPrice) * 100);

  return (
    <Card className="group hover:shadow-brand transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-4">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <Badge variant="secondary" className="absolute top-2 left-2">
            {product.category}
          </Badge>
          {savingsPercent > 10 && (
            <Badge className="absolute top-2 right-2 bg-success text-success-foreground">
              Save {savingsPercent}%
            </Badge>
          )}
        </div>
        
        <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-1 text-sm font-medium">{product.averageRating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Price Range */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-success">${product.lowestPrice.toFixed(2)}</p>
            <p className="text-sm text-muted-foreground">
              from ${product.highestPrice.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center gap-1">
            {product.priceChange > 0 ? (
              <TrendingUp className="w-4 h-4 text-destructive" />
            ) : (
              <TrendingDown className="w-4 h-4 text-success" />
            )}
            <span className={`text-sm font-medium ${
              product.priceChange > 0 ? 'text-destructive' : 'text-success'
            }`}>
              {product.priceChange > 0 ? '+' : ''}{product.priceChange}%
            </span>
          </div>
        </div>

        {/* Top Deals Preview */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">Best Deals:</h4>
          {product.deals.slice(0, 3).map((deal, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="font-medium">{deal.retailer}</span>
                {deal.isLocal && (
                  <div className="flex items-center gap-1 text-primary">
                    <MapPin className="w-3 h-3" />
                    <span className="text-xs">{deal.distance}</span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">${deal.price.toFixed(2)}</span>
                {!deal.inStock && (
                  <Badge variant="destructive" className="text-xs py-0">
                    Out of Stock
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button className="flex-1 bg-primary hover:bg-primary-hover">
          Compare All Deals
        </Button>
        <Button variant="outline" size="icon">
          <ExternalLink className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;