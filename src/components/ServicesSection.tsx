import { Bot, Zap, Brain, Rocket } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      emoji: "🤖",
      title: "Intelligent Chatbots",
      description: "Advanced conversational AI that understands context and provides personalized responses to enhance customer engagement.",
      features: [
        "Natural Language Processing",
        "Multi-platform Integration", 
        "24/7 Customer Support",
        "Custom Training & Analytics"
      ]
    },
    {
      icon: Zap,
      emoji: "⚡",
      title: "AI Automation",
      description: "Streamline your business processes with intelligent automation that adapts and learns from your workflows.",
      features: [
        "Process Optimization",
        "Workflow Automation",
        "Data Analysis & Insights", 
        "Integration with Existing Systems"
      ]
    },
    {
      icon: Brain,
      emoji: "🧠",
      title: "Custom AI Applications",
      description: "Bespoke AI solutions designed specifically for your unique business challenges and requirements.",
      features: [
        "Tailored AI Models",
        "Industry-Specific Solutions",
        "Scalable Architecture",
        "Ongoing Support & Maintenance"
      ]
    },
    {
      icon: Rocket,
      emoji: "🚀", 
      title: "Agentic AI Systems",
      description: "Autonomous AI agents that can make decisions, perform complex tasks, and adapt to changing environments independently.",
      features: [
        "Autonomous Decision Making",
        "Multi-Agent Coordination",
        "Self-Learning Capabilities",
        "Goal-Oriented Behavior"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">AI Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to your business needs, from intelligent chatbots to complex automation systems
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass glass-hover rounded-xl p-8 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{service.emoji}</div>
                <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;