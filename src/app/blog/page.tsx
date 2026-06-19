import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { sortedPosts } from "@/lib/posts";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog — Nakliyat Rehberi ve İpuçları",
  description:
    "Evden eve nakliyat, paketleme, taşınma planlaması ve fiyatlar hakkında pratik rehberler ve ipuçları.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const breadcrumb = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumb)} />
      <PageHero
        title="Blog"
        description="Taşınma sürecini kolaylaştıracak rehberler, ipuçları ve sık sorulanların yanıtları."
        breadcrumb={breadcrumb}
      />

      <section className="container-x py-14 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/10"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Photo
                  src={post.cover}
                  alt={post.title}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  fallback={{ from: "from-brand-600", to: "to-accent-600", icon: "Package" }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-4 text-xs font-medium text-muted">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" aria-hidden />
                    {post.readMinutes} dk
                  </span>
                </div>
                <h2 className="mt-3 font-heading text-lg font-bold text-ink">{post.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
                  Devamını oku
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
