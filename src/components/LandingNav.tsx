import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const LandingNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '/features' },
    { name: 'How it Works', href: '/#how-it-works' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Chat with Us', href: '/#chat' },
  ];

  return (
    <nav 
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg border-b border-brand-border py-3' : 'bg-white border-b border-brand-border py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between gap-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-9 h-9 bg-brand-blue rounded-md flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12H7L9 18L13 6L15 12H20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[32px] font-semibold text-brand-blue tracking-[1px] leading-none">PrecisionNote</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[16px] font-normal text-[#45556c] hover:text-brand-blue transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.href}
                className={`text-[16px] font-normal transition-colors ${location.pathname === link.href ? 'text-brand-blue' : 'text-[#45556c] hover:text-brand-blue'}`}
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="text-[16px] font-medium text-brand-navy px-6 py-2.5 bg-[#F1F5F9] border border-brand-border rounded-lg hover:bg-slate-200 transition-colors">
            Sign In
          </button>
          <button className="bg-brand-blue text-white text-[16px] font-medium px-6 py-2.5 rounded-lg shadow-lg shadow-brand-blue/20">
            Try Free for 14 Days
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-brand-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-brand-border"
          >
            <div className="container-custom py-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                link.href.startsWith('/#') ? (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className="text-lg font-medium text-brand-navy"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    key={link.name} 
                    to={link.href}
                    className="text-lg font-medium text-brand-navy"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <hr className="border-brand-border" />
              <div className="flex flex-col gap-4">
                <button className="w-full py-3 text-brand-navy font-bold bg-[#F1F5F9] rounded-full">
                  Sign In
                </button>
                <button className="w-full btn-primary py-4 font-bold">
                  Try Free for 14 Days
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default LandingNav;


