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
  ChevronRight,
  Sparkles
} from "lucide-react";
import { IMPACT_HIGHLIGHTS, SKILL_CATEGORIES, CAREER_TIMELINE, EDUCATION, PERSONAL_FACTS } from "../data";
import { isCorporateSite } from "../siteMode";
import { submitToFormspree } from "../formspree";

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
    <div ref={elementRef} className="text-2xl md:text-3xl font-extrabold font-sans text-accent-orange tracking-tight">
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
  const [formError, setFormError] = useState(false);

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
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-accent-orange animate-pulse" />
              <span className="font-sans text-[11px] md:text-xs font-bold text-accent-blue tracking-widest uppercase">
                Strategic Operator · Systems Thinker · Builder
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-extrabold leading-[1.15] tracking-tight max-w-4xl text-white">
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

              {!isCorporateSite && (
                <button
                  id="hero-services-btn"
                  onClick={onNavigateToConsulting}
                  className="bg-white/5 hover:bg-white/10 text-white text-center font-bold px-8 py-4 rounded-xl border border-white/10 transition-all hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-accent-blue" />
                  <span>Explore My Services</span>
                </button>
              )}
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
              <span className="font-mono text-xs font-bold text-white tracking-wide">GTM Execution</span>
            </div>
            <div className="absolute -bottom-4 -right-4 p-3 bg-primary/95 border border-white/15 rounded-xl flex items-center gap-2 backdrop-blur-md shadow-2xl hover:scale-105 transition-transform">
              <Cpu className="w-4 h-4 text-accent-blue" />
              <span className="font-mono text-xs font-bold text-white tracking-wide">Process Optimization</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What I Do / Positioning Section */}
      <section id="about" className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
            <h2 className="text-2xl md:text-4xl font-serif font-extrabold text-primary tracking-tight leading-tight">
              Part strategist, part operator. <span className="text-accent-orange italic font-serif font-semibold">Always</span> in the room where it happens.
            </h2>
            <p className="font-sans text-text-secondary text-base md:text-lg leading-relaxed pt-2">
              My career doesn&apos;t fit in one box — and that&apos;s intentional. I live at the intersections:
              between data and storytelling, between product vision and execution, between the C-suite and the
              30+ teams making it real. That&apos;s where high-leverage work happens, and where I thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-neutral-light/60 p-6 rounded-organic-1 hover:rounded-organic-2 border border-gray-200/60 shadow-md hover:shadow-xl hover:shadow-accent-blue/[0.03] transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-organic-1 bg-accent-blue/10 flex items-center justify-center text-accent-blue shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-serif text-primary">
                  Systems Thinking
                </h3>
              </div>
              <p className="font-sans text-text-secondary text-sm md:text-base leading-relaxed">
                I see how pieces connect before others see the pieces. Whether it&apos;s a go-to-market motion, a
                post-sale workflow, or a competitive landscape, I map the system first — then I find where
                to pull the high-leverage lever.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-neutral-light/60 p-6 rounded-organic-2 hover:rounded-organic-3 border border-gray-200/60 shadow-md hover:shadow-xl hover:shadow-accent-orange/[0.03] transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-organic-2 bg-accent-orange/10 flex items-center justify-center text-accent-orange shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-serif text-primary">
                  Cross-Functional Execution
                </h3>
              </div>
              <p className="font-sans text-text-secondary text-sm md:text-base leading-relaxed">
                Aligning 30+ teams and 10+ departments is where most big initiatives die. I&apos;ve built the
                frameworks, driven company-wide initiatives — across legal, engineering,
                finance, sales, and product — to make complex plans happen.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-neutral-light/60 p-6 rounded-organic-3 hover:rounded-organic-1 border border-gray-200/60 shadow-md hover:shadow-xl hover:shadow-accent-blue/[0.03] transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-organic-3 bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Coins className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-serif text-primary">
                  Data-Driven Strategy
                </h3>
              </div>
              <p className="font-sans text-text-secondary text-sm md:text-base leading-relaxed">
                I don&apos;t pitch fuzzy ideas — I build the case. Every strategy I deliver is grounded in
                competitive analysis, customer feedback, and financial modeling, backed by a risk management
                foundation that balances ambitious growth with precise execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Impact Highlights */}
      <section id="impact" className="py-14 bg-neutral-light relative border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <span className="font-mono text-xs font-bold text-accent-orange tracking-widest uppercase">
              MEASURABLE IMPACT
            </span>
            <h2 className="text-xl md:text-3xl font-serif font-extrabold text-primary tracking-tight leading-tight">
              The work that <span className="text-accent-blue italic font-serif font-semibold">moves the needle.</span>
            </h2>
            <p className="font-sans text-text-secondary text-sm">
              Real-world results achieved by bridging GTM strategy, product roadmap leadership, and systematic process optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {IMPACT_HIGHLIGHTS.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-baseline justify-between border-b border-gray-100 pb-2.5">
                    <MetricCounter value={item.metric} />
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-accent-blue bg-accent-blue/10 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold font-sans text-primary leading-snug">
                    {item.headline}
                  </h3>
                  <p className="font-sans text-text-secondary text-sm leading-relaxed">
                    {item.story}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Skills & Expertise */}
      <section id="skills" className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <span className="font-mono text-xs font-bold text-accent-orange tracking-widest uppercase">
              EXPERTISE
            </span>
            <h2 className="text-xl md:text-3xl font-serif font-extrabold text-primary tracking-tight">
              What I know <span className="text-accent-orange italic font-serif font-medium">well.</span>
            </h2>
            <p className="font-sans text-text-secondary text-sm">
              Hands-on leadership capabilities that bridge corporate strategy and day-to-day tactical execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((category, index) => {
              const isOrange = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`bg-neutral-light/40 hover:bg-white p-5 md:p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group/card ${
                    isOrange
                      ? 'border-accent-orange/15 hover:border-accent-orange/40 hover:shadow-xl hover:shadow-accent-orange/[0.04]'
                      : 'border-accent-blue/15 hover:border-accent-blue/40 hover:shadow-xl hover:shadow-accent-blue/[0.04]'
                  }`}
                >
                  <div>
                    <h3 className={`font-sans font-bold text-base text-primary mb-3 pb-2 border-b flex items-center justify-between transition-colors ${
                      isOrange ? 'border-accent-orange/10 group-hover/card:border-accent-orange/30' : 'border-accent-blue/10 group-hover/card:border-accent-blue/30'
                    }`}>
                      <span>{category.title}</span>
                      <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isOrange
                          ? 'bg-accent-orange shadow-[0_0_8px_rgba(255,78,0,0.4)] group-hover/card:scale-125'
                          : 'bg-accent-blue shadow-[0_0_8px_rgba(0,163,255,0.4)] group-hover/card:scale-125'
                      }`} />
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className={`font-sans text-sm font-medium px-3 py-1.5 rounded-lg border shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-200 cursor-default ${
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
      <section id="experience" className="py-14 bg-neutral-light border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 md:px-12">

          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <span className="font-mono text-xs font-bold text-accent-orange tracking-widest uppercase">
              EXPERIENCE
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-extrabold text-primary tracking-tight">
              Nine years of building things that <span className="text-accent-blue italic font-serif font-semibold">scale.</span>
            </h2>
            <p className="font-sans text-text-secondary text-sm md:text-base">
              My path from high-stakes risk management and portfolio building to driving massive enterprise change operations.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative border-l-2 border-accent-blue/30 ml-4 md:ml-6 space-y-6">
            {CAREER_TIMELINE.map((pos, index) => (
              <div key={index} className="relative pl-8 md:pl-10">
                {/* Timeline node */}
                <span className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-accent-blue flex items-center justify-center shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-pulse" />
                </span>

                <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold font-sans text-primary">
                        {pos.title}
                      </h3>
                      <p className="font-sans text-sm font-semibold text-accent-blue">
                        {pos.company} — <span className="text-text-secondary font-medium">{pos.location}</span>
                      </p>
                    </div>
                    <span className="font-mono text-xs font-bold text-accent-orange uppercase bg-accent-orange/5 border border-accent-orange/10 px-3 py-1 rounded-full inline-block shrink-0">
                      {pos.dates}
                    </span>
                  </div>

                  <ul className="space-y-2 pt-1">
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
          <div className="mt-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-3">
            <span className="self-start font-mono text-[10px] uppercase font-bold tracking-wider text-accent-orange bg-accent-orange/10 px-2.5 py-1 rounded-full">
              Education & Credentials
            </span>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="font-serif font-bold text-primary text-2xl whitespace-nowrap">
                  {EDUCATION.degree}
                </p>
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
      <section id="about-me" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side column: Photo placeholder and personal stats */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-left space-y-2">
                <h2 className="text-2xl md:text-4xl font-serif font-extrabold text-primary tracking-tight leading-tight">
                  The person <span className="text-accent-orange italic font-serif font-semibold">behind</span> the portfolio.
                </h2>
              </div>

              {/* Styled Headshot Photo Area */}
              {/* PLACEHOLDER: Professional headshot, warm lighting preferred */}
              <div className="relative group rounded-organic-2 hover:rounded-organic-3 overflow-hidden shadow-xl aspect-[4/5] bg-gradient-to-tr from-primary to-accent-blue/30 flex flex-col justify-end p-8 border border-gray-100/80 transition-all duration-700 ease-in-out">
                {!imageError ? (
                  <img
                    src="/assets/images/morgan-about-2.jpg"
                    alt="Morgan Pugh"
                    onError={() => {
                      console.log("Headshot failed to load at assets/images/morgan-about-2.jpg, falling back to beautiful styled gradient block.");
                      setImageError(true);
                    }}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover object-[10%_75%] scale-[1.6] transition-transform duration-500 group-hover:scale-[1.65]"
                  />
                ) : (
                  <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-80" />
                )}
                
                {/* Visual mountain skyline vector behind */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
                
                {/* Overlay content explaining portrait */}
                <div className="relative z-10 text-white space-y-2">
                  <div className="w-10 h-10 rounded-full bg-accent-orange/20 border border-accent-orange flex items-center justify-center text-accent-orange mb-3">
                    <Compass className="w-5 h-5 animate-pulse" />
                  </div>
                  <span className="font-mono text-[11px] font-bold tracking-widest text-accent-blue uppercase block">
                    Denver, Colorado
                  </span>
                  <h3 className="font-sans font-bold text-xl text-white">
                    Morgan Pugh
                  </h3>
                  {imageError && (
                    <p className="font-sans text-xs text-white/80 leading-relaxed bg-black/30 p-2.5 rounded backdrop-blur-xs">
                      [ To display your photo, place your image at: <code className="font-mono text-accent-orange bg-black/40 px-1 rounded">assets/images/morgan-about-2.jpg</code> ]
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
              <div className="space-y-1">
                {PERSONAL_FACTS.map((fact, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-neutral-light px-2.5 py-1 rounded-xl border border-gray-100">
                    <span className="text-base">{fact.icon}</span>
                    <span className="font-sans text-sm font-semibold text-text-primary">{fact.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side column: Personal Story (Conversational & Engaging) */}
            <div className="lg:col-span-7 font-sans text-text-secondary text-base leading-relaxed space-y-6 lg:pt-10">
              {isCorporateSite ? (
                <>
                  <p>
                    I grew up in a suburb of Kansas City, Kansas — deep in Chiefs and Royals territory — with a
                    childhood built around sports. Soccer, basketball, volleyball, softball: if it involved a team
                    and competition, I was in. That instinct toward collaboration and friendly pressure never
                    really left me.
                  </p>

                  <p>
                    I went to the University of Kansas to study finance, joined the rowing team, supervised
                    intramural sports, and found, through my finance courses, that I genuinely loved thinking about
                    how to build and protect value over time. After graduation, I packed up and moved to Denver and
                    haven&apos;t looked back.
                  </p>

                  <p>
                    Colorado keeps me busy and thoroughly entertained. In a typical week I can be found either
                    mountain biking or skiing, playing volleyball, enjoying the many parks, or at a library with my
                    husband learning about whatever thing is exciting that month.
                  </p>

                  <p>
                    I&apos;ve always had a passion for animals. I started volunteering at shelters when I was 16 and
                    still do — currently walking dogs at True Companions and fostering on and off. That&apos;s why I
                    built{" "}
                    <a
                      href="https://rescue-kit.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-orange font-bold hover:underline"
                    >
                      Rescue-kit
                    </a>
                    , a free tool/website I designed and coded solo to help rescue organizations and fosters create
                    digital and printable flyers and outreach materials without any kind of design or technical
                    experience — this kind of passion project reminds me why I love finding problems worth solving.
                  </p>

                  <p>
                    Financially, I&apos;m wired toward long-term thinking. I&apos;ve reached{" "}
                    <strong className="text-primary font-bold">Coast FIRE</strong>, and I&apos;m working toward full
                    financial independence, which means I think about money the way I think about business
                    strategy: compound what matters, cut the drag, stay patient.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    I grew up in Overland Park, Kansas — deep in Chiefs and Royals territory — with a childhood built
                    around sports. Soccer, basketball, volleyball, softball: if it involved a team and competition, I
                    was in. That instinct toward collaboration and friendly pressure never really left me.
                  </p>

                  <p>
                    I headed to the University of Kansas to study finance, joined the rowing team, refereed intramural
                    sports, and found I genuinely loved thinking about how to build and protect value over time. After
                    graduation, I packed up for Denver and haven&apos;t looked back.
                  </p>

                  <p>
                    Colorado keeps me busy — mountain biking, skiing, volleyball in Wash Park, more hiking than I can
                    count. I love to travel, and I plan obsessively and optimize every dollar when I do: a 12-person
                    micro-wedding in Costa Rica, a bachelorette for 10 in Mexico City, adventures across Portugal, Spain,
                    Canada, and Hawaii. I genuinely love perfecting travel logistics — the research, the itineraries, the
                    moment it all clicks.
                  </p>

                  <p>
                    Animals have always been part of my life. I started volunteering at shelters when I was 16 and still
                    do — currently walking dogs at True Companions and fostering on and off for years. That&apos;s also
                    why I built{" "}
                    <a
                      href="https://rescue-kit.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-orange font-bold hover:underline"
                    >
                      Rescue-kit
                    </a>
                    , a free tool I designed and coded solo to help rescue organizations and fosters create digital and
                    printable flyers and outreach materials without any kind of design or technical experience — the
                    kind of side project that reminds me why I love finding problems worth solving.
                  </p>

                  <p>
                    Financially, I&apos;m wired toward long-term thinking. I&apos;ve reached{" "}
                    <strong className="text-primary font-bold">Coast FIRE</strong> by age 48, and I&apos;m working toward
                    full financial independence, which means I think about money the way I think about business
                    strategy: compound what matters, cut the drag, stay patient.
                  </p>
                </>
              )}

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
      <section id="contact" className="py-16 bg-primary text-white relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent-blue/10 blur-3xl" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent-orange/10 blur-3xl" />

        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 space-y-6">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-4xl font-serif font-extrabold tracking-tight text-white leading-tight">
              Whether you&apos;re hiring, collaborating, or just curious — <span className="text-accent-orange italic font-serif font-semibold">reach out.</span>
            </h2>
          </div>

          <p className="font-sans text-white/70 text-base md:text-lg max-w-2xl mx-auto text-center leading-relaxed">
            I&apos;m currently open to senior strategy, product, and GTM roles, along with select consulting
            projects — including project management, money coaching, or other opportunities where my skills
            and background could add value!
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
                  href="https://www.linkedin.com/in/morgan-pugh-392819100/"
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
                    <span className="block font-sans text-xs font-semibold text-accent-orange">
                      Open to opportunities worldwide
                    </span>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block pt-8 text-white/70 font-mono text-xs">
                I respond within 48 hours. Let&apos;s build something great together.
              </div>
            </div>

            {/* Right side: Email Form (7 cols) */}
            <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm shadow-xl w-full">
              {!isSubmitted ? (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (!formName || !formEmail || !formMessage) return;
                    setIsSubmitting(true);
                    setFormError(false);
                    const ok = await submitToFormspree({
                      name: formName,
                      email: formEmail,
                      subject: formSubject,
                      message: formMessage,
                    });
                    setIsSubmitting(false);
                    if (ok) {
                      setIsSubmitted(true);
                    } else {
                      setFormError(true);
                    }
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
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-orange/50 transition-colors placeholder:text-white/50"
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
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-orange/50 transition-colors placeholder:text-white/50"
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
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-orange/50 transition-colors placeholder:text-white/50 resize-none"
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

                  {formError && (
                    <p className="text-red-400 text-xs text-center">
                      Something went wrong sending your message. Please try again, or email me directly at{" "}
                      <a href="mailto:morgantpugh3@gmail.com" className="underline">morgantpugh3@gmail.com</a>.
                    </p>
                  )}
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
