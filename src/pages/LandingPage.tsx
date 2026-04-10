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

        {/* Final CTA Section */}
        <section className="py-24 container-custom">
          <div className="bg-brand-blue rounded-[48px] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Background Spikes/Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white">Reclaim your time. <br />Re-focus on care.</h2>
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                Join 500+ Nigerian physicians who have already eliminated charting burnout. 
                Start your 14-day free trial today. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="px-10 py-5 bg-white text-brand-blue rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                  Try PrecisionNote Free
                </button>
                <button className="px-10 py-5 bg-black/20 text-white rounded-full font-bold text-lg border border-white/20 backdrop-blur-md hover:bg-black/30 transition-all">
                  Book a Custom Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}

export default LandingPage;
