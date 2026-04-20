import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight, Search } from 'lucide-react';
import LandingNav from '../components/LandingNav';
import LandingFooter from '../components/LandingFooter';

const BlogPage = () => {
  const latestArticles = [
    {
      id: 1,
      tag: "CLINICAL WORKFLOW",
      title: "5 documentation patterns that slow you down (and how to fix them)",
      readTime: "5 min read",
      date: "April 8, 2024",
      image: "https://images.unsplash.com/photo-1576091160550-2173bdb999ef?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      tag: "BURNOUT PREVENTION",
      title: "The hidden cost of 'just one more chart'",
      readTime: "6 min read",
      date: "April 8, 2024",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      tag: "AI IN MEDICINE",
      title: "Why ambient AI will replace traditional dictation",
      readTime: "8 min read",
      date: "April 8, 2024",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      tag: "CLINICAL WORKFLOW",
      title: "The 2-minute SOAP: how cardiology residents are cutting note time in half",
      readTime: "12 min read",
      date: "April 8, 2024",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      tag: "EMR INTEGRATION",
      title: "Epic vs. Cerner: which integrates faster with AI scribes?",
      readTime: "9 min read",
      date: "April 8, 2024",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      tag: "PHYSICIAN WELLNESS",
      title: "What happens when you give doctors their evenings back",
      readTime: "10 min read",
      date: "April 8, 2024",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 7,
      tag: "CASE STUDY",
      title: "County General's 90-day journey from pilot to system-wide adoption",
      readTime: "15 min read",
      date: "April 8, 2024",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 8,
      tag: "CLINICAL WORKFLOW",
      title: "The Amber Memo: why physicians love leaving notes for themselves",
      readTime: "5 min read",
      date: "April 8, 2024",
      image: "https://images.unsplash.com/photo-1559839734-2b71f1e59816?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 9,
      tag: "CLINICAL WORKFLOW",
      title: "HIPAA compliance in AI medical scribes: what you need to know",
      readTime: "8 min read",
      date: "April 8, 2024",
      image: "https://images.unsplash.com/photo-1504813184591-01592fd03cf7?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafbff] text-[#040523] font-sans">
      <LandingNav />

      {/* Hero Section */}
      <section className="pt-32 pb-16 container-custom text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
        >
          Insights on clinical <br />
          documentation & burnout.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-[#4a4b65] max-w-3xl mx-auto leading-relaxed"
        >
          Practical strategies to reclaim your time and rediscover the joy of practicing medicine.
        </motion.p>
      </section>

      {/* Featured Article */}
      <section className="container-custom mb-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative rounded-[32px] overflow-hidden aspect-[21/9] min-h-[500px] group cursor-pointer shadow-premium"
        >
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173bdb999ef?auto=format&fit=crop&q=80&w=1215"
            alt="Featured article"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/40 to-transparent flex flex-col justify-end p-12 md:p-20">
            <div className="max-w-3xl">
              <span className="inline-block bg-brand-blue text-white text-sm font-bold px-4 py-2 rounded-lg mb-6 uppercase tracking-wider">
                FEATURED
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                How Dr. Adeabo reclaimed 15 hours a week using the Amber Handoff
              </h2>
              <div className="flex items-center gap-8 text-white/80 text-base mb-10">
                <div className="flex items-center gap-2.5">
                  <Clock size={20} />
                  <span>8 min read</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Calendar size={20} />
                  <span>April 8, 2024</span>
                </div>
              </div>
              <button className="bg-white text-brand-navy px-10 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-brand-blue hover:text-white transition-all transform hover:translate-x-2 shadow-lg">
                Read Story <ArrowRight size={22} />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Latest Articles */}
      <section className="container-custom mb-32">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Latest Articles</h2>
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="Search articles..."
              className="bg-white border border-brand-border rounded-full px-14 py-4 w-full focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all shadow-sm text-lg"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-muted" size={24} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {latestArticles.map((article, index) => (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index % 3) }}
              className="bg-white rounded-3xl overflow-hidden border border-brand-border hover:shadow-premium transition-all group cursor-pointer flex flex-col h-full"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-10 flex flex-col flex-1">
                <span className="text-brand-blue text-sm font-bold uppercase tracking-wider mb-4 block">
                  {article.tag}
                </span>
                <h3 className="text-2xl font-bold leading-tight mb-8 group-hover:text-brand-blue transition-colors flex-1">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between text-base text-brand-muted mt-auto pt-6 border-t border-brand-border/50">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
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
      <section className="container-custom mb-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-brand-navy rounded-[48px] p-16 md:p-24 relative overflow-hidden text-center shadow-premium"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.1] mb-16 max-w-5xl mx-auto italic">
              "Precision Note has reduced my clinical documentation time by 70%. I finally feel like a doctor again, not a data entry clerk."
            </h2>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-brand-blue mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-brand-blue/20">
                BI
              </div>
              <h4 className="text-white text-2xl font-bold mb-1">Dr. Bukola Idowu</h4>
              <p className="text-white/50 text-xl font-medium tracking-wide">Chief of Clinical Operations</p>
            </div>
          </div>
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/15 blur-[120px] pointer-events-none"></div>
        </motion.div>
      </section>

      {/* Newsletter Section */}
      <section className="container-custom mb-32">
        <div className="bg-[#fbbf24] rounded-[48px] p-16 md:p-24 relative overflow-hidden text-center shadow-premium">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-brand-navy">
              Want these insights in your inbox?
            </h2>
            <p className="text-xl md:text-2xl text-brand-navy/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join 5,000+ physicians getting weekly tips on clinical efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="your.email@hospital.com"
                className="flex-1 px-8 py-5 rounded-2xl border-none focus:ring-4 focus:ring-brand-navy/10 transition-all bg-white/95 text-lg shadow-inner"
              />
              <button className="bg-brand-navy text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-brand-blue transition-all shadow-xl active:scale-95 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-navy/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[60px]"></div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default BlogPage;
