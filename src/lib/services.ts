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
      "Eşyalarınızı uzman ekiple paketliyor, asansörle indirip sigortalı olarak yeni evinize taşıyoruz.",
    icon: "Home",
    featured: true,
    image: images.serviceEvdenEve,
    href: "/hizmetler/evden-eve-nakliyat",
    detail: {
      intro:
        "Tek bir eşyanız bile zarar görmeden taşınsın diye paketlemeden montaja kadar her adımı biz üstleniyoruz. " +
        "Profesyonel ekibimiz, asansörlü araçlarımız ve sigortalı taşımacılığımızla taşınma stresini sizden alıyoruz.",
      highlights: [
        { icon: "Package", title: "Profesyonel Paketleme", text: "Balonlu naylon, çok katlı koli ve özel ambalajla her eşya korunur." },
        { icon: "ArrowUpDown", title: "Asansörlü Taşıma", text: "Yüksek katlara güvenli ve hızlı taşıma için mobil asansör." },
        { icon: "ShieldCheck", title: "Sigortalı Taşımacılık", text: "Tüm eşyalarınız taşıma süresince sigorta güvencesi altında." },
        { icon: "Wrench", title: "Montaj & Demontaj", text: "Mobilyalarınız uzman ustalarca sökülür ve yeni evinizde kurulur." },
      ],
      sections: [
        {
          title: "Ücretsiz keşif ve net fiyat",
          body: "Taşınma öncesi ekibimiz adresinize gelir veya görüntülü keşif yapar; eşya miktarını, kat ve asansör durumunu değerlendirip net, sürpriz çıkarmayan bir fiyat sunar.",
          bullets: ["Yerinde veya görüntülü keşif", "Yazılı, net fiyat teklifi", "Esnek randevu ve gün planlaması"],
        },
        {
          title: "Paketleme ve taşıma",
          body: "Kırılacak eşyalar özel ambalajla, beyaz eşya ve mobilyalar koruyucu örtülerle hazırlanır. Eşyalar numaralandırılır, asansörle güvenle indirilir ve donanımlı araçlarımızla taşınır.",
          bullets: ["Kırılacaklara özel ambalaj", "Beyaz eşya ve mobilyaya koruma", "Modern, kapalı kasa araç filosu"],
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
      "Parsiyel ve komple yük taşımacılığı; 81 ile düzenli sefer, canlı takip ve zamanında teslimat.",
    icon: "Truck",
    featured: true,
    image: images.serviceSehirlerArasi,
    href: "/hizmetler/sehirler-arasi-yuk-tasimaciligi",
    detail: {
      intro:
        "İster tek palet ister komple tır olsun, yükünüzü Türkiye'nin dört bir yanına güvenle ulaştırıyoruz. " +
        "Geniş araç filomuz ve düzenli sefer ağımızla hem bireysel hem kurumsal taşımalarınızda yanınızdayız.",
      highlights: [
        { icon: "Boxes", title: "Parsiyel & Komple", text: "Tek koliden komple tıra kadar her ölçekte yük taşıma." },
        { icon: "Route", title: "81 İle Sefer", text: "Düzenli sefer ağıyla Türkiye genelinde hızlı dağıtım." },
        { icon: "MapPin", title: "Canlı Takip", text: "Yükünüzün nerede olduğunu anlık olarak takip edin." },
        { icon: "ShieldCheck", title: "Sigortalı Yük", text: "Taşınan tüm yükler sigorta kapsamında güvende." },
      ],
      sections: [
        {
          title: "Parsiyel (paylaşımlı) taşıma",
          body: "Komple araç gerektirmeyen yükleriniz için ekonomik çözüm. Yükünüz hacmi kadar ücretlendirilir, düzenli seferlerle hedefe ulaşır.",
          bullets: ["Hacme göre uygun fiyat", "Düzenli sefer takvimi", "Küçük ve orta ölçekli yükler için ideal"],
        },
        {
          title: "Komple yük taşıma",
          body: "Büyük hacimli ve yoğun sevkiyatlar için kapıdan kapıya komple araç. Yükünüz tek araçla, aktarmasız ve en hızlı şekilde teslim edilir.",
          bullets: ["Kapıdan kapıya teslim", "Aktarmasız, doğrudan sevkiyat", "Kamyonet, kamyon ve tır seçenekleri"],
        },
        {
          title: "Kurumsal lojistik & dağıtım",
          body: "İşletmeniz için düzenli sevkiyat, bayi dağıtımı ve proje bazlı taşıma çözümleri. İhtiyacınıza özel planlama ve raporlama sunuyoruz.",
          bullets: ["Düzenli sevkiyat anlaşmaları", "Bayi ve şube dağıtımı", "Özel fiyatlandırma ve raporlama"],
        },
      ],
    },
  },
  {
    slug: "asansorlu-tasimacilik",
    title: "Asansörlü Taşımacılık",
    excerpt: "Yüksek katlara hızlı ve hasarsız taşıma için mobil asansör hizmeti.",
    icon: "ArrowUpDown",
    href: "/hizmetler/evden-eve-nakliyat",
  },
  {
    slug: "ofis-isyeri-tasima",
    title: "Ofis & İşyeri Taşıma",
    excerpt: "İş akışınızı aksatmadan, hafta sonu ve mesai dışı planlamayla ofis taşıma.",
    icon: "Building2",
    href: "/hizmetler/sehirler-arasi-yuk-tasimaciligi",
  },
  {
    slug: "paketleme-montaj",
    title: "Paketleme & Montaj",
    excerpt: "Profesyonel ambalaj malzemeleriyle paketleme, mobilya söküm ve kurulum.",
    icon: "Package",
    href: "/hizmetler/evden-eve-nakliyat",
  },
  {
    slug: "esya-depolama",
    title: "Eşya Depolama",
    excerpt: "Güvenlikli, sigortalı ve nem kontrollü depolarda kısa veya uzun süreli saklama.",
    icon: "Warehouse",
    href: "/hizmetler/evden-eve-nakliyat",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured);
}
