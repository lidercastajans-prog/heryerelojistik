"use server";

import { sendNotification } from "@/lib/notify";
import { whatsappLink } from "@/lib/site";
import { alanOku, iletisimHatalari, iletisimMesaji, iletisimOku } from "@/lib/talep";
import type { FormState } from "@/lib/form-state";

/**
 * İletişim mesajının SUNUCU KAYDI. Mesaj firmaya WHATSAPP ile ulaşır — form gönderilince istemci hazır mesajı açar
 * (lib/talep.ts, 10.10.2026); bu eylem arka planda aynı kuralla doğrulayıp bildirim bırakır (RESEND_API_KEY yoksa
 * yalnız sunucu logu). Dönüşü ekranı değiştirmez.
 */
export async function contactAction(_prev: FormState, formData: FormData): Promise<FormState> {
  if (alanOku(formData.get("website"))) {
    return { ok: true, message: "Teşekkürler!" };
  }

  const i = iletisimOku(formData);
  const errors = iletisimHatalari(i);
  if (Object.keys(errors).length > 0) {
    return { ok: false, message: "Lütfen işaretli alanları kontrol edin.", errors };
  }

  await sendNotification({
    subject: `Yeni İletişim Mesajı — ${i.name}`,
    lines: [
      { label: "Ad Soyad", value: i.name },
      { label: "Telefon", value: i.phone },
      { label: "E-posta", value: i.email || "-" },
      { label: "Mesaj", value: i.message },
      { label: "Kanal", value: "Ziyaretçiye WhatsApp'ta hazır mesaj açıldı (göndermesi kendisinde)" },
    ],
  });

  return {
    ok: true,
    message: "Mesajınız WhatsApp'ta hazır.",
    whatsappUrl: whatsappLink(iletisimMesaji(i)),
  };
}
