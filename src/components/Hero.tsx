"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Phone, ShieldCheck, ArrowUpDown, Clock, BadgeCheck, MapPin, ArrowRight } from "lucide-react";
import { telLink } from "@/lib/site";
import { TASIMA_TIPLERI } from "@/lib/constants";
import { images } from "@/lib/images";
import Photo from "./Photo";
import Parallax from "./Parallax";

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
    <section className="relative isolate overflow-hidden grain bg-brand-950 text-white">
      {/* DEPTH 0 — arka plan fotoğrafı + okunabilirlik overlay'leri */}
      <div className="absolute inset-0 -z-20">
        <Photo
          src={images.heroBg}
          alt="Yola çıkmış nakliyat aracı"
          priority
          sizes="100vw"
          fallback={{ from: "from-brand-800", to: "to-brand-950" }}
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-950/95 via-brand-950/85 to-brand-900/55" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-950 via-transparent to-brand-950/40" />

      {/* DEPTH 1 — mesh glow blobs (parallax) */}
      <Parallax speed={0.18} className="pointer-events-none absolute -left-24 top-10 -z-10">
        <div className="h-72 w-72 rounded-full bg-accent-500/30 blur-3xl floaty-slow" aria-hidden />
      </Parallax>
      <Parallax speed={0.12} className="pointer-events-none absolute right-10 top-1/3 -z-10">
        <div className="h-80 w-80 rounded-full bg-brand-500/30 blur-3xl floaty" aria-hidden />
      </Parallax>

      <div className="container-x relative grid items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        {/* Sol — mesaj */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-accent-400" aria-hidden />
            Sigortalı · Asansörlü · 7/24 Hizmet
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Eşyalarınız{" "}
            <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
              emin ellerde
            </span>
            ,<br className="hidden sm:block" /> taşınmak çok kolay
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            Evden eve nakliyat ve şehirler arası yük taşımacılığında sigortalı,
            asansörlü ve zamanında teslimat. Saniyeler içinde online teklif alın.
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-white/90">
            <li className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-accent-400" aria-hidden /> Sigortalı Taşıma</li>
            <li className="flex items-center gap-2"><ArrowUpDown className="h-5 w-5 text-accent-400" aria-hidden /> Asansörlü Hizmet</li>
            <li className="flex items-center gap-2"><Clock className="h-5 w-5 text-accent-400" aria-hidden /> 7/24 Destek</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={telLink()}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-base font-bold text-white ring-1 ring-white/25 backdrop-blur transition-colors hover:bg-white/20"
            >
              <Phone className="h-5 w-5" aria-hidden />
              Hemen Ara
            </a>
          </div>
        </div>

        {/* Sağ — anlık teklif kutusu (cam) */}
        <div className="relative">
          {/* Yüzen rozet — canlı takip */}
          <div className="floaty-fast absolute -left-4 -top-5 z-10 hidden items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-bold text-ink shadow-xl sm:flex">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-accent-100 text-accent-600">
              <MapPin className="h-4 w-4" aria-hidden />
            </span>
            Canlı Takip
          </div>
          {/* Yüzen rozet — puan */}
          <div className="floaty absolute -bottom-5 -right-3 z-10 hidden items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-bold text-ink shadow-xl sm:flex">
            <BadgeCheck className="h-5 w-5 text-accent-600" aria-hidden />
            Ücretsiz Keşif
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/40 bg-white/95 p-6 text-ink shadow-2xl shadow-brand-950/40 backdrop-blur-md sm:p-8"
          >
            <h2 className="font-heading text-xl font-extrabold">Saniyede teklif alın</h2>
            <p className="mt-1 text-sm text-muted">
              Nereden nereye taşınıyorsunuz? Birkaç bilgi yeterli.
            </p>

            <div className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nereden">
                  <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} placeholder="Örn. İstanbul / Kadıköy" className="field-input" />
                </Field>
                <Field label="Nereye">
                  <input type="text" value={to} onChange={(e) => setTo(e.target.value)} placeholder="Örn. İzmir / Bornova" className="field-input" />
                </Field>
              </div>
              <Field label="Taşıma Tipi">
                <select value={type} onChange={(e) => setType(e.target.value)} className="field-input">
                  {TASIMA_TIPLERI.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </Field>
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-brand-600/30 transition-colors hover:bg-accent-500"
            >
              Ücretsiz Teklif Al
              <ArrowRight className="h-5 w-5" aria-hidden />
            </button>
            <p className="mt-3 text-center text-xs text-muted">
              Birkaç dakikada dönüş yapıyoruz · Ücretsiz keşif
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      {children}
    </label>
  );
}
