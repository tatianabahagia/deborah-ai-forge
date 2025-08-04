import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to transform your business with AI? Get in touch and let's discuss your project.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="glass glass-hover rounded-xl p-8 text-center group">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <a 
              href="mailto:deborahhuda8@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              deborahhuda8@gmail.com
            </a>
          </div>

          <div className="glass glass-hover rounded-xl p-8 text-center group">
            <Phone className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <a 
              href="tel:+6282144234649" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +62 821-4423-4649
            </a>
          </div>

          <div className="glass glass-hover rounded-xl p-8 text-center group">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Let's Chat</h3>
            <Button variant="cta" className="mt-2">
              Start Your AI Project
            </Button>
          </div>
        </div>

        {/* Large CTA Section */}
        <div className="glass rounded-2xl p-12 text-center relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join leading organizations who trust us to deliver cutting-edge AI solutions
            </p>
            <Button variant="cta" size="lg" className="text-lg px-8 py-4">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;