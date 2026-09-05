// src/components/ServicesOverviewSection.tsx
import Link from "next/link";

const overviewImages = [
  { src: "./assets/img/services-consulting.jpg", alt: "Advisors meeting with a client team around a conference table" },
  { src: "./assets/img/services-staffing.jpg", alt: "Team reviewing hiring and staffing plans" },
  { src: "./assets/img/services-security.jpg", alt: "Security-themed digital graphic" },
];

const overviewCopy = [
  "Spectrunex's independent advisors can help your organization prepare your cloud service for FedRAMP & DoD DISA consulting, assessment, and authorization. Your FedRAMP consultant will lead you through the FedRAMP lifecycle and assist with establishing go-to-market strategies, boundary scoping, identifying gaps in FedRAMP & DoD DISA compliance, remediation and architecture support, and navigating the FedRAMP & DoD DISA assessment.",
  "Whether you're an employer or a job seeker in the public or private sector, partnering with a specialized cybersecurity staffing agency like Spectrunex offers unmatched benefits.",
  "Our team of certified professionals provides security guidance and information assurance services to Federal, State, and Private customers throughout the System Development Lifecycle (SDLC) including each layer of the infrastructure and applications.",
];

export default function ServicesOverviewSection() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[340px] overflow-hidden bg-[#0B0E14] sm:h-[400px]">
        <img
          src="./assets/img/services-bg.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#050B14]/55" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">Services</h1>
          <p className="mt-4 text-sm font-bold text-white">
            <Link href="/" className="hover:text-blue-300">
              Home
            </Link>{" "}
            -Services
          </p>
        </div>
      </section>

      {/* Image row */}
      <section className="bg-white">
        <div className="container-page grid grid-cols-1 gap-6 sm:grid-cols-3">
          {overviewImages.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="h-[280px] w-full object-cover sm:h-[340px]"
            />
          ))}
        </div>

        {/* Text columns */}
        <div className="container-page grid grid-cols-1 gap-12 py-8 sm:grid-cols-3">
          {overviewCopy.map((copy, idx) => (
            <p key={idx} className="text-center text-base leading-relaxed text-blue-900">
              {copy}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}