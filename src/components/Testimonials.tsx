import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const featuredDoctor = 'https://www.figma.com/api/mcp/asset/faf7e467-4330-40a1-bf1f-64aeba4780f7';
const featuredScene = 'https://www.figma.com/api/mcp/asset/50e522b3-c6b9-4135-a72d-9fda941e7746';

const Testimonials = () => {
  const secondaryReviews = [
    {
      quote: "My notes write themselves now. I can see 30% more patients.",
      author: "Dr. Emeka Okafor",
      details: "Cardiologist · National Hospital Abuja"
    },
    {
      quote: "SOAP notes used to take 20 minutes each. Now it's 90 seconds.",
      author: "Dr. Ngozi Adeyemi",
      details: "Paediatrician · UCH Ibadan"
    },
    {
      quote: "The EMR sync is flawless. Epic integration took 5 minutes to set up.",
      author: "Dr. Tunde Fashola",
      details: "GP · Reddington Hospital Lagos"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-[rgba(87,104,253,0.12)] py-24">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25" 
           style={{ 
             backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
             backgroundSize: '132px 132px' 
           }} 
      />

      <div className="container-custom relative z-10 font-geist">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center text-[42px] font-semibold tracking-[-1.5px] text-[#040523] md:text-[56px]"
        >
          Doctors don't look back
        </motion.h2>

        {/* Featured Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 flex max-w-7xl flex-col gap-10 rounded-2xl border border-[#e2e8f0] bg-white p-8 md:flex-row md:gap-14 md:p-12"
        >
          {/* Left: Quote */}
          <div className="flex-1">
            <div className="-mb-10 text-[70px] leading-none text-[#cfd4ff]">”</div>
            <p className="relative z-10 mb-8 text-[22px] leading-[1.6] tracking-[-0.2px] text-[#040523] md:text-[40px] md:leading-[1.2]">
              "The moment I started using PrecisionNote, I stopped typing in front of my patients. <span className="text-[#5768fd]">They felt the difference immediately.</span>"
            </p>
            
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 overflow-hidden rounded-full border border-[rgba(87,104,253,0.2)]">
                <img src={featuredDoctor} alt="Dr. Emeka Okafor" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[12px] font-semibold text-[#040523]">Dr. Emeka Okafor</h4>
                <p className="font-mono text-[10px] text-[#90a1b9]">Cardiologist · National Hospital Abuja</p>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Hospital Interaction Image */}
          <div className="flex-1 relative">
            <div className="relative h-[327px] overflow-hidden rounded-xl">
              <img 
                src={featuredScene} 
                alt="Doctor with patient interaction" 
                className="h-full w-full object-cover"
              />
            </div>
            
            {/* Floating Metric */}
            <div className="absolute -bottom-4 left-4 min-w-[121px] rounded-xl border border-[#e2e8f0] bg-white p-3 text-center shadow-lg">
              <div className="mb-1 font-mono text-[32px] font-bold leading-tight text-[#5768fd]">2.4h</div>
              <div className="text-[12px] text-[#64748b] whitespace-nowrap">saved every day</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {secondaryReviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-[#f1f5f9] bg-white p-5"
            >
              <div className="flex gap-0.5 mb-6">
                {[...Array(5)].map((_, starI) => (
                  <Star key={starI} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <p className="mb-5 text-[14px] leading-[20px] text-[#45556c]">
                "{review.quote}"
              </p>
              <div className="flex flex-col">
                <span className="mb-1 text-[12px] font-semibold text-[#040523]">{review.author}</span>
                <span className="font-mono text-[10px] text-[#90a1b9]">{review.details}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


