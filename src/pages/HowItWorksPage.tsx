import { type ComponentType, useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'framer-motion';
import { Mic, FileText, PenLine, Sparkles, Zap } from 'lucide-react';
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
  <div className="flex-1 h-full flex items-center justify-center">
    <div className="h-full w-full rounded-2xl overflow-hidden border border-[#7c8dff] bg-gradient-to-b from-[#5f72f5] to-[#566af4] shadow-[0_24px_60px_rgba(82,102,241,0.35)]">
      <div className="h-full w-full px-5 md:px-7 py-4 md:py-5 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] flex flex-col items-center justify-center">
        <div className="flex justify-center mb-8">
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

        <div className="flex items-center gap-[4px] h-[74px] w-full justify-center mb-8">
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

const RefinementScreen = ({ reduceMotion }: { reduceMotion: boolean }) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Patient reports experiencing recurring headaches for the past week. Describes pain as intermittent, with increased severity in the afternoon hours, rating intensity at 6-7/10 during peak episodes. Patient identifies potential correlation with coffee consumption. Associated symptoms include intermittent dizziness 92% during severe headache episodes.";
  
  useEffect(() => {
    setDisplayText('');
    let current = '';
    const interval = setInterval(() => {
      if (current.length < fullText.length) {
        current = fullText.slice(0, current.length + 2);
        setDisplayText(current);
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 h-full flex flex-col">
      <div className="h-full rounded-xl border border-[#e2e8f0] bg-white overflow-hidden shadow-sm">
        <div className="flex items-center justify-between gap-4 pl-4 pr-3 py-3 border-b border-[#e2e8f0] bg-white">
          <div className="min-w-0">
            <div className="mb-1 flex items-center gap-2">
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-2 py-0.5 rounded-md bg-[#fef2f2] border border-[#ffc9c9] text-[#c10007] text-[10px] font-medium"
              >
                Cardiology
              </motion.span>
              <div className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#5768fd] animate-pulse" />
                <span className="text-[10px] text-[#5768fd] font-medium uppercase tracking-wider">AI Refining...</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#040523]">
              <p className="text-[14px] font-semibold truncate max-w-[250px]">Oluwadamilola Adebowale</p>
              <span className="text-[#64748b]">.</span>
              <p className="text-[13px] font-mono text-[#64748b] truncate">LGH-2026-09884</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <motion.div
              className="h-8 px-3 rounded-lg bg-[#5768fd]/5 border border-[#5768fd]/20 text-[#5768fd] text-[12px] font-medium flex items-center gap-1.5"
              animate={reduceMotion ? undefined : { opacity: [0.5, 1, 0.5] }}
              transition={reduceMotion ? undefined : { duration: 2, repeat: Infinity }}
            >
              <Zap className="w-3.5 h-3.5" />
              Real-time
            </motion.div>
          </div>
        </div>

        <div className="p-3.5 bg-[#fafbff] h-full">
          <div className="space-y-4">
            <div className="rounded-lg border border-[#e2e8f0] bg-white p-3 shadow-sm">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-[#5768fd] flex items-center justify-center">
                    <FileText className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-[12px] font-bold text-[#040523]">Subjective Note</p>
                </div>
                <div className="h-5 px-2 rounded bg-green-50 text-green-600 text-[9px] font-bold uppercase tracking-wider flex items-center">Verified</div>
              </div>
              <div className="relative rounded-lg border border-[#8fb4ff] bg-[#5768fd]/[0.02] p-3 text-[11.5px] leading-[1.6] text-[#040523] min-h-[100px]">
                {displayText}
                <motion.span
                  className="inline-block w-[2px] h-[14px] bg-[#5768fd] ml-0.5 align-[-3px]"
                  animate={reduceMotion ? undefined : { opacity: [1, 0, 1] }}
                  transition={reduceMotion ? undefined : { duration: 0.8, repeat: Infinity }}
                />
                
                {/* Floating AI Particles */}
                {!reduceMotion && (
                  <AnimatePresence>
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#5768fd] rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0],
                          x: [0, (i - 2) * 20],
                          y: [0, -30]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: i * 0.5,
                          ease: "easeOut"
                        }}
                        style={{ left: '50%', top: '50%' }}
                      />
                    ))}
                  </AnimatePresence>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 opacity-50 grayscale-[0.5]">
              <div className="h-16 rounded-lg border border-[#e2e8f0] bg-white p-2">
                <div className="w-8 h-1.5 bg-[#e2e8f0] rounded-full mb-2" />
                <div className="w-12 h-1.5 bg-[#f1f5f9] rounded-full" />
              </div>
              <div className="h-16 rounded-lg border border-[#e2e8f0] bg-white p-2">
                <div className="w-8 h-1.5 bg-[#e2e8f0] rounded-full mb-2" />
                <div className="w-12 h-1.5 bg-[#f1f5f9] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HumanTouchScreen = ({ reduceMotion }: { reduceMotion: boolean }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isApplying, setIsApplying] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIdx((prev) => (prev + 1) % 4);
      setIsApplying(true);
      setTimeout(() => setIsApplying(false), 800);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 h-full flex flex-col">
      <div className="h-full rounded-xl border border-[#e2e8f0] bg-white p-4 flex flex-col shadow-sm relative overflow-hidden">
        {/* Background Sparkles for demo feel */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 blur-3xl -z-10" />
        
        <div className="flex items-start justify-between gap-3 pb-4 border-b border-[#e2e8f0] shrink-0">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#5768fd] to-[#8b9bff] text-white flex items-center justify-center shadow-lg shadow-[#5768fd]/20">
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="text-[15px] font-bold text-[#040523] tracking-tight">Human Refinement</p>
            </div>
            <p className="text-[11px] text-[#64748b] font-medium">Add specialty nuance or adjust the note structure</p>
          </div>
        </div>

        <div className="pt-5 flex-1 flex flex-col gap-6">
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-[13px] font-bold text-[#040523]">Quick Presets</p>
              <div className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-[#5768fd]" />
                <span className="text-[10px] text-[#5768fd] font-bold uppercase tracking-wider">Dynamic</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {['Make it more concise', 'Professional Tone', 'Focus on Plan', 'Add clinical detail'].map((item, idx) => (
                <motion.button
                  key={item}
                  type="button"
                  className={`h-9 px-4 rounded-xl border text-[12px] font-medium transition-all duration-300 ${
                    idx === selectedIdx 
                      ? 'bg-[#5768fd] border-[#5768fd] text-white shadow-md shadow-[#5768fd]/20' 
                      : 'border-[#e2e8f0] bg-white text-[#64748b] hover:border-[#5768fd]/30'
                  }`}
                  animate={idx === selectedIdx && !reduceMotion ? { scale: [1, 1.05, 1] } : {}}
                  transition={{ duration: 0.4 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="mt-auto space-y-4">
            <div className="relative">
              <div className="h-12 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-4 text-[12px] text-[#64748b] flex items-center font-medium italic">
                "Emphasis patient's history of atrial fibrillation..."
                <motion.div 
                  className="ml-1 w-1 h-4 bg-[#5768fd]"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </div>
              <motion.div 
                className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center border border-[#e2e8f0]"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <PenLine className="w-3 h-3 text-[#5768fd]" />
              </motion.div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex-1 h-1 bg-[#f1f5f9] rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[#5768fd]"
                  animate={isApplying ? { width: ['0%', '100%'] } : { width: '0%' }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <motion.button
                type="button"
                className={`h-11 px-7 rounded-xl text-[14px] font-bold text-white transition-all shadow-lg ${
                  isApplying ? 'bg-[#4c5edb] scale-95' : 'bg-[#5768fd] shadow-[#5768fd]/20'
                }`}
                animate={!isApplying && !reduceMotion ? { boxShadow: ['0 10px 20px rgba(87,104,253,0.1)', '0 10px 20px rgba(87,104,253,0.3)', '0 10px 20px rgba(87,104,253,0.1)'] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {isApplying ? 'Updating...' : 'Apply Nuance'}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mouse Cursor Animation */}
        {!reduceMotion && (
          <motion.div
            className="absolute pointer-events-none z-50"
            animate={{
              x: selectedIdx === 0 ? 80 : selectedIdx === 1 ? 180 : 100,
              y: selectedIdx < 2 ? 160 : 180,
              scale: isApplying ? 0.9 : 1,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <div className="w-5 h-5 text-[#040523] drop-shadow-md">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
              </svg>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const PhoneDisplay = ({ activeStep, reduceMotion }: { activeStep: number; reduceMotion: boolean }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={activeStep}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
      transition={{ duration: reduceMotion ? 0.05 : 0.35, ease: 'easeOut' }}
      className="flex-1 flex flex-col h-full"
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

  const [mobileStep, setMobileStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMobileStep((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
                    <PhoneDisplay activeStep={mobileStep} reduceMotion={false} />
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
