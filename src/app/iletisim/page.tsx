import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import JsonLd from "@/components/JsonLd";
import { site, telLink, whatsappLink } from "@/lib/site";
import { organizationSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "İletişim",
  description: `${site.name} ile iletişime geçin. Telefon, WhatsApp veya iletişim formu ile ücretsiz teklif ve destek alın.`,
  alternates: { canonical: "/iletisim" },
};

export default function IletisimPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    site.address.mapsQuery
  )}&output=embed`;

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Ana Sayfa", path: "/" },
            { name: "İletişim", path: "/iletisim" },
          ]),
        ]}
      />
      <PageHero
        title="Bize Ulaşın"
        description="Sorularınız, talepleriniz veya ücretsiz teklif için 7/24 buradayız."
        breadcrumb={[
          { name: "Ana Sayfa", path: "/" },
          { name: "İletişim", path: "/iletisim" },
        ]}
      />

      <section className="container-x grid gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
        {/* İletişim bilgileri */}
        <div className="space-y-4">
          <InfoCard icon={<Phone className="h-5 w-5" />} title="Telefon" href={telLink()} value={site.phoneDisplay} />
          <InfoCard
            icon={<WhatsAppIcon className="h-5 w-5" />}
            title="WhatsApp"
            href={whatsappLink(`Merhaba ${site.name}, bilgi almak istiyorum.`)}
            value="Hemen yazın"
            external
          />
          <InfoCard icon={<Mail className="h-5 w-5" />} title="E-posta" href={`mailto:${site.email}`} value={site.email} />
          <InfoCard icon={<MapPin className="h-5 w-5" />} title="Adres" value={site.address.full} />
          <InfoCard icon={<Clock className="h-5 w-5" />} title="Çalışma Saatleri" value={site.hours} />
        </div>

        {/* Form */}
        <div className="rounded-3xl border border-line bg-white p-7 shadow-sm sm:p-9">
          <h2 className="font-heading text-2xl font-bold text-ink">Mesaj gönderin</h2>
          <p className="mt-1.5 text-sm text-muted">Formu doldurun, en kısa sürede dönüş yapalım.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Harita */}
      <section className="container-x pb-20">
        <div className="overflow-hidden rounded-3xl border border-line shadow-sm">
          <iframe
            src={mapSrc}
            title={`${site.name} konum`}
            className="h-[360px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon,
  title,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <div className="flex items-start gap-4 rounded-3xl border border-line bg-white p-6 transition-colors hover:border-brand-200">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
        {icon}
      </span>
      <div>
        <h2 className="font-heading text-sm font-bold uppercase tracking-wide text-muted">{title}</h2>
        <p className="mt-0.5 font-semibold text-ink">{value}</p>
      </div>
    </div>
  );

  if (!href) return inner;
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {inner}
    </a>
  );
}
