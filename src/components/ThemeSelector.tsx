import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Palette, Check, X, Sparkles } from "lucide-react";

interface ThemeOption {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string;
    accentOrange: string;
    accentBlue: string;
    textPrimary: string;
    textSecondary: string;
    neutralLight: string;
  };
}

const THEME_OPTIONS: ThemeOption[] = [
  {
    id: "classic-navy",
    name: "Midnight & Coral",
    description: "Vibrant high-contrast corporate prestige. Ultra-deep midnight background, blazing saturated coral, and brilliant electric blue.",
    colors: {
      primary: "#030C1B", // Much deeper midnight background for pristine black-room styling
      accentOrange: "#FF4E00", // True blazing coral/orange for ultimate CTA/metric pop
      accentBlue: "#00A3FF", // Saturated, clean electric sky blue (high-vibrancy)
      textPrimary: "#070E1A", // Absolute high-contrast near-black for light background copy
      textSecondary: "#475569", // Legible, crisp dark slate body text
      neutralLight: "#F5F8FC" // Luxurious ice-white container backgrounds
    }
  },
  {
    id: "sage-gold",
    name: "Sage & Satin Gold",
    description: "A prestigious, organic-modern consulting aesthetic. Deep forest obsidian green paired with warm satin gold.",
    colors: {
      primary: "#11221D",
      accentOrange: "#CFA43A",
      accentBlue: "#6C9484",
      textPrimary: "#1B2925",
      textSecondary: "#5B6B65",
      neutralLight: "#F2F6F4"
    }
  },
  {
    id: "espresso-rose",
    name: "Espresso & Rose Gold",
    description: "Warm, luxury editorial feel. Rich deep cocoa espresso paired with dusty rose and terracotta gold.",
    colors: {
      primary: "#1A1216",
      accentOrange: "#D98375",
      accentBlue: "#B19BA6",
      textPrimary: "#261C20",
      textSecondary: "#705E65",
      neutralLight: "#FAF5F7"
    }
  },
  {
    id: "nordic-mint",
    name: "Nordic Slate & Mint",
    description: "Architectural and highly modern. Deep ocean fjord slate background, saturated neon mint, and punchy true coral orange.",
    colors: {
      primary: "#0D151D", // Deep ocean fjord slate for maximum dark contrast
      accentOrange: "#FF4E00", // Highly saturated true coral/orange, reserved for main CTAs/metrics
      accentBlue: "#00E5A3", // Vivid, bright electric mint green (zero olive, high saturation)
      textPrimary: "#0C1115", // Crisp near-black for light background headlines
      textSecondary: "#475569", // Highly legible slate gray for body copy
      neutralLight: "#F1F5F9" // Clean slate off-white for cards
    }
  }
];

export default function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState<string>("classic-navy");

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved) {
      const exists = THEME_OPTIONS.some((t) => t.id === saved);
      if (exists) {
        applyTheme(saved);
      }
    }
  }, []);

  const applyTheme = (themeId: string) => {
    const theme = THEME_OPTIONS.find((t) => t.id === themeId);
    if (!theme) return;

    setActiveTheme(themeId);
    localStorage.setItem("portfolio-theme", themeId);

    // Apply variables to documentElement style
    const root = document.documentElement;
    root.style.setProperty("--color-primary", theme.colors.primary);
    root.style.setProperty("--color-accent-orange", theme.colors.accentOrange);
    root.style.setProperty("--color-accent-blue", theme.colors.accentBlue);
    root.style.setProperty("--color-text-primary", theme.colors.textPrimary);
    root.style.setProperty("--color-text-secondary", theme.colors.textSecondary);
    root.style.setProperty("--color-neutral-light", theme.colors.neutralLight);

    // Broadcast change for other components to adapt if needed
    window.dispatchEvent(new CustomEvent("theme-changed", { detail: themeId }));
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <div className="relative flex flex-col items-end">
        {/* Expanded Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 12 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white/90 border border-gray-100 rounded-2xl shadow-2xl p-5 mb-3 w-[310px] backdrop-blur-md text-left"
            >
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
                <div className="flex items-center gap-2">
                  <Palette className="w-4 h-4 text-accent-orange" />
                  <span className="font-mono text-xs font-black tracking-wider uppercase text-primary">
                    Live Palette Swapper
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3.5">
                {THEME_OPTIONS.map((theme) => {
                  const isActive = activeTheme === theme.id;
                  return (
                    <button
                      key={theme.id}
                      onClick={() => applyTheme(theme.id)}
                      className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-start gap-3 group cursor-pointer ${
                        isActive
                          ? "bg-primary text-white border-primary shadow-md"
                          : "bg-gray-50/50 hover:bg-gray-50 border-gray-100 text-text-primary"
                      }`}
                    >
                      {/* Color swatches */}
                      <div className="flex flex-col gap-1 mt-1 shrink-0">
                        <div className="flex gap-1">
                          <div
                            className="w-4 h-4 rounded-full border border-white/20"
                            style={{ backgroundColor: theme.colors.primary }}
                          />
                          <div
                            className="w-4 h-4 rounded-full border border-white/20"
                            style={{ backgroundColor: theme.colors.accentOrange }}
                          />
                        </div>
                        <div className="flex gap-1">
                          <div
                            className="w-4 h-4 rounded-full border border-white/20"
                            style={{ backgroundColor: theme.colors.accentBlue }}
                          />
                          <div
                            className="w-4 h-4 rounded-full border border-white/20"
                            style={{ backgroundColor: theme.colors.neutralLight }}
                          />
                        </div>
                      </div>

                      <div className="space-y-0.5 min-w-0">
                        <div className="flex items-center gap-1.5 justify-between">
                          <span
                            className={`block text-xs font-bold font-sans truncate ${
                              isActive ? "text-white" : "text-primary"
                            }`}
                          >
                            {theme.name}
                          </span>
                          {isActive && <Check className="w-3.5 h-3.5 text-accent-orange shrink-0" />}
                        </div>
                        <span
                          className={`block text-[10px] leading-relaxed line-clamp-2 ${
                            isActive ? "text-white/70" : "text-text-secondary"
                          }`}
                        >
                          {theme.description}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[10px] font-mono text-gray-400">
                <span>Select to preview instantly</span>
                <span className="flex items-center gap-1 text-accent-orange font-bold">
                  <Sparkles className="w-3 h-3 animate-pulse" /> Custom Premium
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Action Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-accent-orange hover:bg-accent-orange/95 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer border border-white/20 group relative"
          title="Swap Color Palette Preview"
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <>
              <Palette className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              {/* Pulsing indicator */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent-blue rounded-full border-2 border-white animate-bounce" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
