import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  "Vanguard Hospital",
  "Paediatric Partners",
  "Eko Hospital",
  "St. Nicholas Hospital",
  "Reddington Hospital"
];

const TrustBar = () => {
  const logos = [
    { name: "Vanguard", icon: "V" },
    { name: "Paediatric Partners", icon: "P" },
    { name: "Eko Hospital", icon: "E" },
    { name: "St. Nicholas", icon: "S" },
    { name: "Reddington", icon: "R" }
  ];

  return (
    <div className="py-20 border-y border-brand-border bg-white relative overflow-hidden">
      <div className="container-custom">
        <p className="text-center text-sm font-black text-brand-muted uppercase tracking-[0.3em] mb-12">
          Leading Medical Institutions Rely on PrecisionNote
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-12 px-4 max-w-6xl mx-auto">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group flex items-center gap-3 grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-navy flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-500">
                {logo.icon}
              </div>
              <span className="text-2xl font-black tracking-tighter text-brand-navy lowercase">
                {logo.name}<span className="text-brand-blue">.</span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
