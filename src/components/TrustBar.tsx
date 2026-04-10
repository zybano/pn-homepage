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
  return (
    <div className="py-12 border-y border-brand-border bg-white overflow-hidden">
      <div className="container-custom">
        <p className="text-center text-sm font-bold text-brand-muted uppercase tracking-[0.2em] mb-10">
          Trusted by Nigeria's Leading Medical Institutions
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 px-4">
          {logos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 grayscale brightness-50 contrast-125 opacity-30 hover:opacity-100 hover:grayscale-0 transition-all cursor-default"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-200" />
              <span className="text-xl font-bold tracking-tighter text-slate-900">{logo}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
