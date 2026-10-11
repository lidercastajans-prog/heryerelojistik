/**
 * Müşteri yorumları — YALNIZ gerçek yorumlar (ör. Google İşletme Profili'nden, müşterinin izniyle).
 * Uydurma/örnek yorum koyma: tüketici mevzuatına aykırı ve güveni zedeler. Liste boşken bölüm hiç gösterilmez.
 */

export type Testimonial = {
  name: string;
  role: string;
  rating: number; // 1-5
  text: string;
};

export const testimonials: Testimonial[] = [];
