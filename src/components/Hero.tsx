import { TrendingUp, Shield, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-hero text-primary-foreground py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            India's Smartest Price 
            <br />
            <span className="text-yellow-300">Comparison Platform</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
            Compare prices across Flipkart, Amazon India, Myntra, and thousands of Indian retailers. 
            Get AI-powered reviews and discover local store deals near you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 text-lg">
              Start Comparing
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-3 text-lg">
              Watch Demo
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-primary-foreground/10 backdrop-blur-sm">
              <TrendingUp className="w-8 h-8 mb-3 text-yellow-300" />
              <h3 className="font-semibold mb-2">Price Predictions</h3>
              <p className="text-sm text-primary-foreground/80">AI predicts future price changes</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-primary-foreground/10 backdrop-blur-sm">
              <Sparkles className="w-8 h-8 mb-3 text-yellow-300" />
              <h3 className="font-semibold mb-2">Smart Reviews</h3>
              <p className="text-sm text-primary-foreground/80">AI-powered review analysis</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-primary-foreground/10 backdrop-blur-sm">
              <MapPin className="w-8 h-8 mb-3 text-yellow-300" />
              <h3 className="font-semibold mb-2">Local Deals</h3>
              <p className="text-sm text-primary-foreground/80">Find nearby store discounts in your city</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-primary-foreground/10 backdrop-blur-sm">
              <Shield className="w-8 h-8 mb-3 text-yellow-300" />
              <h3 className="font-semibold mb-2">Trusted Reviews</h3>
              <p className="text-sm text-primary-foreground/80">Verified customer feedback</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;