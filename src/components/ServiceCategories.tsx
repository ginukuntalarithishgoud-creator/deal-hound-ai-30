import { ShoppingCart, Utensils, ShoppingBag, Car, Home, Package } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServiceCategories = () => {
  const categories = [
    {
      id: "electronics",
      title: "Electronics & Gadgets",
      icon: ShoppingCart,
      description: "Mobiles, Laptops, TVs, Appliances",
      apps: ["Flipkart", "Amazon India", "Croma", "Vijay Sales", "Reliance Digital"],
      color: "bg-blue-500"
    },
    {
      id: "groceries",
      title: "Groceries & Essentials",
      icon: ShoppingBag,
      description: "Daily needs, Fresh produce, Household items",
      apps: ["BigBasket", "Grofers", "Amazon Fresh", "JioMart", "Nature's Basket"],
      color: "bg-green-500"
    },
    {
      id: "quick-commerce",
      title: "Quick Commerce",
      icon: Package,
      description: "10-30 min delivery, Instant groceries",
      apps: ["BlinkIt", "Zepto", "Instamart", "Dunzo", "Swiggy Genie"],
      color: "bg-orange-500"
    },
    {
      id: "food-delivery",
      title: "Food Delivery",
      icon: Utensils,
      description: "Restaurants, Cloud kitchens, Meals",
      apps: ["Zomato", "Swiggy", "Uber Eats", "Box8", "Faasos"],
      color: "bg-red-500"
    },
    {
      id: "fashion",
      title: "Fashion & Lifestyle",
      icon: Home,
      description: "Clothing, Footwear, Beauty, Home decor",
      apps: ["Myntra", "Ajio", "Nykaa", "Jabong", "Koovs"],
      color: "bg-purple-500"
    },
    {
      id: "transport",
      title: "Transportation",
      icon: Car,
      description: "Cabs, Auto, Bike taxi, Car rental",
      apps: ["Ola", "Uber", "Rapido", "Bounce", "Metro"],
      color: "bg-yellow-500"
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Compare Across All Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From electronics to groceries, food delivery to fashion - compare prices across India's top platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="group hover:shadow-brand transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {category.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-muted-foreground">Popular Apps:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.apps.map((app, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Compare {category.title}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;