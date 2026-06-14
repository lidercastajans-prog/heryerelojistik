"use client";

import { useActionState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { quoteAction, initialFormState } from "@/app/actions/quote";
import { TASIMA_TIPLERI } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

export default function QuoteForm({
  defaults = {},
}: {
  defaults?: { from?: string; to?: string; type?: string };
}) {
  const [state, formAction, pending] = useActionState(quoteAction, initialFormState);

  if (state.ok) {
    return (
      <div className="rounded-3xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-green-600" aria-hidden />
        <h3 className="mt-4 font-heading text-2xl font-bold text-ink">Talebiniz alındı!</h3>
        <p className="mt-2 text-muted">{state.message}</p>
        {state.whatsappUrl && (
          <a
            href={state.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-bold text-white shadow-sm transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp'tan da gönderin
          </a>
        )}
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0"
        aria-hidden
      />

      {state.message && !state.ok && (
        <p className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden />
          {state.message}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Ad Soyad" name="name" error={state.errors?.name} required />
        <Field label="Telefon" name="phone" type="tel" placeholder="05XX XXX XX XX" error={state.errors?.phone} required />
      </div>

      <div>
        <label htmlFor="type" className="field-label">Taşıma Tipi <Req /></label>
        <select id="type" name="type" defaultValue={defaults.type || TASIMA_TIPLERI[0]} className="field-input" aria-invalid={!!state.errors?.type}>
          {TASIMA_TIPLERI.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {state.errors?.type && <p className="field-error">{state.errors.type}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nereden" name="from" placeholder="Örn. İstanbul / Kadıköy" defaultValue={defaults.from} error={state.errors?.from} required />
        <Field label="Nereye" name="to" placeholder="Örn. İzmir / Bornova" defaultValue={defaults.to} error={state.errors?.to} required />
      </div>

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
        disabled={pending}
        className="w-full rounded-full bg-brand-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-brand-600/30 transition-colors hover:bg-accent-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {pending ? "Gönderiliyor…" : "Ücretsiz Teklif İste"}
      </button>
      <p className="text-center text-xs text-muted">
        Bilgileriniz yalnızca size dönüş yapmak için kullanılır.
      </p>
    </form>
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
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  error?: string;
  required?: boolean;
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
        className="field-input"
      />
      {error && <p className="field-error">{error}</p>}
    </div>
  );
}
