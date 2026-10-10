"use client";

import { useEffect, useRef } from "react";
import { site, telLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

/**
 * Form gönderilince gösterilen kart (10.10.2026, bkz. lib/talep.ts): WhatsApp hazır mesajla AÇILDI — talep ancak
 * ziyaretçi WhatsApp'ta Gönder'e basınca bize ulaşır, bu yüzden "Talebiniz alındı" DEMEZ. WhatsApp açılmadıysa
 * düğmeyle yeniden açılır; WhatsApp kullanmayan için telefon. Form arkada gizli durur → "Bilgileri değiştir" ile
 * yazılanlar kaybolmadan geri döner.
 */
export default function WhatsAppHazir({ url, onDuzenle }: { url: string; onDuzenle: () => void }) {
  const baslik = useRef<HTMLHeadingElement>(null);
  // Gönder düğmesi gizlendi → odak kaybolmasın, ekran okuyucu kartı okusun
  useEffect(() => baslik.current?.focus(), []);

  return (
    <div role="status" className="rounded-3xl border border-green-200 bg-green-50 p-7 text-center sm:p-8">
      <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#25D366] text-white">
        <WhatsAppIcon className="h-8 w-8" />
      </span>
      <h3 ref={baslik} tabIndex={-1} className="mt-4 font-heading text-2xl font-bold text-ink outline-none">
        Mesajınız WhatsApp&apos;ta hazır
      </h3>
      <p className="mx-auto mt-2 max-w-md text-muted">
        Talebinizin bize ulaşması için WhatsApp&apos;ta <b className="text-ink">Gönder</b>&apos;e basın. WhatsApp
        açılmadıysa aşağıdaki düğmeye dokunun.
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-bold text-white shadow-sm transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-5 w-5" />
        WhatsApp&apos;ı Aç
      </a>
      <p className="mt-5 text-sm text-muted">
        WhatsApp kullanmıyorsanız arayın:{" "}
        <a href={telLink()} className="whitespace-nowrap font-semibold text-ink underline">
          {site.phoneDisplay}
        </a>
      </p>
      <button type="button" onClick={onDuzenle} className="mt-2 text-sm text-muted underline hover:text-ink">
        Bilgileri değiştir
      </button>
    </div>
  );
}
