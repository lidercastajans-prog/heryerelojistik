/**
 * FORM → WHATSAPP (10.10.2026, kullanıcı kararı "A'yı yapalım" — Oto Kuryem'deki akışın aynısı).
 *
 * E-posta bildirimi kurulu değil (Vercel'de RESEND_API_KEY yok): "Talebiniz alındı!" diyen formlar talebi firmaya
 * ULAŞTIRMIYORDU, yalnız birkaç saatte silinen sunucu loguna düşüyordu. Artık form gönderilince bilgiler hazır mesaj
 * olarak firmanın WhatsApp'ında açılır; ziyaretçi yalnız Gönder'e basar. Sunucu eylemi arka planda kayıt/e-posta
 * yedeği olarak çalışmayı sürdürür (Resend kurulursa e-posta da gider).
 *
 * Alan okuma, doğrulama ve mesaj metni TEK yerde: istemci (anında hata + WhatsApp) ve sunucu eylemi (yedek kayıt)
 * aynı kuralı kullanır — biri değişip öteki değişmezse ekran "geçerli" deyip kayıt "geçersiz" sayardı.
 * Saf modül: istemci + sunucu (yalnız `whatsappAc` tarayıcıda çağrılır).
 */
import { TASIMA_TIPLERI } from "./constants";
import { site, whatsappLink } from "./site";

/** Kırp + kontrol karakterlerini at (tek satırlık alanlarda e-posta konu satırına / mesaja satır sonu sızmasın). */
export function alanOku(v: FormDataEntryValue | null, max = 500, cokSatir = false): string {
  if (typeof v !== "string") return "";
  const s = cokSatir ? v.replace(/[\u0000-\u0009\u000b-\u001f\u007f]/g, "") : v.replace(/[\u0000-\u001f\u007f]/g, " ");
  return s.trim().slice(0, max);
}

export function telefonGecerli(v: string): boolean {
  const d = v.replace(/\D/g, "");
  return d.length >= 10 && d.length <= 13;
}

type Hatalar = Record<string, string>;

// ——— Teklif talebi (/teklif-al) ————————————————————————————————————————————————————————————————

export type TeklifAlanlari = {
  name: string;
  phone: string;
  type: string;
  from: string;
  to: string;
  /** "YYYY-MM-DD" (tarih kutusu) ya da boş */
  date: string;
  note: string;
};

export function teklifOku(fd: FormData): TeklifAlanlari {
  return {
    name: alanOku(fd.get("name"), 80),
    phone: alanOku(fd.get("phone"), 30),
    type: alanOku(fd.get("type"), 60),
    from: alanOku(fd.get("from"), 80),
    to: alanOku(fd.get("to"), 80),
    date: alanOku(fd.get("date"), 10),
    note: alanOku(fd.get("note"), 1000, true),
  };
}

export function teklifHatalari(t: TeklifAlanlari): Hatalar {
  const h: Hatalar = {};
  if (t.name.length < 2) h.name = "Lütfen adınızı girin.";
  if (!telefonGecerli(t.phone)) h.phone = "Geçerli bir telefon numarası girin.";
  if (!(TASIMA_TIPLERI as readonly string[]).includes(t.type)) h.type = "Taşıma tipini seçin.";
  if (!t.from) h.from = "Nereden taşınıyorsunuz?";
  if (!t.to) h.to = "Nereye taşınıyorsunuz?";
  return h;
}

/** "2026-10-15" → "15.10.2026" (mesajda okunur tarih); biçim tutmazsa olduğu gibi. */
function tarihMetni(v: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v);
  return m ? `${m[3]}.${m[2]}.${m[1]}` : v;
}

export function teklifMesaji(t: TeklifAlanlari): string {
  return (
    `Merhaba ${site.name}, teklif almak istiyorum:\n` +
    `Taşıma: ${t.type}\nNereden: ${t.from}\nNereye: ${t.to}` +
    (t.date ? `\nTarih: ${tarihMetni(t.date)}` : "") +
    (t.note ? `\nNot: ${t.note}` : "") +
    `\nAd: ${t.name}\nTelefon: ${t.phone}`
  );
}

// ——— İletişim formu ——————————————————————————————————————————————————————————————————————————————

export type IletisimAlanlari = { name: string; phone: string; email: string; message: string };

export function iletisimOku(fd: FormData): IletisimAlanlari {
  return {
    name: alanOku(fd.get("name"), 80),
    phone: alanOku(fd.get("phone"), 30),
    email: alanOku(fd.get("email"), 120),
    message: alanOku(fd.get("message"), 2000, true),
  };
}

export function iletisimHatalari(i: IletisimAlanlari): Hatalar {
  const h: Hatalar = {};
  if (i.name.length < 2) h.name = "Lütfen adınızı girin.";
  if (!telefonGecerli(i.phone)) h.phone = "Geçerli bir telefon numarası girin.";
  if (i.message.length < 5) h.message = "Lütfen mesajınızı yazın.";
  return h;
}

export function iletisimMesaji(i: IletisimAlanlari): string {
  return `Merhaba ${site.name},\n${i.message}\n\n— ${i.name} (${i.phone})` + (i.email ? `\n${i.email}` : "");
}

// ——— WhatsApp'ı aç —————————————————————————————————————————————————————————————————————————————

/**
 * Firmanın WhatsApp sohbetini hazır mesajla açar. Gönder TIKLAMASININ İÇİNDE (beklemeden) çağrılmalı: araya `await`
 * girerse telefon tarayıcıları yeni pencereyi engeller. Engellenirse aynı sekmede açılır.
 * Döner: açılan adres (ekranda "WhatsApp'ı Aç" düğmesi için).
 */
export function whatsappAc(mesaj: string): string {
  const url = whatsappLink(mesaj);
  const pencere = window.open(url, "_blank");
  if (pencere) pencere.opener = null;
  else window.location.href = url;
  return url;
}
