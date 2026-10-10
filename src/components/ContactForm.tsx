"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle } from "lucide-react";
import { contactAction } from "@/app/actions/contact";
import { initialFormState } from "@/lib/form-state";
import { iletisimHatalari, iletisimMesaji, iletisimOku, whatsappAc } from "@/lib/talep";
import WhatsAppHazir from "./WhatsAppHazir";
import WhatsAppIcon from "./WhatsAppIcon";

/** İletişim formu — teklif formuyla AYNI akış: gönderince mesaj firmanın WhatsApp'ında hazır açılır, sunucu
 *  eylemi arkada yedek kayıt bırakır (lib/talep.ts). */
export default function ContactForm() {
  const [e, setHatalar] = useState<Record<string, string>>({});
  /** Doluysa WhatsApp açıldı: form gizli (yazılanlar korunur), "WhatsApp'ta hazır" kartı görünür */
  const [waUrl, setWaUrl] = useState("");

  // Doğrula → WhatsApp'ı AYNI tıklamada aç (araya await girerse telefon tarayıcısı engeller) → yedek kaydı arkada gönder.
  function gonder(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const fd = new FormData(ev.currentTarget);
    if (fd.get("website")) return; // bal küpü: bot
    const i = iletisimOku(fd);
    const h = iletisimHatalari(i);
    setHatalar(h);
    if (Object.keys(h).length > 0) return;
    setWaUrl(whatsappAc(iletisimMesaji(i)));
    contactAction(initialFormState, fd).catch(() => {}); // sunucu logu (e-posta kuruluysa e-posta) — ekranı etkilemez
  }

  return (
    <>
      {waUrl && <WhatsAppHazir url={waUrl} onDuzenle={() => setWaUrl("")} />}
      <form onSubmit={gonder} className="@container space-y-5" noValidate hidden={!!waUrl}>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="absolute left-[-9999px] h-0 w-0" aria-hidden />

        {Object.keys(e).length > 0 && (
          <p className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700" role="alert">
            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden />
            Lütfen işaretli alanları kontrol edin.
          </p>
        )}

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="c-name" className="field-label">Ad Soyad <span className="text-red-500">*</span></label>
            <input id="c-name" name="name" autoComplete="name" className="field-input" aria-invalid={!!e.name} aria-describedby={e.name ? "c-name-hata" : undefined} />
            {e.name && <p id="c-name-hata" className="field-error">{e.name}</p>}
          </div>
          <div>
            <label htmlFor="c-phone" className="field-label">Telefon <span className="text-red-500">*</span></label>
            <input id="c-phone" name="phone" type="tel" autoComplete="tel" placeholder="05XX XXX XX XX" className="field-input" aria-invalid={!!e.phone} aria-describedby={e.phone ? "c-phone-hata" : undefined} />
            {e.phone && <p id="c-phone-hata" className="field-error">{e.phone}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="c-email" className="field-label">E-posta</label>
          <input id="c-email" name="email" type="email" autoComplete="email" className="field-input" />
        </div>

        <div>
          <label htmlFor="c-message" className="field-label">Mesajınız <span className="text-red-500">*</span></label>
          <textarea id="c-message" name="message" rows={5} className="field-input resize-none" aria-invalid={!!e.message} aria-describedby={e.message ? "c-message-hata" : undefined} />
          {e.message && <p id="c-message-hata" className="field-error">{e.message}</p>}
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-[#25D366]/30 transition-colors hover:bg-[#1ebe5b]"
        >
          <WhatsAppIcon className="h-5 w-5 shrink-0" />
          <span>
            <span className="hidden @min-[17.5rem]:inline">WhatsApp&apos;tan </span>Gönder
          </span>
        </button>
        <p className="text-center text-xs text-muted">
          Basınca WhatsApp açılır, mesajınız hazır gelir — yalnız <b className="font-semibold text-ink">Gönder</b>&apos;e basın.
          Bilgileriniz yalnızca size dönüş yapmak için kullanılır.
        </p>
      </form>
    </>
  );
}
