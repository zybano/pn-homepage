import LandingNav from '../components/LandingNav';
import Hero from '../components/Hero';
import ComparisonSection from '../components/ComparisonSection';
import StepSection from '../components/StepSection';
import DocumentationSection from '../components/DocumentationSection';
import Testimonials from '../components/Testimonials';
import FooterCTA from '../components/FooterCTA';
import LandingFooter from '../components/LandingFooter';

function LandingPage() {
  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-blue selection:text-white">
      <LandingNav />
      
      <main>
        <Hero />
        <ComparisonSection />
        <StepSection />
        <DocumentationSection />
        
        <Testimonials />

        <FooterCTA />

      </main>

      <LandingFooter />
    </div>
  );
}

export default LandingPage;
