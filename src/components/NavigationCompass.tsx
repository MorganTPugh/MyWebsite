import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Compass, 
  Trophy, 
  Wrench, 
  Briefcase, 
  User, 
  Mail, 
  Activity, 
  Sparkles,
  ArrowRightLeft
} from "lucide-react";

interface NavigationItem {
  id: string;
  label: string;
  icon: any;
  targetId: string;
  page: "career" | "consulting";
}

export default function NavigationCompass({
  activePage,
  setActivePage,
  onScrollToSection
}: {
  activePage: "career" | "consulting";
  setActivePage: (page: "career" | "consulting") => void;
  onScrollToSection: (id: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [tooltip, setTooltip] = useState<string | null>(null);

  // Auto-collapse on scroll or page change
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const careerItems: NavigationItem[] = [
    { id: "c-hero", label: "Hero Entrance", icon: Sparkles, targetId: "hero", page: "career" },
    { id: "c-impact", label: "Measurable Impact", icon: Trophy, targetId: "impact", page: "career" },
    { id: "c-expertise", label: "Core Expertise", icon: Wrench, targetId: "expertise", page: "career" },
    { id: "c-experience", label: "Career Journey", icon: Briefcase, targetId: "experience", page: "career" },
    { id: "c-about", label: "About Morgan", icon: User, targetId: "about", page: "career" },
    { id: "c-contact", label: "Get In Touch", icon: Mail, targetId: "contact", page: "career" },
  ];

  const consultingItems: NavigationItem[] = [
    { id: "con-hero", label: "Consulting Hero", icon: Sparkles, targetId: "consulting-hero", page: "consulting" },
    { id: "con-services", label: "Services Scopes", icon: Wrench, targetId: "services", page: "consulting" },
    { id: "con-methodology", label: "How It Works", icon: Activity, targetId: "how-it-works", page: "consulting" },
    { id: "con-contact", label: "Inquire Now", icon: Mail, targetId: "consulting-contact", page: "consulting" },
  ];

  const currentItems = activePage === "career" ? careerItems : consultingItems;

  const handleItemClick = (item: NavigationItem) => {
    setIsOpen(false);
    if (activePage !== item.page) {
      setActivePage(item.page);
      // Give time for state to switch and render
      setTimeout(() => {
        const element = document.getElementById(item.targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 350);
    } else {
      onScrollToSection(item.targetId);
    }
  };

  const handleTogglePage = () => {
    const targetPage = activePage === "career" ? "consulting" : "career";
    setActivePage(targetPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 font-sans">
      <div className="relative flex flex-col items-start">
        {/* Expanded Navigation Menu with Circular Arc / Non-Linear Path */}
        <AnimatePresence>
          {isOpen && (
            <div className="absolute bottom-16 left-0 mb-2">
              {/* Radial background blur container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ type: "spring", damping: 18, stiffness: 220 }}
                className="bg-white/95 border border-gray-100 rounded-3xl shadow-2xl p-5 w-[280px] backdrop-blur-md relative"
              >
                {/* Header */}
                <div className="border-b border-gray-100 pb-2 mb-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Experimental Explorer Compass
                  </span>
                  <span className="text-[10px] font-sans font-bold text-accent-orange px-2 py-0.5 bg-accent-orange/5 rounded-full">
                    {activePage === "career" ? "Professional" : "Consulting"}
                  </span>
                </div>

                {/* Grid layout of options */}
                <div className="grid grid-cols-3 gap-3">
                  {currentItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        onMouseEnter={() => setTooltip(item.label)}
                        onMouseLeave={() => setTooltip(null)}
                        onClick={() => handleItemClick(item)}
                        className="aspect-square bg-neutral-light/50 hover:bg-accent-blue/10 border border-gray-100 hover:border-accent-blue/35 text-primary hover:text-accent-blue rounded-2xl flex flex-col items-center justify-center p-2.5 transition-all group cursor-pointer relative shadow-sm"
                        title={item.label}
                      >
                        <Icon className="w-5 h-5 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
                        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-gray-400 mt-1.5 select-none text-center leading-none">
                          {item.label.split(" ")[0]}
                        </span>
                      </motion.button>
                    );
                  })}

                  {/* Quick toggle page button */}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: currentItems.length * 0.05 }}
                    onMouseEnter={() => setTooltip(`Switch to ${activePage === "career" ? "Consulting" : "Portfolio"}`)}
                    onMouseLeave={() => setTooltip(null)}
                    onClick={handleTogglePage}
                    className="aspect-square bg-accent-orange/5 hover:bg-accent-orange/15 border border-accent-orange/15 hover:border-accent-orange/30 text-accent-orange rounded-2xl flex flex-col items-center justify-center p-2.5 transition-all group cursor-pointer shadow-sm"
                  >
                    <ArrowRightLeft className="w-5 h-5 group-hover:scale-110 group-hover:rotate-185 transition-transform" />
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-accent-orange/80 mt-1.5 select-none text-center leading-none">
                      {activePage === "career" ? "Consult" : "Portfolio"}
                    </span>
                  </motion.button>
                </div>

                {/* Active Tooltip / Helper readout */}
                <div className="h-6 mt-4 pt-2 border-t border-gray-100 flex items-center justify-center">
                  <p className="font-mono text-[9px] font-bold text-accent-blue uppercase tracking-wider">
                    {tooltip ? tooltip : "HOVER AN ICON TO SCOUT"}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Outer Vintage Compass Dial style trigger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer border relative group ${
            isOpen 
              ? "bg-primary text-white border-white/20" 
              : "bg-white hover:bg-neutral-light text-accent-blue border-gray-100"
          }`}
          title="Explore via Interactive Compass"
        >
          {/* Animated pulsing target reticle */}
          <span className="absolute inset-0 rounded-full border-2 border-accent-blue/10 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700" />
          
          <Compass 
            className={`w-5 h-5 transition-transform duration-700 ${
              isOpen ? "rotate-[360deg] text-accent-orange" : "group-hover:rotate-[180deg]"
            }`} 
          />
        </button>
      </div>
    </div>
  );
}
