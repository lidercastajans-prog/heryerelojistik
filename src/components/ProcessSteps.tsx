import type { ProcessStep } from "@/lib/process";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <section className="container-x py-20 lg:py-28">
      <SectionHeading
        center
        eyebrow="Nasıl Çalışır?"
        title="4 basit adımda taşınma"
        description="Teklif almaktan yeni evinize yerleşmeye kadar tüm süreç bizim kontrolümüzde."
      />
      <ol className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal as="li" key={s.step} delay={i * 90} className="relative h-full">
            <div className="group relative flex h-full flex-col items-center overflow-hidden rounded-3xl border border-line bg-white px-6 pb-7 pt-8 text-center transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/10">
              {/* Büyük soluk adım numarası */}
              <span
                aria-hidden
                className="pointer-events-none absolute right-3 top-2 font-heading text-[4rem] font-extrabold leading-none text-brand-50 transition-colors group-hover:text-brand-100"
              >
                {String(s.step).padStart(2, "0")}
              </span>
              <div className="relative grid h-[4.5rem] w-[4.5rem] place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-lg shadow-brand-600/25 ring-8 ring-white">
                <Icon name={s.icon} className="h-8 w-8" />
                <span className="absolute -bottom-2 -right-2 grid h-7 w-7 place-items-center rounded-full bg-ink text-xs font-extrabold text-white ring-2 ring-white">
                  {s.step}
                </span>
              </div>
              <h3 className="relative mt-6 font-heading text-lg font-bold text-ink">{s.title}</h3>
              <p className="relative mt-2 text-[15px] leading-relaxed text-muted">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
