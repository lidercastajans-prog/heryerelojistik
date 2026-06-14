/**
 * Site geneli tek kaynak (Single Source of Truth).
 * Firma adı, iletişim, adres, navigasyon vb. buradan gelir.
 *
 * NOT: Aşağıdaki değerler PLACEHOLDER'dır. Gerçek firma bilgileriyle
 * (ad, telefon, WhatsApp, adres, sosyal medya) değiştirilmelidir.
 */

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const site = {
  name: "Her Yere Lojistik",
  legalName: "Her Yere Lojistik Nakliyat ve Taşımacılık",
  tagline: "Türkiye'nin her yerine güvenli, sigortalı taşımacılık.",
  description:
    "Her Yere Lojistik — Türkiye'nin her yerine evden eve nakliyat ve şehirler arası " +
    "yük taşımacılığı. Sigortalı, asansörlü ve zamanında teslimat. Saniyeler içinde online teklif alın.",

  // Canlı alan adı
  url: "https://heryerelojistik.com",

  // İletişim — telefon/WhatsApp PLACEHOLDER (gerçeğiyle değiştirilecek)
  phoneDisplay: "0850 123 45 67",
  phoneHref: "+908501234567",
  whatsapp: "905001234567", // ülke kodu + numara, + ve boşluk olmadan
  email: "info@heryerelojistik.com",

  address: {
    line: "Atatürk Mah. Lojistik Cad. No: 1",
    district: "Esenyurt",
    city: "İstanbul",
    country: "Türkiye",
    full: "Atatürk Mah. Lojistik Cad. No: 1, Esenyurt / İstanbul",
    // Google Maps embed için (placeholder konum: İstanbul)
    mapsQuery: "Esenyurt İstanbul",
  },

  hours: "Hafta içi 08:00 – 19:00 · Cumartesi 09:00 – 17:00 · 7/24 destek hattı",
  foundedYear: 1999,

  // Arama motorlarına açık mı? Önizleme/placeholder aşamasında FALSE (noindex).
  // Gerçek iletişim bilgileri girilip yayına hazır olunca TRUE yapılacak.
  indexable: false,

  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
    youtube: "https://youtube.com/",
  },

  nav: [
    { label: "Ana Sayfa", href: "/" },
    {
      label: "Hizmetler",
      href: "/#hizmetler",
      children: [
        { label: "Evden Eve Nakliyat", href: "/hizmetler/evden-eve-nakliyat" },
        {
          label: "Şehirler Arası Yük Taşımacılığı",
          href: "/hizmetler/sehirler-arasi-yuk-tasimaciligi",
        },
      ],
    },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Galeri", href: "/galeri" },
    { label: "S.S.S.", href: "/sss" },
    { label: "İletişim", href: "/iletisim" },
  ] satisfies NavItem[],
} as const;

/** Önceden doldurulmuş WhatsApp linki üretir. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** tel: linki */
export function telLink(): string {
  return `tel:${site.phoneHref}`;
}
