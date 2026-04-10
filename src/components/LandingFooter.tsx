import React from 'react';
import { IconBrandTwitter, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';

const LandingFooter = () => {
  const sections = [
    {
      title: "Product",
      links: ["Ambient Scribe", "Specialty Templates", "EMR Integrations", "Institutional"]
    },
    {
      title: "Resources",
      links: ["Doctor Stories", "Clinical Documentation", "Pricing", "API Docs"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "HIPAA Compliance"]
    },
    {
      title: "Support",
      links: ["Help Center", "Chat with Us"]
    }
  ];

  return (
    <footer className="bg-[#040523] text-white pt-24 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
          {/* Brand Col */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12H7L9 18L13 6L15 12H20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight">PrecisionNote</span>
            </div>
            <p className="text-slate-400 max-w-xs mb-8 text-lg leading-relaxed">
              Ambient AI clinical documentation for the modern physician.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <IconBrandTwitter size={20} />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <IconBrandLinkedin size={20} />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <IconBrandGithub size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          {sections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h4 className="font-bold text-slate-100 mb-6 uppercase tracking-widest text-xs">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-brand-blue transition-colors text-[15px]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © 2026 PrecisionNote AI. All rights reserved.
          </p>
          <div className="flex gap-8">
            <div className="flex items-center gap-2 text-slate-500">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs font-bold uppercase tracking-wider">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-xs font-bold uppercase tracking-wider">GDPR Ready</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
