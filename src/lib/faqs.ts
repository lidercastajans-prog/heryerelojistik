/** Sık sorulan sorular (statik). */

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Taşınma için ne kadar önceden randevu almalıyım?",
    answer:
      "İdeal olarak taşınma tarihinizden 3-5 gün önce iletişime geçmeniz yeterlidir. Yoğun dönemlerde (ay başı/sonu) daha erken planlama öneririz. Acil durumlarda aynı gün hizmet için bizi arayabilirsiniz.",
  },
  {
    question: "Fiyat nasıl belirleniyor, sürpriz ek ücret var mı?",
    answer:
      "Fiyat; eşya miktarı, mesafe, kat ve asansör durumu ile ek hizmetlere (paketleme, depolama vb.) göre belirlenir. Keşif sonrası size yazılı ve net bir fiyat sunarız; üzerinde anlaştığımız tutar dışında sürpriz ücret çıkmaz.",
  },
  {
    question: "Eşyalarım sigortalı mı taşınıyor?",
    answer:
      "Evet. Tüm taşımalarımız sigorta güvencesi altındadır. Taşıma sırasında oluşabilecek olası hasarlar teminat kapsamında karşılanır.",
  },
  {
    question: "Paketleme malzemelerini siz mi sağlıyorsunuz?",
    answer:
      "Evet. Koli, balonlu naylon, streç film, mobilya örtüsü gibi tüm profesyonel ambalaj malzemeleri ekibimiz tarafından sağlanır ve paketleme bizim ekibimizce yapılır.",
  },
  {
    question: "Asansörlü taşıma her binada mümkün mü?",
    answer:
      "Mobil asansörümüz, önünde uygun park ve manevra alanı bulunan çoğu binada kullanılabilir. Keşif sırasında binanızın durumunu değerlendirip en güvenli yöntemi belirleriz.",
  },
  {
    question: "Şehirler arası yükümü canlı takip edebilir miyim?",
    answer:
      "Evet. Şehirler arası sevkiyatlarınızda yükünüzün durumunu telefonla veya iletişim hattımız üzerinden anlık olarak öğrenebilirsiniz.",
  },
  {
    question: "Eşyalarımı bir süre depolayabilir misiniz?",
    answer:
      "Elbette. Güvenlikli, sigortalı ve nem kontrollü depolarımızda eşyalarınızı kısa veya uzun süreli olarak saklayabiliriz. Taşıma ile depolamayı tek pakette de planlayabiliriz.",
  },
];
