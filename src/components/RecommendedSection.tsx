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
        copy: "Unit 42® Incident Response helps you breach. Work with you to contain and remedy threats whenever and wherever.",
        linkText: "Our experts are standing by",
        href: "/services#unit42",
        imgUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
      },
      {
        title: "AI-powered security platforms",
        copy: "Transform your security operations using AI-powered solutions to streamline your security posture and eliminate risk.",
        linkText: "Get expert insights",
        href: "/services#cortex",
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
        title: "SecOps Certification Program",
        copy: "Earn industry-recognized credentials in Cortex XSIAM automation, threat hunting, and automated SOC workflows.",
        linkText: "Explore certifications",
        href: "/services",
        imgUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
      },
      {
        title: "Unit 42 Threat Telemetry",
        copy: "Access actionable Indicators of Compromise (IoCs) and proactive vulnerability advisories directly from researchers.",
        linkText: "View threat feeds",
        href: "/services",
        imgUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=80",
      },
      {
        title: "Developer & API Hub",
        copy: "Integrate Prisma Cloud API security policies into your CI/CD pipeline and code-to-cloud workflows.",
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
        copy: "Deliver autonomous 24/7 MDR services powered by Cortex XSIAM and Strata Cloud Manager to your client base.",
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
        copy: "Preview upcoming Precision AI features, autonomous SecOps enhancements, and cloud runtime capabilities.",
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
    title: "Unit 42 2026 Incident Response Benchmark: Autonomous Remediation at Scale",
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

      <div className="container-page relative z-10 space-y-28">
        {/* ── PART 1: "Trusted by the best" Logo Grid ────────────────────── */}
        <div className="text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-14">
            Trusted by <span className="text-[#1D4ED8]">the best</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-8 items-center justify-items-center opacity-85">
            {enterpriseLogos.map((logo, idx) => (
              <div
                key={idx}
                className="font-bold text-base sm:text-lg tracking-tight text-white/90 hover:text-[#1D4ED8] transition-colors cursor-default"
              >
                {logo.text}
              </div>
            ))}
          </div>
        </div>

        {/* ── PART 2: "Here for you. Here for what's next." ──────────────── */}
        <div>
          {/* Top Accent Line */}
          <div className="mb-6 flex items-center">
            <div className="h-[2px] w-36 bg-gradient-to-r from-[#1D4ED8] to-transparent sm:w-44" />
          </div>

          {/* Heading */}
          <div className="mb-10">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.12]">
              Here for you. <br />
              Here for <span className="text-[#1D4ED8]">what&apos;s next.</span>
            </h2>
          </div>

          {/* Role Filter Tabs */}
          <div className="mb-12 flex flex-wrap gap-2">
            {roleTabs.map((tab) => {
              const isActive = tab.id === activeRoleTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveRoleTab(tab.id)}
                  className={`rounded-full px-6 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300 ${isActive
                    ? "bg-[#1D4ED8] text-white shadow-lg shadow-orange-500/20"
                    : "bg-[#111722] text-slate-300 hover:text-white hover:bg-[#1A2434]"
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* 2x2 Engagement Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTabContent.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7"
            >
              {activeTabContent.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-white/10 bg-[#0B0E14] hover:border-[#1D4ED8]/40 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 min-h-[170px]"
                >
                  {/* Left Thumbnail Image */}
                  <div className="relative h-44 sm:h-auto sm:w-44 shrink-0 overflow-hidden bg-slate-900">
                    <img
                      src={card.imgUrl}
                      alt={card.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent via-black/20 to-[#0B0E14]" />
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col justify-between p-6 flex-1">
                    <div>
                      <h4 className="font-display font-bold text-lg text-white mb-2 group-hover:text-[#1D4ED8] transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                        {card.copy}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5">
                      <Link
                        href={card.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#1D4ED8] transition-colors"
                      >
                        <span>{card.linkText}</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 text-[#1D4ED8]" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── PART 3: "Staying ahead demands perspectives you can trust." ─── */}
        <div>
          {/* Top Accent Line */}
          <div className="mb-6 flex items-center">
            <div className="h-[2px] w-36 bg-gradient-to-r from-[#1D4ED8] to-transparent sm:w-44" />
          </div>

          {/* Heading Row with "View all" link */}
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.12]">
              Staying ahead demands <br />
              <span className="text-[#1D4ED8]">perspectives</span> you can trust.
            </h2>

            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-[#1D4ED8] transition-colors"
            >
              <span>View all</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Article Slider with Navigation Controls */}
          <div className="relative">
            {/* Carousel Track */}
            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-6 pt-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {articles.map((article, idx) => (
                <Link
                  key={idx}
                  href={article.href}
                  className={`group relative flex-shrink-0 w-[300px] sm:w-[350px] lg:w-[380px] rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${article.cardTheme === "light"
                    ? "bg-white text-black border-white/20 shadow-white/10"
                    : article.cardTheme === "warm"
                      ? "bg-gradient-to-b from-[#8B250C] via-[#6B1A06] to-[#121620] text-white border-white/10"
                      : "bg-[#0E131F] text-white border-white/10"
                    }`}
                >
                  {/* Article Card Header Content */}
                  <div className="p-7 min-h-[160px] flex flex-col justify-between">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.2em] ${article.cardTheme === "light"
                        ? "text-slate-600"
                        : "text-slate-300"
                        }`}
                    >
                      {article.tag}
                    </span>
                    <h4
                      className={`font-display text-lg sm:text-xl font-bold leading-snug line-clamp-3 ${article.cardTheme === "light"
                        ? "text-black group-hover:text-[#1D4ED8]"
                        : "text-white group-hover:text-[#1D4ED8]"
                        } transition-colors`}
                    >
                      {article.title}
                    </h4>
                  </div>

                  {/* Article Card Visual Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={article.imgUrl}
                      alt={article.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Slider Circle Arrow Indicators (Bottom Right) */}
            <div className="flex items-center justify-end gap-3 mt-6">
              <button
                onClick={() => slide("left")}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:bg-white/15 hover:border-white/40 active:scale-95"
                aria-label="Previous article"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => slide("right")}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-all hover:bg-white/90 active:scale-95 shadow-lg"
                aria-label="Next article"
              >
                <ChevronRight className="h-5 w-5 text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* ── PART 4: Newsletter Subscription CTA Bar ────────────────────── */}
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#0E131F] via-[#111827] to-[#0E131F] p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Headline */}
            <div className="lg:col-span-5">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug">
                Get the latest news, invites to events, and threat alerts
              </h3>
            </div>

            {/* Right Input & Action Form */}
            <div className="lg:col-span-7">
              {subscribed ? (
                <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-emerald-400 font-semibold text-sm">
                  ✓ Thank you for subscribing to Spectrunex intelligence alerts.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="flex flex-col sm:flex-row items-stretch gap-3">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email now to subscribe!"
                      className="flex-1 rounded-full border border-white/20 bg-black/40 px-6 py-3.5 text-sm text-white placeholder:text-slate-500 focus:border-[#1D4ED8] focus:outline-none focus:ring-1 focus:ring-[#1D4ED8]"
                    />
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#1D4ED8] px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#FF6F47] hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20"
                    >
                      <span>Sign up</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    By submitting this form, I understand my personal data will be processed in
                    accordance with Spectrunex Privacy Statement and Terms of Use.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}