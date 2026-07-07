import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import CareerPage from "./components/CareerPage";
import ConsultingPage from "./components/ConsultingPage";
import Footer from "./components/Footer";
import ThemeSelector from "./components/ThemeSelector";
import NavigationCompass from "./components/NavigationCompass";

export default function App() {
  const [activePage, setActivePage] = useState<"career" | "consulting">("career");

  // Keep page title in sync with active page
  useEffect(() => {
    if (activePage === "career") {
      document.title = "Morgan Pugh | Strategy & Operations Leader | Denver, CO";
    } else {
      document.title = "Morgan Pugh | Freelance Consulting — Travel, Finance & AI Workflows";
    }
  }, [activePage]);

  // Set up an IntersectionObserver to reveal items on scroll dynamically
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
    );

    // Give time for pages to switch and render elements
    const elementsToObserve = document.querySelectorAll(".reveal-on-scroll");
    elementsToObserve.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      elementsToObserve.forEach((el) => observer.unobserve(el));
    };
  }, [activePage]);

  // Handle smooth scroll to section on career page
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between selection:bg-accent-orange/20 selection:text-text-primary">
      {/* 1. Header Navigation */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        onScrollToSection={handleScrollToSection} 
      />

      {/* 2. Main Platform Space with smooth animations */}
      <main className="grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {activePage === "career" ? (
              <CareerPage 
                onScrollToSection={handleScrollToSection} 
                onNavigateToConsulting={() => {
                  setActivePage("consulting");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }} 
              />
            ) : (
              <ConsultingPage />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Global Footer */}
      <Footer />

      {/* 4. Live Interactive Color Theme Swapper */}
      <ThemeSelector />

      {/* 5. Experimental Navigation Compass */}
      <NavigationCompass 
        activePage={activePage}
        setActivePage={setActivePage}
        onScrollToSection={handleScrollToSection}
      />
    </div>
  );
}
