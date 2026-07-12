/** Schema.org JSON-LD üreticileri (SEO + GEO / yapay zekâ arama motorları için). */

import { site } from "./site";
import { faqs, type Faq } from "./faqs";
import { featuredCities } from "./coverage";
import { istanbulDistricts } from "./istanbul-districts";

const OG = `${site.url}/opengraph-image`;

/** Google Haritalar'da adresi açan bağlantı. */
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address.mapsQuery
)}`;

/** MovingCompany + LocalBusiness — site geneli ana varlık (entity) */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MovingCompany", "LocalBusiness"],
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    slogan: site.tagline,
    url: site.url,
    telephone: site.phoneHref,
    email: site.email,
    foundingDate: String(site.foundedYear),
    image: OG,
    logo: `${site.url}/brand/logo-kare.png`,
    priceRange: "₺₺",
    currenciesAccepted: "TRY",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line,
      addressLocality: site.address.district,
      addressRegion: site.address.city,
      addressCountry: "TR",
    },
    hasMap: MAPS_URL,
    areaServed: [
      { "@type": "Country", name: "Türkiye" },
      ...featuredCities.map((c) => ({ "@type": "City", name: c })),
      // Hizmet verdiğimiz İstanbul ilçeleri — yerel aramada varlık (entity) eşleşmesi için.
      ...istanbulDistricts.map((d) => ({
        "@type": "AdministrativeArea",
        name: `${d.name}, İstanbul`,
      })),
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneHref,
      contactType: "customer service",
      areaServed: "TR",
      availableLanguage: ["Turkish"],
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    knowsAbout: [
      "Evden eve nakliyat",
      "Şehirler arası yük taşımacılığı",
      "Asansörlü taşımacılık",
      "Ofis ve işyeri taşıma",
      "Eşya depolama",
      "Paketleme ve montaj",
      "Sigortalı taşımacılık",
    ],
    sameAs: [site.social.instagram, site.social.facebook, site.social.linkedin].filter(Boolean),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    inLanguage: "tr-TR",
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function faqSchema() {
  return faqSchemaFor(faqs);
}

/** Verilen soru-cevap listesinden FAQPage şeması (ilçe sayfaları kendi SSS'sini verir). */
export function faqSchemaFor(items: readonly Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function serviceSchema(opts: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: [
      { "@type": "Country", name: "Türkiye" },
      ...featuredCities.map((c) => ({ "@type": "City", name: c })),
    ],
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  date: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.date,
    dateModified: opts.date,
    image: opts.image || OG,
    inLanguage: "tr-TR",
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: `${site.url}${opts.path}`,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
