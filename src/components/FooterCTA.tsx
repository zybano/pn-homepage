import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Shield,
  Clock,
  Zap,
  CheckCircle2,
  HeartPulse,
} from "lucide-react";

import { AppImages } from "../lib/data";
import { links } from "../lib/links";

const FooterCTA = () => {
  const benefits = [
    {
      icon: <Shield className="w-5 h-5 text-brand-navy" />,
      text: "Privacy Focused",
    },
    {
      icon: <Clock className="w-5 h-5 text-brand-navy" />,
      text: "14-Day Free Trial",
    },
    {
      icon: <Zap className="w-5 h-5 text-brand-navy" />,
      text: "Setup in 5 Minutes",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-brand-navy" />,
      text: "Cancel Anytime",
    },
  ];

  return (
    <section className="container-custom py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-2xl bg-[#ffcd6a] p-10 text-center text-brand-navy md:p-20"
      >
        <div
          className="absolute inset-0 opacity-20 pointer-events-none bg-repeat bg-center"
          style={{
            backgroundImage: `url(${AppImages.YellowCTABg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Heartbeat Icon */}
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#040523] to-[#3b4fe8] shadow-[0_12px_32px_rgba(87,104,253,0.3)]">
            <HeartPulse className="h-8 w-8 text-white" />
          </div>

          <h2 className="mb-4 text-[40px] font-semibold leading-[1.1] tracking-[-1.5px] text-[#040523] md:text-[64px]">
            Reclaim your time. Re-focus on care.
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-[18px] text-[rgba(16,21,76,0.7)]">
            Join 500+ Nigerian physicians who have already reclaimed 2+ hours
            every day with PrecisionNote.
          </p>

          <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={links.signUp} className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#040523] to-[#3b4fe8] px-8 py-3 text-[16px] font-semibold text-white shadow-[0_4px_14px_rgba(87,104,253,0.35)]">
              Get Started (No Credit Card Required)
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href={links.demo} className="flex items-center gap-2 rounded-lg border border-[rgba(4,5,35,0.5)] bg-white/20 px-8 py-3 text-[16px] font-medium text-[#040523]">
              <Play className="h-4 w-4" />
              Watch Demo
            </a>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 gap-4 border-t border-[rgba(4,5,35,0.12)] pt-6 md:grid-cols-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center justify-center gap-2">
                <div className="rounded-full bg-transparent">
                  {benefit.icon}
                </div>
                <span className="text-sm text-[rgba(4,5,35,0.7)]">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FooterCTA;
