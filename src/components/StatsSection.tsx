import { stats } from "@/lib/site";

export default function StatsSection() {
  return (
    <section className="border-y border-navy-100 bg-white py-14">
      <div className="container-page grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center lg:text-left">
            <p className="font-display text-3xl font-bold text-navy-800 sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-navy-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
