import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { citySlugByName } from "@/lib/cities";

export default function CoverageAreas({ cities, note }: { cities: string[]; note: string }) {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="inline-block rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700">
            Hizmet Bölgeleri
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl">
            Türkiye'nin <span className="text-brand-600">81 iline</span> taşıyoruz
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{note}</p>
          <Link
            href="/iletisim"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-base font-bold text-white shadow-sm shadow-brand-600/30 transition-colors hover:bg-accent-500"
          >
            Bölgenizi sorun
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
        </div>

        <Reveal>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {cities.map((city) => {
              const slug = citySlugByName(city);
              const cls =
                "flex items-center gap-2 rounded-2xl border border-line bg-white px-4 py-3 text-sm font-semibold text-ink-soft transition-colors hover:border-brand-200 hover:text-brand-700";
              return (
                <li key={city}>
                  {slug ? (
                    <Link href={`/nakliyat/${slug}`} className={cls}>
                      <MapPin className="h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                      {city}
                    </Link>
                  ) : (
                    <div className={cls}>
                      <MapPin className="h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                      {city}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
