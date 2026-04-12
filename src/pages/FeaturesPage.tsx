import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  FileText, 
  Mic, 
  CheckCircle2, 
  ArrowRight, 
  Heart, 
  Stethoscope, 
  Activity, 
  Users,
  Search,
  Zap
} from 'lucide-react';
import LandingNav from '../components/LandingNav';
import LandingFooter from '../components/LandingFooter';

const FeaturesPage = () => {
  const [activeSpecialty, setActiveSpecialty] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const specialties = [
    { name: 'All', icon: <Users className="w-4 h-4" /> },
    { name: 'General Practice', icon: <Stethoscope className="w-4 h-4" /> },
    { name: 'Cardiology', icon: <Heart className="w-4 h-4" /> },
    { name: 'Surgery', icon: <Activity className="w-4 h-4" /> },
    { name: 'Pediatrics', icon: <Users className="w-4 h-4" /> },
  ];

  const features = [
    {
      id: 'llm',
      title: 'Specialty-Aware LLMs',
      icon: <Brain className="w-7 h-7" />,
      description: 'Trained on 1M+ clinical hours across 40+ specialties.',
      details: [
        'Nuanced clinical terminology',
        'Specialty-specific note structures',
        'Differential diagnosis assistant',
        'Automatic ICD-10 suggestions'
      ],
      color: 'bg-brand-blue/5 text-brand-blue',
      iconBg: 'bg-brand-blue/10',
    },
    {
      id: 'templates',
      title: 'Pre-built Templates',
      icon: <FileText className="w-7 h-7" />,
      description: '200+ specialty-specific templates ready to use.',
      details: [
        'Comprehensive H&P forms',
        'Modular SOAP components',
        'Interactive review of systems',
        'Smart discharge summaries'
      ],
      color: 'bg-indigo-50 text-indigo-600',
      iconBg: 'bg-indigo-100',
    },
    {
      id: 'dictation',
      title: 'Hands-Free Scribe',
      icon: <Mic className="w-7 h-7" />,
      description: 'The ambient intelligence layer for the modern clinical workflow.',
      details: [
        'Medical-grade voice recognition',
        'Ambient conversation capture',
        'Speaker identification',
        'Automatic noise cancellation'
      ],
      color: 'bg-purple-50 text-purple-600',
      iconBg: 'bg-purple-100',
    }
  ];

  const stats = [
    { label: 'Time Saved', value: '2.5h', description: 'Avg. daily charting time reduction' },
    { label: 'Accuracy', value: '99%', description: 'Medical terminology precision' },
    { label: 'Specialties', value: '40+', description: 'Specialty-aware clinical models' },
    { label: 'EMRs', value: '60+', description: 'Direct system integrations' },
  ];

  const filteredFeatures = features.filter(f => {
    const matchesSearch = f.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         f.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = activeSpecialty === 'All' || 
                            (activeSpecialty === 'Surgery' && f.id === 'llm') ||
                            (activeSpecialty === 'Cardiology' && f.id === 'templates') || // Mocking some filtering
                            (activeSpecialty === 'General Practice') ||
                            (activeSpecialty === 'Pediatrics');
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-white">
      <LandingNav />

      {/* Hero Section */}
      <section className="pt-40 pb-24 relative overflow-hidden bg-slate-50">
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-brand-blue/5 to-transparent pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 rounded-full text-brand-blue text-xs font-black uppercase tracking-widest mb-8 border border-brand-blue/20"
            >
              <Zap className="w-3 h-3 fill-brand-blue" /> Intelligent Clinical Workspace
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-[90px] font-black text-brand-navy mb-8 tracking-tighter leading-[0.9] lg:px-10"
            >
              Built for your specialty.<br />
              <span className="text-brand-blue drop-shadow-sm">Not just another template.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-brand-muted max-w-3xl mx-auto font-medium leading-relaxed mb-12"
            >
              Save 2+ hours on charting daily. PrecisionNote listens, understands, and writes your SOAP notes with clinical precision.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <div className="relative w-full max-w-md group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-muted group-focus-within:text-brand-blue transition-colors" />
                <input 
                  type="text"
                  placeholder="Search specialty or template..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 bg-white border border-brand-border rounded-2xl shadow-sm focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue transition-all font-bold text-brand-navy outline-none"
                />
              </div>
              <button className="px-10 py-5 bg-brand-navy text-white rounded-2xl font-black text-lg hover:bg-brand-navy/90 transition-all shadow-xl shadow-brand-navy/20">
                Request Specialty
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-brand-border/30 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-[12px] font-black uppercase tracking-[0.2em] text-brand-blue mb-2">{stat.label}</div>
                <div className="text-5xl font-black text-brand-navy mb-3 tracking-tighter">{stat.value}</div>
                <div className="text-sm font-bold text-brand-muted max-w-[150px] mx-auto leading-tight">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Explorer */}
      <section className="py-32 container-custom overflow-hidden" id="explore">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-6 tracking-tight">Specialty-Aware Modules</h2>
          <p className="text-lg text-brand-muted font-bold">Select your field to see tailored clinical intelligence.</p>
        </div>

        <div className="bg-slate-50/50 rounded-[48px] p-8 lg:p-20 shadow-sm border border-brand-border/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="flex flex-wrap justify-center gap-3 mb-16 relative z-10">
            {specialties.map((spec) => (
              <button
                key={spec.name}
                onClick={() => setActiveSpecialty(spec.name)}
                className={`flex items-center gap-3 px-8 py-4 rounded-3xl font-black text-sm transition-all duration-500 transform ${activeSpecialty === spec.name ? 'bg-brand-blue text-white shadow-2xl shadow-brand-blue/30 scale-105' : 'bg-white text-brand-navy/60 border border-brand-border hover:border-brand-blue/40'}`}
              >
                {spec.icon}
                {spec.name}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeSpecialty}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="grid lg:grid-cols-3 gap-8 relative z-10"
            >
              {filteredFeatures.map((feature, i) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[40px] border border-brand-border shadow-sm hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-500 flex flex-col h-full group"
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.iconBg} flex items-center justify-center ${feature.color.split(' ')[1]} mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-black text-brand-navy mb-4 tracking-tight group-hover:text-brand-blue transition-colors">{feature.title}</h3>
                <p className="text-brand-muted font-bold text-[15px] leading-relaxed mb-10">{feature.description}</p>
                
                <div className="space-y-4 flex-1">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm font-black text-brand-navy/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                      {detail}
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-slate-50">
                  <button className="flex items-center gap-2 text-brand-blue font-black text-sm group/btn">
                    Explore Module <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* EMR Integrations */}
      <section className="py-32 bg-brand-navy text-white relative overflow-hidden" id="integrations">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 blur-[120px] rounded-full" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-brand-blue text-xs font-black uppercase tracking-widest mb-8 border border-white/10">
                Direct Integration
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
                Deep EMR integration.<br />
                <span className="text-brand-blue">No copy-paste needed.</span>
              </h2>
              <p className="text-xl text-slate-400 font-bold mb-12 leading-relaxed">
                We integrate directly with Epic, Cerner, Athena, and 60+ other EMRs. Your notes flow directly into the patient record precisely where they belong.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {[
                  { name: 'FHIR Ready', desc: 'Secure HL7/FHIR standards' },
                  { name: 'Real-time', desc: 'Instant sync availability' },
                  { name: 'Secure', desc: 'End-to-end encryption' },
                  { name: 'Custom', desc: 'Tailored mappings' }
                ].map((item) => (
                  <div key={item.name}>
                    <div className="text-brand-blue font-black mb-1">{item.name}</div>
                    <div className="text-sm text-slate-500 font-bold">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
               <div className="aspect-[4/3] bg-white/5 rounded-[48px] border border-white/10 backdrop-blur-sm p-12 flex flex-col justify-center gap-10">
                  <div className="flex justify-between items-center opacity-30">
                    <div className="w-32 h-6 bg-white/20 rounded-full" />
                    <div className="w-12 h-12 bg-white/20 rounded-full" />
                  </div>
                  <div className="space-y-6">
                    <div className="w-full h-4 bg-brand-blue/40 rounded-full" />
                    <div className="w-full h-32 bg-white/10 rounded-3xl" />
                    <div className="grid grid-cols-3 gap-6">
                      <div className="h-20 bg-white/10 rounded-2xl" />
                      <div className="h-20 bg-white/10 rounded-2xl" />
                      <div className="h-20 bg-white/10 rounded-2xl" />
                    </div>
                  </div>
                  <div className="flex justify-center mt-4">
                    <button className="px-10 py-5 bg-brand-blue text-white rounded-2xl font-black text-sm shadow-xl shadow-brand-blue/30 hover:scale-105 transition-transform">
                      View Integration List
                    </button>
                  </div>
               </div>
               {/* Floating Badges */}
               <div className="absolute -top-6 -right-6 bg-white text-brand-navy p-8 rounded-3xl shadow-2xl font-black text-center">
                  <div className="text-3xl">60+</div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-blue">Systems</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Section */}
      <section className="py-32 container-custom relative overflow-hidden" id="request">
        <div className="bg-gradient-to-br from-brand-blue/5 to-purple-500/5 rounded-[64px] p-20 text-center border border-brand-blue/10 relative">
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-7xl font-black text-brand-navy mb-8 tracking-tighter">
              Don't see your specialty?
            </h2>
            <p className="text-xl md:text-2xl text-brand-muted font-bold mb-12">
              Our clinical engineering team builds custom models for rare sub-specialties. Tell us what you need.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-12 py-6 bg-brand-blue text-white rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-brand-blue/30">
                Contact Sales
              </button>
              <button className="w-full sm:w-auto px-12 py-6 bg-white text-brand-navy border border-brand-border rounded-2xl font-black text-xl hover:bg-slate-50 transition-all">
                View Roadmap
              </button>
            </div>
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default FeaturesPage;
