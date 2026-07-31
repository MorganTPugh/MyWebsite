import { Skill, Experience, ImpactHighlight, Service, PersonalFact } from "./types";

export const IMPACT_HIGHLIGHTS: ImpactHighlight[] = [
  {
    metric: "73%",
    metricLabel: "YoY Growth",
    headline: "Creating an enterprise growth engine.",
    story: "Inherited a product that had been deprioritized for years. As a 4 person team, we rebuilt the go-to-market motion - redesigning and training on pricing methodologies, training 30+ sales teams on consultative strategies, and leading cross-functional coordination across dozens of teams. This has resulted in substantial growth rates for 4 years in a row, including 73% YoY for 2026, alongside brag-worthy profitability figures.",
    category: "GTM & Growth"
  },
  {
    metric: "1,000+",
    metricLabel: "Hours Saved",
    headline: "Modernized an entire post-sale process.",
    story: "Took on a post-sale process that was manual, inconsistent, and bogged down by legacy paperwork — creating friction for sales, clients, and brokers alike. Led a cross-functional overhaul across legal, compliance, sales, and implementation teams spanning 14+ markets: cut redundancies and page count, standardized documentation across states, and drove DocuSign adoption against real internal resistance. Result: 1,000+ hours saved annually across 30+ teams, and a faster experience for every client and broker in the process.",
    category: "Process & Change Management"
  },
  {
    metric: "500+",
    metricLabel: "Enabled Peers",
    headline: "Turned product knowledge into a company-wide capability.",
    story: "Solo-built and deployed a Custom GPT chatbot grounded in internal product documentation, rate tables, and process guides — writing the reference material myself and engineering prompt routing to surface accurate, department-specific answers instead of generic ones. Combined with custom product artifacts, it empowered 500+ employees to clearly explain our value proposition and simplify complex pricing conversations with external partners.",
    category: "AI & Enablement"
  },
  {
    metric: "2×",
    metricLabel: "Market Scale",
    headline: "Grew and managed a $15M+ portfolio.",
    story: "Joined Elevance Health to help launch the Colorado level-funded market. Built robust pricing frameworks, trained sales teams on level funding and ASO concepts, developed broker-specific strategies, and personally managed a $15M+ portfolio — all while the market more than doubled in size and continuously exceeded profitability targets.",
    category: "Risk Management & Finance"
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Strategy & Market Intelligence",
    skills: [
      "Competitive Analysis",
      "Go-To-Market Strategy",
      "Pricing Strategy",
      "Market Research",
      "Financial Analysis",
      "Revenue Optimization",
      "Business Case Development",
      "Competitive Positioning"
    ]
  },
  {
    title: "Product Operations",
    skills: [
      "Cross-Functional Program Management",
      "Requirements Gathering",
      "Roadmapping",
      "New Program/Pilot Launch",
      "QA & Testing",
      "Product Ownership",
      "Scrum Master (Certified)",
      "Sales Enablement"
    ]
  },
  {
    title: "Cross-Functional Leadership",
    skills: [
      "Matrix Management",
      "Stakeholder Alignment",
      "Executive Presentations",
      "Change Management",
      "Process Mapping & Workflow Redesign",
      "Operational Excellence",
      "Influencing Without Authority"
    ]
  },
  {
    title: "Data & Analytics",
    skills: [
      "Risk Assessment & Segmentation",
      "Predictive Model Evaluation",
      "Claims Data Analysis",
      "KPI Tracking",
      "Attrition Analysis",
      "Google Data Analytics (Certified)",
      "Data Storytelling",
      "Anomaly Detection"
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Salesforce Lightning",
      "Jira",
      "Smartsheet",
      "Airtable",
      "Notion",
      "Microsoft Visio",
      "Adobe Creative Suite",
      "Microsoft Suite",
      "Google Workspace",
      "Lucidcharts",
      "SharePoint",
      "HTML/CMS"
    ]
  },
  {
    title: "AI & Emerging Tech",
    skills: [
      "Claude Co-work",
      "Claude Code",
      "ChatGPT",
      "NotebookLM",
      "Gemini",
      "Prompt Engineering",
      "AI Context Engineering",
      "Custom Chatbot Development",
      "AI Prototyping & Development",
      "AI Workflow Automation"
    ]
  }
];

