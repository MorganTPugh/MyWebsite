import { useState } from "react";
import { 
  Compass, 
  Coins, 
  CheckSquare, 
  Cpu, 
  ArrowRight, 
  Mail, 
  Linkedin, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { SERVICES } from "../data";

// Helper to render lucide icons dynamically based on name string
function ServiceIcon({ name, className }: { name: string; className: string }) {
  switch (name) {
    case "Compass":
      return <Compass className={className} />;
    case "Coins":
      return <Coins className={className} />;
    case "CheckSquare":
      return <CheckSquare className={className} />;
    case "Cpu":
      return <Cpu className={className} />;
    default:
      return <Sparkles className={className} />;
  }
}

export default function ConsultingPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInquireClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const element = document.getElementById("consulting-contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pt-20">
      {/* 1. Hero Section */}
      <section id="consulting-hero" className="relative py-24 md:py-32 bg-white overflow-hidden">
        {/* Subtle decorative grid background */}
        <div className="absolute inset-0 bg-grid-accent opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent-blue/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent-orange/5 blur-3xl" />

        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-accent-orange/10 border border-accent-orange/20 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-pulse" />
            <span className="font-sans text-[10px] md:text-xs font-bold text-accent-orange tracking-widest uppercase">
              Freelance Consulting & Coaching
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-primary leading-[1.15] tracking-tight max-w-4xl mx-auto">
            Expert help for the projects life{" "}
            <span className="text-accent-orange italic font-serif font-semibold">keeps putting on your plate.</span>
          </h1>

          <p className="font-sans text-text-secondary text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
            Freelance consulting for project management, personal finance coaching, travel planning, and creative projects 
            — delivered with the executive-level precision, strategic polish, and responsive execution I bring to complex enterprise operations.
          </p>

          <div className="flex justify-center pt-4">
            <button
              id="consulting-hero-cta"
              onClick={() => {
                const element = document.getElementById("consulting-services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-accent-orange text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-accent-orange/90 transition-all hover:-translate-y-0.5 cursor-pointer flex items-center gap-2 group"
            >
              <span>See What I Offer</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Services Section */}
      <section id="consulting-services" className="py-24 bg-neutral-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="max-w-3xl mx-auto mb-16 space-y-6">
            <div className="text-center space-y-3 mb-8">
              <span className="font-mono text-xs font-bold text-accent-orange tracking-widest uppercase">
                SERVICES
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-primary tracking-tight">
                What I can help you <span className="text-accent-orange italic font-serif font-semibold">with.</span>
              </h2>
            </div>
            
            <div className="font-sans text-text-secondary text-sm md:text-base leading-relaxed space-y-4 border-l-2 border-accent-orange/30 pl-5 md:pl-6 bg-white/40 p-6 rounded-r-2xl">
              <p>
                I&apos;ve spent years bringing order to complexity in the enterprise world — mapping messy systems, aligning teams, turning chaotic timelines into plans people can actually execute. Somewhere along the way I realized the same skills work just as well outside the office.
              </p>
              <p>
                Most people don&apos;t need less on their plate — they need a system for handling what&apos;s already there. That&apos;s what I&apos;m passionate about: taking something that feels overwhelming — a stalled project, a confusing budget, a 12-person trip, a fundraising deck due Friday — and turning it into a clear, doable plan. Less stress. More time back. Actual progress instead of spinning your wheels.
              </p>
              <p>
                Whether it&apos;s logistics, finances, travel, or a piece of creative work that needs to look as good as the thinking behind it, I bring the same thing to all of it: structure, follow-through, and an obsessive attention to the details that make things actually work.
              </p>
              <p className="font-semibold text-primary">
                If it feels like too many moving parts, that&apos;s usually where I do my best work. Let&apos;s talk about what&apos;s on your plate.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => {
              const organicClass = index % 3 === 0 
                ? 'rounded-organic-1 hover:rounded-organic-2' 
                : index % 3 === 1 
                  ? 'rounded-organic-2 hover:rounded-organic-3' 
                  : 'rounded-organic-3 hover:rounded-organic-1';
              return (
                <div 
                  key={service.id}
                  className={`bg-white p-8 md:p-10 ${organicClass} border border-gray-100/85 shadow-md hover:shadow-xl hover:shadow-accent-orange/[0.02] transition-all duration-500 flex flex-col justify-between`}
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-organic-1 bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                        <ServiceIcon name={service.iconName} className="w-6 h-6" />
                      </div>
                      <span className="font-sans text-[11px] font-bold text-accent-orange uppercase bg-accent-orange/5 px-3 py-1 rounded-full">
                        Custom Scoped
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl md:text-2xl font-bold font-serif text-primary">
                        {service.title}
                      </h3>
                      <p className="font-mono text-xs font-bold text-accent-blue">
                        {service.headline}
                      </p>
                    </div>

                    <p className="font-sans text-text-secondary text-sm md:text-base leading-relaxed">
                      {service.body}
                    </p>

                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="font-sans font-bold text-xs uppercase text-primary tracking-wider mb-3">
                        What&apos;s Included:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.whatsIncluded.map((item, idx) => (
                          <li key={idx} className="font-sans text-xs text-text-secondary flex items-start">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue shrink-0 mt-0.5 mr-1.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      id={`inquire-${service.id}`}
                      onClick={() => handleInquireClick(service.title)}
                      className="w-full bg-primary hover:bg-primary/95 text-white font-bold py-3 rounded-xl text-sm transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-sm"
                    >
                      <span>Inquire About {service.title}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="font-mono text-xs font-bold text-accent-orange tracking-widest uppercase">
              METHODOLOGY
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-primary tracking-tight">
              Simple process, <span className="text-accent-blue italic font-serif font-semibold">real results.</span>
            </h2>
            <p className="font-sans text-text-secondary text-sm md:text-base">
              A straightforward, transparent, and timeline-driven approach to solving problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="p-6 bg-neutral-light/60 rounded-organic-1 hover:rounded-organic-2 border border-gray-200/60 text-center relative space-y-4 transition-all duration-500 hover:-translate-y-1 shadow-md hover:shadow-xl">
              <div className="w-10 h-10 rounded-full bg-accent-orange text-white font-serif font-bold flex items-center justify-center mx-auto shadow-sm">
                1
              </div>
              <h3 className="font-serif font-bold text-lg text-primary">
                Reach out
              </h3>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">
                Send a quick message telling me what you are working on, where you feel stuck, and what you are looking to achieve.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 bg-neutral-light/60 rounded-organic-2 hover:rounded-organic-3 border border-gray-200/60 text-center relative space-y-4 transition-all duration-500 hover:-translate-y-1 shadow-md hover:shadow-xl">
              <div className="w-10 h-10 rounded-full bg-accent-blue text-white font-serif font-bold flex items-center justify-center mx-auto shadow-sm">
                2
              </div>
              <h3 className="font-serif font-bold text-lg text-primary">
                We scope it
              </h3>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">
                We will have a quick 15-minute alignment conversation to clarify the specific deliverables, outline timelines, and agree on a fair rate.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 bg-neutral-light/60 rounded-organic-3 hover:rounded-organic-1 border border-gray-200/60 text-center relative space-y-4 transition-all duration-500 hover:-translate-y-1 shadow-md hover:shadow-xl">
              <div className="w-10 h-10 rounded-full bg-primary text-white font-serif font-bold flex items-center justify-center mx-auto shadow-sm">
                3
              </div>
              <h3 className="font-serif font-bold text-lg text-primary">
                I get to work
              </h3>
              <p className="font-sans text-text-secondary text-sm leading-relaxed">
                I map out the plan, build the custom systems and solutions, and hand over a complete, highly organized package with zero downstream stress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Inquiry / Contact Section */}
      <section id="consulting-contact" className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-accent-blue/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-accent-orange/10 blur-3xl" />

        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 space-y-8">
          <div className="text-center space-y-3">
            <span className="font-mono text-xs font-bold text-accent-orange tracking-widest uppercase">
              START A PROJECT
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold tracking-tight text-white">
              Ready to <span className="text-accent-orange italic font-serif font-semibold">clear your backlog?</span>
            </h2>
          </div>

          <p className="font-sans text-white/70 text-base md:text-lg max-w-2xl mx-auto text-center leading-relaxed">
            {selectedService ? (
              <span>
                You are inquiring about my <strong className="text-accent-orange">{selectedService}</strong> service. 
                Let&apos;s build a custom plan that fits your exact timelines.
              </span>
            ) : (
              <span>
                Whether you have an international trip, personal finances to untangle, a project to get over the finish line, 
                or creative goals you want to realize — let&apos;s talk.
              </span>
            )}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 text-left items-start">
            {/* Left side: Information (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl text-xs font-mono text-white/80 leading-relaxed">
                💡 Pricing is entirely tailored to your unique requirements. Fill out the form, and we can discuss the perfect set of deliverables and pricing based on your specific needs.
              </div>

              {/* LinkedIn Card */}
              <a 
                id="consulting-linkedin-link"
                href="https://www.linkedin.com/in/morgan-pugh/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1 group flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-blue/25 flex items-center justify-center text-accent-blue shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="block font-mono text-[10px] uppercase font-bold text-white/50">LinkedIn Messaging</span>
                  <span className="block font-sans text-sm font-semibold text-white group-hover:text-accent-blue transition-colors">
                    linkedin.com/in/morgan-pugh
                  </span>
                </div>
              </a>

              {/* Denver Location Card */}
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

              {selectedService && (
                <div className="pt-2 text-center lg:text-left">
                  <button
                    id="clear-inquiry-selection"
                    onClick={() => setSelectedService(null)}
                    className="font-mono text-xs text-white/40 hover:text-white/60 underline cursor-pointer"
                  >
                    Reset custom inquiry selection
                  </button>
                </div>
              )}
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
                  {selectedService && (
                    <div className="bg-accent-orange/15 border border-accent-orange/30 p-3 rounded-xl flex items-center justify-between">
                      <span className="font-sans text-xs text-white">
                        Inquiry For: <strong className="text-accent-orange font-semibold">{selectedService}</strong>
                      </span>
                      <button 
                        type="button"
                        onClick={() => setSelectedService(null)}
                        className="text-[10px] font-mono text-white/40 hover:text-white"
                      >
                        [clear]
                      </button>
                    </div>
                  )}

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
                    <input 
                      type="text"
                      required
                      value={selectedService ? `Consulting: ${selectedService}` : "General Consulting Inquiry"}
                      disabled
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/60 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase font-bold text-white/60 mb-1.5">
                      Tell me about your project
                    </label>
                    <textarea 
                      required
                      rows={4}
                      placeholder={selectedService ? `What are your main goals with ${selectedService}?` : "Tell me a little about where you are stuck or what you need help with..."}
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
                        Sending Inquiry...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Send Inquiry</span>
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
                    <h3 className="font-sans font-bold text-xl text-white">Inquiry Received!</h3>
                    <p className="font-sans text-white/70 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-accent-orange font-semibold">{formName}</strong>. Your consulting inquiry has been received. I will review the details and get back to you at <strong className="text-white font-semibold">{formEmail}</strong> within 48 hours with next steps!
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
