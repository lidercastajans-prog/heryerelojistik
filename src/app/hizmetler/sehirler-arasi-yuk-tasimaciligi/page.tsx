import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ServiceDetail from "@/components/ServiceDetail";
import JsonLd from "@/components/JsonLd";
import { getServiceBySlug } from "@/lib/services";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

const SLUG = "sehirler-arasi-yuk-tasimaciligi";
const service = getServiceBySlug(SLUG)!;

export const metadata: Metadata = {
  title: "Şehirler Arası Yük Taşımacılığı",
  description:
    "İstanbul'dan diğer illere parsiyel ve komple yük taşımacılığı. Planlı yükleme, sabitlenmiş yük ve teslim. Gideceği şehri yazın, fiyatı hemen konuşalım.",
  alternates: { canonical: `/hizmetler/${SLUG}` },
};

export default function Page() {
  if (!service) notFound();
  const path = `/hizmetler/${SLUG}`;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: service.title, description: service.excerpt, path, nationwide: true }),
          breadcrumbSchema([
            { name: "Ana Sayfa", path: "/" },
            { name: "Hizmetler", path: "/#hizmetler" },
            { name: service.title, path },
          ]),
        ]}
      />
      <PageHero
        title={service.title}
        description="Tek paletten komple araca kadar, İstanbul ve Marmara'dan diğer illere yük taşıyoruz. Tarihi ve aracı birlikte planlıyoruz."
        breadcrumb={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Hizmetler", path: "/#hizmetler" },
          { name: service.title, path },
        ]}
      />
      <ServiceDetail service={service} />
    </>
  );
}
