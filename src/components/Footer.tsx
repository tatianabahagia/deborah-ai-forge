const Footer = () => {
  return (
    <footer className="py-12 border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold gradient-text">deborah tech</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Transform Your Business with Intelligent AI Solutions. We specialize in creating custom AI applications, chatbots, and automation systems.
            </p>
          </div>

          {/* Right Side - Contact Info */}
          <div className="text-right">
            <h4 className="font-semibold text-foreground mb-4">Contact Information</h4>
            <div className="space-y-2 text-muted-foreground">
              <div>
                <span>Indonesia</span>
              </div>
              <div>
                <a href="mailto:deborahhuda8@gmail.com" className="hover:text-primary transition-colors">
                  deborahhuda8@gmail.com
                </a>
              </div>
              <div>
                <a href="tel:+6282144234649" className="hover:text-primary transition-colors">
                  +62 821-4423-4649
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-glass-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 PT Deborah Teknologi Berjaya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;