import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ServicesGrid from "@/components/ServicesGrid";
import WhyUs from "@/components/WhyUs";
import CtaSection from "@/components/CtaSection";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { istanbulDistricts, getIstanbulDistrict } from "@/lib/istanbul-districts";
import { fetchServices } from "@/lib/fetchers";
import { serviceSchema, breadcrumbSchema, faqSchemaFor } from "@/lib/schema";

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
  const description = `${district.name} ve çevresinde (${district.neighborhoods
    .slice(0, 3)
    .join(", ")}) sigortalı, asansörlü evden eve nakliyat. ${district.intro.slice(0, 90)}`.slice(
    0,
    160
  );
  return {
    title,
    description,
    alternates: { canonical: `/nakliyat/istanbul/${district.slug}` },
    openGraph: { title: `${title} | Her Yere Lojistik`, description },
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
  const nearby = district.nearby
    .map((slug) => getIstanbulDistrict(slug))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

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
          faqSchemaFor(district.faqs),
        ]}
      />
      <PageHero
        title={`${district.name} Evden Eve Nakliyat`}
        description={`İstanbul ${district.name} (${district.side}) bölgesinde sigortalı, asansörlü evden eve nakliyat ve yük taşımacılığı.`}
        breadcrumb={breadcrumb}
      />

      <section className="container-x py-14 lg:py-16">
        <p className="max-w-3xl text-lg leading-relaxed text-ink-soft">{district.intro}</p>

        <div className="mt-8 max-w-3xl space-y-5">
          {district.body.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-ink-soft">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="font-heading text-xl font-bold text-ink">
            {district.name}&apos;te taşımada dikkat ettiklerimiz
          </h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {district.notes.map((note) => (
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

        <div className="mt-12">
          <h2 className="font-heading text-xl font-bold text-ink">
            {district.name}&apos;da hizmet verdiğimiz semtler
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
            Listede olmayan mahalleler dahil {district.name}&apos;ın tamamına hizmet veriyoruz.
          </p>
        </div>
      </section>

      <ServicesGrid services={services} />
      <WhyUs />

      <section className="container-x py-16 lg:py-20">
        <SectionHeading
          eyebrow="Sık Sorulanlar"
          title={`${district.name} nakliyatı hakkında merak edilenler`}
        />
        <Faq faqs={district.faqs} className="mt-10" />
      </section>

      {nearby.length > 0 && (
        <section className="border-t border-line bg-surface py-14">
          <div className="container-x">
            <h2 className="font-heading text-xl font-bold text-ink">Yakındaki bölgeler</h2>
            <p className="mt-2 text-sm text-muted">
              {district.name} çevresinde de aynı gün nakliyat yapıyoruz.
            </p>
            <ul className="mt-5 flex flex-wrap gap-3">
              {nearby.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/nakliyat/istanbul/${d.slug}`}
                    className="group flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:border-brand-600 hover:text-brand-600"
                  >
                    {d.name} Evden Eve Nakliyat
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaSection />
    </>
  );
}
