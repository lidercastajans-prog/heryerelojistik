# Her Yere Lojistik — durum

Son güncelleme: 15.11.2026 · Ana defter: `C:\Users\user\Desktop\ajans\musteriler.md`

## Site
- ✅ Canlı: https://heryerelojistik.com (Vercel projesi `heryerelojistik`, ekip lidercastajans-9230s-projects; `main` push = yayın). DNS GoDaddy (ns77/78.domaincontrol.com).
- ✅ **www düzeltildi (15.11, kullanıcı onayı):** www SSL hatası veriyordu (DNS'te www → cname.vercel-dns.com vardı ama www Vercel projesine eklenmemişti). Vercel API ile `www.heryerelojistik.com` projeye eklendi, `heryerelojistik.com`'a **308** yönlendirme; sertifika çıktı, `https://www.heryerelojistik.com/iletisim` → 308 → 200 doğrulandı.
- 🟠 Görseller: 9 site görseli (`src/lib/images.ts`) + 12 galeri fotoğrafı (`src/lib/gallery.ts`) GEÇİCİ Unsplash stok.
- 🟠 Sosyal medya linkleri boş (`src/lib/site.ts` → social).
- Haritalar linki (`src/lib/schema.ts` MAPS_URL) şu an adres araması — profil doğrulanınca gerçek profil linkiyle değiştir.

## Google İşletme Profili
- Hesap: heryerelojistik@gmail.com (Chrome `authuser=1`). Kayıt: "Her Yere Lojistik Nakliyat ve Taşımacılık", Merkez Mah. Kağıthane Cad. Kağıthane/İstanbul.
- 🔴 **15.11 kontrol: DOĞRULANMAMIŞ — doğrulama videosu HİÇ GÖNDERİLMEMİŞ.** Tek seçenek "İşletme Videosu Gönderin". Video firma sahibinden (aşağıda).
- Doğrulanınca: ajans hesabını yönetici ekle, siteye profil + yorum linki, `hasMap`/`sameAs`.

## Search Console
- Mülk: URL ön eki `https://heryerelojistik.com/` — **lidercastajans@gmail.com** hesabında (firma hesabında mülk yok). Doğrulama etiketi `layout.tsx`.
- 🔴 **15.11 kontrol: 59 sayfalık site haritası en son 20.06.2026'da okunmuş; dizinde YALNIZ 1 sayfa.** URL denetimi (`/hizmetler/evden-eve-nakliyat`): "URL Google tarafından bilinmiyor". Son 3 ay: 0 tıklama, 14 gösterim. Kanonik ve robots doğru (sorun kodda değil); sayfalar "Keşfedildi - şu anda dizine eklenmiş değil".
- ✅ **15.11 (kullanıcı onayı):** `sitemap.xml` yeniden gönderildi. Dizine ekleme istendi (6): `/hizmetler/evden-eve-nakliyat`, `/hizmetler/sehirler-arasi-yuk-tasimaciligi`, `/nakliyat`, `/nakliyat/istanbul`, `/nakliyat/istanbul/kagithane`, `/iletisim`.
- ⬜ ~1 hafta sonra (≈22.11): Sayfa dizine ekleme raporunda dizindeki sayı arttı mı bak; artmadıysa sıradaki sayfalar (teklif-al, hakkimizda, il sayfaları) için istek + iç bağlantı/otorite (İşletme Profili doğrulanınca profil linki büyük katkı) değerlendir.

## Google Ads
- ⬜ Yok.

## Sosyal medya (Instagram / Facebook / Meta reklam)
- **KAPSAM (kullanıcı, 15.11): sosyal medya yönetimi tamamen AJANSTA** — görsel üretimi + içerik (metin, Reels, hikâye) + zamanlama + Meta reklam. Firmadan yalnız: hesap sahipliği/onayı, ham fotoğraf-video, iddia teyitleri, reklam ödeme yöntemi. Her paylaşım/zamanlama/reklam açma yine kullanıcı onayıyla.
- Profil görselleri hazır: `Desktop\ajans\marka\heryerelojistik\sosyal\` (profil, FB kapak, 5 hikâye kapağı, pano).
- ✅ **Facebook Sayfası AÇILDI (15.11, kullanıcının kendi Facebook profilinden, kullanıcı onayıyla şartlar kabul):** https://www.facebook.com/profile.php?id=61596542943551 — ad "Her Yere Lojistik", kategori Kargo ve Nakliye Şirketi, site/tel +90 533 929 83 24/info@heryerelojistik.com/adres Kağıthane 34406, "Sürekli Açık", eylem düğmesi "Şimdi ara", profil + kapak yüklendi, biyografi eklendi, Meta pazarlama e-postaları kapalı. WhatsApp bağlanmadı (firmanın telefonuna kod gerekiyor). Kullanıcı adı (@heryerelojistik) henüz alınmadı. Firma sahibi sonra yönetici eklenecek.
- ⬜ Instagram: web'de kullanıcının IG oturumu açık olduğu için yeni hesap açılamadı → telefondan (Hesap ekle → Yeni hesap; heryerelojistik@gmail.com, @heryerelojistik) açılacak, sonra Facebook Sayfasına bağlanacak.
- ✅ İlk 2 hafta içerik görselleri (44 PNG + metin.txt, AI yok): `Desktop\ajans\marka\heryerelojistik\sosyal\icerik\` (pano-hafta-1-2.png). G6 metnindeki "kapalı kasa araç" firmaya teyit edilecek.
- 🟠 **15.11: hazırlık bitti, hesap YOK.** `docs/sosyal-medya/` → `OKUBENI.md`, `kurulum.md`, `icerik-takvimi-ilk-ay.md` (23.11–20.12: 12 gönderi + 4 Reels), `meta-reklam-plani.md` (WhatsApp'a mesaj; bütçe senaryoları ₺250/500/900 günlük, karar firmada). Hiçbir şey paylaşılmadı/zamanlanmadı/açılmadı.
- Önerilen kullanıcı adı `heryerelojistik` (IG+FB 15.11'de boş görünüyor, kesin değil). `@heryerenakliyat` başka bir nakliyatçının — kullanma.
- Bekleyen: firma sahibi hesapları açacak + ajansı iş ortağı ekleyecek; WhatsApp Business teyidi; çekim listesi; teyitsiz iddialar (sigorta, ücretsiz keşif, 81 il, mobil asansör, depo) sosyal medyada kullanılmıyor → firmaya soruldu mu?
- Kullanıcı onayı gerekli: takvimin Postiz ile zamanlanması; reklam (hesap + günlük bütçe + ay sonu en fazla harcama rakamla).
- Sitede ölçüm yok (Pixel/GA/CSP/çerez metni yok). WhatsApp reklamı için şart değil; siteye yönlendiren reklam istenirse Pixel + çerez onayı + KVKK metni (dijital-ajans).
