import { Star, Quote } from "lucide-react";
import { useState } from "react";

const TestimonialsSection = () => {
  const [expandedTestimonials, setExpandedTestimonials] = useState<{[key: number]: boolean}>({});

  const toggleExpanded = (index: number) => {
    setExpandedTestimonials(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const testimonials = [
    {
      name: "Rasidah Johar",
      role: "Digital Artist & Webcomic Artist",
      content: "They're really professional in designing a good website. Take account of our concerns and brainstroming idea was fun experience for me. Fast and responsive. Thank you and the team. God bless you.😄",
      initial: "R",
      rating: 5
    },
    {
      name: "Andrew Lo", 
      role: "Entrepreneurial Management Consultant, Practitioner & Trainer in Retail, Food Services and Franchising",
      shortContent: "I highly recommend Deborah Tatia, a dynamic team of young entrepreneurs specializing in mobile application and website development. Their swift, efficient, and customized approach to digital solutions...",
      fullContent: "I highly recommend Deborah Tatia, a dynamic team of young entrepreneurs specializing in mobile application and website development. Their swift, efficient, and customized approach to digital solutions has proven to be a game-changer for my client, and I am confident they can bring the same value to your business.\n\nThrough remarkable speed and efficiency. They are able to deliver well within the agreed-upon timelines, showcasing not only technical capability but a genuine commitment to client satisfaction.\n\nWhat really sets them apart is their ability to tailor solutions to specific business needs. They took the time to understand my client's goals, ensuring a personalized development approach. This flexibility turns the project into a strategic partnership focused on achieving tangible outcomes. Their transparent and reasonable fees also offers a clear understanding of the value receive, contributing significantly to a positive return on investment.\n\nI recently introduced Deborah Tatia to our partners, and the results have exceeded expectations. The application they developed not only met but surpassed our initial expectations. I am also equally impressed with their professionalism and dedication. Clear and consistent communication, coupled with a proactive approach to address concerns, has fostered a collaborative and transparent working relationship crucial for the client's successful project outcome.\n\nIf you are in search of a team that can deliver fast, efficient, and customized digital solutions at reasonable (inexpensive) fees, Deborah Tatia is the ideal choice. They have consistently provided exceptional value for money, and I believe they will continue to elevate businesses through their innovative approach.\n\nIn conclusion, if you ever need services for website & mobile app development, Deborah Tatia & team should be in your shortlist for consideration! Highly recommended!\n\nBest regards, Andrew",
      initial: "A",
      rating: 5,
      hasReadMore: true
    },
    {
      name: "Benjamin Sern",
      role: "Financial Services Counsel", 
      content: "I've engaged Deborah for a website redesign consultation, and found her responsive, competent and proactive during the short process. It was a pleasure dealing with Deborah. 7/5.",
      initial: "B",
      rating: 5
    }
  ];

  const clients = [
    "National Changhua University of Education",
    "BNG Marketing Enterprise SDN BHD", 
    "Centaurus Enterprises (S) Pte Ltd"
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trusted By */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-8">Trusted by Leading Organizations</h2>
          <p className="text-muted-foreground mb-8">We're proud to have worked with these amazing clients.</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {clients.map((client, index) => (
              <div key={index} className="glass rounded-lg p-6 text-center">
                <div className="text-lg font-semibold text-foreground">{client}</div>
              </div>
            ))}
          </div>
          
          <p className="text-muted-foreground">Ready to join our growing list of satisfied clients?</p>
          <div className="mt-4">
            <button className="text-primary hover:text-primary/80 font-semibold">
              Start Your Project Today
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass glass-hover rounded-xl p-8 relative">
              <Quote className="w-8 h-8 text-primary/50 mb-4" />
              
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.hasReadMore ? (
                  <>
                    {expandedTestimonials[index] ? 
                      testimonial.fullContent?.split('\n').map((line, i) => (
                        <span key={i}>{line}<br /></span>
                      )) : 
                      testimonial.shortContent
                    }
                    <button 
                      onClick={() => toggleExpanded(index)}
                      className="text-primary ml-2 hover:text-primary/80 font-semibold"
                    >
                      {expandedTestimonials[index] ? 'Read less' : 'Read more'}
                    </button>
                  </>
                ) : (
                  testimonial.content
                )}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{testimonial.initial}</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;