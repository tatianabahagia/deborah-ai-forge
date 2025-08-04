import { Trophy, Star, Rocket, Lightbulb, Zap } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Zap,
      emoji: "🏆",
      title: "5 International AI Hackathons",
      description: "Joined 5 international AI hackathons in 1.5 months - showcasing rapid innovation and AI expertise"
    },
    {
      icon: Trophy,
      emoji: "🥇",
      title: "Top 12 Finalist",
      description: "Alibabacloud Indonesia Hackathon 2025"
    },
    {
      icon: Star,
      emoji: "🌟", 
      title: "Top Global Business 2024",
      description: "Great Companies - Web & Mobile App Development"
    },
    {
      icon: Rocket,
      emoji: "🚀",
      title: "Finalist",
      description: "Merry Riana Entrepreneur of The Year Award 2023"
    },
    {
      icon: Lightbulb,
      emoji: "💡",
      title: "Top 20 Finalist", 
      description: "Upward 2023 by Bandung Techno Park"
    },
    {
      icon: Zap,
      emoji: "⚡",
      title: "Top 120 Finalist",
      description: "East Ventures Hackathon Competition"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition for our excellence in AI innovation and development
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="glass glass-hover rounded-xl p-8 text-center group">
              <div className="text-6xl mb-4">{achievement.emoji}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{achievement.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Community Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Giving Back</span> to Society
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We believe in making a positive impact beyond technology. We are committed to giving back to society by supporting orphanages and religious institutions in our community.
            </p>
          </div>

          <div className="glass rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/76581e5f-e568-40ca-85bc-2c3ce2abfb61.png"
                  alt="Deborah Tech giving back to community"
                  className="w-full h-full object-cover min-h-[300px]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20"></div>
              </div>
              
              {/* Content */}
              <div className="p-12 flex flex-col justify-center">
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our mission extends beyond profit - we're dedicated to helping orphanages provide better care and education, and supporting religious institutions in serving their communities.
                </p>
                
                <div className="grid grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🤝</div>
                    <div className="font-semibold text-foreground">Giving Back</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">👥</div>
                    <div className="font-semibold text-foreground">Community</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">💝</div>
                    <div className="font-semibold text-foreground">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;