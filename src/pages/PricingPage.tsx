import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, CirclePlus, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LandingFooter from '../components/LandingFooter';
import LandingNav from '../components/LandingNav';
import { AppImages } from '../lib/data';

type Currency = 'USD' | 'NGN';
type BillingCycle = 'monthly' | 'yearly';

interface PriceInfo {
  monthly: number;
  yearly: number;
  saveAmount: number;
  symbol: string;
}

const pricingData: Record<Currency, Record<string, PriceInfo>> = {
  USD: {
    Basic: { monthly: 0, yearly: 0, saveAmount: 0, symbol: '$' },
    Professional: { monthly: 20, yearly: 190, saveAmount: 50, symbol: '$' },
    Enterprise: { monthly: 0, yearly: 0, saveAmount: 0, symbol: '$' }
  },
  NGN: {
    Basic: { monthly: 0, yearly: 0, saveAmount: 0, symbol: '₦' },
    Professional: { monthly: 30000, yearly: 285000, saveAmount: 75000, symbol: '₦' },
    Enterprise: { monthly: 0, yearly: 0, saveAmount: 0, symbol: '₦' }
  }
};

const PricingPage = () => {
  const [openFaq, setOpenFaq] = useState(1);
  const [openRows, setOpenRows] = useState('documentation');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState<'individuals' | 'teams'>('individuals');

  const faqs = [
    'Does this work with my specific EMR?',
    "Is my patient's data safe?",
    "How do the 'AI Voice Credits' work?",
    'What is an "Enable Amber"?',
    'How accurate is the medical transcription?',
    'Can I edit the notes after they are generated?',
    'Does it understand different accents?',
  ];

  const comparisonRows = [
    ['SOAP & Progress Notes', 'Included', 'Included', 'Included'],
    ['H&P / Physical Exam', '---', 'Included', 'Included'],
    ['Discharge & Consult Notes', '---', 'Included', 'Included'],
    ['Procedure Notes', '---', '---', 'Included'],
    ['Specialty Templates', 'Basic', '25+ Specs', 'Unlimited'],
    ['Custom Template Editor', '---', '---', 'Yes'],
  ];

  const intelligenceRows = [
    ['Amber Handoff Memos', '---', 'Unlimited', 'Unlimited'],
    ['Clinical Note Editing', 'Included', 'Included', 'Included'],
    ['Advanced Analytics', '---', '---', 'Yes'],
  ];

  const adminRows = [
    ['EMR / HMS Integration', 'Manual Copy', 'Auto-Sync', 'Custom API'],
    ['Multi-Team Management', '---', '---', 'Yes'],
    ['Dedicated Account Mgr', '---', '---', 'Yes'],
  ];

  const securityRows = [
    ['HIPAA Compliance', 'Yes', 'Yes', 'Yes'],
    ['SOC2 Type II', '---', '---', 'Yes'],
    ['Support Level', 'Help Center', 'Priority', '24/7 VIP'],
  ];



  return (
    <div className="min-h-screen bg-[#fafbff] font-geist text-[#040523]">
      <LandingNav />
      <main className="overflow-hidden">
        <section className="relative px-6 pb-[80px] pt-[80px]">
          <motion.img 
            src={AppImages.PricingPageVector}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="pointer-events-none absolute left-[-100px] top-[40px] h-[600px] w-auto opacity-[0.08]" 
          />
          <motion.img 
            src={AppImages.PricingPageVector}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="pointer-events-none absolute right-[-100px] top-[120px] h-[600px] w-auto rotate-180 opacity-[0.08]" 
          />
          
          <div className="mx-auto max-w-[1320px]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10 text-center"
            >
              <h1 className="mx-auto mb-4 max-w-[930px] text-[60px] font-bold leading-[69px] tracking-[-1.2px]">
                PrecisionNote for every stage of your practice
              </h1>
              <p className="mx-auto max-w-[797px] text-[18px] leading-[27px] text-[#62748e]">
                From your first residency to heading a department, we provide the clinical intelligence you need to focus on what matters most:
                your patients.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-12 flex items-center justify-center gap-10"
            >
              <div className="relative flex h-[46px] items-center gap-1 rounded-xl bg-[#5768fd] p-[4px] shadow-sm">
                <div className="relative flex w-full gap-1">
                  <motion.div
                    className="absolute h-full rounded-lg bg-white shadow-sm"
                    initial={false}
                    animate={{
                      x: activeSegment === 'individuals' ? 0 : 120,
                      width: activeSegment === 'individuals' ? 120 : 190,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                  <button 
                    onClick={() => setActiveSegment('individuals')}
                    className={`relative z-10 flex h-[38px] w-[120px] items-center justify-center text-[16px] font-semibold transition-colors duration-200 ${activeSegment === 'individuals' ? 'text-[#040523]' : 'text-white/80 hover:text-white'}`}
                  >
                    Individuals
                  </button>
                  <button 
                    onClick={() => setActiveSegment('teams')}
                    className={`relative z-10 flex h-[38px] w-[190px] items-center justify-center text-[16px] font-semibold transition-colors duration-200 ${activeSegment === 'teams' ? 'text-[#040523]' : 'text-white/80 hover:text-white'}`}
                  >
                    Teams and Enterprise
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                  className="flex h-[40px] items-center gap-3 rounded-xl border border-[rgba(87,104,253,0.3)] bg-white px-4 font-medium text-[#040523] shadow-sm transition-all hover:bg-slate-50"
                >
                  <span className="text-[16px]">{currency} ({currency === 'USD' ? '$' : '₦'})</span>
                  <motion.div
                    animate={{ rotate: isCurrencyOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4 text-[#5768fd]" />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {isCurrencyOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 top-[48px] z-50 w-[140px] overflow-hidden rounded-xl border border-[#d3d8ff] bg-white p-1 shadow-xl"
                    >
                      {(['USD', 'NGN'] as Currency[]).map((cur) => (
                        <button 
                          key={cur}
                          onClick={() => { setCurrency(cur); setIsCurrencyOpen(false); }}
                          className={`flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-[15px] transition-colors ${currency === cur ? 'bg-[#f3f4ff] font-bold text-[#5768fd]' : 'text-[#64748b] hover:bg-slate-50'}`}
                        >
                          {cur} ({cur === 'USD' ? '$' : '₦'})
                          {currency === cur && <Check className="h-4 w-4" />}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <PlanCard
                title="Basic"
                description="Start for free. No credit card required."
                priceMonthly={pricingData[currency].Basic.monthly}
                priceYearly={pricingData[currency].Basic.yearly}
                currencySymbol={pricingData[currency].Basic.symbol}
                cta="Get PrecisionNote free"
                ctaSecondary
                credits="2K credits per month"
                intro="Free for everyone"
                features={['10 Scribe Sessions / Month', 'Standard SOAP Templates', 'HIPAA Secure', 'E-mail Secure']}
                index={0}
              />
              <PlanCard
                title="Professional"
                description="Unlimited scribe sessions for your practice."
                priceMonthly={pricingData[currency].Professional.monthly}
                priceYearly={pricingData[currency].Professional.yearly}
                currencySymbol={pricingData[currency].Professional.symbol}
                saveAmount={pricingData[currency].Professional.saveAmount}
                cta="Try Free for 14 Days"
                credits="8K credits per month"
                intro="Everything in the resident, plus:"
                badge="Most Popular"
                showBilling
                features={['All Specialty Templates', 'Unlimited Exports to EMR', 'Unlimited Amber Handoff Memos', 'Priority AI Processing']}
                featured
                index={1}
              />
              <PlanCard
                title="Enterprise"
                description="Custom AI integration for your whole department."
                price="Custom"
                cta="Contact Sales"
                credits="20K credits per month"
                intro="Everything in the attending, plus:"
                showBilling
                features={['Bulk Seat Management', 'Custom Specialty Workflows', 'Dedicated Account Manager', 'On-Site Training']}
                index={2}
              />
            </div>
          </div>
        </section>

        <section className="bg-[#e6e9ff] px-6 py-[100px]">
          <div className="mx-auto max-w-[1320px]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 grid grid-cols-[1fr_219px_219px_219px] items-center gap-[93px] border-b border-[#a4a9d7] px-[10px] py-10"
            >
              <h2 className="text-[40px] font-bold leading-[69px] tracking-[-1.2px]">Choose Your Plan</h2>
              {['The Resident', 'The Attending', 'The Chief of Medicine'].map((plan, i) => (
                <div key={plan} className="text-center">
                  <p className="mb-4 text-[22px] font-semibold tracking-[-0.5px]">{plan}</p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full rounded-xl px-4 py-3 text-[16px] font-bold shadow-lg shadow-black/5 ${i === 0 ? 'bg-white text-[#040523] border border-slate-200' : 'bg-[#5768fd] text-white'}`}
                  >
                    {i === 0 ? 'Start for free' : i === 1 ? 'Try Free for 14 Days' : 'Contact Sales'}
                  </motion.button>
                </div>
              ))}
            </motion.div>

            <div className="space-y-4">
              <FeatureGroup title="Scribe" open={openRows === 'scribe'} onToggle={() => setOpenRows(openRows === 'scribe' ? '' : 'scribe')}>
                <div className="grid h-[80px] grid-cols-[324px_219px_219px_219px] items-center gap-[107px] border-b border-[#a4a9d7]/30 p-5 px-10">
                  <p className="text-[17px] font-medium text-[#040523]">Core Scribe Coverage</p>
                  <p className="text-center text-[17px] text-[#62748e]">Included</p>
                  <p className="text-center text-[17px] text-[#62748e]">Included</p>
                  <p className="text-center text-[17px] text-[#62748e]">Included</p>
                </div>
              </FeatureGroup>
              <FeatureGroup title="Documentation" open={openRows === 'documentation'} onToggle={() => setOpenRows(openRows === 'documentation' ? '' : 'documentation')}>
                {comparisonRows.map((row, idx) => (
                  <motion.div 
                    key={row[0]} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="grid h-[80px] grid-cols-[324px_219px_219px_219px] items-center gap-[107px] border-b border-[#a4a9d7]/30 p-5 px-10"
                  >
                    <p className="text-[17px] font-medium text-[#040523]">{row[0]}</p>
                    {row.slice(1).map((cell, i) => (
                      <p key={cell + row[0] + i} className="text-center text-[17px] text-[#62748e]">
                        {cell}
                      </p>
                    ))}
                  </motion.div>
                ))}
              </FeatureGroup>
              <FeatureGroup title="Intelligence" open={openRows === 'intelligence'} onToggle={() => setOpenRows(openRows === 'intelligence' ? '' : 'intelligence')}>
                {intelligenceRows.map((row, idx) => (
                  <motion.div
                    key={row[0]}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="grid h-[80px] grid-cols-[324px_219px_219px_219px] items-center gap-[107px] border-b border-[#a4a9d7]/30 p-5 px-10"
                  >
                    <p className="text-[17px] font-medium text-[#040523]">{row[0]}</p>
                    {row.slice(1).map((cell, i) => (
                      <p key={cell + row[0] + i} className="text-center text-[17px] text-[#62748e]">
                        {cell}
                      </p>
                    ))}
                  </motion.div>
                ))}
              </FeatureGroup>
              <FeatureGroup title="Admin & Sync" open={openRows === 'admin'} onToggle={() => setOpenRows(openRows === 'admin' ? '' : 'admin')}>
                {adminRows.map((row, idx) => (
                  <motion.div
                    key={row[0]}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="grid h-[80px] grid-cols-[324px_219px_219px_219px] items-center gap-[107px] border-b border-[#a4a9d7]/30 p-5 px-10"
                  >
                    <p className="text-[17px] font-medium text-[#040523]">{row[0]}</p>
                    {row.slice(1).map((cell, i) => (
                      <p key={cell + row[0] + i} className="text-center text-[17px] text-[#62748e]">
                        {cell}
                      </p>
                    ))}
                  </motion.div>
                ))}
              </FeatureGroup>
              <FeatureGroup title="Security" open={openRows === 'security'} onToggle={() => setOpenRows(openRows === 'security' ? '' : 'security')}>
                {securityRows.map((row, idx) => (
                  <motion.div
                    key={row[0]}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="grid h-[80px] grid-cols-[324px_219px_219px_219px] items-center gap-[107px] border-b border-[#a4a9d7]/30 p-5 px-10"
                  >
                    <p className="text-[17px] font-medium text-[#040523]">{row[0]}</p>
                    {row.slice(1).map((cell, i) => (
                      <p key={cell + row[0] + i} className="text-center text-[17px] text-[#62748e]">
                        {cell}
                      </p>
                    ))}
                  </motion.div>
                ))}
              </FeatureGroup>
            </div>
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-[1320px] gap-20 px-6 py-[120px]">
          <div className="w-[500px]">
            <h3 className="mb-4 text-[44px] font-bold leading-[58px] tracking-[-1.5px]">Frequently Asked Questions</h3>
            <p className="text-[19px] leading-[30px] text-[#62748e]">Everything you need to know about PrecisionNote's logic and pricing.</p>
          </div>
          <div className="flex-1 space-y-4">
            {faqs.map((q, i) => (
              <div key={q} className="overflow-hidden rounded-2xl border border-[#d3d8ff] bg-white shadow-sm transition-shadow hover:shadow-md">
                <button 
                  className="flex w-full items-center justify-between px-6 py-5 text-left" 
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <span className="text-[20px] font-semibold leading-[27px]">{q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3f4ff]"
                  >
                    <CirclePlus className={`h-6 w-6 transition-colors ${openFaq === i ? 'text-[#5768fd]' : 'text-[#62748e]'}`} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2">
                        <p className="text-[17px] leading-relaxed text-[#62748e]">
                          PrecisionNote ensures enterprise-grade security for your medical documentation. Our clinical intelligence adapts to your specialty, accent, and hospital-specific templates effortlessly.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mb-[120px] w-full max-w-[1320px] px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[391px] overflow-hidden rounded-[40px] bg-[#ffca40] px-8 py-20 text-center shadow-2xl flex flex-col items-center justify-center"
          >
            <div
              className="absolute inset-0 opacity-15 pointer-events-none bg-repeat bg-center"
              style={{
                backgroundImage: `url(${AppImages.YellowCTABg})`,
                backgroundSize: "contain",
                backgroundPosition: '40% 50%',
              }}
            />

            <div className="relative z-10">
              <h3 className="mb-4 text-[60px] font-bold leading-[60px] tracking-[-2.5px] text-[#040523]">
                Still have questions?
              </h3>
              <p className="mx-auto mb-10 max-w-[700px] text-[20px] leading-[32px] text-[#040523]/70 font-medium">
                Our clinical team is ready to help you find the right plan for your practice
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex min-h-[64px] items-center gap-3 rounded-[20px] bg-gradient-to-r from-[#040523] to-[#3b4fe8] px-10 py-5 text-[18px] font-bold text-white shadow-[0px_20px_40px_-12px_rgba(4,5,35,0.4)]"
                >
                  Chat with our clinical team
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "#fffef0" }}
                  whileTap={{ scale: 0.98 }}
                  className="min-h-[64px] rounded-[20px] border border-[rgba(4,5,35,0.1)] bg-[#fef3d1] px-10 py-5 text-[18px] font-bold text-[#040523] shadow-lg shadow-black/5"
                >
                  Book a Demo
                </motion.button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
};

type PlanCardProps = {
  title: string;
  description: string;
  price?: string;
  priceMonthly?: number;
  priceYearly?: number;
  currencySymbol?: string;
  saveAmount?: number;
  cta: string;
  credits: string;
  intro: string;
  features: string[];
  ctaSecondary?: boolean;
  showBilling?: boolean;
  featured?: boolean;
  badge?: string;
  index: number;
};

const PlanCard = ({ 
  title, 
  description, 
  price, 
  priceMonthly,
  priceYearly,
  currencySymbol, 
  saveAmount, 
  cta, 
  credits, 
  intro, 
  features, 
  ctaSecondary, 
  showBilling, 
  featured, 
  badge, 
  index 
}: PlanCardProps) => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('yearly');

  const displayPrice = price || (billingCycle === 'monthly' ? priceMonthly?.toLocaleString() : priceYearly?.toLocaleString());
  const priceSub = price ? undefined : (billingCycle === 'monthly' ? "Per user/month" : "Per user/year");

  const toggleBilling = () => {
    setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly');
  };

  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`relative flex flex-col rounded-[24px] border bg-white p-7 shadow-sm transition-all duration-300 ${featured ? 'border-[#5768fd] ring-1 ring-[#5768fd]/5 shadow-xl shadow-blue-500/10' : 'border-[#d3d8ff] hover:border-[#bfc7ff]'}`}
    >
      {badge && (
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#ffd176] px-5 py-2 text-[15px] font-bold shadow-md ring-2 ring-white"
        >
          {badge}
        </motion.div>
      )}
      
      <div className="mb-8">
        <h4 className="mb-2 text-[26px] font-bold tracking-[-1px]">{title}</h4>
        <p className="text-[17px] leading-relaxed text-[#64748b]">{description}</p>
        
        <div className="relative mt-6 h-[70px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={`${displayPrice}-${currencySymbol}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="flex items-baseline gap-1"
            >
              <p className="text-[52px] font-bold leading-none tracking-[-2px]">
                {displayPrice === 'Custom' ? '' : currencySymbol}{displayPrice}
              </p>
              {priceSub && displayPrice !== 'Custom' && (
                <p className="text-[15px] font-medium text-[#62748e]">{priceSub}</p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {showBilling && (
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <span className="text-[15px] font-semibold text-[#62748e]">Billed</span>
            <div className="relative flex h-[38px] w-[160px] items-center rounded-full bg-[#f0f2ff] p-1 shadow-inner overflow-hidden">
              <motion.div
                className="absolute h-[30px] rounded-full bg-white shadow-md shadow-blue-500/10"
                initial={false}
                animate={{ x: billingCycle === 'yearly' ? 0 : 75, width: billingCycle === 'yearly' ? 80 : 80 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
              <button 
                onClick={() => billingCycle !== 'yearly' && toggleBilling()}
                className={`relative z-10 w-[80px] text-[13px] font-bold transition-colors ${billingCycle === 'yearly' ? 'text-[#040523]' : 'text-[#62748e]'}`}
              >
                Yearly
              </button>
              <button 
                onClick={() => billingCycle !== 'monthly' && toggleBilling()}
                className={`relative z-10 w-[80px] text-[13px] font-bold transition-colors ${billingCycle === 'monthly' ? 'text-[#040523]' : 'text-[#62748e]'}`}
              >
                Monthly
              </button>
            </div>
            <AnimatePresence>
              {billingCycle === 'yearly' && saveAmount && saveAmount > 0 && (
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="rounded-lg border border-[#007a55] bg-[#edfdf5] px-3 py-1 text-[13px] font-bold text-[#007a55]"
                >
                  Save {currencySymbol}{saveAmount}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
      
      <div className="mt-auto">
        <motion.button 
          whileHover={{ scale: 1.02, backgroundColor: ctaSecondary ? '#e2e8f0' : '#4a5af7' }}
          whileTap={{ scale: 0.98 }}
          className={`mb-6 h-[56px] w-full rounded-2xl text-[17px] font-bold transition-shadow shadow-[0px_8px_20px_-4px_rgba(87,104,253,0.3)] hover:shadow-2xl hover:shadow-blue-500/20 ${ctaSecondary ? 'bg-slate-100 text-[#040523]' : 'bg-[#5768fd] text-white'}`}
        >
          {cta}
        </motion.button>
        
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#f0f2ff]">
            <Sparkles className="h-4 w-4 text-[#5768fd]" />
          </div>
          <p className="text-[15px] font-bold text-[#10154c]">{credits}</p>
        </div>
        
        <div className="border-t border-slate-100 pt-7">
          <p className="mb-5 text-[18px] font-bold text-[#040523]">{intro}</p>
          <div className="space-y-4">
            {features.map((feature, i) => (
              <motion.div 
                 key={feature} 
                 initial={{ opacity: 0, x: -5 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: index * 0.1 + (i * 0.05) + 0.5 }}
                 className="flex items-start gap-4"
              >
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f3f4ff]">
                  <Check className="h-3.5 w-3.5 text-[#5768fd] stroke-[3px]" />
                </div>
                <span className="text-[16px] leading-tight text-[#475569] font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.button 
          whileHover={{ x: 5 }}
          className="mt-8 flex items-center gap-2 text-[17px] font-bold text-[#040523]/80 hover:text-[#5768fd]"
        >
          See all features
          <ChevronDown className="-rotate-90 h-4 w-4" />
        </motion.button>
      </div>
    </motion.article>
  );
};

const FeatureGroup = ({ title, open, onToggle, children }: { title: string; open: boolean; onToggle: () => void; children?: React.ReactNode }) => (
  <motion.div 
    layout
    className="overflow-hidden bg-[#e6e9ff]/50 border border-slate-200"
  >
    <motion.button 
      layout
      onClick={onToggle} 
      className="flex w-full items-center justify-between px-8 py-7 transition-colors hover:bg-[#dce0ff]/80"
    >
      <span className="text-[22px] font-bold tracking-tight text-[#040523]">{title}</span>
      <motion.div
        animate={{ rotate: open ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown className="h-7 w-7 text-[#5768fd]" />
      </motion.div>
    </motion.button>
    <AnimatePresence>
      {open && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="border-t border-[#a4a9d7]/30 bg-transparent"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export default PricingPage;


