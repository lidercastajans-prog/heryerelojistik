import { ShieldCheck, ArrowUpDown, Users, BadgeDollarSign, Clock, Headphones } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const REASONS = [
  { icon: ShieldCheck, title: "Sigortalı Taşıma", text: "Tüm eşyalarınız taşıma boyunca sigorta güvencesi altında." },
  { icon: ArrowUpDown, title: "Asansörlü Ekipman", text: "Yüksek katlara hızlı, güvenli ve hasarsız taşıma." },
  { icon: Users, title: "Deneyimli Ekip", text: "Eğitimli, üniformalı ve işinin uzmanı taşıma kadrosu." },
  { icon: BadgeDollarSign, title: "Net Fiyat", text: "Keşif sonrası yazılı, sürpriz çıkarmayan şeffaf fiyat." },
  { icon: Clock, title: "Zamanında Teslim", text: "Söz verdiğimiz günde ve saatte teslimat garantisi." },
  { icon: Headphones, title: "7/24 Destek", text: "Sorularınız için her an ulaşabileceğiniz müşteri hattı." },
];

export default function WhyUs() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          center
          eyebrow="Neden Biz?"
          title="Taşınmanın stresini biz üstleniyoruz"
          description="Binlerce ailenin ve işletmenin bize güvenmesinin ardında somut nedenler var."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => {
            const Ico = r.icon;
            return (
              <Reveal key={r.title} delay={i * 60} className="h-full">
                <div className="flex h-full items-start gap-4 rounded-3xl border border-line bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-brand-900/5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                    <Ico className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-ink">{r.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{r.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
