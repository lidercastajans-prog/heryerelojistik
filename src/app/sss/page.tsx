import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { fetchFaqs } from "@/lib/fetchers";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular",
  description:
    "Nakliyat süreci, fiyatlandırma, sigorta, paketleme ve depolama hakkında en çok merak edilen sorular ve yanıtları.",
  alternates: { canonical: "/sss" },
};

export default async function SssPage() {
  const faqs = await fetchFaqs();

  return (
    <>
      <JsonLd
        data={[
          faqSchema(),
          breadcrumbSchema([
            { name: "Ana Sayfa", path: "/" },
            { name: "S.S.S.", path: "/sss" },
          ]),
        ]}
      />
      <PageHero
        title="Sık Sorulan Sorular"
        description="Taşınma sürecine dair aklınıza takılabilecek her şeyi burada topladık."
        breadcrumb={[
          { name: "Ana Sayfa", path: "/" },
          { name: "S.S.S.", path: "/sss" },
        ]}
      />
      <section className="container-x py-16 lg:py-20">
        <Faq faqs={faqs} />
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted">
          Sorunuzu burada bulamadınız mı?{" "}
          <Link href="/iletisim" className="font-bold text-brand-700 hover:text-accent-600">
            Bize ulaşın
          </Link>
          , memnuniyetle yardımcı olalım.
        </p>
      </section>
      <CtaSection />
    </>
  );
}
