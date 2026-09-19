import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'About', href: '/company' },
    { 
      name: 'Services', 
      href: '/services', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Custom Software Development', href: '/services/custom-software-development' },
        { name: 'AI Integration & Automation', href: '/services/ai-integration-automation' },
        { name: 'Custom ERP Development', href: '/services/erp-development' },
        { name: 'Business Process Automation', href: '/services/business-automation' },
        { name: 'SaaS Product Development', href: '/services/saas-product-development' },
      ]
    },
    { name: 'Case Studies', href: '/our-work' },
    { name: 'Insights', href: '/products' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-2.5 sm:py-3' 
        : 'bg-white/90 backdrop-blur-sm border-b border-slate-100/60 py-3 sm:py-3.5'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center group py-0.5">
            <img 
              src="/upscala%20nav%20logo.png" 
              alt="Upscala Agentix" 
              className="h-8 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]" 
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <div 
                    className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-[#0066FF] transition-colors py-2 cursor-pointer"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link to={link.href} className="hover:text-[#0066FF]">
                      {link.name}
                    </Link>
                    <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#0066FF] transition-transform duration-200 group-hover:rotate-180" />
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-1 w-64 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-100 shadow-xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5 mb-1">
                        Core Capabilities
                      </div>
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium text-slate-700 hover:text-[#0066FF] hover:bg-blue-50/80 transition-colors"
                        >
                          <span>{item.name}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#0066FF]" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className="text-sm font-semibold text-slate-600 hover:text-[#0066FF] transition-colors py-2"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Contact Us Text Link */}
            <Link
              to="/project-enquiry"
              className="text-sm font-semibold text-slate-700 hover:text-[#0066FF] transition-colors px-3 py-2"
            >
              Contact Us
            </Link>

            {/* Phone Icon CTA Button */}
            <a
              href="tel:+1234567890"
              title="Speak with an Advisor"
              aria-label="Call Upscala Agentix"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:border-[#0066FF] hover:bg-blue-50/50 text-[#0B192C] hover:text-[#0066FF] flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow group"
            >
              <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
            </a>

            {/* Consultation Pill CTA Button */}
            <Link
              to="/book-consultation"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#0B192C] to-[#0066FF] hover:from-[#000B1E] hover:to-[#0052cc] shadow-md shadow-[#0066FF]/20 hover:shadow-lg hover:shadow-[#0066FF]/30 transition-all duration-200 active:scale-95"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="tel:+1234567890"
              className="w-9 h-9 rounded-full border border-slate-200 bg-white text-[#0B192C] flex items-center justify-center"
              aria-label="Call"
            >
              <Phone className="w-4 h-4 text-[#0066FF]" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0066FF] rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-2xl animate-in fade-in-50 slide-in-from-top-3 duration-200">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.name} className="py-1">
                  <Link
                    to={link.href}
                    className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-blue-50 hover:text-[#0066FF]"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <Link
                  to="/project-enquiry"
                  className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Contact Us
                </Link>
                <Link
                  to="/book-consultation"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#0B192C] to-[#0066FF]"
                >
                  <span>Book Strategy Call</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
