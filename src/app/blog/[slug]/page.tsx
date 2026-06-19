import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CalendarDays, Clock, CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";
import Photo from "@/components/Photo";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { posts, getPostBySlug } from "@/lib/posts";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: `${post.title} | Her Yere Lojistik`,
      description: post.excerpt,
      publishedTime: post.date,
      images: post.cover ? [post.cover] : undefined,
    },
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const breadcrumb = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path },
  ];

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: post.title,
            description: post.excerpt,
            path,
            date: post.date,
            image: post.cover,
          }),
          breadcrumbSchema(breadcrumb),
        ]}
      />

      <article>
        {/* Başlık */}
        <header className="border-b border-line bg-gradient-to-b from-brand-50 to-white">
          <div className="container-x py-12 lg:py-14">
            <nav aria-label="Sayfa yolu" className="mb-4">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
                {breadcrumb.map((b, i) => (
                  <li key={b.path} className="flex items-center gap-1.5">
                    {i > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden />}
                    {i < breadcrumb.length - 1 ? (
                      <Link href={b.path} className="hover:text-brand-700">{b.name}</Link>
                    ) : (
                      <span className="line-clamp-1 font-semibold text-ink">{b.name}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
            <h1 className="max-w-3xl text-3xl font-extrabold text-ink sm:text-4xl">{post.title}</h1>
            <div className="mt-4 flex items-center gap-5 text-sm font-medium text-muted">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" aria-hidden />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden />
                {post.readMinutes} dk okuma
              </span>
            </div>
          </div>
        </header>

        {/* Kapak görseli */}
        <div className="container-x -mt-2 pt-8">
          <div className="relative aspect-[21/9] overflow-hidden rounded-3xl shadow-xl shadow-brand-900/10">
            <Photo
              src={post.cover}
              alt={post.title}
              priority
              sizes="100vw"
              fallback={{ from: "from-brand-600", to: "to-accent-600", icon: "Package" }}
            />
          </div>
        </div>

        {/* İçerik */}
        <div className="container-x py-12 lg:py-16">
          <div className="mx-auto max-w-3xl space-y-8">
            {post.sections.map((sec, i) => (
              <section key={i}>
                {sec.heading && (
                  <h2 className="mb-3 font-heading text-2xl font-bold text-ink">{sec.heading}</h2>
                )}
                {sec.paragraphs?.map((p, j) => (
                  <p key={j} className="mb-3 leading-relaxed text-ink-soft">{p}</p>
                ))}
                {sec.bullets && (
                  <ul className="space-y-2.5">
                    {sec.bullets.map((b, k) => (
                      <li key={k} className="flex items-start gap-2.5 text-ink-soft">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="rounded-2xl border border-line bg-surface p-6 text-center">
              <p className="font-semibold text-ink">Taşınmayı planlıyor musunuz?</p>
              <Link
                href="/teklif-al"
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 font-bold text-white transition-colors hover:bg-accent-500"
              >
                Ücretsiz Teklif Al
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </article>

      <CtaSection />
    </>
  );
}
