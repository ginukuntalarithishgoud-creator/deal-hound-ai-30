import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const FeaturedDeals = () => {
  // Mock data for Indian market
  const featuredProducts = [
    {
      id: "1",
      name: "Apple iPhone 15 Pro Max 256GB Natural Titanium",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
      category: "Smartphones",
      lowestPrice: 89900,
      highestPrice: 104900,
      averageRating: 4.6,
      reviewCount: 2847,
      priceChange: -3.2,
      deals: [
        { retailer: "Flipkart", price: 89900, rating: 4.8, inStock: true },
        { retailer: "Amazon India", price: 92999, rating: 4.7, inStock: true },
        { retailer: "Vijay Sales", price: 95999, rating: 4.5, inStock: true, isLocal: true, distance: "2.3 km" },
        { retailer: "Croma", price: 98999, rating: 4.6, inStock: false, isLocal: true, distance: "1.8 km" },
      ]
    },
    {
      id: "2", 
      name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      category: "Audio",
      lowestPrice: 24990,
      highestPrice: 29990,
      averageRating: 4.8,
      reviewCount: 1523,
      priceChange: 1.5,
      deals: [
        { retailer: "Amazon India", price: 24990, rating: 4.8, inStock: true },
        { retailer: "Flipkart", price: 26999, rating: 4.7, inStock: true },
        { retailer: "Reliance Digital", price: 27999, rating: 4.4, inStock: true, isLocal: true, distance: "3.2 km" },
      ]
    },
    {
      id: "3",
      name: "MacBook Air 15-inch M3 Chip 8GB RAM 256GB SSD",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
      category: "Laptops",
      lowestPrice: 114900,
      highestPrice: 134900, 
      averageRating: 4.7,
      reviewCount: 856,
      priceChange: -1.8,
      deals: [
        { retailer: "Amazon India", price: 114900, rating: 4.7, inStock: true },
        { retailer: "Flipkart", price: 118999, rating: 4.6, inStock: true },
        { retailer: "Croma", price: 124900, rating: 4.5, inStock: true, isLocal: true, distance: "1.8 km" },
      ]
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-success rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-success-foreground" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Featured Deals</h2>
              <p className="text-muted-foreground">Hand-picked products with the biggest savings</p>
            </div>
          </div>
          <Button variant="outline" className="hidden md:flex items-center gap-2">
            View All Deals
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary-hover px-8 py-3">
            Explore More Products
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDeals;