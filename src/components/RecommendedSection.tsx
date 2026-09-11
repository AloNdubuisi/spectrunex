// src/components/RecommendedSection.tsx
"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Building2, Flame, Users } from "lucide-react";
import Link from "next/link";

/* ── Enterprise Logos Data ──────────────────────────────────────────────── */
const enterpriseLogos = [
  { name: "Resolution Life", text: "Resolution Life" },
  { name: "Better", text: "Better" },
  { name: "dish", text: "dish" },
  { name: "salesforce", text: "salesforce" },
  { name: "CAESARS", text: "CAESARS" },
  { name: "flex", text: "flex." },
  { name: "AutoNation", text: "AutoNation" },
  { name: "Aaron's", text: "Aaron's" },
  { name: "Pfizer", text: "Pfizer" },
  { name: "NBCUniversal", text: "NBCUniversal" },
  { name: "slb", text: "slb" },
  { name: "GRUPO BIMBO", text: "GRUPO BIMBO" },
];

/* ── "Here for what's next" Tabbed Cards ────────────────────────────────── */
interface RoleCard {
  title: string;
  copy: string;
  linkText: string;
  href: string;
  imgUrl: string;
}

const roleTabs: { id: string; label: string; cards: RoleCard[] }[] = [
  {
    id: "executives",
    label: "Executives",
    cards: [
      {
        title: "Ignite on Tour",
        copy: "Meet decision-makers, experts and practitioners for a day of hands-on learning, strategy building, and networking.",
        linkText: "Attend our global roadshow",
        href: "/events",
        imgUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80",
      },
      {
        title: "Executive Briefing Center",
        copy: "Get a customized demo to see how our platforms, threat intelligence and expert consultants can empower your organization.",
        linkText: "Plan a collaborative discussion",
        href: "/contact",
        imgUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop&q=80",
      },
      {
        title: "Under Attack? We're Here.",
        copy: "Spectrunex works alongside your team to contain the incident, remediate the underlying gap, and document what happened.",
        linkText: "Our experts are standing by",
        href: "/services/cyber-security",
        imgUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
      },
      {
        title: "AI-powered security platforms",
        copy: "Transform your security operations using AI-powered solutions to streamline your security posture and eliminate risk.",
        linkText: "Get expert insights",
        href: "/services/cyber-security",
        imgUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    id: "specialists",
    label: "Specialists",
    cards: [
      {
        title: "Hands-on Technical Labs",
        copy: "Dive into live simulation environments and test Next-Gen Firewalls against emerging zero-day attack vectors.",
        linkText: "Start a free lab",
        href: "/demo",
        imgUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80",
      },
      {
        title: "Security Awareness Training",
        copy: "Practical security training for the people who operate your systems, mapped to the controls you are assessed against.",
        linkText: "Explore certifications",
        href: "/services",
        imgUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
      },
      {
        title: "Vulnerability Advisories",
        copy: "Access actionable Indicators of Compromise (IoCs) and proactive vulnerability advisories directly from researchers.",
        linkText: "View threat feeds",
        href: "/services",
        imgUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80",
      },
      {
        title: "Developer & API Hub",
        copy: "Build security review into your CI/CD pipeline so findings surface during development rather than at assessment.",
        linkText: "Read documentation",
        href: "/services",
        imgUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    id: "partners",
    label: "Partners",
    cards: [
      {
        title: "NextWave Partner Program",
        copy: "Accelerate your enterprise cybersecurity practice with high-margin incentives, specialized enablement, and co-selling.",
        linkText: "Join NextWave",
        href: "/contact",
        imgUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop&q=80",
      },
      {
        title: "Managed Security Providers",
        copy: "Extend Spectrunex advisory, staffing, and service desk capacity to your own client base under your brand.",
        linkText: "Become an MSSP",
        href: "/contact",
        imgUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80",
      },
      {
        title: "Federal & Defense Alliances",
        copy: "Empower public sector agencies with FedRAMP High and DoD DISA PA authorized cybersecurity platforms.",
        linkText: "Explore federal alliances",
        href: "/contact",
        imgUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
      },
      {
        title: "Cloud Marketplace Solutions",
        copy: "Deploy Spectrunex security instances frictionlessly through AWS Marketplace, Microsoft Azure, and Google Cloud.",
        linkText: "View marketplaces",
        href: "/contact",
        imgUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80",
      },
    ],
  },
  {
    id: "customers",
    label: "Customers",
    cards: [
      {
        title: "Customer Support & TAC",
        copy: "24/7/365 mission-critical technical assistance and rapid engineering escalation for enterprise deployments.",
        linkText: "Open a support case",
        href: "/contact",
        imgUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop&q=80",
      },
      {
        title: "Spectrunex Community Hub",
        copy: "Connect with over 100,000 security professionals to share best practices, custom scripts, and Playbooks.",
        linkText: "Join the community",
        href: "/contact",
        imgUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80",
      },
      {
        title: "Continuous Health Checks",
        copy: "Run automated security posture assessments to ensure your Zero Trust and firewall configurations are optimized.",
        linkText: "Run health check",
        href: "/contact",
        imgUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
      },
      {
        title: "Product Release Roadmap",
        copy: "See where our advisory, cloud, and service management offerings are heading over the coming quarters.",
        linkText: "See what's next",
        href: "/services",
        imgUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80",
      },
    ],
  },
];

/* ── Articles Slider Data ──────────────────────────────────────────────── */
const articles = [
  {
    tag: "ARTICLE",
    title: "Securing Your AI-Powered Network Transformation: A Guide for C-Suite Leaders",
    imgUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
    href: "/services",
    cardTheme: "light",
  },
  {
    tag: "ARTICLE",
    title: "A New Era of Cybersecurity with AI",
    imgUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
    href: "/services",
    cardTheme: "warm",
  },
  {
    tag: "ARTICLE",
    title: "When It Comes to Defending AI, Be Sure to Protect Your Pipeline from Inversion",
    imgUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80",
    href: "/services",
    cardTheme: "dark",
  },
  {
    tag: "REPORT",
    title: "Incident Response Benchmark 2026: What Slows Federal Remediation Down",
    imgUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
    href: "/services",
    cardTheme: "warm",
  },
];

export default function RecommendedSection() {
  const [activeRoleTab, setActiveRoleTab] = useState<string>("executives");
  const sliderRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const activeTabContent =
    roleTabs.find((t) => t.id === activeRoleTab) || roleTabs[0];

  const slide = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 380;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#070A0F] pt-24 pb-20 text-white selection:bg-[#1D4ED8] selection:text-white border-b border-white/5">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-[#1D4ED8]/6 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/3 h-[450px] w-[450px] rounded-full bg-orange-950/20 blur-[170px]" />
      </div>
    </section>
  );
}