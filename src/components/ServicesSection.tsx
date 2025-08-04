import { Bot, Zap, Brain, Rocket } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      emoji: "🤖",
      title: "Intelligent Chatbots",
      description: "Advanced conversational AI powered by GPT-4 and custom neural networks that understand context and provide personalized responses to enhance customer engagement.",
      features: [
        "Natural Language Processing with 99.9% accuracy",
        "Multi-platform Integration (Web, Mobile, Slack, Teams)", 
        "24/7 Intelligent Customer Support",
        "Custom Training with Machine Learning Analytics"
      ]
    },
    {
      icon: Zap,
      emoji: "⚡",
      title: "AI Process Automation",
      description: "Streamline your business processes with intelligent RPA and machine learning automation that adapts and learns from your workflows using advanced algorithms.",
      features: [
        "AI-powered Process Optimization",
        "Intelligent Workflow Automation",
        "Predictive Data Analysis & Deep Learning Insights", 
        "Seamless Integration with Enterprise Systems"
      ]
    },
    {
      icon: Brain,
      emoji: "🧠",
      title: "Custom AI & Machine Learning",
      description: "Bespoke neural networks and AI solutions designed specifically for your unique business challenges using TensorFlow, PyTorch, and cutting-edge ML frameworks.",
      features: [
        "Custom Neural Network Development",
        "Industry-Specific AI Models (Healthcare, Finance, E-commerce)",
        "Scalable Cloud Architecture (AWS, Azure, GCP)",
        "MLOps & Continuous Model Improvement"
      ]
    },
    {
      icon: Rocket,
      emoji: "🚀", 
      title: "Autonomous AI Agents",
      description: "Next-generation autonomous AI systems that can make complex decisions, perform sophisticated tasks, and adapt to changing environments with minimal human intervention.",
      features: [
        "Autonomous Decision-Making with Reinforcement Learning",
        "Multi-Agent Coordination & Swarm Intelligence",
        "Self-Learning & Adaptive Capabilities",
        "Goal-Oriented Behavior with Strategic Planning"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="holographic-text">Advanced AI Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Enterprise-grade AI solutions powered by <span className="text-primary font-semibold">machine learning</span>, 
            <span className="text-accent font-semibold"> neural networks</span>, and 
            <span className="text-secondary font-semibold"> deep learning algorithms</span> tailored to transform your business operations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass glass-hover rounded-xl p-8 group ai-glow relative overflow-hidden">
              {/* AI Background Pattern */}
              <div className="absolute inset-0 neural-network-bg opacity-20"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="text-4xl animate-neural-sync">{service.emoji}</div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                  <div className="ml-auto">
                    <div className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                      AI POWERED
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary animate-data-flow"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;