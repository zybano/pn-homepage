import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Shield,
  Zap,
  Clock,
  MessageSquare,
  Star,
  HeartPulse,
  HelpCircle,
  MessageCircle,
  Calendar,
} from "lucide-react";
import LandingNav from "../components/LandingNav";
import LandingFooter from "../components/LandingFooter";

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly",
  );
  const [viewMode, setViewMode] = useState<"individual" | "teams">(
    "individual",
  );

  const faqs = [
    {
      question: "Does this work with my specific EMR?",
      answer:
        "Yes. PrecisionNote is designed to be EMR-agnostic. We offer direct integrations with major systems like Epic, Cerner, and Athena, alongside a universal 'Smart Paste' which works with any web-based or local EMR.",
    },
    {
      question: "Is my patient's data safe?",
      answer:
        "100%. We are fully HIPAA-compliant. We use end-to-end encryption and never store audio files once the clinical note has been successfully generated.",
    },
    {
      question: "How do the 'Credits' work?",
      answer:
        "Each consultation uses one credit. Credits are refreshed monthly based on your plan. Unused credits do not roll over, but you can always top up if you have an exceptionally busy month.",
    },
    {
      question: "What is an 'Ambient Note'?",
      answer:
        "An ambient note is a clinical document generated purely from the natural conversation between a doctor and patient. You don't need to dictate commands; our AI understands the context and extracts the medical data automatically.",
    },
    {
      question: "How accurate is the medical transcription?",
      answer:
        "Our clinical models are trained specifically on medical terminology across 40+ specialties, achieving over 99% accuracy in clinical intent and terminology extraction.",
    },
    {
      question: "Can I edit the notes after they are generated?",
      answer:
        "Absolutely. You maintain full clinical control. You can review, edit, and append any note before signing and syncing it to your EMR.",
    },
    {
      question: "Does it understand different accents?",
      answer:
        "Yes. Our AI engine is built on diverse linguistic models that accurately process medical consultations in various international and regional accents.",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-bg font-geist relative overflow-hidden">
      <LandingNav />

      {/* Decorative Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-[1500px] pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] left-[-10%] w-[60%] h-[50%] bg-[#5768fd]/10 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute top-[15%] right-[-15%] w-[50%] h-[50%] bg-[#5768fd]/10 blur-[180px] rounded-full" />
      </div>

      <main className="pt-32 pb-24 relative z-10">
        {/* Header Section */}
        <section className="container-custom text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-7xl font-bold text-brand-navy mb-8 tracking-tight leading-[1.1]"
          >
            PrecisionNote for every
            <br />
            stage of your practice
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg lg:text-xl text-brand-muted max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
          >
            From your first residency to leading a department, we provide the
            clinical intelligence you need to focus on what matters most: your
            patients.
          </motion.p>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <div className="bg-[#E9EBFF]/50 p-1 rounded-xl flex items-center border border-[#5768fd]/10">
              <button
                onClick={() => setViewMode("individual")}
                className={`px-6 py-2 rounded-lg text-xs font-bold tracking-wide transition-all ${viewMode === "individual" ? "bg-brand-blue text-white shadow-md" : "text-brand-blue/60 hover:text-brand-blue"}`}
              >
                Individual
              </button>
              <button
                onClick={() => setViewMode("teams")}
                className={`px-6 py-2 rounded-lg text-xs font-bold tracking-wide transition-all ${viewMode === "teams" ? "bg-brand-blue text-white shadow-md" : "text-brand-blue/60 hover:text-brand-blue"}`}
              >
                Teams and Enterprise
              </button>
            </div>

            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-brand-border text-xs font-bold text-brand-navy cursor-pointer hover:border-brand-blue transition-all shadow-sm">
              USD <ChevronDown className="w-3.5 h-3.5 text-brand-muted" />
            </div>
          </motion.div>
        </section>

        {/* Pricing Cards */}
        <section className="container-custom mb-32">
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            <PricingCard
              name="The Resident"
              description="Start for free, No credit card required."
              price="0"
              buttonText="Get PrecisionNote free"
              subtext="20 credits per month"
              features={[
                "AI Ambient Note Generation",
                "Standard SOAP Templates",
                "HIPAA Secure",
                "E-Mail Support",
              ]}
              buttonVariant="secondary"
            />

            <PricingCard
              name="The Attending"
              description="Unlimited scribe solutions for your practice."
              price="20"
              period="Per user/month"
              saveText="Save 20%"
              isPopular={true}
              billingCycle={billingCycle}
              onBillingToggle={() =>
                setBillingCycle(
                  billingCycle === "monthly" ? "yearly" : "monthly",
                )
              }
              buttonText="Try free for 14 days"
              subtext="60 credits per month"
              features={[
                "Everything in the resident, plus:",
                "All Specialty Templates",
                "Universal EMR Integration",
                "Dedicated Success Call",
                "Priority Support",
              ]}
              buttonVariant="primary"
            />

            <PricingCard
              name="The Chief of Medicine"
              description="Customized integration for your whole department."
              price="Custom"
              buttonText="Contact Sales"
              subtext="50+ people per month"
              features={[
                "Everything in the attending, plus:",
                "Bulk User Management",
                "Custom Security Reviews",
                "Dedicated Account Manager",
                "On-Site Training",
              ]}
              buttonVariant="primary"
            />
          </div>
          <p className="text-center text-brand-muted font-bold text-sm mt-12 cursor-pointer hover:text-brand-blue transition-colors flex items-center justify-center gap-2">
            See more <ChevronDown className="w-4 h-4" />
          </p>
        </section>

        <section className="container-custom mb-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <h2 className="text-5xl font-bold text-brand-navy tracking-tight">
              Choose Your Plan
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 no-scrollbar">
              <div className="min-w-[150px] text-center">
                <p className="text-sm font-bold text-brand-navy mb-3">
                  The Resident
                </p>
                <button className="w-full px-4 py-3 bg-slate-50 border border-brand-border rounded-xl text-[11px] font-bold uppercase text-brand-muted hover:bg-slate-100 transition-colors">
                  Start for free
                </button>
              </div>
              <div className="min-w-[150px] text-center">
                <p className="text-sm font-bold text-brand-navy mb-3">
                  The Attending
                </p>
                <button className="w-full px-4 py-3 bg-brand-blue rounded-xl text-[11px] font-bold uppercase text-white shadow-lg shadow-brand-blue/20 hover:opacity-90 transition-all">
                  Try free for 14 days
                </button>
              </div>
              <div className="min-w-[150px] text-center">
                <p className="text-sm font-bold text-brand-navy mb-3">
                  The Chief of Medicine
                </p>
                <button className="w-full px-4 py-3 bg-brand-blue rounded-xl text-[11px] font-bold uppercase text-white shadow-lg shadow-brand-blue/20 hover:opacity-90 transition-all">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <TableGroup
              title="Scribe"
              rows={[
                {
                  label: "Ambient Note Generation",
                  values: ["Included", "Included", "Included"],
                },
                {
                  label: "Multi-Language Processing",
                  values: ["Standard", "Advanced", "Custom"],
                },
              ]}
            />

            <TableGroup
              title="Documentation"
              isOpenDefault={true}
              rows={[
                {
                  label: "SOAP & Progress Notes",
                  values: ["Included", "Included", "Included"],
                },
                {
                  label: "History & Physical (H&P)",
                  values: [false, "Included", "Included"],
                },
                {
                  label: "Discharge & Consult Notes",
                  values: [false, "Included", "Included"],
                },
                {
                  label: "Procedure Notes",
                  values: [false, false, "Included"],
                },
                {
                  label: "Specialty Templates",
                  values: ["Basic", "20+ Types", "Unlimited"],
                },
                {
                  label: "Custom Template Builder",
                  values: [false, false, "Yes"],
                },
              ]}
            />

            <TableGroup
              title="Intelligence"
              isOpenDefault={true}
              rows={[
                {
                  label: "Amber Handoff Memo",
                  values: [false, "Included", "Unlimited"],
                },
                {
                  label: "Clinical Note Editing",
                  values: ["Included", "Included", "Included"],
                },
                { label: "Advanced Analytics", values: [false, false, "Yes"] },
              ]}
            />

            <TableGroup
              title="Admin & Sync"
              rows={[
                {
                  label: "Direct EMR Integration",
                  values: ["Manual Copy", "Auto-Sync", "Custom API"],
                },
                {
                  label: "Multi-Team Management",
                  values: [false, false, "Yes"],
                },
                {
                  label: "Dedicated Account Mgr",
                  values: [false, false, "Yes"],
                },
              ]}
            />

            <TableGroup
              title="Security"
              rows={[
                { label: "HIPAA Compliance", values: ["Yes", "Yes", "Yes"] },
                { label: "SOC2 Type II", values: [false, false, "Yes"] },
                {
                  label: "Support Level",
                  values: ["Help Center", "Priority", "24/7 VIP"],
                },
              ]}
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container-custom mb-40">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-5xl lg:text-6xl font-bold text-brand-navy mb-8 tracking-[-0.03em] leading-[1]"
              >
                Frequently Asked
                <br />
                Questions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-brand-muted font-medium max-w-sm"
              >
                Everything you need to know about PrecisionNote.
              </motion.p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="container-custom mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#FFC738] rounded-[32px] p-10 lg:p-20 text-center relative overflow-hidden group border border-amber-200"
          >
            {/* Geometric Background pattern */}
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative z-10">
              <motion.h2 className="text-5xl lg:text-7xl font-bold text-brand-navy mb-6 tracking-tight leading-none">
                Still have questions?
              </motion.h2>
              <motion.p className="text-lg lg:text-xl text-brand-navy/60 font-bold mb-12 max-w-2xl mx-auto">
                Our clinical team is ready to help you find the right plan for
                your practice.
              </motion.p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="px-10 py-5 bg-brand-navy text-white rounded-full font-bold text-lg flex items-center gap-2 hover:opacity-90 transition-all shadow-xl">
                  Chat with our clinical team <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-10 py-5 bg-white text-brand-navy rounded-full font-bold text-lg flex items-center gap-2 hover:bg-white/90 transition-all border border-black/5">
                  Book a demo
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
  subtext,
  billingCycle,
  onBillingToggle,
  saveText,
  buttonVariant = "primary",
}: any) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className={`p-10 rounded-[24px] border flex flex-col relative transition-all duration-300 ${isPopular ? "bg-white border-brand-blue shadow-[0_32px_80px_-16px_rgba(87,104,253,0.1)] z-10" : "bg-white border-brand-border hover:shadow-lg"}`}
  >
    {isPopular && (
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FFC738] text-brand-navy text-[10px] font-bold uppercase tracking-[0.1em] px-5 py-2 rounded-full shadow-md">
        Most Popular
      </div>
    )}

    <div className="mb-10">
      <h3 className="text-xl font-bold text-brand-navy mb-2 tracking-tight">
        {name}
      </h3>
      <p className="text-brand-muted text-[14px] font-bold leading-relaxed">
        {description}
      </p>
    </div>

    <div className="mb-10">
      <div className="flex items-baseline gap-1">
        <span className="text-6xl font-bold text-brand-navy tracking-tighter">
          {price === "0" || price === "Custom" ? price : `$${price}`}
        </span>
        {period && (
          <span className="text-brand-muted font-bold text-xs opacity-50 ml-1">
            {period}
          </span>
        )}
      </div>

      {onBillingToggle && (
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <div className="p-1 bg-slate-50 rounded-xl inline-flex items-center border border-slate-100">
            <button
              onClick={() => onBillingToggle()}
              className={`px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all ${billingCycle === "yearly" ? "bg-white text-brand-navy shadow-sm" : "text-brand-muted hover:text-brand-navy"}`}
            >
              Yearly
            </button>
            <button
              onClick={() => onBillingToggle()}
              className={`px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all ${billingCycle === "monthly" ? "bg-white text-brand-navy shadow-sm" : "text-brand-muted hover:text-brand-navy"}`}
            >
              Monthly
            </button>
          </div>
          {saveText && (
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100 uppercase tracking-wider">
              {saveText}
            </span>
          )}
        </div>
      )}
    </div>

    <button
      className={`w-full py-4 rounded-full font-bold text-base mb-6 transition-all ${buttonVariant === "primary" ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/15 hover:opacity-95" : "bg-slate-50 text-brand-navy border border-brand-border hover:bg-slate-100"}`}
    >
      {buttonText}
    </button>

    {subtext && (
      <div className="flex items-center justify-center gap-2 mb-8 text-brand-muted/60">
        <Zap className="w-3.5 h-3.5 text-brand-blue/60 fill-brand-blue/10" />
        <p className="text-[11px] font-bold uppercase tracking-[0.1em]">
          {subtext}
        </p>
      </div>
    )}

    <div className="space-y-4 flex-1 pt-8 border-t border-slate-100">
      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-navy/30 mb-1">
        Everything in the resident, plus:
      </p>
      {features.map((feature: string, i: number) => (
        <div key={i} className="flex gap-3 items-start group">
          <div className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-brand-blue/5 shrink-0 transition-colors">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue" />
          </div>
          <span className="text-[14px] font-bold text-brand-navy/70 leading-snug">
            {feature}
          </span>
        </div>
      ))}
    </div>

    <button className="mt-8 text-brand-navy/60 font-bold text-xs flex items-center gap-2 group transition-all hover:text-brand-blue hover:translate-x-1">
      See more <ArrowRight className="w-3.5 h-3.5" />
    </button>
  </motion.div>
);

