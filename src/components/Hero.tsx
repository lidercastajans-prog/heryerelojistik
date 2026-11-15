"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Clock,
  MapPin,
  Route,
  Truck,
  Camera,
  ShieldCheck,
  Search,
} from "lucide-react";

import { TASIMA_TIPLERI } from "@/lib/constants";
import { locations } from "@/lib/locations";
import HeroScene from "./HeroScene";

/** Yalnız TEYİTLİ bilgiler (15.11.2026). Yeni rozet eklerken firmadan teyit alın. */
const GUVEN = [
  { icon: Clock, text: "7/24 ulaşılabilir" },
  { icon: MapPin, text: "İstanbul merkezli" },
  { icon: Route, text: "Marmara · Ege · Akdeniz düzenli sefer" },
  { icon: Truck, text: "Kamyonet, kamyon, tır planlanır" },
  { icon: Camera, text: "Fotoğrafla hızlı fiyat" },
  { icon: ShieldCheck, text: "Talep üzerine taşıma sigortası" },
];

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
      <HeroScene />

      {/* Hızlı teklif çubuğu — sahnenin hemen altında, lacivertten beyaza geçişe biner */}
      <div className="bg-[linear-gradient(180deg,#0a1430_0,#0a1430_88px,#ffffff_88px)] pt-6 lg:pt-8">
      <div className="container-x relative z-10">
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

        <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 text-sm font-medium text-ink-soft min-[420px]:grid-cols-2 lg:grid-cols-3">
          {GUVEN.map(({ icon: Ico, text }) => (
            <li key={text} className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-brand-50 ring-1 ring-inset ring-brand-100">
                <Ico className="h-4 w-4 text-brand-600" aria-hidden />
              </span>
              {text}
            </li>
          ))}
        </ul>
      </div>
      </div>
    </>
  );
}
