import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { citySlugByName } from "@/lib/cities";

export default function CoverageAreas({
  cities,
  regular = [],
  intercity = [],
  note,
}: {
  cities: string[];
  /** Ege ve Akdeniz'de düzenli sefer yapılan iller (il sayfası yok, link verilmez). */
  regular?: string[];
  intercity?: string[];
  note: string;
}) {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="inline-block rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700">
            Hizmet Bölgeleri
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-ink sm:text-4xl">
            İstanbul merkezli; <span className="text-brand-600">Marmara, Ege ve Akdeniz</span>&apos;e düzenli sefer
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{note}</p>
          <Link

            href="/iletisim"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-base font-bold text-white shadow-sm shadow-brand-600/30 transition-colors hover:bg-brand-700"
          >
            Bölgenizi sorun
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
          <RouteCard />
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
          {regular.length > 0 && (
            <div className="mt-8">
              <p className="text-sm font-bold uppercase tracking-wider text-muted">
                Ege ve Akdeniz&apos;e düzenli sefer
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {regular.map((city) => (
                  <li
                    key={city}
                    className="flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-sm font-semibold text-ink-soft"
                  >
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-600" aria-hidden />
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {intercity.length > 0 && (
            <div className="mt-8">
              <p className="text-sm font-bold uppercase tracking-wider text-muted">
                Diğer iller (talep üzerine)
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {intercity.join(", ")} ve diğer iller için gideceğiniz yeri yazın, tarih ve fiyatı konuşalım.
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

/** Şematik rota kartı: İstanbul merkezden üç düzenli sefer bölgesine. Coğrafi harita değil, sembolik çizim. */
function RouteCard() {
  const hub = { x: 170, y: 64 };
  const nodes = [
    { x: 58, y: 104, c: "Q 100 62", label: "Marmara" },
    { x: 80, y: 178, c: "Q 160 150", label: "Ege" },
    { x: 278, y: 178, c: "Q 276 96", label: "Akdeniz" },
  ];
  return (
    <figure className="mt-8 max-w-md overflow-hidden rounded-3xl bg-brand-950 p-5 text-white shadow-xl shadow-brand-950/20 sm:p-6">
      <svg viewBox="0 0 340 218" role="img" aria-labelledby="rota-baslik" className="h-auto w-full">
        <title id="rota-baslik">İstanbul merkezden Marmara, Ege ve Akdeniz&apos;e düzenli sefer (şematik)</title>
        <defs>
          <radialGradient id="rota-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22ccee" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#22ccee" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g fill="none" stroke="#608bfa" strokeWidth="2" strokeDasharray="5 6" strokeLinecap="round" className="route-dash">
          {nodes.map((n) => (
            <path key={n.label} d={`M${hub.x} ${hub.y} ${n.c} ${n.x} ${n.y}`} />
          ))}
        </g>
        <circle cx={hub.x} cy={hub.y} r="30" fill="url(#rota-glow)" />
        <circle cx={hub.x} cy={hub.y} r="9" fill="#22ccee" stroke="#fff" strokeWidth="3" />
        <text x={hub.x} y="26" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="800" fontFamily="var(--font-poppins), sans-serif">
          İstanbul <tspan fill="#93b4fd" fontWeight="600" fontSize="12">· merkez</tspan>
        </text>
        {nodes.map((n) => (
          <g key={n.label}>
            <circle cx={n.x} cy={n.y} r="6.5" fill="#172554" stroke="#22ccee" strokeWidth="3" />
            <text x={n.x} y={n.y + 25} textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700" fontFamily="var(--font-poppins), sans-serif">
              {n.label}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-4 text-sm text-white/75">
        <span className="font-semibold text-white">Düzenli sefer bölgeleri</span>
        <span>Diğer iller talep üzerine</span>
      </figcaption>
    </figure>
  );
}