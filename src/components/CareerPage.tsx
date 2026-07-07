import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Compass, 
  Coins, 
  CheckSquare, 
  Cpu, 
  ArrowRight, 
  Download, 
  Users, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  GraduationCap, 
  Mail, 
  Linkedin, 
  MapPin, 
  Heart,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { IMPACT_HIGHLIGHTS, SKILL_CATEGORIES, CAREER_TIMELINE, EDUCATION, PERSONAL_FACTS } from "../data";

// Custom Counter Component for metric animation when in view
function MetricCounter({ value, label }: { value: string; label?: string }) {
  const [count, setCount] = useState("");
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          // Trigger animation
          animateValue();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  const animateValue = () => {
    // Extract numerical part
    const match = value.match(/(\d+)/);
    if (!match) {
      setCount(value);
      return;
    }

    const targetNum = parseInt(match[1], 10);
    const suffix = value.replace(match[1], "");
    let start = 0;
    const duration = 1500; // 1.5s
    const startTime = performance.now();

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const current = Math.floor(start + easeProgress * (targetNum - start));
      
      setCount(`${current}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(updateCount);
  };

  return (
    <div ref={elementRef} className="text-5xl md:text-6xl font-extrabold font-sans text-accent-orange tracking-tight">
      {count || value}
    </div>
  );
}

// Background Network/Nodes component for GTM / Systems Thinker Vibe
function NetworkBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4A9FD5" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0A1628" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="85%" cy="35%" r="300" fill="url(#grad)" />
        <circle cx="15%" cy="75%" r="250" fill="url(#grad)" />
        
        {/* Abstract interconnected systems nodes */}
        <g stroke="#4A9FD5" strokeWidth="0.75" strokeOpacity="0.25">
          <line x1="10%" y1="20%" x2="25%" y2="35%" />
          <line x1="25%" y1="35%" x2="20%" y2="55%" />
          <line x1="25%" y1="35%" x2="40%" y2="25%" />
          <line x1="40%" y1="25%" x2="55%" y2="40%" />
          <line x1="55%" y1="40%" x2="70%" y2="30%" />
          <line x1="70%" y1="30%" x2="85%" y2="45%" />
          <line x1="85%" y1="45%" x2="80%" y2="70%" />
          <line x1="55%" y1="40%" x2="50%" y2="70%" />
          <line x1="20%" y1="55%" x2="35%" y2="75%" />
          <line x1="35%" y1="75%" x2="50%" y2="70%" />
          <line x1="50%" y1="70%" x2="68%" y2="85%" />
        </g>
        
        {/* Animated pulsing dots representing flowing details */}
        <g fill="#E8631A" opacity="0.6">
          <circle cx="10%" cy="20%" r="3" className="animate-ping" style={{ animationDuration: "3s" }} />
          <circle cx="25%" cy="35%" r="4" />
          <circle cx="40%" cy="25%" r="3" />
          <circle cx="55%" cy="40%" r="4.5" />
          <circle cx="70%" cy="30%" r="3" />
          <circle cx="85%" cy="45%" r="4" />
          <circle cx="20%" cy="55%" r="3" />
          <circle cx="50%" cy="70%" r="3.5" />
          <circle cx="35%" cy="75%" r="3" />
        </g>
      </svg>
    </div>
  );
}

export default function CareerPage({ 
  onScrollToSection, 
  onNavigateToConsulting 
}: { 
  onScrollToSection: (id: string) => void;
  onNavigateToConsulting: () => void;
}) {
  const [imageError, setImageError] = useState(false);
  const [heroImageError, setHeroImageError] = useState(false);
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formSubject, setFormSubject] = useState("General Collaboration");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const subtitles = [
    "73% YoY product growth across 28 markets.",
    "1,000+ hours saved through process modernization.",
    "Cross-functional leader across 30+ teams."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % subtitles.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="">
      {/* 1. Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex items-center bg-primary text-white overflow-hidden pt-28 pb-16">
        <NetworkBackground />
        
        {/* Subtle grid layer */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-accent-orange animate-pulse" />
              <span className="font-sans text-[11px] md:text-xs font-bold text-accent-blue tracking-widest uppercase">
                Strategic Operator · Systems Thinker · Builder
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-extrabold leading-[1.15] tracking-tight max-w-4xl text-white">
              I turn complexity into clarity — and{" "}
              <span className="text-accent-orange italic font-serif font-semibold">clarity into results.</span>
            </h1>

            {/* Cycling Metrics Subtitle with dynamic transition */}
            <div className="h-10 md:h-12 flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={headlineIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="font-mono text-base md:text-xl text-accent-blue font-bold flex items-center gap-2"
                >
                  <span className="inline-block w-2.5 h-4 bg-accent-orange animate-pulse" />
                  {subtitles[headlineIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <p className="font-sans text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
              I&apos;m a strategic operator with 9+ years of experience building scalable systems, aligning 
              cross-functional teams, and driving measurable growth. I operate best at the intersection of 
              product, operations, and GTM strategy — where the plan meets the people who have to execute it.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                id="hero-see-work-btn"
                onClick={() => onScrollToSection("impact")}
                className="bg-accent-orange text-white text-center font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-accent-orange/90 transition-all hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>See My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-services-btn"
                onClick={onNavigateToConsulting}
                className="bg-white/5 hover:bg-white/10 text-white text-center font-bold px-8 py-4 rounded-xl border border-white/10 transition-all hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-accent-blue" />
                <span>Explore My Services</span>
              </button>
            </div>
          </div>

          {/* Interactive Photo Block or elegant fallback placeholder */}
          <div className="lg:col-span-5 hidden lg:flex justify-center items-center relative">
            <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-organic-1 hover:rounded-organic-2 overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xs group transition-all duration-700 ease-in-out">
              {!heroImageError ? (
                <>
                  <img 
                    src="/assets/images/morgan-headshot.jpg" 
                    alt="Morgan Pugh" 
                    onError={() => {
                      console.log("Hero headshot failed to load at assets/images/morgan-headshot.jpg, falling back to systems thinking graphic.");
                      setHeroImageError(true);
                    }}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Bottom fade overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                  
                  {/* Subtle inner border glow */}
                  <div className="absolute inset-0 border border-accent-orange/20 rounded-organic-1 pointer-events-none group-hover:border-accent-orange/40 transition-all duration-700" />
                </>
              ) : (
                /* Fallback Graphic representing Systems Thinking and Operations */
                <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center space-y-6">
                  {/* Spinning compass concept */}
                  <div className="relative w-44 h-44 rounded-full border border-dashed border-white/25 flex items-center justify-center animate-spin" style={{ animationDuration: "120s" }}>
                    <div className="w-36 h-36 rounded-full border border-white/10 flex items-center justify-center animate-spin" style={{ animationDuration: "60s" }}>
                      <div className="w-24 h-24 rounded-full bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
                        <div className="w-14 h-14 bg-accent-orange/90 rounded-2xl flex items-center justify-center shadow-xl">
                          <Compass className="w-7 h-7 text-white animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="block font-mono text-[10px] text-accent-blue tracking-widest uppercase font-bold">Strategic Portrait</span>
                    <span className="block font-sans text-xs text-white/50 px-4 leading-relaxed">
                      To display your photo, upload your photo file as <code className="text-accent-orange bg-black/40 px-1 rounded">public/assets/images/morgan-headshot.jpg</code>
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Satellite widgets floating around representing pieces of systems */}
            <div className="absolute -top-4 -left-4 p-3 bg-primary/95 border border-white/15 rounded-xl flex items-center gap-2 backdrop-blur-md shadow-2xl hover:scale-105 transition-transform">
              <TrendingUp className="w-4 h-4 text-accent-orange animate-pulse" />
              <span className="font-mono text-xs font-bold text-white tracking-wide">GTM Frameworks</span>
            </div>
            <div className="absolute -bottom-4 -right-4 p-3 bg-primary/95 border border-white/15 rounded-xl flex items-center gap-2 backdrop-blur-md shadow-2xl hover:scale-105 transition-transform">
              <Cpu className="w-4 h-4 text-accent-blue" />
              <span className="font-mono text-xs font-bold text-white tracking-wide">Process Optimization</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What I Do / Positioning Section */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="font-mono text-xs font-bold text-accent-orange tracking-widest uppercase">
              WHAT I BRING
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-primary tracking-tight leading-tight">
              Part strategist, part operator. <span className="text-accent-orange italic font-serif font-semibold">Always</span> in the room where it happens.
            </h2>
            <p className="font-sans text-text-secondary text-base md:text-lg leading-relaxed pt-2">
              My career doesn&apos;t fit neatly into one box — and that&apos;s intentional. I&apos;ve spent nearly 
              a decade living at the intersections: between data and storytelling, between product vision and 
              operational execution, between the C-suite and the 30+ teams making it real. That&apos;s where 
              high-leverage work happens, and it&apos;s where I thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-neutral-light/60 p-8 rounded-organic-1 hover:rounded-organic-2 border border-gray-200/60 shadow-md hover:shadow-xl hover:shadow-accent-blue/[0.03] transition-all duration-500 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-organic-1 bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-primary mb-3">
                Systems Thinking
              </h3>
              <p className="font-sans text-text-secondary text-sm md:text-base leading-relaxed">
                I see how pieces connect before others see the pieces. Whether it&apos;s a go-to-market motion, a 
                post-sale workflow, or a competitive landscape, I map the system first — then I find where 
                to pull the high-leverage lever.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-neutral-light/60 p-8 rounded-organic-2 hover:rounded-organic-3 border border-gray-200/60 shadow-md hover:shadow-xl hover:shadow-accent-orange/[0.03] transition-all duration-500 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-organic-2 bg-accent-orange/10 flex items-center justify-center text-accent-orange mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-primary mb-3">
                Cross-Functional Execution
              </h3>
              <p className="font-sans text-text-secondary text-sm md:text-base leading-relaxed">
                Aligning 30+ teams and 10+ departments is where most big initiatives die. I&apos;ve built the 
                frameworks, driven company-wide initiatives — across legal, engineering, 
                finance, sales, and product — to make complex plans happen.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-neutral-light/60 p-8 rounded-organic-3 hover:rounded-organic-1 border border-gray-200/60 shadow-md hover:shadow-xl hover:shadow-accent-blue/[0.03] transition-all duration-500 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-organic-3 bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Coins className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-primary mb-3">
                Data-Driven Strategy
              </h3>
              <p className="font-sans text-text-secondary text-sm md:text-base leading-relaxed">
                I don&apos;t pitch fuzzy ideas — I build logical business cases. Every strategy I deliver is grounded in 
                competitive analysis, customer feedback, and financial modeling. My background in risk management 
                and analysis means I build resilient, data-informed strategies that balance ambitious growth with precise execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Impact Highlights */}
      <section id="impact" className="py-24 bg-neutral-light relative border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="font-mono text-xs font-bold text-accent-orange tracking-widest uppercase">
              MEASURABLE IMPACT
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-primary tracking-tight leading-tight">
              The work that <span className="text-accent-blue italic font-serif font-semibold">moves the needle.</span>
            </h2>
            <p className="font-sans text-text-secondary text-sm md:text-base">
              Real-world results achieved by bridging GTM strategy, product alignment, and systematic process optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {IMPACT_HIGHLIGHTS.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-baseline justify-between border-b border-gray-100 pb-4">
                    <MetricCounter value={item.metric} />
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-sans text-primary leading-snug">
                    {item.headline}
                  </h3>
                  <p className="font-sans text-text-secondary text-sm md:text-base leading-relaxed">
                    {item.story}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Skills & Expertise */}
      <section id="skills" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="font-mono text-xs font-bold text-accent-orange tracking-widest uppercase">
              EXPERTISE
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-primary tracking-tight">
              What I know <span className="text-accent-orange italic font-serif font-medium">well.</span>
            </h2>
            <p className="font-sans text-text-secondary text-sm md:text-base">
              Hands-on leadership capabilities that bridge corporate strategy and day-to-day tactical execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map((category, index) => {
              const isOrange = index % 2 === 0;
              return (
                <div 
                  key={index}
                  className={`bg-neutral-light/40 hover:bg-white p-6 md:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between group/card ${
                    isOrange 
                      ? 'border-accent-orange/15 hover:border-accent-orange/40 hover:shadow-xl hover:shadow-accent-orange/[0.04]' 
                      : 'border-accent-blue/15 hover:border-accent-blue/40 hover:shadow-xl hover:shadow-accent-blue/[0.04]'
                  }`}
                >
                  <div>
                    <h3 className={`font-sans font-bold text-lg text-primary mb-4 pb-2 border-b flex items-center justify-between transition-colors ${
                      isOrange ? 'border-accent-orange/10 group-hover/card:border-accent-orange/30' : 'border-accent-blue/10 group-hover/card:border-accent-blue/30'
                    }`}>
                      <span>{category.title}</span>
                      <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isOrange 
                          ? 'bg-accent-orange shadow-[0_0_8px_rgba(255,78,0,0.4)] group-hover/card:scale-125' 
                          : 'bg-accent-blue shadow-[0_0_8px_rgba(0,163,255,0.4)] group-hover/card:scale-125'
                      }`} />
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx}
                          className={`font-sans text-sm font-medium px-3.5 py-2 rounded-lg border shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-200 cursor-default ${
                            isOrange 
                              ? 'bg-white text-text-primary border-gray-200/70 hover:border-accent-orange/40 hover:bg-accent-orange/[0.03] hover:text-accent-orange hover:-translate-y-0.5' 
                              : 'bg-white text-text-primary border-gray-200/70 hover:border-accent-blue/40 hover:bg-accent-blue/[0.03] hover:text-accent-blue hover:-translate-y-0.5'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Career Timeline */}
      <section id="experience" className="py-24 bg-neutral-light border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="font-mono text-xs font-bold text-accent-orange tracking-widest uppercase">
              EXPERIENCE
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-primary tracking-tight">
              Nine years of building things that <span className="text-accent-blue italic font-serif font-semibold">scale.</span>
            </h2>
            <p className="font-sans text-text-secondary text-sm md:text-base">
              My path from high-stakes risk management and portfolio building to driving massive enterprise change operations.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative border-l-2 border-accent-blue/30 ml-4 md:ml-6 space-y-12">
            {CAREER_TIMELINE.map((pos, index) => (
              <div key={index} className="relative pl-8 md:pl-10">
                {/* Timeline node */}
                <span className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-accent-blue flex items-center justify-center shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-pulse" />
                </span>

                <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <span className="font-mono text-xs font-bold text-accent-orange uppercase bg-accent-orange/5 border border-accent-orange/10 px-3 py-1 rounded-full inline-block mb-1.5">
                        {pos.dates}
                      </span>
                      <h3 className="text-xl font-bold font-sans text-primary">
                        {pos.title}
                      </h3>
                      <p className="font-sans text-sm font-semibold text-accent-blue">
                        {pos.company} — <span className="text-text-secondary font-medium">{pos.location}</span>
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 pt-2">
                    {pos.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="font-sans text-text-secondary text-sm md:text-base leading-relaxed flex items-start">
                        <ChevronRight className="w-4 h-4 text-accent-orange shrink-0 mt-1 mr-2" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Education Block */}
          <div className="mt-16 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase font-bold text-accent-orange tracking-wider">
                  EDUCATION & CREDENTIALS
                </span>
                <h4 className="text-lg font-bold font-sans text-primary">
                  {EDUCATION.degree}
                </h4>
                <p className="font-sans text-sm text-text-secondary">
                  {EDUCATION.school}
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {EDUCATION.additional.map((item, idx) => (
                <span 
                  key={idx}
                  className="font-mono text-xs bg-neutral-light text-text-primary px-3 py-1.5 rounded-lg border border-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. About Me */}
      <section id="about-me" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side column: Photo placeholder and personal stats */}
            <div className="lg:col-span-5 space-y-8">
              <div className="text-left space-y-2">
                <span className="font-mono text-xs font-bold text-accent-orange tracking-widest uppercase">
                  ABOUT
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-primary tracking-tight leading-tight">
                  The person <span className="text-accent-orange italic font-serif font-semibold">behind</span> the portfolio.
                </h2>
              </div>

              {/* Styled Headshot Photo Area */}
              {/* PLACEHOLDER: Professional headshot, warm lighting preferred */}
              <div className="relative group rounded-organic-2 hover:rounded-organic-3 overflow-hidden shadow-xl aspect-[4/5] bg-gradient-to-tr from-primary to-accent-blue/30 flex flex-col justify-end p-8 border border-gray-100/80 transition-all duration-700 ease-in-out">
                {!imageError ? (
                  <img 
                    src="/assets/images/morgan-headshot.jpg" 
                    alt="Morgan Pugh" 
                    onError={() => {
                      console.log("Headshot failed to load at assets/images/morgan-headshot.jpg, falling back to beautiful styled gradient block.");
                      setImageError(true);
                    }}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-80" />
                )}
                
                {/* Visual mountain skyline vector behind */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
                
                {/* Overlay content explaining portrait */}
                <div className="relative z-10 text-white space-y-2">
                  <div className="w-10 h-10 rounded-full bg-accent-orange/20 border border-accent-orange flex items-center justify-center text-accent-orange mb-3">
                    <Heart className="w-5 h-5 animate-pulse" />
                  </div>
                  <span className="font-mono text-[11px] font-bold tracking-widest text-accent-blue uppercase block">
                    Denver, Colorado
                  </span>
                  <h3 className="font-sans font-bold text-xl text-white">
                    Morgan Pugh
                  </h3>
                  {imageError && (
                    <p className="font-sans text-xs text-white/80 leading-relaxed bg-black/30 p-2.5 rounded backdrop-blur-xs">
                      [ To display your photo, place your image at: <code className="font-mono text-accent-orange bg-black/40 px-1 rounded">assets/images/morgan-headshot.jpg</code> ]
                    </p>
                  )}
                </div>

                {/* Subtle visual mountain peak graphic in corner representing Colorado */}
                <svg className="absolute bottom-0 right-0 w-48 h-24 text-white/5 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <polygon points="0,100 50,30 100,100" fill="currentColor" />
                  <polygon points="30,100 70,50 100,100" fill="currentColor" fillOpacity="0.5" />
                </svg>
              </div>

              {/* Personal Fact Badges */}
              <div className="space-y-3">
                {PERSONAL_FACTS.map((fact, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-neutral-light p-4 rounded-xl border border-gray-100">
                    <span className="text-2xl">{fact.icon}</span>
                    <span className="font-sans text-sm font-semibold text-text-primary">{fact.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side column: Personal Story (Conversational & Engaging) */}
            <div className="lg:col-span-7 font-sans text-text-secondary text-base leading-relaxed space-y-6 lg:pt-10">
              <p>
                I grew up in Overland Park, Kansas — deep in Chiefs and Royals territory — with a childhood built 
                around sports. Soccer, basketball, volleyball, softball: if it involved a team and competition, I 
                was in. That instinct toward collaboration and friendly pressure never really left me.
              </p>
              
              <p>
                I made my way to the University of Kansas, where I studied finance, joined the rowing team, 
                refereed intramural sports, and took the finance classes that made me realize I actually loved thinking 
                about how to build and protect value over time. After graduation, I packed up for Denver with my 
                long-term partner and our dog — and we haven&apos;t looked back.
              </p>

              <p>
                Colorado turned us into outdoor people in the best way. Mountain biking, skiing, volleyball in Wash 
                Park on weekends, and more hiking than I can count. We travel as often as we can, and I&apos;m something 
                of an obsessive planner when we do. We&apos;ve pulled off a micro-wedding for 12 people in a remote 
                corner of Costa Rica near the Panama border, a semi-joint bachelor/bachelorette trip to Mexico City, 
                and adventures across Portugal, Spain, Canada, Hawaii, and a long list of National Parks. It all comes 
                together because I genuinely love the logistics — the research, the contingency plans, and the moments 
                where everything clicks.
              </p>

              <p>
                Animals have always been part of my life too. I started volunteering at shelters when I was 16, and I 
                still do. I currently walk dogs at True Companions animal shelter and we&apos;ve fostered dogs and cats 
                on and off for years. I&apos;m also building a small project to help rescue organizations streamline some of 
                their recurring work — flyers, training resources, and outreach materials — using generative AI tools. 
                It&apos;s one of those side projects that reminds me why I love finding problems worth solving.
              </p>

              <p>
                Financially, I&apos;m wired toward long-term thinking. I&apos;ve reached{" "}
                <strong className="text-primary font-bold">Coast FIRE</strong> and I&apos;m working toward full financial 
                independence over the next decade or so — which means I think about money the same way I think about business 
                strategy: compound the things that matter, eliminate the drag, and stay patient.
              </p>

              <div className="bg-neutral-light border-l-4 border-accent-orange p-5 rounded-r-2xl mt-8">
                <span className="block font-sans font-bold text-primary text-sm mb-1">
                  THE GENERALIST ARCHETYPE: SYSTEMS THINKER
                </span>
                <p className="text-xs text-text-secondary leading-normal">
                  In professional diagnostics, I score as a masterful **Systems Thinker** — a type of generalist 
                  who excels at seeing both the forest and the trees. I effortlessly navigate various domains to 
                  optimize workflows, unravel complex problems, and solve root causes rather than just symptoms.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Contact Section */}
      <section id="contact" className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent-blue/10 blur-3xl" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent-orange/10 blur-3xl" />

        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 space-y-8">
          <div className="text-center space-y-3">
            <span className="font-mono text-xs font-bold text-accent-orange tracking-widest uppercase">
              LET&apos;S TALK
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold tracking-tight text-white leading-tight">
              Whether you&apos;re hiring, collaborating, or just curious — <span className="text-accent-orange italic font-serif font-semibold">reach out.</span>
            </h2>
          </div>

          <p className="font-sans text-white/70 text-base md:text-lg max-w-2xl mx-auto text-center leading-relaxed">
            I&apos;m currently open to senior roles in Strategy & Operations, Product Operations, GTM Operations, 
            Revenue Operations, and Business Operations. I&apos;m also available for select consulting projects — 
            including project management, personal finance coaching, and travel planning.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 text-left items-start">
            {/* Left side: Information (5 cols) */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between self-stretch">
              <div className="space-y-6">
                <p className="font-sans text-white/70 text-sm leading-relaxed">
                  Have an open role, a project idea, or just want to chat? Fill out the form, or reach out directly on LinkedIn. I look forward to connecting!
                </p>

                {/* LinkedIn Card */}
                <a 
                  id="contact-linkedin-link"
                  href="https://www.linkedin.com/in/morgan-pugh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1 group flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/25 flex items-center justify-center text-accent-blue shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block font-mono text-[10px] uppercase font-bold text-white/50">Connect on LinkedIn</span>
                    <span className="block font-sans text-sm font-semibold text-white group-hover:text-accent-blue transition-colors">
                      linkedin.com/in/morgan-pugh
                    </span>
                  </div>
                </a>

                {/* Location Card */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/80 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block font-mono text-[10px] uppercase font-bold text-white/50">Based In</span>
                    <span className="block font-sans text-sm font-semibold text-white">
                      Denver, Colorado
                    </span>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block pt-8 text-white/40 font-mono text-xs">
                I respond within 48 hours. Let&apos;s build something great together.
              </div>
            </div>

            {/* Right side: Email Form (7 cols) */}
            <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm shadow-xl w-full">
              {!isSubmitted ? (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!formName || !formEmail || !formMessage) return;
                    setIsSubmitting(true);
                    setTimeout(() => {
                      setIsSubmitting(false);
                      setIsSubmitted(true);
                    }, 1200);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[10px] uppercase font-bold text-white/60 mb-1.5">
                        Your Name
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-orange/50 transition-colors placeholder:text-white/20"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase font-bold text-white/60 mb-1.5">
                        Your Email
                      </label>
                      <input 
                        type="email" 
                        required
                        placeholder="john@example.com"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-orange/50 transition-colors placeholder:text-white/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase font-bold text-white/60 mb-1.5">
                      Subject
                    </label>
                    <select 
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-orange/50 transition-colors"
                      style={{ colorScheme: 'dark' }}
                    >
                      <option value="General Collaboration" className="bg-primary text-white">General Collaboration</option>
                      <option value="Hiring / Full-Time Role" className="bg-primary text-white">Hiring / Full-Time Role</option>
                      <option value="Freelance Project" className="bg-primary text-white">Freelance Project</option>
                      <option value="Just Saying Hello" className="bg-primary text-white">Just Saying Hello</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase font-bold text-white/60 mb-1.5">
                      Message
                    </label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="How can I help you?"
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-orange/50 transition-colors placeholder:text-white/20 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent-orange hover:bg-accent-orange/95 disabled:bg-accent-orange/50 text-white font-bold py-3.5 rounded-xl text-sm transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-lg shadow-accent-orange/20"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-accent-orange/20 border border-accent-orange flex items-center justify-center mx-auto text-accent-orange">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-sans font-bold text-xl text-white">Message Sent Successfully!</h3>
                    <p className="font-sans text-white/70 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-accent-orange font-semibold">{formName}</strong>. Your message regarding <strong className="text-white font-semibold">&ldquo;{formSubject}&rdquo;</strong> has been routed directly to me. I will get back to you at <strong className="text-white font-semibold">{formEmail}</strong> soon.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setFormName("");
                      setFormEmail("");
                      setFormMessage("");
                      setIsSubmitted(false);
                    }}
                    className="font-mono text-xs text-accent-blue hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
