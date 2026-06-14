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
    "Parsiyel ve komple yük taşımacılığı; 81 ile düzenli sefer, canlı takip, sigortalı yük ve zamanında teslimat. Bireysel ve kurumsal çözümler.",
  alternates: { canonical: `/hizmetler/${SLUG}` },
};

export default function Page() {
  if (!service) notFound();
  const path = `/hizmetler/${SLUG}`;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: service.title, description: service.excerpt, path }),
          breadcrumbSchema([
            { name: "Ana Sayfa", path: "/" },
            { name: "Hizmetler", path: "/#hizmetler" },
            { name: service.title, path },
          ]),
        ]}
      />
      <PageHero
        title={service.title}
        description="Tek paletten komple tıra kadar, yükünüzü Türkiye'nin dört bir yanına güvenle ve zamanında ulaştırıyoruz."
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
