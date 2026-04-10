import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Zap, Share2, ClipboardList } from 'lucide-react';

const StepSection = () => {
  const steps = [
    {
      number: "01",
      title: "Ambient Listening",
      description: "Simply open PrecisionNote and start your consultation. Our AI captures every clinical detail without you ever touching a keyboard.",
      icon: <Mic className="w-8 h-8 text-brand-blue" />,
      tag: "Step 1"
    },
    {
      number: "02",
      title: "Auto-Note Generation",
      description: "Within seconds of finishing, receive a comprehensive, high-fidelity clinical note formatted to your specialty's standards.",
      icon: <ClipboardList className="w-8 h-8 text-brand-blue" />,
      tag: "Step 2"
    },
    {
      number: "03",
      title: "EMR Sync",
      description: "Review, edit, and push your note directly to your existing EMR with a single click. No more late-night data entry.",
      icon: <Share2 className="w-8 h-8 text-brand-blue" />,
      tag: "Step 3"
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
            <span className="text-[13px] font-bold uppercase tracking-wider">How IT Works</span>
          </motion.div>
          <h2 className="text-4xl lg:text-7xl font-bold mb-8 text-brand-navy tracking-tight">Documentation done in 3 simple steps.</h2>
          <p className="text-2xl text-brand-muted font-medium">PrecisionNote handles the documentation so you can focus on the person in front of you.</p>
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
              <div className="glass-card p-10 h-full hover:shadow-2xl hover:-translate-y-2 transition-all border-brand-border/40 rounded-[32px]">
                <div className="mb-8 flex items-center justify-between">
                  <div className="p-4 bg-brand-blue/5 rounded-2xl">
                    {step.icon}
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-blue px-4 py-1.5 bg-brand-blue/10 rounded-full">
                    {step.tag}
                  </span>
                </div>

                <h3 className="text-[28px] font-bold mb-6 text-brand-navy leading-tight">{step.title}</h3>
                <p className="text-brand-muted leading-relaxed text-[19px]">
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


