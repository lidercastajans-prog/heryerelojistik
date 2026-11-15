/** Sık sorulan sorular (statik). */

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Taşınma için ne kadar önceden randevu almalıyım?",
    answer:
      "İdeal olarak taşınma tarihinizden 3-5 gün önce iletişime geçmeniz yeterlidir. Yoğun dönemlerde (ay başı/sonu) daha erken planlama öneririz. Acil bir taşımanız varsa arayın; takvim uygunsa aynı gün için de planlama yapmaya çalışırız.",
  },
  {
    question: "Fiyat nasıl belirleniyor, sonradan ek ücret çıkar mı?",
    answer:
      "Fiyat; eşya miktarı, mesafe, kat ve asansör durumu ile paketleme, montaj gibi ek işlere göre belirlenir. Eşyalarınızı fotoğraf veya görüntülü görüşmeyle görüp size yazılı bir fiyat veririz. Taşınma günü kat, eşya ya da adres bilgisi değişmezse konuştuğumuz fiyat geçerli olur; bu yüzden bilgileri baştan eksiksiz paylaşmanızı isteriz.",
  },
  {
    question: "Taşıma sırasında eşyalarım nasıl korunuyor?",
    answer:
      "Mobilyalar battaniye ve streç filmle sarılıyor, kırılacaklar balonlu naylon ve koliyle ayrı paketleniyor. Araçta eşyalar kayışla sabitleniyor, ağır parçalar alta, hassas parçalar üste yerleştiriliyor. Sökülebilen mobilyaları söküp yeni adreste tekrar kuruyoruz ki yolda zorlanmasın.",
  },
  {
    question: "Paketleme malzemelerini siz mi sağlıyorsunuz?",
    answer:
      "Evet. Koli, balonlu naylon, streç film, mobilya örtüsü gibi tüm profesyonel ambalaj malzemeleri ekibimiz tarafından sağlanır ve paketleme bizim ekibimizce yapılır.",
  },
  {
    question: "Asansörlü taşıma her binada mümkün mü?",
    answer:
      "Mobil asansör, önünde uygun park ve manevra alanı bulunan çoğu binada kullanılabilir. Fiyat konuşurken binanızın durumunu değerlendirip en güvenli yöntemi belirleriz.",
  },
  {
    question: "Şehirler arası taşımada yükümün durumunu nasıl öğrenirim?",
    answer:
      "Yola çıkış ve tahmini varış saatini sizinle paylaşıyoruz. Yol boyunca 7/24 telefon ve WhatsApp hattımızdan ekibe ulaşıp yükünüzün nerede olduğunu öğrenebilirsiniz.",
  },
  {
    question: "Eşyalarımı bir süre depolayabilir misiniz?",
    answer:
      "Yeni ev hazır değilse ya da eşyanın bir kısmı sığmayacaksa bunu teklif alırken bize söyleyin. Süreyi ve eşya miktarını konuşup sizin için uygun bir çözüm bulmaya çalışırız.",
  },
];
