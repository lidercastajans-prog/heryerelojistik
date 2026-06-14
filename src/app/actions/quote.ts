"use server";

import { sendNotification } from "@/lib/notify";
import { site, whatsappLink } from "@/lib/site";

export type FormState = {
  ok: boolean;
  message: string;
  errors?: Record<string, string>;
  whatsappUrl?: string;
};

export const initialFormState: FormState = { ok: false, message: "" };

function clean(v: FormDataEntryValue | null): string {
  return typeof v === "string" ? v.trim() : "";
}

function isPhone(v: string): boolean {
  return v.replace(/\D/g, "").length >= 10;
}

export async function quoteAction(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  // Honeypot — botlar doldurursa sessizce başarı dön
  if (clean(formData.get("website"))) {
    return { ok: true, message: "Teşekkürler! Talebiniz alındı." };
  }

  const name = clean(formData.get("name"));
  const phone = clean(formData.get("phone"));
  const from = clean(formData.get("from"));
  const to = clean(formData.get("to"));
  const type = clean(formData.get("type"));
  const date = clean(formData.get("date"));
  const note = clean(formData.get("note"));

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Lütfen adınızı girin.";
  if (!isPhone(phone)) errors.phone = "Geçerli bir telefon numarası girin.";
  if (!from) errors.from = "Nereden taşınıyorsunuz?";
  if (!to) errors.to = "Nereye taşınıyorsunuz?";
  if (!type) errors.type = "Taşıma tipini seçin.";

  if (Object.keys(errors).length > 0) {
    return { ok: false, message: "Lütfen işaretli alanları kontrol edin.", errors };
  }

  await sendNotification({
    subject: `Yeni Teklif Talebi — ${type}`,
    lines: [
      { label: "Ad Soyad", value: name },
      { label: "Telefon", value: phone },
      { label: "Taşıma Tipi", value: type },
      { label: "Nereden", value: from },
      { label: "Nereye", value: to },
      { label: "Tarih", value: date || "Belirtilmedi" },
      { label: "Not", value: note || "-" },
    ],
  });

  // WhatsApp fallback mesajı
  const waMessage =
    `Merhaba ${site.name}, teklif talebim:\n` +
    `Ad: ${name}\nTelefon: ${phone}\nTaşıma: ${type}\n` +
    `Nereden: ${from}\nNereye: ${to}` +
    (date ? `\nTarih: ${date}` : "") +
    (note ? `\nNot: ${note}` : "");

  return {
    ok: true,
    message: "Talebiniz alındı! En kısa sürede sizi arayacağız.",
    whatsappUrl: whatsappLink(waMessage),
  };
}
