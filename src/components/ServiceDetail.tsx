import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services";
import { services } from "@/lib/services";
import Icon from "./Icon";
import Photo from "./Photo";
import Reveal from "./Reveal";
import CtaSection from "./CtaSection";

export default function ServiceDetail({ service }: { service: Service }) {
  const detail = service.detail;
  const others = services.filter((s) => s.slug !== service.slug && s.featured);

  return (
    <>
      {/* Görsel banner */}
      <section className="container-x pt-10">
        <div className="relative aspect-[21/9] overflow-hidden rounded-3xl shadow-xl shadow-brand-900/10">
          <Photo
            src={service.image}
            alt={service.title}
            priority
            sizes="100vw"
            fallback={{ from: "from-brand-600", to: "to-accent-600", icon: service.icon }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/45 to-transparent" />
        </div>
      </section>

      {detail && (
        <section className="container-x py-16 lg:py-20">
          <p className="max-w-3xl text-lg leading-relaxed text-ink-soft">{detail.intro}</p>

          {/* Öne çıkanlar */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {detail.highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 60} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-sm">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    <Icon name={h.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-bold text-ink">{h.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{h.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bölümler */}
          <div className="mt-16 space-y-10">
            {detail.sections.map((sec, i) => (
              <Reveal key={sec.title}>
                <div className="grid gap-6 rounded-3xl border border-line bg-surface p-7 lg:grid-cols-[1fr_1.3fr] lg:p-10">
                  <div>
                    <span className="font-heading text-sm font-bold text-accent-600">
                      0{i + 1}
                    </span>
                    <h2 className="mt-1 font-heading text-2xl font-bold text-ink">{sec.title}</h2>
                  </div>
                  <div>
                    <p className="leading-relaxed text-ink-soft">{sec.body}</p>
                    {sec.bullets && (
                      <ul className="mt-5 space-y-2.5">
                        {sec.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2.5 text-sm font-medium text-ink-soft">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <CtaSection />

      {/* Diğer hizmetler */}
      {others.length > 0 && (
        <section className="container-x pb-20">
          <h2 className="mb-8 font-heading text-2xl font-bold text-ink">Diğer hizmetlerimiz</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={o.href}
                className="group flex items-center gap-4 rounded-3xl border border-line bg-white p-6 transition-all hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon name={o.icon} className="h-7 w-7" />
                </span>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold text-ink">{o.title}</h3>
                  <p className="mt-0.5 text-sm text-muted">{o.excerpt}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-brand-600 transition-transform group-hover:translate-x-1" aria-hidden />
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
