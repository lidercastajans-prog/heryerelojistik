import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { faqs } from "@/lib/faqs";
import { featuredCities } from "@/lib/coverage";
import { cities } from "@/lib/cities";
import { istanbulDistricts } from "@/lib/istanbul-districts";
import { sortedPosts } from "@/lib/posts";

// GEO (Generative Engine Optimization): yapay zekâ arama motorları için
// faktüel, yapılandırılmış özet. /llms.txt adresinde sunulur.
export const dynamic = "force-static";

export function GET() {
  const lines: string[] = [];

  lines.push(`# ${site.name}`);
  lines.push("");
  lines.push(`> ${site.description}`);
  lines.push("");
  lines.push(`${site.legalName}, ${site.foundedYear} yılından bu yana faaliyet gösteren bir nakliyat ve lojistik firmasıdır. Merkezi İstanbul Kağıthane'dedir. İstanbul'un iki yakasında ve Kocaeli, Tekirdağ, Bursa, Sakarya, Yalova'da düzenli evden eve nakliyat yapar; diğer illere şehirler arası taşımayı talep üzerine planlar. Paketleme, mobil asansörle taşıma, söküm ve montaj yapılır.`);
  lines.push("");

  lines.push("## Hizmetler");
  for (const s of services) {
    lines.push(`- **${s.title}**: ${s.excerpt}`);
  }
  lines.push("");

  lines.push("## Hizmet Bölgeleri");
  lines.push(
    `Düzenli hizmet: ${featuredCities.join(", ")}. Diğer iller: şehirler arası taşıma, talep üzerine.`
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
  lines.push("- Paketleme: battaniye, streç film, koli; araçta kayışla sabitleme");
  lines.push("- Yüksek katlarda mobil asansörle taşıma");
  lines.push("- Fotoğraf veya görüntülü görüşmeyle yazılı fiyat; teklif istemek ücretsiz");
  lines.push("- Parsiyel (paylaşımlı) ve komple yük taşımacılığı");
  lines.push("- Şehirler arası sevkiyatlarda yola çıkış ve tahmini varış bilgilendirmesi");
  lines.push("- 7/24 telefon ve WhatsApp hattı");
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
  lines.push(`- Hizmet bölgeleri: ${site.url}/nakliyat`);
  lines.push(`- Hakkımızda: ${site.url}/hakkimizda`);
  lines.push(`- Sık sorulan sorular: ${site.url}/sss`);
  lines.push(`- İletişim: ${site.url}/iletisim`);
  lines.push(`- Teklif al: ${site.url}/teklif-al`);
  lines.push("");

  lines.push("## Bölge Sayfaları");
  for (const c of cities) {
    lines.push(`- ${c.name} nakliyat: ${site.url}/nakliyat/${c.slug}`);
  }
  lines.push("");

  lines.push("## İstanbul İlçeleri");
  lines.push(
    `İstanbul'un 39 ilçesinin tamamına hizmet veriyoruz. Her ilçe için o ilçenin sokak ` +
      `yapısı, asansör ve otopark koşullarına göre hazırlanmış ayrı bir sayfa ve ilçeye özel ` +
      `soru-cevap bölümü bulunur.`
  );
  lines.push("");
  for (const d of istanbulDistricts) {
    lines.push(
      `- **${d.name}** (${d.side}) — ${d.neighborhoods.slice(0, 4).join(", ")} ve çevresi: ` +
        `${site.url}/nakliyat/istanbul/${d.slug}`
    );
  }
  lines.push("");

  lines.push("## Blog Yazıları");
  for (const p of sortedPosts) {
    lines.push(`- ${p.title}: ${site.url}/blog/${p.slug}`);
  }
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
