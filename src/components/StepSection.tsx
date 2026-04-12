import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Zap, Share2, ClipboardList } from 'lucide-react';

const StepSection = () => {
  const steps = [
    {
      number: "01",
      title: "Record",
      description: "Tap start and talk naturally with your patient. Our ambient AI captures every clinical detail without getting in the way.",
      icon: <Mic className="w-8 h-8 text-brand-blue" />,
      tag: "Step 1"
    },
    {
      number: "02",
      title: "Refine",
      description: "Review your automatically generated, clinical-grade SOAP note. Make quick edits if needed to ensure absolute accuracy.",
      icon: <ClipboardList className="w-8 h-8 text-brand-blue" />,
      tag: "Step 2"
    },
    {
      number: "03",
      title: "Reclaim",
      description: "Sync the final note directly to your EMR with one click and head home early. Your work day ends when your last patient leaves.",
      icon: <Share2 className="w-8 h-8 text-brand-blue" />,
      tag: "Step 3"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full mb-4"
          >
            <Zap className="w-4 h-4 fill-brand-blue" />
            <span className="text-[13px] font-bold uppercase tracking-wider">How IT Works</span>
          </motion.div>
          <h2 className="text-4xl lg:text-7xl font-bold mb-8 text-brand-navy tracking-tight">Note-taking so fast, it feels like cheating.</h2>
          <p className="text-xl lg:text-2xl text-brand-muted font-medium">Focus on your patient. We handle the rest.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white p-12 h-full border border-brand-border/60 rounded-[40px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="mb-10 flex items-center justify-between">
                  <div className="p-5 bg-brand-blue/5 rounded-[24px] group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="text-[14px] font-bold text-slate-400 group-hover:text-brand-blue transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-[32px] font-bold mb-6 text-brand-navy leading-tight">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed text-[18px] font-medium">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepSection;


