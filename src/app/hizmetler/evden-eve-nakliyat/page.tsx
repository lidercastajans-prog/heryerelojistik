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
    "İstanbul ve Marmara'da asansörlü evden eve nakliyat. Paketleme, söküm-montaj ve kurulum. Fotoğraf gönderin, yazılı fiyat alın; teklif ücretsiz.",
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
        description="Paketleme, asansörlü indirme, taşıma ve yeni evde kurulum. Eşyanız battaniye, streç ve kayışla korunarak taşınır."
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
