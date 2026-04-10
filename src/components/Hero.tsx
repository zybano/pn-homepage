import React from 'react';
import { motion } from 'framer-motion';
import { Play, Star, Shield, ArrowRight } from 'lucide-react';

const Waveform = () => {
  return (
    <div className="flex items-center gap-[3px] h-10">
      {[...Array(24)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ height: 4 }}
          animate={{ 
            height: [8, 24, 12, 32, 16, 8],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5, 
            delay: i * 0.05,
            ease: "easeInOut"
          }}
          className="w-[3px] bg-brand-blue rounded-full opacity-60"
        />
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-brand-bg">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* HIPAA Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-brand-border rounded-full mb-6">
              <Shield className="w-4 h-4 text-brand-blue" />
              <span className="text-[13px] font-medium text-brand-muted uppercase tracking-wider">
                100% HIPAA Compliant · Ambient AI Scribe
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
              Just talk. <br />
              <span className="text-brand-blue">PrecisionNote</span> writes your SOAP notes.
            </h1>

            <p className="text-xl text-brand-muted leading-relaxed mb-10 max-w-xl">
              Save 2+ hours on charting daily. PrecisionNote listens in the background and generates structured, clinical-grade notes instantly.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <button className="btn-primary w-full sm:w-auto text-lg px-8 py-4">
                Try Free for 14 Days
              </button>
              <button className="btn-secondary w-full sm:w-auto text-lg px-8 py-4">
                <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center">
                  <Play className="w-4 h-4 fill-brand-blue text-brand-blue ml-0.5" />
                </div>
                Watch 1-Min Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-brand-border">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                      alt="Doctor headshot" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-brand-muted">Loved by 500+ Nigerian physicians</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Right: Mock Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card overflow-hidden border-brand-border/40 shadow-2xl">
              {/* Dashboard Header */}
              <div className="px-6 py-4 border-b border-brand-border flex items-center justify-between bg-white/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="text-xs font-semibold text-brand-muted tracking-widest uppercase">
                  Active Scribe Session
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="flex h-[400px]">
                {/* Sidebar Mock */}
                <div className="w-16 border-r border-brand-border flex flex-col items-center py-6 gap-6 bg-brand-bg/30">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-8 h-8 rounded-lg ${i === 1 ? 'bg-brand-blue/10 text-brand-blue' : 'bg-transparent text-brand-muted'} flex items-center justify-center`}>
                      <div className="w-4 h-4 border-2 border-current rounded-md opacity-50" />
                    </div>
                  ))}
                </div>

                {/* Main Pane */}
                <div className="flex-1 p-8 overflow-hidden bg-white/40">
                  <div className="mb-8 flex items-center justify-between">
                    <div>
                      <h3 className="text-[13px] font-bold text-brand-muted uppercase tracking-wider mb-1">Patient Encounter</h3>
                      <div className="text-xl font-bold">Adaeze Oladipo <span className="text-brand-muted font-normal text-base ml-2">ID: #49283</span></div>
                    </div>
                    <div className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-[11px] font-bold flex items-center gap-1.5 animate-pulse">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                      LIVE RECORDING
                    </div>
                  </div>

                  {/* Waveform Visualization */}
                  <div className="mb-10 p-6 bg-white rounded-2xl border border-brand-border/50 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Shield className="w-20 h-20 text-brand-blue" />
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-brand-muted capitalize">Ambient Listening...</span>
                        <span className="text-xs font-mono text-brand-muted">04:23</span>
                      </div>
                      <Waveform />
                    </div>
                  </div>

                  {/* AI Note Content Generation */}
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-24 h-4 bg-brand-blue/10 rounded-md animate-pulse shrink-0" />
                      <div className="w-full h-4 bg-brand-muted/5 rounded-md animate-pulse" />
                    </div>
                    <div className="flex gap-4">
                      <div className="w-20 h-4 bg-brand-blue/10 rounded-md animate-pulse shrink-0" />
                      <div className="w-3/4 h-4 bg-brand-muted/5 rounded-md animate-pulse" />
                    </div>
                    <div className="flex gap-4">
                      <div className="w-16 h-4 bg-brand-blue/10 rounded-md animate-pulse shrink-0" />
                      <div className="w-5/6 h-4 bg-brand-muted/5 rounded-md animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Security Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 glass-card p-4 flex items-center gap-3 border-brand-border shadow-xl z-20"
            >
              <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-brand-navy">AES-256 Secured</span>
                <span className="text-[10px] text-brand-muted uppercase font-bold tracking-widest">End-to-end encrypted</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
