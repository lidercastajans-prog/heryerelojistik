import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { site, telLink } from "@/lib/site";
import { images } from "@/lib/images";
import Photo from "./Photo";

export default function CtaSection() {
  return (
    <section className="container-x py-16">
      <div className="grain relative overflow-hidden rounded-[2rem] px-8 py-14 text-center shadow-2xl shadow-brand-900/20 sm:px-12 sm:py-16">
        {/* arka plan foto + marka overlay */}
        <div className="absolute inset-0 -z-20">
          <Photo src={images.ctaBg} alt="" sizes="100vw" fallback={{ from: "from-brand-700", to: "to-accent-600" }} />
        </div>
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-800/95 via-brand-700/90 to-accent-700/85" />
        {/* dekor */}
        <div aria-hidden className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-accent-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Taşınmaya hazır mısınız?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Ücretsiz keşif ve net fiyat için hemen teklif alın. Gerisini biz hallederiz.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/teklif-al"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-bold text-brand-700 shadow-lg transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Ücretsiz Teklif Al
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
            <a
              href={telLink()}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/70 px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              <Phone className="h-5 w-5" aria-hidden />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
