import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-muted-foreground">AI Innovation Leader</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block text-foreground">Transform Your Business</span>
            <span className="block gradient-text">with Intelligent AI Solutions</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We specialize in creating custom AI applications, chatbots, and automation systems that revolutionize how businesses operate and engage with customers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cta" size="lg" className="group">
              Explore Our Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg">
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="glass rounded-lg p-6">
              <div className="text-3xl font-bold gradient-text">50+</div>
              <div className="text-muted-foreground">AI Projects Delivered</div>
            </div>
            <div className="glass rounded-lg p-6">
              <div className="text-3xl font-bold gradient-text">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="glass rounded-lg p-6">
              <div className="text-3xl font-bold gradient-text">24/7</div>
              <div className="text-muted-foreground">AI Support Systems</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;