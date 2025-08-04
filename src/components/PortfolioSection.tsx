import { Button } from "@/components/ui/button";
import { ExternalLink, Play, MapPin, MessageSquare, Calendar, DollarSign, Navigation, Clock, Bot } from "lucide-react";
import aiTravelDemo from "@/assets/ai-travel-demo.jpg";

const PortfolioSection = () => {
  const featuredProject = {
    title: "AI Travel Itinerary Generator",
    description: "An intelligent travel planning system powered by GPT-4 and custom neural networks that creates personalized itineraries based on user preferences. Integrated with Google Maps AI for optimal routing and machine learning algorithms for smart recommendations.",
    features: [
      { icon: Navigation, text: "AI-powered smart route planning with Google Maps integration" },
      { icon: MessageSquare, text: "GPT-4 powered personalized recommendations engine" },
      { icon: Calendar, text: "Dynamic scheduling using machine learning algorithms" },
      { icon: Clock, text: "Real-time weather and traffic AI predictions" },
      { icon: DollarSign, text: "Budget optimization using predictive analytics" },
      { icon: MapPin, text: "Multi-destination planning with neural pathfinding" }
    ],
    technologies: [
      "ChatGPT-4 API", "Google Maps AI API", "TensorFlow.js", "React.js", "Node.js", "MongoDB", "TypeScript", "Express.js", "Machine Learning"
    ]
  };

  const otherProjects = [
    {
      title: "Intelligent Customer Support Bot",
      category: "Chatbot Solutions",
      description: "Advanced chatbot system with natural language processing for automated customer service"
    },
    {
      title: "Business Process Automation", 
      category: "Automation Solutions",
      description: "AI-powered automation system that streamlines repetitive business tasks and workflows"
    },
    {
      title: "Agentic AI Assistant",
      category: "Agentic AI", 
      description: "Autonomous AI agent that can perform complex tasks and make decisions independently"
    }
  ];

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="holographic-text">AI Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Showcasing our cutting-edge <span className="text-primary font-semibold">machine learning applications</span> and 
            <span className="text-accent font-semibold"> neural network solutions</span> across different industries
          </p>
        </div>

        {/* Featured Project */}
        <div className="glass rounded-2xl p-8 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
              Featured Project
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 gradient-text">{featuredProject.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {featuredProject.description}
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Key Features:</h4>
                <div className="space-y-3">
                  {featuredProject.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <feature.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-muted/50 text-foreground rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="gradient" size="lg" className="group">
                  <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo Video
                </Button>
                <Button variant="glass" size="lg">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Get My AI Solution
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="glass rounded-xl overflow-hidden ai-glow">
                <div className="relative">
                  <img 
                    src={aiTravelDemo} 
                    alt="AI Travel Itinerary Generator Demo"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-primary rounded-full animate-ping"></div>
                      <span className="text-white text-sm font-medium">AI Processing Live</span>
                    </div>
                    <p className="text-white/80 text-sm">Real-time AI travel planning in action</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Other <span className="holographic-text">AI Solutions</span></h3>
          <div className="grid md:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div key={index} className="glass glass-hover rounded-xl p-6 group ai-glow relative overflow-hidden">
                <div className="absolute inset-0 neural-network-bg opacity-10"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center animate-ai-pulse">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{project.title}</h4>
                      <span className="text-xs text-primary font-medium bg-primary/20 px-2 py-1 rounded">{project.category}</span>
                    </div>
                    <div className="ml-auto">
                      <div className="w-2 h-2 bg-accent rounded-full animate-ping"></div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="glass rounded-xl p-8 max-w-3xl mx-auto ai-glow relative overflow-hidden">
            <div className="absolute inset-0 neural-network-bg opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Ready to Build Your <span className="holographic-text">AI Solution?</span></h3>
              <p className="text-muted-foreground mb-6">
                Let's create intelligent AI applications powered by <span className="text-primary font-semibold">machine learning</span> that transform your business processes and enhance customer experiences with <span className="text-accent font-semibold">enterprise-grade automation</span>
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="cta" size="lg">Start Your AI Project</Button>
                <Button variant="glass" size="lg" className="ai-glow">Schedule AI Consultation</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
