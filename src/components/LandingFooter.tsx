import React from 'react';
import { IconBrandTwitter, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const LandingFooter = () => {
  const sections = [
    {
      title: "Product",
      links: [
        { name: "Ambient Scribe", href: "/#scribe" },
        { name: "Specialty Templates", href: "/#templates" },
        { name: "EMR Integrations", href: "/#integrations" },
        { name: "Pricing", href: "/pricing" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Doctor Stories", href: "#" },
        { name: "Clinical Documentation", href: "#" },
        { name: "API Docs", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "HIPAA Compliance", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Chat with Us", href: "/#chat" }
      ]
    }
  ];

  return (
    <footer className="bg-[#040523] text-white pt-32 pb-12 relative overflow-hidden">
      {/* Footer Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-16 mb-24">
          {/* Brand Col */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-10 transition-transform hover:scale-105 inline-flex">
              <div className="w-12 h-12 bg-brand-blue rounded-2xl flex items-center justify-center shadow-lg shadow-brand-blue/20">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12H7L9 18L13 6L15 12H20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-3xl font-black tracking-tighter">PrecisionNote<span className="text-brand-blue">.</span></span>
            </Link>
            <p className="text-slate-400 max-w-xs mb-10 text-xl leading-relaxed font-medium">
              The ambient intelligence layer for the modern clinical workflow.
            </p>
            <div className="flex gap-5">
              {[IconBrandTwitter, IconBrandLinkedin, IconBrandGithub].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl hover:bg-brand-blue hover:text-white transition-all duration-300 border border-white/5">
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {sections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h4 className="font-black text-white mb-8 uppercase tracking-[0.2em] text-[11px] opacity-40">{section.title}</h4>
              <ul className="space-y-5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/') ? (
                      <Link to={link.href} className="text-slate-400 hover:text-brand-blue transition-colors text-[17px] font-bold">
                        {link.name}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-slate-400 hover:text-brand-blue transition-colors text-[17px] font-bold">
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-slate-500 text-sm font-bold opacity-60">
            © 2026 PrecisionNote AI. All rights reserved. Built for physicians, by physicians.
          </p>
          <div className="flex gap-10">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.5)]" />
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;

