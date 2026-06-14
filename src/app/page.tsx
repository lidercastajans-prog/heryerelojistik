import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import ServicesGrid from "@/components/ServicesGrid";
import WhyUs from "@/components/WhyUs";
import ProcessSteps from "@/components/ProcessSteps";
import CoverageAreas from "@/components/CoverageAreas";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import CtaSection from "@/components/CtaSection";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import {
  fetchServices,
  fetchStats,
  fetchProcessSteps,
  fetchFaqs,
  fetchCoverage,
} from "@/lib/fetchers";
import { galleryItems } from "@/lib/gallery";
import { organizationSchema, websiteSchema, faqSchema } from "@/lib/schema";

export default async function HomePage() {
  const [services, stats, steps, faqs, coverage] = await Promise.all([
    fetchServices(),
    fetchStats(),
    fetchProcessSteps(),
    fetchFaqs(),
    fetchCoverage(),
  ]);

  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema(), faqSchema()]} />

      <Hero />
      <StatsBand stats={stats} />
      <ServicesGrid services={services} />
      <WhyUs />
      <ProcessSteps steps={steps} />
      <CoverageAreas cities={coverage.cities} note={coverage.note} />

      {/* Galeri önizleme */}
      <section className="container-x py-20 lg:py-28">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <SectionHeading
            eyebrow="Galeri"
            title="İşimizi gururla sergiliyoruz"
            description="Araç filomuzdan paketleme ve taşıma anlarına kadar bir bakış."
          />
          <Link
            href="/galeri"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-accent-600"
          >
            Tüm galeriyi gör
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-10">
          <Gallery items={galleryItems.slice(0, 6)} />
        </div>
      </section>

      {/* SSS önizleme */}
      <section className="bg-surface py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="S.S.S."
            title="Aklınıza takılanlar"
            description="En çok merak edilen soruları sizin için yanıtladık."
          />
          <div className="mt-12">
            <Faq faqs={faqs.slice(0, 5)} />
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            Başka sorunuz mu var?{" "}
            <Link href="/sss" className="font-bold text-brand-700 hover:text-accent-600">
              Tüm soruları görün
            </Link>{" "}
            veya{" "}
            <Link href="/iletisim" className="font-bold text-brand-700 hover:text-accent-600">
              bize ulaşın
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
