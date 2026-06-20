/**
 * İstanbul ilçe landing sayfaları için veri.
 * Her ilçe ÖZGÜN giriş metni + gerçek semtler içerir (doorway/ince içerik değil).
 * /nakliyat/istanbul/[ilce] rotasında kullanılır.
 */

export type District = {
  slug: string;
  name: string;
  side: "Avrupa Yakası" | "Anadolu Yakası";
  intro: string;
  neighborhoods: string[];
};

export const istanbulDistricts: District[] = [
  // ——— Avrupa Yakası ———
  {
    slug: "besiktas", name: "Beşiktaş", side: "Avrupa Yakası",
    intro: "Beşiktaş, İstanbul'un en merkezi ve prestijli ilçelerinden biridir; Levent, Etiler ve Bebek'te yüksek katlı rezidanslarla dar sokaklı eski yapılar bir aradadır. Bu nedenle Beşiktaş evden eve nakliyatında doğru araç seçimi, otopark planı ve asansörlü taşıma öne çıkar.",
    neighborhoods: ["Levent", "Etiler", "Bebek", "Ortaköy", "Gayrettepe"],
  },
  {
    slug: "sisli", name: "Şişli", side: "Avrupa Yakası",
    intro: "Şişli; Mecidiyeköy, Nişantaşı ve Bomonti gibi hem iş hem konut yoğun semtleriyle İstanbul'un kalbinde yer alır. Yüksek katlı binalar ve yoğun trafik nedeniyle Şişli'de asansörlü ve planlı taşıma en güvenli yöntemdir.",
    neighborhoods: ["Mecidiyeköy", "Nişantaşı", "Bomonti", "Fulya", "Esentepe"],
  },
  {
    slug: "beyoglu", name: "Beyoğlu", side: "Avrupa Yakası",
    intro: "Beyoğlu; Cihangir, Galata ve Karaköy'ün tarihi dokusuyla dar ve eğimli sokaklara sahiptir. Bu yapı, Beyoğlu taşımalarında uygun boyutta araç ve çoğu zaman mobil asansör kullanımını gerektirir.",
    neighborhoods: ["Cihangir", "Galata", "Taksim", "Karaköy", "Tarlabaşı"],
  },
  {
    slug: "fatih", name: "Fatih", side: "Avrupa Yakası",
    intro: "Tarihi yarımadada yer alan Fatih; Aksaray, Balat ve Fener semtleriyle dar sokaklı, eski ve yoğun bir dokuya sahiptir. Fatih'te taşıma yaparken deneyimli ekip ve uygun araç seçimi büyük fark yaratır.",
    neighborhoods: ["Aksaray", "Balat", "Fener", "Çapa", "Fındıkzade"],
  },
  {
    slug: "bakirkoy", name: "Bakırköy", side: "Avrupa Yakası",
    intro: "Bakırköy; Ataköy, Florya ve Yeşilköy gibi sahil semtleriyle hem siteleri hem apartmanları barındıran yerleşik bir ilçedir. Yüksek katlı sitelerde asansörlü taşıma, Bakırköy nakliyatını hızlandırır.",
    neighborhoods: ["Ataköy", "Florya", "Yeşilköy", "Yeşilyurt", "Zuhuratbaba"],
  },
  {
    slug: "sariyer", name: "Sarıyer", side: "Avrupa Yakası",
    intro: "Sarıyer; Maslak'ın iş kuleleriyle Tarabya, Yeniköy ve Zekeriyaköy'ün villa ve site bölgelerini bir arada barındırır. Geniş yerleşim ve villa taşımaları nedeniyle Sarıyer'de planlı lojistik önemlidir.",
    neighborhoods: ["Maslak", "Tarabya", "Yeniköy", "İstinye", "Zekeriyaköy"],
  },
  {
    slug: "kagithane", name: "Kağıthane", side: "Avrupa Yakası",
    intro: "Merkez ofisimizin bulunduğu Kağıthane; Çağlayan, Gültepe ve Seyrantepe semtleriyle hızla gelişen bir konut ve iş bölgesidir. Kağıthane'de bulunduğumuz için en hızlı ve ekonomik hizmeti bu ilçede sunuyoruz.",
    neighborhoods: ["Çağlayan", "Gültepe", "Seyrantepe", "Nurtepe", "Hamidiye"],
  },
  {
    slug: "eyupsultan", name: "Eyüpsultan", side: "Avrupa Yakası",
    intro: "Eyüpsultan; tarihi merkeziyle Göktürk ve Alibeyköy gibi yeni site bölgelerini birleştirir. Hem eski mahalleler hem modern siteler için Eyüpsultan'da sigortalı ve asansörlü taşıma yapıyoruz.",
    neighborhoods: ["Göktürk", "Alibeyköy", "Akşemsettin", "Topçular", "Rami"],
  },
  {
    slug: "gaziosmanpasa", name: "Gaziosmanpaşa", side: "Avrupa Yakası",
    intro: "Gaziosmanpaşa, yoğun konut dokusuyla İstanbul'un kalabalık ilçelerindendir. Apartman ağırlıklı yapısı nedeniyle Gaziosmanpaşa taşımalarında asansörlü hizmet sık tercih edilir.",
    neighborhoods: ["Karayolları", "Sarıgöl", "Yenidoğan", "Küçükköy", "Karadeniz"],
  },
  {
    slug: "bagcilar", name: "Bağcılar", side: "Avrupa Yakası",
    intro: "Bağcılar, yoğun nüfusu ve apartman ağırlıklı yapısıyla bilinir. Bağcılar'da dar sokaklara uygun araçlar ve asansörlü taşıma ile hızlı çözümler sunuyoruz.",
    neighborhoods: ["Kirazlı", "Güneşli", "Mahmutbey", "Yıldıztepe", "Demirkapı"],
  },
  {
    slug: "bahcelievler", name: "Bahçelievler", side: "Avrupa Yakası",
    intro: "Bahçelievler; Şirinevler ve Kocasinan gibi yoğun konut semtleriyle merkezi bir ilçedir. Yüksek katlı binalarda asansörlü taşıma Bahçelievler'de zaman ve güvenlik kazandırır.",
    neighborhoods: ["Şirinevler", "Kocasinan", "Soğanlı", "Zafer", "Çobançeşme"],
  },
  {
    slug: "kucukcekmece", name: "Küçükçekmece", side: "Avrupa Yakası",
    intro: "Küçükçekmece; Halkalı, Sefaköy ve Atakent gibi geniş yerleşimleriyle İstanbul'un en kalabalık ilçelerindendir. Çok sayıda mahallesi nedeniyle Küçükçekmece'de bölgeyi iyi bilen ekip avantaj sağlar.",
    neighborhoods: ["Halkalı", "Sefaköy", "Atakent", "Cennet", "Kanarya"],
  },
  {
    slug: "avcilar", name: "Avcılar", side: "Avrupa Yakası",
    intro: "Avcılar; Ambarlı ve Firuzköy semtleriyle sahil ve konut bölgelerini bir arada barındırır. Avcılar taşımalarında sigortalı ve asansörlü hizmetle eşyalarınızı güvenle taşıyoruz.",
    neighborhoods: ["Ambarlı", "Firuzköy", "Denizköşkler", "Cihangir", "Tahtakale"],
  },
  {
    slug: "basaksehir", name: "Başakşehir", side: "Avrupa Yakası",
    intro: "Başakşehir; Kayaşehir ve Bahçeşehir gibi yeni ve yüksek katlı site bölgeleriyle hızla büyüyen bir ilçedir. Modern sitelerde asansörlü taşıma Başakşehir için idealdir.",
    neighborhoods: ["Kayaşehir", "Bahçeşehir", "Başak", "Güvercintepe", "Ziya Gökalp"],
  },
  {
    slug: "esenyurt", name: "Esenyurt", side: "Avrupa Yakası",
    intro: "Esenyurt; yoğun siteleri ve hızla artan nüfusuyla İstanbul'un en kalabalık ilçesidir. Yüksek katlı sitelerde asansörlü ve planlı taşıma Esenyurt'ta önemlidir.",
    neighborhoods: ["Cumhuriyet", "Bağlarçeşme", "Yenikent", "Saadetdere", "Pınar"],
  },
  {
    slug: "beylikduzu", name: "Beylikdüzü", side: "Avrupa Yakası",
    intro: "Beylikdüzü; modern siteleri ve planlı yerleşimiyle Avrupa yakasının gözde konut bölgelerindendir. Geniş cadde ve sitelerde asansörlü taşıma ile Beylikdüzü taşımalarını hızlı tamamlıyoruz.",
    neighborhoods: ["Cumhuriyet", "Gürpınar", "Kavaklı", "Adnan Kahveci", "Yakuplu"],
  },
  {
    slug: "buyukcekmece", name: "Büyükçekmece", side: "Avrupa Yakası",
    intro: "Büyükçekmece; Mimarsinan ve Kumburgaz gibi sahil semtleriyle hem siteleri hem müstakil konutları barındırır. Büyükçekmece'de yazlık ve konut taşımalarında deneyimliyiz.",
    neighborhoods: ["Mimarsinan", "Kumburgaz", "Türkoba", "Güzelce", "Cumhuriyet"],
  },
  {
    slug: "bayrampasa", name: "Bayrampaşa", side: "Avrupa Yakası",
    intro: "Bayrampaşa, merkezi konumu ve kolay ulaşımıyla bilinen yoğun bir konut ilçesidir. Apartman taşımalarında asansörlü hizmetle Bayrampaşa'da hızlı çözümler sunuyoruz.",
    neighborhoods: ["Kartaltepe", "Yıldırım", "Vatan", "Terazidere", "Muratpaşa"],
  },
  {
    slug: "zeytinburnu", name: "Zeytinburnu", side: "Avrupa Yakası",
    intro: "Zeytinburnu; sahil hattı ve yoğun konut dokusuyla tarihi yarımadaya komşu bir ilçedir. Zeytinburnu taşımalarında dar sokaklara uygun araç ve asansörlü taşıma tercih edilir.",
    neighborhoods: ["Merkezefendi", "Kazlıçeşme", "Seyitnizam", "Telsiz", "Veliefendi"],
  },
  {
    slug: "gungoren", name: "Güngören", side: "Avrupa Yakası",
    intro: "Güngören; Merter'in tekstil ve iş bölgesiyle yoğun konutları bir arada barındırır. Dar sokaklı yapısı nedeniyle Güngören'de planlı taşıma önemlidir.",
    neighborhoods: ["Merter", "Tozkoparan", "Mareşal Çakmak", "Akıncılar", "Güneştepe"],
  },
  {
    slug: "esenler", name: "Esenler", side: "Avrupa Yakası",
    intro: "Esenler, apartman yoğun yapısı ve otogara yakınlığıyla bilinen bir ilçedir. Esenler taşımalarında asansörlü ve sigortalı hizmet sunuyoruz.",
    neighborhoods: ["Menderes", "Oruçreis", "Fevzi Çakmak", "Havaalanı", "Birlik"],
  },
  {
    slug: "sultangazi", name: "Sultangazi", side: "Avrupa Yakası",
    intro: "Sultangazi, yoğun konut alanlarıyla İstanbul'un kalabalık ilçelerindendir. Sultangazi'de apartman taşımalarında asansörlü hizmetle hız kazandırıyoruz.",
    neighborhoods: ["Cebeci", "Habibler", "Gazi", "Esentepe", "50. Yıl"],
  },
  {
    slug: "arnavutkoy", name: "Arnavutköy", side: "Avrupa Yakası",
    intro: "Arnavutköy; İstanbul Havalimanı'na yakınlığıyla hızla gelişen bir bölgedir. Hadımköy ve Taşoluk gibi semtlerde konut ve sanayi taşımaları yapıyoruz.",
    neighborhoods: ["Hadımköy", "Taşoluk", "Bolluca", "Haraççı", "Anadolu"],
  },
  {
    slug: "catalca", name: "Çatalca", side: "Avrupa Yakası",
    intro: "Çatalca; geniş alanı ve kentsel-kırsal karışık yapısıyla İstanbul'un en büyük yüzölçümlü ilçelerindendir. Çatalca merkez ve köylerine uzun mesafe taşımalarda deneyimliyiz.",
    neighborhoods: ["Ferhatpaşa", "Kaleiçi", "Çakıl", "Çanakça", "Subaşı"],
  },
  {
    slug: "silivri", name: "Silivri", side: "Avrupa Yakası",
    intro: "Silivri; sahil şeridi ve yazlık siteleriyle Marmara kıyısında yer alır. Silivri'de hem konut hem yazlık taşımalarını sigortalı olarak gerçekleştiriyoruz.",
    neighborhoods: ["Selimpaşa", "Gümüşyaka", "Değirmenköy", "Alibey", "Piri Mehmet Paşa"],
  },

  // ——— Anadolu Yakası ———
  {
    slug: "kadikoy", name: "Kadıköy", side: "Anadolu Yakası",
    intro: "Kadıköy; Moda, Caddebostan ve Göztepe gibi sevilen semtleriyle Anadolu yakasının merkezidir. Yoğun apartman dokusu ve trafiği nedeniyle Kadıköy'de asansörlü ve planlı taşıma en güvenli yöntemdir.",
    neighborhoods: ["Moda", "Caddebostan", "Fenerbahçe", "Göztepe", "Kozyatağı", "Bostancı"],
  },
  {
    slug: "uskudar", name: "Üsküdar", side: "Anadolu Yakası",
    intro: "Üsküdar; Çengelköy ve Kuzguncuk'un tarihi dokusuyla Altunizade'nin modern yapılarını birleştirir. Dar sokaklı semtleri nedeniyle Üsküdar taşımalarında uygun araç ve mobil asansör önem taşır.",
    neighborhoods: ["Çengelköy", "Kuzguncuk", "Acıbadem", "Altunizade", "Beylerbeyi"],
  },
  {
    slug: "atasehir", name: "Ataşehir", side: "Anadolu Yakası",
    intro: "Ataşehir; Batı Ataşehir'in finans merkezi ve modern siteleriyle Anadolu yakasının yükselen ilçesidir. Yüksek katlı binalarda asansörlü taşıma Ataşehir için idealdir.",
    neighborhoods: ["Barbaros", "Batı Ataşehir", "İçerenköy", "Küçükbakkalköy", "Ferhatpaşa"],
  },
  {
    slug: "umraniye", name: "Ümraniye", side: "Anadolu Yakası",
    intro: "Ümraniye; yoğun konut ve iş bölgeleriyle Anadolu yakasının kalabalık ilçelerindendir. Ümraniye taşımalarında asansörlü ve sigortalı hizmetle eşyalarınızı koruyoruz.",
    neighborhoods: ["Çakmak", "Atakent", "Site", "Tatlısu", "İnkılap"],
  },
  {
    slug: "maltepe", name: "Maltepe", side: "Anadolu Yakası",
    intro: "Maltepe; sahil hattı ve siteleriyle Anadolu yakasının gözde konut bölgelerindendir. Maltepe'de yüksek katlı sitelerde asansörlü taşıma tercih edilir.",
    neighborhoods: ["Bağlarbaşı", "Cevizli", "Küçükyalı", "İdealtepe", "Fındıklı"],
  },
  {
    slug: "kartal", name: "Kartal", side: "Anadolu Yakası",
    intro: "Kartal; yüksek katlı yeni konut projeleri ve sahiliyle hızla gelişen bir ilçedir. Kartal taşımalarında asansörlü hizmetle güvenli ve hızlı çözümler sunuyoruz.",
    neighborhoods: ["Soğanlık", "Yakacık", "Cevizli", "Orhantepe", "Kordonboyu"],
  },
  {
    slug: "pendik", name: "Pendik", side: "Anadolu Yakası",
    intro: "Pendik; Kurtköy ve Kaynarca gibi geniş semtleriyle hem konut hem sanayi barındıran büyük bir ilçedir. Sabiha Gökçen'e yakın Pendik'te konut ve ofis taşımalarında deneyimliyiz.",
    neighborhoods: ["Kaynarca", "Çamçeşme", "Velibaba", "Kurtköy", "Güzelyalı"],
  },
  {
    slug: "tuzla", name: "Tuzla", side: "Anadolu Yakası",
    intro: "Tuzla; tersaneleri, organize sanayisi ve sahil konutlarıyla bilinen bir ilçedir. Tuzla'da hem konut hem işyeri/fabrika taşımalarında çözümler üretiyoruz.",
    neighborhoods: ["Aydınlı", "İçmeler", "Şifa", "Postane", "Anadolu"],
  },
  {
    slug: "sancaktepe", name: "Sancaktepe", side: "Anadolu Yakası",
    intro: "Sancaktepe; Sarıgazi ve Samandıra gibi hızla büyüyen konut bölgeleriyle gelişen bir ilçedir. Sancaktepe taşımalarında sigortalı ve asansörlü hizmet veriyoruz.",
    neighborhoods: ["Sarıgazi", "Samandıra", "Yenidoğan", "Eyüp Sultan", "Abdurrahmangazi"],
  },
  {
    slug: "sultanbeyli", name: "Sultanbeyli", side: "Anadolu Yakası",
    intro: "Sultanbeyli, yoğun konut dokusuyla Anadolu yakasının gelişen ilçelerindendir. Sultanbeyli'de apartman taşımalarında asansörlü hizmetle hız kazandırıyoruz.",
    neighborhoods: ["Abdurrahmangazi", "Mehmet Akif", "Battalgazi", "Fatih", "Hasanpaşa"],
  },
  {
    slug: "cekmekoy", name: "Çekmeköy", side: "Anadolu Yakası",
    intro: "Çekmeköy; Taşdelen ve Alemdağ gibi villa ve site bölgeleriyle yeşil bir konut ilçesidir. Çekmeköy'de villa ve site taşımalarında planlı lojistik sunuyoruz.",
    neighborhoods: ["Taşdelen", "Alemdağ", "Ömerli", "Mimarsinan", "Hamidiye"],
  },
  {
    slug: "beykoz", name: "Beykoz", side: "Anadolu Yakası",
    intro: "Beykoz; ormanları, Boğaz kıyısı ve yalılarıyla İstanbul'un en yeşil ilçelerindendir. Kavacık'ın iş merkezleriyle sahil yalıları için Beykoz'da özel planlı taşıma yapıyoruz.",
    neighborhoods: ["Kavacık", "Paşabahçe", "Anadoluhisarı", "Çubuklu", "Kanlıca"],
  },
  {
    slug: "sile", name: "Şile", side: "Anadolu Yakası",
    intro: "Şile; Karadeniz kıyısındaki yazlıkları ve doğasıyla bilinen bir ilçedir. Şile'de özellikle yazlık ev taşımalarında deneyimli ekibimizle hizmet veriyoruz.",
    neighborhoods: ["Ağva", "Çayırbaşı", "Balibey", "Kumbaba", "Hacıllı"],
  },
  {
    slug: "adalar", name: "Adalar", side: "Anadolu Yakası",
    intro: "Adalar; Büyükada, Heybeliada ve Burgazada'dan oluşan, araç trafiğinin kısıtlı olduğu özel bir ilçedir. Adalar'a taşıma, feribot ve ada içi lojistik nedeniyle önceden planlama gerektirir; bu konuda deneyimliyiz.",
    neighborhoods: ["Büyükada", "Heybeliada", "Burgazada", "Kınalıada", "Maden"],
  },
];

export function getIstanbulDistrict(slug: string): District | undefined {
  return istanbulDistricts.find((d) => d.slug === slug);
}
