import { motion } from 'framer-motion';
import { Zap, Shield, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { IconBrandChrome } from '@tabler/icons-react';
import LandingNav from '../components/LandingNav';
import LandingFooter from '../components/LandingFooter';
import { AppImages } from '../lib/data';

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
      icon: <Shield className="w-8 h-8 text-[#5768fd]" />
    },
    {
      title: 'SOC 2 Type II Certified',
      description: 'Independently audited security controls',
      icon: <Lock className="w-8 h-8 text-[#5768fd]" />
    },
    {
      title: 'End-to-End Encrypted',
      description: 'AES-256 encryption at rest and in transit',
      icon: <Zap className="w-8 h-8 text-[#5768fd]" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFF] font-geist selection:bg-[#5768fd] selection:text-white">
      <LandingNav />

      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-white">
        <div className="container-custom">
          <div className="max-w-[1024px] mx-auto text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[56px] md:text-[80px] font-bold text-[#040523] tracking-[-2px] leading-[1.1] mb-8"
            >
              Plugs into the EMR <br className="hidden md:block" />
              you already use.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[18px] md:text-[22px] text-[#64748b] max-w-[800px] mx-auto leading-[1.6] px-4"
            >
              Seamless integration with your existing workflow.<br className="hidden md:block" />
              No data migration. No vendor lock-in.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Sync Methods Section */}
      <section className="py-32 bg-[#F8FAFF]">
        <div className="container-custom">
          <div className="text-center mb-24">
            <h2 className="text-[48px] font-bold text-[#040523] tracking-tight mb-4">Two ways to sync</h2>
            <p className="text-[18px] text-[#64748b] max-w-[600px] mx-auto">Choose the integration method that fits your workflow.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-[1104px] mx-auto px-6">
            {syncMethods.map((method, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative bg-white rounded-[32px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E2E8F0] flex flex-col min-h-[377px]"
              >
                {method.recommended && (
                  <div className="absolute top-0 right-0 bg-[#5768fd] text-white px-5 py-2 font-bold text-[11px] uppercase tracking-widest rounded-tr-[32px] rounded-bl-[20px]">
                    Recommended
                  </div>
                )}
                
                <div className={`w-16 h-16 ${method.iconBg} rounded-[20px] flex items-center justify-center mb-10`}>
                  {method.icon}
                </div>

                <h3 className="text-[28px] font-bold text-[#040523] mb-4 tracking-tight leading-tight">
                   {method.title}
                </h3>
                <p className="text-[16px] text-[#64748b] leading-relaxed mb-10">
                   {method.description}
                </p>

                <div className="mt-auto space-y-4">
                  {method.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#eeefff] flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5768fd]" />
                      </div>
                      <span className="text-[15px] font-semibold text-[#314158]">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Security Section */}
      <section className="py-40 bg-[#F1F5FF] relative overflow-hidden">
        {/* Decorative Blocks Background (Simulating the Illustration frame) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-[320px] h-[320px] bg-[#D9E4FF] opacity-30 rounded-[50px] rotate-12" />
          <div className="absolute bottom-[20%] right-[10%] w-[240px] h-[240px] bg-[#D9E4FF] opacity-40 rounded-[60px] -rotate-6" />
          <div className="absolute top-[40%] right-[20%] w-[120px] h-[120px] bg-white opacity-40 rounded-[30px] rotate-45" />
        </div>

        <div className="container-custom relative z-10 px-6">
          <div className="text-center mb-24">
            <h2 className="text-[48px] md:text-[56px] font-bold text-[#040523] tracking-tight mb-4">Enterprise-grade security</h2>
            <p className="text-[18px] text-[#64748b]">Built to meet the highest standards of healthcare data protection.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-[1104px] mx-auto">
            {securityFeatures.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-[40px] p-10 text-center flex flex-col items-center border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.03)]"
              >
                <div className="w-20 h-20 bg-[#F1F5FF] rounded-[24px] flex items-center justify-center mb-8">
                  {feature.icon}
                </div>
                <h3 className="text-[20px] font-bold text-[#040523] mb-4">{feature.title}</h3>
                <p className="text-[14px] text-[#64748b] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Help CTA */}
      <section className="py-24">
        <div className="container-custom px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] bg-[#ffca40] px-8 py-20 md:p-24 text-center overflow-hidden"
          >
            {/* Background Texture Asset */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none bg-repeat bg-center"
              style={{ 
                backgroundImage: `url(${AppImages.YellowCTABg})`,
                backgroundSize: '240px'
              }}
            />

            <div className="relative z-10 max-w-[800px] mx-auto">
              <h2 className="text-[40px] md:text-[64px] font-bold text-[#040523] tracking-tight leading-tight mb-8">
                Need help with integration?
              </h2>
              <p className="text-[18px] md:text-[22px] text-[#040523]/80 font-medium mb-12">
                Our Integration specialists will work with your IT team to ensure a seamless setup.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="h-16 px-10 bg-[#040523] text-white rounded-2xl font-bold text-[16px] hover:bg-black transition-all shadow-xl shadow-black/10 flex items-center gap-2 group">
                  Contact Integration Team
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="h-16 px-10 bg-transparent text-[#040523] border border-[#040523]/20 rounded-2xl font-bold text-[16px] hover:bg-black/5 transition-all">
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
