/**
 * Galeri öğeleri.
 *
 * `photo` alanı GEÇİCİ Unsplash stok fotoğrafıdır. Yüklenmezse Photo bileşeni
 * `from`/`to` gradient + ikon fallback gösterir. Kendi fotoğraflarınızı
 * `public/images/` altına koyup `photo` değerlerini güncelleyebilirsiniz.
 */

import { uns } from "./images";

export type GalleryItem = {
  id: string;
  title: string;
  photo?: string;
  /** Fallback gradient renk durakları */
  from: string;
  to: string;
  icon: "Truck" | "Package" | "ArrowUpDown" | "Wrench" | "Warehouse" | "Building2";
};

export const galleryItems: GalleryItem[] = [
  { id: "filo", title: "Modern Araç Filomuz", photo: uns("photo-1485575301924-6891ef935dcd"), from: "from-brand-600", to: "to-brand-800", icon: "Truck" },
  { id: "paketleme", title: "Profesyonel Paketleme", photo: uns("photo-1616432043562-3671ea2e5242"), from: "from-accent-500", to: "to-accent-700", icon: "Package" },
  { id: "asansor", title: "Asansörlü Taşıma", photo: uns("photo-1695222833131-54ee679ae8e5"), from: "from-brand-500", to: "to-accent-600", icon: "ArrowUpDown" },
  { id: "montaj", title: "Mobilya Montajı", photo: uns("photo-1592838064575-70ed626d3a0e"), from: "from-accent-600", to: "to-brand-700", icon: "Wrench" },
  { id: "depo", title: "Güvenli Depolama", photo: uns("photo-1601467995997-ac1ae9a8fff4"), from: "from-brand-700", to: "to-brand-900", icon: "Warehouse" },
  { id: "ofis", title: "Ofis Taşıma", photo: uns("photo-1473445730015-841f29a9490b"), from: "from-accent-500", to: "to-brand-600", icon: "Building2" },
  { id: "filo2", title: "Kapalı Kasa Araçlar", photo: uns("photo-1720811559395-3ed8d1b16649"), from: "from-brand-600", to: "to-accent-500", icon: "Truck" },
  { id: "paketleme2", title: "Özenli Ambalaj", photo: uns("photo-1591768793355-74d04bb6608f"), from: "from-accent-700", to: "to-brand-800", icon: "Package" },
  { id: "depo2", title: "Nem Kontrollü Depo", photo: uns("photo-1600518464441-9154a4dea21b"), from: "from-brand-800", to: "to-accent-700", icon: "Warehouse" },
];
