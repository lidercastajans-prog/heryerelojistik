import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ServicesGrid from "@/components/ServicesGrid";
import WhyUs from "@/components/WhyUs";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { cities, getCityBySlug, citySlugByName } from "@/lib/cities";
import { fetchServices } from "@/lib/fetchers";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

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
          }),
          breadcrumbSchema(breadcrumb),
        ]}
      />
      <PageHero
        title={`${city.name} Evden Eve Nakliyat`}
        description={city.metaDescription}
        breadcrumb={breadcrumb}
      />

      {/* Özgün giriş metni */}
      <section className="container-x py-14 lg:py-16">
        <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-ink-soft">
          {city.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* İlçeler */}
        {city.districts && city.districts.length > 0 && (
          <div className="mt-10">
            <h2 className="font-heading text-xl font-bold text-ink">
              {city.name}'da hizmet verdiğimiz ilçeler
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
      <CtaSection />
    </>
  );
}
