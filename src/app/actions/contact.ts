"use server";

import { sendNotification } from "@/lib/notify";
import { site, whatsappLink } from "@/lib/site";
import type { FormState } from "./quote";

export type { FormState } from "./quote";
export const initialContactState: FormState = { ok: false, message: "" };

function clean(v: FormDataEntryValue | null): string {
  return typeof v === "string" ? v.trim() : "";
}

function isPhone(v: string): boolean {
  return v.replace(/\D/g, "").length >= 10;
}

export async function contactAction(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  if (clean(formData.get("website"))) {
    return { ok: true, message: "Teşekkürler! Mesajınız alındı." };
  }

  const name = clean(formData.get("name"));
  const phone = clean(formData.get("phone"));
  const email = clean(formData.get("email"));
  const message = clean(formData.get("message"));

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Lütfen adınızı girin.";
  if (!isPhone(phone)) errors.phone = "Geçerli bir telefon numarası girin.";
  if (message.length < 5) errors.message = "Lütfen mesajınızı yazın.";

  if (Object.keys(errors).length > 0) {
    return { ok: false, message: "Lütfen işaretli alanları kontrol edin.", errors };
  }

  await sendNotification({
    subject: `Yeni İletişim Mesajı — ${name}`,
    lines: [
      { label: "Ad Soyad", value: name },
      { label: "Telefon", value: phone },
      { label: "E-posta", value: email || "-" },
      { label: "Mesaj", value: message },
    ],
  });

  const waMessage = `Merhaba ${site.name},\n${message}\n\n— ${name} (${phone})`;

  return {
    ok: true,
    message: "Mesajınız alındı! En kısa sürede dönüş yapacağız.",
    whatsappUrl: whatsappLink(waMessage),
  };
}
