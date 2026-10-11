import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServicesGrid from "@/components/ServicesGrid";
import WhyUs from "@/components/WhyUs";
import CtaSection from "@/components/CtaSection";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { cities, getCityBySlug, citySlugByName } from "@/lib/cities";
import { istanbulDistricts } from "@/lib/istanbul-districts";
import { fetchServices } from "@/lib/fetchers";
import { serviceSchema, breadcrumbSchema, faqSchemaFor } from "@/lib/schema";
import { bulunmaHali } from "@/lib/tr-ek";

export function generateStaticParams() {
  return cities.map((c) => ({ sehir: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sehir: string }>;
}): Promise<Metadata> {
  const { sehir } = await params;
  const city = getCityBySlug(sehir);
  if (!city) return {};
  const title = `${city.name} Evden Eve Nakliyat & Yük Taşımacılığı`;
  return {
    title,
    description: city.metaDescription,
    alternates: { canonical: `/nakliyat/${city.slug}` },
    openGraph: { title: `${title} | Her Yere Lojistik`, description: city.metaDescription },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ sehir: string }>;
}) {
  const { sehir } = await params;
  const city = getCityBySlug(sehir);
  if (!city) notFound();

  const services = await fetchServices();
  const path = `/nakliyat/${city.slug}`;
  const breadcrumb = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hizmet Bölgeleri", path: "/nakliyat" },
    { name: city.name, path },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `${city.name} Evden Eve Nakliyat`,
            description: city.metaDescription,
            path,
            area: city.name,
          }),
          breadcrumbSchema(breadcrumb),
          faqSchemaFor(city.faqs),
        ]}
      />
      <PageHero
        title={`${city.name} Evden Eve Nakliyat`}
        description={city.metaDescription}
        breadcrumb={breadcrumb}
      />

      {/* Özgün giriş + gövde metni */}
      <section className="container-x py-14 lg:py-16">
        <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-ink-soft">
          {city.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-8 max-w-3xl space-y-5">
          {city.body.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-ink-soft">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="font-heading text-xl font-bold text-ink">
            {bulunmaHali(city.name)} taşımada dikkat ettiklerimiz
          </h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {city.notes.map((note) => (
              <div
                key={note.title}
                className="rounded-2xl border border-line bg-white p-6 shadow-sm"
              >
                <h3 className="font-heading text-base font-bold text-ink">{note.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{note.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* İlçeler — İstanbul'da her ilçe kendi sayfasına linklenir */}
        {city.slug === "istanbul" ? (
          <div className="mt-12">
            <h2 className="font-heading text-xl font-bold text-ink">
              {bulunmaHali(city.name)} hizmet verdiğimiz ilçeler
            </h2>
            <p className="mt-1 text-sm text-muted">İlçenize özel sayfa için tıklayın.</p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {istanbulDistricts.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/nakliyat/istanbul/${d.slug}`}
                    className="flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium text-ink-soft transition-colors hover:border-brand-200 hover:text-brand-700"
                  >
                    <MapPin className="h-3.5 w-3.5 text-brand-600" aria-hidden />
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          city.districts &&
          city.districts.length > 0 && (
            <div className="mt-12">
              <h2 className="font-heading text-xl font-bold text-ink">
                {bulunmaHali(city.name)} hizmet verdiğimiz ilçeler
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {city.districts.map((d) => (
                  <li
                    key={d}
                    className="flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium text-ink-soft"
                  >
                    <MapPin className="h-3.5 w-3.5 text-brand-600" aria-hidden />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}

        {/* Popüler güzergâhlar */}
        {city.routes.length > 0 && (
          <div className="mt-10">
            <h2 className="font-heading text-xl font-bold text-ink">Popüler güzergâhlar</h2>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {city.routes.map((r) => {
                const slug = citySlugByName(r);
                const label = `${city.name} – ${r}`;
                return (
                  <li key={r}>
                    {slug ? (
                      <Link
                        href={`/nakliyat/${slug}`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3.5 py-1.5 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-100"
                      >
                        {label}
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                      </Link>
                    ) : (
                      <span className="inline-flex rounded-full bg-brand-50 px-3.5 py-1.5 text-sm font-semibold text-brand-700">
                        {label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </section>

      <ServicesGrid services={services} />
      <WhyUs />

      <section className="container-x py-16 lg:py-20">
        <SectionHeading
          eyebrow="Sık Sorulanlar"
          title={`${city.name} nakliyatı hakkında merak edilenler`}
        />
        <Faq faqs={city.faqs} className="mt-10" />
      </section>

      <CtaSection />
    </>
  );
}
