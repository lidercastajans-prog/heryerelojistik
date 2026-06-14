import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ServiceDetail from "@/components/ServiceDetail";
import JsonLd from "@/components/JsonLd";
import { getServiceBySlug } from "@/lib/services";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

const SLUG = "evden-eve-nakliyat";
const service = getServiceBySlug(SLUG)!;

export const metadata: Metadata = {
  title: "Evden Eve Nakliyat",
  description:
    "Sigortalı, asansörlü ve profesyonel evden eve nakliyat. Paketleme, montaj-demontaj ve depolama dahil tam hizmet. Ücretsiz keşif ve net fiyat.",
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
        description="Eşyalarınızı tek bir çizik bile olmadan yeni evinize taşıyoruz — paketlemeden montaja kadar her şey dahil."
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
