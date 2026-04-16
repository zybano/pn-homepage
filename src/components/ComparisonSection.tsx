import React from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

const ComparisonSection = () => {
  const statusQuo = [
    "Screen-time over patient-time",
    'The "Pajama Time" charting tax',
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
    <section id="transformation" className="relative overflow-hidden bg-[#fdf2dd] px-4 py-24 md:px-0">
      <div className="container-custom relative z-10">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-[40px] font-semibold leading-[1.2] tracking-[-1.5px] text-[#040523] md:text-[48px]"
          >
            Documentation was never your job
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[18px] text-[#64748b]"
          >
            You trained to heal, not to type. Here's what changes with
            PrecisionNote.
          </motion.p>
        </div>

        <div className="mb-8 grid items-stretch gap-6 lg:grid-cols-2">
          {/* Status Quo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-[rgba(203,213,225,0.6)] bg-white p-8"
          >
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-slate-300" />
                <span className="font-mono text-[12px] uppercase tracking-[1px] text-[#90a1b9]">
                  Before
                </span>
              </div>
              <h3 className="mb-6 text-[38px] font-semibold text-[#64748b] md:text-[40px]">
                The Status Quo.
              </h3>

              <ul className="space-y-4">
                {statusQuo.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#f1f5f9]">
                      <XCircle className="h-3 w-3 text-[#cbd5e1]" />
                    </div>
                    <span className="text-[14px] text-[#64748b]">
                      {item}
                    </span>
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
            className="relative overflow-hidden rounded-2xl border border-[rgba(203,213,225,0.6)] bg-white p-8"
          >
            <div className="absolute right-[-150px] top-[-90px] h-[300px] w-[300px] rounded-full bg-[rgba(87,104,253,0.12)]" />

            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#5768fd]" />
                <span className="font-mono text-[12px] uppercase tracking-[1px] text-[#5768fd]">
                  After PrecisionNote
                </span>
              </div>
              <h3 className="mb-6 text-[38px] font-semibold text-[#040523] md:text-[40px]">
                The Status Quo.
              </h3>

              <ul className="space-y-4">
                {withPrecision.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(87,104,253,0.12)]">
                      <CheckCircle2 className="h-3 w-3 text-[#5768fd]" />
                    </div>
                    <span className="text-[14px] font-medium text-[#040523]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              value: "2.4h",
              label: "Average time saved per day",
              color: "text-[#556cfb]",
              borderColor: "border-blue-200/50",
              shadow: "shadow-blue-500/5",
            },
            {
              value: "98%",
              label: "Note accuracy rate (AI-verified)",
              color: "text-[#10b981]",
              borderColor: "border-emerald-200/50",
              shadow: "shadow-emerald-500/5",
            },
            {
              value: "500+",
              label: "Physicians trust PrecisionNote",
              color: "text-[#f59e0b]",
              borderColor: "border-amber-200/50",
              shadow: "shadow-amber-500/5",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex h-[109px] flex-col items-center justify-center overflow-hidden rounded-2xl border bg-white ${stat.borderColor} ${stat.shadow}`}
            >
              <div
                className={`mb-1 font-mono text-[42px] font-bold leading-none ${stat.color}`}
              >
                {stat.value}
              </div>
              <div className="text-[14px] text-[#64748b]">
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
