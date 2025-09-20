import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const FeaturedDeals = () => {
  // Mock data for demonstration
  const featuredProducts = [
    {
      id: "1",
      name: "Apple iPhone 15 Pro Max 256GB Natural Titanium",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
      category: "Smartphones",
      lowestPrice: 1099.99,
      highestPrice: 1299.99,
      averageRating: 4.6,
      reviewCount: 2847,
      priceChange: -3.2,
      deals: [
        { retailer: "Amazon", price: 1099.99, rating: 4.8, inStock: true },
        { retailer: "Best Buy", price: 1149.99, rating: 4.5, inStock: true, isLocal: true, distance: "2.3 mi" },
        { retailer: "Apple Store", price: 1199.99, rating: 4.9, inStock: false },
        { retailer: "B&H Photo", price: 1179.99, rating: 4.7, inStock: true },
      ]
    },
    {
      id: "2", 
      name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      category: "Audio",
      lowestPrice: 349.99,
      highestPrice: 399.99,
      averageRating: 4.8,
      reviewCount: 1523,
      priceChange: 1.5,
      deals: [
        { retailer: "Costco", price: 349.99, rating: 4.6, inStock: true, isLocal: true, distance: "5.1 mi" },
        { retailer: "Amazon", price: 379.99, rating: 4.8, inStock: true },
        { retailer: "Target", price: 389.99, rating: 4.4, inStock: true, isLocal: true, distance: "3.7 mi" },
      ]
    },
    {
      id: "3",
      name: "MacBook Air 15-inch M3 Chip 8GB RAM 256GB SSD",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
      category: "Laptops",
      lowestPrice: 1199.99,
      highestPrice: 1399.99, 
      averageRating: 4.7,
      reviewCount: 856,
      priceChange: -1.8,
      deals: [
        { retailer: "Education Store", price: 1199.99, rating: 4.9, inStock: true },
        { retailer: "Amazon", price: 1249.99, rating: 4.7, inStock: true },
        { retailer: "Best Buy", price: 1299.99, rating: 4.5, inStock: true, isLocal: true, distance: "2.3 mi" },
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