const TableGroup = ({ title, rows, isOpenDefault = false }: any) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="border-b border-brand-border last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center group"
      >
        <span className="text-xl font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
          {title}
        </span>
        <div
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <ChevronDown className="w-6 h-6 text-brand-muted" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 space-y-1">
              {rows.map((row: any, i: number) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4 px-4 hover:bg-slate-50 rounded-xl transition-colors items-center"
                >
                  <div className="text-[15px] font-bold text-brand-navy/60">
                    {row.label}
                  </div>
                  {row.values.map((val: any, j: number) => (
                    <div
                      key={j}
                      className="text-center font-bold text-[15px] text-brand-navy"
                    >
                      {typeof val === "boolean" ? (
                        val ? (
                          <CheckCircle2 className="w-5 h-5 text-brand-blue mx-auto" />
                        ) : (
                          <span className="text-brand-muted/20">—</span>
                        )
                      ) : (
                        val
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQItem = ({ question, answer, index }: any) => {
  const [isOpen, setIsOpen] = useState(index === 1);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`bg-white border rounded-[16px] overflow-hidden transition-all duration-300 ${isOpen ? "border-brand-blue/20 shadow-lg" : "border-brand-border hover:border-brand-blue/10 shadow-sm"}`}
    >
      <button
        className="w-full p-6 text-left flex justify-between items-center gap-4 group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[17px] font-bold text-brand-navy leading-tight tracking-tight">
          {question}
        </span>
        <div
          className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-brand-blue border-brand-blue text-white rotate-180" : "bg-white border-brand-border text-brand-muted"}`}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6 pt-0 text-[15px] text-brand-muted/70 leading-relaxed font-bold">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PricingPage;
