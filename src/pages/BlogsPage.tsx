import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight, Search } from 'lucide-react';
import LandingNav from '../components/LandingNav';
import LandingFooter from '../components/LandingFooter';

// Local images
import featuredImg from '../assets/img/blog/featured.png';
import article1Img from '../assets/img/blog/article-1.png';
import article2Img from '../assets/img/blog/article-2.png';
import article3Img from '../assets/img/blog/article-3.png';
import article4Img from '../assets/img/blog/article-4.png';
import article5Img from '../assets/img/blog/article-5.png';
import article6Img from '../assets/img/blog/article-6.png';
import article7Img from '../assets/img/blog/article-7.png';
import article8Img from '../assets/img/blog/article-8.png';
import article9Img from '../assets/img/blog/article-9.png';

const BlogPage = () => {
  const latestArticles = [
    {
      id: 1,
      tag: "CLINICAL WORKFLOW",
      title: "5 documentation patterns that slow you down (and how to fix them)",
      readTime: "8 min read",
      date: "April 8, 2026",
      image: article1Img
    },
    {
      id: 2,
      tag: "BURNOUT PREVENTION",
      title: "The hidden cost of 'just one more chart'",
      readTime: "6 min read",
      date: "April 8, 2026",
      image: article2Img
    },
    {
      id: 3,
      tag: "AI IN MEDICINE",
      title: "Why ambient AI will replace traditional dictation",
      readTime: "8 min read",
      date: "April 8, 2026",
      image: article3Img
    },
    {
      id: 4,
      tag: "CLINICAL WORKFLOW",
      title: "The 2-minute SOAP: how cardiology residents are cutting note time in half",
      readTime: "12 min read",
      date: "April 8, 2026",
      image: article4Img
    },
    {
      id: 5,
      tag: "EHR INTEGRATION",
      title: "Epic vs. Cerner: which integrates faster with AI scribes?",
      readTime: "8 min read",
      date: "April 8, 2026",
      image: article5Img
    },
    {
      id: 6,
      tag: "PHYSICIAN WELLNESS",
      title: "What happens when you give doctors their evenings back",
      readTime: "10 min read",
      date: "April 8, 2026",
      image: article6Img
    },
    {
      id: 7,
      tag: "CASE STUDY",
      title: "County General's 90-day journey from pilot to system-wide adoption",
      readTime: "15 min read",
      date: "April 8, 2026",
      image: article7Img
    },
    {
      id: 8,
      tag: "CLINICAL WORKFLOW",
      title: "The Amber Memo: why physicians love leaving notes for themselves",
      readTime: "8 min read",
      date: "April 8, 2026",
      image: article8Img
    },
    {
      id: 9,
      tag: "CLINICAL WORKFLOW",
      title: "HIPAA compliance in AI medical scribes: what you need to know",
      readTime: "6 min read",
      date: "April 8, 2026",
      image: article9Img
    }
  ];

  return (
    <div className="min-h-screen bg-white text-brand-navy font-sans overflow-x-hidden">
      <LandingNav />

      {/* Hero Section */}
      <section className="pt-48 pb-20 container-custom text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1] max-w-5xl mx-auto"
        >
          Insights on clinical documentation & burnout.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-brand-navy/60 max-w-3xl mx-auto font-medium"
        >
          Practical strategies to reclaim your time and rediscover the joy of practicing medicine.
        </motion.p>
      </section>

      {/* Featured Article */}
      <section className="container-custom mb-40 px-4 md:px-12 lg:px-28">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative rounded-[48px] overflow-hidden aspect-[16/7] min-h-[500px] group cursor-pointer shadow-2xl"
        >
          <img 
            src={featuredImg}
            alt="Featured article"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/40 to-transparent flex flex-col justify-center p-12 md:p-24">
            <div className="max-w-3xl">
              <span className="inline-block bg-brand-blue text-white text-sm font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-[0.1em]">
                FEATURED
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 leading-[1.1] tracking-tight">
                How Dr. Adeabo reclaimed 15 hours a week using the Amber Handoff
              </h2>
              <div className="flex items-center gap-8 text-white/80 text-lg mb-12 font-medium">
                <div className="flex items-center gap-3">
                  <Clock size={20} />
                  <span>8 min read</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={20} />
                  <span>April 8, 2026</span>
                </div>
              </div>
              <button className="bg-white text-brand-navy px-12 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-brand-navy hover:text-white transition-all shadow-xl group/btn">
                Read Story <ArrowRight size={24} className="transition-transform group-hover/btn:translate-x-2" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Latest Articles */}
      <section className="container-custom mb-40 px-4 md:px-12 lg:px-28">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-brand-navy">Latest Articles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {latestArticles.map((article, index) => (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index % 3), duration: 0.6 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-[32px] mb-8 shadow-lg bg-slate-100">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-brand-blue text-xs font-bold uppercase tracking-[0.2em] mb-6 block">
                  {article.tag}
                </span>
                <h3 className="text-2xl md:text-[28px] font-bold leading-[1.25] mb-12 group-hover:text-brand-blue transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between text-base text-brand-navy/40 mt-auto pt-8 border-t border-brand-navy/5 font-medium">
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="opacity-50" />
                    <span>{article.readTime}</span>
                  </div>
                  <span>{article.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="container-custom mb-48 px-4 md:px-12 lg:px-28">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-navy rounded-[64px] p-16 md:p-32 relative overflow-hidden text-center shadow-2xl"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.2] mb-16 max-w-5xl mx-auto italic">
              "Precision Note has reduced my clinical documentation time by 70%. I finally feel like a doctor again, not a data entry clerk."
            </h2>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-brand-blue mb-8 flex items-center justify-center text-white text-3xl font-bold shadow-2xl shadow-brand-blue/40 border-4 border-white/10">
                BI
              </div>
              <h4 className="text-white text-2xl font-bold mb-2">Dr. Bukola Idowu</h4>
              <p className="text-white/40 text-xl font-medium tracking-wide uppercase">Chief of Clinical Operations</p>
            </div>
          </div>
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/20 blur-[150px] pointer-events-none"></div>
        </motion.div>
      </section>

      {/* Newsletter Section */}
      <section className="container-custom mb-32 px-4 md:px-12 lg:px-28">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#F7C600] rounded-[64px] p-16 md:p-32 relative overflow-hidden text-center shadow-2xl"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight text-brand-navy leading-none">
              Want these insights in your inbox?
            </h2>
            <p className="text-xl md:text-2xl text-brand-navy/70 mb-16 max-w-2xl mx-auto font-medium">
              Join 5,000+ physicians getting weekly tips on clinical efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="your.email@hospital.com"
                className="flex-1 px-10 py-7 rounded-3xl border-none focus:ring-4 focus:ring-brand-navy/10 transition-all bg-white text-xl shadow-inner placeholder:text-brand-navy/30"
              />
              <button className="bg-brand-navy text-white px-16 py-7 rounded-3xl font-bold text-xl hover:bg-brand-blue transition-all shadow-2xl active:scale-95 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-navy/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px]"></div>
        </motion.div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default BlogPage;
