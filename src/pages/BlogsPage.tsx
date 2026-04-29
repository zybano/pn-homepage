import { motion } from "framer-motion";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import LandingNav from "../components/LandingNav";
import LandingFooter from "../components/LandingFooter";
import { AppImages } from "../lib/data";

const BlogPage = () => {
  const latestArticles = [
    {
      id: 1,
      tag: "THISDAY",
      title:
        "Africa-Born, AI-Powered Clinical Documentation App Set to Transform Healthcare Workflows Globally",
      readTime: "5 min read",
      date: "April 22, 2025",
      image:
        "https://global.ariseplay.com/amg/www.thisdaylive.com/uploads/Screenshot_20250422-121530.jpg",
    },
    {
      id: 2,
      tag: "GUARDIAN",
      title:
        "App designed by doctors to transform healthcare workflows globally",
      readTime: "5 min read",
      date: "April 21, 2025",
      image:
        "https://cdn.guardian.ng/wp-content/uploads/2025/11/Guardian-grey.jpg",
    },
    {
      id: 3,
      tag: "TECHPOINT",
      title:
        "Precision Note: Africa-Born, AI-Powered Clinical Documentation App Set to Transform Healthcare Workflows Globally",
      readTime: "5 min read",
      date: "April 22, 2025",
      image:
        "https://techpoint.africa/wp-content/uploads/2025/04/Co-founders.jpeg.webp",
    },
    {
      id: 4,
      tag: "PUNCH",
      title: "Nigerian doctors unveil app to document patients' consultation",
      readTime: "5 min read",
      date: "April 24, 2025",
      image:
        "https://healthwise.punchng.com/wp-content/uploads/2025/04/Nigerian-doctors.jpg",
    },
    {
      id: 5,
      tag: "AI NEWS",
      title:
        "Precision Note: AI-Powered Clinical Documentation App Set to Transform Global Healthcare Workflows",
      readTime: "5 min read",
      date: "April 23, 2025",
      image:
        "https://ainewstoday.net/uploads/images/202504/image_870x_6808fbb96d94c.webp",
    },
    {
      id: 6,
      tag: "NAIRAMETRICS",
      title:
        "Precision Note launches to transform medical documentation with AI-Powered Innovation",
      readTime: "5 min read",
      date: "May 2, 2025",
      image:
        "https://nairametrics.com/wp-content/uploads/2025/05/IMG_7195.jpeg",
    },
    {
      id: 7,
      tag: "BUSINESS DAY",
      title:
        "Nigerian doctors introduce AI-powered Precision Note to aid clinical documentation",
      readTime: "5 min read",
      date: "May 2, 2025",
      image:
        "https://cdn.businessday.ng/wp-content/uploads/2023/11/Business-Day-Grey-e1691776368938.jpg",
    },
    {
      id: 8,
      tag: "NATION",
      title: "Nigerian doctors launch AI tool to improve care for patient",
      readTime: "5 min read",
      date: "May 2, 2025",
      image:
        "https://cdn.thenationonlineng.net/wp-content/uploads/2024/05/20003146/Nation.jpg",
    },
    {
      id: 9,
      tag: "TECHCABAL",
      title:
        "Precision Note Launches to Transform Medical Documentation with AI-Powered Innovation",
      readTime: "5 min read",
      date: "May 2, 2025",
      image:
        "https://c76c7bbc41.mjedge.net/wp-content/uploads/tc/2025/05/A-1-682x1024.jpeg",
    },
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
          Practical strategies to reclaim your time and rediscover the joy of
          practicing medicine.
        </motion.p>
      </section>

      {/* Featured Article */}
      <section className="container-custom mb-40 px-4 md:px-12 lg:px-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative rounded-[20px] overflow-hidden aspect-[16/7] min-h-[500px] group cursor-pointer shadow-2xl"
        >
          <img
            src="https://global.ariseplay.com/amg/www.thisdaylive.com/uploads/Screenshot_20250422-121530.jpg"
            alt="Featured article"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/40 to-transparent flex flex-col justify-center p-12 md:p-24">
            <div className="max-w-3xl">
              <span className="inline-block bg-brand-blue text-white text-sm font-bold px-4 py-2 rounded-lg mb-8 uppercase ">
                FEATURED
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 leading-[1.1] tracking-tight">
                Africa-Born, AI-Powered Clinical Documentation App Set to
                Transform Healthcare Workflows Globally
              </h2>
              <div className="flex items-center gap-8 text-white/80 text-lg mb-12 font-medium">
                <div className="flex items-center gap-3">
                  <Clock size={20} />
                  <span>5 min read</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={20} />
                  <span>April 22, 2025</span>
                </div>
              </div>
              <button className="bg-white text-brand-blue px-7 py-4 rounded-lg font-bold text-lg flex items-center gap-3 hover:bg-brand-navy hover:text-white transition-all shadow-xl group/btn">
                Read Story{" "}
                <ArrowRight
                  size={24}
                  className="transition-transform group-hover/btn:translate-x-2"
                />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Latest Articles */}
      <section className="container-custom mb-40 px-4 md:px-12 lg:px-28">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-brand-navy">
            Latest Articles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index % 3), duration: 0.6 }}
              className="group cursor-pointer flex flex-col bg-white rounded-[10px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="mb-6">
                  <span className="inline-block bg-[#E8EFFF] text-[#5768fd] text-[12px] font-bold uppercase px-3 py-1.5 rounded-full font-mono">
                    {article.tag}
                  </span>
                </div>
                <h3 className="text-[20px] font-bold leading-[1.3] mb-10 text-brand-navy group-hover:text-brand-blue transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between text-[14px] text-brand-navy/50 mt-auto font-mono">
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="opacity-60" />
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
          className="bg-brand-navy rounded-[30px] p-16 md:p-32 relative overflow-hidden text-center shadow-2xl"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.2] mb-16 max-w-5xl mx-auto italic">
              "Precision Note has reduced my clinical documentation time by 70%.
              I finally feel like a doctor again, not a data entry clerk."
            </h2>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-brand-blue mb-8 flex items-center justify-center text-white text-3xl font-bold shadow-2xl shadow-brand-blue/40 border-4 border-white/10">
                BI
              </div>
              <h4 className="text-white text-2xl font-bold mb-2">
                Dr. Bukola Idowu
              </h4>
              <p className="text-white/40 text-xl font-medium tracking-wide uppercase">
                Chief of Clinical Operations
              </p>
            </div>
          </div>
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/20 blur-[150px] pointer-events-none"></div>
        </motion.div>
      </section>

      {/* Newsletter Section */}
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
                backgroundSize: "contain",
                backgroundPosition: "40% 50%",
              }}
            />

            <div className="relative z-10 max-w-[800px] mx-auto">
              <h2 className="text-[40px] md:text-[64px] font-bold text-[#040523] tracking-tight leading-tight mb-8">
                Want these insights in your inbox?
              </h2>
              <p className="text-[18px] md:text-[22px] text-[#040523]/80 font-medium mb-12">
                Join 5,000+ physicians getting weekly tips on clinical
                efficiency.
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

export default BlogPage;
