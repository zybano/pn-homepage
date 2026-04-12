import React from 'react';
import LandingNav from '../components/LandingNav';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ComparisonSection from '../components/ComparisonSection';
import StepSection from '../components/StepSection';
import Testimonials from '../components/Testimonials';
import FooterCTA from '../components/FooterCTA';
import LandingFooter from '../components/LandingFooter';

function LandingPage() {
  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-blue selection:text-white">
      <LandingNav />
      
      <main>
        <Hero />
        <TrustBar />
        <ComparisonSection />
        <StepSection />
        
        <Testimonials />

        <FooterCTA />

      </main>

      <LandingFooter />
    </div>
  );
}

export default LandingPage;
