/**
 * Şehir (bölge) landing sayfaları — yerel SEO için.
 * Her ilde ÖZGÜN içerik (giriş metni, ilçeler, güzergâhlar) — kopya/doorway değil.
 * İstanbul merkez (Kağıthane) olduğu için ağırlıklı; çevre illerle başlıyoruz.
 */

export type City = {
  slug: string;
  name: string;
  /** Sayfa başlığı/açıklaması için kısa özet */
  metaDescription: string;
  /** O ile özgü giriş metni (benzersiz) */
  intro: string[];
  /** Öne çıkan ilçeler (varsa) */
  districts?: string[];
  /** Popüler güzergâhlar (bu ilden gidilen yerler) */
  routes: string[];
};

export const cities: City[] = [
  {
    slug: "istanbul",
    name: "İstanbul",
    metaDescription:
      "İstanbul evden eve nakliyat ve şehirler arası yük taşımacılığı. Kağıthane merkezli, Avrupa ve Anadolu yakasının tamamına sigortalı, asansörlü taşıma.",
    intro: [
      "Merkezimiz İstanbul Kağıthane'de; şehrin hem Avrupa hem Anadolu yakasının tamamına evden eve nakliyat ve yük taşımacılığı hizmeti veriyoruz. Kadıköy'den Beylikdüzü'ne, Üsküdar'dan Başakşehir'e kadar dar sokak, yüksek kat, otopark ve trafik koşullarını iyi bilen ekibimizle çalışıyoruz.",
      "Asansörlü taşıma araçlarımız ve profesyonel paketleme ekibimizle eşyalarınızı ilk günkü gibi koruyor; tüm taşımaları sigorta güvencesiyle yapıyoruz. İstanbul içi taşımaların yanında, İstanbul'dan Türkiye'nin 81 iline düzenli sevkiyat sağlıyoruz.",
    ],
    districts: [
      "Kadıköy", "Üsküdar", "Beşiktaş", "Şişli", "Kağıthane", "Beyoğlu",
      "Bakırköy", "Beylikdüzü", "Esenyurt", "Başakşehir", "Maltepe", "Pendik",
      "Ataşehir", "Ümraniye", "Sarıyer", "Fatih",
    ],
    routes: ["Ankara", "İzmir", "Bursa", "Antalya", "Kocaeli", "Tekirdağ"],
  },
  {
    slug: "kocaeli",
    name: "Kocaeli",
    metaDescription:
      "Kocaeli (İzmit) evden eve nakliyat ve yük taşımacılığı. Gebze, Darıca, Çayırova, Körfez dahil tüm ilçelere sigortalı, asansörlü taşıma.",
    intro: [
      "Kocaeli'nin merkez İzmit ile birlikte Gebze, Darıca, Çayırova, Körfez, Gölcük ve diğer tüm ilçelerine evden eve nakliyat ve yük taşımacılığı hizmeti veriyoruz.",
      "İstanbul'a komşu konumumuz sayesinde Kocaeli–İstanbul taşımalarında hızlı ve ekonomik çözümler sunuyoruz. Bölgenin sanayi yoğun yapısı nedeniyle ofis, işyeri ve fabrika taşımacılığında da deneyimliyiz.",
    ],
    routes: ["İstanbul", "Ankara", "Bursa", "Sakarya", "Yalova"],
  },
  {
    slug: "tekirdag",
    name: "Tekirdağ",
    metaDescription:
      "Tekirdağ evden eve nakliyat. Çorlu, Çerkezköy, Kapaklı, Süleymanpaşa dahil tüm ilçelere sigortalı, asansörlü taşımacılık.",
    intro: [
      "Tekirdağ ve Çorlu, Çerkezköy, Kapaklı, Süleymanpaşa, Malkara ilçelerine evden eve nakliyat ve şehirler arası yük taşımacılığı yapıyoruz.",
      "Trakya'nın hızla büyüyen ve sanayisi gelişen bu bölgesinde, İstanbul'dan Tekirdağ'a taşınanların ve bölge içi taşımaların ihtiyaçlarını sigortalı ve asansörlü hizmetle karşılıyoruz.",
    ],
    routes: ["İstanbul", "Kocaeli", "Bursa", "İzmir"],
  },
  {
    slug: "bursa",
    name: "Bursa",
    metaDescription:
      "Bursa evden eve nakliyat ve şehirler arası yük taşımacılığı. Nilüfer, Osmangazi, Yıldırım ve tüm ilçelere sigortalı, asansörlü taşıma.",
    intro: [
      "Bursa'nın Nilüfer, Osmangazi, Yıldırım merkez ilçeleri başta olmak üzere tüm ilçelerine evden eve nakliyat ve yük taşımacılığı hizmeti veriyoruz.",
      "İstanbul–Bursa hattındaki düzenli seferlerimizle eşyalarınızı güvenle taşıyor; paketleme, mobilya söküm-montaj ve depolama dahil kapıdan kapıya tam hizmet sunuyoruz.",
    ],
    routes: ["İstanbul", "Kocaeli", "Yalova", "Ankara", "İzmir"],
  },
  {
    slug: "sakarya",
    name: "Sakarya",
    metaDescription:
      "Sakarya (Adapazarı) evden eve nakliyat. Serdivan, Erenler, Hendek dahil tüm ilçelere sigortalı, asansörlü taşımacılık.",
    intro: [
      "Sakarya merkez Adapazarı ile Serdivan, Erenler, Hendek ve diğer ilçelerine evden eve nakliyat ve yük taşımacılığı yapıyoruz.",
      "İstanbul ve Kocaeli'ye yakınlığı sayesinde Sakarya taşımalarında hızlı çözümler üretiyor; sigortalı ve asansörlü taşımacılıkla eşyalarınızı güvenle ulaştırıyoruz.",
    ],
    routes: ["İstanbul", "Kocaeli", "Bursa", "Ankara"],
  },
  {
    slug: "yalova",
    name: "Yalova",
    metaDescription:
      "Yalova evden eve nakliyat. Çiftlikköy, Çınarcık, Altınova dahil tüm ilçelere sigortalı, asansörlü taşımacılık.",
    intro: [
      "Yalova merkez ile Çiftlikköy, Çınarcık, Altınova, Termal ilçelerine evden eve nakliyat ve yük taşımacılığı hizmeti veriyoruz.",
      "İstanbul'a feribot ve kara yoluyla yakın konumda; hem konut hem yazlık taşımalarında deneyimli ekibimizle sigortalı ve asansörlü taşıma yapıyoruz.",
    ],
    routes: ["İstanbul", "Bursa", "Kocaeli"],
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

/** İl adından (varsa) şehir sayfası slug'ı döndürür. */
export function citySlugByName(name: string): string | undefined {
  return cities.find((c) => c.name === name)?.slug;
}
