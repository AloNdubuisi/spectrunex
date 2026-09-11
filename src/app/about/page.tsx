// src/app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  Award,
  HeartHandshake,
  Target,
  Eye,
  Check,
  ArrowRight,
} from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Spectrunex | Information Security & Mission Support",
  description:
    "Spectrunex delivers information security, compliance, and IT service management support to Federal, State, and commercial customers across seven core service lines.",
  alternates: { canonical: "/about" },
};

/* ─── About page feature image ──────────────────────────────────────
   To swap this out: drop your file into /public/assets/img/ and change
   `src` below to match its filename. Keep the leading slash.
   `alt` describes the photo for screen readers and SEO — always update
   it to match the new image. Set `caption` to "" to hide the caption. */
const featureImage = {
  src: "/assets/img/about-img.jpg",
  alt: "Spectrunex practitioners collaborating on a security engagement",
  caption: "Our practitioners at work across advisory, engineering, and support engagements.",
};

/* Company values — the standards we hold ourselves to on every engagement. */
const values = [
  {
    title: "Excellence",
    desc: "We measure our work by the outcome the customer receives, not the hours we bill against it.",
  },
  {
    title: "Trust",
    desc: "We are given access to sensitive systems and data, and we treat that access as something to be earned continuously.",
  },
  {
    title: "Innovation",
    desc: "We look for the simpler, more durable solution rather than defaulting to the tools and habits we already know.",
  },
  {
    title: "Education",
    desc: "We leave our customers' teams more capable than we found them, documenting and transferring what we build.",
  },
  {
    title: "Transparency",
    desc: "We report status plainly — including the parts that are behind schedule or harder than expected.",
  },
  {
    title: "Teamwork",
    desc: "We integrate into the customer's existing organization instead of operating as a separate contractor island.",
  },
  {
    title: "Workforce Development",
    desc: "We invest in growing cybersecurity practitioners, both inside Spectrunex and through the people we place.",
  },
];

/* Core beliefs — how we approach the work itself. */
const beliefs = [
  {
    icon: Target,
    title: "Motivated by the Mission",
    desc: "Our customers run systems that citizens, service members, and businesses depend on. Understanding what a system is actually for shapes how we secure and support it.",
  },
  {
    icon: Users,
    title: "Shared Responsibility",
    desc: "Security is not one team's job. We build practices that engineering, operations, and leadership can all carry, and we lead by taking ownership rather than assigning it.",
  },
  {
    icon: Award,
    title: "Professionalism & Ethics",
    desc: "Certified practitioners, documented methodology, and honest assessments — including when the honest assessment is that a control is not working.",
  },
  {
    icon: HeartHandshake,
    title: "Value Beyond the Contract",
    desc: "We aim to be the partner a customer keeps because the work holds up, not because switching would be inconvenient.",
  },
];

