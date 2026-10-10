"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle } from "lucide-react";
import { quoteAction } from "@/app/actions/quote";
import { initialFormState } from "@/lib/form-state";
import { teklifHatalari, teklifMesaji, teklifOku, whatsappAc } from "@/lib/talep";
import { TASIMA_TIPLERI } from "@/lib/constants";
import { locations } from "@/lib/locations";
import WhatsAppHazir from "./WhatsAppHazir";
import WhatsAppIcon from "./WhatsAppIcon";

/**
 * Teklif formu (/teklif-al). 10.10.2026'dan beri: gönderince talep firmanın WhatsApp'ında HAZIR MESAJ olarak açılır
 * (ziyaretçi yalnız Gönder'e basar); sunucu eylemi arkada yedek kayıt bırakır. Eskiden "Talebiniz alındı!" deyip
 * talebi yalnız sunucu loguna yazıyordu — e-posta kurulu olmadığı için firmaya ulaşmıyordu. Kural: lib/talep.ts.
 */
export default function QuoteForm({
  defaults = {},
}: {
  defaults?: { from?: string; to?: string; type?: string };
}) {
  const [e, setHatalar] = useState<Record<string, string>>({});
  /** Doluysa WhatsApp açıldı: form gizli (yazılanlar korunur), "WhatsApp'ta hazır" kartı görünür */
  const [waUrl, setWaUrl] = useState("");

  // Doğrula → WhatsApp'ı AYNI tıklamada aç (araya await girerse telefon tarayıcısı engeller) → yedek kaydı arkada gönder.
  function gonder(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const fd = new FormData(ev.currentTarget);
    if (fd.get("website")) return; // bal küpü: bot
    const t = teklifOku(fd);
    const h = teklifHatalari(t);
    setHatalar(h);
    if (Object.keys(h).length > 0) return;
    setWaUrl(whatsappAc(teklifMesaji(t)));
    quoteAction(initialFormState, fd).catch(() => {}); // sunucu logu (e-posta kuruluysa e-posta) — ekranı etkilemez
  }

  return (
    <>
      {waUrl && <WhatsAppHazir url={waUrl} onDuzenle={() => setWaUrl("")} />}
      <form onSubmit={gonder} className="@container space-y-5" noValidate hidden={!!waUrl}>
        {/* Honeypot */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="absolute left-[-9999px] h-0 w-0"
          aria-hidden
        />

        {Object.keys(e).length > 0 && (
          <p className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700" role="alert">
            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden />
            Lütfen işaretli alanları kontrol edin.
          </p>
        )}

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Ad Soyad" name="name" autoComplete="name" error={e.name} required />
          <Field label="Telefon" name="phone" type="tel" autoComplete="tel" placeholder="05XX XXX XX XX" error={e.phone} required />
        </div>

        <div>
          <label htmlFor="type" className="field-label">Taşıma Tipi <Req /></label>
          <select
            id="type"
            name="type"
            defaultValue={defaults.type && (TASIMA_TIPLERI as readonly string[]).includes(defaults.type) ? defaults.type : TASIMA_TIPLERI[0]}
            className="field-input"
            aria-invalid={!!e.type}
            aria-describedby={e.type ? "type-hata" : undefined}
          >
            {TASIMA_TIPLERI.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {e.type && <p id="type-hata" className="field-error">{e.type}</p>}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Nereden" name="from" placeholder="İl veya semt yazın" defaultValue={defaults.from} error={e.from} list="hyl-locations" required />
          <Field label="Nereye" name="to" placeholder="İl veya semt yazın" defaultValue={defaults.to} error={e.to} list="hyl-locations" required />
        </div>
        <datalist id="hyl-locations">
          {locations.map((loc) => (
            <option key={loc} value={loc} />
          ))}
        </datalist>

        <Field label="Tahmini Taşınma Tarihi" name="date" type="date" />

        <div>
          <label htmlFor="note" className="field-label">Eklemek istedikleriniz</label>
          <textarea
            id="note"
            name="note"
            rows={4}
            placeholder="Eşya miktarı, kat, asansör durumu vb."
            className="field-input resize-none"
          />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-[#25D366]/30 transition-colors hover:bg-[#1ebe5b]"
        >
          <WhatsAppIcon className="h-5 w-5 shrink-0" />
          {/* Dar telefonda kısa yazı (form genişliğine göre) */}
          <span>
            <span className="hidden @min-[19rem]:inline">WhatsApp&apos;tan </span>Teklif İste
          </span>
        </button>
        <p className="text-center text-xs text-muted">
          Basınca WhatsApp açılır, talebiniz hazır gelir — yalnız <b className="font-semibold text-ink">Gönder</b>&apos;e basın.
          Bilgileriniz yalnızca size dönüş yapmak için kullanılır.
        </p>
      </form>
    </>
  );
}

function Req() {
  return <span className="text-red-500">*</span>;
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  defaultValue,
  error,
  required,
  list,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  error?: string;
  required?: boolean;
  list?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="field-label">
        {label} {required && <Req />}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-hata` : undefined}
        className="field-input"
        list={list}
        autoComplete={list ? "off" : autoComplete}
      />
      {error && <p id={`${name}-hata`} className="field-error">{error}</p>}
    </div>
  );
}
