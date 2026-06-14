import Link from "next/link";
import { Phone, FileText } from "lucide-react";
import { site, telLink, whatsappLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

/** Mobil alt aksiyon barı: Ara · WhatsApp · Teklif Al. */
export default function MobileActionBar() {
  const message = `Merhaba ${site.name}, taşınma hakkında bilgi almak istiyorum.`;
  return (
    <>
      {/* Sabit bar içeriği örtmesin diye boşluk */}
      <div className="h-[68px] lg:hidden" aria-hidden />
      <nav
        aria-label="Hızlı iletişim"
        className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-line bg-white/95 backdrop-blur lg:hidden"
      >
        <a href={telLink()} className="flex flex-col items-center justify-center gap-1 py-2.5 text-xs font-bold text-ink">
          <Phone className="h-5 w-5 text-brand-600" aria-hidden />
          Ara
        </a>
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 border-x border-line py-2.5 text-xs font-bold text-ink"
        >
          <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
          WhatsApp
        </a>
        <Link href="/teklif-al" className="flex flex-col items-center justify-center gap-1 bg-brand-600 py-2.5 text-xs font-bold text-white">
          <FileText className="h-5 w-5" aria-hidden />
          Teklif Al
        </Link>
      </nav>
    </>
  );
}
