import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      quote: "My focus is back on the patient, not the laptop screen. PrecisionNote has changed the culture of my clinic.",
      author: "Dr. Ngozi Adeyemi",
      role: "Paediatrician · UCH Ibadan",
      avatar: "https://i.pravatar.cc/150?u=dr-ngozi"
    },
    {
      quote: "The EMR sync saved my team hours of data entry every single day. Flawless execution.",
      author: "Dr. Tunde Fashola",
      role: "GP · Reddington Hospital Lagos",
      avatar: "https://i.pravatar.cc/150?u=dr-tunde"
    },
    {
      quote: "It's rare to find a tool that actually lives up to the hype. PrecisionNote is indispensable for my practice now.",
      author: "Dr. Bola Tinubu",
      role: "Surgeon · St. Nicholas Hospital",
      avatar: "https://i.pravatar.cc/150?u=dr-bola"
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-brand-blue/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full mb-6"
          >
            <Star className="w-4 h-4 fill-brand-blue/20" />
            <span className="text-[13px] font-bold uppercase tracking-wider">Physician Stories</span>
          </motion.div>
          <h2 className="text-4xl lg:text-7xl font-bold mb-8 text-brand-navy tracking-tight">Doctors don't look back.</h2>
          <p className="text-xl lg:text-2xl text-brand-muted font-medium">Capture every detail without the keyboard fatigue.</p>
        </div>

        {/* Featured Testimonial */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-16 p-8 lg:p-20 rounded-[56px] bg-[#F8FAFC] border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden group"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <Quote className="w-20 h-20 text-brand-blue/10 mb-10" />
              <p className="text-3xl lg:text-4xl text-brand-navy font-bold leading-tight mb-12">
                "The moment I started using PrecisionNote, I stopped typing in front of my patients. <span className="text-brand-blue">They felt the difference immediately.</span>"
              </p>
              
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                  <img src="https://i.pravatar.cc/150?u=dr-emeka" alt="Dr. Emeka Okafor" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-2xl text-brand-navy">Dr. Emeka Okafor</h4>
                  <p className="text-brand-muted font-medium text-lg">Cardiologist · National Hospital Abuja</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-[40px] overflow-hidden shadow-2xl lg:h-[450px] transform group-hover:scale-[1.02] transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=2070&auto=format&fit=crop" 
                alt="Doctor with patient" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/20">
                <div className="text-4xl font-black text-brand-blue mb-1">2.4h</div>
                <div className="text-sm font-bold text-brand-muted uppercase tracking-widest">saved every day</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Small Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 rounded-[48px] bg-white border border-slate-100 shadow-sm relative hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, starI) => (
                  <Star key={starI} className="w-5 h-5 fill-brand-blue text-brand-blue" />
                ))}
              </div>

              <p className="text-xl text-brand-navy leading-relaxed mb-10 font-bold">
                "{review.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl border border-slate-100 overflow-hidden shrink-0">
                   <img src={review.avatar} alt={review.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy leading-none mb-1">{review.author}</h4>
                  <p className="text-sm text-brand-muted font-medium">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

