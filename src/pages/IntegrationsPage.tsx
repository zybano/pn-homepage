import { motion } from 'framer-motion';
import { Zap, Shield, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { IconBrandChrome } from '@tabler/icons-react';
import LandingNav from '../components/LandingNav';
import LandingFooter from '../components/LandingFooter';

const IntegrationsPage = () => {
  const syncMethods = [
    {
      title: 'PrecisionNote Web Extension',
      description: 'For one-click "Paste" into any browser-based EMR. Works with Chrome, Edge, and Firefox.',
      icon: <IconBrandChrome className="w-8 h-8 text-[#5768fd]" />,
      iconBg: 'bg-[#eeefff]',
      features: [
        'Install browser extension',
        'One-click copy to EMR',
        'Works with all web-based systems',
        'No IT approval needed'
      ]
    },
    {
      title: 'Deep EMR Integration',
      description: 'For automated, background syncing directly to the patient chart. Requires IT coordination.',
      icon: <Zap className="w-8 h-8 text-white" />,
      iconBg: 'bg-[#5768fd]',
      recommended: true,
      features: [
        'Automatic chart updates',
        'Real-time bidirectional sync',
        'HL7 and FHIR compliant',
        'Dedicated implementation support'
      ]
    }
  ];

  const securityFeatures = [
    {
      title: 'HIPAA Verified',
      description: 'Full compliance with patient data protection standards',
      icon: <Shield className="w-10 h-10 text-[#5768fd]" />
    },
    {
      title: 'SOC 2 Type II Certified',
      description: 'Independently audited security controls',
      icon: <Lock className="w-10 h-10 text-[#5768fd]" />
    },
    {
      title: 'End-to-End Encrypted',
      description: 'AES-256 encryption at rest and in transit',
      icon: <Zap className="w-10 h-10 text-[#5768fd]" />
    }
  ];

  return (
    <div className="min-h-screen bg-white font-geist">
      <LandingNav />

      {/* Hero Section */}
      <section className="pt-32 pb-32 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[54px] md:text-[84px] font-bold text-[#040523] tracking-[-3px] leading-[1.05] mb-8"
            >
              Plugs into the EMR<br className="hidden md:block" /> you already use.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[20px] md:text-[22px] text-[#64748b] max-w-2xl mx-auto leading-relaxed tracking-tight"
            >
              Seamless integration with your existing workflow.<br className="hidden md:block" />
              No data migration. No vendor lock-in.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Sync Methods Section */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="container-custom">
          <div className="text-center mb-24">
            <h2 className="text-[48px] font-bold text-[#040523] tracking-tight mb-4">Two ways to sync</h2>
            <p className="text-[20px] text-[#64748b]">Choose the integration method that fits your workflow.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto mb-20 px-4">
            {syncMethods.map((method, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative bg-white rounded-[40px] p-12 shadow-[0_20px_50px_rgba(87,104,253,0.05)] border border-slate-100 flex flex-col group hover:shadow-[0_40px_80px_rgba(87,104,253,0.12)] transition-all duration-500"
              >
                {method.recommended && (
                  <div className="absolute top-8 right-8 px-5 py-2 bg-[#5768fd] text-white text-[11px] font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-blue-500/20">
                    Recommended
                  </div>
                )}
                
                <div className={`w-20 h-20 ${method.iconBg} rounded-[24px] flex items-center justify-center mb-12 transform group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                  {method.icon}
                </div>

                <h3 className="text-[32px] font-bold text-[#040523] mb-5 tracking-tight">{method.title}</h3>
                <p className="text-[17px] text-[#64748b] leading-relaxed mb-12">
                  {method.description}
                </p>

                <div className="mt-auto space-y-5">
                  {method.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#5768fd]/10 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-[#5768fd]" />
                      </div>
                      <span className="text-[16px] text-[#314158] font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise-grade security Section */}
      <section className="py-40 relative">
        {/* Geometric Background Simulation */}
        <div className="absolute inset-0 z-0 bg-[#f1f5ff] pointer-events-none">
           <div className="absolute top-20 left-[10%] w-[100px] h-[100px] bg-[#d9e4ff] rounded-2xl rotate-12 opacity-40" />
           <div className="absolute bottom-20 right-[15%] w-[150px] h-[150px] bg-[#d9e4ff] rounded-[40px] -rotate-6 opacity-30" />
           <div className="absolute top-[40%] right-[10%] w-[60px] h-[60px] bg-white rounded-xl rotate-45 opacity-50" />
           <div className="absolute top-[20%] left-[25%] w-[40px] h-[40px] bg-[#c7d8ff] rounded-lg -rotate-12 opacity-40" />
           <div className="absolute bottom-[30%] left-[15%] w-[80px] h-[80px] bg-white rounded-3xl rotate-12 opacity-60" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-[56px] font-bold text-[#040523] tracking-[-2px] mb-6">Enterprise-grade security</h2>
            <p className="text-[20px] text-[#64748b]">Built to meet the highest standards of healthcare data protection.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
            {securityFeatures.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-[40px] p-12 text-center flex flex-col items-center border border-slate-100 shadow-[0_30px_60px_rgba(0,0,0,0.03)] hover:transform hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="w-24 h-24 bg-[#f1f5ff] rounded-[32px] flex items-center justify-center mb-10 shadow-sm border border-slate-50">
                  {feature.icon}
                </div>
                <h3 className="text-[22px] font-bold text-[#040523] mb-5 tracking-tight">{feature.title}</h3>
                <p className="text-[15px] text-[#64748b] leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Need help Section */}
      <section className="py-32">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[56px] bg-[#ffca40] p-16 md:p-32 text-center shadow-2xl shadow-yellow-200"
          >
            {/* FIGMA BACKGROUND PATTERN */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none bg-repeat bg-center"
              style={{ 
                backgroundImage: `url('https://www.figma.com/api/mcp/asset/e429e8ca-56dd-4d73-8006-a20dc1575e01')`,
                backgroundSize: '280px'
              }}
            />

            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-[42px] md:text-[68px] font-bold text-[#040523] tracking-[-3px] leading-[1.05] mb-10">
                Need help with <span className="relative">integration?</span>
              </h2>
              <p className="text-[20px] md:text-[24px] text-[#040523] opacity-80 font-medium mb-16 leading-relaxed">
                Our Integration specialists will work with your IT team to ensure a seamless setup.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <button className="h-[72px] px-12 bg-[#040523] text-white rounded-[24px] font-bold text-[18px] hover:bg-black transition-all shadow-2xl shadow-black/20 flex items-center gap-3 active:scale-95 duration-200">
                  Contact Integration Team
                  <ArrowRight className="w-6 h-6" />
                </button>
                <button className="h-[72px] px-12 bg-white text-[#040523] border border-[#040523]/10 rounded-[24px] font-bold text-[18px] hover:bg-slate-50 transition-all shadow-sm active:scale-95 duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default IntegrationsPage;
