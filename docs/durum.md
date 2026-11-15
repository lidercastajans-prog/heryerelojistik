# Her Yere Lojistik — durum

Son güncelleme: 15.11.2026 · Ana defter: `C:\Users\user\Desktop\ajans\musteriler.md`

## Site
- ✅ Canlı: https://heryerelojistik.com (Vercel projesi `heryerelojistik`, ekip lidercastajans-9230s-projects; `main` push = yayın). DNS GoDaddy (ns77/78.domaincontrol.com).
- ✅ **www düzeltildi (15.11, kullanıcı onayı):** www SSL hatası veriyordu (DNS'te www → cname.vercel-dns.com vardı ama www Vercel projesine eklenmemişti). Vercel API ile `www.heryerelojistik.com` projeye eklendi, `heryerelojistik.com`'a **308** yönlendirme; sertifika çıktı, `https://www.heryerelojistik.com/iletisim` → 308 → 200 doğrulandı.
- ✅ **Teyitsiz iddialar yumuşatıldı (15.11, `0735cba` CANLIDA, kullanıcı "evet yayınla"):** sigorta / 81 il / ücretsiz keşif / sahiplik-garanti vaatleri sitede 0; bölge vurgusu İstanbul + Kocaeli, Tekirdağ, Bursa, Sakarya, Yalova; diğer iller "şehirler arası, talep üzerine". Firmaya sorulacak: yerinde keşif? (~20 "keşif" ifadesi duruyor), depolama gerçekten var mı?, 7/24?, araç/asansör sahipliği, sigorta poliçesi planı, kendi iş fotoğrafları, düzenli şehirler arası güzergâhlar.
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
- 🔴 **HATA — Facebook Sayfası YANLIŞ HESAPTAN açıldı (15.11):** Chrome'da açık olan Facebook hesabı kullanıcının DEĞİL, "İlcan Kalayci" adlı başka bir kişinindi; ajans kontrol etmeden sayfayı o hesaptan kurdu. Kullanıcı fark etti → site linki kaldırıldı (`a9f9436`, canlıda doğrulandı). Sayfa SİLİNEMEDİ: Chrome'da FB oturumu kapanmış, o hesap şifre istiyor (başkasının hesabı — girilmez). Sayfanın silinmesi için hesap sahibine ulaşılmalı. Chrome giriş ekranında kayıtlı "İlcan Kalayci" ve "Selen Beşlioğlu" profilleri var; kaldırma düğmesi tepki vermedi → kullanıcıya bırakıldı. Instagram bu sayfaya hiç bağlanmadı. Yeni sayfa: kullanıcı kendi FB hesabıyla girince, önce aktif hesabı TEYİT ederek açılacak.
- (eski kayıt) Facebook Sayfası açıldı (15.11): https://www.facebook.com/profile.php?id=61596542943551 — ad "Her Yere Lojistik", kategori Kargo ve Nakliye Şirketi, site/tel +90 533 929 83 24/info@heryerelojistik.com/adres Kağıthane 34406, "Sürekli Açık", eylem düğmesi "Şimdi ara", profil + kapak yüklendi, biyografi eklendi, Meta pazarlama e-postaları kapalı. WhatsApp bağlanmadı (firmanın telefonuna kod gerekiyor). Kullanıcı adı (@heryerelojistik) henüz alınmadı. Firma sahibi sonra yönetici eklenecek.
- ✅ **Instagram @heryerelojistik (15.11):** kullanıcı telefondan açtı, Chrome'da da giriş yaptı (kullanıcının kendi IG'si de Chrome'da kayıtlı — düzenlemeden önce aktif hesabı kontrol et). Ajans: profil fotoğrafı, bio (Alternatif A), İşletme hesabına geçiş, kategori Kargo ve Nakliye Şirketi, iletişim (info@, +90 533 929 83 24, Kağıthane adresi, profilde göster). Site footer + sameAs'a eklendi (`5152440`, canlı).
- ✅ **5 öne çıkan (15.11):** Bölgeler · Taşıma Günü · S.S.S. · Hizmetler · Teklif Al — her biri kendi ikon kapağıyla (kapak görseli de hikâye olarak paylaşıldı, ilk kare). İçerik: `Desktop\ajans\marka\heryerelojistik\sosyal\one-cikanlar\`. Sıra: Instagram en son güncelleneni öne alır; Teklif Al'ı başa almak için ona yeni hikâye eklenince en son o güncellenmeli.
- ⬜ Instagram'da eksik: görünen ad "Her Yere Lojistik Nakliyat" ve profil linki heryerelojistik.com (web'de yalnız mobilden düzenlenebiliyor); Facebook Sayfasına bağlama (web'de ayrı pencere açıyor — telefondan Profili düzenle → Sayfa → Bağla).
- ✅ İlk 2 hafta içerik görselleri (44 PNG + metin.txt, AI yok): `Desktop\ajans\marka\heryerelojistik\sosyal\icerik\` (pano-hafta-1-2.png). G6 metnindeki "kapalı kasa araç" firmaya teyit edilecek.
- 🟠 **15.11: hazırlık bitti, hesap YOK.** `docs/sosyal-medya/` → `OKUBENI.md`, `kurulum.md`, `icerik-takvimi-ilk-ay.md` (23.11–20.12: 12 gönderi + 4 Reels), `meta-reklam-plani.md` (WhatsApp'a mesaj; bütçe senaryoları ₺250/500/900 günlük, karar firmada). Hiçbir şey paylaşılmadı/zamanlanmadı/açılmadı.
- Önerilen kullanıcı adı `heryerelojistik` (IG+FB 15.11'de boş görünüyor, kesin değil). `@heryerenakliyat` başka bir nakliyatçının — kullanma.
- Bekleyen: firma sahibi hesapları açacak + ajansı iş ortağı ekleyecek; WhatsApp Business teyidi; çekim listesi; teyitsiz iddialar (sigorta, ücretsiz keşif, 81 il, mobil asansör, depo) sosyal medyada kullanılmıyor → firmaya soruldu mu?
- Kullanıcı onayı gerekli: takvimin Postiz ile zamanlanması; reklam (hesap + günlük bütçe + ay sonu en fazla harcama rakamla).
- Sitede ölçüm yok (Pixel/GA/CSP/çerez metni yok). WhatsApp reklamı için şart değil; siteye yönlendiren reklam istenirse Pixel + çerez onayı + KVKK metni (dijital-ajans).
