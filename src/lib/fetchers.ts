/**
 * Veri erişim katmanı (ince soyutlama).
 *
 * Şu an tüm veriler statik TS dosyalarından geliyor. İleride bir CMS
 * (ör. Sanity) eklenirse yalnızca bu dosyadaki fonksiyonların içi değişir;
 * sayfalar ve bileşenler aynı imzayı kullanmaya devam eder.
 */

import { services, getFeaturedServices, getServiceBySlug, type Service } from "./services";
import { stats, type Stat } from "./stats";
import { processSteps, type ProcessStep } from "./process";
import { testimonials, type Testimonial } from "./testimonials";
import { faqs, type Faq } from "./faqs";
import { featuredCities, coverageNote } from "./coverage";

export async function fetchServices(): Promise<Service[]> {
  return services;
}

export async function fetchFeaturedServices(): Promise<Service[]> {
  return getFeaturedServices();
}

export async function fetchService(slug: string): Promise<Service | undefined> {
  return getServiceBySlug(slug);
}

export async function fetchStats(): Promise<Stat[]> {
  return stats;
}

export async function fetchProcessSteps(): Promise<ProcessStep[]> {
  return processSteps;
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  return testimonials;
}

export async function fetchFaqs(): Promise<Faq[]> {
  return faqs;
}

export async function fetchCoverage(): Promise<{ cities: string[]; note: string }> {
  return { cities: featuredCities, note: coverageNote };
}
