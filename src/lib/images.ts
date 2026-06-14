/**
 * Görsel kaynakları (GEÇİCİ stok fotoğraflar — Unsplash).
 *
 * ⚠️ Bunlar placeholder'dır. Kendi fotoğraflarınızı kullanmak için:
 *   1) Görselleri `public/images/` altına koyun
 *   2) Aşağıdaki değerleri "/images/dosya.jpg" ile değiştirin
 *
 * Not: Photo bileşeni, bir görsel yüklenmezse otomatik olarak şık bir
 * gradient + ikon fallback gösterir; hiçbir zaman "kırık görsel" çıkmaz.
 */

const CDN = "https://images.unsplash.com/";

/** Unsplash görselini istenen genişlikte, optimize parametrelerle döndürür. */
export function uns(id: string, w = 1280): string {
  return `${CDN}${id}?auto=format&fit=crop&w=${w}&q=70`;
}

export const images = {
  heroBg: uns("photo-1485575301924-6891ef935dcd", 2000),
  serviceEvdenEve: uns("photo-1616432043562-3671ea2e5242", 1200),
  serviceSehirlerArasi: uns("photo-1473445730015-841f29a9490b", 1200),
  about: uns("photo-1592838064575-70ed626d3a0e", 1200),
  ctaBg: uns("photo-1720811559395-3ed8d1b16649", 1600),
};
