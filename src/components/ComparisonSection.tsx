import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, Minus, Plus } from 'lucide-react';

const ComparisonSection = () => {
  const statusQuo = [
    "Hours of manual typing & transcription",
    "Persistent chart burnout and fatigue",
    "Late-night documentation at home",
    "Reduced eye contact during visits",
    "Delayed insurance reimbursements",
  ];

  const withPrecision = [
    "Ambient listening captures every detail",
    "Instant, clinical-grade SOAP notes",
    "Automated sync with your EMR system",
    "Focus 100% on patient care",
    "Finish charting before you leave the office",
  ];

  return (
    <section id="features" className="py-24 container-custom bg-white">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full mb-4"
        >
          <Plus className="w-4 h-4" />
          <span className="text-[13px] font-bold uppercase tracking-wider">The Transformation</span>
        </motion.div>
        <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-brand-navy tracking-tight">Documentation was never your passion.</h2>
        <p className="text-xl lg:text-2xl text-brand-muted font-medium">You trained to heal, not to type. Here's what changes with PrecisionNote.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        {/* Status Quo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#F8FAFC] rounded-[40px] p-10 lg:p-14 border border-brand-border/60 relative overflow-hidden group transition-all"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-white rounded-2xl text-slate-400 border border-slate-200">
                <Minus className="w-8 h-8" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Old Way</div>
                <h3 className="text-2xl font-bold text-brand-navy">Traditional Charting</h3>
              </div>
            </div>
            
            <ul className="space-y-6">
              {statusQuo.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <XCircle className="w-4 h-4 text-slate-400" />
                  </div>
                  <span className="text-lg text-slate-600 leading-snug font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* PrecisionNote */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-brand-navy rounded-[40px] p-10 lg:p-14 text-white relative overflow-hidden shadow-2xl shadow-brand-blue/20 group"
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(87,104,253,0.15),transparent)] pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-brand-blue rounded-2xl text-white shadow-lg shadow-brand-blue/50">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <div className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-1">New Way</div>
                <h3 className="text-2xl font-bold">The PrecisionNote Way</h3>
              </div>
            </div>

            <ul className="space-y-6">
              {withPrecision.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  </div>
                  <span className="text-lg text-slate-200 leading-snug font-semibold group-hover:text-white transition-colors">{item}</span>
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
              <button className="w-full py-5 bg-brand-blue text-white rounded-full font-bold text-lg hover:scale-[1.02] transition-transform shadow-xl shadow-brand-blue/20">
                Switch to PrecisionNote
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
