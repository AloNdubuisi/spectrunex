// src/components/ServicesOverviewSection.tsx
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const servicesData = [
  {
    src: "./assets/img/services-consulting.jpg",
    alt: "Advisors meeting with a client team around a conference table",
    title: "FedRAMP & DoD DISA® advisory services",
    slug: "fedramp-disa-advisory",
    copy: "Spectrunex independent advisors help prepare your cloud service for FedRAMP & DoD DISA consulting, assessment, and authorization through the entire lifecycle.",
  },
  {
    src: "./assets/img/services-staffing.jpg",
    alt: "Team reviewing hiring and staffing plans",
    title: "Staffing Agency Services",
    slug: "staffing-agency-services",
    copy: "Whether you're an employer or job seeker in the public or private sector, partnering with Spectrunex offers unmatched cybersecurity staffing benefits.",
  },
  {
    src: "./assets/img/services-security.jpg",
    alt: "Security-themed digital graphic",
    title: "Cyber Security",
    slug: "cyber-security",
    copy: "Our certified professionals provide security guidance and information assurance services across the SDLC and infrastructure layers.",
  },
];

export default function ServicesOverviewSection() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[280px] overflow-hidden bg-[#0B0E14] sm:h-[340px]">
        <img
          src="./assets/img/services-bg.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#050B14]/55" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <ScrollReveal speed="fast" animation="fade-up">
            <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">Services</h1>
            <p className="mt-2 text-xs font-bold text-white">
              <Link href="/" className="hover:text-blue-300">
                Home
              </Link>{" "}
              - Services
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid with Cards & Scroll Animations */}
      <section className="bg-white py-16">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {servicesData.map((service, idx) => (
              <ScrollReveal key={service.slug} delay={idx * 0.05} speed="normal" animation="zoom-in" className="h-full">
                <div className="flex flex-col h-full bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="relative h-[220px] w-full overflow-hidden">
                    <img
                      src={service.src}
                      alt={service.alt}
                      className="h-full w-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6 justify-between">
                    <div>
                      <h3 className="font-display font-bold text-lg text-slate-900 mb-3">
                        <Link
                          href={`/services/${service.slug}`}
                          className="border-b border-slate-400 pb-0.5 text-slate-900 hover:text-blue-600 hover:border-blue-600 transition"
                        >
                          {service.title}
                        </Link>
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {service.copy}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}