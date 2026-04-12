import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, Minus, Plus } from 'lucide-react';

const ComparisonSection = () => {
  const statusQuo = [
    "Screen-time over patient-time",
    "The \"Pajama Time\" charting tax",
    "Context lost in messy referrals",
    "Documentation errors under fatigue",
    "Burnout masquerading as dedication",
  ];

  const withPrecision = [
    "Eye contact, not keyboard clicks",
    "Notes finished before the patient leaves",
    "Human intent preserved across specialties",
    "Zero-fatigue documentation, every session",
    "Reclaimed evenings. Genuinely.",
  ];

  return (
    <section id="transformation" className="py-32 px-4 md:px-0 bg-[#F9F7F1]/80 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-8xl font-black mb-10 text-[#040523] tracking-[-0.04em] leading-[0.9]"
          >
            Documentation was never your job.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl lg:text-2xl text-slate-500 font-bold"
          >
            You trained to heal, not to type. Here's what changes with PrecisionNote.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-24">
          {/* Status Quo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-10 lg:p-14 border border-slate-100 relative overflow-hidden group shadow-sm"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-slate-300" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">Before</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-black text-[#040523] mb-12">The Status Quo.</h3>
              
              <ul className="space-y-6">
                {statusQuo.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 border border-slate-100">
                      <XCircle className="w-3.5 h-3.5 text-slate-300" />
                    </div>
                    <span className="text-lg text-slate-500 font-bold">{item}</span>
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
            className="bg-white/70 backdrop-blur-xl rounded-[40px] p-10 lg:p-14 border border-white/50 relative overflow-hidden shadow-2xl shadow-blue-500/5 group"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-brand-blue" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-blue">After PrecisionNote</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-black text-[#040523] mb-12">The Status Quo.</h3>

              <ul className="space-y-6">
                {withPrecision.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 border border-brand-blue/20">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" />
                    </div>
                    <span className="text-lg text-slate-700 font-black">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { value: "2.4h", label: "Average time saved per day", color: "border-blue-200" },
            { value: "98%", label: "Note accuracy rate (AI-verified)", color: "border-green-200" },
            { value: "500+", label: "Physicians trust PrecisionNote", color: "border-orange-200" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-[32px] bg-white/50 backdrop-blur-sm border ${stat.color} text-center group hover:bg-white transition-all duration-500`}
            >
              <div className="text-5xl font-black text-brand-navy mb-4 transform group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
