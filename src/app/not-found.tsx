import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { site, telLink } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="container-x flex flex-col items-center justify-center py-28 text-center">
      <span className="font-heading text-7xl font-extrabold text-brand-600">404</span>
      <h1 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">Sayfa bulunamadı</h1>
      <p className="mt-3 max-w-md text-muted">
        Aradığınız sayfa taşınmış veya hiç var olmamış olabilir. Ana sayfaya dönebilir
        ya da bizimle iletişime geçebilirsiniz.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 font-bold text-white transition-colors hover:bg-accent-500"
        >
          <Home className="h-5 w-5" aria-hidden />
          Ana Sayfa
        </Link>
        <a
          href={telLink()}
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-600 px-6 py-3 font-bold text-brand-700 transition-colors hover:bg-brand-50"
        >
          <Phone className="h-5 w-5" aria-hidden />
          {site.phoneDisplay}
        </a>
      </div>
    </section>
  );
}
