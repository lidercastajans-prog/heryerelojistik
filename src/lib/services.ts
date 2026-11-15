/** Hizmet verisi (statik). İleride CMS'e taşınabilir — fetchers.ts üzerinden okunur. */

import { images } from "./images";

export type IconKey =
  | "Home"
  | "Truck"
  | "ArrowUpDown"
  | "Building2"
  | "Package"
  | "Warehouse"
  | "ShieldCheck"
  | "Clock"
  | "Wrench"
  | "Boxes"
  | "MapPin"
  | "Route";

export type Service = {
  slug: string;
  title: string;
  excerpt: string;
  icon: IconKey;
  featured?: boolean;
  /** Kart/başlık görseli (opsiyonel; yoksa gradient+ikon fallback) */
  image?: string;
  /** Kart tıklanınca gidilecek sayfa */
  href: string;
  detail?: {
    intro: string;
    highlights: { icon: IconKey; title: string; text: string }[];
    sections: { title: string; body: string; bullets?: string[] }[];
  };
};

export const services: Service[] = [
  {
    slug: "evden-eve-nakliyat",
    title: "Evden Eve Nakliyat",
    excerpt:
      "Eşyalarınızı özenle paketliyor, asansörle indirip araçta sabitleyerek yeni evinize taşıyoruz.",
    icon: "Home",
    featured: true,
    image: images.serviceEvdenEve,
    href: "/hizmetler/evden-eve-nakliyat",
    detail: {
      intro:
        "Paketlemeden montaja kadar her adımı biz üstleniyoruz. " +
        "Eşyalar battaniye ve streçle sarılıyor, araçta kayışla sabitleniyor; yüksek katlarda mobil asansör kullanıyoruz.",
      highlights: [
        { icon: "Package", title: "Profesyonel Paketleme", text: "Balonlu naylon, çok katlı koli ve özel ambalajla her eşya korunur." },
        { icon: "ArrowUpDown", title: "Asansörlü Taşıma", text: "Yüksek katlara güvenli ve hızlı taşıma için mobil asansör." },
        { icon: "ShieldCheck", title: "Özenli Taşıma", text: "Mobilya battaniyesi, streç film ve sabitleme kayışıyla eşya yolda yerinden oynamaz." },
        { icon: "Wrench", title: "Montaj & Demontaj", text: "Mobilyalarınız sökülür ve yeni evinizde yeniden kurulur." },
      ],
      sections: [
        {
          title: "Fotoğrafla veya görüntülü görüşmeyle fiyat",
          body: "Eşyalarınızın fotoğrafını gönderin ya da kısa bir görüntülü görüşme yapalım. Eşya miktarını, kat ve asansör durumunu görüp fiyatı baştan konuşuruz. Teklif istemek ücretsizdir.",
          bullets: ["Fotoğraf veya görüntülü görüşmeyle değerlendirme", "Yazılı fiyat teklifi", "Esnek randevu ve gün planlaması"],
        },
        {
          title: "Paketleme ve taşıma",
          body: "Kırılacak eşyalar özel ambalajla, beyaz eşya ve mobilyalar koruyucu örtülerle hazırlanır. Eşyalar numaralandırılır, asansörle indirilir, araçta kayışla sabitlenerek taşınır.",
          bullets: ["Kırılacaklara özel ambalaj", "Beyaz eşya ve mobilyaya koruma", "Kapalı kasa araçla taşıma", "İsteğe bağlı taşıma sigortası"],
        },
        {
          title: "Yeni evde kurulum",
          body: "Eşyalarınız istediğiniz odalara yerleştirilir, mobilyalar kurulur ve ambalaj atıkları toplanır. Siz sadece yeni evinizin keyfini çıkarın.",
          bullets: ["Odalara göre yerleştirme", "Mobilya montajı", "Ambalaj atığı temizliği"],
        },
      ],
    },
  },
  {
    slug: "sehirler-arasi-yuk-tasimaciligi",
    title: "Şehirler Arası Yük Taşımacılığı",
    excerpt:
      "Parsiyel ve komple yük taşımacılığı; İstanbul'dan diğer illere planlı sevkiyat ve teslimat.",
    icon: "Truck",
    featured: true,
    image: images.serviceSehirlerArasi,
    href: "/hizmetler/sehirler-arasi-yuk-tasimaciligi",
    detail: {
      intro:
        "İster tek palet ister komple tır olsun, İstanbul'dan Marmara, Ege ve Akdeniz'e düzenli sefer yapıyoruz; diğer illere talep üzerine yük taşıyoruz. " +
        "Gideceği şehri ve yükün ölçüsünü yazın, işe uygun aracı (kamyonet, kamyon ya da tır) ve tarihi birlikte planlayalım.",
      highlights: [
        { icon: "Boxes", title: "Parsiyel & Komple", text: "Tek koliden komple tıra kadar her ölçekte yük taşıma." },
        { icon: "Route", title: "Düzenli Sefer", text: "Marmara, Ege ve Akdeniz'e düzenli sefer; diğer illere talep üzerine, yüke uygun araçla sevkiyat." },
        { icon: "MapPin", title: "Yolda Bilgilendirme", text: "Yola çıkış ve tahmini varış saatini paylaşıyor, yol boyunca telefonla bilgi veriyoruz." },
        { icon: "ShieldCheck", title: "Sabitlenmiş Yük", text: "Yük paketlenir, araçta kayış ve ara takozla sabitlenir." },
      ],
      sections: [
        {
          title: "Parsiyel (paylaşımlı) taşıma",
          body: "Komple araç gerektirmeyen yükleriniz için ekonomik çözüm. Yükünüz hacmi kadar ücretlendirilir, aynı yöne giden sevkiyatla hedefe ulaşır.",
          bullets: ["Hacme göre uygun fiyat", "Esnek sevkiyat planı", "Küçük ve orta ölçekli yükler için ideal"],
        },
        {
          title: "Komple yük taşıma",
          body: "Büyük hacimli ve yoğun sevkiyatlar için kapıdan kapıya komple araç. Yükünüz tek araçla, aktarmasız ve doğrudan teslim edilir.",
          bullets: ["Kapıdan kapıya teslim", "Aktarmasız, doğrudan sevkiyat", "Kamyonet, kamyon ve tır seçenekleri", "İsteğe bağlı taşıma sigortası"],
        },
        {
          title: "Kurumsal lojistik & dağıtım",
          body: "İşletmeniz için düzenli sevkiyat, bayi dağıtımı ve proje bazlı taşıma çözümleri. İhtiyacınıza özel planlama yapıyoruz.",
          bullets: ["Düzenli sevkiyat anlaşmaları", "Bayi ve şube dağıtımı", "İşe özel fiyatlandırma"],
        },
      ],
    },
  },
  {
    slug: "asansorlu-tasimacilik",
    title: "Asansörlü Taşımacılık",
    excerpt: "Yüksek katlarda büyük eşyayı cepheden taşımak için mobil asansör hizmeti.",
    icon: "ArrowUpDown",
    image: images.serviceAsansorlu,
    href: "/hizmetler/evden-eve-nakliyat",
  },
  {
    slug: "ofis-isyeri-tasima",
    title: "Ofis & İşyeri Taşıma",
    excerpt: "İş akışınızı aksatmadan, hafta sonu ve mesai dışı planlamayla ofis taşıma.",
    icon: "Building2",
    image: images.serviceOfis,
    href: "/hizmetler/sehirler-arasi-yuk-tasimaciligi",
  },
  {
    slug: "paketleme-montaj",
    title: "Paketleme & Montaj",
    excerpt: "Profesyonel ambalaj malzemeleriyle paketleme, mobilya söküm ve kurulum.",
    icon: "Package",
    image: images.servicePaketleme,
    href: "/hizmetler/evden-eve-nakliyat",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured);
}
