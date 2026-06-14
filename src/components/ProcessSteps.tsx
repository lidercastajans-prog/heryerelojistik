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
      <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal as="li" key={s.step} delay={i * 80} className="relative">
            {/* Bağlantı çizgisi (masaüstü) */}
            {i < steps.length - 1 && (
              <span
                aria-hidden
                className="absolute left-[calc(50%+2.5rem)] top-8 hidden h-px w-[calc(100%-5rem)] bg-gradient-to-r from-brand-200 to-transparent lg:block"
              />
            )}
            <div className="relative text-center">
              <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                <Icon name={s.icon} className="h-8 w-8" />
                <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-accent-500 text-sm font-extrabold text-white">
                  {s.step}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
