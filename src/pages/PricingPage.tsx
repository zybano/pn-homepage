import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, HelpCircle, ChevronDown, ChevronUp, ArrowRight, Shield, Zap, Clock, MessageSquare } from 'lucide-react';
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
    <div className="min-h-screen bg-brand-bg font-geist relative overflow-hidden">
      <LandingNav />

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] text-slate-100 opacity-40" viewBox="0 0 1440 800" fill="none">
          <path d="M720 0L1440 200V800L720 600L0 800V200L720 0Z" stroke="currentColor" strokeWidth="2" />
          <path d="M720 100L1340 260V700L720 540L100 700V260L720 100Z" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <main className="pt-32 pb-24 relative z-10">

        {/* Header Section */}
        <section className="container-custom text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-bold text-brand-navy mb-8 tracking-tight"
          >
            PrecisionNote for every<br />stage of your practice
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl lg:text-2xl text-brand-muted max-w-4xl mx-auto mb-12 font-medium"
          >
            From your first residency to building a medical institution, we provide the clinical intelligence you need to focus on what matters most: your patients.
          </motion.p>

          {/* Toggles */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="bg-white p-1.5 rounded-full border border-brand-border flex items-center shadow-sm">
              <button 
                onClick={() => setViewMode('individual')}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${viewMode === 'individual' ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30' : 'text-brand-muted hover:text-brand-navy'}`}
              >
                Individual
              </button>
              <button 
                onClick={() => setViewMode('organization')}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${viewMode === 'organization' ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30' : 'text-brand-muted hover:text-brand-navy'}`}
              >
                Provider Organizations
              </button>
            </div>
            
            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-brand-border text-sm font-bold text-brand-navy cursor-pointer hover:bg-slate-50">
              USD <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="container-custom mb-32">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Resident Plan */}
            <PricingCard 
              name="The Resident"
              description="Start for free. No credit card required."
              price="0"
              buttonText="Start Free with Precision Free"
              features={[
                "15 consultations / month",
                "Standard SOAP Templates",
                "HIPAA Secure",
                "Mobile App Sync"
              ]}
            />

            {/* Attending Plan */}
            <PricingCard 
              name="The Attending"
              description="Unlimited clinical excellence for your practice."
              price="20"
              period="Per user / month"
              isPopular={true}
              billingCycle={billingCycle}
              onBillingToggle={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              buttonText="Try Free for 14 Days"
              features={[
                "Everything in The Resident, plus:",
                "50 consultations / month",
                "Specialty specific templates",
                "Advanced AI Intelligence",
                "Priority Email Support"
              ]}
            />

            {/* Chief of Medicine Plan */}
            <PricingCard 
              name="The Chief of Medicine"
              description="Tailored infrastructure for your whole institution."
              price="Custom"
              buttonText="Contact Sales"
              features={[
                "Everything in The Attending, plus:",
                "Custom consultation limits",
                "EHR / HMS integration",
                "Dedicated Account Manager",
                "SLA & Admin Controls"
              ]}
            />
          </div>
        </section>

        {/* Comparison Table */}
        <section className="container-custom mb-32 hidden lg:block">
          <h2 className="text-4xl font-bold text-center mb-20 text-brand-navy">Choose Your Plan</h2>
          
          <div className="bg-white rounded-[32px] border border-brand-border overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="p-8 w-1/4"></th>
                  <th className="p-8 w-1/4 text-center">
                    <div className="text-xl font-bold text-brand-navy">The Resident</div>
                    <div className="text-xs font-bold text-brand-muted uppercase tracking-widest mt-1">Start for free</div>
                  </th>
                  <th className="p-8 w-1/4 text-center bg-brand-blue/5">
                    <div className="text-xl font-bold text-brand-navy">The Attending</div>
                    <div className="text-xs font-bold text-brand-blue uppercase tracking-widest mt-1">Try Free for 14 Days</div>
                  </th>
                  <th className="p-8 w-1/4 text-center">
                    <div className="text-xl font-bold text-brand-navy">The Chief</div>
                    <div className="text-xs font-bold text-brand-muted uppercase tracking-widest mt-1">Contact Sales</div>
                  </th>
                </tr>
              </thead>
              
              <TableGroup 
                title="Scribe" 
                rows={[
                  { label: "Monthly consultations", values: ["15", "50", "Custom"] },
                  { label: "AI-Powered Dictation", values: ["Basic", "Advanced", "Advanced"] },
                  { label: "Mobile App Sync", values: [true, true, true] }
                ]}
              />

              <TableGroup 
                title="Documentation" 
                rows={[
                  { label: "SOAP & Progress Notes", values: [true, true, true] },
                  { label: "History & Physical (H&P)", values: [false, true, true] },
                  { label: "Discharge & Consult Notes", values: [false, true, true] },
                  { label: "Procedure Notes", values: [false, false, true] },
                  { label: "Specialty Templates", values: ["Basic", "25+ types", "Unlimited"] },
                  { label: "Custom Template Builder", values: [false, false, "Yes"] }
                ]}
              />

              <TableGroup 
                title="Intelligence" 
                rows={[
                  { label: "Action-Relevant Alerts", values: [false, "Unlimited", "Unlimited"] },
                  { label: "Clinical Note Editing", values: [true, true, true] },
                  { label: "Advanced Analytics", values: [false, false, "Yes"] }
                ]}
              />

              <TableGroup 
                title="Admin & Sync" 
                rows={[
                  { label: "EHR / HMS Integration", values: ["Manual Only", "Auto-Sync", "Custom API"] },
                  { label: "Multi-Team Management", values: [false, false, "Yes"] },
                  { label: "Dedicated Account Scribe", values: [false, false, "Yes"] }
                ]}
              />

              <TableGroup 
                title="Security" 
                rows={[
                  { label: "HIPAA Compliance", values: ["Yes", "Yes", "Yes"] },
                  { label: "SOC2 Type II", values: [false, false, "Yes"] },
                  { label: "Support Level", values: ["Help Center", "Priority", "24/7 VIP"] }
                ]}
              />
            </table>
          </div>
        </section>


        {/* FAQ Section */}
        <section className="container-custom mb-32">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-bold text-brand-navy mb-8 tracking-tight">Frequently Asked Questions</h2>
              <p className="text-xl text-brand-muted font-medium">Everything you need to know about PrecisionNote.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Strip */}
        <div className="container-custom mb-24">
          <div className="bg-[#FFC559] rounded-[48px] p-12 lg:p-20 text-center text-brand-navy relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-black mb-8">Still have questions?</h2>
              <p className="text-xl lg:text-2xl font-bold text-brand-navy/70 mb-12">
                Our clinical team is ready to help you find the right plan for your practice.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="px-10 py-6 bg-brand-navy text-white rounded-full font-bold text-xl flex items-center gap-3 hover:scale-105 transition-transform shadow-2xl">
                  Chat with a Specialist <MessageSquare className="w-6 h-6" />
                </button>
                <button className="px-10 py-6 bg-white text-brand-navy rounded-full font-bold text-xl flex items-center gap-3 border border-brand-navy/10 hover:bg-slate-50 transition-all">
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
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
    whileHover={{ y: -10 }}
    className={`p-10 rounded-[40px] border flex flex-col relative transition-all ${isPopular ? 'bg-white border-brand-blue shadow-2xl shadow-brand-blue/10' : 'bg-transparent border-brand-border'}`}
  >
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFC559] text-brand-navy text-[13px] font-black uppercase tracking-widest px-6 py-2 rounded-full border-2 border-white shadow-lg">
        Most Popular
      </div>
    )}
    
    <div className="mb-10">
      <h3 className="text-2xl font-bold text-brand-navy mb-4">{name}</h3>
      <p className="text-brand-muted text-sm font-medium leading-relaxed">{description}</p>
    </div>

    <div className="mb-10">
      <div className="flex items-baseline gap-2">
        <span className="text-6xl font-black text-brand-navy tracking-tighter">
          {typeof price === 'number' ? `$${price}` : price}
        </span>
        {period && <span className="text-brand-muted font-bold text-sm tracking-wide">{period}</span>}
      </div>

      {onBillingToggle && (
        <div className="mt-6 p-1.5 bg-slate-100 rounded-xl inline-flex items-center gap-2">
          <button 
            onClick={() => onBillingToggle()}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${billingCycle === 'yearly' ? 'bg-white text-brand-navy shadow-sm' : 'text-brand-muted'}`}
          >
            Yearly
          </button>
          <button 
            onClick={() => onBillingToggle()}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${billingCycle === 'monthly' ? 'bg-white text-brand-navy shadow-sm' : 'text-brand-muted'}`}
          >
            Monthly
          </button>
          {billingCycle === 'yearly' && (
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-[10px] font-black uppercase tracking-wider ml-2">
              Save 20%
            </span>
          )}
        </div>
      )}
    </div>

    <button className={`w-full py-5 rounded-full font-bold text-[17px] mb-10 transition-all ${isPopular ? 'bg-brand-blue text-white shadow-xl shadow-brand-blue/20 hover:opacity-90' : 'bg-[#F1F5F9] text-brand-navy hover:bg-slate-200'}`}>
      {buttonText}
    </button>

    <div className="space-y-6 flex-1">
      <p className="text-xs font-black uppercase tracking-widest text-brand-muted">Features Included:</p>
      {features.map((feature: string, i: number) => (
        <div key={i} className="flex gap-4 items-start">
          <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
          <span className="text-sm font-medium text-slate-700 leading-snug">{feature}</span>
        </div>
      ))}
    </div>

    <button className="mt-10 text-brand-blue font-bold text-sm flex items-center gap-2 hover:underline">
      See more <ArrowRight className="w-4 h-4" />
    </button>
  </motion.div>
);

