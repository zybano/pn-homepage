import { motion } from "framer-motion";
import { AppImages } from "../../lib/data";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-brand-bg pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#cfd4ff] bg-[#edefff] px-3 py-1.5 mb-6"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-[#5768fd] opacity-60" />
            <p className="whitespace-nowrap font-mono text-[12px] leading-none text-[#5768fd]">
              Our Mission
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[40px] lg:text-[72px] font-bold tracking-tight text-brand-navy leading-tight mb-8"
          >
            Built by clinicians,<br />
            <span className="bg-gradient-to-b from-[#5768fd] from-[77.404%] to-white bg-clip-text text-transparent">
              for clinicians.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[18px] lg:text-[22px] leading-relaxed text-[#64748b] max-w-[800px]"
          >
            The healthcare ecosystem is stretched thin. Burnout is at an all-time high, and administrative burden is the leading cause. PrecisionNote handles the paperwork so you can get back to your patients.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src={AppImages.AboutHero}
            alt="Doctors collaborating"
            className="w-full h-auto object-cover max-h-[600px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
