import { motion } from "framer-motion";
import { Shield, Target, Zap } from "lucide-react";

const pillars = [
  {
    icon: <Shield className="w-8 h-8 text-brand-blue" />,
    title: "01. Privacy First",
    description: "End-to-end encryption, SOC2 Type II, and full HIPAA compliance. Your patient data never leaves your secure environment.",
    delay: 0.1
  },
  {
    icon: <Target className="w-8 h-8 text-brand-blue" />,
    title: "02. Clinical Accuracy",
    description: "Context-aware AI trained on millions of medical records. We understand the nuance of clinical language and specialty-specific terms.",
    delay: 0.2
  },
  {
    icon: <Zap className="w-8 h-8 text-brand-blue" />,
    title: "03. Seamless Integration",
    description: "Works with all major EHRs with zero workflow disruption. PrecisionNote lives where you work, making documentation effortless.",
    delay: 0.3
  }
];

const AboutPillars = () => {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px]" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-[32px] lg:text-[48px] font-bold text-brand-navy">
            The Precision Pillars
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: pillar.delay }}
              className="bg-white p-8 lg:p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="mb-6 inline-flex p-4 rounded-xl bg-brand-bg group-hover:bg-brand-blue/10 transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-[20px] font-bold text-brand-navy mb-4">
                {pillar.title}
              </h3>
              <p className="text-[#64748b] leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPillars;
