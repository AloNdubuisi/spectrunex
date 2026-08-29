import Link from "next/link";
import { Building2, Code2, Bot, ArrowRight } from "lucide-react";
import { pillars } from "@/lib/site";

const icons = {
  facilities: Building2,
  digital: Code2,
  automation: Bot,
};

export default function PillarsSection() {
  return (
    <section className="section-y bg-white">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-steel-500">
            Fast Clarity. Real Results.
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">
            Three pillars, one accountable partner
          </h2>
          <p className="mt-4 text-lg text-navy-500">
            Whatever the job touches — physical space, software, or repetitive
            work — it runs through the same team and the same point of
            contact.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = icons[pillar.id as keyof typeof icons];
            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-25 p-8 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-steel-500">
                  {pillar.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-navy-800">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-500">
                  {pillar.description}
                </p>
                <ul className="mt-6 space-y-2 border-t border-slate-200 pt-6">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="text-sm text-navy-600">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services#${pillar.id}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-steel-600 transition group-hover:gap-2.5"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
