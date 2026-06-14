/** Müşteri yorumları (statik / placeholder). Gerçek yorumlarla değiştirin. */

export type Testimonial = {
  name: string;
  role: string;
  rating: number; // 1-5
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Elif K.",
    role: "İstanbul → İzmir, Evden Eve",
    rating: 5,
    text: "Paketlemeden montaja kadar her şey kusursuzdu. Tek bir eşyam bile zarar görmedi, ekip çok düzenliydi. Kesinlikle tavsiye ederim.",
  },
  {
    name: "Murat A.",
    role: "Ofis Taşıma, Ankara",
    rating: 5,
    text: "Ofisimizi hafta sonu taşıdılar, pazartesi sorunsuz çalışmaya başladık. Profesyonellik tam not.",
  },
  {
    name: "Selin D.",
    role: "Şehirler Arası Yük",
    rating: 5,
    text: "Yükümü canlı takip edebilmek harikaydı. Söz verdikleri saatte teslim ettiler. İletişim çok iyiydi.",
  },
  {
    name: "Caner T.",
    role: "İstanbul → Bursa, Evden Eve",
    rating: 5,
    text: "Asansörlü taşıma sayesinde 7. kattan eşyalar dakikalar içinde indi. Fiyat da baştan netti, sürpriz yok.",
  },
  {
    name: "Zeynep Y.",
    role: "Eşya Depolama",
    rating: 5,
    text: "Eşyalarımı 3 ay depolarında sakladılar, teslim aldığımda ilk günkü gibiydi. Güven veren bir firma.",
  },
  {
    name: "Okan B.",
    role: "Kurumsal Dağıtım",
    rating: 5,
    text: "Bayi dağıtımımızı aylardır onlarla yapıyoruz. Hiç aksama yaşamadık, raporlama da çok şeffaf.",
  },
];
