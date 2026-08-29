import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-white">
      <div className="container-page text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-wide text-steel-500">
          404
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold text-navy-800">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-3 text-navy-500">
          The page you&apos;re looking for may have moved or no longer exists.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-steel-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-steel-600"
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
}
