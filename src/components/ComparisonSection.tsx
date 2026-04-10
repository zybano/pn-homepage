import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, Minus, Plus } from 'lucide-react';

const ComparisonSection = () => {
  const statusQuo = [
    "40% of the day spent on documentation",
    "Documentation backlog leading to burnout",
    "Reduced patient eye contact during visits",
    "Late-night chart completion at home",
  ];

  const withPrecision = [
    "0 minutes spent on transcription",
    "Signed notes ready before the next patient",
    "100% focused on patient care and history",
    "Finish your day when your last patient leaves",
  ];

  return (
    <section id="features" className="py-24 container-custom">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-600 rounded-full mb-4"
        >
          <Minus className="w-4 h-4" />
          <span className="text-[13px] font-bold uppercase tracking-wider">The Burden</span>
        </motion.div>
        <h2 className="text-4xl lg:text-7xl font-bold mb-8 text-brand-navy tracking-tight">See how much time you're wasting.</h2>
        <p className="text-2xl text-brand-muted font-medium">Capture every detail without the keyboard fatigue.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        {/* Status Quo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[40px] p-10 lg:p-14 border border-brand-border/60 relative overflow-hidden group hover:border-red-100 transition-colors"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-red-50 rounded-2xl text-red-500">
                <XCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy">Status Quo</h3>
            </div>
            
            <ul className="space-y-8">
              {statusQuo.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                  </div>
                  <span className="text-xl text-slate-600 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Subtle Red Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[80px] rounded-full group-hover:bg-red-500/10 transition-colors" />
        </motion.div>

        {/* PrecisionNote */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-brand-navy rounded-[40px] p-10 lg:p-14 text-white relative overflow-hidden shadow-2xl shadow-brand-blue/20 group"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-brand-blue rounded-2xl text-white shadow-lg shadow-brand-blue/50">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">PrecisionNote</h3>
            </div>

            <ul className="space-y-8">
              {withPrecision.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  </div>
                  <span className="text-xl text-slate-300 leading-snug font-medium group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>

            <motion.div 
              className="mt-12 pt-10 border-t border-white/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <button className="w-full py-5 bg-white text-brand-navy rounded-full font-bold text-lg hover:scale-[1.02] transition-transform">
                Experience the Difference
              </button>
            </motion.div>
          </div>
          
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-blue opacity-10 blur-[100px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
