import { motion } from "framer-motion";
import { AppImages } from "../../lib/data";

const AboutMission = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand-blue/10 rounded-2xl blur-2xl" />
            <img
              src={AppImages.MedicineArt}
              alt="Medical professionals working"
              className="relative rounded-2xl shadow-xl w-full h-auto z-10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <h2 className="text-[36px] lg:text-[48px] font-bold text-brand-navy leading-tight">
              Medicine is an art.<br />
              <span className="text-brand-blue">Paperwork is a distraction.</span>
            </h2>
            <div className="flex flex-col gap-6 text-[18px] text-[#64748b] leading-relaxed">
              <p>
                We believe that every minute spent on a keyboard is a minute taken away from a patient. Our goal is to make clinical documentation invisible, allowing physicians to focus on what matters most: human connection and healing.
              </p>
              <p>
                Founded by a team of physicians and AI engineers, PrecisionNote was born in the clinic, not the boardroom. We understand the nuances of clinical language and the pressure of a busy practice.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-100">
              <div>
                <p className="text-[32px] font-bold text-brand-navy">2,000+</p>
                <p className="text-[14px] text-[#64748b]">Physicians</p>
              </div>
              <div>
                <p className="text-[32px] font-bold text-brand-navy">80,000+</p>
                <p className="text-[14px] text-[#64748b]">Notes Generated</p>
              </div>
              <div>
                <p className="text-[32px] font-bold text-brand-navy">40+</p>
                <p className="text-[14px] text-[#64748b]">Specialties</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
