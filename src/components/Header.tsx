"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { site, telLink } from "@/lib/site";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sayfa değişince mobil menüyü kapat
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow ${
        scrolled ? "bg-white/90 shadow-sm backdrop-blur" : "bg-white"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-4">
        <Logo />

        {/* Masaüstü navigasyon */}
        <nav aria-label="Ana menü" className="hidden lg:flex lg:items-center lg:gap-1">
          {site.nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors hover:bg-brand-50 hover:text-brand-700 ${
                    isActive(item.href) ? "text-brand-700" : "text-ink-soft"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" aria-hidden />
                </Link>
                <div className="invisible absolute left-0 top-full w-72 translate-y-1 pt-2 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <ul className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-xl shadow-ink/5">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-700"
                        >
                          {child.label}
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
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors hover:bg-brand-50 hover:text-brand-700 ${
                  isActive(item.href) ? "text-brand-700" : "text-ink-soft"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Sağ aksiyonlar */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telLink()}
            className="flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brand-700"
          >
            <Phone className="h-4 w-4 text-brand-600" aria-hidden />
            {site.phoneDisplay}
          </a>
          <Link
            href="/teklif-al"
            className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm shadow-brand-600/30 transition-colors hover:bg-accent-500"
          >
            Teklif Al
          </Link>
        </div>

        {/* Mobil menü butonu */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobil menü */}
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-white lg:hidden">
          <nav aria-label="Mobil menü" className="container-x space-y-1 py-4">
            {site.nav.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className={`block rounded-lg px-3 py-3 text-base font-semibold ${
                    isActive(item.href) ? "bg-brand-50 text-brand-700" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-3 border-l border-line pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div className="flex gap-3 pt-3">
              <a
                href={telLink()}
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-brand-600 px-4 py-3 text-sm font-bold text-brand-700"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Ara
              </a>
              <Link
                href="/teklif-al"
                className="flex-1 rounded-full bg-brand-600 px-4 py-3 text-center text-sm font-bold text-white"
              >
                Teklif Al
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
