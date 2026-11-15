"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Phone, Menu, X, ChevronDown, ArrowRight, Clock, MapPin, ChevronRight } from "lucide-react";
import { site, telLink, whatsappLink } from "@/lib/site";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";

const WA_MESAJ = `Merhaba ${site.name}, taşınma hakkında bilgi almak istiyorum.`;

/**
 * İki katlı yapışkan header:
 *  1) İnce iletişim şeridi (7/24 · telefon · WhatsApp) — sayfa kayınca doğal olarak yukarı kayıp gizlenir
 *     (header `sticky` ve `top` değeri şerit yüksekliği kadar negatif; JS gerekmez, kayma/zıplama olmaz).
 *  2) Ana bar — beyaz/blur; kaydırınca gölge kazanır. Aktif sayfada alt çizgi göstergesi.
 */
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sayfa değişince mobil menüyü kapat
  useEffect(() => setOpen(false), [pathname]);

  // Mobil menü açıkken arka plan kaymasın; Esc ile kapansın
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname.startsWith("/hizmetler");
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky -top-9 z-[60] w-full">
      {/* 1 — İletişim şeridi (36px) */}
      <div className="h-9 bg-brand-950 text-[13px] text-white/80">
        <div className="container-x flex h-full items-center justify-between gap-4">
          <p className="flex min-w-0 items-center gap-2">
            <span className="relative flex h-2 w-2 shrink-0" aria-hidden>
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="truncate">
              <strong className="font-semibold text-white">7/24 ulaşılabilir</strong>
              <span className="hidden sm:inline"> · İstanbul merkezli · Marmara, Ege ve Akdeniz&apos;e düzenli sefer</span>
            </span>
          </p>
          <div className="flex shrink-0 items-center gap-4">
            <a
              href={telLink()}
              className="flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-accent-300"
            >
              <Phone className="h-3.5 w-3.5 text-accent-300" aria-hidden />
              {site.phoneDisplay}
            </a>
            <a
              href={whatsappLink(WA_MESAJ)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 font-semibold text-white transition-colors hover:text-emerald-300 sm:flex"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366]" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* 2 — Ana bar */}
      <div
        className={`relative border-b transition-[background-color,box-shadow,border-color] duration-300 ${
          scrolled || open
            ? "border-line/80 bg-white/90 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)] backdrop-blur-md"
            : "border-transparent bg-white"
        }`}
      >
        <div className="container-x flex h-[68px] items-center justify-between gap-4 lg:h-[76px]">
          <Logo />

          {/* Masaüstü navigasyon */}
          <nav aria-label="Ana menü" className="hidden lg:flex lg:items-center lg:gap-0.5">
            {site.nav.map((item) => {
              const active = isActive(item.href);
              const base = `nav-link relative flex items-center gap-1 rounded-full px-3.5 py-2 text-[14.5px] font-semibold transition-colors hover:text-brand-700 ${
                active ? "is-active text-brand-700" : "text-ink-soft"
              }`;
              return item.children ? (
                <div key={item.label} className="group relative">
                  <Link href={item.href} className={base} aria-haspopup="true">
                    {item.label}
                    <ChevronDown
                      className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                      aria-hidden
                    />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <ul className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-2xl shadow-ink/10">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            aria-current={pathname === child.href ? "page" : undefined}
                            className="group/item flex items-center justify-between gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-700"
                          >
                            {child.label}
                            <ChevronRight
                              className="h-4 w-4 text-muted transition-transform group-hover/item:translate-x-0.5 group-hover/item:text-brand-600"
                              aria-hidden
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={base}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Sağ aksiyonlar (masaüstü) */}
          <div className="hidden items-center gap-4 lg:flex">
            <a href={telLink()} className="group hidden items-center gap-2.5 xl:flex">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <Phone className="h-[18px] w-[18px]" aria-hidden />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">7/24 arayın</span>
                <span className="text-sm font-bold text-ink">{site.phoneDisplay}</span>
              </span>
            </a>
            <Link
              href="/teklif-al"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-brand-700/30"
            >
              Teklif Al
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>

          {/* Mobil menü butonu */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
              open ? "border-brand-600 bg-brand-600 text-white" : "border-line bg-white text-ink"
            }`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>

        {/* Mobil menü — header altından ekranın sonuna kadar */}
        {open && (
          <div
            id="mobile-menu"
            className="menu-in absolute inset-x-0 top-full h-[calc(100dvh-68px)] overflow-y-auto border-t border-line bg-white lg:hidden"
          >
            <nav aria-label="Mobil menü" className="container-x pb-28 pt-3">
              <ul className="divide-y divide-line">
                {site.nav.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <li key={item.label} className="py-1">
                      <Link
                        href={item.href}
                        aria-current={active && !item.children ? "page" : undefined}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-3 py-3.5 font-heading text-lg font-bold ${
                          active ? "text-brand-700" : "text-ink"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            aria-hidden
                            className={`h-5 w-1 rounded-full ${active ? "bg-accent-500" : "bg-transparent"}`}
                          />
                          {item.label}
                        </span>
                        {!item.children && <ChevronRight className="h-5 w-5 text-muted" aria-hidden />}
                      </Link>
                      {item.children && (
                        <ul className="mb-2 ml-7 space-y-0.5">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={() => setOpen(false)}
                                aria-current={pathname === child.href ? "page" : undefined}
                                className={`block rounded-lg px-3 py-2.5 text-[15px] font-medium ${
                                  pathname === child.href ? "bg-brand-50 text-brand-700" : "text-ink-soft"
                                }`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <a
                  href={telLink()}
                  className="flex items-center justify-center gap-2 rounded-full border-2 border-brand-600 px-4 py-3 text-sm font-bold text-brand-700"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  Hemen Ara
                </a>
                <a
                  href={whatsappLink(WA_MESAJ)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-ink"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </a>
                <Link
                  href="/teklif-al"
                  onClick={() => setOpen(false)}
                  className="col-span-2 flex items-center justify-center gap-2 rounded-full bg-brand-600 px-4 py-3.5 text-base font-bold text-white shadow-lg shadow-brand-600/25"
                >
                  Ücretsiz Teklif Al
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </Link>
              </div>

              <ul className="mt-6 space-y-2.5 rounded-2xl bg-surface p-4 text-sm text-ink-soft">
                <li className="flex items-start gap-2.5">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                  7/24 telefon ve WhatsApp
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                  {site.address.full}
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
