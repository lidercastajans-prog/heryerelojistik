# Site fontları (depoda barındırılır)

| Dosya | Aile | Ağırlık | Kullanım |
|---|---|---|---|
| `inter.woff2` | Inter (variable) | 100–900 | gövde metni (`--font-inter`) |
| `poppins-500…800.woff2` | Poppins | 500, 600, 700, 800 | başlıklar (`--font-poppins`) |

- **Neden depoda:** `next/font/google` fontları derleme sırasında Google'dan indirir. Google Vercel'in derleme
  sunucusuna sorgulu dosya adresleri döndürünce Next 16 Turbopack derlemesi düşüyor (10.10.2026'da aynı kalıptaki
  Evofis Nakliye sitesinde yaşandı, yayın durdu). Artık derleme dış ağa bağlı değil. Bağlantı: `src/app/layout.tsx`.
- **Kapsam:** ASCII + Latin-1 + Latin Genişletilmiş-A (tüm Türkçe harfler) + sitede geçen işaretler (– — “ ” … ₺ →).
  Kapsam dışı bir karakter sistem fontuyla görünür; gerekirse `scripts/font-indir.mjs` listesine ekleyip yeniden indirin:
  `node scripts/font-indir.mjs`
- **Lisans:** Inter ve Poppins [SIL Open Font License 1.1](https://openfontlicense.org) — sitede gömülü kullanım ve
  yeniden dağıtım serbest. Kaynak: Google Fonts (Inter © The Inter Project Authors; Poppins © Indian Type Foundry).
