import type { Stat } from "@/lib/stats";
import CountUp from "./CountUp";

export default function StatsBand({ stats }: { stats: Stat[] }) {
  return (
    <section className="container-x -mt-10 relative z-10">
      <div className="grid gap-px overflow-hidden rounded-3xl bg-gradient-to-r from-brand-600 to-accent-500 shadow-xl shadow-brand-900/15 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-transparent px-6 py-8 text-center text-white">
            <div className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
              <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm font-medium text-white/85">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
