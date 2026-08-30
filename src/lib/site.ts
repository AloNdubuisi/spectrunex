// src/lib/site.ts
export const siteConfig = {
  name: "Spectrunex",
  legalName: "Spectrunex Networks, LLC",
  domain: "spectrunex.com",
  url: "https://www.spectrunex.com",
  tagline: "Leader in Enterprise Cyber Protection & AI-Powered Infrastructure",
  description:
    "Spectrunex delivers unified enterprise cybersecurity, precision AI automation, cloud security, and next-generation infrastructure — protecting organizations from code to cloud and edge to endpoint.",
  keywords: [
    "Spectrunex",
    "Cybersecurity Leader",
    "Network Security",
    "Cloud Security",
    "Security Operations",
    "Precision AI",
    "Zero Trust Architecture",
    "Next-Gen Firewall",
    "Cortex XSIAM",
    "Prisma Cloud",
    "Unit 42 Threat Intelligence",
    "AI Automation",
  ],
  email: "contact@spectrunex.com",
  phone: "+1 (800) 732-8786",
  address: {
    street: "3000 Tannery Way",
    city: "Santa Clara",
    region: "CA",
    postalCode: "95054",
    country: "US",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/spectrunex",
    twitter: "https://x.com/spectrunex",
    youtube: "https://www.youtube.com/spectrunex",
  },
} as const;

export type PlatformPillar = {
  id: string;
  name: string;
  trademark: string;
  category: string;
  eyebrow: string;
  tagline: string;
  description: string;
  badge: string;
  stats: { label: string; value: string };
  features: string[];
  copilotName: string;
};

export const flagshipPlatforms: PlatformPillar[] = [
  {
    id: "strata",
    name: "Strata",
    trademark: "Strata™",
    category: "Network Security",
    eyebrow: "AI-Powered Network Security",
    tagline: "Prevent unknown zero-day threats in real-time across your entire network.",
    description:
      "Transform your network defense with machine-learning-driven Next-Generation Firewalls, unified Strata Cloud Manager, and Zero Trust access across edge, data center, and branch locations.",
    badge: "Next-Gen Firewall & SASE",
    stats: { label: "Zero-Day Inline Prevention", value: "99.9%" },
    features: [
      "AI-Powered Next-Gen Firewalls (Hardware & Virtual)",
      "Strata Cloud Manager with AI-driven operations",
      "Advanced Threat Prevention & DNS Security",
      "Zero Trust Network Architecture (ZTNA 2.0)",
    ],
    copilotName: "Strata Copilot",
  },
  {
    id: "prisma",
    name: "Prisma",
    trademark: "Prisma® Cloud",
    category: "Cloud Security",
    eyebrow: "Code to Cloud Protection",
    tagline: "Secure applications, infrastructure, and AI workloads across multi-cloud.",
    description:
      "A complete Cloud Native Application Protection Platform (CNAPP) with Prisma AIRS to protect AI models, supply chain vulnerabilities, container runtimes, and cloud permissions.",
    badge: "CNAPP & AI Security (AIRS)",
    stats: { label: "Cloud Threat Reduction", value: "85%" },
    features: [
      "AI Security (Prisma AIRS) & LLM Defense",
      "Cloud Security Posture Management (CSPM)",
      "Cloud Workload Protection & Container Defense",
      "Code Security & Supply Chain Vulnerability Scan",
    ],
    copilotName: "Prisma Cloud Copilot",
  },
  {
    id: "cortex",
    name: "Cortex",
    trademark: "Cortex®",
    category: "Security Operations",
    eyebrow: "Autonomous SecOps with XSIAM",
    tagline: "Revolutionize the SOC with AI-first security operations and automation.",
    description:
      "Empower your SecOps team with Cortex XSIAM. Replace legacy SIEMs with autonomous incident triage, multi-source telemetry correlation, and instant threat neutralization.",
    badge: "AI-Driven SOC & XSIAM",
    stats: { label: "MTTR Reduction", value: "92%" },
    features: [
      "Cortex XSIAM (Extended Security Intelligence)",
      "Cortex XDR (Detection & Automated Response)",
      "Cortex XSOAR (Security Orchestration)",
      "Unit 42 Managed Threat Hunting & Incident Response",
    ],
    copilotName: "Cortex Copilot",
  },
];

export const services = flagshipPlatforms.map((p) => ({
  id: p.id,
  title: p.trademark,
  summary: p.description,
  details: p.features,
}));

export const pillars = flagshipPlatforms.map((p) => ({
  id: p.id,
  title: p.trademark,
  description: p.description,
  href: "/services",
}));

export const telemetryStats = [
  { value: "65,000+", label: "Global Enterprises Protected", sub: "Across 150+ countries" },
  { value: "4.8B+", label: "Daily Attacks Prevented", sub: "Inline deep learning & AI" },
  { value: "< 10ms", label: "Autonomous Remediation", sub: "Real-time Precision AI™ action" },
  { value: "#1 Leader", label: "Gartner® Magic Quadrant™", sub: "Network & Cloud Security" },
];

export const threatIntelligenceNews = [
  {
    id: "unit42-report-2026",
    tag: "Unit 42 Threat Brief",
    title: "2026 Ransomware Threat Report: State-Sponsored AI Attack Vectors",
    desc: "Detailed telemetry analysis of multi-stage autonomous intrusions and actionable remediation defense strategies.",
    date: "August 2026",
    readTime: "6 min read",
    author: "Unit 42 Threat Research Team",
  },
  {
    id: "prisma-airs-whitepaper",
    tag: "AI Security Advisory",
    title: "Securing Generative AI Pipelines: Mitigating Prompt Injections & Model Theft",
    desc: "Architectural guidelines for deploying enterprise LLMs safely with Prisma AIRS security control planes.",
    date: "July 2026",
    readTime: "8 min read",
    author: "Cloud Security Architecture Group",
  },
  {
    id: "xsiam-soc-benchmark",
    tag: "SecOps Benchmark",
    title: "From 48 Hours to 3 Minutes: The ROI of Autonomous SOC Operations",
    desc: "How Global 2000 enterprises slashed Mean Time to Respond (MTTR) by 92% utilizing Cortex XSIAM.",
    date: "June 2026",
    readTime: "5 min read",
    author: "SecOps Engineering Practice",
  },
];