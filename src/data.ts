import { Skill, Experience, ImpactHighlight, Service, PersonalFact } from "./types";

export const IMPACT_HIGHLIGHTS: ImpactHighlight[] = [
  {
    metric: "73%",
    metricLabel: "YoY Growth",
    headline: "From neglected product to enterprise growth engine.",
    story: "Inherited a level-funded health product that had been largely deprioritized for years. Rebuilt the go-to-market motion from the ground up — redesigning pricing methodologies, training 30+ sales teams on consultative strategies, and leading cross-functional coordination across 28 markets. Resulted in 73% year-over-year membership growth and substantial profitability improvement.",
    category: "GTM & Growth"
  },
  {
    metric: "1,000+",
    metricLabel: "Hours Saved",
    headline: "Post-sale chaos turned into streamlined automation.",
    story: "Our post-sale process was a 22-page paper nightmare that brokers hated and internal teams dreaded. I led a cross-functional initiative across legal, compliance, implementation, and sales support spanning 28+ markets to redesign the entire application process, eliminate redundant documentation, and deploy DocuSign within Salesforce. Saved ~1 hour per sold case for 80+ employees, every single time.",
    category: "Process Automation"
  },
  {
    metric: "2×",
    metricLabel: "Market Scale",
    headline: "Built a $15M+ market portfolio from near scratch.",
    story: "Joined Elevance Health to help launch the Colorado level-funded market. Built robust pricing frameworks, trained sales teams on level funding and ASO concepts, developed broker-specific strategies, and personally managed a $15M+ portfolio — all while the market more than doubled in size and continuously exceeded profitability targets.",
    category: "Portfolio & Finance"
  },
  {
    metric: "500+",
    metricLabel: "Enabled Peers",
    headline: "Turned product knowledge into a company-wide capability.",
    story: "Built and managed a centralized support system — including custom product artifacts to get teams on the same page and an AI chatbot grounded in product documentation — empowering 500+ employees to clearly explain our value proposition to hundreds of external partners. Created high-impact sales enablement resources that reduced escalations, simplified complex pricing, and made everyone's jobs easier.",
    category: "AI & Enablement"
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
      "Product Lifecycle Management",
      "Requirements Gathering",
      "Roadmapping",
      "Release Management",
      "QA & Testing",
      "Product Ownership",
      "Sprint Cycles",
      "Scrum Master (Certified)",
      "Sales Enablement",
      "Customer Journey & Touchpoint Mapping"
    ]
  },
  {
    title: "Cross-Functional Leadership",
    skills: [
      "Matrix Management",
      "Stakeholder Alignment",
      "Executive Presentations",
      "Change Management",
      "Process Improvement",
      "Operational Excellence",
      "Workflow Automation",
      "Influencing Without Authority"
    ]
  },
  {
    title: "Data & Analytics",
    skills: [
      "Risk Modeling",
      "Predictive Analytics",
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
      "Custom Chatbot Development",
      "RAG Deployment",
      "AI Workflow Automation",
      "AI Document Analysis"
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
      "Drive cross-functional product operations across 30+ teams, coordinating Product, Legal, Finance, Engineering, Sales, and Actuarial functions to ensure GTM alignment and smooth commercial launches.",
      "Achieved 73% YoY product membership growth through scalable release management, stakeholder frameworks, and cross-departmental gate reviews.",
      "Report on operational risk, KPI outcomes, and strategic progress directly to the Senior Leadership Team, identifying market-specific gaps and driving adoption of operational best practices across 28+ markets."
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
      "Conducted extensive competitive analysis, customer attrition studies, and financial risk modeling to inform long-term product strategy and contract negotiation approaches."
    ]
  },
  {
    company: "Elevance Health",
    title: "Lead Risk & Underwriting Analyst",
    dates: "November 2019 – September 2022",
    location: "Denver, CO",
    bullets: [
      "Managed a rapidly growing, $15M+ block of business in the Colorado market, which doubled in scale during tenure, while exceeding profitability targets through data-informed pricing and continuous competitive analysis.",
      "Independently identified critical blind spots in a third-party predictive risk scoring system — investigated 20–50 affected cases, documented financial exposure, escalated formally to the vendor, and successfully secured a confirmed system patch.",
      "Built a cross-functional broker tracking and evaluation framework (Excel-based) organically adopted across the company and embedded into renewal strategy workflows."
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
  { icon: "🌍", label: "37+ countries and counting" },
  { icon: "🐾", label: "Foster parent to 10+ dogs and cats" },
  { icon: "🏔️", label: "Based in Denver, CO — the mountains are the commute" }
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