export const CAREER_TIMELINE: Experience[] = [
  {
    company: "Elevance Health",
    title: "Senior Business Change Manager",
    dates: "November 2025 – Present",
    location: "Denver, CO (Remote)",
    bullets: [
      "Drive cross-functional GTM execution across 30+ teams — including Legal, Finance, Engineering, Sales, and Actuarial — aligning stakeholders and accelerating commercial growth in a complex, matrixed organization.",
      "Achieved 73% YoY product membership growth by rebuilding the go-to-market strategy from the ground up: redesigning pricing methodologies, building stakeholder alignment frameworks, and coordinating execution across 14+ markets.",
      "Report on operational risk, KPI performance, and strategic progress to senior leadership, surfacing market-specific gaps and driving adoption of best practices across 14+ markets.",
      "Deeply understand customer needs through research, feedback, analytics, and market insights, translating those findings into product opportunities."
    ]
  },
  {
    company: "Elevance Health",
    title: "Product Manager",
    dates: "September 2022 – November 2025",
    location: "Denver, CO (Remote)",
    bullets: [
      "Spearheaded post-sale process modernization initiative saving ~1 hour per sold case for 80+ employees across 28 markets by leading DocuSign automation and complete documentation redesign.",
      "Led go-to-market strategy for level-funded product across 14 markets, overseeing pricing methodology redesign, sales training, competitive positioning, and customer experience improvements.",
      "Built and managed company-wide support infrastructure (mailbox + custom AI chatbot) enabling 500+ employees to conduct expert-level product conversations with external broker partners.",
      "Led a broader AI-assisted competitive intelligence effort — including a multi-year analysis of competitor 10-K filings alongside other market and pricing data — synthesizing findings into executive-ready strategy and contract negotiation recommendations."
    ]
  },
  {
    company: "Elevance Health",
    title: "Lead Risk & Underwriting Analyst",
    dates: "November 2019 – September 2022",
    location: "Denver, CO",
    bullets: [
      "Managed a rapidly growing, $15M+ block of business in the Colorado market, which doubled in scale during tenure, while exceeding profitability targets through data-informed pricing and continuous competitive analysis.",
      "Caught a systemic pharmacy claims underpricing flaw in a third-party predictive risk model that no one else, internal or external, had caught first — independently investigated 20+ affected cases, quantified the financial exposure, and escalated a formal analysis directly to the vendor, who confirmed the issue and shipped a patch.",
      "Built a cross-functional broker tracking and evaluation framework organically adopted across the company and embedded into renewal strategy workflows."
    ]
  },
  {
    company: "Cigna Healthcare",
    title: "Risk & Underwriting Analyst",
    dates: "January 2017 – November 2019",
    location: "Denver, CO",
    bullets: [
      "Applied advanced analytics to optimize profitability and retention for a multi-million-dollar book of commercial health insurance in the competitive Northern California market.",
      "Collaborated and negotiated with 20+ business partners daily to achieve new business goals while managing financial risk across groups under 500 lives."
    ]
  }
];

export const EDUCATION = {
  degree: "Bachelor of Science in Finance",
  school: "University of Kansas (School of Business)",
  additional: [
    "Certified ScrumMaster (CSM)",
    "Google Data Analytics Certificate",
    "40+ hours Project Management & Leadership Coursework"
  ]
};

export const PERSONAL_FACTS: PersonalFact[] = [
  { icon: "🌍", label: "8 countries, 25 states and counting" },
  { icon: "🐾", label: "Foster parent to 40+ dogs and cats" },
  { icon: "💰", label: "Financial independence advocate" }
];

export const SERVICES: Service[] = [
  {
    id: "project",
    title: "Managing Professional or Personal Projects",
    headline: "High-stakes operational execution brought to your biggest goals.",
    body: "My day job is coordinating cross-functional teams through high-stakes enterprise initiatives. I bring that exact operational rigor, timeline planning, and execution speed to your personal and small-business projects. Whether you have an initiative that feels overwhelming, has too many moving parts, or keeps stalling out — I can step in, map the system, establish milestones, set up smart tools or automated workflows, and get you across the finish line.",
    whatsIncluded: [
      "Project scoping & requirement definition",
      "Actionable timeline & dependency roadmaps",
      "Process mapping & standard operating procedures",
      "Workflow efficiency & smart tool setup",
      "Stakeholder, vendor & partner alignment",
      "Pragmatic risk management & workaround planning"
    ],
    iconName: "CheckSquare"
  },
  {
    id: "finance",
    title: "Personal Finance Coaching",
    headline: "Clarity on your money — without the jargon.",
    body: "With a Finance degree, a passion for personal finance, and years of corporate underwriting experience, I love helping people understand their numbers. Having reached Coast FIRE (Financial Independence, Retire Early) myself, I am passionate about helping others build strategies that serve their lives. Whether you want to build a budget that makes sense, understand your investment landscape, map out a major financial decision, or just get organized, I provide clean, objective, non-jargon spreadsheets and plans. *Note: I am not a licensed financial advisor; I provide educational support and strategic organization.*",
    whatsIncluded: [
      "Custom budget & cashflow creation",
      "Monthly spending & savings analysis",
      "Investment basics & allocation education",
      "Coast FIRE & full FIRE goal-setting",
      "Personal financial organization systems",
      "Strategic decision-support spreadsheets"
    ],
    iconName: "Coins"
  },
  {
    id: "travel",
    title: "Travel Planning",
    headline: "Trips that actually come together.",
    body: "I've planned international trips for groups of 2 to 12 across Portugal, Spain, Costa Rica, Mexico, Canada, Hawaii, and dozens of US destinations — including a 10-day micro-wedding in a remote corner of Costa Rica. I research obsessively, build detailed itineraries, and establish the right contingencies so things go smoothly even when travel plans pivot. If you have an adventure on the horizon and you want someone to handle the heavy lifting so you can just show up and enjoy, let's talk.",
    whatsIncluded: [
      "Destination research & vetting",
      "Detailed, custom-curated itineraries",
      "Accommodation & lodge selection",
      "Transportation & transfer logistics",
      "Restaurant & local experience bookings",
      "Comprehensive day-by-day contingency sheets"
    ],
    iconName: "Compass"
  },
  {
    id: "creative",
    title: "Creative & Special Projects",
    headline: "Visual polish and structured materials, made with care.",
    body: "From designing high-impact digital collateral to organizing custom events, I love bringing ideas to life visually and operationally. Whether you need fundraising flyers, informational packets, custom graphics, or a beautifully formatted handbook, I combine structural clarity with clean, modern design. I specialize in helping non-profits, local initiatives, and creative individuals present their best work to the world.",
    whatsIncluded: [
      "Custom flyer & poster design",
      "Event collateral & presentation slides",
      "Digital brochure & workbook formatting",
      "Non-profit outreach & fundraising materials",
      "Content layout & document design",
      "Promotional assets & graphic layouts"
    ],
    iconName: "Sparkles"
  }
];
