import { Brain, TrendingUp, MapPin, Shield, Bell, Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Review Analysis",
      description: "Get instant summaries of thousands of reviews with pros, cons, and sentiment analysis powered by advanced NLP.",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Predictive Pricing",
      description: "Our ML algorithms analyze historical data to predict price drops and help you time your purchases perfectly.",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      title: "Local Store Integration",
      description: "Discover in-store deals near you with real-time inventory tracking and price matching opportunities.",
      gradient: "bg-gradient-to-br from-green-500 to-teal-500"
    },
    {
      icon: Shield,
      title: "Verified Reviews",
      description: "Only authentic, verified purchase reviews make it through our AI filtering system for maximum trust.",
      gradient: "bg-gradient-to-br from-orange-500 to-red-500"
    },
    {
      icon: Bell,
      title: "Smart Price Alerts",
      description: "Set intelligent alerts that notify you when prices drop, stock becomes available, or better deals appear.",
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-500"
    },
    {
      icon: Users,
      title: "Personalized Recommendations",
      description: "Get tailored product suggestions based on your browsing history, preferences, and purchase patterns.",
      gradient: "bg-gradient-to-br from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Intelligent Shopping, <span className="text-primary">Simplified</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our cutting-edge technology combines AI, machine learning, and real-time data 
            to revolutionize how you discover and purchase products online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-brand transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;