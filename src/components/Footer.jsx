import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-secondary py-16 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <a href="/" className="text-2xl font-bold text-white mb-2">UpScala Agentix</a>
            <p className="text-muted text-sm leading-relaxed">
              Custom business software.<br/>
              Connected workflows.<br/>
              An AI-ready future.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold mb-2">What we build</h3>
            <a href="/services/custom-software" className="text-sm text-muted hover:text-white transition-colors">Custom software</a>
            <a href="/services/erp" className="text-sm text-muted hover:text-white transition-colors">ERP development</a>
            <a href="/services/ai" className="text-sm text-muted hover:text-white transition-colors">AI integration</a>
            <a href="/services/automation" className="text-sm text-muted hover:text-white transition-colors">Business automation</a>
            <a href="/services" className="text-sm text-muted hover:text-white transition-colors mt-2">All services &rarr;</a>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold mb-2">Explore</h3>
            <a href="/products/civildesk" className="text-sm text-muted hover:text-white transition-colors">CivilDesk</a>
            <a href="/products/ca-eco-pro" className="text-sm text-muted hover:text-white transition-colors">CA Eco Pro</a>
            <a href="/industries" className="text-sm text-muted hover:text-white transition-colors">Industries</a>
            <a href="/our-work" className="text-sm text-muted hover:text-white transition-colors">Our work</a>
            <a href="/insights" className="text-sm text-muted hover:text-white transition-colors">Insights</a>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold mb-2">Let's connect</h3>
            <a href="/about" className="text-sm text-muted hover:text-white transition-colors">About UpScala</a>
            <a href="/how-we-work" className="text-sm text-muted hover:text-white transition-colors">How we work</a>
            <a href="/contact" className="text-sm text-muted hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 text-sm text-muted gap-4">
          <span>© {new Date().getFullYear()} UpScala Agentix. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <span className="hidden sm:inline-block">·</span>
            <span>Innovate · Build · Scale</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
