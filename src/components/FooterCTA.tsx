import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, Clock, Zap, CheckCircle2 } from 'lucide-react';

const FooterCTA = () => {
  const benefits = [
    { icon: <Shield className="w-5 h-5" />, text: "HIPAA Compliant" },
    { icon: <Clock className="w-5 h-5" />, text: "14-Day Free Trial" },
    { icon: <Zap className="w-5 h-5" />, text: "Setup in 5 Minutes" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Cancel Anytime" },
  ];

  return (
    <section className="py-24 container-custom">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#FFC559] rounded-[48px] p-12 lg:p-24 text-center text-brand-navy relative overflow-hidden shadow-2xl"
      >
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Heartbeat Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-navy rounded-2xl mb-8 shadow-xl">
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12H7L9 18L13 6L15 12H20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
          </div>

          <h2 className="text-4xl lg:text-7xl font-bold mb-8 tracking-tight">
            Reclaim your time.<br />Re-focus on care.
          </h2>
          
          <p className="text-xl lg:text-2xl text-brand-navy/80 mb-12 font-medium">
            Join 500+ Nigerian physicians who have already reclaimed 2+ hours every day with PrecisionNote.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button className="px-10 py-6 bg-brand-navy text-white rounded-full font-bold text-xl flex items-center gap-3 hover:scale-105 transition-transform shadow-2xl">
              Get Started (No Credit Card Required) <ArrowRight className="w-6 h-6" />
            </button>
            <button className="px-10 py-6 bg-white/30 text-brand-navy rounded-full font-bold text-xl flex items-center gap-3 backdrop-blur-md border border-white/20 hover:bg-white/40 transition-all">
              <Play className="w-6 h-6 fill-brand-navy" />
              Watch Demo
            </button>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-brand-navy/10">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="p-3 bg-brand-navy/5 rounded-full">
                  {benefit.icon}
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-brand-navy/60">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FooterCTA;
