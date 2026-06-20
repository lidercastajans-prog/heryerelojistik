import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import ServicesGrid from "@/components/ServicesGrid";
import WhyUs from "@/components/WhyUs";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { istanbulDistricts, getIstanbulDistrict } from "@/lib/istanbul-districts";
import { fetchServices } from "@/lib/fetchers";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

// Şimdilik yalnızca İstanbul ilçeleri. İleride başka iller eklenebilir.
export function generateStaticParams() {
  return istanbulDistricts.map((d) => ({ sehir: "istanbul", ilce: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sehir: string; ilce: string }>;
}): Promise<Metadata> {
  const { sehir, ilce } = await params;
  if (sehir !== "istanbul") return {};
  const district = getIstanbulDistrict(ilce);
  if (!district) return {};
  const title = `${district.name} Evden Eve Nakliyat (İstanbul)`;
  return {
    title,
    description: district.intro,
    alternates: { canonical: `/nakliyat/istanbul/${district.slug}` },
    openGraph: { title: `${title} | Her Yere Lojistik`, description: district.intro },
  };
}

export default async function DistrictPage({
  params,
}: {
  params: Promise<{ sehir: string; ilce: string }>;
}) {
  const { sehir, ilce } = await params;
  if (sehir !== "istanbul") notFound();
  const district = getIstanbulDistrict(ilce);
  if (!district) notFound();

  const services = await fetchServices();
  const path = `/nakliyat/istanbul/${district.slug}`;
  const breadcrumb = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hizmet Bölgeleri", path: "/nakliyat" },
    { name: "İstanbul", path: "/nakliyat/istanbul" },
    { name: district.name, path },
  ];

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `${district.name} Evden Eve Nakliyat`,
            description: district.intro,
            path,
          }),
          breadcrumbSchema(breadcrumb),
        ]}
      />
      <PageHero
        title={`${district.name} Evden Eve Nakliyat`}
        description={`İstanbul ${district.name} (${district.side}) bölgesinde sigortalı, asansörlü evden eve nakliyat ve yük taşımacılığı.`}
        breadcrumb={breadcrumb}
      />

      <section className="container-x py-14 lg:py-16">
        <p className="max-w-3xl text-lg leading-relaxed text-ink-soft">{district.intro}</p>

        <div className="mt-10">
          <h2 className="font-heading text-xl font-bold text-ink">
            {district.name}'da hizmet verdiğimiz semtler
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {district.neighborhoods.map((n) => (
              <li
                key={n}
                className="flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium text-ink-soft"
              >
                <MapPin className="h-3.5 w-3.5 text-brand-600" aria-hidden />
                {n}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted">
            Listede olmayan mahalleler dahil {district.name}'ın tamamına hizmet veriyoruz.
          </p>
        </div>
      </section>

      <ServicesGrid services={services} />
      <WhyUs />
      <CtaSection />
    </>
  );
}
