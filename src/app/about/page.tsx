import type { Metadata } from "next";
import { Target, ShieldCheck, Users, Zap } from "lucide-react";
import CTASection from "@/components/CTASection";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Spectrunex is a multi-service partner delivering construction, commercial cleaning, custom software, mobile apps, and AI automation under one accountable team.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Target,
    title: "One point of contact",
    description:
      "You work with a single team that understands your whole project, not five vendors who only see their piece of it.",
  },
  {
    icon: ShieldCheck,
    title: "Accountability by default",
    description:
      "Every engagement has a named owner, a clear scope, and a schedule you can hold us to.",
  },
  {
    icon: Users,
    title: "Built for long-term partnership",
    description:
      "Most clients start with one project and stay for ongoing maintenance, support, and the next one.",
  },
  {
    icon: Zap,
    title: "Practical, not trend-chasing",
    description:
      "We recommend automation and technology where it actually pays off — not because it's fashionable.",
  },
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

      <section className="bg-navy">
        <div className="container-page section-y">
          <p className="text-sm font-semibold uppercase tracking-wide text-steel-300">
            About Spectrunex
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            One partner for the physical and digital work of running an
            organization
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Spectrunex started from a simple observation: the teams
            responsible for a building, a piece of software, and a workflow
            are almost never the same people — even when the work is deeply
            connected. We brought construction, cleaning, software, mobile,
            and AI automation together so our clients stop managing that gap
            themselves.
          </p>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy-800">
              What we believe
            </h2>
            <p className="mt-4 text-navy-500 leading-relaxed">
              Most organizations don&apos;t need more vendors — they need
              fewer, better ones. A construction crew that also understands
              how the space will be maintained. A software team that
              understands the operational reality it&apos;s automating.
              That&apos;s the premise Spectrunex is built on.
            </p>
            <p className="mt-4 text-navy-500 leading-relaxed">
              We keep every discipline — construction, cleaning, software,
              mobile, and AI automation — held to the same standard: clear
              scope, honest timelines, and work that holds up after we leave.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-navy-800">
              How we work
            </h2>
            <p className="mt-4 text-navy-500 leading-relaxed">
              Every engagement starts with a scoping conversation, not a
              sales pitch. We tell you plainly if something is out of scope
              for us, or if a smaller solution would serve you better than
              the bigger one.
            </p>
            <p className="mt-4 text-navy-500 leading-relaxed">
              For technology work specifically, that means realistic
              timelines, transparent pricing, and support that doesn&apos;t
              disappear after launch.
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-slate-50">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-navy-800">
            What guides the work
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-800 text-white">
                  <value.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-navy-800">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
