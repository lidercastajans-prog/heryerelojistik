import { site, whatsappLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

/** Sabit yüzen WhatsApp butonu (masaüstü). Mobilde MobileActionBar kullanılır. */
export default function WhatsAppButton() {
  const message = `Merhaba ${site.name}, taşınma hakkında bilgi almak istiyorum.`;
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile yazın"
      className="group fixed bottom-6 right-6 z-40 hidden h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-110 lg:grid"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-sm font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        WhatsApp ile yazın
      </span>
    </a>
  );
}
