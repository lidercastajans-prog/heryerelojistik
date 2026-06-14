import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services";
import Icon from "./Icon";
import Photo from "./Photo";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.href}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/10"
    >
      {/* Görsel başlık */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Photo
          src={service.image}
          alt={service.title}
          sizes="(max-width: 768px) 100vw, 33vw"
          fallback={{ from: "from-brand-600", to: "to-accent-600", icon: service.icon }}
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent" />
        <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-white/95 text-brand-600 shadow-sm backdrop-blur">
          <Icon name={service.icon} className="h-6 w-6" />
        </span>
        {service.featured && (
          <span className="absolute right-4 top-4 rounded-full bg-accent-500 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm">
            Öne Çıkan
          </span>
        )}
      </div>

      {/* İçerik */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-xl font-bold text-ink">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
          Detayları gör
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
