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
  tagline: "İstanbul merkezli evden eve nakliyat ve şehirler arası taşımacılık.",
  description:
    "Her Yere Lojistik — İstanbul merkezli evden eve nakliyat ve şehirler arası yük taşımacılığı. " +
    "Marmara, Ege ve Akdeniz'e düzenli sefer, diğer illere talep üzerine. Özenli paketleme, asansörlü taşıma. " +
    "Fotoğraf gönderin, fiyat alın.",

  // Canlı alan adı
  url: "https://heryerelojistik.com",

  // İletişim
  phoneDisplay: "0533 929 83 24",
  phoneHref: "+905339298324",
  whatsapp: "905339298324", // ülke kodu + numara, + ve boşluk olmadan
  // Alan adı e-postası: ImprovMX ile heryerelojistik@gmail.com kutusuna yönlendiriliyor.
  email: "info@heryerelojistik.com",

  address: {
    line: "Merkez Mah. Kağıthane Cad. No:39 Kat:2 D:4",
    district: "Kağıthane",
    city: "İstanbul",
    postalCode: "34406",
    country: "Türkiye",
    // Google İşletme Profili'ndeki adresle birebir aynı yazım (ad-adres-telefon tutarlılığı yerel sıralamayı etkiler).
    full: "Merkez Mah. Kağıthane Cad. No:39 Kat:2 D:4, 34406 Kağıthane/İstanbul",
    mapsQuery: "Merkez Mah. Kağıthane Cad. No:39 Kağıthane İstanbul",
  },

  hours: "7/24 — Haftanın her günü, 24 saat hizmet",
  foundedYear: 2024,

  // Arama motorlarına açık mı? Yayında ve gerçek bilgilerle: TRUE.
  indexable: true,

  social: {
    // Instagram işletme hesabı 15.11.2026'da açıldı (ajans yönetiyor). Facebook Sayfası yeniden açılınca eklenecek.
    instagram: "https://www.instagram.com/heryerelojistik/",
    facebook: "",
    linkedin: "",
    youtube: "",
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
        { label: "Hizmet Bölgeleri", href: "/nakliyat" },
      ],
    },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Blog", href: "/blog" },
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
