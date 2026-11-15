"use client";

import { useEffect, useRef } from "react";
import { Phone, ChevronDown } from "lucide-react";
import { site, telLink, whatsappLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";
import HeroSceneSvg from "./HeroSceneSvg";
import { buildTimeline, computeFrame, stepAt, type Frame } from "./heroSceneEngine";

/**
 * Ana sayfa girişi: kaydırdıkça taşıyıcılar eşyaları kamyona yükler, kepenk iner, kamyon yola çıkar.
 *
 * - Sahne tek SVG (dekoratif, aria-hidden). Anlamlı metin + CTA'lar HTML'de, her an tıklanabilir.
 * - İlk kare (p=0) sunucuda render edilir → LCP metin/SVG, ek görsel yok.
 * - Kaydırma: passive scroll → tek rAF → yalnızca değişen SVG transform/opacity öznitelikleri yazılır.
 *   Kare başına layout okuması yok (ölçüler resize'da önbelleğe alınır).
 * - prefers-reduced-motion: sticky yükseklik CSS ile kalkar, son kare (dolu kamyon) statik gösterilir.
 */

const DESK_MQ = "(min-width: 1024px) and (min-aspect-ratio: 5/4)";
const TL_DESK = buildTimeline(false);
const F0 = computeFrame(0, TL_DESK);

/** Yalnız TEYİTLİ bilgiler (15.11.2026). */
const STEPS = [
  { t: "Fotoğrafını gönderin", d: "Eşyanın fotoğrafını WhatsApp'tan atın, fiyatı hemen konuşalım. 7/24 ulaşılabiliriz." },
  { t: "Özenle paketleyip taşıyoruz", d: "Koltuk, dolap, koli: sarılır, kasaya yerleşir. Talep üzerine taşıma sigortası." },
  { t: "Yükü sabitleyip kapatıyoruz", d: "Kamyonet, kamyon ya da tır: araç yükünüze göre planlanır." },
  { t: "Taşınmaya hazırız.", d: "İstanbul merkezli; Marmara, Ege ve Akdeniz'e düzenli sefer." },
];

const WA_MESAJ = `Merhaba ${site.name}, taşınma için fiyat almak istiyorum. Eşyaların fotoğrafını göndereceğim.`;

export default function HeroScene() {
  const secRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const sec = secRef.current;
    const stage = stageRef.current;
    if (!sec || !stage) return;
    const svg = stage.querySelector("svg");
    if (!svg) return;

    const els = new Map<string, Element>();
    svg.querySelectorAll("[data-k]").forEach((el) => els.set(el.getAttribute("data-k")!, el));
    const steps = Array.from(stage.querySelectorAll<HTMLElement>("[data-step]"));
    const hint = stage.querySelector<HTMLElement>("[data-hint]");

    const mqDesk = window.matchMedia(DESK_MQ);
    const mqRM = window.matchMedia("(prefers-reduced-motion: reduce)");
    let tl = mqDesk.matches ? TL_DESK : buildTimeline(true);

    const prev = new Map<string, string>();
    const set = (el: Element, attr: string, v: string) => {
      const key = el.getAttribute("data-k") + attr;
      if (prev.get(key) === v) return;
      prev.set(key, v);
      el.setAttribute(attr, v);
    };
    const apply = (f: Frame) => {
      for (const [k, v] of Object.entries(f)) {
        const el = els.get(k);
        if (!el) continue;
        if (v.t !== undefined) set(el, "transform", v.t);
        if (v.o !== undefined) set(el, "opacity", String(Math.round(v.o * 1000) / 1000));
        if (v.h !== undefined) set(el, "height", String(v.h));
      }
    };

    // Ölçü önbelleği (yalnız resize/load'da okunur)
    let start = 0;
    let dist = 1;
    const measure = () => {
      const top = parseFloat(getComputedStyle(stage).top) || 0;
      const r = sec.getBoundingClientRect();
      start = r.top + window.scrollY - top;
      dist = Math.max(1, sec.offsetHeight - stage.offsetHeight);
    };

    let last = -1;
    let step = -1;
    let raf = 0;
    const render = () => {
      raf = 0;
      const p = mqRM.matches ? 1 : Math.min(1, Math.max(0, (window.scrollY - start) / dist));
      if (Math.abs(p - last) < 0.0004) return;
      last = p;
      apply(computeFrame(p, tl));
      if (barRef.current) barRef.current.style.transform = `scaleX(${p.toFixed(4)})`;
      const s = stepAt(p);
      if (s !== step) {
        step = s;
        steps.forEach((el, i) => el.toggleAttribute("data-on", i === s));
      }
      if (hint) hint.toggleAttribute("data-off", p > 0.015);
    };
    const req = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };
    const reset = () => {
      tl = mqDesk.matches ? TL_DESK : buildTimeline(true);
      measure();
      last = -1;
      req();
    };

    measure();
    render();
    window.addEventListener("scroll", req, { passive: true });
    window.addEventListener("resize", reset, { passive: true });
    window.addEventListener("load", reset);
    mqDesk.addEventListener("change", reset);
    mqRM.addEventListener("change", reset);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", req);
      window.removeEventListener("resize", reset);
      window.removeEventListener("load", reset);
      mqDesk.removeEventListener("change", reset);
      mqRM.removeEventListener("change", reset);
    };
  }, []);

  return (
    <section ref={secRef} className="hs" aria-labelledby="hero-baslik">
      <div ref={stageRef} className="hs-stage">
        <HeroSceneSvg f0={F0} />
        <div aria-hidden className="hs-shade" />

        <div className="hs-copy container-x">
          <div className="hs-copy-in">
            <p className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-sm sm:inline-flex sm:text-[13px]">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              İstanbul merkezli evden eve nakliyat & yük taşıma
            </p>

            <h1
              id="hero-baslik"
              className="text-[1.9rem] font-extrabold leading-[1.1] tracking-tight text-white min-[400px]:text-[2.1rem] sm:mt-5 sm:text-5xl hsdesk:text-[2.75rem] xl:hsdesk:text-[3.05rem]"
            >
              Eşyanız{" "}
              <span className="relative inline-block whitespace-nowrap text-accent-300">
                emin ellerde
                <svg
                  aria-hidden
                  viewBox="0 0 300 18"
                  preserveAspectRatio="none"
                  className="draw-line absolute -bottom-1.5 left-0 h-2.5 w-full text-accent-400 sm:h-3.5"
                >
                  <path d="M3 13 C 60 4, 140 3, 297 9" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span>
              ,<br /> taşınmak çok kolay.
            </h1>

            <p className="mt-4 hidden max-w-md text-base leading-relaxed text-white/85 sm:block hsdesk:mt-5 hsdesk:text-[17px]">
              Marmara, Ege ve Akdeniz&apos;e düzenli sefer, diğer illere talep üzerine. Eşyanın fotoğrafını
              WhatsApp&apos;tan gönderin, fiyatı hemen konuşalım.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2.5 sm:flex sm:gap-3 hsdesk:mt-7">
              <a
                href={whatsappLink(WA_MESAJ)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-[15px] font-bold text-[#06241a] shadow-xl shadow-black/25 transition-all hover:-translate-y-0.5 hover:bg-[#2ee072] whitespace-nowrap sm:gap-2.5 sm:px-6 sm:py-4 sm:text-base"
              >
                <WhatsAppIcon className="h-5 w-5" />
                <span className="sm:hidden">Fiyat Al</span>
                <span className="hidden sm:inline">WhatsApp&apos;tan Fiyat Al</span>
              </a>
              <a
                href={telLink()}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-3 text-[15px] font-bold text-white ring-1 ring-inset ring-white/35 backdrop-blur-sm transition-colors hover:bg-white hover:text-brand-800 whitespace-nowrap sm:gap-2.5 sm:px-6 sm:py-4 sm:text-base"
              >
                <Phone className="h-5 w-5" aria-hidden />
                <span className="sm:hidden">Hemen Ara</span>
                <span className="hidden sm:inline">{site.phoneDisplay}</span>
              </a>
            </div>

            {/* Sahneye eşlik eden ara metin (kaydırmayla değişir) */}
            <div className="hs-caption mt-4 hsdesk:mt-8">
              <span className="hs-bar" aria-hidden>
                <span ref={barRef} />
              </span>
              <ol className="hs-steps">
                {STEPS.map((s, i) => (
                  <li key={s.t} data-step={i} data-on={i === 0 ? "" : undefined}>
                    <strong className="block font-heading text-[15px] font-bold text-white sm:text-base">{s.t}</strong>
                    <span className="mt-0.5 block text-[13px] leading-snug text-white/75 sm:text-sm">{s.d}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div data-hint className="hs-hint" aria-hidden>
              Kaydırın
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
