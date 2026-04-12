import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, ChevronDown, ChevronUp, ArrowRight, Shield, Zap, Clock, MessageSquare, Star, HeartPulse } from 'lucide-react';
import LandingNav from '../components/LandingNav';
import LandingFooter from '../components/LandingFooter';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [viewMode, setViewMode] = useState<'individual' | 'organization'>('individual');

  const faqs = [
    {
      question: "Does this work with my specific EMR?",
      answer: "Yes. PrecisionNote is designed to be EMR-agnostic. We offer direct integrations with major systems like Epic, Cerner, and Athena, alongside a universal 'Smart Paste' which works with any web-based or local EMR."
    },
    {
      question: "Is my patient's data safe?",
      answer: "YES. We are fully HIPAA-compliant. We use end-to-end encryption (AES-256) and never store audio files on our servers once the clinical note has been successfully generated."
    },
    {
      question: "How do the 'Credits' work?",
      answer: "Each consultation uses one credit. Credits are refreshed monthly based on your plan. Unused credits do not roll over, but you can always top up if you have an exceptionally busy month."
    },
    {
      question: "What is an 'Ambient Note'?",
      answer: "An ambient note is a clinical document generated purely from the natural conversation between a doctor and patient. You don't need to dictate commands; our AI understands the context and extracts the medical data automatically."
    },
    {
      question: "How accurate is the medical transcription?",
      answer: "Our clinical models are trained specifically on medical terminology across 40+ specialties, achieving over 99% accuracy in clinical intent and terminology extraction."
    },
    {
      question: "Can I edit the notes after they are generated?",
      answer: "Absolutely. You maintain full clinical control. You can review, edit, and append any note before signing and syncing it to your EMR."
    },
    {
      question: "Does it understand different accents?",
      answer: "Yes. Our AI engine is built on diverse linguistic models that accurately process medical consultations in various Nigerian and international accents."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-geist relative overflow-hidden">
      <LandingNav />

      {/* Decorative Backgrounds */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-brand-bg/30 pointer-events-none" />
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[1400px] h-[600px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <main className="pt-40 pb-24 relative z-10">
        
        {/* Header Section */}
        <section className="container-custom text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full mb-8"
          >
            <Shield className="w-4 h-4" />
            <span className="text-[13px] font-black uppercase tracking-widest">Transparent Clinical Pricing</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl lg:text-8xl font-black text-brand-navy mb-10 tracking-[-0.04em] leading-[0.9]"
          >
            Choose your level of<br /><span className="text-brand-blue">clinical excellence.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl lg:text-2xl text-brand-muted max-w-3xl mx-auto mb-16 font-medium"
          >
            Flexible plans designed for every stage of your medical career, from residency to institutional leadership.
          </motion.p>

          {/* Master Toggles */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             className="flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <div className="bg-slate-100 p-2 rounded-[24px] flex items-center shadow-inner">
              <button 
                onClick={() => setViewMode('individual')}
                className={`px-10 py-4 rounded-[20px] text-sm font-black uppercase tracking-widest transition-all ${viewMode === 'individual' ? 'bg-white text-brand-navy shadow-xl' : 'text-brand-muted hover:text-brand-navy'}`}
              >
                Individual
              </button>
              <button 
                onClick={() => setViewMode('organization')}
                className={`px-10 py-4 rounded-[20px] text-sm font-black uppercase tracking-widest transition-all ${viewMode === 'organization' ? 'bg-white text-brand-navy shadow-xl' : 'text-brand-muted hover:text-brand-navy'}`}
              >
                Organizations
              </button>
            </div>
            
            <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl border border-brand-border text-sm font-black text-brand-navy cursor-pointer hover:border-brand-blue transition-colors shadow-sm uppercase tracking-widest">
              Currency: USD <ChevronDown className="w-4 h-4 text-brand-blue" />
            </div>
          </motion.div>
        </section>

        {/* Pricing Cards */}
        <section className="container-custom mb-40">
          <div className="grid lg:grid-cols-3 gap-10">
            <PricingCard 
              name="The Resident"
              description="Perfect for medical students and residents getting started."
              price="0"
              buttonText="Start Free Forever"
              features={[
                "15 consultations / month",
                "Standard SOAP Templates",
                "HIPAA Secure Environment",
                "Basic AI Documentation"
              ]}
            />

            <PricingCard 
              name="The Attending"
              description="Unlimited clinical intelligence for high-volume practices."
              price={billingCycle === 'yearly' ? 120 : 149}
              period={billingCycle === 'yearly' ? "/ month (billed yearly)" : "/ month"}
              isPopular={true}
              billingCycle={billingCycle}
              onBillingToggle={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              buttonText="14-Day Free Trial"
              features={[
                "Everything in Resident, plus:",
                "Unlimited consultations",
                "Specialty specific templates",
                "Advanced AI Medical Logic",
                "Priority Clinical Support",
                "Universal EMR Integration"
              ]}
            />

            <PricingCard 
              name="The Chief"
              description="Scalable infrastructure for medical institutions."
              price="Custom"
              buttonText="Get Enterprise Quote"
              features={[
                "Everything in Attending, plus:",
                "Multi-team admin controls",
                "Full EHR/HMS Deep Sync",
                "Dedicated Success Scribe",
                "Institutional SLA Suite"
              ]}
            />
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="container-custom mb-40">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black text-brand-navy tracking-tight mb-4">Compare Features</h2>
            <p className="text-xl text-brand-muted font-bold">Find the right package for your documentation needs.</p>
          </div>
          
          <div className="bg-white rounded-[48px] border border-slate-100 overflow-hidden shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="p-10 w-1/4"></th>
                  <th className="p-10 w-1/4 text-center">
                    <div className="text-2xl font-black text-brand-navy">The Resident</div>
                  </th>
                  <th className="p-10 w-1/4 text-center bg-brand-blue/5">
                    <div className="text-2xl font-black text-brand-navy">The Attending</div>
                    <div className="inline-block mt-3 px-3 py-1 bg-brand-blue text-white text-[10px] font-black uppercase tracking-widest rounded-full">Recommended</div>
                  </th>
                  <th className="p-10 w-1/4 text-center">
                    <div className="text-2xl font-black text-brand-navy">The Chief</div>
                  </th>
                </tr>
              </thead>
              
              <TableGroup 
                title="Scribe Capabilities" 
                rows={[
                  { label: "Monthly consultations", values: ["15", "Unlimited", "Unlimited"] },
                  { label: "AI Medical Intelligence", values: ["Standard", "Advanced", "Advanced"] },
                  { label: "Ambient Conversation Support", values: [true, true, true] },
                  { label: "Multi-Language Processing", values: ["Basic", "Full Support", "Full Support"] }
                ]}
              />

              <TableGroup 
                title="Clinical Documentation" 
                rows={[
                  { label: "SOAP & Progress Notes", values: [true, true, true] },
                  { label: "Specialty-Specific Templates", values: ["Basic", "50+ Specialties", "Customizable"] },
                  { label: "Clinical Audit Logs", values: [false, true, true] },
                  { label: "Custom Note Formatting", values: [false, true, true] }
                ]}
              />

              <TableGroup 
                title="Security & Support" 
                rows={[
                  { label: "HIPAA & GDPR Compliance", values: [true, true, true] },
                  { label: "End-to-End Encryption", values: [true, true, true] },
                  { label: "Response Time", values: ["48h", "8h Priority", "1h VIP"] },
                  { label: "Dedicated Account Manager", values: [false, false, true] }
                ]}
              />
            </table>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container-custom mb-40">
          <div className="grid lg:grid-cols-2 gap-32">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full mb-8">
                <Star className="w-4 h-4 fill-brand-blue/20" />
                <span className="text-[13px] font-black uppercase tracking-widest">Questions & Answers</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-brand-navy mb-8 tracking-[-0.04em] leading-[0.9]">Everything you<br />need to know.</h2>
              <p className="text-xl text-brand-muted font-bold mb-10">Can't find what you're looking for? Our team is available 24/7 to help.</p>
              <button className="flex items-center gap-3 text-brand-blue font-black text-lg hover:underline">
                Contact Technical Support <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container-custom mb-24">
           <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#040523] text-white rounded-[64px] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent pointer-events-none" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-blue rounded-3xl mb-12 shadow-2xl">
                <HeartPulse className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-5xl lg:text-8xl font-black mb-10 tracking-[-0.04em] leading-[0.9]">Start your 14-day<br />free trial.</h2>
              <p className="text-xl lg:text-2xl text-slate-400 mb-16 font-bold max-w-2xl mx-auto">
                No credit card required. Setup takes less than 5 minutes.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="px-12 py-7 bg-brand-blue text-white rounded-full font-black text-xl flex items-center gap-4 hover:scale-105 transition-all shadow-2xl">
                  Get Started Now <ArrowRight className="w-6 h-6" />
                </button>
                <button className="px-12 py-7 bg-white/5 text-white rounded-full font-black text-xl flex items-center gap-4 border border-white/10 hover:bg-white/10 transition-all">
                  Contact Sales
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
};

const PricingCard = ({ 
  name, 
  price, 
  description, 
  buttonText, 
  features, 
  isPopular = false, 
  period,
  billingCycle,
  onBillingToggle
}: any) => (
  <motion.div 
    whileHover={{ y: -12 }}
    className={`p-12 rounded-[56px] border-2 flex flex-col relative transition-all duration-500 ${isPopular ? 'bg-white border-brand-blue shadow-[0_40px_100px_-20px_rgba(59,130,246,0.15)]' : 'bg-white/50 border-slate-100 hover:border-brand-blue/20 shadow-sm'}`}
  >
    {isPopular && (
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-[11px] font-black uppercase tracking-[0.2em] px-8 py-2.5 rounded-full shadow-xl">
        Most Recommended
      </div>
    )}
    
    <div className="mb-12">
      <h3 className="text-3xl font-black text-brand-navy mb-6 tracking-tight">{name}</h3>
      <p className="text-brand-muted text-[17px] font-bold leading-relaxed">{description}</p>
    </div>

    <div className="mb-12">
      <div className="flex items-baseline gap-2">
        <span className="text-7xl font-black text-brand-navy tracking-tighter">
          {typeof price === 'number' ? `$${price}` : price}
        </span>
        {period && <span className="text-brand-muted font-bold text-[15px] opacity-60 tracking-tight max-w-[120px] leading-tight">{period}</span>}
      </div>

      {onBillingToggle && (
        <div className="mt-8 p-1.5 bg-slate-50 rounded-2xl inline-flex items-center gap-2 border border-slate-100">
          <button 
            onClick={() => onBillingToggle()}
            className={`px-6 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${billingCycle === 'yearly' ? 'bg-white text-brand-navy shadow-lg text-[13px]' : 'text-brand-muted'}`}
          >
            Yearly
          </button>
          <button 
            onClick={() => onBillingToggle()}
            className={`px-6 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${billingCycle === 'monthly' ? 'bg-white text-brand-navy shadow-lg text-[13px]' : 'text-brand-muted'}`}
          >
            Monthly
          </button>
        </div>
      )}
    </div>

    <button className={`w-full py-6 rounded-full font-black text-xl mb-12 transition-all ${isPopular ? 'bg-brand-blue text-white shadow-2xl shadow-brand-blue/30 hover:opacity-90 active:scale-95' : 'bg-slate-100 text-brand-navy hover:bg-slate-200'}`}>
      {buttonText}
    </button>

    <div className="space-y-6 flex-1">
      <p className="text-[11px] font-black uppercase tracking-[0.2em] text-brand-muted/60 mb-8">What's Included:</p>
      {features.map((feature: string, i: number) => (
        <div key={i} className="flex gap-5 items-start">
          <div className="mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-brand-blue/10 shrink-0">
             <CheckCircle2 className="w-4 h-4 text-brand-blue" />
          </div>
          <span className="text-[17px] font-bold text-slate-700 leading-tight">{feature}</span>
        </div>
      ))}
    </div>

    <button className="mt-12 text-brand-blue font-black text-sm flex items-center gap-2 hover:gap-4 transition-all">
      View Detailed Breakdown <ArrowRight className="w-4 h-4" />
    </button>
  </motion.div>
);

const TableGroup = ({ title, rows }: any) => (
  <>
    <tr>
      <td colSpan={4} className="px-10 py-8 text-[13px] font-black uppercase tracking-[0.3em] text-brand-blue/40 bg-slate-50 border-y border-slate-100">
        {title}
      </td>
    </tr>
    {rows.map((row: any, i: number) => (
      <tr key={i} className="group hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-0">
        <td className="p-10 text-[17px] font-black text-brand-navy">{row.label}</td>
        {row.values.map((val: any, j: number) => (
          <td key={j} className={`p-10 text-center text-lg font-bold ${j === 1 ? 'bg-brand-blue/5 text-brand-navy' : 'text-brand-muted'}`}>
            {typeof val === 'boolean' ? (
              val ? <CheckCircle2 className="w-6 h-6 text-brand-blue mx-auto" /> : <XCircle className="w-6 h-6 text-slate-100 mx-auto" />
            ) : (
              val
            )}
          </td>
        ))}
      </tr>
    ))}
  </>
);

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white border border-slate-100 rounded-[32px] overflow-hidden transition-all hover:border-brand-blue/30 shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300">
      <button 
        className="w-full p-10 text-left flex justify-between items-center gap-8 group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-2xl font-black text-brand-navy group-hover:text-brand-blue transition-colors leading-tight">{question}</span>
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${isOpen ? 'bg-brand-blue text-white rotate-180' : 'bg-slate-50 text-brand-muted group-hover:bg-brand-blue/10 group-hover:text-brand-blue'}`}>
          <ChevronDown className="w-6 h-6" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="p-10 pt-0 text-xl text-brand-muted leading-relaxed font-bold opacity-80">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PricingPage;
