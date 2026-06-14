"use client";

import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/lib/gallery";
import Photo from "./Photo";

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length]
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {items.map((item, i) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm"
              aria-label={`${item.title} — büyüt`}
            >
              <Photo
                src={item.photo}
                alt={item.title}
                sizes="(max-width: 640px) 50vw, 33vw"
                fallback={{ from: item.from, to: item.to, icon: item.icon }}
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-3 text-left text-sm font-semibold text-white">
                {item.title}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={items[active].title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button type="button" onClick={close} className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Kapat">
            <X className="h-6 w-6" />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Önceki">
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="relative aspect-[4/3] w-full max-w-4xl overflow-hidden rounded-3xl" onClick={(e) => e.stopPropagation()}>
            <Photo
              src={items[active].photo}
              alt={items[active].title}
              sizes="100vw"
              fallback={{ from: items[active].from, to: items[active].to, icon: items[active].icon }}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
              <p className="font-heading text-xl font-bold text-white">{items[active].title}</p>
            </div>
          </div>

          <button type="button" onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 bottom-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:bottom-auto sm:top-1/2" aria-label="Sonraki">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}
