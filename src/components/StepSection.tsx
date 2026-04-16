import { motion } from 'framer-motion';
import { Mic, FileText, Send, Check } from 'lucide-react';

const StepSection = () => {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-[#e6e9ff] py-24">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50" 
           style={{ 
             backgroundImage: `linear-gradient(#cfd4ff 1px, transparent 1px), linear-gradient(90deg, #cfd4ff 1px, transparent 1px)`,
             backgroundSize: '33px 33px' 
           }} 
      />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[42px] md:text-[56px] font-semibold text-[#040523] tracking-[-1.5px] leading-tight"
          >
            From consult to signed note in 3 steps
          </motion.h2>
          <p className="mt-3 text-[18px] text-[#64748b]">PrecisionNote handles every part of the documentation workflow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Step 1: Start Scribing */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[rgba(87,104,253,0.3)] rounded-2xl p-5 flex flex-col h-full border border-[rgba(87,104,253,0.12)]"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="w-10 h-10 bg-[rgba(255,255,255,0.5)] rounded-xl flex items-center justify-center">
                <Mic className="w-5 h-5 text-[#5768fd]" />
              </div>
              <div className="bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-[#5768fd]" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#5768fd]">Ambient Listening</span>
              </div>
            </div>
            
            <h3 className="text-[32px] font-semibold text-[#040523] mb-3">1. Start Scribing</h3>
            <p className="text-[#040523]/70 text-[16px] leading-relaxed mb-6">
              Place your phone or laptop on the desk. PrecisionNote identifies the speaker, filters background noise, and recognises medical terminology instantly.
            </p>

            {/* Illustration Box 1 */}
            <div className="mt-auto bg-white rounded-xl p-4 border border-slate-100">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#5768fd] animate-pulse" />
                <span className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-widest">Recording · 03:47</span>
              </div>
              <div className="flex items-end gap-[3px] h-12 mb-4 overflow-hidden">
                {[4, 2, 5, 3, 6, 2, 4, 8, 5, 3, 9, 4, 2, 7, 5, 3, 6, 8, 4, 2, 5].map((h, i) => (
                  <motion.div 
                    key={i} 
                    className="flex-1 bg-[#5768fd] rounded-full" 
                    animate={{ 
                      height: [
                        `${h * 7}%`, 
                        `${h * 12}%`, 
                        `${h * 9}%`, 
                        `${h * 11}%`, 
                        `${h * 10}%`
                      ] 
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5 + Math.random() * 0.5,
                      delay: i * 0.05,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
              <p className="font-mono text-[11px] text-slate-400 leading-tight">
                Detected: "Chief complaint", "hypertension", "Amlodipine"
              </p>
            </div>
          </motion.div>

          {/* Step 2: Get Structured Notes */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[rgba(255,205,106,0.7)] rounded-2xl p-5 flex flex-col h-full border border-[rgba(255,205,106,0.12)]"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="w-10 h-10 bg-[#fdeccb] rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#D97706]" />
              </div>
              <div className="bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-[#D97706]" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#D97706]">SOAP Templates</span>
              </div>
            </div>
            
            <h3 className="text-[32px] font-semibold text-[#040523] mb-3">2. Get Structured Notes</h3>
            <p className="text-[#040523]/70 text-[16px] leading-relaxed mb-6">
              Your session is automatically converted into a clean SOAP note using your preferred specialty template — Subjective, Objective, Assessment, and Plan — fully formatted.
            </p>

            {/* Illustration Box 2 */}
            <div className="mt-auto bg-white rounded-xl p-4 border border-slate-100 flex flex-col gap-4">
              {['Subjective', 'Objective', 'Assessment', 'Plan'].map((label, i) => (
                <div key={label} className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</span>
                  <div className="flex flex-col gap-1.5">
                    <div className="h-1.5 bg-slate-100 rounded-full w-full" />
                    {i !== 2 && i !== 3 && <div className="h-1.5 bg-slate-100 rounded-full w-[60%]" />}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Step 3: One-Click Sync */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[rgba(13,174,121,0.7)] rounded-2xl p-5 flex flex-col h-full border border-[rgba(13,174,121,0.12)]"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="w-10 h-10 bg-[#daffed] rounded-xl flex items-center justify-center">
                <Send className="w-5 h-5 text-[#10B981]" />
              </div>
              <div className="bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-[#040523]" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#040523]">EMR Integrations</span>
              </div>
            </div>
            
            <h3 className="text-[32px] font-semibold text-[#040523] mb-3">3. One-Click Sync</h3>
            <p className="text-[#040523]/70 text-[16px] leading-relaxed mb-6">
              Review the note in seconds, then send it directly to Epic, Cerner, or Athena. No copy-paste. No re-typing. Just done.
            </p>

            {/* Illustration Box 3 */}
            <div className="mt-auto bg-white rounded-xl p-4 border border-slate-100">
              <span className="font-mono text-[10px] font-bold text-slate-300 uppercase tracking-widest block mb-4">Export to EMR</span>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {['Epic', 'Cerner', 'Athena'].map((emr) => (
                  <div key={emr} className="bg-emerald-50 text-emerald-700 font-mono text-[10px] font-bold py-2 text-center rounded-lg border border-emerald-100">
                    {emr}
                  </div>
                ))}
              </div>
              <div className="bg-[#10B981] text-white py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 mb-4 transition-transform hover:scale-[1.02]">
                <Send className="w-3.5 h-3.5" />
                <span className="text-[12px] font-bold">Sync to Epic</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-600 font-mono text-[10px] font-medium justify-center">
                <Check className="w-3 h-3" />
                <span>Note synced in 0.4s · Read confirmed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StepSection;



