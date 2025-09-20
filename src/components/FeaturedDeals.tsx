import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const FeaturedDeals = () => {
  // Mock data for Indian market with diverse categories
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
      name: "Organic Mixed Vegetables & Fruits Combo (5kg)",
      image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=300&fit=crop",
      category: "Groceries",
      lowestPrice: 299,
      highestPrice: 450,
      averageRating: 4.3,
      reviewCount: 1523,
      priceChange: -2.1,
      deals: [
        { retailer: "BigBasket", price: 299, rating: 4.5, inStock: true },
        { retailer: "BlinkIt", price: 329, rating: 4.2, inStock: true },
        { retailer: "Amazon Fresh", price: 349, rating: 4.3, inStock: true },
        { retailer: "JioMart", price: 379, rating: 4.1, inStock: true, isLocal: true, distance: "3.2 km" },
      ]
    },
    {
      id: "3",
      name: "Biryani Combo for 2 (Chicken + Mutton + Sides)",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d293?w=400&h=300&fit=crop",
      category: "Food Delivery",
      lowestPrice: 459,
      highestPrice: 649, 
      averageRating: 4.4,
      reviewCount: 856,
      priceChange: 1.2,
      deals: [
        { retailer: "Zomato", price: 459, rating: 4.4, inStock: true },
        { retailer: "Swiggy", price: 489, rating: 4.3, inStock: true },
        { retailer: "Box8", price: 529, rating: 4.2, inStock: true },
        { retailer: "Faasos", price: 549, rating: 4.1, inStock: false },
      ]
    },
    {
      id: "4",
      name: "Nike Air Force 1 White Sneakers",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
      category: "Fashion",
      lowestPrice: 6999,
      highestPrice: 8999,
      averageRating: 4.6,
      reviewCount: 2341,
      priceChange: -5.4,
      deals: [
        { retailer: "Myntra", price: 6999, rating: 4.7, inStock: true },
        { retailer: "Ajio", price: 7299, rating: 4.5, inStock: true },
        { retailer: "Nike Store", price: 7999, rating: 4.8, inStock: true, isLocal: true, distance: "4.1 km" },
        { retailer: "Amazon Fashion", price: 8299, rating: 4.4, inStock: true },
      ]
    },
    {
      id: "5",
      name: "Instant Noodles & Snacks Combo Pack",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop",
      category: "Quick Commerce",
      lowestPrice: 199,
      highestPrice: 279,
      averageRating: 4.2,
      reviewCount: 967,
      priceChange: 0.8,
      deals: [
        { retailer: "BlinkIt", price: 199, rating: 4.3, inStock: true },
        { retailer: "Zepto", price: 209, rating: 4.2, inStock: true },
        { retailer: "Instamart", price: 229, rating: 4.1, inStock: true },
        { retailer: "Dunzo", price: 249, rating: 4.0, inStock: false },
      ]
    },
    {
      id: "6",
      name: "Samsung 43-inch 4K Smart TV",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
      category: "Electronics",
      lowestPrice: 32999,
      highestPrice: 39999,
      averageRating: 4.5,
      reviewCount: 1876,
      priceChange: -2.8,
      deals: [
        { retailer: "Flipkart", price: 32999, rating: 4.6, inStock: true },
        { retailer: "Amazon India", price: 34999, rating: 4.5, inStock: true },
        { retailer: "Reliance Digital", price: 36999, rating: 4.3, inStock: true, isLocal: true, distance: "2.7 km" },
        { retailer: "Croma", price: 37999, rating: 4.4, inStock: true, isLocal: true, distance: "1.9 km" },
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
          {featuredProducts.slice(0, 6).map((product) => (
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