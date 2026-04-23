import { type ComponentType, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'framer-motion';
import { Mic, FileText, Sparkles } from 'lucide-react';
import LandingNav from '../components/LandingNav';
import LandingFooter from '../components/LandingFooter';
import Testimonials from '../components/Testimonials';
import { AppImages } from '../lib/data';

type Step = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  activeIconBg: string;
};

const waveformHeights = [
  24, 32, 28, 48, 36, 18, 12, 18, 24, 30,
  52, 20, 24, 15, 10, 15, 30, 45, 20, 12,
  18, 25, 20, 40, 28, 18, 24, 32, 20, 15,
];

const ListeningScreen = ({ reduceMotion }: { reduceMotion: boolean }) => (
  <div className="flex-1 flex items-center justify-center">
    <div className="w-full max-w-[560px] rounded-2xl overflow-hidden border border-[#7c8dff] bg-gradient-to-b from-[#5f72f5] to-[#566af4] shadow-[0_24px_60px_rgba(82,102,241,0.35)]">
      <div className="h-full w-full px-5 md:px-7 py-4 md:py-5 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)]">
        <div className="flex justify-center mb-5">
          <div className="h-8 px-4 rounded-full bg-[rgba(104,123,255,0.75)] border border-[rgba(255,255,255,0.15)] text-white flex items-center gap-2 text-[12px] font-bold tracking-wide">
            <motion.div
              className="w-2.5 h-2.5 rounded-full bg-[#ff3b30]"
              animate={reduceMotion ? undefined : { opacity: [1, 0.45, 1], scale: [1, 0.92, 1] }}
              transition={reduceMotion ? undefined : { duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="uppercase">Recording</span>
            <span className="opacity-90">•</span>
            <motion.span
              animate={reduceMotion ? undefined : { opacity: [0.75, 1, 0.75] }}
              transition={reduceMotion ? undefined : { duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              0:02
            </motion.span>
          </div>
        </div>

        <div className="flex items-center gap-[4px] h-[74px] w-full justify-center mb-6">
          {waveformHeights.map((h, i) => (
            <motion.div
              key={i}
              className="w-[4px] rounded-full bg-[#c9d3ff]"
              animate={reduceMotion ? undefined : { height: [h * 0.72, h * 1.15, h * 0.82, h * 0.92], opacity: [0.72, 1, 0.78, 0.95] }}
              transition={
                reduceMotion
                  ? undefined
                  : {
                      duration: 1.4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.045,
                    }
              }
              style={{ height: `${Math.max(14, h * 0.8)}px` }}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            className="h-10 px-5 rounded-xl bg-[rgba(148,165,255,0.55)] border border-[rgba(255,255,255,0.2)] text-white/95 text-[13px] font-semibold flex items-center gap-2"
          >
            <span className="flex items-center gap-[2px]">
              <span className="w-[3px] h-3 rounded-full bg-white/85" />
              <span className="w-[3px] h-3 rounded-full bg-white/85" />
            </span>
            Pause
          </button>
        </div>
      </div>
    </div>
  </div>
);

const RefinementScreen = ({ reduceMotion }: { reduceMotion: boolean }) => (
  <div className="flex-1 flex flex-col justify-center gap-4">
    <div className="rounded-2xl bg-[#f8f9ff] border border-[#dbe3ff] p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#5768fd]">AI Refinement</span>
        <div className="flex items-center gap-1">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className="w-1.5 h-1.5 rounded-full bg-[#5768fd]"
              animate={reduceMotion ? undefined : { opacity: [0.3, 1, 0.3] }}
              transition={reduceMotion ? undefined : { repeat: Infinity, duration: 1, delay: dot * 0.2 }}
            />
          ))}
        </div>
      </div>
      {['Subjective', 'Objective', 'Assessment', 'Plan'].map((label, index) => (
        <div key={label} className="mb-3 last:mb-0">
          <p className="font-mono text-[9px] uppercase tracking-wider text-[#90a1b9] mb-1">{label}</p>
          <motion.div
            className="h-1.5 rounded-full bg-[#cad5ff]"
            initial={{ width: '30%' }}
            animate={{ width: reduceMotion ? '100%' : ['40%', '95%', '80%', '100%'] }}
            transition={{ duration: 1.2, delay: index * 0.08, ease: 'easeOut' }}
          />
          {index < 2 && (
            <motion.div
              className="h-1.5 rounded-full bg-[#e2e8ff] mt-1"
              initial={{ width: '20%' }}
              animate={{ width: reduceMotion ? '75%' : ['25%', '70%', '60%', '75%'] }}
              transition={{ duration: 1.1, delay: 0.15 + index * 0.08, ease: 'easeOut' }}
            />
          )}
        </div>
      ))}
    </div>
    <div className="py-2 px-3 rounded-xl bg-[#eef2ff] text-[11px] font-medium text-[#5768fd] text-center">
      Drafting complete. Clinically structured in real time.
    </div>
  </div>
);

const HumanTouchScreen = ({ reduceMotion }: { reduceMotion: boolean }) => (
  <div className="flex-1 flex flex-col justify-center gap-4">
    <div className="rounded-2xl border border-[#dfe5f7] bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#64748b]">Final Review</span>
        <span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[9px] font-bold uppercase tracking-wider">
          Human Edit
        </span>
      </div>
      <div className="space-y-2 text-[11px] text-[#314158]">
        <p>Assessment: likely viral URI, no respiratory distress.</p>
        <motion.p
          className="rounded-md bg-[#fff8da] px-2 py-1 border border-[#ffe98c]"
          animate={reduceMotion ? undefined : { boxShadow: ['0 0 0 rgba(255,202,64,0)', '0 0 0 6px rgba(255,202,64,0.15)', '0 0 0 rgba(255,202,64,0)'] }}
          transition={reduceMotion ? undefined : { repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        >
          Added: monitor nocturnal cough and reassess if persistent.
        </motion.p>
        <p>Plan: hydration, rest, supportive care; follow-up PRN.</p>
      </div>
    </div>
    <div className="flex items-center justify-between gap-2">
      <div className="flex-1 py-2 px-3 rounded-xl bg-emerald-50 text-[11px] font-semibold text-emerald-700 text-center">
        Physician-approved updates saved
      </div>
    </div>
  </div>
);

const PhoneDisplay = ({ activeStep, reduceMotion }: { activeStep: number; reduceMotion: boolean }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={activeStep}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
      transition={{ duration: reduceMotion ? 0.05 : 0.35, ease: 'easeOut' }}
      className="flex-1 flex flex-col"
    >
      {activeStep === 0 && <ListeningScreen reduceMotion={reduceMotion} />}
      {activeStep === 1 && <RefinementScreen reduceMotion={reduceMotion} />}
      {activeStep === 2 && <HumanTouchScreen reduceMotion={reduceMotion} />}
    </motion.div>
  </AnimatePresence>
);

const HowItWorksPage = () => {
  const steps: Step[] = [
    {
      title: 'The Listen',
      description: 'Place your device, start the consult. Our ambient AI filters out background noise to focus on clinical nuance.',
      icon: Mic,
      activeIconBg: 'bg-[#5768fd]',
    },
    {
      title: 'The Refinement',
      description: 'Real-time medical reasoning. PrecisionNote drafts your H&P, SOAP, or Progress note using specialty-aware LLMs.',
      icon: FileText,
      activeIconBg: 'bg-[#9baafc]',
    },
    {
      title: 'The Human Touch',
      description: 'Preserve your gut feeling. Add human context that EMRs usually lose.',
      icon: Sparkles,
      activeIconBg: 'bg-[#8b9bff]',
    },
  ];

  const reduceMotion = useReducedMotion();
  const storyRef = useRef<HTMLDivElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ['start center', 'end center'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const progress = Math.max(0, Math.min(0.999, latest));
    const nextStep = Math.floor(progress * 3);
    setActiveStep((prev) => (prev === nextStep ? prev : nextStep));
  });

  return (
    <div className="min-h-screen bg-white">
      <LandingNav />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
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

          <div className="lg:hidden grid gap-10 max-w-6xl mx-auto mb-24">
            <div className="relative flex justify-center">
              <div className="w-full max-w-[640px]">
                <div className="relative rounded-[26px] bg-[#1e2030] border-[5px] border-[#2a2c3e] shadow-2xl p-3">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-[#3a3d52]" />
                  <div className="h-[300px] md:h-[340px] w-full bg-white rounded-[18px] overflow-hidden flex flex-col p-6 pt-10 relative">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-2 h-2 rounded-full bg-[#5768fd]" />
                      <span className="font-mono text-[11px] font-bold text-[#314158] uppercase tracking-wider">PrecisionNote</span>
                      <span className="ml-auto font-mono text-[11px] text-[#90a1b9]">14:23</span>
                    </div>
                    <ListeningScreen reduceMotion={false} />
                  </div>
                </div>
                <div className="mx-auto h-4 w-[88%] rounded-b-[22px] bg-[#2b2f42] shadow-[0_16px_30px_rgba(15,23,42,0.22)]" />
                <div className="mx-auto -mt-2 h-2 w-[22%] rounded-b-xl bg-[#3a3d52]" />
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[360px] bg-brand-blue/10 blur-[100px] rounded-full" />
            </div>
            <div className="flex flex-col gap-10">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${step.activeIconBg}`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-bold text-[#040523] mb-3">{step.title}</h3>
                    <p className="text-[16px] text-[#64748b] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={storyRef} className="hidden lg:block relative h-[300vh] mb-20">
            <div className="sticky top-16 h-[calc(100vh-4rem)] flex items-center">
              <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)] gap-10 xl:gap-12 items-center w-full max-w-[1200px] mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="relative flex justify-center lg:justify-start"
                >
                  <div className="w-full max-w-[760px]">
                    <div className="relative rounded-[30px] bg-[#1e2030] border-[5px] border-[#2a2c3e] shadow-2xl p-3">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-[#3a3d52]" />
                      <div className="h-[420px] xl:h-[460px] w-full bg-white rounded-[22px] overflow-hidden flex flex-col p-8 pt-11 relative">
                        <div className="flex items-center gap-2 mb-8">
                          <div className="w-2 h-2 rounded-full bg-[#5768fd]" />
                          <span className="font-mono text-[11px] font-bold text-[#314158] uppercase tracking-wider">PrecisionNote</span>
                          <span className="ml-auto font-mono text-[11px] text-[#90a1b9]">14:23</span>
                        </div>
                        <PhoneDisplay activeStep={activeStep} reduceMotion={Boolean(reduceMotion)} />
                      </div>
                    </div>
                    <div className="mx-auto h-5 w-[90%] rounded-b-[26px] bg-[#2b2f42] shadow-[0_20px_34px_rgba(15,23,42,0.22)]" />
                    <div className="mx-auto -mt-2 h-2.5 w-[26%] rounded-b-xl bg-[#3a3d52]" />
                  </div>
                  <div className="absolute -z-10 top-1/2 left-[46%] -translate-x-1/2 -translate-y-1/2 w-[720px] h-[420px] bg-brand-blue/10 blur-[120px] rounded-full" />
                </motion.div>

                <div className="relative pl-6 xl:pl-7 max-w-[420px] justify-self-end w-full">
                  <div className="absolute left-0 top-2 bottom-2 w-[2px] rounded-full bg-[#dfe4ff]">
                    <motion.div
                      className="w-full bg-[#5768fd] rounded-full origin-top"
                      style={{
                        scaleY: scrollYProgress,
                        height: '100%',
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-10">
                    {steps.map((step, i) => {
                      const isActive = i === activeStep;
                      const Icon = step.icon;
                      return (
                        <motion.div
                          key={i}
                          animate={{
                            opacity: isActive ? 1 : 0.35,
                            y: isActive ? 0 : 8,
                            scale: isActive ? 1 : 0.97,
                          }}
                          transition={{ duration: reduceMotion ? 0.1 : 0.35, ease: 'easeOut' }}
                          className="flex gap-6"
                        >
                          <motion.div
                            animate={{
                              boxShadow: isActive ? '0 14px 28px rgba(87,104,253,0.25)' : '0 8px 20px rgba(15,23,42,0.08)',
                              scale: isActive ? 1.05 : 1,
                            }}
                            transition={{ duration: reduceMotion ? 0.1 : 0.35, ease: 'easeOut' }}
                            className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${
                              isActive ? step.activeIconBg : 'bg-[#eef1ff]'
                            }`}
                          >
                            <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-[#c4cdee]'}`} />
                          </motion.div>
                          <div>
                            <h3 className="text-[26px] font-bold text-[#040523] mb-3">{step.title}</h3>
                            <p className="text-[16px] text-[#64748b] leading-relaxed">{step.description}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
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
            {/* Block Pattern Overlay from Figma */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none bg-repeat bg-center"
              style={{ 
                backgroundImage: `url(${AppImages.YellowCTABg})`,
                backgroundSize: "contain",
                backgroundPosition: '40% 50%',
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
