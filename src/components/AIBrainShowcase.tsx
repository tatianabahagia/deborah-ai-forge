import aiBrainHero from "@/assets/ai-brain-hero.jpg";
import floatingAiBrain from "@/assets/floating-ai-brain.jpg";

const AIBrainShowcase = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Neural Network */}
      <div className="absolute inset-0 neural-network-bg opacity-30"></div>
      <div className="absolute inset-0 ai-circuit-bg opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powered by <span className="holographic-text">Artificial Intelligence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our neural networks and machine learning algorithms process data in real-time to deliver intelligent solutions
          </p>
        </div>

        {/* Main AI Brain Display */}
        <div className="relative">
          <div className="flex justify-center items-center">
            {/* Central AI Brain */}
            <div className="relative w-96 h-96">
              <div className="absolute inset-0 animate-float animate-neural-sync">
                <img 
                  src={floatingAiBrain} 
                  alt="AI Neural Network Brain" 
                  className="w-full h-full object-contain filter drop-shadow-2xl"
                />
              </div>
              
              {/* Pulsing Rings around Brain */}
              <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping"></div>
              <div className="absolute inset-4 rounded-full border border-accent/30 animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute inset-8 rounded-full border border-secondary/30 animate-ping" style={{animationDelay: '2s'}}></div>
              
              {/* Data Nodes around Brain */}
              <div className="absolute top-10 left-10 w-4 h-4 bg-primary rounded-full animate-ai-pulse"></div>
              <div className="absolute top-20 right-16 w-3 h-3 bg-accent rounded-full animate-ai-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-16 left-20 w-5 h-5 bg-secondary rounded-full animate-ai-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-20 right-10 w-3 h-3 bg-primary rounded-full animate-ai-pulse" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute top-1/2 left-0 w-4 h-4 bg-accent rounded-full animate-ai-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/2 right-0 w-4 h-4 bg-secondary rounded-full animate-ai-pulse" style={{animationDelay: '2.5s'}}></div>
            </div>
          </div>

          {/* Floating Side Brains */}
          <div className="absolute top-20 left-10 w-32 h-32 animate-float opacity-70" style={{animationDelay: '1s'}}>
            <img 
              src={aiBrainHero} 
              alt="AI Brain" 
              className="w-full h-full object-contain filter drop-shadow-xl"
            />
          </div>
          
          <div className="absolute bottom-20 right-10 w-40 h-40 animate-float opacity-60" style={{animationDelay: '3s'}}>
            <img 
              src={aiBrainHero} 
              alt="AI Brain" 
              className="w-full h-full object-contain filter drop-shadow-xl"
            />
          </div>
        </div>

        {/* AI Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="glass rounded-xl p-6 text-center ai-glow">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-2 holographic-text">Neural Processing</h3>
            <p className="text-muted-foreground">Advanced neural networks process complex data patterns in real-time</p>
            <div className="mt-3 flex justify-center gap-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
              <div className="w-2 h-2 bg-secondary rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
            </div>
          </div>

          <div className="glass rounded-xl p-6 text-center ai-glow">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2 holographic-text">Lightning Processing</h3>
            <p className="text-muted-foreground">Millisecond response times with distributed AI architecture</p>
            <div className="mt-3 flex justify-center gap-1">
              <div className="w-2 h-2 bg-accent rounded-full animate-ping"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
              <div className="w-2 h-2 bg-secondary rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
            </div>
          </div>

          <div className="glass rounded-xl p-6 text-center ai-glow">
            <div className="text-3xl mb-4">🔮</div>
            <h3 className="text-xl font-bold mb-2 holographic-text">Predictive Analytics</h3>
            <p className="text-muted-foreground">Machine learning algorithms predict outcomes with 99.9% accuracy</p>
            <div className="mt-3 flex justify-center gap-1">
              <div className="w-2 h-2 bg-secondary rounded-full animate-ping"></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBrainShowcase;