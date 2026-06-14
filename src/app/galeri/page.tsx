import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { galleryItems } from "@/lib/gallery";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Galeri",
  description: "Araç filomuz, paketleme, asansörlü taşıma ve depolama hizmetlerimizden kareler.",
  alternates: { canonical: "/galeri" },
};

export default function GaleriPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: "Galeri", path: "/galeri" },
        ])}
      />
      <PageHero
        title="Galeri"
        description="İşimizi nasıl yaptığımıza dair bir bakış: araç filomuz, paketleme özenimiz ve taşıma anlarımız."
        breadcrumb={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Galeri", path: "/galeri" },
        ]}
      />
      <section className="container-x py-16 lg:py-20">
        <Gallery items={galleryItems} />
      </section>
      <CtaSection />
    </>
  );
}
