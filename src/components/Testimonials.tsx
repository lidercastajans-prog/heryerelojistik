"use client";

import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { Testimonial } from "@/lib/testimonials";
import SectionHeading from "./SectionHeading";

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    const amount = card ? (card as HTMLElement).offsetWidth + 24 : 360;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="container-x py-20 lg:py-28">
      <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
        <SectionHeading
          eyebrow="Müşteri Yorumları"
          title="Binlerce mutlu taşınmanın hikâyesi"
          description="Bizi tercih eden müşterilerimiz deneyimlerini paylaşıyor."
        />
        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors hover:border-brand-300 hover:text-brand-700"
            aria-label="Önceki yorumlar"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors hover:border-brand-300 hover:text-brand-700"
            aria-label="Sonraki yorumlar"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <ul
        ref={trackRef}
        className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((t) => (
          <li
            key={t.name}
            className="flex w-[85%] shrink-0 snap-start flex-col rounded-3xl border border-line bg-white p-7 shadow-sm sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <Quote className="h-8 w-8 text-brand-200" aria-hidden />
            <div className="mt-3 flex gap-0.5" aria-label={`${t.rating} / 5 yıldız`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < t.rating ? "fill-amber-400 text-amber-400" : "text-line"}`}
                  aria-hidden
                />
              ))}
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">“{t.text}”</p>
            <div className="mt-6 border-t border-line pt-4">
              <p className="font-heading font-bold text-ink">{t.name}</p>
              <p className="text-sm text-muted">{t.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
