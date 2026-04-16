import React from "react";
import { IconBrandTwitter, IconBrandLinkedin, IconBrandInstagram, IconBrandFacebook } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const LandingFooter = () => {
  const sections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features#explore" },
        { name: "How it Works", href: "/#how-it-works" },
        { name: "Pricing", href: "/pricing" },
        { name: "Integrations", href: "/features#integrations" },
        { name: "Security", href: "/features#integrations" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "Clinical Blog", href: "#" },
        { name: "Webinars", href: "#" },
        { name: "Status", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Chat with Us", href: "/#chat" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#040523] to-[#3b4fe8] pb-10 pt-16 text-white">

      <div className="container-custom relative z-10">
        <div className="mb-12 grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand Col */}
          <div className="col-span-2">
            <Link to="/" className="mb-4 inline-flex items-center gap-2">
              <div className="h-10 w-10 rounded-md bg-brand-blue flex items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12H7L9 18L13 6L15 12H20"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-3xl font-semibold tracking-tight">
                PrecisionNote
              </span>
            </Link>
            <p className="mb-4 max-w-xs text-[16px] leading-[24px] text-white/60">
              AI-powered clinical documentation for modern physicians.
            </p>
            <p className="mb-6 font-mono text-[12px] text-[#00d492]">HIPAA · HL7 FHIR Compliant</p>
            <div className="mb-6 flex gap-2">
              <input className="h-9 w-[267px] rounded-lg border border-white/60 bg-transparent px-3 text-[14px] text-white/60 placeholder:text-white/60" value="Subscribe to Our Newsletter" readOnly />
              <button className="h-9 rounded-lg bg-brand-blue px-4 text-[14px] font-medium">Subscribe</button>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 font-mono text-[16px] uppercase tracking-[1.2px] text-white">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("/") ? (
                      <Link
                        to={link.href}
                        className="text-[14px] text-white/60 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-[14px] text-white/60 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/40 pt-4 md:flex-row md:items-center md:justify-between">
          <p className="text-[16px] text-white/50">
            ©2025 PrecisionNote Inc. All rights reserved
          </p>
          <div className="flex items-center gap-4 text-white/60">
            <span className="text-[16px]">Follow Us</span>
            {[IconBrandTwitter, IconBrandLinkedin, IconBrandInstagram, IconBrandFacebook].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-white transition-colors">
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
