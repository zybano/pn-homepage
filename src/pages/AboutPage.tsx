import { motion } from "framer-motion";
import LandingNav from "../components/LandingNav";
import LandingFooter from "../components/LandingFooter";
import AboutHero from "../components/about/AboutHero";
import AboutMission from "../components/about/AboutMission";
import AboutPillars from "../components/about/AboutPillars";
import AboutAdvisoryBoard from "../components/about/AboutAdvisoryBoard";
import ScrollToTop from "../components/ScrollToTop";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-navy selection:bg-brand-blue/30 selection:text-brand-navy">
      <ScrollToTop />
      <LandingNav />
      
      <main>
        <AboutHero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <AboutMission />
        </motion.div>
        
        <AboutPillars />
        
        <AboutAdvisoryBoard />
        
        {/* Team Grid Placeholder - Simplified as requested */}
        <section className="py-24 bg-brand-bg">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-[32px] lg:text-[40px] font-bold text-brand-navy">
                The Minds Behind the Precision
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {Array.from({ length: 12 }).map((_, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-slate-200 mb-4 animate-pulse" />
                  <div className="h-4 w-20 bg-slate-100 rounded mb-2" />
                  <div className="h-3 w-16 bg-slate-50 rounded" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <LandingFooter />
    </div>
  );
};

export default AboutPage;
