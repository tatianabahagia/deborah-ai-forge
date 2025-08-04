import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import aiBrainHero from "@/assets/ai-brain-hero.jpg";
import floatingAiBrain from "@/assets/floating-ai-brain.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 ai-circuit-bg opacity-20"></div>
      <div className="absolute inset-0 neural-network-bg"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float animate-neural-sync"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* Floating AI Brain */}
        <div className="absolute top-20 right-20 w-48 h-48 animate-float animate-neural-sync opacity-80">
          <img 
            src={aiBrainHero} 
            alt="AI Brain" 
            className="w-full h-full object-contain filter drop-shadow-2xl"
          />
        </div>
        
        {/* Large AI Brain Background */}
        <div className="absolute bottom-10 left-10 w-64 h-64 animate-float opacity-60" style={{animationDelay: '3s'}}>
          <img 
            src={floatingAiBrain} 
            alt="Floating AI Brain" 
            className="w-full h-full object-contain filter drop-shadow-2xl"
          />
        </div>
        
        {/* AI Data Flow Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-data-flow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 right-20 w-3 h-3 bg-accent rounded-full animate-data-flow" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/3 right-10 w-2 h-2 bg-secondary rounded-full animate-data-flow" style={{animationDelay: '5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full text-sm font-medium ai-glow">
            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center animate-ai-pulse">
              <span className="text-white font-bold text-xs">AI</span>
            </div>
            <span className="text-muted-foreground">Advanced AI Technology Leader</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="w-2 h-2 bg-secondary rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block text-foreground">Transform Your Business</span>
            <span className="block holographic-text">with Intelligent AI Solutions</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We specialize in creating <span className="text-primary font-semibold">enterprise-grade AI solutions</span>, 
            intelligent chatbots, and automation systems that revolutionize how businesses operate and engage with customers using <span className="text-accent font-semibold">cutting-edge machine learning</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="cta" 
              size="lg" 
              className="group"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our AI Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="glass" 
              size="lg" 
              className="ai-glow"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View AI Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;