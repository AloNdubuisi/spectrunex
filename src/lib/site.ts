// src/lib/site.ts
export const siteConfig = {
  name: "Spectrunex",
  legalName: "Spectrunex Networks, LLC",
  domain: "spectrunex.com",
  url: "https://www.spectrunex.com",
  tagline: "Information Security, Compliance & Mission Support Services",
  description:
    "Spectrunex delivers information security, FedRAMP and DoD DISA advisory, cybersecurity staffing, ITSM support, cloud services, application development, and hardware support to Federal, State, and commercial customers.",
  keywords: [
    "Spectrunex",
    "Information Security",
    "FedRAMP Advisory",
    "DoD DISA Advisory",
    "FISMA Compliance",
    "Assessment and Authorization",
    "Cybersecurity Staffing",
    "ITSM Support Services",
    "Cloud Services",
    "Risk Management Framework",
    "Federal IT Services",
    "Information Assurance",
  ],
  email: "contracts@spectrunex.com",
  phone: "(202) 948-9063",
  address: {
    street: "8101 Sandy Spring Rd, Laurel, MD 20707",
    city: "Laurel",
    region: "MD",
    postalCode: "20707",
    country: "US",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/spectrunex",
    twitter: "https://x.com/spectrunex",
    youtube: "https://www.youtube.com/spectrunex",
  },
} as const;

export type ServicePillar = {
  id: string;
  name: string;
  label: string;
  category: string;
  eyebrow: string;
  tagline: string;
  description: string;
  badge: string;
  stats: { label: string; value: string };
  features: string[];
  href: string;
};

/* Spectrunex's own service lines. Each entry mirrors a page under
   /services and feeds the JSON-LD offer catalog. */
export const servicePillars: ServicePillar[] = [
  {
    id: "fedramp-disa-advisory",
    name: "Advisory",
    label: "FedRAMP & DoD DISA® Advisory Services",
    category: "Authorization Readiness",
    eyebrow: "Independent Advisory",
    tagline: "Prepare your cloud service for assessment and authorization.",
    description:
      "Independent advisors guide your organization through the FedRAMP and DoD DISA lifecycle — go-to-market strategy, boundary scoping, compliance gap analysis, remediation and architecture support, and navigating the assessment itself.",
    badge: "FedRAMP & DoD DISA",
    stats: { label: "Lifecycle Coverage", value: "End-to-End" },
    features: [
      "Go-to-market strategy and boundary scoping",
      "Compliance gap analysis and remediation planning",
      "Security architecture support",
      "Assessment navigation and package support",
    ],
    href: "/services/fedramp-disa-advisory",
  },
  {
    id: "cyber-security",
    name: "Cyber Security",
    label: "Cyber Security & Information Assurance",
    category: "Information Assurance",
    eyebrow: "Certified Practitioners",
    tagline: "Protect information and property across the full lifecycle.",
    description:
      "Certified professionals deliver information assurance across the SDLC and every infrastructure layer — Assessment & Authorization, FISMA compliance and audit reviews, HSPD-12 support, and risk and vulnerability assessment.",
    badge: "Information Assurance",
    stats: { label: "Framework Alignment", value: "NIST / FISMA" },
    features: [
      "Assessment and Authorization (A&A) and ATO support",
      "FISMA compliance and audit reviews",
      "Risk and vulnerability assessment and reviews",
      "IT security policy, procedures, and standards development",
    ],
    href: "/services/cyber-security",
  },
  {
    id: "cloud-services",
    name: "Cloud",
    label: "Cloud Services",
    category: "Multi-Cloud Infrastructure",
    eyebrow: "Federal Cloud First",
    tagline: "Meet Cloud First mandates with secure, governed architectures.",
    description:
      "PaaS, SaaS, and IaaS delivery backed by infrastructure virtualization, application and website migration, virtual desktop services, and private, public, and hybrid cloud support — with security frameworks aligned to FISMA, FIPS, HSPD-12, and NIST.",
    badge: "PaaS / SaaS / IaaS",
    stats: { label: "Deployment Models", value: "Public / Private / Hybrid" },
    features: [
      "Cloud solutions and services (PaaS, SaaS, IaaS)",
      "Infrastructure virtualization and virtual desktops",
      "Website and application migration",
      "Cloud security strategy and identity management",
    ],
    href: "/services/cloud-services",
  },
  {
    id: "itsm-support-services",
    name: "ITSM",
    label: "ITSM Support Services",
    category: "Service Management",
    eyebrow: "ITIL-Based Methodology",
    tagline: "Align operations and maintenance support with mission objectives.",
    description:
      "An ITIL-based IT Service Management practice covering Tier 0-4 service desk management, incident and problem management, transition to operations, configuration management, and continuous process improvement.",
    badge: "ITIL Tier 0-4",
    stats: { label: "Service Desk Coverage", value: "Tier 0-4" },
    features: [
      "Tier 0-4 service desk management",
      "Incident and problem management",
      "Transition to operations and operations support",
      "Configuration management and continuous improvement",
    ],
    href: "/services/itsm-support-services",
  },
  {
    id: "staffing-agency-services",
    name: "Staffing",
    label: "Staffing Agency Services",
    category: "Talent Solutions",
    eyebrow: "Cybersecurity Workforce",
    tagline: "Bridge the gap between talent and opportunity.",
    description:
      "Tailored cybersecurity staffing for employers and job seekers across the public and private sectors, backed by specialist recruiters, international sourcing reach, and flexible, cost-effective engagement models.",
    badge: "Public & Private Sector",
    stats: { label: "Sourcing Reach", value: "50+ Countries" },
    features: [
      "Specialist cybersecurity recruiting",
      "Global talent sourcing",
      "Flexible, cost-effective engagement models",
      "Employer and candidate placement support",
    ],
    href: "/services/staffing-agency-services",
  },
  {
    id: "application-software-development",
    name: "Development",
    label: "Application & Software Development",
    category: "Engineering & Modernization",
    eyebrow: "Full Lifecycle Engineering",
    tagline: "Build, modernize, and maintain mission applications.",
    description:
      "End-to-end software engineering for federal and enterprise programs — application development, maintenance, support, modernization, and ongoing application management across the full lifecycle.",
    badge: "Custom Engineering",
    stats: { label: "Lifecycle Stages", value: "Build to Sustain" },
    features: [
      "Application development and management",
      "Application maintenance and support",
      "Legacy modernization and application infusion",
      "Production support and sustainment",
    ],
    href: "/services/application-software-development",
  },
  {
    id: "hardware-sales-support",
    name: "Hardware",
    label: "Hardware Sales & Support",
    category: "Lifecycle Management",
    eyebrow: "Sourcing to Sustainment",
    tagline: "Source, install, and maintain enterprise infrastructure.",
    description:
      "Sourcing, delivery, installation, and maintenance of enterprise hardware — data centre and structured cabling systems, network switching and firewalls, endpoint security tooling, and PC, server, and storage systems.",
    badge: "Enterprise Hardware",
    stats: { label: "Coverage", value: "Source to Maintain" },
    features: [
      "Data centre and structured cabling systems",
      "Network switching, routing, wireless, and firewalls",
      "PC, server, and storage systems",
      "Equipment maintenance and support",
    ],
    href: "/services/hardware-sales-support",
  },
];

