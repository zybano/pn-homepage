import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, ChevronUp, CircleMinus, CirclePlus, Sparkles } from 'lucide-react';
import LandingFooter from '../components/LandingFooter';
import LandingNav from '../components/LandingNav';

const PricingPage = () => {
  const [openFaq, setOpenFaq] = useState(1);
  const [openRows, setOpenRows] = useState('documentation');

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

  return (
    <div className="min-h-screen bg-[#fafbff] font-geist text-[#040523]">
      <LandingNav />
      <main className="overflow-hidden">
        <section className="relative px-6 pb-[80px] pt-[80px]">
          <div className="pointer-events-none absolute left-[-220px] top-[90px] h-[360px] w-[560px] rounded-full border border-[#d3d8ff]" />
          <div className="pointer-events-none absolute right-[-220px] top-[110px] h-[360px] w-[560px] rounded-full border border-[#d3d8ff]" />
          <div className="mx-auto max-w-[1320px]">
            <div className="mb-10 text-center">
              <h1 className="mx-auto mb-4 max-w-[930px] text-[60px] font-bold leading-[69px] tracking-[-1.2px]">
                PrecisionNote for every stage of your practice
              </h1>
              <p className="mx-auto max-w-[797px] text-[18px] leading-[27px] text-[#62748e]">
                From your first residency to heading a department, we provide the clinical intelligence you need to focus on what matters most:
                your patients.
              </p>
            </div>

            <div className="mb-5 flex items-center justify-center gap-10">
              <div className="flex h-[42px] items-center gap-3 rounded-lg bg-[#5768fd] p-[10px]">
                <button className="h-[26px] rounded px-[10px] text-[16px] font-medium text-[#040523] bg-white">Individuals</button>
                <button className="h-[26px] rounded px-[10px] text-[16px] font-medium text-white">Teams and Enterprise</button>
              </div>
              <button className="flex h-[36px] items-center gap-2 rounded-lg border border-[rgba(87,104,253,0.6)] bg-white px-3 shadow-[0px_1px_2px_0px_rgba(0,0,0,0)]">
                <span className="text-[16px]">USD ($)</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-[19px] lg:grid-cols-3">
              <PlanCard
                title="Basic"
                description="Start for free. No credit card required."
                price="$0"
                cta="Get PrecisionNote free"
                ctaSecondary
                credits="2K credits per month"
                intro="Free for everyone"
                features={['10 Scribe Sessions / Month', 'Standard SOAP Templates', 'HIPAA Secure', 'E-mail Secure']}
              />
              <PlanCard
                title="Professional"
                description="Unlimited scribe sessions for your practice."
                price="$20"
                priceSub="Per user/month"
                cta="Try Free for 14 Days"
                credits="8K credits per month"
                intro="Everything in the resident, plus:"
                badge="Most Popular"
                showBilling
                features={['All Specialty Templates', 'Unlimited Exports to EMR', 'Unlimited Amber Handoff Memos', 'Priority AI Processing']}
                featured
              />
              <PlanCard
                title="Enterprise"
                description="Custom AI integration for your whole department."
                price="Custom"
                cta="Contact Sales"
                credits="20K credits per month"
                intro="Everything in the attending, plus:"
                features={['Bulk Seat Management', 'Custom Specialty Workflows', 'Dedicated Account Manager', 'On-Site Training']}
              />
            </div>
          </div>
        </section>

        <section className="bg-[#e6e9ff] px-6 py-[100px]">
          <div className="mx-auto max-w-[1320px]">
            <div className="mb-6 grid grid-cols-[1fr_219px_219px_219px] items-center gap-[93px] border-b border-[#a4a9d7] px-[10px] py-5">
              <h2 className="text-[40px] font-bold leading-[69px] tracking-[-1.2px]">Choose Your Plan</h2>
              {['The Resident', 'The Attending', 'The Chief of Medicine'].map((plan, i) => (
                <div key={plan} className="text-center">
                  <p className="mb-4 text-[24px] tracking-[-1px]">{plan}</p>
                  <button className={`w-full rounded-lg px-8 py-3 text-[16px] font-semibold shadow-[0px_4px_14px_0px_rgba(87,104,253,0.35)] ${i === 0 ? 'bg-[#f1f5f9] text-[#040523]' : 'bg-[#5768fd] text-white'}`}>
                    {i === 0 ? 'Start for free' : i === 1 ? 'Try Free for 14 Days' : 'Contact Sales'}
                  </button>
                </div>
              ))}
            </div>

            <FeatureGroup title="Scribe" open={openRows === 'scribe'} onToggle={() => setOpenRows(openRows === 'scribe' ? '' : 'scribe')} />
            <FeatureGroup title="Documentation" open={openRows === 'documentation'} onToggle={() => setOpenRows(openRows === 'documentation' ? '' : 'documentation')}>
              {comparisonRows.map((row) => (
                <div key={row[0]} className="grid h-[90px] grid-cols-[324px_219px_219px_219px] items-center gap-[107px] border-b border-[#a4a9d7] p-5">
                  <p className="text-[18px]">{row[0]}</p>
                  {row.slice(1).map((cell) => (
                    <p key={cell + row[0]} className="text-center text-[18px]">
                      {cell}
                    </p>
                  ))}
                </div>
              ))}
            </FeatureGroup>
            <FeatureGroup title="Intelligence" open={openRows === 'intelligence'} onToggle={() => setOpenRows(openRows === 'intelligence' ? '' : 'intelligence')} />
            <FeatureGroup title="Admin & Sync" open={openRows === 'admin'} onToggle={() => setOpenRows(openRows === 'admin' ? '' : 'admin')} />
            <FeatureGroup title="Security" open={openRows === 'security'} onToggle={() => setOpenRows(openRows === 'security' ? '' : 'security')} />
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-[1320px] gap-[22px] px-6 py-[120px]">
          <div className="w-[645px]">
            <h3 className="mb-4 text-[40px] font-bold leading-[69px] tracking-[-1.2px]">Frequently Asked Questions</h3>
            <p className="text-[18px] leading-[27px] text-[#62748e]">Everything you need to know about PrecisionNote.</p>
          </div>
          <div className="w-[648px] space-y-3">
            {faqs.map((q, i) => (
              <div key={q} className="overflow-hidden rounded-2xl border border-[#d3d8ff] bg-white">
                <button className="flex w-full items-center justify-between px-4 py-4 text-left" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  <span className="text-[20px] leading-[27px]">{q}</span>
                  {openFaq === i ? <CircleMinus className="h-6 w-6 text-[#5768fd]" /> : <CirclePlus className="h-6 w-6 text-[#5768fd]" />}
                </button>
                {openFaq === i && (
                  <p className="px-4 pb-4 text-[16px] leading-6 text-[#62748e]">
                    PrecisionNote is built for medical teams with secure, HIPAA-compliant workflows and flexible integrations.
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mb-[120px] w-full max-w-[1320px] px-6">
          <div className="relative overflow-hidden rounded-2xl bg-[#ffc738] px-6 py-14 text-center">
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
            <div className="relative">
              <h3 className="mb-4 text-[48px] font-semibold leading-[48px] tracking-[-1.5px]">Still have questions?</h3>
              <p className="mb-6 text-[18px] leading-[27px] text-[rgba(16,21,76,0.7)]">
                Our clinical team is ready to help you find the right plan for your practice
              </p>
              <div className="flex items-center justify-center gap-3">
                <button className="flex min-h-[40px] items-center gap-2 rounded-lg bg-[#040523] px-6 py-[10px] text-[16px] font-medium text-white">
                  Chat with our clinical team
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="min-h-[40px] rounded-lg bg-white px-6 py-[10px] text-[16px] font-medium text-[#040523]">Book a demo</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
};

type PlanCardProps = {
  title: string;
  description: string;
  price: string;
  priceSub?: string;
  cta: string;
  credits: string;
  intro: string;
  features: string[];
  ctaSecondary?: boolean;
  showBilling?: boolean;
  featured?: boolean;
  badge?: string;
};

const PlanCard = ({ title, description, price, priceSub, cta, credits, intro, features, ctaSecondary, showBilling, featured, badge }: PlanCardProps) => (
  <article className={`relative rounded-2xl border bg-white px-5 py-[25px] ${featured ? 'border-[#5768fd] shadow-[0px_4px_14px_0px_rgba(87,104,253,0.35)]' : 'border-[#d3d8ff]'}`}>
    {badge && <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#ffd176] px-3 py-[5px] text-[16px]">{badge}</div>}
    <div className="mb-10">
      <h4 className="text-[24px] tracking-[-1px]">{title}</h4>
      <p className="text-[16px] text-[#64748b]">{description}</p>
      <div className="mt-4 flex items-end gap-2">
        <p className="text-[48px] font-semibold leading-[69px] tracking-[-1.2px]">{price}</p>
        {priceSub && <p className="mb-2 text-[14px] text-[#64748b]">{priceSub}</p>}
      </div>
      {showBilling && (
        <div className="mt-2 flex items-center gap-3">
          <span className="text-[16px] text-[#64748b]">Billed</span>
          <div className="flex h-7 items-center gap-1 rounded-full border border-[#afb6fb] bg-[rgba(194,201,254,0.33)] p-[2px]">
            <span className="rounded-[14px] border border-[#afb6fb] bg-white px-3 text-[16px]">Yearly</span>
            <span className="px-3 text-[14px] text-[#64748b]">Monthly</span>
          </div>
          <span className="rounded-lg border border-[#007a55] bg-[#edfdf5] px-4 py-[2px] text-[16px] text-[#007a55]">Save $50</span>
        </div>
      )}
    </div>
    <button className={`mb-5 w-full rounded-lg px-8 py-3 text-[16px] font-semibold shadow-[0px_4px_14px_0px_rgba(87,104,253,0.35)] ${ctaSecondary ? 'bg-[#f1f5f9] text-[#040523]' : 'bg-[#5768fd] text-white'}`}>
      {cta}
    </button>
    <div className="mb-10 flex items-center gap-2">
      <Sparkles className="h-4 w-4 text-[#5768fd]" />
      <p className="text-[14px]">{credits}</p>
    </div>
    <div className="border-t border-[#e2e8f0] px-[10px] py-5">
      <p className="mb-4 text-[18px] font-medium">{intro}</p>
      <div className="space-y-3">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#e6e9ff]">
              <Check className="h-4 w-4 text-[#5768fd]" />
            </span>
            <span className="text-[14px]">{feature}</span>
          </div>
        ))}
      </div>
    </div>
    <button className="mt-4 text-[18px] font-medium">See more</button>
  </article>
);

const FeatureGroup = ({ title, open, onToggle, children }: { title: string; open: boolean; onToggle: () => void; children?: React.ReactNode }) => (
  <div className="mb-6 rounded-lg bg-[#e6e9ff]">
    <button onClick={onToggle} className="flex w-full items-center justify-between px-5 py-[30px]">
      <span className="text-[24px] font-semibold">{title}</span>
      {open ? <ChevronUp className="h-8 w-8" /> : <ChevronDown className="h-8 w-8" />}
    </button>
    {open && <div>{children}</div>}
  </div>
);

export default PricingPage;
