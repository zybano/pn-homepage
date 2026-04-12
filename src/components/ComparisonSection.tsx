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
            className="text-[48px] md:text-[80px] font-bold mb-10 text-[#040523] tracking-tighter leading-[1.1]"
          >
            Documentation was never your job
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
                <div className="w-2 h-2 rounded-full bg-[#5768fd]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5768fd]">After PrecisionNote</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-[#040523] mb-12">The Status Quo.</h3>

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
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            { value: "2.4h", label: "Average time saved per day", color: "text-[#556cfb]", borderColor: "border-blue-200/50", shadow: "shadow-blue-500/5" },
            { value: "98%", label: "Note accuracy rate (AI-verified)", color: "text-[#10b981]", borderColor: "border-emerald-200/50", shadow: "shadow-emerald-500/5" },
            { value: "500+", label: "Physicians trust PrecisionNote", color: "text-[#f59e0b]", borderColor: "border-amber-200/50", shadow: "shadow-amber-500/5" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative overflow-hidden h-[110px] flex flex-col items-center justify-center rounded-[24px] bg-white border ${stat.borderColor} ${stat.shadow} transition-all duration-500`}
            >
              {/* Noise Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              
              <div className={`text-[42px] leading-none font-black ${stat.color} mb-2 tracking-tight`}>
                {stat.value}
              </div>
              <div className="text-[13px] font-medium text-slate-500 tracking-tight">
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
