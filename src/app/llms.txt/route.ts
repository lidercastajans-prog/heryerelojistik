import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { faqs } from "@/lib/faqs";
import { featuredCities } from "@/lib/coverage";

// GEO (Generative Engine Optimization): yapay zekâ arama motorları için
// faktüel, yapılandırılmış özet. /llms.txt adresinde sunulur.
export const dynamic = "force-static";

export function GET() {
  const lines: string[] = [];

  lines.push(`# ${site.name}`);
  lines.push("");
  lines.push(`> ${site.description}`);
  lines.push("");
  lines.push(`${site.legalName}, ${site.foundedYear} yılından bu yana faaliyet gösteren bir nakliyat ve lojistik firmasıdır. Türkiye'nin 81 iline evden eve nakliyat ve şehirler arası yük taşımacılığı hizmeti verir. Tüm taşımalar sigortalıdır; asansörlü taşıma, paketleme, montaj ve depolama hizmetleri sunulur.`);
  lines.push("");

  lines.push("## Hizmetler");
  for (const s of services) {
    lines.push(`- **${s.title}**: ${s.excerpt}`);
  }
  lines.push("");

  lines.push("## Hizmet Bölgeleri");
  lines.push(
    `Türkiye geneli 81 il. Öne çıkan iller: ${featuredCities.join(", ")}.`
  );
  lines.push("");

  lines.push("## İletişim");
  lines.push(`- Web: ${site.url}`);
  lines.push(`- Telefon: ${site.phoneDisplay}`);
  lines.push(`- WhatsApp: +${site.whatsapp}`);
  lines.push(`- E-posta: ${site.email}`);
  lines.push(`- Adres: ${site.address.full}`);
  lines.push(`- Çalışma saatleri: ${site.hours}`);
  lines.push("");

  lines.push("## Öne Çıkan Bilgiler");
  lines.push("- Sigortalı taşımacılık (tüm taşımalar teminat altında)");
  lines.push("- Asansörlü taşıma hizmeti");
  lines.push("- Ücretsiz keşif ve yazılı, net fiyat (sürpriz ek ücret yok)");
  lines.push("- Parsiyel (paylaşımlı) ve komple yük taşımacılığı");
  lines.push("- Şehirler arası sevkiyatlarda canlı takip");
  lines.push("- 7/24 müşteri destek hattı");
  lines.push("");

  lines.push("## Sık Sorulan Sorular");
  for (const f of faqs) {
    lines.push(`### ${f.question}`);
    lines.push(f.answer);
    lines.push("");
  }

  lines.push("## Önemli Sayfalar");
  lines.push(`- Ana sayfa: ${site.url}/`);
  lines.push(`- Evden eve nakliyat: ${site.url}/hizmetler/evden-eve-nakliyat`);
  lines.push(`- Şehirler arası yük taşımacılığı: ${site.url}/hizmetler/sehirler-arasi-yuk-tasimaciligi`);
  lines.push(`- Hakkımızda: ${site.url}/hakkimizda`);
  lines.push(`- Sık sorulan sorular: ${site.url}/sss`);
  lines.push(`- İletişim: ${site.url}/iletisim`);
  lines.push(`- Teklif al: ${site.url}/teklif-al`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
