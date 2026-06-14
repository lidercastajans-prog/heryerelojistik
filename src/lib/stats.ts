/** Anasayfa istatistik bandı (statik). */

export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 25, suffix: "+", label: "Yıllık Tecrübe" },
  { value: 50000, suffix: "+", label: "Başarılı Taşıma" },
  { value: 81, label: "İle Hizmet" },
  { value: 99, suffix: "%", label: "Müşteri Memnuniyeti" },
];
