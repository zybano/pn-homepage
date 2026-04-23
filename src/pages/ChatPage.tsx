import { motion } from 'framer-motion';
import { Quote, Send, ArrowRight } from 'lucide-react';
import LandingNav from '../components/LandingNav';
import LandingFooter from '../components/LandingFooter';
import { AppImages } from '../lib/data';

const ChatPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF] font-geist selection:bg-[#5768fd] selection:text-white">
      <LandingNav />

      {/* Contact Section */}
      <section className="pt-32 pb-24">
        <div className="container-custom px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start max-w-[1280px] mx-auto">
            
            {/* Left Content */}
            <div className="pt-10">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[52px] md:text-[64px] font-bold text-[#040523] tracking-[-2px] leading-[1.1] mb-8"
              >
                Contact our Clinical Solutions Team
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[20px] text-[#64748b] leading-[1.6] mb-16 max-w-lg"
              >
                Request a custom integration audit or a personalized demo for your practice.
              </motion.p>

              {/* Testimonial Box */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-[#040523] rounded-[32px] p-10 text-white relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                    <Quote className="w-6 h-6 text-white fill-white" />
                  </div>
                  <p className="text-[18px] md:text-[20px] leading-[1.6] text-white/90 mb-10 italic">
                    "Since implementing PrecisionNote, our cardiology clinic has reduced documentation time by 70%. I finally feel like a doctor again, not a data entry clerk."
                  </p>
                  <div className="flex items-center gap-4">
                    <img 
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100&h=100" 
                      alt="Dr. Bukola Idowu" 
                      className="w-14 h-14 rounded-full object-cover border-2 border-white/20"
                    />
                    <div>
                      <h4 className="text-[17px] font-bold text-white">Dr. Bukola Idowu</h4>
                      <p className="text-[14px] text-white/50">Chief of Clinical Operations</p>
                    </div>
                  </div>
                </div>
                {/* Subtle background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 blur-[100px] pointer-events-none" />
              </motion.div>
            </div>

            {/* Right Content - Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-[#E2E8F0]"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[14px] font-bold text-[#040523]">First name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      placeholder="Your first name"
                      className="w-full h-14 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFF] px-5 text-[15px] focus:border-[#5768fd] focus:outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[14px] font-bold text-[#040523]">Last name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      placeholder="Your last name"
                      className="w-full h-14 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFF] px-5 text-[15px] focus:border-[#5768fd] focus:outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[14px] font-bold text-[#040523]">Work email <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      placeholder="Your work email"
                      className="w-full h-14 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFF] px-5 text-[15px] focus:border-[#5768fd] focus:outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[14px] font-bold text-[#040523]">Contact number <span className="text-red-500">*</span></label>
                    <div className="flex gap-2">
                      <div className="w-24 h-14 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFF] flex items-center justify-center gap-2 px-3">
                        <img src="https://flagcdn.com/w20/gb.png" alt="GB" className="w-5" />
                        <span className="text-[14px] font-medium">+44</span>
                      </div>
                      <input 
                        type="tel" 
                        className="flex-1 h-14 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFF] px-5 text-[15px] focus:border-[#5768fd] focus:outline-none transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-[#040523]">Country <span className="text-red-500">*</span></label>
                  <select className="w-full h-14 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFF] px-5 text-[15px] focus:border-[#5768fd] focus:outline-none appearance-none transition-all">
                    <option>Select country</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Nigeria</option>
                    <option>Canada</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-[#040523]">Hospital/Clinic name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    placeholder="Your hospital/Clinic name"
                    className="w-full h-14 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFF] px-5 text-[15px] focus:border-[#5768fd] focus:outline-none transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-[#040523]">How can we help?</label>
                  <textarea 
                    placeholder="I'm interested in learning more about PrecisionNote for my practice..."
                    className="w-full h-32 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFF] p-5 text-[15px] focus:border-[#5768fd] focus:outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-[#E2E8F0] text-[#5768fd] focus:ring-[#5768fd]" id="agree" />
                  <label htmlFor="agree" className="text-[13px] text-[#64748b] leading-relaxed">
                    I agree to the processing of my data by PrecisionNote for professional outreach in accordance with our <a href="#" className="text-[#5768fd] underline">Privacy Policy</a>.
                  </label>
                </div>

                <button className="w-full h-14 bg-[#5768fd] text-white rounded-2xl font-bold text-[16px] shadow-lg shadow-[#5768fd]/30 hover:bg-[#4a5af7] transition-all flex items-center justify-center gap-2 group">
                  <Send className="w-4 h-4 group-hover:translate-x-1" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ready Section */}
      <section className="py-24 bg-white">
        <div className="container-custom px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] bg-[#ffca40] px-8 py-20 md:p-24 text-center"
          >
            {/* Background Texture Asset */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none bg-repeat bg-center"
              style={{ 
                backgroundImage: `url(${AppImages.YellowCTABg})`,
                backgroundSize: "contain",
                backgroundPosition: '40% 50%',
                
              }}
            />

            <div className="relative z-10 max-w-[800px] mx-auto">
              <h2 className="text-[40px] md:text-[64px] font-bold text-[#040523] tracking-tight leading-tight mb-8">
                Ready to <span className="font-extrabold italic">reclaim your time?</span>
              </h2>
              <p className="text-[18px] md:text-[22px] text-[#040523]/80 font-medium mb-12">
                Join 2,000+ physicians who've eliminated documentation burden.
              </p>
              <button className="h-16 px-10 bg-[#040523] text-white rounded-2xl font-bold text-[16px] hover:bg-black transition-all shadow-xl shadow-black/10 flex items-center gap-2 group mx-auto">
                Start Free Trial
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default ChatPage;
