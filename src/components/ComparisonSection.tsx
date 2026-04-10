import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

const ComparisonSection = () => {
  const statusQuo = [
    "2-3 hours of charting after clinic",
    "Notes often missing critical details",
    "Feeling like a data-entry clerk",
    "Mental burnout and cognitive load",
    "Documentation backlogs on weekends"
  ];

  const precisionNote = [
    "Signed notes ready before the next patient",
    "Captures 100% of the conversation context",
    "Eye contact and empathy, not typing",
    "Zero cognitive load during consults",
    "Reclaim your personal life and weekends"
  ];

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px] -z-10" />

      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full mb-4"
          >
            <AlertCircle className="w-4 h-4" />
            <span className="text-[13px] font-bold uppercase tracking-wider">The Problem</span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Documentation was never your job.</h2>
          <p className="text-xl text-brand-muted">You trained to heal, not to type. Here's how PrecisionNote restores your clinical freedom.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Status Quo Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 lg:p-12 rounded-[32px] bg-white border border-brand-border/60 shadow-card relative overflow-hidden group hover:border-brand-muted/20 transition-all"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-brand-muted uppercase tracking-widest block mb-1">Status Quo</span>
                <h3 className="text-2xl font-bold">Yesterday's Charting</h3>
              </div>
            </div>

            <ul className="space-y-5">
              {statusQuo.map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-brand-muted">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-muted/30 mt-2.5" />
                  <span className="text-[17px] leading-relaxed italic">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* PrecisionNote Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 lg:p-12 rounded-[32px] bg-brand-navy text-white shadow-2xl relative overflow-hidden group"
          >
            {/* Visual Flare */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl -z-0 opacity-50 group-hover:opacity-70 transition-opacity" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-brand-blue text-white rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-blue uppercase tracking-widest block mb-1">PrecisionNote</span>
                  <h3 className="text-2xl font-bold">The Future of Care</h3>
                </div>
              </div>

              <ul className="space-y-5">
                {precisionNote.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue mt-1 shrink-0" />
                    <span className="text-[17px] leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-white/60">Ready to switch?</span>
                  <button className="flex items-center gap-2 text-brand-blue font-bold group/btn">
                    Get Started <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
