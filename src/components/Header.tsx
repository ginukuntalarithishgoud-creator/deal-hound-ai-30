import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality will be implemented with backend
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Compare & Buy</span>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search across Flipkart, Amazon, BigBasket, Zomato, Swiggy & more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full bg-background border-border focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary-hover"
              >
                Search
              </Button>
            </div>
          </form>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Electronics
            </Button>
            <Button variant="ghost" size="sm">
              Fashion
            </Button>
            <Button variant="ghost" size="sm">
              Groceries
            </Button>
            <Button variant="ghost" size="sm">
              Food Delivery
            </Button>
            <Button variant="ghost" size="sm">
              Local Stores
            </Button>
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <User className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;