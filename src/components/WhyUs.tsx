import { ShieldCheck, ArrowUpDown, Users, BadgeDollarSign, Clock, Headphones } from "lucide-react";
import Reveal from "./Reveal";

const REASONS = [
  { icon: ShieldCheck, title: "Özenli Taşıma", text: "Battaniye, streç film ve sabitleme kayışıyla eşya yolda yerinden oynamaz." },
  { icon: ArrowUpDown, title: "Mobil Asansör", text: "Yüksek katlarda büyük eşyayı merdivene sokmadan, cepheden taşıma." },
  { icon: Users, title: "Özenli Ekip", text: "Paketlemeden kuruluma kadar eşyanıza kendi eşyamız gibi davranıyoruz." },
  { icon: BadgeDollarSign, title: "Net Fiyat", text: "Fotoğraf veya görüntülü görüşmeyle eşyayı görüp yazılı fiyat veriyoruz." },
  { icon: Clock, title: "Planlı Teslim", text: "Yükleme ve teslim saatini baştan planlıyor, değişiklik olursa önceden haber veriyoruz." },
  { icon: Headphones, title: "7/24 Destek", text: "Telefon ve WhatsApp hattımıza günün her saati yazabilirsiniz." },
];

/** Koyu lacivert bant — sayfaya ritim katan kontrast bölüm. */
export default function WhyUs() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-950 py-20 text-white lg:py-28">
      {/* Hafif ışık lekeleri + ince ızgara dokusu */}
      <div aria-hidden className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />
      <div aria-hidden className="absolute -bottom-40 -left-24 -z-10 h-96 w-96 rounded-full bg-accent-500/15 blur-3xl" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />

      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-300 ring-1 ring-inset ring-white/15">
            Neden Biz?
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
            Taşınmanın stresini biz üstleniyoruz
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            Her taşımada uyguladığımız somut çalışma prensipleri.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {REASONS.map((r, i) => {
            const Ico = r.icon;
            return (
              <Reveal key={r.title} delay={i * 60} className="h-full">
                <div className="group flex h-full items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-accent-400/40 hover:bg-white/[0.07]">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg shadow-black/20">
                    <Ico className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white">{r.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-white/70">{r.text}</p>
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
