// Site fontlarını Google Fonts'tan woff2 olarak indirir → src/app/fonts/ (next/font/local ile bağlanır, src/app/layout.tsx).
//
// NEDEN DEPODA (10.10.2026): next/font/google fontları DERLEME SIRASINDA Google'dan çeker. Google Vercel'in derleme
// sunucusuna sorgulu dosya adresleri (/l/font?kit=…&skey=…) döndürünce Next 16 Turbopack derlemesi "next/font/google
// queries have exactly one entry" hatasıyla düşüyor (aynı kalıptaki Evofis sitesinde yaşandı, yayın durdu).
// Fontlar depoda olunca derleme dış ağa bağlı değil.
//
// Kapsam (text= alt kümesi): ASCII + Latin-1 + Latin Genişletilmiş-A (tüm Türkçe harfler: ç ğ ı İ ö ş ü, â î û) +
// sitede geçen işaretler (– — ‘ ’ “ ” … ₺ → …). Yeni bir özel karakter eklenirse listeye ekleyip yeniden çalıştırın.
// Variable font tek dosya (ağırlık aralığı), static font ağırlık başına bir dosya.
// Lisans: Inter ve Poppins SIL Open Font License 1.1 (src/app/fonts/OKUBENI.md).
//
// Kullanım: node scripts/font-indir.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HEDEF = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "app", "fonts");
const AILELER = [
  { ad: "Inter", eksen: "wght@100..900", onek: "inter" }, // variable — gövde
  { ad: "Poppins", eksen: "wght@500;600;700;800", onek: "poppins" }, // static — başlıklar
];

let metin = "";
for (let c = 0x20; c <= 0x7e; c++) metin += String.fromCodePoint(c);
for (let c = 0xa0; c <= 0x17f; c++) metin += String.fromCodePoint(c);
metin += "–—‘’‚“”„•…′″‹›€₺™→←↑↓≤≥×÷";
// woff2 dönmesi için güncel bir tarayıcı kimliği.
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

fs.mkdirSync(HEDEF, { recursive: true });
for (const a of AILELER) {
  const css = await (
    await fetch(`https://fonts.googleapis.com/css2?family=${a.ad}:${a.eksen}&display=swap&text=${encodeURIComponent(metin)}`, {
      headers: { "User-Agent": UA },
    })
  ).text();
  const yuzler = [...css.matchAll(/@font-face\s*{([^}]*)}/g)].map((m) => m[1]);
  if (!yuzler.length) throw new Error(`${a.ad}: Google yanıtında @font-face yok`);
  for (const y of yuzler) {
    const agirlik = /font-weight:\s*([^;]+);/.exec(y)?.[1].trim() ?? "400";
    const url = /url\(([^)]+)\)/.exec(y)?.[1];
    if (!url) throw new Error(`${a.ad}: font adresi yok`);
    const dosya = agirlik.includes(" ") ? `${a.onek}.woff2` : `${a.onek}-${agirlik}.woff2`;
    const buf = Buffer.from(await (await fetch(url, { headers: { "User-Agent": UA } })).arrayBuffer());
    if (buf.subarray(0, 4).toString("ascii") !== "wOF2") throw new Error(`${a.ad} ${agirlik}: woff2 değil`);
    fs.writeFileSync(path.join(HEDEF, dosya), buf);
    console.log(`${dosya} (ağırlık ${agirlik}): ${Math.round(buf.length / 1024)} KB`);
  }
}