const TableGroup = ({ title, rows }: any) => (
  <>
    <tr className="bg-brand-bg/50">
      <td colSpan={4} className="px-8 py-6 text-sm font-black uppercase tracking-[0.2em] text-brand-muted border-y border-brand-border">
        {title}
      </td>
    </tr>
    {rows.map((row: any, i: number) => (
      <tr key={i} className="hover:bg-slate-50 transition-colors border-b border-brand-border/40 last:border-0">
        <td className="p-8 text-[15px] font-bold text-brand-navy">{row.label}</td>
        {row.values.map((val: any, j: number) => (
          <td key={j} className={`p-8 text-center text-[15px] font-medium ${j === 1 ? 'bg-brand-blue/5 text-brand-navy' : 'text-brand-muted'}`}>
            {typeof val === 'boolean' ? (
              val ? <CheckCircle2 className="w-6 h-6 text-brand-blue mx-auto" /> : <XCircle className="w-6 h-6 text-slate-200 mx-auto" />
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
    <div className="bg-white border border-brand-border rounded-3xl overflow-hidden transition-all hover:border-brand-blue/30 shadow-sm">
      <button 
        className="w-full p-8 text-left flex justify-between items-center gap-6 group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-bold text-brand-navy group-hover:text-brand-blue transition-colors">{question}</span>
        {isOpen ? <ChevronUp className="w-6 h-6 text-brand-blue" /> : <ChevronDown className="w-6 h-6 text-brand-muted" />}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="p-8 pt-0 text-lg text-brand-muted leading-relaxed font-medium">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

export default PricingPage;
