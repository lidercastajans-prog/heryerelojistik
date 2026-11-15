/** Anasayfa istatistik bandı — yeni firma için dürüst, abartısız değerler. */

export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 3, label: "Bölgeye Düzenli Sefer: Marmara, Ege, Akdeniz" },
  { value: 2, label: "Yaka: Avrupa ve Anadolu" },
  { value: 7, suffix: "/24", label: "Telefon ve WhatsApp" },
  { value: 1, label: "Mesajla Teklif" },
];
