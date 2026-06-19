/** Blog yazıları (statik). Yeni yazı eklemek için diziye bir nesne eklemeniz yeterli. */

import { uns } from "./images";

export type PostSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO (YYYY-MM-DD)
  readMinutes: number;
  cover?: string;
  sections: PostSection[];
};

export const posts: Post[] = [
  {
    slug: "istanbul-evden-eve-nakliyat-ilceler",
    title: "İstanbul Evden Eve Nakliyat: Tüm İlçeler Rehberi (Avrupa & Anadolu Yakası)",
    excerpt:
      "İstanbul'un 39 ilçesinde evden eve nakliyat. Avrupa ve Anadolu yakasının tüm ilçelerinde sigortalı, asansörlü taşıma ve ilçeye özel pratik bilgiler.",
    date: "2026-06-14",
    readMinutes: 9,
    cover: uns("photo-1485575301924-6891ef935dcd", 1200),
    sections: [
      {
        paragraphs: [
          "Merkezimiz İstanbul Kağıthane'de; şehrin hem Avrupa hem Anadolu yakasının 39 ilçesinin tamamına evden eve nakliyat ve yük taşımacılığı hizmeti veriyoruz. İstanbul'da taşınmak; yoğun trafik, dar sokaklar, yüksek katlı binalar ve otopark/asansör koşulları nedeniyle özel deneyim gerektirir. Bu rehberde her iki yakanın ilçelerini ve dikkat edilmesi gerekenleri derledik.",
        ],
      },
      {
        heading: "Avrupa Yakası İlçeleri",
        paragraphs: [
          "Avrupa yakasının merkezi semtlerinden yeni yerleşim bölgelerine kadar tüm ilçelerde asansörlü ve sigortalı taşıma yapıyoruz:",
        ],
        bullets: [
          "Bakırköy — sahil hattı, yoğun apartman; asansörlü taşıma sık tercih edilir.",
          "Beşiktaş — merkezi konum, dar sokaklar ve sınırlı otopark; planlı taşıma şart.",
          "Beyoğlu — tarihi doku ve dar sokaklar; uygun araç ve mobil asansör avantaj sağlar.",
          "Şişli — iş ve konut yoğun; yüksek katlı binalarda asansörlü taşıma.",
          "Kağıthane — merkez ofisimizin bulunduğu ilçe; en hızlı ve ekonomik hizmet.",
          "Sarıyer — geniş yerleşim, villa ve siteler; planlı lojistik gerektirir.",
          "Eyüpsultan — yeni siteler ile eski mahallelerin bir arada olduğu ilçe.",
          "Gaziosmanpaşa — yoğun konut alanı; apartman taşımaları.",
          "Bayrampaşa — merkezi ve ulaşımı kolay konum.",
          "Zeytinburnu — sahil ve yoğun konut dokusu.",
          "Fatih — tarihi yarımada, dar sokaklar; deneyimli ekip önemli.",
          "Bağcılar — yoğun nüfus, apartman ağırlıklı yapı.",
          "Bahçelievler — yoğun konut; asansörlü taşıma sıkça kullanılır.",
          "Güngören — dar sokaklar ve yoğun yerleşim.",
          "Esenler — apartman yoğun bölge.",
          "Küçükçekmece — geniş ilçe, çok sayıda mahalle.",
          "Avcılar — konut ve kampüs bölgesi; sahil hattı.",
          "Başakşehir — yeni siteler ve yüksek katlı modern yapı.",
          "Esenyurt — hızla büyüyen, yoğun siteler.",
          "Beylikdüzü — modern siteler ve planlı yerleşim.",
          "Büyükçekmece — sahil; site ve müstakil konut karışık.",
          "Sultangazi — yoğun konut alanı.",
          "Arnavutköy — gelişen bölge, havalimanına yakın.",
          "Çatalca — geniş alan, kentsel ve kırsal bir arada.",
          "Silivri — sahil; yazlık ve konut taşımaları.",
        ],
      },
      {
        heading: "Anadolu Yakası İlçeleri",
        paragraphs: [
          "Anadolu yakasının tüm ilçelerinde, sahil semtlerinden yeni site bölgelerine kadar evden eve nakliyat hizmeti sunuyoruz:",
        ],
        bullets: [
          "Kadıköy — Anadolu yakasının merkezi; yoğun apartman ve trafik.",
          "Üsküdar — tarihi ve konut dokusu; dar sokaklar.",
          "Ataşehir — modern siteler ve yüksek katlı binalar.",
          "Ümraniye — yoğun konut ve iş bölgesi.",
          "Maltepe — sahil hattı ve siteler.",
          "Kartal — gelişen, yüksek katlı konut projeleri.",
          "Pendik — geniş ilçe; yeni siteler ve sanayi.",
          "Tuzla — sanayi ve konut; organize bölgeler.",
          "Sancaktepe — hızla büyüyen konut alanı.",
          "Sultanbeyli — yoğun konut bölgesi.",
          "Çekmeköy — yeni siteler ve villa bölgeleri.",
          "Beykoz — orman ve sahil; villa/yalı taşımaları.",
          "Şile — kıyı bölgesi; yazlık taşımaları.",
          "Adalar — feribotla erişim; özel planlama gerektirir.",
        ],
      },
      {
        heading: "İstanbul'da taşınırken dikkat edilmesi gerekenler",
        bullets: [
          "Trafik yoğunluğu: Mümkünse hafta içi ve gündüz erken saatler tercih edilmeli.",
          "Otopark ve izin: Bazı merkezi ilçelerde araç için geçici park/zabıta izni gerekebilir.",
          "Asansörlü taşıma: Yüksek katlarda mobil asansör hem süreyi kısaltır hem hasarı önler.",
          "Dar sokaklar: Tarihi ve merkezi semtlerde uygun boyutta araç seçimi kritiktir.",
          "Erken planlama: Ay başı/sonu yoğun dönemlerde randevuyu önceden almak gerekir.",
        ],
      },
      {
        heading: "İstanbul'un her ilçesine hizmet",
        paragraphs: [
          "Yukarıdaki tüm ilçelerde ve mahallelerinde evden eve nakliyat, ofis taşıma, paketleme, asansörlü taşıma ve eşya depolama hizmeti veriyoruz. İlçenize özel net fiyat için ücretsiz keşif talep edebilir, hemen teklif alabilirsiniz.",
        ],
      },
    ],
  },
  {
    slug: "evden-eve-nakliyat-fiyatlari",
    title: "Evden Eve Nakliyatta Fiyatı Etkileyen 7 Faktör",
    excerpt:
      "Nakliyat teklifleri neden firmadan firmaya değişir? Fiyatı belirleyen 7 temel faktörü ve nasıl tasarruf edebileceğinizi açıklıyoruz.",
    date: "2026-06-10",
    readMinutes: 5,
    cover: uns("photo-1600725935160-f67ee4f6084a", 1200),
    sections: [
      {
        paragraphs: [
          "Evden eve nakliyat fiyatı her taşınmada farklıdır; çünkü taşımanın maliyeti tek bir şeye değil, birçok faktöre bağlıdır. Aşağıda fiyatı belirleyen 7 temel etkeni ve her birinde nasıl tasarruf edebileceğinizi anlattık.",
        ],
      },
      {
        heading: "1. Mesafe ve güzergâh",
        paragraphs: [
          "Şehir içi bir taşıma ile şehirler arası taşımanın maliyeti farklıdır. Mesafe arttıkça yakıt, sürüş süresi ve araç tahsisi maliyeti yükselir. Parsiyel (paylaşımlı) taşıma seçeneği, uzun mesafelerde komple araca göre ciddi tasarruf sağlayabilir.",
        ],
      },
      {
        heading: "2. Eşya miktarı ve hacmi",
        paragraphs: [
          "Fiyat çoğunlukla eşyalarınızın kapladığı hacme (metreküp) göre belirlenir. Taşınmadan önce kullanmadığınız eşyaları elemek hem hacmi hem de fiyatı düşürür.",
        ],
      },
      {
        heading: "3. Kat ve asansör durumu",
        paragraphs: [
          "Yüksek katlar ve asansörsüz binalar iş gücünü ve süreyi artırır. Mobil asansör kullanımı bu durumda hem güvenliği artırır hem de toplam maliyeti dengeleyebilir. Binanızın durumunu keşif sırasında net paylaşmak sürpriz ücretleri önler.",
        ],
      },
      {
        heading: "4. Paketleme hizmeti",
        paragraphs: [
          "Paketlemeyi kendiniz mi yapacaksınız yoksa profesyonel ekip mi? Profesyonel paketleme ek maliyet getirir ancak kırılma/hasar riskini ciddi şekilde azaltır. Kırılacak ve değerli eşyalarda profesyonel paketleme önerilir.",
        ],
      },
      {
        heading: "5. Ek hizmetler ve depolama",
        paragraphs: [
          "Mobilya söküm-montaj, beyaz eşya bağlantıları ve eşya depolama gibi ek hizmetler fiyata yansır. İhtiyacınız olmayan hizmetleri baştan belirleyerek gereksiz maliyetten kaçınabilirsiniz.",
        ],
      },
      {
        heading: "6. Taşıma tarihi ve sezon",
        paragraphs: [
          "Ay başı, ay sonu ve yaz ayları nakliyatta yoğun dönemlerdir; bu tarihlerde fiyatlar artabilir. Mümkünse hafta içi ve ay ortası bir tarih seçmek daha uygun fiyat sağlayabilir.",
        ],
      },
      {
        heading: "7. Sigorta",
        paragraphs: [
          "Sigortalı taşıma, olası hasarlara karşı sizi korur. Fiyat teklifini değerlendirirken sigorta kapsamının dahil olup olmadığını mutlaka sorun. Her Yere Lojistik'te tüm taşımalar sigorta güvencesi altındadır.",
        ],
      },
      {
        heading: "Net fiyat için ücretsiz keşif",
        paragraphs: [
          "En doğru fiyat, eşyalarınızı gören bir keşifle çıkar. Ücretsiz keşif (yerinde veya görüntülü) sonrası size yazılı ve sürpriz çıkarmayan bir teklif sunuyoruz. Hemen teklif almak için formu doldurabilir veya bizi arayabilirsiniz.",
        ],
      },
    ],
  },
  {
    slug: "tasinma-oncesi-kontrol-listesi",
    title: "Taşınmadan Önce Yapılması Gereken 10 Şey",
    excerpt:
      "Taşınma stresini en aza indirmek için pratik bir kontrol listesi. Erken planlamadan ilk gün kutusuna kadar adım adım.",
    date: "2026-06-05",
    readMinutes: 6,
    cover: uns("photo-1580709839515-54b8991e2813", 1200),
    sections: [
      {
        paragraphs: [
          "İyi planlanmış bir taşınma, stresin büyük kısmını ortadan kaldırır. İşte taşınma gününden önce tamamlamanız gereken 10 maddelik pratik kontrol listesi.",
        ],
      },
      {
        heading: "Adım adım kontrol listesi",
        bullets: [
          "Erken planlayın: Taşınma tarihinizden en az 1-2 hafta önce nakliyat firmasıyla görüşün ve keşif yaptırın.",
          "Eşya eleyin: Kullanmadığınız eşyaları bağışlayın, satın veya atın — daha az eşya, daha düşük maliyet.",
          "Abonelik ve adres güncelleyin: Elektrik, su, doğalgaz, internet ve resmi adres bilgilerinizi planlayın.",
          "Koli ve malzeme temin edin: Kendiniz paketleyecekseniz koli, balonlu naylon ve bant alın; ya da profesyonel paketleme isteyin.",
          "Değerli eşyaları ayırın: Mücevher, evrak ve nakit gibi değerli/önemli eşyaları kendiniz taşıyın.",
          "Beyaz eşyaları hazırlayın: Buzdolabını taşımadan 24 saat önce kapatıp defrost edin; çamaşır makinesinin suyunu boşaltın.",
          "Kırılacakları işaretleyin: Kırılacak kolilerin üzerine 'DİKKAT' yazın ve hangi odaya ait olduğunu belirtin.",
          "İlk gün kutusu hazırlayın: Yeni evde ilk gün lazım olacaklar (şarj aleti, ilaç, havlu, temel mutfak) için ayrı bir kutu.",
          "Çocuk ve evcil hayvan planı: Taşıma günü için güvenli bir düzen kurun.",
          "Nakliyeciyle teyitleşin: Taşıma gününden 1 gün önce saat, adres ve detayları teyit edin.",
        ],
      },
      {
        heading: "Profesyonel destek",
        paragraphs: [
          "Bu adımların çoğunu sizin yerinize biz üstlenebiliriz: paketleme, söküm-montaj, asansörlü taşıma ve yerleştirme dahil. Siz sadece yeni evinizin keyfini çıkarın.",
        ],
      },
    ],
  },
  {
    slug: "esya-paketleme-rehberi",
    title: "Eşya Paketleme Rehberi: Eşyalarınızı Doğru Koruyun",
    excerpt:
      "Kırılacaklardan beyaz eşyaya, elektronikten kitaplara kadar eşyalarınızı hasarsız taşımanın püf noktaları.",
    date: "2026-05-28",
    readMinutes: 7,
    cover: uns("photo-1616432043562-3671ea2e5242", 1200),
    sections: [
      {
        paragraphs: [
          "Doğru paketleme, taşıma sırasındaki hasarların önüne geçmenin en etkili yoludur. Eşya türüne göre paketleme ipuçlarını derledik.",
        ],
      },
      {
        heading: "Doğru malzemeler",
        paragraphs: [
          "Sağlam çok katlı koliler, balonlu naylon, streç film, kâğıt/gazete, koli bandı ve etiket temel malzemelerdir. Koliyi aşırı doldurmayın; ağır eşyaları küçük kolilere koyun.",
        ],
      },
      {
        heading: "Kırılacak eşyalar",
        paragraphs: [
          "Tabak gibi düz eşyaları yatay değil dik yerleştirin; her birini ayrı ayrı sarın. Boşlukları kâğıtla doldurarak hareket etmesini önleyin ve koliyi 'kırılacak' olarak işaretleyin.",
        ],
      },
      {
        heading: "Mobilyalar",
        paragraphs: [
          "Sökülebilen mobilyaları sökün; vida ve küçük parçaları poşetleyip mobilyaya sabitleyin. Yüzeyleri battaniye/streç ile koruyun. Söküm-montajı uzmanına bırakmak en güvenlisidir.",
        ],
      },
      {
        heading: "Beyaz eşya ve elektronik",
        paragraphs: [
          "Buzdolabını önceden defrost edin, çamaşır/bulaşık makinesinin suyunu boşaltın. Mümkünse elektroniklerin orijinal kutularını kullanın; kabloları etiketleyip ayrı poşetlerde saklayın.",
        ],
      },
      {
        heading: "Kitap ve ağır eşyalar",
        paragraphs: [
          "Kitapları küçük kolilere ve sırtları aşağı bakacak şekilde dizin. Koli ağırlığını taşınabilir seviyede tutun; aşırı ağır koliler hem sizin hem ekibin güvenliğini riske atar.",
        ],
      },
      {
        heading: "Etiketleme",
        paragraphs: [
          "Her koliye içindekileri ve ait olduğu odayı yazın. Bu, yeni evde yerleştirmeyi hızlandırır ve hiçbir şeyin kaybolmamasını sağlar. Profesyonel paketleme hizmetimizde tüm bu adımları biz yapıyoruz.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));
