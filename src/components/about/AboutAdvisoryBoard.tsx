import { motion } from "framer-motion";
import { AppImages } from "../../lib/data";

const boardMembers = [
  {
    name: "Dr. Sarah Jenkins",
    role: "Chief Medical Officer",
    image: AppImages.Team1,
    hospital: "Mayo Clinic",
    delay: 0.1
  },
  {
    name: "Dr. Robert Hayes",
    role: "Head of Cardiology",
    image: AppImages.Team2,
    hospital: "Cleveland Clinic",
    delay: 0.2
  },
  {
    name: "Dr. Elena Rodriguez",
    role: "Pediatric Specialist",
    image: AppImages.Team1, // Using available headshots as placeholders
    hospital: "Johns Hopkins",
    delay: 0.3
  },
  {
    name: "Dr. Michael Chen",
    role: "Health Informatics",
    image: AppImages.Team2,
    hospital: "Stanford Health",
    delay: 0.4
  }
];

const AboutAdvisoryBoard = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-[32px] lg:text-[40px] font-bold text-brand-navy mb-4">
            Medical Advisory Board
          </h2>
          <p className="text-[#64748b] max-w-[600px] mx-auto">
            Our platform is guided by industry leading experts to ensure clinical excellence and safety.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: member.delay }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-[18px] font-bold text-brand-navy mb-1 group-hover:text-brand-blue transition-colors">
                {member.name}
              </h3>
              <p className="text-[14px] text-brand-blue font-medium mb-1">
                {member.role}
              </p>
              <p className="text-[13px] text-[#94a3b8]">
                {member.hospital}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutAdvisoryBoard;
