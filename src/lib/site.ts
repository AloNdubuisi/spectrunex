export const siteConfig = {
  name: "Spectrunex",
  legalName: "Spectrunex, LLC",
  domain: "spectrunex.com",
  url: "https://www.spectrunex.com",
  tagline: "Build. Maintain. Automate.",
  description:
    "Spectrunex delivers construction, commercial cleaning, custom software, mobile apps, and AI automation under one roof — helping organizations build, run, and modernize with a single trusted partner.",
  keywords: [
    "Spectrunex",
    "construction services",
    "commercial cleaning services",
    "custom software development",
    "mobile app development",
    "AI automation",
    "AI agents for business",
    "facilities and technology partner",
    "process automation",
  ],
  email: "hello@spectrunex.com",
  phone: "+1 (800) 555-0142",
  address: {
    street: "1201 Market Street, Suite 400",
    city: "Wilmington",
    region: "DE",
    postalCode: "19801",
    country: "US",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/spectrunex",
    twitter: "https://x.com/spectrunex",
  },
} as const;

export type Pillar = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
};

export const pillars: Pillar[] = [
  {
    id: "facilities",
    eyebrow: "Build & Maintain",
    title: "Construction & Facilities",
    description:
      "Ground-up construction, renovation, and ongoing commercial cleaning that keep physical spaces running the way your business needs them to.",
    bullets: [
      "Commercial Construction",
      "Renovation & Fit-Out",
      "Commercial Cleaning",
      "Facilities Maintenance",
    ],
  },
  {
    id: "digital",
    eyebrow: "Design & Develop",
    title: "Software & Mobile",
    description:
      "Custom software and mobile apps built for how your team actually works, from first prototype through production and long-term support.",
    bullets: [
      "Custom Software Development",
      "Mobile App Development",
      "Web & Cloud Platforms",
      "Product Design (UI/UX)",
    ],
  },
  {
    id: "automation",
    eyebrow: "Automate & Scale",
    title: "AI & Automation",
    description:
      "AI agents and workflow automation that remove repetitive work, connect your systems, and give your team time back.",
    bullets: [
      "AI Automation & Agents",
      "Workflow & Process Automation",
      "Systems Integration",
      "AI Strategy & Advisory",
    ],
  },
];

export type Service = {
  id: string;
  pillarId: string;
  title: string;
  summary: string;
  details: string[];
};

export const services: Service[] = [
  {
    id: "commercial-construction",
    pillarId: "facilities",
    title: "Commercial Construction",
    summary:
      "New builds and structural work delivered on schedule, with a single point of contact from permitting to final walkthrough.",
    details: [
      "Ground-up commercial construction",
      "Permitting and code compliance coordination",
      "General contracting and subcontractor management",
      "On-site project supervision",
    ],
  },
  {
    id: "renovation-fitout",
    pillarId: "facilities",
    title: "Renovation & Fit-Out",
    summary:
      "Office, retail, and facility renovations that minimize disruption to your ongoing operations.",
    details: [
      "Interior fit-out and space reconfiguration",
      "Phased renovation for occupied buildings",
      "Electrical, HVAC, and finish coordination",
      "Post-renovation inspection support",
    ],
  },
  {
    id: "commercial-cleaning",
    pillarId: "facilities",
    title: "Commercial Cleaning",
    summary:
      "Scheduled and on-demand cleaning programs for offices, facilities, and post-construction sites.",
    details: [
      "Recurring janitorial programs",
      "Post-construction and move-in cleaning",
      "Deep cleaning and sanitation",
      "Floor care and specialty surfaces",
    ],
  },
  {
    id: "custom-software",
    pillarId: "digital",
    title: "Custom Software Development",
    summary:
      "Web platforms and internal tools built around your actual workflow, not a generic template.",
    details: [
      "Product discovery and technical scoping",
      "Full-stack web application development",
      "API design and third-party integrations",
      "Ongoing maintenance and support",
    ],
  },
  {
    id: "mobile-apps",
    pillarId: "digital",
    title: "Mobile App Development",
    summary:
      "Native and cross-platform apps for iOS and Android, from first release through App Store maintenance.",
    details: [
      "iOS and Android app development",
      "Cross-platform builds (React Native)",
      "App Store and Play Store release management",
      "Post-launch updates and support",
    ],
  },
  {
    id: "web-cloud",
    pillarId: "digital",
    title: "Web & Cloud Platforms",
    summary:
      "Scalable web platforms and cloud infrastructure, designed and deployed by engineers who also maintain them.",
    details: [
      "Cloud architecture and deployment",
      "Performance and SEO-focused builds",
      "Database and infrastructure design",
      "DevOps and CI/CD pipelines",
    ],
  },
  {
    id: "ai-automation",
    pillarId: "automation",
    title: "AI Automation & Agents",
    summary:
      "AI agents that handle repetitive, well-defined work inside your existing systems.",
    details: [
      "AI agent design and deployment",
      "Customer support and internal-ops automation",
      "Document and data processing agents",
      "Human-in-the-loop workflow design",
    ],
  },
  {
    id: "process-automation",
    pillarId: "automation",
    title: "Workflow & Process Automation",
    summary:
      "Connecting the tools you already use so information moves without manual handoffs.",
    details: [
      "Business process mapping",
      "Workflow automation (RPA and no-code/low-code)",
      "Systems and API integration",
      "Automation monitoring and support",
    ],
  },
  {
    id: "ai-advisory",
    pillarId: "automation",
    title: "AI Strategy & Advisory",
    summary:
      "A clear, practical roadmap for where AI actually saves your organization time and money.",
    details: [
      "AI readiness assessment",
      "Use-case prioritization and roadmap",
      "Build-vs-buy guidance",
      "Team training and enablement",
    ],
  },
];

export const stats = [
  { label: "Services under one roof", value: "5" },
  { label: "Avg. client relationship", value: "3+ yrs" },
  { label: "Projects delivered", value: "120+" },
  { label: "Client satisfaction", value: "98%" },
];
