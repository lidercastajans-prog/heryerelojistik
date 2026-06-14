/** Anasayfa istatistik bandı — yeni firma için dürüst, abartısız değerler. */

export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 81, label: "İl Hizmet Ağı" },
  { value: 100, suffix: "%", label: "Sigortalı Taşıma" },
  { value: 7, suffix: "/24", label: "Kesintisiz Destek" },
  { value: 0, suffix: "₺", label: "Keşif Ücreti" },
];
