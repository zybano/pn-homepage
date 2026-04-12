import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

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
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40" 
           style={{ 
             backgroundImage: `linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)`,
             backgroundSize: '40px 40px' 
           }} 
      />

      <div className="container-custom relative z-10 font-geist">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[40px] md:text-[56px] font-bold text-[#040523] tracking-tighter text-center mb-16"
        >
          Doctors don't look back
        </motion.h2>

        {/* Featured Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-white rounded-[32px] p-8 md:p-16 shadow-2xl shadow-slate-200/40 border border-slate-100 flex flex-col md:flex-row gap-12 mb-12"
        >
          {/* Left: Quote */}
          <div className="flex-1">
            <div className="text-[120px] leading-none font-serif text-[#CFD9FF] -mb-12 -ml-2 select-none opacity-50">“</div>
            <p className="text-[28px] md:text-[40px] font-bold text-[#040523] leading-[1.1] mb-10 relative z-10">
              "The moment I started using PrecisionNote, I stopped typing in front of my patients. <span className="text-[#5768fd]">They felt the difference immediately.</span>"
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100">
                <img src="https://i.pravatar.cc/150?u=dr-emeka" alt="Dr. Emeka Okafor" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-[18px] text-[#040523]">Dr. Emeka Okafor</h4>
                <p className="text-[#64748b] text-[14px]">Cardiologist · National Hospital Abuja</p>
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
            <div className="rounded-2xl overflow-hidden h-[300px] md:h-full relative group shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop" 
                alt="Doctor with patient interaction" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>
            
            {/* Floating Metric */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-6 shadow-xl border border-slate-50 text-center min-w-[150px]">
              <div className="text-[32px] font-bold text-[#5768fd] leading-tight mb-1">2.4h</div>
              <div className="text-[12px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">saved every day</div>
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
              className="bg-white rounded-[24px] p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-6">
                {[...Array(5)].map((_, starI) => (
                  <Star key={starI} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              <p className="text-[18px] font-bold text-[#040523] leading-relaxed mb-8">
                "{review.quote}"
              </p>
              <div className="flex flex-col">
                <span className="font-bold text-[16px] text-[#040523] mb-1">{review.author}</span>
                <span className="text-[#64748b] text-[13px]">{review.details}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


