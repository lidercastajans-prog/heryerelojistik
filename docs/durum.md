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
