import React from 'react';
import { Shield } from 'lucide-react';
import { IconBrandTwitter, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';

const LandingFooter = () => {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'App Status', href: '#' },
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'News', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'HIPAA Compliance', href: '#' },
    ],
  };

  return (
    <footer className="bg-brand-navy text-white pt-24 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded-sm" />
              </div>
              <span className="text-xl font-bold tracking-tight">PrecisionNote</span>
            </div>
            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-sm">
              AI-powered clinical documentation for modern physicians. Reclaim 2+ hours of your life, every single day.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue transition-colors">
                <IconBrandTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue transition-colors">
                <IconBrandLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue transition-colors">
                <IconBrandGithub className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/40">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/60 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-white/10 mb-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-white/40">
              <Shield className="w-4 h-4" />
              <span>Full HIPAA Compliance</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-green-400">
              <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              <span>All Systems Operational</span>
            </div>
          </div>
          
          <div className="text-sm text-white/40">
            © {new Date().getFullYear()} PrecisionNote AI. All rights reserved. Made for doctors, by care enthusiasts.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
