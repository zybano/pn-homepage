import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandFacebook,
  IconShieldCheck,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import pricingVector from "../assets/pricing_page_vector.svg";

const LandingFooter = () => {
  const sections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features#explore" },
        { name: "How it Works", href: "/#how-it-works" },
        { name: "Pricing", href: "/pricing" },
        { name: "Integrations", href: "/integrations" },
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
        { name: "Chat with Us", href: "/chat" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#040523] pb-10 pt-24 text-white">
      {/* Background Geometric Vector */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.05] pointer-events-none">
        <img
          src={pricingVector}
          alt=""
          className="absolute -right-40 top-0 h-[1200px] w-auto rotate-[15deg]"
        />
        <img
          src={pricingVector}
          alt=""
          className="absolute -left-60 bottom-0 h-[1000px] w-auto -rotate-[165deg] opacity-60"
        />
      </div>

      {/* Radial Gradient for Glow */}
      <div className="absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-[#3b4fe8]/20 blur-[120px]" />
      <div className="absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-[#3b4fe8]/15 blur-[100px]" />

      <div className="container-custom relative z-10 mx-auto max-w-[1320px] px-6">
        <div className="mb-20 grid gap-16 lg:grid-cols-[1.2fr_2fr]">
          {/* Brand Col */}
          <div>
            <Link to="/" className="mb-6 inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#5768fd] shadow-lg shadow-[#5768fd]/30">
                <svg
                  width="26"
                  height="26"
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
              <span className="text-3xl font-bold tracking-tight text-white">
                PrecisionNote
              </span>
            </Link>
            <p className="mb-6 max-w-sm text-[18px] leading-[28px] text-white/70">
              AI-powered clinical documentation for modern physicians.
            </p>

            <div className="mb-10 flex items-center gap-2 text-[#00d492]">
              <IconShieldCheck size={20} className="stroke-[2.5px]" />
              <span className="text-[14px] font-bold tracking-wide uppercase">
                HIPAA · HL7 FHIR Compliant
              </span>
            </div>

            <div className="flex max-w-md items-center gap-3">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Subscribe to Our Newsletter"
                  className="h-[52px] w-full rounded-2xl border border-white/20 bg-white/5 px-5 text-[15px] text-white placeholder:text-white/40 focus:border-[#5768fd]/50 focus:outline-none transition-all"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="h-[52px] rounded-2xl bg-[#5768fd] px-8 text-[16px] font-bold text-white shadow-lg shadow-[#5768fd]/20 transition-all hover:bg-[#4a5af7] hover:shadow-[#5768fd]/40"
              >
                Subscribe
              </motion.button>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {sections.map((section) => (
              <div key={section.title}>
                <h4 className="mb-7 text-[15px] font-bold uppercase tracking-[2px] text-white/50">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      {link.href.startsWith("/") ? (
                        <Link
                          to={link.href}
                          className="text-[16px] font-medium text-white/70 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-[16px] font-medium text-white/70 hover:text-white transition-colors"
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

        {/* Bottom Bar */}
        <div className="flex flex-col gap-8 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <p className="text-[16px] font-medium text-white/50">
              ©2025 PrecisionNote Inc. All rights reserved
            </p>
          </div>
          <div className="flex items-center gap-8 text-white/50">
            <span className="text-[15px] font-bold uppercase tracking-wider text-white/30">
              Follow Us
            </span>
            <div className="flex items-center gap-6">
              {[
                IconBrandTwitter,
                IconBrandLinkedin,
                IconBrandInstagram,
                IconBrandFacebook,
              ].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <Icon size={24} stroke={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
