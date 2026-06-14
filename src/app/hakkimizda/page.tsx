import type { Metadata } from "next";
import { Target, Eye, HeartHandshake } from "lucide-react";
import PageHero from "@/components/PageHero";
import StatsBand from "@/components/StatsBand";
import WhyUs from "@/components/WhyUs";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import Photo from "@/components/Photo";
import { fetchStats } from "@/lib/fetchers";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: `${site.name} — ${site.foundedYear}'dan bu yana sigortalı evden eve nakliyat ve şehirler arası yük taşımacılığında güvenilir çözüm ortağınız.`,
  alternates: { canonical: "/hakkimizda" },
};

const VALUES = [
  { icon: Target, title: "Misyonumuz", text: "Her taşımayı, kendi eşyamızmış gibi özen ve titizlikle, zamanında ve hasarsız teslim etmek." },
  { icon: Eye, title: "Vizyonumuz", text: "Türkiye'nin en güvenilen ve teknolojiyle desteklenen nakliyat markası olmak." },
  { icon: HeartHandshake, title: "Değerlerimiz", text: "Dürüstlük, şeffaf fiyat, müşteri memnuniyeti ve işine saygı duyan bir ekip." },
];

export default async function HakkimizdaPage() {
  const stats = await fetchStats();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: "Hakkımızda", path: "/hakkimizda" },
        ])}
      />
      <PageHero
        title={`${site.name} kimdir?`}
        description={`${site.foundedYear}'dan bu yana binlerce ailenin ve işletmenin taşınmasına eşlik eden, güvenilir bir nakliyat çözüm ortağı.`}
        breadcrumb={[
          { name: "Ana Sayfa", path: "/" },
          { name: "Hakkımızda", path: "/hakkimizda" },
        ]}
      />

      {/* Hikâye */}
      <section className="container-x py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-lg leading-relaxed text-ink-soft">
            <p>
              {site.name} olarak yola, taşınmanın stresli bir süreç olmaktan çıkıp güven veren
              bir deneyime dönüşebileceğine inanarak çıktık. {site.foundedYear} yılından bu yana
              evden eve nakliyattan şehirler arası yük taşımacılığına kadar geniş bir yelpazede
              hizmet veriyoruz.
            </p>
            <p>
              Eğitimli ekibimiz, modern araç filomuz ve asansörlü taşıma ekipmanlarımızla
              eşyalarınızı ilk günkü gibi koruyoruz. Tüm taşımalarımız sigorta güvencesi altında;
              fiyatlarımız ise keşif sonrası net ve şeffaf.
            </p>
            <p>
              Bugün Türkiye'nin 81 iline düzenli seferlerle hizmet veriyor, her taşımada
              müşteri memnuniyetini önceliğimiz olarak görüyoruz.
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl shadow-brand-900/10">
            <Photo
              src={images.about}
              alt={`${site.name} taşıma ekibi`}
              sizes="(max-width: 1024px) 100vw, 50vw"
              fallback={{ from: "from-brand-600", to: "to-accent-600", icon: "Truck" }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-950/30 to-transparent" />
          </div>
        </div>

        {/* Değerler */}
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {VALUES.map((v) => {
            const Ico = v.icon;
            return (
              <div key={v.title} className="flex flex-col items-start gap-3 rounded-3xl border border-line bg-white p-6 shadow-sm">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                  <Ico className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <h2 className="font-heading text-lg font-bold text-ink">{v.title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{v.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="pb-4">
        <StatsBand stats={stats} />
      </div>
      <WhyUs />
      <CtaSection />
    </>
  );
}
