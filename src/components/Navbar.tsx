import { useState, useEffect } from "react";
import { Menu, X, Download, FileText, Briefcase, Sparkles } from "lucide-react";

interface NavbarProps {
  activePage: "career" | "consulting";
  setActivePage: (page: "career" | "consulting") => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ activePage, setActivePage, onScrollToSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (activePage !== "career") {
      setActivePage("career");
      // Give React a frame to switch pages before scrolling
      setTimeout(() => {
        onScrollToSection(sectionId);
      }, 50);
    } else {
      onScrollToSection(sectionId);
    }
  };

  const handlePageSwitch = (page: "career" | "consulting") => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isHeaderDark = isScrolled || activePage === "career";

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          id="nav-logo"
          onClick={() => handlePageSwitch("career")}
          className="flex items-center space-x-2.5 text-left group"
        >
          <div className="w-9 h-9 rounded-lg bg-accent-orange flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
            MP
          </div>
          <div>
            <span className={`block font-sans font-bold text-lg md:text-xl tracking-tight leading-none transition-colors duration-300 ${
              isHeaderDark ? "text-white" : "text-primary"
            }`}>
              Morgan Pugh
            </span>
            <span className={`block font-sans font-medium text-[10px] md:text-xs tracking-wider uppercase mt-1 transition-colors duration-300 ${
              isHeaderDark ? "text-accent-blue" : "text-accent-orange"
            }`}>
              {activePage === "career" ? "Strategic Operator" : "Consulting Partner"}
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {activePage === "career" ? (
            <>
              <button
                id="nav-about"
                onClick={() => handleNavClick("about")}
                className={`font-sans text-sm font-medium transition-colors cursor-pointer ${
                  isHeaderDark ? "text-white/80 hover:text-accent-orange" : "text-primary/80 hover:text-accent-orange"
                }`}
              >
                About
              </button>
              <button
                id="nav-impact"
                onClick={() => handleNavClick("impact")}
                className={`font-sans text-sm font-medium transition-colors cursor-pointer ${
                  isHeaderDark ? "text-white/80 hover:text-accent-orange" : "text-primary/80 hover:text-accent-orange"
                }`}
              >
                Impact
              </button>
              <button
                id="nav-skills"
                onClick={() => handleNavClick("skills")}
                className={`font-sans text-sm font-medium transition-colors cursor-pointer ${
                  isHeaderDark ? "text-white/80 hover:text-accent-orange" : "text-primary/80 hover:text-accent-orange"
                }`}
              >
                Skills
              </button>
              <button
                id="nav-experience"
                onClick={() => handleNavClick("experience")}
                className={`font-sans text-sm font-medium transition-colors cursor-pointer ${
                  isHeaderDark ? "text-white/80 hover:text-accent-orange" : "text-primary/80 hover:text-accent-orange"
                }`}
              >
                Experience
              </button>
            </>
          ) : (
            <button
              id="nav-portfolio-link"
              onClick={() => handlePageSwitch("career")}
              className={`font-sans text-sm font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                isHeaderDark ? "text-white/80 hover:text-accent-orange" : "text-primary/80 hover:text-accent-orange"
              }`}
            >
              <FileText className="w-4 h-4 text-accent-blue" />
              Career Portfolio
            </button>
          )}

          {/* Toggle Button for Consulting */}
          <button
            id="nav-consulting-toggle"
            onClick={() => handlePageSwitch(activePage === "career" ? "consulting" : "career")}
            className={`font-sans text-sm font-medium px-4 py-1.5 rounded-full border transition-all cursor-pointer flex items-center gap-2 ${
              activePage === "consulting"
                ? "bg-accent-blue/15 text-accent-blue border-accent-blue/30 hover:bg-accent-blue/25"
                : "bg-transparent text-accent-orange border-accent-orange/30 hover:border-accent-orange hover:bg-accent-orange/5"
            }`}
          >
            {activePage === "career" ? (
              <>
                <Sparkles className="w-3.5 h-3.5" />
                Consulting Services
              </>
            ) : (
              <>
                <Briefcase className="w-3.5 h-3.5" />
                View Full Resume
              </>
            )}
          </button>

          <button
            id="nav-contact"
            onClick={() => {
              if (activePage === "career") {
                onScrollToSection("contact");
              } else {
                const element = document.getElementById("consulting-contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={`font-sans text-sm font-medium transition-colors cursor-pointer ${
              isHeaderDark ? "text-white/80 hover:text-accent-orange" : "text-primary/80 hover:text-accent-orange"
            }`}
          >
            Contact
          </button>

          {/* Resume PDF Button */}
          <a
            id="nav-resume-btn"
            href="/resume.pdf"
            download="Morgan_Pugh_Resume.pdf"
            className="flex items-center space-x-1.5 bg-accent-orange text-white px-4.5 py-2 rounded-lg text-sm font-semibold hover:bg-accent-orange/90 transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex items-center space-x-3 md:hidden">
          <a
            id="nav-resume-mobile"
            href="/resume.pdf"
            download="Morgan_Pugh_Resume.pdf"
            className="p-2 bg-accent-orange/15 text-accent-orange rounded-lg"
            aria-label="Download Resume"
          >
            <Download className="w-4 h-4" />
          </a>
          <button
            id="nav-mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 transition-colors ${
              isHeaderDark ? "text-white hover:text-accent-orange" : "text-primary hover:text-accent-orange"
            }`}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden absolute top-full left-0 w-full bg-primary/98 backdrop-blur-lg border-b border-white/10 shadow-xl overflow-hidden py-6 px-6 flex flex-col space-y-4 animate-fade-in"
        >
          {activePage === "career" ? (
            <>
              <button
                id="mobile-nav-about"
                onClick={() => handleNavClick("about")}
                className="text-left font-sans text-base font-semibold text-white/90 hover:text-accent-orange py-2"
              >
                About
              </button>
              <button
                id="mobile-nav-impact"
                onClick={() => handleNavClick("impact")}
                className="text-left font-sans text-base font-semibold text-white/90 hover:text-accent-orange py-2"
              >
                Impact
              </button>
              <button
                id="mobile-nav-skills"
                onClick={() => handleNavClick("skills")}
                className="text-left font-sans text-base font-semibold text-white/90 hover:text-accent-orange py-2"
              >
                Skills & Expertise
              </button>
              <button
                id="mobile-nav-experience"
                onClick={() => handleNavClick("experience")}
                className="text-left font-sans text-base font-semibold text-white/90 hover:text-accent-orange py-2"
              >
                Experience Timeline
              </button>
            </>
          ) : (
            <button
              id="mobile-nav-portfolio"
              onClick={() => handlePageSwitch("career")}
              className="text-left font-sans text-base font-semibold text-white/90 hover:text-accent-orange py-2 flex items-center gap-2"
            >
              <FileText className="w-5 h-5 text-accent-blue" />
              Career Portfolio
            </button>
          )}

          {/* Toggle between views in mobile */}
          <button
            id="mobile-nav-toggle"
            onClick={() => handlePageSwitch(activePage === "career" ? "consulting" : "career")}
            className="text-left font-sans text-base font-semibold text-accent-orange py-2 flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            {activePage === "career" ? "Go to Consulting Services" : "Go to Career Portfolio"}
          </button>

          <button
            id="mobile-nav-contact"
            onClick={() => {
              setIsMobileMenuOpen(false);
              if (activePage === "career") {
                onScrollToSection("contact");
              } else {
                const element = document.getElementById("consulting-contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-left font-sans text-base font-semibold text-white/90 hover:text-accent-orange py-2"
          >
            Contact
          </button>

          <a
            id="mobile-nav-resume-download"
            href="/resume.pdf"
            download="Morgan_Pugh_Resume.pdf"
            className="flex items-center justify-center space-x-2 bg-accent-orange text-white w-full py-3 rounded-lg text-sm font-bold shadow-md"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF Resume</span>
          </a>
        </div>
      )}
    </header>
  );
}
