# Her Yere Lojistik — Marka Görselleri

Google İşletme Profili (Google Haritalar) için üretilen marka görselleri ve kullanım kuralları.

> **Bunlar fotoğraf değil, marka grafiğidir.** İçlerinde gerçek araç/depo/ekip görüntüsü yok
> ve olmamalı. Gerçek fotoğrafları işletme sahibi kendi telefonuyla çekip Google'a ayrıca ekler.

---

## Dosyalar

| Dosya | Boyut | Nerede kullanılır |
|---|---|---|
| `logo-kare.png` | 1000×1000 | **Google profil resmi.** Google daire içinde kırpar. |
| `kapak-1024x576.png` | 1024×576 (16:9) | **Google kapak görseli.** |
| `logo-yatay.png` | 1200×400, şeffaf | Site başlığı, fatura, e-posta imzası, sosyal medya. |
| `logo-yatay.svg` | vektör | Baskı, tabela, araç giydirme. Sınırsız büyür, bulanıklaşmaz. |
| `logo-mark.svg` | vektör | Sadece işaret (kamyonlu yuvarlatılmış kare). |
| `favicon-32/180/512.png` | kare | Tarayıcı sekmesi, telefon ana ekranı. |

`logo-yatay.svg` içindeki yazı **outline'a çevrildi** — açan bilgisayarda Poppins kurulu
olmasa bile doğru görünür.

---

## Renkler

Sitedeki (`globals.css`) değerlerin aynısı. Yeni renk uydurulmadı.

| Renk | Hex | Kullanım |
|---|---|---|
| Ana mavi (brand-600) | `#2563eb` | Degradenin başı, birincil renk |
| Turkuaz (accent-500) | `#06b6d4` | Degradenin sonu, vurgu |
| Koyu mavi (brand-800) | `#1e40af` | Sadece kapaktaki degradenin koyu ucu |
| Lacivert / yazı | `#0f172a` | Başlık ve gövde yazısı |
| Gri | `#64748b` | Alt başlık ("NAKLİYAT & LOJİSTİK") |

**Marka degradesi:** `#2563eb` → `#06b6d4`, sol üstten sağ alta (135°).

---

## Tipografi

- **Başlık / firma adı:** Poppins ExtraBold (800), harf aralığı hafif sıkı (`tracking-tight`).
- **Gövde ve alt başlık:** Inter. Alt başlık: Medium (500), BÜYÜK HARF, harf aralığı `0.18em`.

İkisi de sitede zaten yüklü (`next/font/google`).

---

## Logo kullanım kuralları

- **Boşluk bırak:** İşaretin çevresinde en az, işaretin yüksekliğinin **%25'i** kadar boşluk olsun.
- **En küçük boyut:** Yatay logo en az 120 px genişlikte kullanılsın; altına düşerse alt başlık okunmaz.
  Daha küçük yerlerde yalnızca işareti (`logo-mark.svg`) kullan.
- **Koyu zemin:** `logo-yatay.png` yazısı laciverttir, koyu zeminde kaybolur. Koyu zemin gerekiyorsa
  yazıyı beyaza çeviren bir sürüm üretilmeli.
- **Yapma:** Logoyu esnetme/orantısız büyütme, rengini değiştirme, gölge/kontur ekleme,
  degradeyi başka renklere çevirme.

---

## Google'a yüklerken

- ✅ Profil resmi → `logo-kare.png` · Kapak → `kapak-1024x576.png`
- ✅ Araç, ekip, taşıma anı gibi **gerçek fotoğrafları ayrıca** ekle. Google gerçek fotoğrafı ödüllendirir.
- ❌ Kapağa **telefon numarası, web adresi, kampanya/indirim yazısı koyma.** Google bunları reklam
  içeriği sayar ve görseli kaldırabilir.
- ❌ Bu görselleri "firmanın aracının fotoğrafı" olarak yükleme — bunlar marka grafiği.
- ❌ Doğrulanamayan iddia yazma ("20 yıllık tecrübe", "Türkiye'nin 1 numarası", ödül vb.).

Kapakta yalnızca şunlar var: logo, firma adı, hizmet tanımı ve slogan
("Türkiye'nin her yerine güvenli taşımacılık.") — hepsi doğrulanabilir, reklam metni değil.

---

## Kaynak / yeniden üretim

Görseller vektörden (SVG) üretildi, yapay zekâ ile fotogerçekçi üretim kullanılmadı.
Yazılar gerçek font dosyalarıyla yazıldığı için Türkçe karakterler (İ, Ş, Ğ, ı) bozulmadan çıktı.
