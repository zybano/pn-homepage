import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      quote: "My notes write themselves now. I can see 30% more patients.",
      author: "Dr. Emeka Okafor",
      role: "Cardiologist · National Hospital Abuja",
      avatar: "https://i.pravatar.cc/150?u=dr-emeka"
    },
    {
      quote: "SOAP notes used to take 20 minutes each. Now it's 90 seconds.",
      author: "Dr. Ngozi Adeyemi",
      role: "Paediatrician · UCH Ibadan",
      avatar: "https://i.pravatar.cc/150?u=dr-ngozi"
    },
    {
      quote: "The EMR sync is flawless. Epic integration took 5 minutes to set up.",
      author: "Dr. Tunde Fashola",
      role: "GP · Reddington Hospital Lagos",
      avatar: "https://i.pravatar.cc/150?u=dr-tunde"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-brand-navy tracking-tight">Doctors don't look back</h2>
        </div>

        {/* Featured Testimonial */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-20 p-8 lg:p-16 rounded-[48px] bg-[#F8FAFC] border border-slate-100 shadow-sm relative overflow-hidden group"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <Quote className="w-16 h-16 text-brand-blue/20 mb-8" />
              <p className="text-3xl lg:text-4xl text-brand-navy font-bold leading-[1.2] mb-10">
                "The moment I started using PrecisionNote, I stopped typing in front of my patients. <span className="text-brand-blue">They felt the difference immediately.</span>"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <img src="https://i.pravatar.cc/150?u=dr-emeka" alt="Dr. Emeka Okafor" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-brand-navy">Dr. Emeka Okafor</h4>
                  <p className="text-brand-muted">Cardiologist · National Hospital Abuja</p>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl lg:h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=2070&auto=format&fit=crop" 
                alt="Doctor with patient" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
              
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold text-brand-blue">2.4h</div>
                <div className="text-xs font-bold text-brand-muted uppercase tracking-widest">saved every day</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Small Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[40px] bg-white border border-slate-100 shadow-sm relative hover:shadow-md transition-shadow"
            >
              <div className="flex gap-0.5 mb-6">
                {[...Array(5)].map((_, starI) => (
                  <Star key={starI} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-xl text-brand-navy leading-relaxed mb-8 font-medium">
                "{review.quote}"
              </p>

              <div>
                <h4 className="font-bold text-brand-navy">{review.author}</h4>
                <p className="text-sm text-brand-muted tracking-tight">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

