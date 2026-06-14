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
    title: "Keşif & Planlama",
    text: "Yerinde veya görüntülü keşifle net fiyat ve uygun taşıma gününü belirleyelim.",
  },
  {
    step: 3,
    icon: "Package",
    title: "Paketleme & Taşıma",
    text: "Uzman ekibimiz eşyalarınızı paketler, asansörle indirir ve güvenle taşır.",
  },
  {
    step: 4,
    icon: "ShieldCheck",
    title: "Teslim & Kurulum",
    text: "Eşyalarınız yeni adresinize yerleştirilir, mobilyalarınız kurulur. İşiniz biter.",
  },
];
