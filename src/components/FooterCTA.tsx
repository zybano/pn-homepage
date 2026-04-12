import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, Clock, Zap, CheckCircle2, HeartPulse } from 'lucide-react';

const FooterCTA = () => {
  const benefits = [
    { icon: <Shield className="w-5 h-5 text-brand-navy" />, text: "HIPAA Compliant" },
    { icon: <Clock className="w-5 h-5 text-brand-navy" />, text: "14-Day Free Trial" },
    { icon: <Zap className="w-5 h-5 text-brand-navy" />, text: "Setup in 5 Minutes" },
    { icon: <CheckCircle2 className="w-5 h-5 text-brand-navy" />, text: "Cancel Anytime" },
  ];

  return (
    <section className="py-24 container-custom">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#FFC559] rounded-[64px] p-12 lg:p-24 text-center text-brand-navy relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)]"
      >
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 0)', backgroundSize: '30px 30px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-navy/5 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Heartbeat Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-navy rounded-3xl mb-10 shadow-2xl transform hover:rotate-6 transition-transform">
             <HeartPulse className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-5xl lg:text-8xl font-black mb-10 tracking-[ -0.04em] leading-[0.9]">
            Reclaim your time.<br />Re-focus on care.
          </h2>
          
          <p className="text-xl lg:text-2xl text-brand-navy/70 mb-16 font-bold max-w-2xl mx-auto">
            Join 500+ Nigerian physicians who have already reclaimed 2+ hours every day with PrecisionNote.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <button className="px-12 py-7 bg-brand-navy text-white rounded-full font-black text-xl flex items-center gap-4 hover:scale-105 transition-all shadow-2xl active:scale-95 group">
              Start Your Free Trial <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-12 py-7 bg-white/40 text-brand-navy rounded-full font-black text-xl flex items-center gap-4 backdrop-blur-md border border-white/30 hover:bg-white/60 transition-all active:scale-95">
              <Play className="w-6 h-6 fill-brand-navy rotate-0 group-hover:rotate-12" />
              Watch the Demo
            </button>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-brand-navy/10">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30">
                  {benefit.icon}
                </div>
                <span className="text-sm font-black uppercase tracking-[0.2em] text-brand-navy/50">
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
