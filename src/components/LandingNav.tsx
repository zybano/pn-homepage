import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  FileText,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { AppImages } from "../lib/data";

const logoMark = AppImages.AppLogo;

const LandingNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
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
    {
      name: "Resources",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Blog", href: "/blog", icon: FileText },
        { name: "Integrations", href: "/integrations", icon: ShieldCheck },
        { name: "About Us", href: "/about", icon: Users },
      ],
    },
    { name: "Chat with Us", href: "/chat" },
  ];

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 border-b border-brand-border bg-white transition-all duration-300 h-[100px] flex items-center ${
        isScrolled ? "shadow-[0_1px_2px_rgba(0,0,0,0.04)]" : ""
      }`}
    >
      <div className="container-custom flex items-center justify-between gap-8">
        {/* Logo */}
        <Link to="/" className="flex cursor-pointer items-center gap-[10px]">
          <div className="flex items-center justify-center">
            <img
              src={logoMark}
              alt="PrecisionNote logo"
              className="h-10 w-10 object-contain"
            />
          </div>
          <span className="text-[24px] font-bold tracking-tight text-brand-blue">
            PrecisionNote
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setIsDropdownOpen(true)}
              onMouseLeave={() => link.hasDropdown && setIsDropdownOpen(false)}
            >
              <Link
                to={link.href}
                className={`flex items-center gap-1.5 text-[16px] font-medium transition-colors ${
                  link.name === "Resources" || location.pathname === link.href
                    ? "text-brand-blue"
                    : "text-[#45556c] hover:text-brand-blue"
                }`}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      isDropdownOpen && link.name === "Resources"
                        ? "rotate-180"
                        : ""
                    } ${link.name === "Resources" ? "text-brand-blue" : "text-[#45556c]"}`}
                  />
                )}
              </Link>

              {/* Dropdown Menu */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full pt-4"
                    >
                      <div className="w-[280px] rounded-xl border border-brand-border bg-white p-2 shadow-xl">
                        <div className="flex flex-col gap-1">
                          {link.dropdownItems?.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="flex items-center gap-4 rounded-xl p-1 transition-colors hover:bg-slate-50"
                            >
                              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-brand-blue">
                                <item.icon size={17} />
                              </div>
                              <span className="text-[15px] font-semibold text-brand-navy">
                                {item.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-4 lg:flex">
          <button className="min-h-[48px] rounded-xl bg-[#f1f5f9] px-8 py-3 text-[16px] font-semibold text-[#040523] transition-colors hover:bg-slate-200">
            Sign In
          </button>
          <button className="min-h-[48px] rounded-xl bg-brand-blue px-8 py-3 text-[16px] font-semibold text-white shadow-[0px_4px_14px_0px_rgba(87,104,253,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.98]">
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
            className="absolute left-0 right-0 top-[100px] overflow-hidden border-b border-brand-border bg-white shadow-lg lg:hidden"
          >
            <div className="container-custom flex flex-col gap-6 py-8">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-4">
                  <div
                    className="flex cursor-pointer items-center justify-between"
                    onClick={() =>
                      link.hasDropdown
                        ? setIsMobileDropdownOpen(!isMobileDropdownOpen)
                        : setMobileMenuOpen(false)
                    }
                  >
                    <Link
                      to={link.href}
                      className={`text-lg font-semibold ${
                        link.name === "Resources"
                          ? "text-brand-blue"
                          : "text-brand-navy"
                      }`}
                      onClick={(e) => link.hasDropdown && e.preventDefault()}
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${isMobileDropdownOpen ? "rotate-180" : ""}`}
                      />
                    )}
                  </div>

                  {link.hasDropdown && isMobileDropdownOpen && (
                    <div className="flex flex-col gap-4 pl-4 pt-2">
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-center gap-4"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-brand-blue">
                            <item.icon size={20} />
                          </div>
                          <span className="font-semibold text-brand-navy">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <hr className="border-brand-border" />
              <div className="flex flex-col gap-4 pt-2">
                <button className="w-full rounded-xl bg-[#f1f5f9] py-4 font-bold text-[#040523]">
                  Sign In
                </button>
                <button className="w-full rounded-xl bg-brand-blue py-4 font-bold text-white shadow-lg">
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
