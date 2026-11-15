import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { site, telLink, whatsappLink } from "@/lib/site";
import { images } from "@/lib/images";
import Photo from "./Photo";
import WhatsAppIcon from "./WhatsAppIcon";

export default function CtaSection() {
  const mesaj = `Merhaba ${site.name}, taşınma için fiyat almak istiyorum.`;
  return (
    <section className="container-x py-16">
      <div className="relative isolate overflow-hidden rounded-[2rem] px-6 py-16 text-center shadow-2xl shadow-brand-950/25 sm:px-12 sm:py-20">
        {/* Arka plan foto (akşam yüklemesi) + lacivert örtü — fotoğraf görünür kalır */}
        <div className="absolute inset-0 -z-20">
          <Photo src={images.ctaBg} alt="" sizes="(max-width: 1280px) 100vw, 1280px" fallback={{ from: "from-brand-800", to: "to-brand-950" }} />
        </div>
        <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(10,20,48,0.5)_0%,rgba(10,20,48,0.7)_55%,rgba(10,20,48,0.9)_100%)]" />

        <div className="relative mx-auto max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent-300">7/24 ulaşılabilir</p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-5xl">Taşınmaya hazır mısınız?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
            Eşyalarınızın fotoğrafını gönderin, yazılı fiyatı hızlıca iletelim. Teklif almak ücretsiz.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink(mesaj)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-base font-bold text-[#06241a] shadow-lg transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp&apos;tan Yazın
            </a>
            <a
              href={telLink()}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-bold text-brand-800 shadow-lg transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              <Phone className="h-5 w-5" aria-hidden />
              {site.phoneDisplay}
            </a>
          </div>
          <Link
            href="/teklif-al"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-white/90 underline-offset-4 hover:text-white hover:underline"
          >
            ya da online teklif formunu doldurun
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
