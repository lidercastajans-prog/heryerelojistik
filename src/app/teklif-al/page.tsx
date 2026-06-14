import type { Metadata } from "next";
import { Phone, ShieldCheck, Clock, BadgeCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import JsonLd from "@/components/JsonLd";
import { site, telLink, whatsappLink } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Ücretsiz Teklif Al",
  description:
    "Evden eve nakliyat ve şehirler arası yük taşımacılığı için saniyeler içinde ücretsiz teklif alın.",
  alternates: { canonical: "/teklif-al" },
};

export default async function TeklifAlPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string; to?: string; type?: string }>;
}) {
  const sp = await searchParams;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: "Teklif Al", path: "/teklif-al" },
        ])}
      />
      <PageHero
        title="Ücretsiz Teklif Al"
        description="Birkaç bilgiyi paylaşın, en kısa sürede sizi arayıp net fiyatınızı sunalım."
        breadcrumb={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Teklif Al", path: "/teklif-al" },
        ]}
      />

      <section className="container-x grid gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-line bg-white p-7 shadow-sm sm:p-9">
          <QuoteForm defaults={{ from: sp.from, to: sp.to, type: sp.type }} />
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl bg-gradient-to-br from-brand-700 to-accent-600 p-7 text-white">
            <h2 className="font-heading text-xl font-bold">Hemen görüşelim</h2>
            <p className="mt-2 text-sm text-white/85">
              Acele mi ediyorsunuz? Telefon veya WhatsApp ile anında destek alın.
            </p>
            <div className="mt-5 space-y-3">
              <a href={telLink()} className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 font-bold transition-colors hover:bg-white/20">
                <Phone className="h-5 w-5" aria-hidden />
                {site.phoneDisplay}
              </a>
              <a
                href={whatsappLink(`Merhaba ${site.name}, teklif almak istiyorum.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 font-bold transition-colors hover:bg-white/20"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp'tan yazın
              </a>
            </div>
          </div>

          <ul className="space-y-4 rounded-3xl border border-line bg-surface p-7">
            {[
              { icon: BadgeCheck, text: "Ücretsiz keşif ve net, yazılı fiyat" },
              { icon: ShieldCheck, text: "Sigortalı ve güvenli taşımacılık" },
              { icon: Clock, text: "Hızlı dönüş ve zamanında teslimat" },
            ].map((item, i) => {
              const Ico = item.icon;
              return (
                <li key={i} className="flex items-center gap-3 text-sm font-semibold text-ink-soft">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Ico className="h-5 w-5" aria-hidden />
                  </span>
                  {item.text}
                </li>
              );
            })}
          </ul>
        </aside>
      </section>
    </>
  );
}
