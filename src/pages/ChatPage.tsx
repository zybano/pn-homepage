import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ArrowRight, ChevronDown, Send, Check } from 'lucide-react';
import LandingNav from '../components/LandingNav';
import LandingFooter from '../components/LandingFooter';
import { AppImages } from '../lib/data';

const GB_FLAG_ICON = 'https://www.figma.com/api/mcp/asset/7543b70b-b0a7-4094-892a-2a049edd5d07';
type PhoneCode = { country: string; code: string; flag: string };

const PHONE_CODES: PhoneCode[] = [
  { country: 'United Kingdom', code: '+44', flag: GB_FLAG_ICON },
  { country: 'United States', code: '+1', flag: 'https://flagcdn.com/w20/us.png' },
  { country: 'Nigeria', code: '+234', flag: 'https://flagcdn.com/w20/ng.png' },
  { country: 'Canada', code: '+1', flag: 'https://flagcdn.com/w20/ca.png' },
];

const COUNTRIES = ['United Kingdom', 'United States', 'Nigeria', 'Canada'] as const;

const ChatPage = () => {
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState<PhoneCode>(PHONE_CODES[0]);
  const [selectedCountry, setSelectedCountry] = useState<(typeof COUNTRIES)[number] | 'Select country'>('Select country');
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);

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
              className="bg-[#f7f8fc] rounded-2xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[#E2E8F0]"
            >
              <form className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[14px] font-medium leading-5 text-[#040523]">First name <span className="text-[#FD3232]">*</span></label>
                      <input 
                        type="text" 
                        placeholder="Your first name"
                        className="w-full h-[49px] rounded-lg border border-[#CBD5E1] bg-white/90 px-3 text-[14px] leading-5 text-[#040523] placeholder:text-[#737373] focus:border-[#5768fd] focus:outline-none"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[14px] font-medium leading-5 text-[#040523]">Last name <span className="text-[#FD3232]">*</span></label>
                      <input 
                        type="text" 
                        placeholder="Your last name"
                        className="w-full h-[49px] rounded-lg border border-[#CBD5E1] bg-white/90 px-3 text-[14px] leading-5 text-[#040523] placeholder:text-[#737373] focus:border-[#5768fd] focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[14px] font-medium leading-5 text-[#040523]">Work email <span className="text-[#FD3232]">*</span></label>
                      <input 
                        type="email" 
                        placeholder="Your work email"
                        className="w-full h-[49px] rounded-lg border border-[#CBD5E1] bg-white/90 px-3 text-[14px] leading-5 text-[#040523] placeholder:text-[#737373] focus:border-[#5768fd] focus:outline-none"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[14px] font-medium leading-5 text-[#040523]">Contact number <span className="text-[#FD3232]">*</span></label>
                      <div className="relative">
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          onClick={() => {
                            setIsPhoneOpen((prev) => !prev);
                            setIsCountryOpen(false);
                          }}
                          className="w-full h-[50px] rounded-lg border border-[#CBD5E1] bg-white/90 flex items-center justify-between px-3 text-left transition-all hover:bg-slate-50"
                        >
                          <span className="flex items-center gap-2">
                            <img src={selectedPhone.flag} alt={selectedPhone.country} className="h-[17.5px] w-[23.4px]" />
                            <span className="text-[14px] leading-5 text-[#737373]">{selectedPhone.code}</span>
                          </span>
                          <motion.div animate={{ rotate: isPhoneOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <ChevronDown className="h-4 w-4 text-[#5768fd]" />
                          </motion.div>
                        </motion.button>
                        <AnimatePresence>
                          {isPhoneOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              className="absolute left-0 top-[56px] z-50 w-full overflow-hidden rounded-xl border border-[#d3d8ff] bg-white p-1 shadow-xl"
                            >
                              {PHONE_CODES.map((item) => (
                                <button
                                  key={`${item.country}-${item.code}`}
                                  type="button"
                                  onClick={() => {
                                    setSelectedPhone(item);
                                    setIsPhoneOpen(false);
                                  }}
                                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-[14px] transition-colors ${selectedPhone.country === item.country && selectedPhone.code === item.code ? 'bg-[#f3f4ff] font-bold text-[#5768fd]' : 'text-[#64748b] hover:bg-slate-50'}`}
                                >
                                  <span className="flex items-center gap-2">
                                    <img src={item.flag} alt={item.country} className="h-[15px] w-5 object-cover" />
                                    <span>{item.country} ({item.code})</span>
                                  </span>
                                  {selectedPhone.country === item.country && selectedPhone.code === item.code && <Check className="h-4 w-4" />}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[14px] font-medium leading-5 text-[#040523]">Country <span className="text-[#FD3232]">*</span></label>
                    <div className="relative">
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => {
                          setIsCountryOpen((prev) => !prev);
                          setIsPhoneOpen(false);
                        }}
                        className="flex w-full h-[49px] items-center justify-between rounded-lg border border-[#CBD5E1] bg-white/90 px-3 text-left text-[14px] leading-5 text-[#737373] transition-all hover:bg-slate-50"
                      >
                        <span>{selectedCountry}</span>
                        <motion.div animate={{ rotate: isCountryOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronDown className="h-4 w-4 text-[#5768fd]" />
                        </motion.div>
                      </motion.button>
                      <AnimatePresence>
                        {isCountryOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute left-0 top-[55px] z-50 w-full overflow-hidden rounded-xl border border-[#d3d8ff] bg-white p-1 shadow-xl"
                          >
                            {COUNTRIES.map((country) => (
                              <button
                                key={country}
                                type="button"
                                onClick={() => {
                                  setSelectedCountry(country);
                                  setIsCountryOpen(false);
                                }}
                                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-[14px] transition-colors ${selectedCountry === country ? 'bg-[#f3f4ff] font-bold text-[#5768fd]' : 'text-[#64748b] hover:bg-slate-50'}`}
                              >
                                {country}
                                {selectedCountry === country && <Check className="h-4 w-4" />}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[14px] font-medium leading-5 text-[#040523]">Hospital/Clinic name <span className="text-[#FD3232]">*</span></label>
                    <input 
                      type="text" 
                      placeholder="Your hospital/Clinic name"
                      className="w-full h-[49px] rounded-lg border border-[#CBD5E1] bg-white/90 px-3 text-[14px] leading-5 text-[#040523] placeholder:text-[#737373] focus:border-[#5768fd] focus:outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[14px] font-medium leading-5 text-[#040523]">How can we help?</label>
                    <textarea 
                      placeholder="I'm interested in learning more about PrecisionNote for my practice..."
                      className="w-full h-[119px] rounded-lg border border-[#C9D0FF] bg-white p-3 text-[14px] leading-5 text-[#040523] placeholder:text-[#737373] focus:border-[#5768fd] focus:outline-none resize-none"
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full">
                  <button
                    type="button"
                    onClick={() => setAgreedToPolicy((prev) => !prev)}
                    aria-pressed={agreedToPolicy}
                    aria-label="Agree to data processing policy"
                    className="w-5 h-5 rounded-[2px] border-[1.5px] border-[#5768fd] bg-transparent shrink-0 flex items-center justify-center"
                  >
                    {agreedToPolicy && <Check className="w-3 h-3 text-[#5768fd]" />}
                  </button>
                  <span className="text-[12px] leading-4 text-[#64748b] text-center flex-1">
                    I agree to the processing of my data by PrecisionNote for professional outreach in accordance with our <a href="#" className="underline">Privacy Policy.</a>
                  </span>
                </div>

                <button className="w-full h-12 bg-[#5768fd] text-white rounded-lg font-semibold px-8 shadow-[0_10px_30px_rgba(87,104,253,0.3)] hover:bg-[#4a5af7] transition-all flex items-center justify-center gap-2 group">
                  <Send className="w-4 h-4" />
                  <span className="text-[16px] leading-6">Send Message</span>
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
