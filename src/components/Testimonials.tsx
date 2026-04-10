import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      quote: "I used to spend 2 hours a night on documentation. Now I sign my last note before leaving the clinic. PrecisionNote literally gave me my life back.",
      author: "Dr. Tola Babatunde",
      role: "Cardiologist",
      avatar: "https://i.pravatar.cc/150?u=dr-tola"
    },
    {
      quote: "The accuracy is mind-blowing. It captures nuances and clinical logic that I sometimes miss when I'm tired. It's like having a senior registrar in the room.",
      author: "Dr. Emeka Okafor",
      role: "General Practitioner",
      avatar: "https://i.pravatar.cc/150?u=dr-emeka"
    },
    {
      quote: "Seamless integration with our existing workflow. The Nigerian medical context (names, drugs, dialects) is handled perfectly by the AI.",
      author: "Dr. Sarah Yusuf",
      role: "Pediatrician",
      avatar: "https://i.pravatar.cc/150?u=dr-sarah"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Doctors don't look back.</h2>
          <p className="text-xl text-brand-muted italic">"Charting is finally what it should be: invisible."</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 lg:p-10 rounded-[40px] bg-brand-bg border border-brand-border/40 relative group hover:bg-brand-blue/[0.02] transition-colors"
            >
              <Quote className="w-10 h-10 text-brand-blue absolute -top-4 -left-4 bg-white rounded-full p-2 border border-brand-border" />
              
              <div className="flex gap-0.5 mb-6">
                {[...Array(5)].map((_, starI) => (
                  <Star key={starI} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-lg text-brand-navy leading-relaxed mb-8 font-medium">
                "{review.quote}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-brand-border/40">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-brand-border">
                  <img 
                    src={review.avatar} 
                    alt={review.author} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">{review.author}</h4>
                  <p className="text-sm text-brand-muted">{review.role}</p>
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
