import type { Stat } from "@/lib/stats";
import CountUp from "./CountUp";

/** Hızlı teklif çubuğunun altında sade, ayraçlı rakam şeridi. */
export default function StatsBand({ stats }: { stats: Stat[] }) {
  return (
    <section aria-label="Kısaca biz" className="container-x pt-14 lg:pt-16">
      <dl className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:divide-x lg:divide-line">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col px-3 text-center lg:px-6">
            <dt className="order-2 mt-1.5 text-sm font-medium leading-snug text-muted">{s.label}</dt>
            <dd className="order-1 font-heading text-4xl font-extrabold tracking-tight text-brand-600 sm:text-5xl">
              <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
