import { motion } from 'framer-motion';
import { Mic, FileText, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import LandingNav from '../components/LandingNav';
import LandingFooter from '../components/LandingFooter';
import Testimonials from '../components/Testimonials';

const HowItWorksPage = () => {
  const steps = [
    {
      title: 'The Listen',
      description: 'Place your device, start the consult. Our ambient AI filters out background noise to focus on clinical nuance.',
      icon: <Mic className="w-6 h-6 text-white" />,
      iconBg: 'bg-[#5768fd]',
    },
    {
      title: 'The Refinement',
      description: 'Real-time medical reasoning. PrecisionNote drafts your H&P, SOAP, or Progress note using specialty-aware LLMs.',
      icon: <FileText className="w-6 h-6 text-white" />,
      iconBg: 'bg-[#c7d2fe]',
    },
    {
      title: 'The Human Touch',
      description: 'Preserve your gut feeling. Add human context that EMRs usually lose.',
      icon: <Sparkles className="w-6 h-6 text-white" />,
      iconBg: 'bg-[#e0e7ff]',
    }
  ];

  const waveformHeights = [
    24, 32, 28, 48, 36, 18, 12, 18, 24, 30,
    52, 20, 24, 15, 10, 15, 30, 45, 20, 12,
    18, 25, 20, 40, 28, 18, 24, 32, 20, 15
  ];

  return (
    <div className="min-h-screen bg-white">
      <LandingNav />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[48px] md:text-[64px] font-bold text-[#040523] tracking-[-2px] leading-tight mb-6"
            >
              Built for your specialty.<br />
              Not just another template.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[18px] text-[#64748b] max-w-2xl mx-auto"
            >
              Specialty-aware AI trained on millions of clinical hours in your specific domain.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-32">
            {/* Left side: Phone Mockup */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex justify-center lg:justify-start"
            >
              {/* Phone Frame */}
              <div className="relative w-[300px] h-[600px] bg-[#1e2030] rounded-[50px] p-[12px] shadow-2xl border-[4px] border-[#2a2c3e]">
                <div className="absolute top-[35px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#2a2c3e]" />
                
                <div className="h-full w-full bg-white rounded-[40px] overflow-hidden flex flex-col p-6 pt-12 relative">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-2 h-2 rounded-full bg-[#5768fd]" />
                    <span className="font-mono text-[11px] font-bold text-[#314158] uppercase tracking-wider">PrecisionNote</span>
                    <span className="ml-auto font-mono text-[11px] text-[#90a1b9]">14:23</span>
                  </div>

                  <div className="flex-1 flex flex-col items-center justify-center gap-12">
                    <div className="flex items-center gap-[4px] h-20 w-full justify-center">
                      {waveformHeights.map((h, i) => (
                        <motion.div 
                          key={i}
                          className="w-[4px] bg-[#5768fd] rounded-full"
                          animate={{ 
                            height: [h, h * 1.5, h * 0.8, h],
                            opacity: [0.6, 1, 0.7, 1]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.05
                          }}
                        />
                      ))}
                    </div>

                    <div className="px-6 py-3 bg-brand-blue/10 rounded-full flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-[#5768fd] animate-pulse" />
                       <span className="text-brand-blue font-bold text-sm tracking-wide">Listening...</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-blue/10 blur-[100px] rounded-full" />
            </motion.div>

            {/* Right side: Steps */}
            <div className="flex flex-col gap-12">
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className={`flex-shrink-0 w-14 h-14 ${step.iconBg} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-[24px] font-bold text-[#040523] mb-3">{step.title}</h3>
                    <p className="text-[16px] text-[#64748b] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="pb-32">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] bg-[#ffca40] p-12 md:p-20 text-center"
          >
            {/* Block Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                 style={{ 
                   backgroundImage: `linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), 
                                     linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)`,
                   backgroundSize: '40px 40px',
                   backgroundPosition: '0 0, 20px 20px'
                 }}
            />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-[36px] md:text-[56px] font-bold text-[#040523] tracking-tight leading-tight mb-6">
                Ready to reclaim your time?
              </h2>
              <p className="text-[18px] md:text-[20px] text-[#040523]/80 font-medium mb-10">
                 Join 2,000+ physicians who've eliminated documentation burden.
              </p>
              <button className="px-10 py-5 bg-[#040523] text-white rounded-xl font-bold text-lg hover:bg-black transition-all shadow-xl shadow-black/10">
                Start Free Trial
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default HowItWorksPage;