/* Condensed index of the seven service lines detailed under /services. */
const serviceSummary = [
  {
    title: "FedRAMP & DoD DISA® Advisory Services",
    slug: "fedramp-disa-advisory",
  },
  { title: "Staffing Agency Services", slug: "staffing-agency-services" },
  { title: "Cyber Security", slug: "cyber-security" },
  { title: "ITSM Support Services", slug: "itsm-support-services" },
  { title: "Cloud Services", slug: "cloud-services" },
  {
    title: "Application & Software Development",
    slug: "application-software-development",
  },
  { title: "Hardware Sales & Support", slug: "hardware-sales-support" },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "About", url: `${siteConfig.url}/about` },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#0B0E14] py-24 font-sans">
        <div className="pointer-events-none absolute right-1/4 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="container-page relative z-10">
          <ScrollReveal speed="fast" animation="fade-up">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-400">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>About Us</span>
            </div>
            <h1 className="max-w-3xl font-display text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              An information security partner built for the mission
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Spectrunex Networks helps Federal, State, and commercial
              organizations secure their systems, satisfy their compliance
              obligations, and keep critical services running.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Who we are */}
      <section className="border-b border-white/10 bg-[#070A0F] py-24 font-sans">
        <div className="container-page">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <ScrollReveal speed="normal" animation="slide-left" className="lg:col-span-5">
              <div className="mb-6 h-[2px] w-28 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-transparent sm:w-44" />
              <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#2563EB]">
                Who We Are
              </p>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Security, compliance, and support under one roof
              </h2>

              {/* Feature image — edit `featureImage` at the top of this file */}
              <figure className="m-0 mt-8">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0F141E]">
                  <img
                    src={featureImage.src}
                    alt={featureImage.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
                {featureImage.caption ? (
                  <figcaption className="mt-4 text-sm leading-relaxed text-slate-400">
                    {featureImage.caption}
                  </figcaption>
                ) : null}
              </figure>
            </ScrollReveal>

            <ScrollReveal speed="normal" animation="slide-right" className="lg:col-span-7">
              <div className="space-y-5 text-base leading-relaxed text-slate-300 sm:text-lg">
                <p>
                  Spectrunex Networks, LLC is an information security and
                  technology services firm. We work with organizations that
                  operate under real regulatory obligations &mdash; agencies and
                  enterprises where an unaddressed finding, a failed audit, or a
                  service outage carries consequences well beyond the IT
                  department.
                </p>
                <p>
                  Our practice covers the ground between policy and
                  implementation: Risk Management Framework and FISMA compliance
                  work, Assessment &amp; Authorization support, vulnerability
                  and risk assessment, security awareness training, and the
                  day-to-day service management that keeps authorized systems
                  operating within their boundaries.
                </p>
                <p>
                  What ties it together is a habit of understanding the business
                  before recommending the control. A security program that
                  ignores how an organization actually works does not survive
                  contact with it. We start with what the system is for, who
                  depends on it, and what failure would cost &mdash; then build
                  the safeguards around that.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-b border-white/10 bg-[#0B0E14] py-24 font-sans">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ScrollReveal speed="normal" animation="zoom-in" className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#0F141E] p-8 sm:p-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-600/10 text-blue-400">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="mb-4 font-display text-2xl font-bold text-white">
                  Our Mission
                </h3>
                <p className="text-base leading-relaxed text-slate-300">
                  To deliver security and technology services our customers can
                  rely on without supervision &mdash; work that is accurate the
                  first time, documented well enough to hand off, and defensible
                  when an auditor asks. We serve the organizations in our
                  communities as carefully as the agencies on our contracts.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal speed="normal" animation="zoom-in" className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#0F141E] p-8 sm:p-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-600/10 text-blue-400">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="mb-4 font-display text-2xl font-bold text-white">
                  Our Vision
                </h3>
                <p className="text-base leading-relaxed text-slate-300">
                  To grow into the partner our customers call first &mdash; not
                  because we are the largest firm available, but because our
                  work is thorough, our pricing is honest, and our people stay
                  long enough to know their systems. Satisfied customers, priced
                  fairly, served for the long term.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-white/10 bg-[#070A0F] py-24 font-sans">
        <div className="container-page">
          <ScrollReveal speed="fast" animation="fade-up">
            <div className="mb-14 max-w-3xl">
              <div className="mb-6 h-[2px] w-28 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-transparent sm:w-44" />
              <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#2563EB]">
                Keys for Development
              </p>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                The standards we hold ourselves to
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
            {values.map((value, idx) => (
              <ScrollReveal key={value.title} delay={idx * 0.04} speed="normal" animation="fade-up">
                <div className="flex items-start gap-4 border-b border-white/10 pb-6">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-blue-600/10">
                    <Check className="h-3.5 w-3.5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="mb-1.5 font-display text-lg font-bold text-white">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {value.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core beliefs */}
      <section className="border-b border-white/10 bg-[#0B0E14] py-24 font-sans">
        <div className="container-page">
          <ScrollReveal speed="fast" animation="fade-up">
            <div className="mb-14 max-w-3xl">
              <div className="mb-6 h-[2px] w-28 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-transparent sm:w-44" />
              <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#2563EB]">
                Core Beliefs
              </p>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                How we approach the work
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {beliefs.map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 0.1} speed="normal" animation="zoom-in" className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#0F141E] p-8 transition hover:border-blue-500/50">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-600/10 text-blue-400">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-[#070A0F] py-24 font-sans">
        <div className="container-page">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <ScrollReveal speed="normal" animation="slide-left" className="lg:col-span-5">
              <div className="mb-6 h-[2px] w-28 bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-transparent sm:w-44" />
              <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#2563EB]">
                What We Do
              </p>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Seven service lines
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-300">
                Advisory, delivery, and staffing support across the full
                technology lifecycle. Each line is detailed on its own page.
              </p>
              <Link
                href="/services"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700"
              >
                View All Services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>

            <ScrollReveal speed="normal" animation="slide-right" className="lg:col-span-7">
              <ul className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-[#0F141E]">
                {serviceSummary.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex items-center justify-between gap-4 px-6 py-5 transition hover:bg-white/5 sm:px-8"
                    >
                      <span className="font-display text-base font-bold text-white sm:text-lg">
                        {service.title}
                      </span>
                      <ArrowRight className="h-4 w-4 flex-shrink-0 text-blue-400 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
