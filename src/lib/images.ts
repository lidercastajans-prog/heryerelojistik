/**
 * Görsel kaynakları.
 *
 * - Hero, hizmet kartları ve CTA arka planı: yapay zekâ ile üretilmiş TEMSİLİ görseller
 *   (OpenAI, 15.11.2026; istem arşivi: ajans/marka/heryerelojistik/site-gorselleri/*.istem.txt).
 *   Logo/yazı/plaka yok, yüzler seçilmiyor. Firmanın gerçek iş fotoğrafları gelince
 *   aynı dosya adlarıyla `public/images/` altına konup değiştirilmeli.
 * - `about`: geçici Unsplash stok fotoğraf.
 * - Galeri (`gallery.ts`) bilerek stok kalır; oraya AI görsel konmaz (gerçek iş gibi algılanır).
 *
 * Not: Photo bileşeni, bir görsel yüklenmezse gradient + ikon fallback gösterir.
 */

const CDN = "https://images.unsplash.com/";

/** Unsplash görselini istenen genişlikte, optimize parametrelerle döndürür. */
export function uns(id: string, w = 1280): string {
  return `${CDN}${id}?auto=format&fit=crop&w=${w}&q=70`;
}

export const images = {
  heroBg: "/images/hero-nakliyat.webp",
  serviceEvdenEve: "/images/hizmet-evden-eve.webp",
  serviceSehirlerArasi: "/images/hizmet-sehirler-arasi.webp",
  serviceAsansorlu: "/images/hizmet-asansorlu.webp",
  serviceOfis: "/images/hizmet-ofis.webp",
  servicePaketleme: "/images/hizmet-paketleme.webp",
  about: uns("photo-1592838064575-70ed626d3a0e", 1200),
  ctaBg: "/images/cta-yukleme.webp",
};
