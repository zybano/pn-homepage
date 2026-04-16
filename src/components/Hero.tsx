import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, Star } from 'lucide-react';

const doctor1 = 'https://www.figma.com/api/mcp/asset/9b257f81-4f7a-47d6-93f0-912f2f2198ef';
const doctor2 = 'https://www.figma.com/api/mcp/asset/ce4d44de-b88d-4bd4-9768-337f573e1e2d';
const doctor3 = 'https://www.figma.com/api/mcp/asset/3f6a4673-6dc4-4f87-90f0-cfd902f14e4f';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f3f4f7] pb-14 pt-10 md:pt-16">
      <div className="absolute right-[-360px] top-[-180px] h-[920px] w-[920px] rounded-full bg-[#d9def1]" />
      <div className="container-custom relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-[649px]"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#cfd4ff] bg-[#edefff] px-3 py-1">
              <Shield className="h-3 w-3 text-[#5768fd]" />
              <span className="font-mono text-[11px] text-[#5768fd]">100% HIPAA Compliant · Ambient AI Scribe</span>
            </div>
            <h1 className="mb-5 text-[42px] font-semibold leading-[1.12] tracking-[-1.5px] text-[#040523] md:text-[64px]">
              Just talk.
              <br />
              <span className="text-[#5768fd]">Precision Notes</span> writes
              <br />
              your SOAP notes.
            </h1>
            <p className="mb-8 text-[18px] leading-[1.5] text-[#64748b] md:max-w-[620px]">
              PrecisionNote captures every clinical detail in real-time, delivering structured, HIPAA-compliant SOAP notes directly to your EHR.
            </p>

            <div className="mb-7 flex flex-col gap-3 sm:flex-row">
              <motion.button whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} className="flex items-center justify-center gap-2 rounded-lg bg-[#5768fd] px-6 py-3 text-[16px] font-medium text-white shadow-[0_4px_14px_rgba(87,104,253,0.35)]">
                Try Free for 14 Days <ArrowRight className="h-4 w-4" />
              </motion.button>
              <motion.button whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} className="flex items-center justify-center gap-2 rounded-lg border border-[#cfd4ff] bg-[#eef2fa] px-6 py-3 text-[16px] font-medium text-[#040523]">
                <Play className="h-4 w-4" /> Watch 1-Min Demo
              </motion.button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[doctor1, doctor2, doctor3].map((src, idx) => (
                  <img key={idx} src={src} alt="Doctor avatar" className="h-8 w-8 rounded-full border border-white object-cover" />
                ))}
              </div>
              <div>
                <div className="mb-1 flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>
                <p className="text-[12px] text-[#64748b]">
                  Loved by <span className="font-semibold text-[#040523]">500+ Nigerian physicians</span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.1 }} className="relative">
            <div className="rounded-2xl border-[8px] border-[#22253a] bg-white shadow-[0_24px_48px_rgba(4,5,35,0.25)]">
              <div className="flex items-center justify-between border-b border-[#edf1f5] px-5 py-3">
                <div className="text-[11px] text-[#45556c]">PrecisionNote</div>
                <div className="h-3 w-3 rounded-full bg-[#5768fd]" />
              </div>
              <div className="flex h-[250px]">
                <div className="w-[44px] border-r border-[#eef1f5] bg-[#f7f9fc] p-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className={`mb-3 h-5 w-5 rounded ${i === 0 ? 'bg-[#d8ddf9]' : 'bg-[#e3e8ef]'}`} />
                  ))}
                </div>
                <div className="flex-1 p-4">
                  <div className="mb-4 grid grid-cols-3 gap-2">
                    {['Sessions Today', 'Notes Pending', 'Hrs Saved'].map((label, i) => (
                      <div key={label} className="rounded-lg border border-[#edf1f5] bg-[#fbfcff] p-2">
                        <div className="text-[10px] text-[#64748b]">{label}</div>
                        <div className="text-[20px] font-semibold text-[#f59e0b]">{['8', '3', '2.4'][i]}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mb-4 rounded-lg border border-[#edf1f5] p-3">
                    <div className="mb-3 flex items-center justify-between text-[12px] text-[#040523]">
                      <span>Active Scribe</span>
                      <span className="text-[10px] text-[#64748b]">04:23 elapsed</span>
                    </div>
                    <div className="mb-3 flex h-8 items-center gap-[3px]">
                      {Array.from({ length: 18 }).map((_, i) => (
                        <motion.span
                          key={i}
                          className="w-[3px] rounded-full bg-[#5768fd]"
                          animate={{ height: [6, 12 + ((i * 5) % 18), 6] }}
                          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.05 }}
                        />
                      ))}
                    </div>
                    <div className="text-[11px] text-[#90a1b9]">Patient: Adaeze O. · 04:23 elapsed</div>
                  </div>
                  {['Subjective', 'Objective', 'Assessment'].map((label) => (
                    <div key={label} className="mb-2 flex items-center gap-3">
                      <span className="w-[70px] text-[10px] font-medium text-[#5768fd]">{label}</span>
                      <div className="h-[6px] w-full rounded-full bg-[#e2e8f0]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-[-16px] top-[34px] flex w-[251px] items-center gap-3 rounded-xl bg-white p-3 shadow-[0_8px_20px_rgba(4,5,35,0.12)]"
            >
              <div className="rounded-full bg-[#e6fff4] p-2">
                <Shield className="h-4 w-4 text-[#10b981]" />
              </div>
              <div>
                <p className="text-[14px] font-semibold text-[#040523]">HIPAA Compliant</p>
                <p className="font-mono text-[10px] text-[#90a1b9]">AES-256 End-to-end encrypted</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
