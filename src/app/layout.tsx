import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileActionBar from "@/components/MobileActionBar";

// FONTLAR DEPODA (src/app/fonts, 10.10.2026): next/font/google derlemede Google'dan indirir; Google Vercel'e sorgulu
// dosya adresleri döndürünce Turbopack derlemesi düşüyor (aynı kalıptaki Evofis'te yaşandı). Tüm Türkçe harfler dahil;
// yeniden indirme: `node scripts/font-indir.mjs` (ayrıntı: src/app/fonts/OKUBENI.md).
const inter = localFont({
  src: "./fonts/inter.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const poppins = localFont({
  src: [
    { path: "./fonts/poppins-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/poppins-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/poppins-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/poppins-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Evden Eve Nakliyat & Şehirler Arası Yük Taşımacılığı`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Lojistik ve Nakliyat",
  verification: { google: "eBTLiH9_vNIZ3RdAQrDfDXj-ANomNN5b-1yL3auFO2g" },
  keywords: [
    "Her Yere Lojistik",
    "evden eve nakliyat",
    "şehirler arası nakliyat",
    "yük taşımacılığı",
    "asansörlü taşımacılık",
    "ofis taşıma",
    "eşya depolama",
    "sigortalı nakliyat",
    "Türkiye geneli nakliyat",
    "İstanbul evden eve nakliyat",
    "Ankara şehirler arası nakliyat",
    "İzmir nakliyat firması",
    "parsiyel yük taşıma",
    "komple yük taşıma",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Güvenli, Sigortalı Nakliyat`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Güvenli, Sigortalı Nakliyat`,
    description: site.description,
  },
  robots: site.indexable
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
    : { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${inter.variable} ${poppins.variable} antialiased`}>
      <body className="min-h-dvh bg-white text-ink flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
        >
          İçeriğe geç
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <MobileActionBar />
      </body>
    </html>
  );
}
