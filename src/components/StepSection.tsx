import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Layout, Send, Zap } from 'lucide-react';

const StepSection = () => {
  const steps = [
    {
      number: "01",
      title: "Start Scribing",
      description: "Simply place your device on the desk and start the consultation. PrecisionNote captures every detail ambiently.",
      icon: <Mic className="w-8 h-8 text-brand-blue" />,
      tag: "Ambient Listening"
    },
    {
      number: "02",
      title: "Get Structured Notes",
      description: "Our AI instantly organizes the conversation into accurate SOAP notes, using templates tailored to your specialty.",
      icon: <Layout className="w-8 h-8 text-brand-blue" />,
      tag: "SOAP Templates"
    },
    {
      number: "03",
      title: "One-Click Sync",
      description: "Review your comprehensive notes and sync them directly to your EHR in seconds. Charting finished before the patient leaves.",
      icon: <Send className="w-8 h-8 text-brand-blue" />,
      tag: "Instant Export"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full mb-4"
          >
            <Zap className="w-4 h-4" />
            <span className="text-[13px] font-bold uppercase tracking-wider">The Process</span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">From consult to signed note in 3 steps</h2>
          <p className="text-xl text-brand-muted">PrecisionNote handles the documentation so you can focus on the person in front of you.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute -top-6 -left-6 text-8xl font-black text-brand-blue/5 group-hover:text-brand-blue/10 transition-colors pointer-events-none">
                {step.number}
              </div>
              
              <div className="glass-card p-10 h-full hover:shadow-2xl hover:-translate-y-2 transition-all border-brand-border/40">
                <div className="mb-8 flex items-center justify-between">
                  <div className="p-4 bg-brand-blue/5 rounded-2xl">
                    {step.icon}
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-blue px-3 py-1 bg-brand-blue/5 rounded-full">
                    {step.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-brand-muted leading-relaxed text-lg">
                  {step.description}
                </p>

                {/* Animated progress indicator line (only for desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-12 border-t-2 border-dashed border-brand-border/40 z-0" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA for Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="btn-primary py-4 px-10 text-lg mx-auto">
            Ready to reclaim your time?
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default StepSection;
