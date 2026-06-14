"use client";

import { useActionState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { contactAction, initialContactState } from "@/app/actions/contact";
import WhatsAppIcon from "./WhatsAppIcon";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(contactAction, initialContactState);

  if (state.ok) {
    return (
      <div className="rounded-3xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-green-600" aria-hidden />
        <h3 className="mt-4 font-heading text-2xl font-bold text-ink">Mesajınız alındı!</h3>
        <p className="mt-2 text-muted">{state.message}</p>
        {state.whatsappUrl && (
          <a
            href={state.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-bold text-white shadow-sm transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp'tan da yazın
          </a>
        )}
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="absolute left-[-9999px] h-0 w-0" aria-hidden />

      {state.message && !state.ok && (
        <p className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden />
          {state.message}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="field-label">Ad Soyad <span className="text-red-500">*</span></label>
          <input id="c-name" name="name" className="field-input" aria-invalid={!!state.errors?.name} />
          {state.errors?.name && <p className="field-error">{state.errors.name}</p>}
        </div>
        <div>
          <label htmlFor="c-phone" className="field-label">Telefon <span className="text-red-500">*</span></label>
          <input id="c-phone" name="phone" type="tel" placeholder="05XX XXX XX XX" className="field-input" aria-invalid={!!state.errors?.phone} />
          {state.errors?.phone && <p className="field-error">{state.errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="c-email" className="field-label">E-posta</label>
        <input id="c-email" name="email" type="email" className="field-input" />
      </div>

      <div>
        <label htmlFor="c-message" className="field-label">Mesajınız <span className="text-red-500">*</span></label>
        <textarea id="c-message" name="message" rows={5} className="field-input resize-none" aria-invalid={!!state.errors?.message} />
        {state.errors?.message && <p className="field-error">{state.errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-brand-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-brand-600/30 transition-colors hover:bg-accent-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {pending ? "Gönderiliyor…" : "Mesajı Gönder"}
      </button>
    </form>
  );
}
