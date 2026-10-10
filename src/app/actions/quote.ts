"use server";

import { sendNotification } from "@/lib/notify";
import { whatsappLink } from "@/lib/site";
import { alanOku, teklifHatalari, teklifMesaji, teklifOku } from "@/lib/talep";
import type { FormState } from "@/lib/form-state";

/**
 * Teklif talebinin SUNUCU KAYDI. Talep firmaya WHATSAPP ile ulaşır — form gönderilince istemci hazır mesajı açar
 * (lib/talep.ts, 10.10.2026); bu eylem arka planda aynı kuralla doğrulayıp bildirim bırakır (RESEND_API_KEY yoksa
 * yalnız sunucu logu). Dönüşü ekranı değiştirmez.
 */
export async function quoteAction(_prev: FormState, formData: FormData): Promise<FormState> {
  // Honeypot — botlar doldurursa sessizce başarı dön
  if (alanOku(formData.get("website"))) {
    return { ok: true, message: "Teşekkürler!" };
  }

  const t = teklifOku(formData);
  const errors = teklifHatalari(t);
  if (Object.keys(errors).length > 0) {
    return { ok: false, message: "Lütfen işaretli alanları kontrol edin.", errors };
  }

  await sendNotification({
    subject: `Yeni Teklif Talebi — ${t.type}`,
    lines: [
      { label: "Ad Soyad", value: t.name },
      { label: "Telefon", value: t.phone },
      { label: "Taşıma Tipi", value: t.type },
      { label: "Nereden", value: t.from },
      { label: "Nereye", value: t.to },
      { label: "Tarih", value: t.date || "Belirtilmedi" },
      { label: "Not", value: t.note || "-" },
      { label: "Kanal", value: "Ziyaretçiye WhatsApp'ta hazır mesaj açıldı (göndermesi kendisinde)" },
    ],
  });

  return {
    ok: true,
    message: "Talebiniz WhatsApp'ta hazır.",
    whatsappUrl: whatsappLink(teklifMesaji(t)),
  };
}
