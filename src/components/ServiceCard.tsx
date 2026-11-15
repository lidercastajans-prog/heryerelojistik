import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/services";
import Icon from "./Icon";
import Photo from "./Photo";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.href}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-sm shadow-ink/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-900/15"
    >
      {/* Görsel */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-100">
        <Photo
          src={service.image}
          alt={`${service.title} (temsili görsel)`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          fallback={{ from: "from-brand-600", to: "to-accent-600", icon: service.icon }}
          className="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-brand-950/5 to-transparent" />
        {service.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-700 shadow-sm backdrop-blur">
            Öne çıkan
          </span>
        )}
      </div>

      {/* İçerik */}
      <div className="relative flex flex-1 flex-col px-6 pb-6 pt-9">
        {/* Görselin kenarına binen ikon */}
        <span className="absolute -top-7 left-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-lg shadow-brand-600/30 ring-4 ring-white transition-transform duration-300 group-hover:-rotate-6">
          <Icon name={service.icon} className="h-6 w-6" />
        </span>
        <h3 className="font-heading text-xl font-bold text-ink">{service.title}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{service.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
          Detayları gör
          <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-50 transition-colors group-hover:bg-brand-600 group-hover:text-white">
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </span>
        </span>
      </div>
    </Link>
  );
}
