import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { cities } from "@/lib/cities";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hizmet Bölgeleri — İstanbul ve Marmara Nakliyat",
  description:
    "İstanbul, Kocaeli, Tekirdağ, Bursa, Sakarya ve Yalova'da evden eve nakliyat; diğer illere şehirler arası taşıma. Bölgenizi seçin, teklif alın.",
  alternates: { canonical: "/nakliyat" },
};

export default function NakliyatHubPage() {
  const breadcrumb = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hizmet Bölgeleri", path: "/nakliyat" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumb)} />
      <PageHero
        title="Hizmet Bölgeleri"
        description="İstanbul'un iki yakasında ve Marmara'daki beş ilde düzenli taşıma yapıyoruz. Diğer illere şehirler arası taşıma talep üzerine. Aşağıdan bölgenizi seçin."
        breadcrumb={breadcrumb}
      />

      <section className="container-x py-14 lg:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c) => (
            <Link
              key={c.slug}
              href={`/nakliyat/${c.slug}`}
              className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/10"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <MapPin className="h-6 w-6" aria-hidden />
              </span>
              <h2 className="mt-4 font-heading text-xl font-bold text-ink">
                {c.name} Nakliyat
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {c.metaDescription}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
                Detayları gör
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-10 rounded-3xl border border-line bg-surface p-6 text-center text-muted">
          Bölgeniz listede yok mu? Diğer illere{" "}
          <strong className="text-ink">şehirler arası taşıma</strong> yapıyoruz; gideceğiniz yeri yazın,
          uygunluğu ve fiyatı konuşalım —{" "}
          <Link href="/teklif-al" className="font-bold text-brand-700 hover:text-accent-600">
            ücretsiz teklif alın
          </Link>{" "}
          veya bizi arayın.
        </p>
      </section>

      <CtaSection />
    </>
  );
}