export const services = servicePillars.map((p) => ({
  id: p.id,
  title: p.label,
  summary: p.description,
  details: p.features,
}));

export const pillars = [
  {
    id: "compliance",
    eyebrow: "Compliance & Advisory",
    title: "Authorization & Information Assurance",
    description:
      "FedRAMP and DoD DISA advisory, Assessment & Authorization support, and FISMA compliance for regulated environments.",
    bullets: [
      "FedRAMP and DoD DISA lifecycle advisory",
      "Assessment & Authorization and ATO support",
      "Risk and vulnerability assessment",
    ],
    href: "/services",
  },
  {
    id: "operations",
    eyebrow: "Operations & Support",
    title: "ITSM, Cloud & Infrastructure",
    description:
      "ITIL-based service management, secure cloud delivery, and enterprise hardware sourcing and maintenance.",
    bullets: [
      "Tier 0-4 service desk and operations support",
      "PaaS, SaaS, and IaaS cloud delivery",
      "Hardware sourcing, installation, and maintenance",
    ],
    href: "/services",
  },
  {
    id: "workforce",
    eyebrow: "Workforce & Engineering",
    title: "Staffing & Application Development",
    description:
      "Cybersecurity staffing across the public and private sectors, plus full-lifecycle application engineering.",
    bullets: [
      "Specialist cybersecurity recruiting and placement",
      "Custom application development and modernization",
      "Ongoing maintenance and production support",
    ],
    href: "/services",
  },
];

export const stats = [
  { value: "7", label: "Core Service Lines", sub: "Advisory through sustainment" },
  { value: "Tier 0-4", label: "Service Desk Coverage", sub: "ITIL-based methodology" },
  { value: "24/7/365", label: "Support Availability", sub: "For active engagements" },
  { value: "50+", label: "Countries Sourced", sub: "Cybersecurity staffing reach" },
];

export const telemetryStats = stats;

export const insights = [
  {
    id: "rmf-authorization-guide",
    tag: "Compliance Advisory",
    title: "Preparing for Authorization: A Practical Look at Boundary Scoping",
    desc: "How defining an accurate authorization boundary early reduces rework during assessment and shortens the path to an ATO.",
    date: "August 2026",
    readTime: "6 min read",
    author: "Spectrunex Advisory Practice",
  },
  {
    id: "cloud-first-migration",
    tag: "Cloud Services",
    title: "Cloud First Without the Rework: Migration Planning That Holds Up",
    desc: "Planning application and website migration around security frameworks and identity management rather than retrofitting them afterward.",
    date: "July 2026",
    readTime: "8 min read",
    author: "Spectrunex Cloud Practice",
  },
  {
    id: "service-desk-maturity",
    tag: "ITSM",
    title: "From Ticket Queue to Service Management: Maturing a Tier 0-4 Desk",
    desc: "Where incident and problem management practices break down, and the process changes that make service desk metrics meaningful.",
    date: "June 2026",
    readTime: "5 min read",
    author: "Spectrunex Operations Practice",
  },
];
