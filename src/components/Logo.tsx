import Link from "next/link";
import { Truck } from "lucide-react";
import { site } from "@/lib/site";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label={`${site.name} ana sayfa`}
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-sm shadow-brand-600/30 transition-transform group-hover:scale-105">
        <Truck className="h-5 w-5" aria-hidden />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-lg font-extrabold tracking-tight text-ink">
          {site.name}
        </span>
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
          Nakliyat & Lojistik
        </span>
      </span>
    </Link>
  );
}
