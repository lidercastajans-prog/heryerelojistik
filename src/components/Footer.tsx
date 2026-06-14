import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site, telLink, whatsappLink } from "@/lib/site";
import { services } from "@/lib/services";
import Logo from "./Logo";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "./SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-ink text-slate-300">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Marka */}
        <div className="space-y-4">
          <Logo className="[&_span]:!text-white [&_.text-muted]:!text-slate-400" />
          <p className="text-sm leading-relaxed text-slate-400">
            {site.legalName}. {site.tagline}
          </p>
          <div className="flex gap-3 pt-1">
            <SocialLink href={site.social.instagram} label="Instagram">
              <InstagramIcon className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={site.social.facebook} label="Facebook">
              <FacebookIcon className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={site.social.linkedin} label="LinkedIn">
              <LinkedinIcon className="h-4 w-4" />
            </SocialLink>
          </div>
        </div>

        {/* Hizmetler */}
        <nav aria-label="Hizmetler">
          <h2 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-white">
            Hizmetler
          </h2>
          <ul className="space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={s.href} className="text-slate-400 transition-colors hover:text-accent-300">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Kurumsal */}
        <nav aria-label="Kurumsal">
          <h2 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-white">
            Kurumsal
          </h2>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/hakkimizda" className="text-slate-400 hover:text-accent-300">Hakkımızda</Link></li>
            <li><Link href="/galeri" className="text-slate-400 hover:text-accent-300">Galeri</Link></li>
            <li><Link href="/sss" className="text-slate-400 hover:text-accent-300">Sık Sorulan Sorular</Link></li>
            <li><Link href="/iletisim" className="text-slate-400 hover:text-accent-300">İletişim</Link></li>
            <li><Link href="/teklif-al" className="text-slate-400 hover:text-accent-300">Teklif Al</Link></li>
          </ul>
        </nav>

        {/* İletişim */}
        <div>
          <h2 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-white">
            İletişim
          </h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={telLink()} className="flex items-start gap-3 text-slate-400 hover:text-accent-300">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-start gap-3 text-slate-400 hover:text-accent-300">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden />
                {site.email}
              </a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-slate-400 hover:text-accent-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden />
                {site.address.full}
              </a>
            </li>
            <li className="flex items-start gap-3 text-slate-400">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden />
              {site.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© {year} {site.name}. Tüm hakları saklıdır.</p>
          <p>Güvenli · Sigortalı · Zamanında Teslimat</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent-500"
    >
      {children}
    </a>
  );
}
