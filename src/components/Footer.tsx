import { Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="global-footer" className="bg-primary text-white py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Credit */}
        <div className="text-center md:text-left space-y-1">
          <p className="font-sans text-sm text-white/75">
            &copy; 2026 Morgan Pugh &middot; Denver, CO
          </p>
          <p className="font-mono text-[10px] text-white/40 tracking-wider uppercase">
            Strategic Change Management & Operational Precision
          </p>
        </div>

        {/* Center: Private Portal Previews */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
          <a 
            href="/projects/" 
            className="text-white/40 hover:text-accent-orange hover:scale-105 transition-all py-1 px-2 border border-white/5 hover:border-accent-orange/20 rounded-md bg-white/[0.01]"
          >
            Projects
          </a>
          <a 
            href="/travel/" 
            className="text-white/40 hover:text-accent-blue hover:scale-105 transition-all py-1 px-2 border border-white/5 hover:border-accent-blue/20 rounded-md bg-white/[0.01]"
          >
            Travel Curation
          </a>
          <a 
            href="/money/" 
            className="text-white/40 hover:text-accent-orange hover:scale-105 transition-all py-1 px-2 border border-white/5 hover:border-accent-orange/20 rounded-md bg-white/[0.01]"
          >
            Money Coaching
          </a>
        </div>

        {/* Right Contact Icons */}
        <div className="flex items-center space-x-4">
          <a
            id="footer-email"
            href="mailto:morgantpugh3@gmail.com"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent-orange/20 text-white hover:text-accent-orange flex items-center justify-center transition-all border border-white/10"
            aria-label="Email Morgan"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            id="footer-linkedin"
            href="https://www.linkedin.com/in/morgan-pugh/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-accent-blue/20 text-white hover:text-accent-blue flex items-center justify-center transition-all border border-white/10"
            aria-label="Connect on LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
