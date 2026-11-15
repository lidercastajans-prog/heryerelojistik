/** "Nasıl Çalışır" adımları (statik). */

import type { IconKey } from "./services";

export type ProcessStep = {
  step: number;
  icon: IconKey;
  title: string;
  text: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    icon: "MapPin",
    title: "Teklif Alın",
    text: "Online formu doldurun ya da bizi arayın; nereden nereye taşınacağınızı paylaşın.",
  },
  {
    step: 2,
    icon: "Clock",
    title: "Fiyat & Planlama",
    text: "Eşyalarınızı fotoğraf veya görüntülü görüşmeyle görüp yazılı fiyatı ve taşıma gününü belirleyelim.",
  },
  {
    step: 3,
    icon: "Package",
    title: "Paketleme & Taşıma",
    text: "Ekibimiz eşyalarınızı paketler, asansörle indirir, araçta sabitleyerek taşır.",
  },
  {
    step: 4,
    icon: "ShieldCheck",
    title: "Teslim & Kurulum",
    text: "Eşyalarınız yeni adresinize yerleştirilir, mobilyalarınız kurulur. İşiniz biter.",
  },
];
