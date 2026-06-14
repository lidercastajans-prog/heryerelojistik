import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHero({
  title,
  description,
  breadcrumb,
}: {
  title: string;
  description?: string;
  breadcrumb: { name: string; path: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-brand-50 to-white">
      <div aria-hidden className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent-200/40 blur-3xl" />
      <div className="container-x relative py-12 lg:py-16">
        <nav aria-label="Sayfa yolu" className="mb-4">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
            {breadcrumb.map((b, i) => (
              <li key={b.path} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden />}
                {i < breadcrumb.length - 1 ? (
                  <Link href={b.path} className="hover:text-brand-700">{b.name}</Link>
                ) : (
                  <span className="font-semibold text-ink" aria-current="page">{b.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="max-w-3xl text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
