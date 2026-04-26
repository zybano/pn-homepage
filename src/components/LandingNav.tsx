import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { AppImages } from "../lib/data";

const logoMark =
  AppImages.AppLogo;

const LandingNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Chat with Us", href: "/chat" },
  ];

  return (
    <nav
      className={`sticky top-0 left-0 py-3 right-0 z-50 border-b border-brand-border bg-white transition-all duration-300 ${
        isScrolled ? "shadow-[0_1px_2px_rgba(0,0,0,0.04)]" : ""
      }`}
    >
      <div className="container-custom flex items-center justify-between gap-8">
        {/* Logo */}
        <Link to="/" className="flex cursor-pointer items-center gap-[6px]">
          <div className="h-[46px] w-[35px]">
            <img src={logoMark} alt="PrecisionNote logo" className="h-7 w-7" />
          </div>
          <span className="text-[22.76px] font-semibold leading-[22.76px] tracking-[1px] text-brand-blue">
            PrecisionNote
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-6 text-[16px] text-[#45556c] lg:flex">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <a
                key={link.name}
                href={link.href}
                className="font-normal leading-[24px] text-[#45556c] transition-colors hover:text-brand-blue"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={`text-[16px] font-normal transition-colors ${location.pathname === link.href ? "text-brand-blue" : "text-[#45556c] hover:text-brand-blue"}`}
              >
                {link.name}
              </Link>
            ),
          )}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <button className="min-h-[40px] rounded-lg border border-brand-border bg-[#f1f5f9] px-6 py-[10px] text-[16px] font-medium text-[#040523] transition-colors hover:bg-slate-200">
            Sign In
          </button>
          <button className="min-h-[40px] rounded-lg bg-brand-blue px-6 py-[10px] text-[16px] font-medium text-white shadow-[0px_4px_14px_0px_rgba(87,104,253,0.35)]">
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
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-brand-border"
          >
            <div className="container-custom py-6 flex flex-col gap-6">
              {navLinks.map((link) =>
                link.href.startsWith("/#") ? (
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
                ),
              )}
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
