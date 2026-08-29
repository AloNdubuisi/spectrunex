import type { ComponentType } from "react";
import { pillars, services } from "@/lib/site";
import {
  HardHat,
  Hammer,
  Sparkles,
  Code2,
  Smartphone,
  Cloud,
  Bot,
  Workflow,
  Compass,
} from "lucide-react";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  "commercial-construction": HardHat,
  "renovation-fitout": Hammer,
  "commercial-cleaning": Sparkles,
  "custom-software": Code2,
  "mobile-apps": Smartphone,
  "web-cloud": Cloud,
  "ai-automation": Bot,
  "process-automation": Workflow,
  "ai-advisory": Compass,
};

export default function ServicesGrid({ withDetails = false }: { withDetails?: boolean }) {
  return (
    <section className="section-y bg-slate-50">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-steel-500">
            What You Actually Get
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">
            Comprehensive services, end to end
          </h2>
          <p className="mt-4 text-lg text-navy-500">
            Nine services across three pillars — everything it takes to
            build, run, and modernize your organization.
          </p>
        </div>

        {pillars.map((pillar) => {
          const pillarServices = services.filter((s) => s.pillarId === pillar.id);
          return (
            <div key={pillar.id} className="mt-14 first:mt-14">
              <h3 className="font-display text-lg font-bold text-navy-800">
                {pillar.title}
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {pillarServices.map((service) => {
                  const Icon = iconMap[service.id] ?? Code2;
                  return (
                    <div
                      key={service.id}
                      id={service.id}
                      className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-steel-50 text-steel-600">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h4 className="mt-5 font-display text-base font-bold text-navy-800">
                        {service.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-navy-500">
                        {service.summary}
                      </p>
                      {withDetails && (
                        <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
                          {service.details.map((detail) => (
                            <li
                              key={detail}
                              className="flex items-start gap-2 text-xs text-navy-500"
                            >
                              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-steel-400" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
