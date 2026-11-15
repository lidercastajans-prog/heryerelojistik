"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Phone,
  ArrowRight,
  Clock,
  MapPin,
  Route,
  Truck,
  Camera,
  ShieldCheck,
  Search,
} from "lucide-react";
import { site, telLink, whatsappLink } from "@/lib/site";
import { TASIMA_TIPLERI } from "@/lib/constants";
import { locations } from "@/lib/locations";
import { images } from "@/lib/images";
import WhatsAppIcon from "./WhatsAppIcon";

/** Yalnız TEYİTLİ bilgiler (15.11.2026). Yeni rozet eklerken firmadan teyit alın. */
const GUVEN = [
  { icon: Clock, text: "7/24 ulaşılabilir" },
  { icon: MapPin, text: "İstanbul merkezli" },
  { icon: Route, text: "Marmara · Ege · Akdeniz düzenli sefer" },
  { icon: Truck, text: "Kamyonet, kamyon, tır planlanır" },
  { icon: Camera, text: "Fotoğrafla hızlı fiyat" },
  { icon: ShieldCheck, text: "Talep üzerine taşıma sigortası" },
];

const WA_MESAJ = `Merhaba ${site.name}, taşınma için fiyat almak istiyorum. Eşyaların fotoğrafını göndereceğim.`;

export default function Hero() {
  const router = useRouter();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [type, setType] = useState<string>(TASIMA_TIPLERI[0]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (from) params.set("from", from);
    if (to) params.set("to", to);
    if (type) params.set("type", type);
    router.push(`/teklif-al?${params.toString()}`);
  }

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#0a1430] text-white">
        {/* Fotoğraf — LCP öğesi: priority (preload + yüksek öncelik) */}
        <div className="absolute inset-x-0 top-0 -z-20 h-[330px] overflow-hidden sm:h-[440px] lg:inset-0 lg:h-auto">
          <div className="ken-burns absolute inset-0">
            <Image
              src={images.heroBg}
              alt="Nakliyat ekibi örtüyle sarılmış koltuğu İstanbul'da bir sokakta kamyona yüklüyor (temsili görsel)"
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="object-cover object-[70%_center]"
            />
          </div>
        </div>
        {/* Okunabilirlik: soldan koyu lacivert degrade, alttan kararma */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 hidden bg-[linear-gradient(90deg,rgba(10,20,48,0.94)_0%,rgba(10,20,48,0.8)_40%,rgba(10,20,48,0.3)_72%,rgba(10,20,48,0.12)_100%)] lg:block"
        />
        <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[331px] bg-[linear-gradient(180deg,rgba(10,20,48,0.25)_0%,rgba(10,20,48,0.15)_45%,rgba(10,20,48,1)_100%)] sm:h-[441px] lg:hidden" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 hidden h-40 bg-gradient-to-t from-[#0a1430] to-transparent lg:block" />

        <div className="container-x relative pb-28 pt-[250px] sm:pt-[350px] lg:pb-40 lg:pt-24">
          <div className="max-w-2xl lg:max-w-[46rem]">
            <p className="rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-sm sm:text-[13px]">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              İstanbul merkezli evden eve nakliyat & yük taşıma
            </p>

            <h1 className="rise rise-1 mt-5 text-[2.5rem] font-extrabold leading-[1.1] tracking-tight lg:leading-[1.06] sm:text-6xl lg:text-[3.75rem] xl:text-[4rem]">
              Eşyanız{" "}
              <span className="relative inline-block whitespace-nowrap text-accent-300">
                emin ellerde
                <svg
                  aria-hidden
                  viewBox="0 0 300 18"
                  preserveAspectRatio="none"
                  className="draw-line absolute -bottom-2 left-0 h-3 w-full text-accent-400 sm:h-4"
                >
                  <path
                    d="M3 13 C 60 4, 140 3, 297 9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              ,<br /> taşınmak çok kolay.
            </h1>

            <p className="rise rise-2 mt-6 max-w-xl lg:max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              Marmara, Ege ve Akdeniz&apos;e düzenli sefer, diğer illere talep üzerine. Eşyanın
              fotoğrafını WhatsApp&apos;tan gönderin, fiyatı hemen konuşalım.
            </p>

            <div className="rise rise-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink(WA_MESAJ)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-7 py-4 text-base font-bold text-[#06241a] shadow-xl shadow-black/25 transition-all hover:-translate-y-0.5 hover:bg-[#2ee072]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp&apos;tan Fiyat Al
              </a>
              <a
                href={telLink()}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white/10 px-7 py-4 text-base font-bold text-white ring-1 ring-inset ring-white/35 backdrop-blur-sm transition-colors hover:bg-white hover:text-brand-800"
              >
                <Phone className="h-5 w-5" aria-hidden />
                {site.phoneDisplay}
              </a>
            </div>

            <ul className="rise rise-4 mt-10 grid grid-cols-1 gap-x-6 gap-y-3 text-sm font-medium text-white/90 min-[420px]:grid-cols-2">
              {GUVEN.map(({ icon: Ico, text }) => (
                <li key={text} className="flex items-center gap-2.5">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white/10 ring-1 ring-inset ring-white/15">
                    <Ico className="h-4 w-4 text-accent-300" aria-hidden />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Hızlı teklif çubuğu — hero'nun alt kenarına biner */}
      <div className="container-x relative z-10 -mt-16 lg:-mt-20">
        <form
          onSubmit={handleSubmit}
          aria-labelledby="hizli-teklif-baslik"
          className="rounded-3xl border border-line bg-white p-5 shadow-[0_30px_60px_-20px_rgba(15,23,42,0.35)] sm:p-6 lg:p-7"
        >
          <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h2 id="hizli-teklif-baslik" className="font-heading text-lg font-extrabold text-ink sm:text-xl">
              Hızlı teklif alın
            </h2>
            <p className="text-sm text-muted">Teklif almak ücretsiz · En kısa sürede dönüş</p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end">
            <label className="block">
              <span className="field-label">Nereden</span>
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="İl veya semt yazın"
                className="field-input"
                list="hyl-locations"
                autoComplete="off"
              />
            </label>
            <label className="block">
              <span className="field-label">Nereye</span>
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="İl veya semt yazın"
                className="field-input"
                list="hyl-locations"
                autoComplete="off"
              />
            </label>
            <label className="block md:col-span-2 lg:col-span-1">
              <span className="field-label">Taşıma tipi</span>
              <select value={type} onChange={(e) => setType(e.target.value)} className="field-input">
                {TASIMA_TIPLERI.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="submit"
              className="group flex h-[50px] items-center justify-center gap-2 rounded-2xl bg-brand-600 px-7 text-base font-bold text-white shadow-lg shadow-brand-600/30 transition-colors hover:bg-brand-700 md:col-span-2 lg:col-span-1"
            >
              <Search className="h-5 w-5" aria-hidden />
              Teklif Al
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </button>
          </div>

          <datalist id="hyl-locations">
            {locations.map((loc) => (
              <option key={loc} value={loc} />
            ))}
          </datalist>
        </form>
      </div>
    </>
  );
}
