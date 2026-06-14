/** Schema.org JSON-LD üreticileri (SEO + GEO / yapay zekâ arama motorları için). */

import { site } from "./site";
import { faqs } from "./faqs";
import { featuredCities } from "./coverage";

const OG = `${site.url}/opengraph-image`;

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
    logo: OG,
    priceRange: "₺₺",
    currenciesAccepted: "TRY",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line,
      addressLocality: site.address.city,
      addressRegion: site.address.city,
      addressCountry: "TR",
    },
    areaServed: [
      { "@type": "Country", name: "Türkiye" },
      ...featuredCities.map((c) => ({ "@type": "City", name: c })),
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
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00",
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
    sameAs: [site.social.instagram, site.social.facebook, site.social.linkedin],
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
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
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
