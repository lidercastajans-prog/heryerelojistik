/**
 * İstanbul ilçe landing sayfaları için veri.
 * Her ilçe ÖZGÜN metin, o ilçeye özel taşıma notları, ilçeye özel SSS ve
 * komşu ilçe bağlantıları içerir (ince/doorway içerik değil).
 * /nakliyat/istanbul/[ilce] rotasında kullanılır.
 */

import type { Faq } from "./faqs";

export type District = {
  slug: string;
  name: string;
  side: "Avrupa Yakası" | "Anadolu Yakası";
  /** Sayfa başındaki özet paragraf. */
  intro: string;
  neighborhoods: string[];
  /** İlçeye özel gövde metni (paragraflar). */
  body: string[];
  /** Bu ilçede taşımada dikkat edilen pratik konular. */
  notes: { title: string; text: string }[];
  /** İlçeye özel sık sorulan sorular (FAQPage şeması olarak da yayınlanır). */
  faqs: Faq[];
  /** Yakın ilçelerin slug'ları — iç bağlantı ağı için. */
  nearby: string[];
};

export const istanbulDistricts: District[] = [
  {
    slug: "besiktas",
    name: "Beşiktaş",
    side: "Avrupa Yakası",
    intro:
      "Beşiktaş, İstanbul'un en merkezi ve prestijli ilçelerinden biridir; Levent, Etiler ve Bebek'te yüksek katlı rezidanslarla dar sokaklı eski yapılar bir aradadır. Bu nedenle Beşiktaş evden eve nakliyatında doğru araç seçimi, otopark planı ve asansörlü taşıma öne çıkar.",
    neighborhoods: ["Levent", "Etiler", "Bebek", "Ortaköy", "Gayrettepe"],
    body: [
      "Beşiktaş'ta iki farklı taşınma gerçeği var. Levent ve Etiler tarafında yüksek katlı rezidanslar, kapalı otoparklar ve taşınma için gün-saat veren site yönetimleri; Beşiktaş çarşısı, Sinanpaşa ve Türkali çevresinde ise kırk elli yıllık, asansörü ya küçük ya da hiç olmayan apartmanlar. Aynı ilçenin iki ucuna aynı araç ve aynı ekipmanla gitmek çoğu zaman işe yaramıyor. Balmumcu ve Gayrettepe'de ana caddeye yakın binalarda yükleme rahat ilerliyor, ama bir iki sokak içeri girdiğinizde park sorunu hemen başlıyor. Akatlar ve Ulus'taki sitelerde ise manevra alanı dar, aracın nereden döneceğine önceden bakmak gerekiyor. Beşiktaş evden eve nakliyat işini alırken önce üç şeyi soruyoruz: kaçıncı kat, sokak genişliği ne, aracı nereye yanaştırabiliriz. Bu üç cevap taşınmanın kaç saat süreceğini de baştan belli ediyor.",
      "Boğaz hattı başlı başına bir konu. Bebek, Arnavutköy ve Kuruçeşme'de sokaklar dik, tek yönlü ve pek çok yerde iki araç yan yana geçmiyor. Sahil yolunda uzun süre araç bekletmek gerçekçi değil, arkada hemen trafik birikiyor. Bu bölgelerde büyük kamyon yerine kısa şasi araçla yaklaşıp eşyayı cepheden mobil asansörle indirmek çok daha hızlı sonuç veriyor. Ortaköy ve Yıldız tarafındaki eski binalarda merdiven boşlukları dar ve dönemeçli; gardırop, üç kişilik koltuk ve büyük buzdolabı merdivenden çoğu zaman dönmüyor. Abbasağa çevresinde sokaklar düz ama iki taraflı park dolu, aracın duracağı boşluğu sabahtan tutmak gerekiyor. Asansörlü taşıma bu ilçede lüks değil, işin doğal parçası. Sökülebilen parçaları söküp yeni evde tekrar kuruyoruz, geri kalanı cepheden iniyor.",
      "Saat planı Beşiktaş'ta işin yarısı. Barbaros Bulvarı ve Büyükdere Caddesi hattı sabah 08.00-10.00 ile akşam 17.00-20.00 arasında kilitleniyor; taşımaya erken başlayıp yüklemeyi öğlene doğru bitirmek en sağlıklısı. Levent ve Zincirlikuyu'daki plazalarda ofis taşımayı genelde mesai bitimine ya da hafta sonuna alıyoruz, çünkü binaların çoğu yük asansörünü ancak o saatlerde veriyor. İlçeye taşınan profil de karışık: çarşı çevresinde öğrenci ve genç çalışan ağırlıklı, hacmi küçük ve hızlı bitmesi gereken işler; Etiler ile Levent tarafında aile taşınmaları, hacim büyük, kurulum uzun. Paketleme, asansörlü taşıma, kısa süreli eşya depolama ve sigortalı nakliye aynı ekipten çıkıyor. Kağıthane'deki merkezimiz Beşiktaş'a çok yakın olduğu için acil işlerde aynı gün ekip çıkarabiliyoruz. Adres ve kat bilgisini iletin, aracı ve ekibi ona göre kuralım.",
    ],
    notes: [
      { title: "Boğaz yokuşları", text: "Bebek, Arnavutköy ve Kuruçeşme'de sokaklar dar ve dik, büyük araç manevra yapamıyor. Bu adreslere kısa şasi araçla yaklaşıp eşyayı mobil asansörle cepheden alıyoruz." },
      { title: "Site yönetimi randevusu", text: "Levent ve Etiler'deki sitelerin çoğu taşınma için önceden bildirim ve belirli bir saat aralığı istiyor. Randevu netleşmeden ekip yola çıkarsa kapıda beklemek gerekiyor, o yüzden yönetimle iletişimi baştan kuruyoruz." },
      { title: "Erken saat avantajı", text: "Barbaros Bulvarı ve Büyükdere Caddesi sabah ve akşam tıkanıyor. Yüklemeyi günün ilk saatinde başlatmak taşımanın toplam süresini gözle görülür şekilde kısaltıyor." },
    ],
    faqs: [
      { question: "Bebek ve Arnavutköy'ün dar sokaklarına kamyon girebiliyor mu?", answer: "Büyük tonajlı kamyon çoğu sokağa giremiyor, girse bile manevra yapamıyor. Bu adreslerde kısa şasi araçla en yakın uygun noktaya yanaşıp taşımayı mobil asansör ve taşıyıcı ekiple yapıyoruz. Sokağın fotoğrafını gönderirseniz hangi araçla geleceğimizi önceden net söyleyebiliriz." },
      { question: "Levent'teki rezidansta yük asansörü için rezervasyon gerekiyor mu?", answer: "Rezidansların büyük kısmı yük asansörü için gün ve saat veriyor, bazıları taşınma öncesi bildirim de istiyor. Yönetimden aldığınız saat aralığını bize iletin, ekip tam o saatte kapıda olsun. İsterseniz yönetimle biz konuşup planı birlikte çıkarırız." },
      { question: "Beşiktaş çarşı çevresindeki asansörsüz binalarda ne yapıyorsunuz?", answer: "Sinanpaşa, Türkali ve çevresindeki eski apartmanların çoğunda asansör yok ya da tek kişilik. Bu binalarda eşyayı balkon veya pencere cephesinden mobil asansörle indiriyoruz. Merdiven zorlanmadığı için hem eşya hem bina güvende kalıyor." },
      { question: "Beşiktaş'ta ofis taşımayı hafta sonu yapabilir misiniz?", answer: "Evet. Levent ve Zincirlikuyu'daki plazalarda taşımaların çoğunu mesai dışında ya da hafta sonu yapıyoruz; bina yönetimleri de genelde bu saatleri veriyor. Ofis eşyasını bölüm bölüm etiketleyip paketliyor, yeni adreste aynı düzende kuruyoruz. 7/24 çalıştığımız için gece taşıma da mümkün, 0533 929 83 24'ten planı konuşalım." },
    ],
    nearby: ["sisli", "sariyer", "kagithane", "beyoglu"],
  },
  {
    slug: "sisli",
    name: "Şişli",
    side: "Avrupa Yakası",
    intro:
      "Şişli; Mecidiyeköy, Nişantaşı ve Bomonti gibi hem iş hem konut yoğun semtleriyle İstanbul'un kalbinde yer alır. Yüksek katlı binalar ve yoğun trafik nedeniyle Şişli'de asansörlü ve planlı taşıma en güvenli yöntemdir.",
    neighborhoods: ["Mecidiyeköy", "Nişantaşı", "Bomonti", "Fulya", "Esentepe"],
    body: [
      "Şişli tek bir yapı stokundan oluşmuyor. Nişantaşı ve Teşvikiye'de yüksek tavanlı, kalın duvarlı eski apartmanlar var; asansörleri dar, merdivenleri dönemeçli. Bomonti ve Fulya tarafında son yılların rezidansları, kapalı otoparkları ve kurallı site yönetimleri hâkim. Kurtuluş, Feriköy ve Gülbağ'a doğru çıktığınızda sokaklar eğimli ve tek yönlü hale geliyor; Kuştepe ve Esentepe'de ise apartman dokusu sıkışıyor, park yeri kalmıyor. Şişli evden eve nakliyat planı yaparken bu bölgelerin her biri için farklı araç, farklı ekipman ve farklı saat düşünmek gerekiyor. Adresi duymadan araç sözü vermek burada işe yaramıyor; sokağa bakmadan verilen her tahmin gün içinde bozuluyor.",
      "Nişantaşı'nda asıl sorun kat değil, araç yanaştırma. Abdi İpekçi çevresindeki sokaklarda park gün boyu dolu, yolların çoğu tek yön ve kaldırıma yaklaşmak bile zaman alıyor. Taşınma sabahı aracın duracağı yeri önden ayırmak, gerekiyorsa komşularla konuşmak işi kurtarıyor. Rezidans tarafında devreye yönetim izni ve yük asansörü saati giriyor. Bomonti'deki bazı binalarda kapalı otopark girişindeki yükseklik bariyeri kamyonu içeri almadığı için yükleme dışarıdan, mobil asansörle yapılıyor. Kurtuluş ve Feriköy'ün eğimli sokaklarında asansör kurulumu düz zemine göre biraz daha uzun sürüyor, bunu gün planına baştan ekliyoruz. Eski apartmanlarda tavan yüksek olduğu için gardırop ve kitaplık gibi parçalar sökülmeden hiçbir yerden geçmiyor; sökme ve yeniden kurma işini ekip kendisi yapıyor.",
      "Mecidiyeköy ve Esentepe hattı ofis taşımanın merkezi. Büyükdere Caddesi boyunca sıralanan plazalarda taşınmalar genelde mesai dışına ya da hafta sonuna kalıyor; bina yönetimleri yük asansörünü o saatlerde açıyor. E-5 ve metrobüs hattı sabah 08.00-10.00 arasında neredeyse duruyor, bu yüzden yüklemeyi erken bitirip yolu daha boş saatte kullanmayı tercih ediyoruz. Nişantaşı ve Teşvikiye'ye taşınanlar genelde daha küçük hacimli ama kırılabilir eşyası çok olan ev sahipleri; buralarda paketleme kalitesi doğrudan sonucu belirliyor. Şişli'nin tamamında paketleme, asansörlü taşıma, ofis nakli, sigortalı taşıma ve eşya depolama veriyoruz. Kağıthane'deki merkezimiz Şişli'ye komşu, sabah aranan bir iş için aynı gün ekip çıkarabiliyoruz. Adres, kat ve eşya listesini iletin, aracı ve ekibi buna göre kuralım.",
    ],
    notes: [
      { title: "Nişantaşı'nda park", text: "Teşvikiye ve Abdi İpekçi çevresinde sokaklar tek yön ve park sürekli dolu. Taşınma sabahı araca yer ayırmak, ekibin kapıda beklemesini önlüyor." },
      { title: "Dar apartman asansörü", text: "Nişantaşı'nın eski apartmanlarında asansörler dar, merdivenler dönemeçli. Gardırop ve büyük koltuk çoğu zaman içeriden çıkmıyor, mobil asansörle cepheden çalışıyoruz." },
      { title: "Plaza mesai saati", text: "Mecidiyeköy ve Esentepe'deki plazaların çoğu yük asansörünü mesai dışında veriyor. Ofis taşımalarını akşam veya hafta sonuna planlayıp ertesi güne çalışır düzen bırakıyoruz." },
    ],
    faqs: [
      { question: "Nişantaşı'nda taşıma günü araç için yer bulunabiliyor mu?", answer: "Yolların çoğu tek yön ve park dolu olduğu için yeri önceden ayırmak gerekiyor. Ekip sabah erken gelip aracın duracağı noktayı tutuyor, gerekirse apartman yönetimi ve komşularla konuşuyoruz. Adresi verirseniz sokağı önden bakıp hangi araçla geleceğimizi söyleyelim." },
      { question: "Bomonti'deki rezidansın kapalı otoparkına kamyon giriyor mu?", answer: "Çoğu rezidansın otopark girişinde yükseklik bariyeri var ve nakliye kamyonu içeri sığmıyor. Bu binalarda yüklemeyi dış cepheden mobil asansörle yapıyoruz, eşya hiç merdiven görmüyor. Yönetimin verdiği taşınma saatini bize iletmeniz yeterli." },
      { question: "Kurtuluş ve Feriköy'ün eğimli sokaklarında mobil asansör kurulabiliyor mu?", answer: "Evet, rampalı sokaklarda da kuruluyor; sadece kurulum düz zemine göre biraz daha uzun sürüyor. Ekip asansörü sabitledikten sonra çalışma hızı aynı oluyor. Bina cephesinde balkon veya geniş pencere varsa iş daha da rahat ilerliyor." },
      { question: "Mecidiyeköy'de ofis taşımayı hafta içi yapabilir miyiz?", answer: "Yapılabiliyor ama E-5 trafiği yüzünden hafta içi gündüz taşıma uzuyor ve bina yönetimleri çoğu zaman gündüz yük asansörü vermiyor. Bu yüzden mesai bitimi veya hafta sonu öneriyoruz. 7/24 çalıştığımız için gece taşıma da mümkün, 0533 929 83 24'ten uygun saati konuşalım." },
    ],
    nearby: ["besiktas", "kagithane", "beyoglu", "sariyer"],
  },
  {
    slug: "beyoglu",
    name: "Beyoğlu",
    side: "Avrupa Yakası",
    intro:
      "Beyoğlu; Cihangir, Galata ve Karaköy'ün tarihi dokusuyla dar ve eğimli sokaklara sahiptir. Bu yapı, Beyoğlu taşımalarında uygun boyutta araç ve çoğu zaman mobil asansör kullanımını gerektirir.",
    neighborhoods: ["Cihangir", "Galata", "Taksim", "Karaköy", "Tarlabaşı"],
    body: [
      "Cihangir'de bir eve taşınacaksanız ilk sorulacak şey kat değil, sokağın aracı alıp almadığı. Sıraselviler'in yan kollarında, Çukurcuma ve Kılıçali Paşa çevresinde bazı yollar merdivenle bitiyor; çoğu tek yön ve kaldırım dar. Binalar da eski: yüksek tavan, dar ve dönemeçli merdiven boşluğu. Üç kişilik koltuk, çift kişilik yatak ve gardırop bu merdivenlerden çıkmıyor. Beyoğlu evden eve nakliyat işlerinin büyük kısmında bu yüzden mobil asansör kullanıyoruz; eşya cepheden alınıyor, ne bina ne eşya zorlanıyor. Aracın duracağı noktayı da taşınmadan bir gün önce bakıp belirliyoruz, çünkü bu sokaklarda boş bir metrekare bile pazarlık konusu. Kaçıncı kat, balkon var mı ve kapı genişliği ne; bu üç detay planı doğrudan değiştiriyor.",
      "İstiklal Caddesi araç trafiğine kapalı olduğu için Galata, Asmalımescit ve Taksim çevresindeki adreslere yan sokaklardan yaklaşıyoruz. Karaköy tarafında gündüz yaya yoğunluğu yüksek; sabahın erken saatlerinde çalışmak hem yükleme süresini kısaltıyor hem de kapıda beklemeyi bitiriyor. Tarihi binalarda cephe, kapı kasası ve merdiven korkuluğu hassas olduğundan eşyaları kapıdan geçirmeden önce paketliyor, temas noktalarını koruyucu malzemeyle kaplıyoruz. Tarlabaşı Bulvarı ve Refik Saydam Caddesi bölgeye ağır araçla giriş çıkışta en pratik hat; taşınma saatini de bu hatların yoğunluğuna göre seçiyoruz. Hafta sonları Taksim ve çevresi yayaya boğulduğu için ilçedeki işleri mümkün olduğunca hafta içine alıyoruz. 7/24 çalıştığımızdan, sokak boşken gece yüklemesi yapmak da bu bölgede sık başvurduğumuz bir yöntem.",
      "Beyoğlu'nun her yeri dar sokak değil. Kasımpaşa, Halıcıoğlu ve Sütlüce tarafında yollar daha geniş, binalar daha yeni; Haliç kıyısından araç yanaştırmak sorun olmuyor, mobil asansöre de her adreste gerek kalmıyor. Piyalepaşa ve Şişhane çevresinde ise yeni yapılarla eski apartmanlar yan yana duruyor, plan adres adres değişiyor. İlçede kiracı hareketi yüksek; taşınmaların çoğu stüdyo ve bir artı bir dairelerden çıkıyor, hacim küçük ama tarih baskılı işler. Bunlar için tek araçlık, hızlı çıkan ekipler kuruyoruz. Eşyanızın bir kısmını yeni eve almayacaksanız depolama tarafımız da var; paketleyip depoya alıyor, istediğiniz zaman teslim ediyoruz. Taşınma tarihini ve adresi paylaşın, sokağı görüp hangi araçla geleceğimizi net söyleyelim.",
    ],
    notes: [
      { title: "Merdivenli sokaklar", text: "Cihangir ve Çukurcuma'da bazı sokaklar araç almıyor, merdivenle bitiyor. Aracı en yakın uygun noktaya bırakıp eşyayı taşıyıcı ekiple çekiyoruz." },
      { title: "Mobil asansör şart", text: "Bölgedeki eski binaların merdiven boşlukları dar ve dönemeçli. Büyük parçalar içeriden geçmediği için taşımanın çoğunu cepheden mobil asansörle yapıyoruz." },
      { title: "Sabah erken çalışma", text: "Karaköy ve Galata çevresinde gündüz yaya ve araç yoğunluğu artıyor. Yüklemeye erken saatte başlamak hem süreyi kısaltıyor hem de sokakta yer bulmayı kolaylaştırıyor." },
    ],
    faqs: [
      { question: "Cihangir'de mobil asansör kurulabiliyor mu?", answer: "Evet, Cihangir'deki işlerin büyük kısmını mobil asansörle yapıyoruz. Sokak dar olsa da asansör aracını uygun bir noktaya konumlandırıp balkon veya pencere cephesinden çalışabiliyoruz. Binanın cephesini ve kaçıncı kat olduğunu söylerseniz kurulumun mümkün olup olmadığını önceden netleştiririz." },
      { question: "İstiklal Caddesi'ne araç giremiyorsa Galata'daki eve nasıl taşıma yapıyorsunuz?", answer: "İstiklal araç trafiğine kapalı, o yüzden adrese yan sokaklardan yaklaşıyoruz. Aracı en yakın uygun noktaya alıp taşımayı taşıyıcı ekiple ve gerekiyorsa mobil asansörle yürütüyoruz. Sabah erken saatte çalışınca yaya yoğunluğu da olmuyor, iş çok daha hızlı bitiyor." },
      { question: "Tarihi binada merdivenden geçmeyen eşya için ne yapıyorsunuz?", answer: "Önce eşyayı sökmeyi deniyoruz; gardırop, karyola ve büyük masaların çoğu sökülüp yeni adreste tekrar kurulabiliyor. Sökülemeyen parçalarda mobil asansör devreye giriyor ve eşya cepheden iniyor. Her iki durumda da eşya ve bina yüzeyleri paketleme malzemesiyle korunuyor." },
      { question: "Beyoğlu'nda bir artı bir küçük daire taşıması için de geliyor musunuz?", answer: "Geliyoruz, ilçede en sık yaptığımız iş zaten bu. Küçük hacimli taşımalar için tek araç ve az kişilik ekiple çıkıyoruz, aynı gün bitiriyoruz. Eşya listesini kısaca anlatın, 0533 929 83 24'ten uygun aracı ve saati birlikte belirleyelim." },
    ],
    nearby: ["sisli", "besiktas", "fatih", "kagithane"],
  },
  {
    slug: "fatih",
    name: "Fatih",
    side: "Avrupa Yakası",
    intro:
      "Tarihi yarımadada yer alan Fatih; Aksaray, Balat ve Fener semtleriyle dar sokaklı, eski ve yoğun bir dokuya sahiptir. Fatih'te taşıma yaparken deneyimli ekip ve uygun araç seçimi büyük fark yaratır.",
    neighborhoods: ["Aksaray", "Balat", "Fener", "Çapa", "Fındıkzade"],
    body: [
      "Fatih'te taşınma, sokağın izin verdiği kadar hızlı ilerliyor. Balat, Fener ve Zeyrek'te yollar taş döşeli, eğimli ve yer yer araç almıyor; bazı kapılara ancak yürüyerek ulaşılıyor. Bu adreslerde aracı en yakın geniş noktaya bırakıp eşyayı taşıyıcı ekiple oraya çekiyor, gerekiyorsa cepheden mobil asansör kuruyoruz. Fatih evden eve nakliyatta hangi eve kaç metreden yükleme yapılacağını önceden bilmek, gün sonunda kaç saat harcanacağını da belirliyor. Bu yüzden adresi alır almaz sokağın durumunu, kapı önünde araç durabilecek bir boşluk olup olmadığını soruyoruz. Ekip sayısını da bu bilgiye göre belirliyoruz; mesafe uzadıkça bir kişi daha ekliyoruz ki iş akşama sarkmasın.",
      "İlçenin ticari yüzü ayrı bir plan istiyor. Eminönü, Mahmutpaşa ve Kapalıçarşı çevresinde gündüz saatlerinde araçla yanaşmak neredeyse imkânsız; dükkân, atölye ve ofis taşımalarını sabahın çok erken saatlerinde ya da esnaf kapandıktan sonra yapıyoruz. Bölgeden çıkışta Vatan ve Millet caddeleri ile sahil yolu en rahat hatlar. Ağır ve kırılabilir ticari yükte paketleme kalitesi doğrudan sonucu belirliyor; kolileri raf ve bölüm bazında etiketleyip yeni adreste aynı sırayla açıyoruz, böylece iş yeri ertesi gün çalışır durumda oluyor. Süleymaniye ve Vefa taraflarında da benzer bir tablo var: dar sokak, yoğun esnaf, sınırlı yükleme penceresi. Bu bölgelerde işi tek seferde bitirmek için ekibi bir kişi fazla götürüyor, aracı da sokağın ağzına konumlandırıyoruz.",
      "Aksaray, Çapa ve Fındıkzade tarafında yapı stoku daha çok apartman: beş yedi katlı, asansörü küçük ya da hiç olmayan binalar. Hastane ve üniversite çevresi olduğu için kiracı hareketi yüksek; taşınmaların çoğu tek daire ve hızlı çıkış istiyor. Samatya ve Kocamustafapaşa'da sokaklar biraz daha geniş, ama park yoğunluğu orada da sorun çıkarıyor. Yedikule tarafında sahil yolu bağlantısı işi kolaylaştırıyor, araç kapıya kadar yanaşabiliyor. Fatih'in tamamında paketleme, asansörlü taşıma, ofis ve iş yeri nakli, sigortalı taşıma ve eşya depolama veriyoruz. Yeni ev hazır değilse eşyayı depoya alıp hazır olduğunda teslim ediyoruz. Adresi ve kat bilgisini iletin; sokağı bilen ekiple, doğru araçla gelelim.",
    ],
    notes: [
      { title: "Taş döşeli dar sokak", text: "Balat, Fener ve Zeyrek'te yollar dar ve eğimli, bazı kapılara araç hiç yanaşamıyor. Bu adreslerde aracı en yakın uygun noktaya alıp eşyayı taşıyıcı ekiple çekiyoruz." },
      { title: "Esnaf ve yükleme saati", text: "Eminönü ve Mahmutpaşa çevresinde gündüz araç trafiği çok yoğun. Dükkân ve iş yeri taşımalarını sabah çok erken ya da esnaf kapandıktan sonra yapıyoruz." },
      { title: "Asansörsüz apartman", text: "Aksaray, Çapa ve Fındıkzade'deki binaların önemli bir kısmında asansör yok. Büyük eşya için mobil asansör kuruyor, taşımayı merdivene yüklenmeden bitiriyoruz." },
    ],
    faqs: [
      { question: "Balat ve Fener'in dar sokaklarına araç giriyor mu?", answer: "Bazı sokaklara kısa şasi araçla giriliyor, bazılarına hiç girilemiyor. Girilemeyen adreslerde aracı en yakın geniş noktaya bırakıp eşyayı taşıyıcı ekiple oraya çekiyoruz. Sokağın bir fotoğrafını gönderirseniz hangi yöntemle çalışacağımızı önceden söyleyebiliriz." },
      { question: "Eminönü'ndeki dükkânımı gündüz taşıyabilir misiniz?", answer: "Gündüz araç yanaştırmak çok zor olduğu için bu bölgede taşımaları sabahın erken saatlerine ya da esnafın kapanmasından sonrasına alıyoruz. Böylece hem yükleme hızlanıyor hem de kapıda beklenmiyor. 7/24 çalıştığımız için gece taşıma da yapabiliyoruz." },
      { question: "Zeyrek'teki eğimli sokakta mobil asansör kurulur mu?", answer: "Rampalı zeminde de asansör kurulabiliyor, sadece sabitleme biraz daha uzun sürüyor. Binanın cephesi ve kaçıncı kat olduğu belliyse kurulumun mümkün olup olmadığını taşımadan önce netleştiriyoruz. Uygun değilse taşıyıcı ekiple merdivenden çalışıyoruz." },
      { question: "Çapa'da asansörsüz beşinci kattan taşınma nasıl yapılıyor?", answer: "Küçük eşya ve koliler merdivenden iniyor, büyük parçalar için cepheye mobil asansör kuruyoruz. Bu yöntem hem çok daha hızlı hem de eşyanın çizilme riskini ortadan kaldırıyor. Kat ve eşya bilgisini iletirseniz 0533 929 83 24'ten net bir plan çıkaralım." },
    ],
    nearby: ["beyoglu", "zeytinburnu", "bayrampasa", "eyupsultan"],
  },
  {
    slug: "bakirkoy",
    name: "Bakırköy",
    side: "Avrupa Yakası",
    intro:
      "Bakırköy; Ataköy, Florya ve Yeşilköy gibi sahil semtleriyle hem siteleri hem apartmanları barındıran yerleşik bir ilçedir. Yüksek katlı sitelerde asansörlü taşıma, Bakırköy nakliyatını hızlandırır.",
    neighborhoods: ["Ataköy", "Florya", "Yeşilköy", "Yeşilyurt", "Zuhuratbaba"],
    body: [
      "Ataköy'de taşınma günü işin yarısı kapıda başlıyor. Kısımların çoğunda site yönetimi önceden bildirim istiyor, güvenlik araç ve ekip kaydı alıyor, taşınma için belirli bir saat aralığı veriyor. Yeni yüksek bloklarda kapalı otopark girişindeki yükseklik bariyeri nakliye kamyonunu içeri almıyor; bu durumda yükleme dış cepheden mobil asansörle yapılıyor. Bakırköy evden eve nakliyat işlerinde yönetimle iletişimi baştan kurmak, ekibin kapıda boşuna beklemesini engelliyor. Randevu netleştiğinde iş çoğu zaman planlanandan erken bitiyor. Site içi yollarda hız ve park kısıtı olduğu için aracın nereye yanaşacağını da güvenlikle önceden konuşuyoruz.",
      "Florya, Yeşilköy ve Yeşilyurt tarafında tablo tamamen değişiyor. Burada müstakil ev ve villa çok; bahçe mobilyası, ızgara, bisiklet, depo ve garaj eşyası derken hacim beklenenin epey üstüne çıkabiliyor. Yükleme kolay, çünkü araç kapıya kadar yanaşıyor; asıl mesele doğru araç boyutunu ve yeterli ekibi seçmek. Bu tip taşımalarda evi önceden görüp hacmi ölçmek, gün içinde ikinci sefer yapmaktan hem hızlı hem ucuz. Bahçe ve depo eşyasını da paketleyip taşıyoruz, kırılabilir parçalar ayrı koliye giriyor. Şenlikköy çevresinde sokaklar dar olabildiği için araç seçimini adrese göre yapıyoruz. Villalarda ayrıca avize, ayna ve büyük cam masa gibi kırılabilir parçalar çok çıkıyor; bunları özel koli ve köpük malzemeyle ayrı paketliyoruz. Bahçe kapısından eve kadar olan mesafe uzunsa ekibe bir kişi daha ekliyoruz.",
      "Bakırköy merkez, İncirli ve Zuhuratbaba tarafı ise klasik apartman dokusu: sokaklar dar, iki taraflı park dolu, binalar kırk yaşın üstünde, asansörler tek kişilik. Çarşı çevresinde gündüz yaya trafiği de yoğun; yükleme saatini buna göre seçmek gerekiyor. E-5'in İncirli ve Bakırköy kavşakları sabah akşam kilitlendiği için yüklemeyi erken saate ya da öğle aralığına alıyoruz; sahil yolu çoğu zaman daha akıcı bir alternatif oluyor. İlçeye taşınanların önemli bir kısmı yerleşik aileler, hacim büyük ve kurulum uzun sürüyor. Paketleme, asansörlü taşıma, ofis nakli, sigortalı taşıma ve eşya depolamayı her mahallede veriyoruz. Yeni ev hazır değilse eşyayı depoya alıp hazır olduğunda getiriyoruz. Taşınma tarihinizi ve adresinizi paylaşın, aracı ve ekibi ona göre planlayalım.",
    ],
    notes: [
      { title: "Site yönetimi randevusu", text: "Ataköy'deki sitelerin çoğu taşınma için önceden bildirim ve saat aralığı istiyor, güvenlik girişte kayıt alıyor. Randevuyu biz de yönetimle teyit ediyoruz ki ekip kapıda beklemesin." },
      { title: "Otopark yükseklik sınırı", text: "Yeni bloklarda kapalı otopark girişindeki bariyer nakliye aracını içeri almıyor. Bu binalarda yüklemeyi dış cepheden mobil asansörle yapıyoruz." },
      { title: "Villa hacmi şaşırtır", text: "Florya ve Yeşilköy'deki müstakil evlerde bahçe, depo ve garaj eşyası hesaba katılmadığında araç yetmiyor. Taşımadan önce evi görüp hacmi çıkarıyoruz." },
    ],
    faqs: [
      { question: "Ataköy'deki siteye taşınmak için yönetimden izin almam gerekiyor mu?", answer: "Sitelerin çoğu taşınma için önceden bildirim ve belirli bir saat aralığı istiyor, güvenlik de araç ve ekip bilgisini kaydediyor. Yönetimden aldığınız saati bize iletmeniz yeterli, ekip o saatte kapıda oluyor. İsterseniz yönetimle iletişimi biz kurup randevuyu birlikte ayarlarız." },
      { question: "Yeşilköy'deki müstakil evden taşınmada kaç kişilik ekip geliyor?", answer: "Ekip sayısı evin hacmine göre değişiyor; bahçe ve depo eşyası çoğu zaman tahmin edilenden fazla yer kaplıyor. Bu yüzden taşımadan önce evi görüp araç ve ekip planını çıkarıyoruz. Böylece gün içinde ikinci sefer yapma ihtiyacı doğmuyor." },
      { question: "Bakırköy merkezdeki eski apartmanlarda eşya asansöre sığmıyorsa ne oluyor?", answer: "İncirli ve Zuhuratbaba çevresindeki binalarda asansörler genelde tek kişilik, büyük eşya içeriden geçmiyor. Bu adreslerde mobil asansör kurup eşyayı balkon veya pencere cephesinden indiriyoruz. Sökülebilir parçaları söküp yeni evde tekrar kuruyoruz." },
      { question: "E-5 trafiği taşınma saatini etkiliyor mu?", answer: "Etkiliyor. İncirli ve Bakırköy kavşakları sabah ve akşam ağır ilerliyor, o saatlerde yola çıkmak taşımayı uzatıyor. Yüklemeyi erken başlatıp çıkışı daha boş bir saate denk getiriyoruz; gerektiğinde sahil yolunu kullanıyoruz." },
    ],
    nearby: ["bahcelievler", "zeytinburnu", "kucukcekmece"],
  },
  {
    slug: "sariyer",
    name: "Sarıyer",
    side: "Avrupa Yakası",
    intro:
      "Sarıyer; Maslak'ın iş kuleleriyle Tarabya, Yeniköy ve Zekeriyaköy'ün villa ve site bölgelerini bir arada barındırır. Geniş yerleşim ve villa taşımaları nedeniyle Sarıyer'de planlı lojistik önemlidir.",
    neighborhoods: ["Maslak", "Tarabya", "Yeniköy", "İstinye", "Zekeriyaköy"],
    body: [
      "Sarıyer, İstanbul'un en geniş ilçelerinden biri; bir ucundan diğerine gitmek başlı başına bir yolculuk. Maslak tarafında iş kuleleri ve rezidanslar var, buradaki taşımaların çoğu ofis nakli ve genelde mesai dışına ya da hafta sonuna kalıyor, çünkü binalar yük asansörünü ancak o saatlerde veriyor. Büyükdere Caddesi hattı gün ortasında bile ağır ilerlediği için ekibi erken çıkarıyoruz. Sarıyer evden eve nakliyat planında ilk soru şu oluyor: adres Maslak mı, Boğaz kıyısı mı, yoksa orman içindeki villa bölgesi mi? Cevaba göre araç da ekip de değişiyor. Ayazağa çevresindeki yeni rezidanslarda ise yük asansörü randevusu ve güvenlik kaydı standart hale gelmiş durumda.",
      "Zekeriyaköy, Demirciköy ve Bahçeköy tarafındaki kapalı sitelerde yollar geniş, araç kapıya kadar giriyor. Buradaki zorluk manevra değil; hacim ve mesafe. Villa taşımalarında bodrum, garaj ve bahçe eşyası hesaba katılmadığında araç ortada kalıyor, o yüzden taşımadan önce evi görüp hacmi çıkarmayı tercih ediyoruz. Site girişlerinde güvenlik kaydı ve taşınma saati kısıtı da olabiliyor; yönetimle randevuyu önceden alıp ekibi ona göre gönderiyoruz. Merkezimizden bu bölgeye ulaşım uzun sürdüğü için ekibi sabah erken yola çıkarıyoruz. Bu taraftaki taşınmalar genelde aile taşınması, kurulum işi de yüklemeden az sürmüyor. Bahçe mobilyası, spor aleti ve bisiklet gibi parçalar da hesaba katılmazsa araç yolun yarısında dolup taşıyor.",
      "Boğaz kıyısı ilçenin en zorlu kısmı. Tarabya, Yeniköy, İstinye ve Emirgan'da sahil şeridi dar, çoğu yerde tek şerit; araç uzun süre beklerse arkada trafik birikiyor. Bu adreslerde kısa şasi araçla gelip yüklemeyi hızlı bitirmek, gerekirse mobil asansörle cepheden çalışmak en pratik yol. Sırtlardaki eski köşk ve konak tipi yapılarda merdivenler dar, tavanlar yüksek; büyük parçaların çoğu ancak cepheden iniyor. Baltalimanı ve Rumelihisarı çevresinde de sokaklar dik, park alanı kısıtlı; buralarda yükleme saatini sabahın erken saatine almak trafiği de park sorununu da çözüyor. Sarıyer'in tamamında paketleme, asansörlü taşıma, ofis taşıma, sigortalı nakliye ve eşya depolama veriyoruz. Adres ve tarihi iletin, ekibi buna göre kuralım.",
    ],
    notes: [
      { title: "Uzun mesafe planı", text: "Maslak ile Zekeriyaköy veya Kilyos arası ciddi bir yol. İlçe içi taşımalarda bile mesafeyi ve trafiği baştan hesaplayıp gün planını ona göre kuruyoruz." },
      { title: "Boğaz sahil şeridi", text: "Tarabya, Yeniköy ve İstinye'de sahil yolu dar ve araç bekletmeye elverişli değil. Kısa şasi araçla gelip yüklemeyi hızlı bitiriyor, gerekirse mobil asansör kuruyoruz." },
      { title: "Villa hacim tespiti", text: "Zekeriyaköy ve Demirciköy'deki villalarda garaj, bodrum ve bahçe eşyası hacmi büyütüyor. Taşımadan önce evi görüp doğru araç ve ekip sayısını belirliyoruz." },
    ],
    faqs: [
      { question: "Zekeriyaköy'deki siteye nakliye aracı girebiliyor mu?", answer: "Sitelerin iç yolları genelde geniş, araç kapıya kadar yanaşabiliyor. Sorun çıkaran nokta güvenlik kaydı ve yönetimin verdiği taşınma saati oluyor; bazı sitelerde ağır araç için saat kısıtı var. Yönetimden aldığınız bilgiyi iletirseniz ekip tam o saatte gelir." },
      { question: "Maslak'taki ofisimi hafta sonu taşıyabilir misiniz?", answer: "Evet, Maslak'taki plazalarda taşımaların büyük kısmını hafta sonu veya mesai bitiminde yapıyoruz. Bina yönetimleri de yük asansörünü genelde o saatlerde veriyor. Masaları, dolapları ve ekipmanı bölüm bazında etiketleyip yeni adreste aynı düzende kuruyoruz." },
      { question: "Yeniköy ve Tarabya'daki eski binalarda mobil asansörle çalışıyor musunuz?", answer: "Çalışıyoruz. Sırtlardaki eski yapılarda merdiven boşlukları dar, büyük eşya içeriden geçmiyor. Sahil şeridinde araç bekletmek de zor olduğu için mobil asansörle hızlı çalışıp yolu kapatmadan işi bitiriyoruz." },
      { question: "Kilyos, Bahçeköy gibi uzak mahallelere de geliyor musunuz?", answer: "Sarıyer'in tamamına hizmet veriyoruz, ilçenin kuzey mahalleleri dâhil. Tek fark, mesafeyi gün planına eklememiz ve ekibi daha erken çıkarmamız. Adresi ve taşınma tarihini 0533 929 83 24'ten iletin, planı birlikte netleştirelim." },
    ],
    nearby: ["besiktas", "sisli", "kagithane", "eyupsultan"],
  },
  {
    slug: "kagithane",
    name: "Kağıthane",
    side: "Avrupa Yakası",
    intro:
      "Merkez ofisimizin bulunduğu Kağıthane; Çağlayan, Gültepe ve Seyrantepe semtleriyle hızla gelişen bir konut ve iş bölgesidir. Kağıthane'de bulunduğumuz için en hızlı ve ekonomik hizmeti bu ilçede sunuyoruz.",
    neighborhoods: ["Çağlayan", "Gültepe", "Seyrantepe", "Nurtepe", "Hamidiye"],
    body: [
      "Merkezimiz Kağıthane'de, bu yüzden ilçeyi harita üzerinden değil, her gün girip çıktığımız sokaklardan biliyoruz. Kağıthane son yıllarda hızla değişti: eski üç dört katlı binaların yerini asansörlü yeni bloklar ve rezidanslar aldı, ama dönüşüm henüz her mahalleye uğramadı. Merkez, Hamidiye ve Talatpaşa çevresinde yeni yapılar hâkim; birkaç sokak yukarısında hâlâ asansörsüz eski apartmanlar duruyor. Emniyetevleri ve Hürriyet tarafında ise ikisi yan yana. Kağıthane evden eve nakliyat işini alırken bu ikiliyi hesaba katıp aracı ve ekipmanı sokağa göre seçiyoruz. Yeni bloklarda yük asansörü randevusu, eski apartmanlarda mobil asansör gündeme geliyor.",
      "İlçenin yamaç mahalleleri işin zor kısmı. Nurtepe, Gültepe, Ortabayır ve Çeliktepe'de sokaklar dik ve dar, iki tarafı da park dolu. Büyük kamyon çoğu yere ne giriyor ne de manevra yapabiliyor. Bu adreslerde kısa şasi araç kullanıyor, eşyayı balkon veya pencere cephesinden mobil asansörle indiriyoruz. Rampalı sokaklarda asansör kurulumu düz zemine göre biraz daha uzun sürüyor; bunu gün planına baştan ekliyoruz ki taşınma akşama sarkmasın. Ekip sokağı önceden görüp aracın duracağı noktayı sabah erkenden tutuyor. Yokuş aşağı ve yokuş yukarı taşıma farkı da ekip sayısını değiştiriyor, planı buna göre kuruyoruz. Kış aylarında zemin kaygan olduğunda asansör ayaklarını sabitlemek için ek önlem alıyoruz; bu birkaç dakika uzatıyor ama riski sıfırlıyor.",
      "Cendere Vadisi hattı ofis ve iş yeri taşımalarının yoğunlaştığı yer. Buradaki plazalarda taşınmalar genelde mesai bitiminde veya hafta sonu yapılıyor, bina yönetimleri yük asansörünü o saatlerde veriyor. Seyrantepe ve Sanayi Mahallesi tarafından TEM ile çevre yollarına çıkmak kolay olduğu için şehir dışı yüklerde de bu bölgeyi kullanıyoruz. Merkezimiz burada olduğu için Kağıthane'de aynı gün ekip çıkarabiliyor, acil işlerde hızlı hareket edebiliyoruz. Paketleme, asansörlü taşıma, ofis nakli, şehirler arası yük taşımacılığı, sigortalı taşıma ve eşya depolama; hepsi buradan çıkıyor. Yeni ev veya ofis hazır değilse eşyayı depoya alıp hazır olduğunda teslim ediyoruz. Mobilyanın sökümü ve yeni adreste kurulumu da ekibimize ait, ayrı usta aramanıza gerek kalmıyor. Arayın, adresinizi görmeye gelelim.",
    ],
    notes: [
      { title: "Merkezimiz burada", text: "Ofisimiz Kağıthane'de olduğu için ilçedeki işlere en kısa sürede ulaşıyoruz. Acil taşımalarda aynı gün araç çıkarabiliyoruz." },
      { title: "Yamaç sokaklar", text: "Nurtepe, Gültepe ve Ortabayır'da sokaklar dik ve dar, büyük araç manevra yapamıyor. Kısa şasi araç ve mobil asansörle çalışıyoruz." },
      { title: "Yeni blok, eski apartman", text: "Kentsel dönüşüm ilçenin yarısını değiştirdi, yarısı hâlâ eski yapı. Adrese göre bazen yük asansörü randevusu, bazen mobil asansör gerekiyor." },
    ],
    faqs: [
      { question: "Kağıthane'de aynı gün taşıma yapabiliyor musunuz?", answer: "Merkezimiz Kağıthane'de olduğu için ilçe içinde aynı gün ekip çıkarabiliyoruz. Yoğun günlerde bile araç ve ekip planını hızlı kuruyoruz. Sabah arayın, uygun bir saat kalmışsa aynı gün adresinize geliriz." },
      { question: "Nurtepe ve Gültepe'nin dik sokaklarında mobil asansör çalışıyor mu?", answer: "Çalışıyor. Rampalı zeminde asansörün sabitlenmesi biraz daha uzun sürüyor ama kurulduktan sonra hız aynı oluyor. Bu mahallelerde büyük eşyayı merdivenden indirmeye çalışmak hem yavaş hem riskli, o yüzden cepheden çalışmayı tercih ediyoruz." },
      { question: "Cendere'deki ofisimi mesai dışında taşıyabilir misiniz?", answer: "Evet. Bölgedeki plazaların çoğu yük asansörünü mesai bitiminden sonra veya hafta sonu veriyor, biz de planı buna göre kuruyoruz. Ofis eşyasını bölüm bölüm etiketleyip yeni adreste aynı düzende kuruyoruz ki ertesi gün çalışmaya başlayabilin." },
      { question: "Kağıthane'de eşyamı kısa süre depoda tutabilir misiniz?", answer: "Evet, eşya depolama hizmetimiz var. Yeni ev veya ofis hazır değilse eşyayı paketleyip depoya alıyor, hazır olduğunda adresinize teslim ediyoruz. Depolama süresi ve hacmi için 0533 929 83 24'ten bilgi alabilirsiniz." },
    ],
    nearby: ["sisli", "sariyer", "eyupsultan", "beyoglu"],
  },
  {
    slug: "eyupsultan",
    name: "Eyüpsultan",
    side: "Avrupa Yakası",
    intro:
      "Eyüpsultan; tarihi merkeziyle Göktürk ve Alibeyköy gibi yeni site bölgelerini birleştirir. Hem eski mahalleler hem modern siteler için Eyüpsultan'da sigortalı ve asansörlü taşıma yapıyoruz.",
    neighborhoods: ["Göktürk", "Alibeyköy", "Akşemsettin", "Topçular", "Rami"],
    body: [
      "Eyüpsultan'ı tek parça bir ilçe gibi düşünmek yanıltıyor. Haliç kıyısındaki Eyüp merkez ile Göktürk arasında hem uzun bir yol hem de tamamen farklı bir yapı stoku var. Merkez tarafında tarihi doku, dar ve eğimli sokaklar; Göktürk ve Kemerburgaz'da kapalı siteler, villalar ve geniş iç yollar. Eyüpsultan evden eve nakliyat planında ilk iş, adresin hangi bölgede olduğunu netleştirmek. Aynı araç ve aynı ekipman ilçenin iki ucunda birden işe yaramıyor. Silahtarağa ve Güzeltepe gibi ara mahallelerde ise apartman dokusu hâkim, sokaklar dar ve park sıkışık; bu adreslerde plan yine değişiyor.",
      "Eyüp merkez, Nişanca ve Düğmeciler çevresinde sokaklar yokuşlu ve dar; bazı kapılara ancak kısa şasi araçla yaklaşılıyor. Piyer Loti sırtlarına doğru çıktıkça eğim artıyor, park edilecek yer daralıyor. Buradaki binaların çoğu asansörsüz ve büyük parçalar merdivenden dönmüyor, dolayısıyla mobil asansör devreye giriyor. Alibeyköy tarafında yollar daha geniş ama tramvay hattı ve TEM bağlantısı yüzünden gün ortasında trafik ağırlaşıyor; yüklemeyi sabah erken bitirmek işi belirgin şekilde rahatlatıyor. Alibeyköy'de eski apartmanlarla yeni siteler yan yana durduğu için taşınma planını bina bina yapıyoruz. Aynı sokakta bir binada yük asansörü randevusu alırken, karşısındaki apartmanda mobil asansör kurmamız gerekebiliyor.",
      "Göktürk ve Kemerburgaz'daki siteler kendi kurallarıyla çalışıyor. Güvenlik girişte araç ve ekip kaydı alıyor, taşınma için saat aralığı veriyor, bazı sitelerde iç yollarda ağır araç kısıtı oluyor. Bu adreslerde yönetimle randevuyu önceden alıp ekibi tam o saatte gönderiyoruz. Villa taşımalarında garaj ve bahçe eşyası hacmi büyüttüğü için araç sayısını keşiften sonra netleştiriyoruz. Rami ve Topçular tarafı depo ve iş yeri ağırlıklı; buradan çıkan ticari taşımalarda paketleme ve etiketleme işin en kritik kısmı oluyor. İlçenin tamamında sigortalı taşıma, asansörlü taşıma, ofis nakli, şehirler arası yük taşımacılığı ve eşya depolama veriyoruz. Yeni ev veya iş yeri hazır değilse eşyayı depoya alıp hazır olduğunda teslim ediyoruz. Mobilyaların sökümü, paketlenmesi ve yeni adreste kurulumu da işin içinde. Adresi paylaşın, hangi araçla geleceğimizi baştan söyleyelim.",
    ],
    notes: [
      { title: "İki ayrı Eyüpsultan", text: "Eyüp merkez ile Göktürk arasında yapı da mesafe de çok farklı. Aracı, ekibi ve saati adresin hangi bölgede olduğuna göre planlıyoruz." },
      { title: "Site giriş izni", text: "Göktürk ve Kemerburgaz'daki kapalı sitelerde güvenlik kaydı ve taşınma saati kuralı var. Randevuyu yönetimle önceden alıp ekibi o saate göre gönderiyoruz." },
      { title: "Yokuşlu eski sokaklar", text: "Eyüp merkez, Nişanca ve Düğmeciler'de sokaklar dik ve dar. Kısa şasi araçla yaklaşıp büyük eşyayı mobil asansörle cepheden indiriyoruz." },
    ],
    faqs: [
      { question: "Göktürk'teki siteye taşınmada yönetim izni gerekiyor mu?", answer: "Sitelerin çoğunda gerekiyor; güvenlik girişte araç plakası ve ekip bilgisini kaydediyor, taşınma için saat aralığı veriliyor. Bazı sitelerde iç yollara ağır araç girişi de kısıtlı. Yönetimden aldığınız saati bize iletin, ekip tam o saatte kapıda olsun." },
      { question: "Eyüp merkezdeki dar sokaklara aracınız girer mi?", answer: "Büyük kamyonlar çoğu sokağa girmiyor, o yüzden bu bölgede kısa şasi araç kullanıyoruz. Aracın yanaşamadığı adreslerde eşyayı taşıyıcı ekiple en yakın uygun noktaya çekiyor, büyük parçalar için mobil asansör kuruyoruz. Sokağın fotoğrafı işimizi çok kolaylaştırıyor." },
      { question: "Alibeyköy'den başka bir şehre yük taşıyor musunuz?", answer: "Evet, şehirler arası yük taşımacılığı yapıyoruz. Alibeyköy'ün TEM bağlantısı sayesinde şehir dışı çıkışlar rahat oluyor; yükleme saatini trafiğe göre planlıyoruz. Taşıma sigortalı yapılıyor, varış adresine kadar aynı ekip takip ediyor." },
      { question: "Kemerburgaz'daki villadan taşınmada kaç araç gerekir?", answer: "Villa taşımalarında bodrum, garaj ve bahçe eşyası hacmi ciddi şekilde büyütüyor, tek araç çoğu zaman yetmiyor. Bu yüzden taşımadan önce evi görüp araç ve ekip sayısını netleştiriyoruz. 0533 929 83 24'ten randevu alın, keşfe gelelim." },
    ],
    nearby: ["kagithane", "gaziosmanpasa", "sariyer", "bayrampasa"],
  },
  {
    slug: "gaziosmanpasa",
    name: "Gaziosmanpaşa",
    side: "Avrupa Yakası",
    intro:
      "Gaziosmanpaşa, yoğun konut dokusuyla İstanbul'un kalabalık ilçelerindendir. Apartman ağırlıklı yapısı nedeniyle Gaziosmanpaşa taşımalarında asansörlü hizmet sık tercih edilir.",
    neighborhoods: ["Karayolları", "Sarıgöl", "Yenidoğan", "Küçükköy", "Karadeniz"],
    body: [
      "Gaziosmanpaşa'da sokaklar dar, binalar birbirine yakın ve neredeyse her yol iki taraflı park dolu. Merkez, Sarıgöl, Yenidoğan ve Küçükköy çevresinde beş sekiz katlı apartmanlar hâkim; bunların önemli bir kısmında asansör ya yok ya da tek kişilik. Kentsel dönüşümle yükselen yeni bloklar da var, ama onlarda bile iç asansör gardırobu ve büyük buzdolabını almıyor. Gaziosmanpaşa evden eve nakliyatta mobil asansör istisna değil, standart çözüm. Kat yükseldikçe merdiven seçeneği tamamen devre dışı kalıyor. Yıldıztabya ve Karadeniz mahalleleri tarafında da tablo aynı: dar sokak, yüksek kat, sıkışık park. Binaya gelmeden önce kaçıncı katta olduğunuzu ve balkon durumunu sormamızın sebebi bu; asansörün kurulup kurulamayacağı doğrudan buna bağlı, boşuna sefer yapılmıyor.",
      "Araç yanaştırmak burada tek başına bir iş. Sokakların çoğunda kamyonun durabileceği tek bir boşluk oluyor; taşınma sabahı komşularla konuşup o boşluğu önden açmak ciddi zaman kazandırıyor. Semt pazarı kurulan günlerde bazı sokaklar araç trafiğine tamamen kapanıyor, o adreslerde taşınma gününü kaydırmak gerekiyor. TEM'in Gaziosmanpaşa çıkışı ve Karayolları çevresi sabah ve akşam yoğun; şehir içi taşımalarda yüklemeye 09.00'dan önce başlamak, akşam trafiğine yakalanmamanın en sağlam yolu. Ekip sokağa girmeden önce aracın nereye yanaşacağını görüyor, gerekirse taşıyıcı sayısını artırıyoruz. Kısa mesafeyi elde taşımak zorunda kaldığımız adreslerde bir kişi daha götürmek, taşımayı bir buçuk saat birden kısaltabiliyor.",
      "İlçede taşınmaların çoğu aile taşınması: koltuk takımı, yemek odası, beyaz eşya, çocuk odası. Hacim büyük, parçalar iri, kat yüksek. Bu tip işlerde yeterli ekip ve doğru asansör kurulumu, eşyanın çizilmeden yerine ulaşmasını sağlıyor. Eşyayı biz paketliyor, sökülmesi gerekenleri söküp yeni evde tekrar kuruyoruz; taşıma sigortalı yapılıyor. Yeni ev henüz hazır değilse eşyanızı depoya alıp hazır olduğunda teslim ediyoruz. İlçe içi kısa mesafe taşımalarda bile yükleme ve kurulum aynı özenle yürüyor, çünkü asıl zaman kaybı yolda değil binada yaşanıyor. Beyaz eşyanın bağlantılarını söküp yeni evde tekrar bağlıyor, mobilyaları kurup yerine yerleştiriyoruz. Adres, kat ve eşya bilgisini iletin; araç ve ekip planını buna göre çıkaralım.",
    ],
    notes: [
      { title: "Dar sokak, dolu park", text: "Sokakların çoğunda aracın durabileceği tek bir boşluk var. Taşınma sabahı o yeri önden tutmak, ekibin beklemesini önlüyor." },
      { title: "Asansörsüz kat", text: "Bölgedeki eski apartmanların büyük kısmında asansör yok ya da tek kişilik. Büyük eşyayı mobil asansörle cepheden indiriyoruz, merdiven zorlanmıyor." },
      { title: "Semt pazarı günü", text: "Pazar kurulan günlerde bazı sokaklar araç trafiğine kapanıyor. Taşınma tarihini seçerken bunu soruyor, gerekirse günü kaydırıyoruz." },
    ],
    faqs: [
      { question: "Gaziosmanpaşa'da sokağa kamyon sığmıyorsa ne oluyor?", answer: "Bu adreslerde kısa şasi araç kullanıyoruz, gerekirse eşyayı taşıyıcı ekiple sokağın girişindeki araca çekiyoruz. Aracın duracağı boşluğu sabah erkenden tutmak da işi hızlandırıyor. Sokağı tarif ederseniz hangi araçla geleceğimizi önceden söyleriz." },
      { question: "Asansörsüz altıncı kattan eşya nasıl indiriliyor?", answer: "Koliler ve küçük eşya merdivenden iniyor; koltuk, gardırop, buzdolabı gibi büyük parçalar için cepheye mobil asansör kuruyoruz. Böylece taşıma hem hızlanıyor hem eşya çizilmiyor. Kaçıncı kat olduğunu söylemeniz yeterli, uygun asansörle geliriz." },
      { question: "Taşınma günü sokakta araç için yer ayırmam gerekir mi?", answer: "Ayırabilirseniz iş çok rahatlıyor. Sokakların çoğu iki taraflı park dolu, aracın yanaşacak yeri olmadığında ekip beklemek zorunda kalıyor. Komşularla önceden konuşup bir boşluk açmanız taşımanın süresini kısaltır." },
      { question: "Yeni evim hazır değil, eşyalarımı bir süre saklayabilir misiniz?", answer: "Evet, eşya depolama hizmetimiz var. Eşyayı paketleyip depoya alıyoruz, ev hazır olduğunda aynı ekiple adresinize getiriyoruz. Süre ve hacme göre planı 0533 929 83 24'ten konuşabiliriz." },
    ],
    nearby: ["eyupsultan", "sultangazi", "bayrampasa", "esenler"],
  },
  {
    slug: "bagcilar",
    name: "Bağcılar",
    side: "Avrupa Yakası",
    intro:
      "Bağcılar, yoğun nüfusu ve apartman ağırlıklı yapısıyla bilinir. Bağcılar'da dar sokaklara uygun araçlar ve asansörlü taşıma ile hızlı çözümler sunuyoruz.",
    neighborhoods: ["Kirazlı", "Güneşli", "Mahmutbey", "Yıldıztepe", "Demirkapı"],
    body: [
      "Bağcılar İstanbul'un en kalabalık ilçelerinden biri ve bu kalabalık en çok taşınma günü hissediliyor. Kirazlı, Yıldıztepe, Demirkapı ve Bağlar çevresinde binalar sık, sokaklar dar, park yerleri gün boyu dolu. Aracı kapıya yanaştırmak çoğu adreste ilk mesele oluyor. Bağcılar evden eve nakliyat işlerinde bu yüzden büyük kamyon yerine kısa şasi araç tercih ediyor, gerekirse eşyayı taşıyıcı ekiple en yakın noktaya çekiyoruz. Sokağı önceden görmek, gün planını doğru kurmanın en kestirme yolu. Adresi alırken kaçıncı kat, asansör var mı, sokakta araç durabiliyor mu diye soruyoruz; bu üç bilgi olmadan sağlıklı bir plan çıkmıyor.",
      "Güneşli ve Mahmutbey tarafı ilçenin iş yüzü. Basın Ekspres hattı boyunca iş merkezleri, atölyeler ve depolar sıralanıyor; buradaki taşımaların büyük kısmı ofis ve iş yeri nakli. TEM'in Mahmutbey gişeleri sabah ve akşam kilitlendiği için ağır yüklü çıkışları gün ortasına ya da akşam geç saate alıyoruz. İş yeri taşımalarında eşyanın bölüm bölüm etiketlenmesi, yeni adreste kurulumu hızlandırıyor; ofisin ertesi gün çalışır durumda olması genelde en kritik beklenti oluyor ve planı buna göre kuruyoruz. Atölye taşımalarında ağır makine ve raf sistemleri için ayrı ekip ve ayrı araç ayarlıyoruz. Depo taşımalarında ise yükleme sırasını rafa göre kuruyoruz, böylece yeni adreste boşaltma ters yönde ilerlemiyor. Hangi bölümün önce kurulacağını sizinle birlikte belirliyoruz.",
      "Konut tarafında yeni bloklar hızla çoğaldı, ama içerideki asansörler hâlâ dar. Üç kişilik koltuk, gardırop ve büyük buzdolabı çoğu binada asansöre girmiyor; kat yükseldikçe merdiven de gerçekçi olmaktan çıkıyor. Bu yüzden Bağcılar'daki işlerin büyük kısmını mobil asansörle yapıyoruz. Eşyaları paketliyor, sökülmesi gerekenleri söküp yeni evde tekrar kuruyoruz; taşıma sigortalı yapılıyor. İlçeye taşınanların çoğu kalabalık aileler, dolayısıyla hacim büyük ve kurulum uzun sürüyor; ekip sayısını buna göre belirliyoruz. Kağıthane'deki merkezimizden TEM üzerinden ilçeye hızlı ulaşıyor, acil işlerde aynı gün ekip çıkarabiliyoruz. Yeni ev hazır değilse eşyayı paketleyip depoya alıyor, hazır olduğunda aynı ekiple teslim ediyoruz. Adres ve kat bilgisini iletin, gerisini biz planlayalım.",
    ],
    notes: [
      { title: "Kısa şasi araç", text: "Kirazlı, Bağlar ve Demirkapı çevresinde sokaklar dar, büyük kamyon manevra yapamıyor. Bu adreslere kısa şasi araçla geliyoruz." },
      { title: "Basın Ekspres ofisleri", text: "Güneşli ve Mahmutbey'deki iş merkezlerinde ofis ve depo taşıması yoğun. Eşyayı bölüm bazında etiketleyip yeni adreste aynı düzende kuruyoruz." },
      { title: "TEM gişe saatleri", text: "Mahmutbey gişeleri sabah ve akşam kilitleniyor. Ağır yüklü çıkışları bu saatlerin dışına alıp taşımanın uzamasını engelliyoruz." },
    ],
    faqs: [
      { question: "Bağcılar'da sokağımıza kamyon giremiyor, ne yapıyorsunuz?", answer: "Dar sokaklarda kısa şasi araç kullanıyoruz; oraya da giremiyorsa aracı sokağın girişine alıp eşyayı taşıyıcı ekiple çekiyoruz. Bu yöntemde asıl fark ekip sayısında oluyor, o yüzden planı baştan buna göre yapıyoruz. Adresi verirseniz sokağı önden değerlendiririz." },
      { question: "Mahmutbey'deki iş yerimi hafta sonu taşıyabilir misiniz?", answer: "Evet, iş yeri taşımalarını çoğunlukla hafta sonu ya da mesai dışında yapıyoruz; hem bina yönetimleri o saatleri veriyor hem de TEM gişelerinde trafik düşüyor. Eşyayı bölüm bölüm etiketleyip yeni adreste aynı düzende kuruyoruz, ertesi gün çalışmaya başlıyorsunuz." },
      { question: "Binamızda asansör var ama eşya sığmıyor, mobil asansör gerekir mi?", answer: "Yeni bloklarda bile iç asansörler genelde gardırop, üç kişilik koltuk ve büyük buzdolabını almıyor. Böyle durumlarda mobil asansör kuruyoruz, eşya balkon veya pencere cephesinden iniyor. Kat ve balkon bilgisini iletirseniz uygun asansörle geliriz." },
      { question: "Bağcılar'dan başka bir şehre eşya taşıyor musunuz?", answer: "Evet, şehirler arası yük ve ev taşımacılığı yapıyoruz. Eşyanız paketlenip sigortalı olarak yükleniyor, varış adresinde tekrar kuruluyor. Tarih ve varış şehrini 0533 929 83 24'ten iletin, planı çıkaralım." },
    ],
    nearby: ["bahcelievler", "gungoren", "esenler", "kucukcekmece"],
  },
  {
    slug: "bahcelievler",
    name: "Bahçelievler",
    side: "Avrupa Yakası",
    intro:
      "Bahçelievler; Şirinevler ve Kocasinan gibi yoğun konut semtleriyle merkezi bir ilçedir. Yüksek katlı binalarda asansörlü taşıma Bahçelievler'de zaman ve güvenlik kazandırır.",
    neighborhoods: ["Şirinevler", "Kocasinan", "Soğanlı", "Zafer", "Çobançeşme"],
    body: [
      "Bahçelievler'i ikiye bölen E-5, taşınma planının tam ortasında duruyor. Şirinevler ve Çobançeşme tarafındaki adreslere ulaşmak kolay, ama sabah ve akşam saatlerinde bu kolaylık kayboluyor; metrobüs hattı boyunca yol tıkanıyor, araç sokağa girene kadar saat ilerliyor. Bahçelievler evden eve nakliyatta gün planını buna göre kuruyoruz: yükleme erken başlıyor, uzun mesafeli çıkışlar trafiğin gevşediği saate bırakılıyor. Adresin E-5'in hangi tarafında kaldığı bile güzergâhı değiştirebiliyor. Ana caddeye yakın binalarda araç yanaştırmak rahat, ama bir sokak içeri girildiğinde park sıkışıklığı başlıyor. Bahçelievler merkez ve Hürriyet çevresinde de sokaklar dar; aracın duracağı boşluğu bulmak bazen yüklemenin kendisinden uzun sürüyor.",
      "Yenibosna ve Çobançeşme ilçenin ofis tarafı. İş merkezleri, oteller ve plazalar burada yoğunlaşıyor; taşımaların çoğu mesai dışına ya da hafta sonuna alınıyor, çünkü bina yönetimleri yük asansörünü ancak o saatlerde açıyor. Ofis taşımada masa, dolap ve teknik ekipmanın doğru paketlenmesi kadar, yeni adreste hangi eşyanın hangi odaya gideceğinin önceden belirlenmesi de önemli. Bu listeyi taşımadan önce sizinle birlikte çıkarıyoruz, böylece kurulum aynı gün bitiyor ve ertesi sabah çalışır bir ofise geliyorsunuz. Bazı plazalarda yükleme rampası kullanımı için de yönetimden saat almak gerekiyor. Otel ve iş merkezi taşımalarında ekip kimlik kaydı da isteniyor, bunu önceden hallediyoruz ki kapıda vakit kaybı olmasın. Ağır kasa ve arşiv dolabı gibi parçalar için ayrı ekipman getiriyoruz.",
      "Konut tarafında Kocasinan, Siyavuşpaşa, Soğanlı ve Zafer mahallelerinde apartmanlar sık ve çoğu otuz kırk yıllık. Asansörler dar, merdiven boşlukları dönemeçli; büyük eşyanın merdivenden çıkması çoğu zaman mümkün değil. Bu binalarda mobil asansör hem hızlı hem güvenli çözüm oluyor. Sokaklar iki taraflı park dolu olduğu için aracın yanaşacağı boşluğu taşınma sabahı önden ayarlamak zaman kazandırıyor. İlçeye taşınan profil ağırlıkla aile; koltuk takımı, yatak odası ve beyaz eşya standart olarak taşınıyor, kurulum işi yüklemeden az sürmüyor. Paketleme, asansörlü taşıma, ofis nakli, sigortalı taşıma ve eşya depolamayı ilçenin tamamında veriyoruz. Yeni ev hazır olmadığında eşyayı depoya alıp uygun tarihte teslim ediyoruz. Arayın, adresinizi görüp net bir plan çıkaralım.",
    ],
    notes: [
      { title: "E-5 ve metrobüs", text: "Şirinevler ve çevresinde sabah akşam trafik ağır ilerliyor. Yüklemeyi erken başlatıp uzun mesafeli çıkışları daha boş saatlere alıyoruz." },
      { title: "Yenibosna plazaları", text: "İş merkezlerinde yük asansörü genelde mesai dışında veriliyor. Ofis taşımalarını hafta sonu veya akşam planlayıp ertesi güne çalışır düzen bırakıyoruz." },
      { title: "Dar apartman asansörü", text: "Kocasinan ve Siyavuşpaşa'daki eski binalarda asansör küçük, merdiven dönemeçli. Büyük eşyayı mobil asansörle cepheden indiriyoruz." },
    ],
    faqs: [
      { question: "Şirinevler'de taşıma günü araç park edecek yer bulunuyor mu?", answer: "Sokaklar iki taraflı park dolu olduğu için yeri önden ayırmak gerekiyor. Ekip sabah erken gelip aracın duracağı noktayı tutuyor; komşularla konuşmanız da işi çok hızlandırır. Adresi verirseniz sokağı önceden değerlendiririz." },
      { question: "Yenibosna'daki ofisimi hafta sonu taşıyabilir misiniz?", answer: "Evet, bölgedeki plazaların çoğu yük asansörünü hafta sonu ve mesai dışında veriyor. Taşımayı o saatlere planlayıp masa, dolap ve ekipmanı bölüm bazında etiketliyoruz. Yeni adreste aynı düzende kuruyoruz, pazartesi çalışmaya hazır oluyorsunuz." },
      { question: "Kocasinan'daki eski apartmanda mobil asansör kurulur mu?", answer: "Kurulur; bu binalarda zaten en pratik yöntem o. Asansörler dar ve merdiven boşlukları dönemeçli olduğu için büyük eşya içeriden geçmiyor. Balkon veya geniş pencere varsa kurulum sorunsuz oluyor, kat bilgisini iletmeniz yeterli." },
      { question: "Bahçelievler içinde kısa mesafe taşıma için de geliyor musunuz?", answer: "Geliyoruz, ilçe içi taşımalar en sık yaptığımız işlerden. Mesafe kısa olsa da yükleme ve kurulum aynı özenle yapılıyor, eşya sigortalı taşınıyor. 0533 929 83 24'ten arayın, aynı gün ekip çıkarabiliriz." },
    ],
    nearby: ["bagcilar", "gungoren", "bakirkoy", "kucukcekmece"],
  },
  {
    slug: "kucukcekmece",
    name: "Küçükçekmece",
    side: "Avrupa Yakası",
    intro:
      "Küçükçekmece; Halkalı, Sefaköy ve Atakent gibi geniş yerleşimleriyle İstanbul'un en kalabalık ilçelerindendir. Çok sayıda mahallesi nedeniyle Küçükçekmece'de bölgeyi iyi bilen ekip avantaj sağlar.",
    neighborhoods: ["Halkalı", "Sefaköy", "Atakent", "Cennet", "Kanarya"],
    body: [
      "Küçükçekmece'de adres iki dünyadan birine düşüyor. Halkalı ve Atakent tarafında yüksek bloklar, kapalı siteler ve toplu konut alanları var; girişte güvenlik kaydı, taşınma için verilmiş saat aralığı ve çoğu zaman yönetimden alınmış izin gerekiyor. Kapalı otopark girişindeki yükseklik bariyeri nakliye aracını içeri almadığı için yükleme dışarıdan, mobil asansörle yapılıyor. Küçükçekmece evden eve nakliyatta bu adımları önceden halletmek, ekibin kapıda beklemesini engelliyor ve işi saatler öncesine çekiyor. Site içi yollarda ağır araç kısıtı olan yerlerde eşyayı en yakın uygun noktadan taşıyoruz. Toplu konut bloklarında iç asansörler dar olduğu için gardırop ve büyük buzdolabı zaten içeriden çıkmıyor; mobil asansör bu adreslerde standart hale geldi.",
      "Sefaköy, Cennet, Kanarya ve Beşyol tarafı bambaşka bir tablo. Burada sokaklar dar, binalar otuz kırk yıllık, asansörler tek kişilik; birçok adreste araç ancak sokağın başına kadar geliyor. Bu binalarda mobil asansör olmadan büyük eşyayı indirmek hem uzun sürüyor hem riskli. E-5'in Sefaköy çıkışı sabah ve akşam ağır ilerlediği için yükleme saatini buna göre seçiyoruz; öğle saatleri çoğu zaman en rahat aralık oluyor. Tevfikbey ve Söğütlüçeşme çevresinde de sokaklar sıkışık, aracın duracağı yeri sabah erkenden tutmak gerekiyor. Kanarya ve Cennet'te bazı yollar tek yön olduğundan aracın çıkış güzergâhını da baştan planlıyoruz; yoksa dolu araçla geri manevra yapmak gerekiyor ve bu hem zaman kaybı hem risk.",
      "İlçe geniş: Halkalı'dan Kanarya'ya, Yarımburgaz'dan göl kıyısına uzanıyor. Bir uçtan diğerine gitmek gün planını doğrudan etkilediği için mesafeyi baştan hesaba katıyoruz. Halkalı'nın banliyö hattı ve TEM bağlantısı sayesinde şehir dışı çıkışlar rahat; şehirler arası taşımalarda bu güzergâhı kullanıyoruz. İlçeye taşınan profil çoğunlukla aile, hacim büyük ve kurulum uzun; ekip sayısını buna göre belirliyoruz. Küçükçekmece'de paketleme, asansörlü taşıma, ofis nakli, sigortalı taşıma ve eşya depolama hizmeti veriyoruz. Yeni ev hazır değilse eşyayı depoya alıp hazır olduğunda getiriyoruz; beyaz eşya ve mobilyanın sökümü ile kurulumu da bize ait. Adresi ve kat bilgisini paylaşın; hangi araçla, hangi saatte geleceğimizi net söyleyelim.",
    ],
    notes: [
      { title: "Site izni ve saat", text: "Halkalı ve Atakent'teki sitelerin çoğu taşınma için yönetim izni ve saat aralığı istiyor. Randevuyu önceden alıp ekibi o saate göre gönderiyoruz." },
      { title: "Otopark yükseklik bariyeri", text: "Yüksek bloklarda kapalı otopark girişi nakliye aracını almıyor. Yüklemeyi dış cepheden mobil asansörle yapıyoruz." },
      { title: "İlçe içi mesafe", text: "Halkalı ile Kanarya arası hatırı sayılır bir yol. İlçe içi taşımalarda bile mesafeyi ve E-5 yoğunluğunu gün planına ekliyoruz." },
    ],
    faqs: [
      { question: "Halkalı'daki sitelere taşınmada yönetim izni gerekiyor mu?", answer: "Sitelerin büyük kısmında gerekiyor; güvenlik girişte araç ve ekip kaydı alıyor, taşınma için belirli bir saat aralığı veriliyor. Yönetimden aldığınız saati bize iletirseniz ekip tam o saatte kapıda olur. İsterseniz yönetimle iletişimi biz kurarız." },
      { question: "Atakent'teki yüksek bloklarda mobil asansör kullanılabiliyor mu?", answer: "Evet, bu bloklarda zaten en pratik yöntem mobil asansör. Kapalı otoparka araç giremediği için yüklemeyi dış cepheden yapıyoruz. Kaçıncı katta olduğunuzu söyleyin, o kata uygun asansörle gelelim." },
      { question: "Sefaköy'ün dar sokaklarına aracınız giriyor mu?", answer: "Kısa şasi araçla çoğu sokağa giriyoruz; girilemeyen adreslerde aracı sokağın başına alıp eşyayı taşıyıcı ekiple çekiyoruz. Bu durumda ekibi bir kişi artırıyoruz ki iş uzamasın. Sokağın fotoğrafını gönderirseniz yöntemi baştan netleştiririz." },
      { question: "Küçükçekmece'den şehir dışına taşınma yapıyor musunuz?", answer: "Yapıyoruz. Halkalı ve TEM bağlantısı sayesinde şehir dışı çıkışlar rahat oluyor, yükleme saatini trafiğe göre planlıyoruz. Eşya paketlenip sigortalı olarak taşınıyor, varış adresinde kuruluyor. Detay için 0533 929 83 24'ten arayabilirsiniz." },
    ],
    nearby: ["avcilar", "bahcelievler", "bagcilar", "basaksehir"],
  },
  {
    slug: "avcilar",
    name: "Avcılar",
    side: "Avrupa Yakası",
    intro:
      "Avcılar; Ambarlı ve Firuzköy semtleriyle sahil ve konut bölgelerini bir arada barındırır. Avcılar taşımalarında sigortalı ve asansörlü hizmetle eşyalarınızı güvenle taşıyoruz.",
    neighborhoods: ["Ambarlı", "Firuzköy", "Denizköşkler", "Cihangir", "Tahtakale"],
    body: [
      "Avcılar'da taşınma sezonu büyük ölçüde okul takvimine göre işliyor. Üniversite kampüsü ilçenin ortasında olduğu için Üniversite Mahallesi ve Merkez çevresinde çok sayıda öğrenci evi var; taşınmaların önemli bir kısmı tek oda, birkaç koli ve bir yatak. Bu işler küçük görünse de sokakların darlığı ve park sıkıntısı yüzünden plansız yapıldığında saatler alıyor. Avcılar evden eve nakliyatta küçük hacimli taşımalar için tek araçlık, hızlı çıkan ekipler kuruyoruz; aynı gün başlayıp aynı gün bitiriyoruz. Dönem başı ve dönem sonunda talep arttığı için tarihi mümkün olduğunca önceden almak gerekiyor. Eşyanın bir kısmını yaz boyunca saklamak isteyen öğrenciler için depolama tarafımız da devreye giriyor; eşya paketlenip depoya alınıyor, dönemde geri getiriliyor.",
      "E-5 ilçenin can damarı, aynı zamanda en büyük engeli. Metrobüs hattının son durakları burada olduğu için sabah ve akşam yol ağır ilerliyor. Ambarlı liman bölgesinden çıkan tır trafiği de gün içindeki yoğunluğu artırıyor. Bu yüzden şehir içi taşımalarda yüklemeyi erken saatte bitirip yolu daha boş kullanmayı tercih ediyoruz; şehir dışına çıkacak yükleri TEM'e yönlendiriyoruz. Taşınma saatini seçerken hangi güzergâhı kullanacağımızı da baştan söylüyoruz, böylece gün içinde sürpriz olmuyor. Sahil tarafındaki adreslerde park alanı hafta sonları iyice daralıyor, o yüzden mümkünse hafta içi bir gün öneriyoruz.",
      "Yapı tarafında ilçe karışık. Merkez ve Denizköşkler çevresinde eski apartmanlar hâlâ çok; asansörsüz ya da tek kişilik asansörlü binalarda büyük eşya merdivenden çıkmıyor, mobil asansör devreye giriyor. Firuzköy tarafında yollar eğimli ve müstakil, bahçeli evler ağırlıkta; buradaki taşımalarda hacim genelde tahmin edilenden fazla çıkıyor, araç ve ekip planını keşiften sonra kesinleştiriyoruz. Kentsel dönüşümle yükselen yeni bloklarda ise site yönetimi izni ve taşınma saati kuralı işliyor. Deprem sonrası yenilenen binalarla eski yapılar aynı sokakta durabildiği için taşınma planını bina bina kuruyoruz. Avcılar'ın tamamında paketleme, asansörlü taşıma, sigortalı nakliye, şehirler arası taşımacılık ve eşya depolama veriyoruz. Yeni ev hazır değilse eşyayı depoya alıp hazır olduğunda getiriyoruz. Adresinizi ve tarihi iletin, planı birlikte çıkaralım.",
    ],
    notes: [
      { title: "Öğrenci taşımaları", text: "Üniversite çevresinde küçük hacimli, hızlı taşınmalar yoğun. Bunlar için tek araç ve az kişilik ekiple çıkıp işi aynı gün bitiriyoruz." },
      { title: "E-5 ve tır yoğunluğu", text: "Metrobüs son durakları ve Ambarlı liman trafiği yolu ağırlaştırıyor. Yüklemeyi erken saatte bitirip çıkışı boş saate denk getiriyoruz." },
      { title: "Firuzköy eğimi", text: "Firuzköy tarafında yollar eğimli, evler bahçeli. Hacim beklenenden büyük çıktığı için araç ve ekip planını keşiften sonra kesinleştiriyoruz." },
    ],
    faqs: [
      { question: "Öğrenci eviyim, birkaç kolim ve yatağım var. Küçük taşıma yapıyor musunuz?", answer: "Yapıyoruz, Avcılar'da en sık aldığımız işlerden biri bu. Küçük hacimli taşımalar için tek araç ve az kişilik ekiple çıkıyoruz, iş genelde birkaç saatte bitiyor. Eşya listesini kısaca söyleyin, uygun aracı gönderelim." },
      { question: "Avcılar'da mobil asansör gerekiyor mu?", answer: "Merkez ve Denizköşkler çevresindeki eski binalarda genelde gerekiyor; asansörler tek kişilik, büyük eşya içeriden geçmiyor. Yeni bloklarda bile gardırop ve büyük buzdolabı çoğu zaman asansöre sığmıyor. Kat ve balkon bilgisini iletirseniz gerekli olup olmadığını önceden söyleriz." },
      { question: "Ambarlı ve liman çevresindeki iş yerlerine taşıma yapıyor musunuz?", answer: "Yapıyoruz. Bölgede tır trafiği yoğun olduğu için yükleme saatini buna göre planlıyor, gerekirse mesai dışında çalışıyoruz. Ofis ve depo eşyasını bölüm bazında etiketleyip yeni adreste aynı düzende kuruyoruz." },
      { question: "Avcılar'dan başka bir şehre nakliye var mı?", answer: "Evet, şehirler arası yük ve ev taşımacılığı yapıyoruz. TEM bağlantısı sayesinde çıkış rahat, taşıma sigortalı olarak yürütülüyor. Varış şehrini ve tarihi 0533 929 83 24'ten iletin, planı çıkaralım." },
    ],
    nearby: ["kucukcekmece", "esenyurt", "beylikduzu", "basaksehir"],
  },
  {
    slug: "basaksehir",
    name: "Başakşehir",
    side: "Avrupa Yakası",
    intro:
      "Başakşehir; Kayaşehir ve Bahçeşehir gibi yeni ve yüksek katlı site bölgeleriyle hızla büyüyen bir ilçedir. Modern sitelerde asansörlü taşıma Başakşehir için idealdir.",
    neighborhoods: ["Kayaşehir", "Bahçeşehir", "Başak", "Güvercintepe", "Ziya Gökalp"],
    body: [
      "Başakşehir'de taşınma planı, adresin ilçenin hangi ucunda olduğuna göre baştan değişiyor. Kayaşehir'in yirmi katı geçen kuleleriyle Şahintepe'nin yokuşlu sokakları aynı ilçenin sınırları içinde ama iş olarak birbirine hiç benzemiyor. Kayaşehir ve Başakşehir etaplarındaki bloklarda yol geniş, blok önüne araç yanaştırmak genelde sorun olmuyor; asıl mesele yükseklik. Onuncu kattan sonra kanepeyi, buzdolabını, gardırobu asansör kabinine sığdırmak çoğu zaman mümkün değil. Bu yüzden Başakşehir evden eve nakliyat işlerinin büyük bölümünü mobil asansörle, yani cepheden çalışan dış asansörle yapıyoruz. Balkon ya da geniş bir pencere açıklığı, vincin ayaklarını basacağı düz bir zemin ve o zemindeki araçların çekilmiş olması, işin aynı gün bitip bitmeyeceğini belirliyor.",
      "Bahçeşehir tarafına geçtiğinizde tablo değişiyor. Orada villa ve bahçeli konut ağırlıklı bir stok var; yükseklik sorun değil, hacim sorun. İki üç katlı iç merdivenler dar dönüşlü oluyor, bahçe mobilyası ve depodaki eşya ilk bakışta göründüğünden fazla çıkıyor. Bu evlerde araç seçimini ve ekip sayısını yerinde gördükten sonra netleştiriyoruz. Güvercintepe ve Şahintepe'de ise iş tam tersine dönüyor: sokaklar dar, eğim yüksek, eski apartmanların çoğunda asansör ya yok ya da eşya taşımaya elverişli değil. Vince düz zemin bulmak bazen tek başına yarım saat alıyor, bulunamazsa merdivenden elle taşımaya geçiyoruz ve ekibi ona göre büyütüyoruz.",
      "Ulaşım tarafı Başakşehir'in şansı. TEM ilçenin tam ortasından geçiyor, Basın Ekspres ve İkitelli üzerinden E-5'e inmek de kolay. Ama sabah 07.30-09.30 ile akşam 17.00-19.30 arasında TEM'in Mahmutbey yönü tıkanıyor; biz araç hareketini bu saatlerin dışına alıyoruz, böylece yükleme bitince yolda beklemiyoruz. Sitelerde ortak alan kullanımı için yönetimden gün ve saat izni alınması gerekiyor, bazı siteler hafta sonu taşımaya hiç izin vermiyor. Randevu verirken bunu baştan soruyoruz ki taşınma sabahı kapıda sürpriz yaşamayın. Kağıthane'deki merkezimizden Başakşehir'e sabah erken saatte rahat çıkıyoruz; paketleme, asansörlü taşıma ve gerekirse eşya depolama aynı ekip içinde çözülüyor.",
    ],
    notes: [
      { title: "Kule bloklarda mobil asansör", text: "Kayaşehir ve yüksek etaplardaki dairelerin çoğunda bina asansörü eşya için yetersiz kalıyor. Balkon açıklığı uygunsa mobil asansör kuruyoruz, bu hem süreyi kısaltıyor hem de eşyanın merdivende zarar görme riskini bitiriyor." },
      { title: "Site yönetimi izni", text: "Sitelerin büyük kısmı taşıma için önceden bildirim ve saat aralığı istiyor. Bazı siteler hafta sonunu tamamen kapatıyor. Randevudan önce yönetimle konuşup günü ona göre ayarlıyoruz." },
      { title: "Şahintepe'de eğim sorunu", text: "Şahintepe ve Güvercintepe'nin dik, dar sokaklarında vinç ayaklarını dengeleyecek düz zemin her zaman çıkmıyor. Bu adreslerde keşif sırasında karar veriyoruz; gerekiyorsa daha küçük araç ve daha kalabalık ekiple çalışıyoruz." },
    ],
    faqs: [
      { question: "Kayaşehir'deki yüksek katlı bloklara mobil asansör çıkıyor mu?", answer: "Evet, kullandığımız mobil asansörler bu bloklardaki üst katlara ulaşıyor. Şart, cephede vinci kurabileceğimiz düz bir alan ve eşyanın geçebileceği balkon veya pencere açıklığı. Adresi baştan söylerseniz uygun olup olmadığını telefonda büyük ölçüde netleştirebiliyoruz." },
      { question: "Başakşehir'deki sitelerde taşıma için önceden izin almak gerekiyor mu?", answer: "Çoğu sitede gerekiyor. Yönetim genellikle taşıma gününü, saat aralığını ve aracın plakasını önceden bilmek istiyor. Bu yazışmayı sizin adınıza takip edebiliyoruz; hafta sonu kısıtı olan sitelerde günü hafta içine çekmek en pratik çözüm." },
      { question: "Şahintepe ve Güvercintepe'nin dar sokaklarına kamyon giriyor mu?", answer: "Bazı sokaklara büyük kamyon girmiyor. O adreslerde eşyayı daha küçük araçla ana caddeye aktarıp oradan yüklüyoruz ya da doğrudan küçük araçla çalışıyoruz. Sokağın durumunu keşifte görüp size net söylüyoruz, taşınma günü sürpriz olmuyor." },
      { question: "Bahçeşehir'den Başakşehir merkezine taşınma tek günde biter mi?", answer: "Mesafe kısa olduğu için sorun mesafede değil, eşya hacminde. Standart bir 3+1 daire tek günde rahat biter. Bahçeli evlerde depo ve bahçe eşyası çıkarsa ekibi büyütüp yine aynı gün kapatıyoruz." },
    ],
    nearby: ["arnavutkoy", "kucukcekmece", "esenyurt", "bagcilar"],
  },
  {
    slug: "esenyurt",
    name: "Esenyurt",
    side: "Avrupa Yakası",
    intro:
      "Esenyurt; yoğun siteleri ve hızla artan nüfusuyla İstanbul'un en kalabalık ilçesidir. Yüksek katlı sitelerde asansörlü ve planlı taşıma Esenyurt'ta önemlidir.",
    neighborhoods: ["Cumhuriyet", "Bağlarçeşme", "Yenikent", "Saadetdere", "Pınar"],
    body: [
      "Esenyurt, İstanbul'un en kalabalık ilçesi ve bu kalabalık taşıma işine doğrudan yansıyor. Cumhuriyet, Yenikent, İnönü, Saadetdere ve Ardıçlı hattında blok blok yükselen siteler var; çoğu on beş kat ve üzeri. Dairelerin içi ferah ama bina asansörleri eşya taşımaya göre tasarlanmamış. Esenyurt evden eve nakliyat taleplerinde mobil asansör neredeyse standart hale geldi, çünkü koltuk takımını ve gardırobu kabine sokmaya çalışmak hem zamanı hem eşyayı yiyor. Vinç kurulacak yerin cephe önünde boş olması gerekiyor; blok önleri sabahın erken saatinde bile araçla dolu olduğu için taşıma gününü site yönetimiyle konuşup o alanı önceden ayırtıyoruz.",
      "İkinci mesele araç yanaştırma. Doğan Araslı Bulvarı ve Marmara Caddesi gibi ana arterler gün boyu yoğun, ara sokaklarda ise çift sıra park yaygın. Bir kamyonun blok kapısına yanaşabilmesi çoğu zaman komşu araçların çekilmesine bağlı. Bu yüzden Esenyurt işlerinde yükleme saatini erkene alıyoruz; sabah 08.00 civarında başlayan bir taşıma, öğleden sonra başlayan aynı işten belirgin şekilde erken bitiyor. Site içi trafik akışının tek yönlü olduğu yerlerde aracı geri manevra yapmadan çıkaracak şekilde konumlandırmak da işin bir parçası.",
      "İlçede kiracı sirkülasyonu yüksek. Çıkış ve giriş çoğu zaman aynı güne denk geliyor, iki taraf da anahtar teslimini aynı öğleden sonra bekliyor. Böyle işlerde eşyayı paketleyip yükledikten sonra yeni adreste teslim saatini beklemek yerine, gün içinde ara depolama yapıp akşam boşaltma yaptığımız da oluyor. Konum olarak TEM ve E-5 arasında sıkışmış olması avantaj: Haramidere üzerinden E-5'e, Kıraç yönünden TEM'e çabuk çıkılıyor. Ama iki otoyol da sabah ve akşam zirve saatlerinde dolduğu için şehir içi uzun mesafeli taşımalarda çıkışı 09.30'dan sonraya ya da 16.00'dan önceye ayarlamak gerekiyor. Paketleme, asansörlü taşıma ve sigortalı nakliye aynı ekiple yürüyor; ihtiyaç olursa eşyanın bir bölümünü depoda tutuyoruz.",
    ],
    notes: [
      { title: "Blok önü boş alan", text: "Esenyurt'ta en çok vakit kaybettiren şey, vincin kurulacağı alanın araçlarla dolu olması. Taşıma gününü site yönetimine bildirip cephe önünde birkaç araçlık yeri önceden ayırtıyoruz." },
      { title: "Erken saat avantajı", text: "Sabah erken başlayan taşımalar hem site içi trafiğe hem de E-5 yoğunluğuna takılmıyor. Randevuları mümkün olduğunca güne erken koyuyoruz." },
      { title: "Aynı gün çıkış-giriş", text: "Kiracı taşınmalarında çıkış ve giriş çoğu zaman aynı güne düşüyor. Yeni adres saatinde hazır değilse eşyayı araçta ya da depoda bekletip akşam boşaltma yapabiliyoruz." },
    ],
    faqs: [
      { question: "Esenyurt'ta blok önüne araç yanaştırmak sorun oluyor mu?", answer: "Sık sık oluyor, çünkü blok önleri park halindeki araçlarla dolu. Çözüm basit ama önceden planlanmalı: site yönetimine taşıma gününü bildirip cephe önünde yer ayırtıyoruz. Bu yapılmazsa vinç kurulumu gecikiyor ve iş uzuyor." },
      { question: "Sitelerde taşıma için saat sınırı var mı?", answer: "Birçok sitede var. Genellikle sabah 08.00 ile akşam 18.00 arası çalışmaya izin veriliyor, bazı yerlerde hafta sonu kısıtı da uygulanıyor. Randevudan önce yönetimden bu bilgiyi alıp planı ona göre kuruyoruz." },
      { question: "Esenyurt'tan Anadolu Yakası'na taşınma aynı gün biter mi?", answer: "Biter, ama saat planı önemli. Yükleme sabah erken biterse köprü ve tünel trafiğine yakalanmadan geçiyoruz. Öğleden sonra yola çıkan bir aracın Kadıköy ya da Ataşehir tarafına varması ciddi zaman kaybettirebilir, bu yüzden çıkış saatini baştan ayarlıyoruz." },
      { question: "Yeni evin anahtarını öğleden sonra alacağım, eşyam ne olacak?", answer: "Bu Esenyurt'ta çok yaşanan bir durum. Sabah paketleyip yüklüyoruz, siz anahtarı alana kadar eşya araçta güvende bekliyor ya da gerekiyorsa kısa süreli depoya alıyoruz. Anahtar teslim olur olmaz boşaltmaya başlıyoruz." },
    ],
    nearby: ["beylikduzu", "avcilar", "basaksehir", "buyukcekmece"],
  },
  {
    slug: "beylikduzu",
    name: "Beylikdüzü",
    side: "Avrupa Yakası",
    intro:
      "Beylikdüzü; modern siteleri ve planlı yerleşimiyle Avrupa yakasının gözde konut bölgelerindendir. Geniş cadde ve sitelerde asansörlü taşıma ile Beylikdüzü taşımalarını hızlı tamamlıyoruz.",
    neighborhoods: ["Cumhuriyet", "Gürpınar", "Kavaklı", "Adnan Kahveci", "Yakuplu"],
    body: [
      "Beylikdüzü planlı büyüyen bir ilçe ve bunun nakliyeciye yansıması olumlu. Yaşam Caddesi, Adnan Kahveci, Barış ve Cumhuriyet hattındaki bulvarlar geniş, sitelerin araç giriş kapıları düzgün, blok önüne yanaşmak çoğu adreste mümkün. İşin zorluğu sokakta değil, binanın içinde başlıyor. On ila on beş katlı blokların asansör kabinleri insan taşımaya göre ölçülü; üç kapılı gardırobu, L koltuğu, çamaşır makinesini o kabinden geçirmeye çalışmak boşuna uğraş. Beylikdüzü evden eve nakliyat işlerinde mobil asansör kurup eşyayı balkondan alıyoruz, bu hem süreyi belirgin kısaltıyor hem de merdiven boşluğunda çizik riskini ortadan kaldırıyor.",
      "Site kültürü güçlü olduğu için prosedür de net. Güvenlik kapısında araç kaydı yapılıyor, bazı sitelerde taşıma aracının kapalı otoparka değil yer üstü yükleme alanına yanaşması isteniyor. Kapalı otoparkların giriş yüksekliği kamyonu geçirmiyor; buralarda eşyayı yer üstünde yükleyip aktarma yapıyoruz. Gürpınar ve Yakuplu tarafında bahçeli, az katlı yapılar da var; oralarda vinç ihtiyacı azalıyor ama eşya hacmi artıyor. Kavaklı'nın iç sokaklarında yol daralıyor, büyük aracın manevrası için sokağın bir ucundan girip diğerinden çıkacak şekilde plan yapıyoruz.",
      "Yol tarafında ilçenin iki damarı var: E-5 ve TEM. Metrobüsün son durağı da burada olduğu için E-5 üzerinde sabah 07.00-09.30 ve akşam 17.00-20.00 aralığında İstanbul yönü ağır ilerliyor. Şehir merkezine taşınacak bir eşyayı bu saatlerde yola çıkarmak, yükleme ne kadar hızlı biterse bitsin, günü uzatıyor. Biz de yüklemeyi sabah erken bitirip ya hemen çıkıyoruz ya da yoğunluk düşene kadar bekleyip zamanı paketlemeye harcıyoruz. Beylikdüzü'nden şehirler arası yük taşımacılığı da sık talep ediliyor; İstanbul dışına giden işlerde TEM'e Yakuplu bağlantısından çıkıp yolu erken açıyoruz. Sigortalı taşıma, profesyonel paketleme ve gerektiğinde eşya depolama hizmetlerini aynı organizasyon içinde veriyoruz.",
    ],
    notes: [
      { title: "Kapalı otopark yüksekliği", text: "Beylikdüzü sitelerinin kapalı otoparklarına taşıma kamyonu giremiyor, giriş yüksekliği yetmiyor. Yükleme yer üstündeki alandan yapılıyor; gerekirse eşyayı küçük araçla aktarıyoruz." },
      { title: "Güvenlik kaydı", text: "Sitelerin çoğunda araç ve ekip girişte kaydediliyor. Plakayı ve çalışan sayısını taşımadan önce yönetime bildirip kapıda beklemeyi sıfıra indiriyoruz." },
      { title: "E-5 zirve saatleri", text: "Metrobüs hattı boyunca E-5, sabah ve akşam saatlerinde İstanbul yönünde tıkanıyor. Şehir merkezine gidecek araçları bu saatlerin dışına planlıyoruz." },
    ],
    faqs: [
      { question: "Beylikdüzü'ndeki sitelere taşıma aracıyla girmek için ne gerekiyor?", answer: "Çoğu sitede güvenlik, aracın plakasını ve taşıma gününü önceden ister. Yönetime bir gün öncesinden bildirim yapıldığında giriş sorunsuz oluyor. Bu yazışmayı sizin yerinize biz de yürütebiliyoruz." },
      { question: "Kapalı otoparka kamyon girmiyorsa yükleme nasıl yapılıyor?", answer: "Kamyonu yer üstündeki yükleme alanına ya da blok önüne yanaştırıyoruz. Bina girişi otoparktan geçiyorsa eşyayı daha küçük bir araçla dışarı aktarıp oradan yüklüyoruz. Bu ek adım işi biraz uzatır ama tek günü aşmaz." },
      { question: "12. kattan eşya indirmek çok mu zaman alır?", answer: "Mobil asansörle hayır. Vinç kurulduktan sonra eşya balkondan doğrudan araca iniyor; bu, merdivenden elle taşımaya göre kat kat hızlı. Kurulum için cephe önünde birkaç metrelik düz alanın boş olması yeterli." },
      { question: "Beylikdüzü'nden şehir dışına taşınma yapıyor musunuz?", answer: "Yapıyoruz. Şehirler arası yük taşımacılığı verdiğimiz hizmetlerden biri. Yakuplu bağlantısından TEM'e çıkıp yolu erken açıyoruz, eşya sigortalı şekilde taşınıyor. Varış şehrini ve tarihi söylerseniz planı ona göre kuruyoruz." },
    ],
    nearby: ["esenyurt", "buyukcekmece", "avcilar"],
  },
  {
    slug: "buyukcekmece",
    name: "Büyükçekmece",
    side: "Avrupa Yakası",
    intro:
      "Büyükçekmece; Mimarsinan ve Kumburgaz gibi sahil semtleriyle hem siteleri hem müstakil konutları barındırır. Büyükçekmece'de hem yazlık hem konut taşıması yapıyoruz.",
    neighborhoods: ["Mimarsinan", "Kumburgaz", "Türkoba", "Güzelce", "Cumhuriyet"],
    body: [
      "Büyükçekmece'de taşınma denince akla iki farklı iş geliyor. Biri Mimarsinan, Kumburgaz, Celaliye, Kamiloba ve Güzelce hattındaki sahil siteleri; diğeri göl çevresindeki ve iç mahallelerdeki müstakil evler, villalar. Sahil şeridindeki sitelerin çoğu yazlık olarak yapılmış, sonradan daimi konuta dönmüş. Bu binalar genelde alçak katlı, bu yüzden mobil asansör her adreste gerekmiyor. Ama sitelerin araç giriş kapıları dar, iç yollar dolambaçlı; büyük kamyonu blok kapısına kadar sokmak çoğu zaman mümkün olmuyor. Büyükçekmece evden eve nakliyat işlerinde bu yüzden araç seçimini önceden yapıyoruz, gerekirse aktarma aracıyla çalışıyoruz.",
      "Villa taşımaları ayrı bir hazırlık istiyor. İki üç katlı evlerde iç merdiven dar dönüşlü oluyor, büyük yemek masası ya da kanepe merdivenden çıkmıyor; bunları sökmek ve yeni adreste yeniden kurmak gerekiyor. Bahçe tarafında da her seferinde beklenenden fazla eşya çıkıyor: barbekü, bahçe mobilyası, depodaki aletler, saksılar. Keşif yaparken evin içi kadar bahçeyi ve depoyu da ölçüyoruz, çünkü hacim yanlış hesaplanırsa ikinci sefer yapmak günü ikiye katlıyor. Ekip sayısını ve araç boyutunu bu ölçüme göre belirliyoruz.",
      "Mesafe faktörü ihmal edilmemeli. Büyükçekmece, İstanbul merkezine yakın değil; sahil yolu üzerinden Bakırköy tarafına inmek de, TEM üzerinden şehrin içine girmek de tek başına ciddi zaman tutuyor. Yaz aylarında sahil yolunda hafta sonu trafiği belirgin şekilde ağırlaşıyor, o günlerde TEM'i tercih ediyoruz. Şehir içine yapılacak taşımalarda yüklemeyi sabah erken bitirip yolu öğle saatinde açmak en verimli plan. Yazlığını satıp merkeze taşınan ya da tersine merkezden buraya yerleşen müşterilerde eşyanın bir bölümünü geçici olarak depolamak da sık çıkan bir ihtiyaç; bunu da karşılıyoruz. Paketleme, asansörlü taşıma ve sigortalı nakliye ilçenin her mahallesinde geçerli.",
    ],
    notes: [
      { title: "Villa ve bahçe hacmi", text: "Müstakil evlerde bahçe ve depo eşyası, ev içindekinin yanında küçük görünmüyor. Keşif sırasında bunları da hesaba katıp araç boyutunu ona göre seçiyoruz, ikinci sefer gerekmiyor." },
      { title: "Yazlık site girişleri", text: "Kumburgaz ve Celaliye'deki sitelerin iç yolları dar. Büyük kamyon her zaman blok kapısına yanaşamıyor; bu adreslerde aktarma aracıyla çalışıp süreyi kısaltıyoruz." },
      { title: "Sahil yolu mu TEM mi", text: "Yaz hafta sonlarında sahil yolu ağır ilerliyor. Şehir içine giden taşımalarda TEM'i kullanıp yükleme sonrası zaman kaybını önlüyoruz." },
    ],
    faqs: [
      { question: "Kumburgaz ve Celaliye'deki yazlık sitelere kış aylarında da taşıma yapıyor musunuz?", answer: "Yıl boyu yapıyoruz, sezon fark etmiyor. Tek dikkat ettiğimiz nokta, sezon dışında site yönetiminin kapıda olmayabilmesi. Taşıma gününü önceden bildirip giriş iznini ayarlıyoruz ki ekip kapıda beklemesin." },
      { question: "Villa taşımasına kaç kişilik ekip geliyor?", answer: "Ev, bahçe ve depo hacmine göre değişiyor. İki katlı bahçeli bir evde standart daire ekibinden daha kalabalık çalışıyoruz, çünkü merdivenden geçmeyen mobilyaların sökülüp yeniden kurulması gerekiyor. Keşiften sonra kaç kişiyle geleceğimizi net söylüyoruz." },
      { question: "Büyükçekmece'den Kadıköy tarafına taşınma tek günde biter mi?", answer: "Genelde biter ama saat planı kritik. Yüklemeyi sabah erken bitirip öğleye doğru yola çıkıyoruz, böylece hem sahil yolunda hem de geçişlerde beklemiyoruz. Eşya hacmi çok yüksekse ikinci araçla aynı gün paralel çalışıyoruz." },
      { question: "Yeni evim henüz hazır değil, eşyamı bir süre saklayabilir misiniz?", answer: "Evet, eşya depolama veriyoruz. Eşyayı paketleyip depoya alıyoruz, siz hazır olduğunuzda yeni adrese taşıyıp yerleştiriyoruz. Yazlıktan daimi konuta geçenlerde bu ihtiyaç sık çıkıyor." },
    ],
    nearby: ["beylikduzu", "esenyurt", "catalca", "silivri"],
  },
  {
    slug: "bayrampasa",
    name: "Bayrampaşa",
    side: "Avrupa Yakası",
    intro:
      "Bayrampaşa, merkezi konumu ve kolay ulaşımıyla bilinen yoğun bir konut ilçesidir. Apartman taşımalarında asansörlü hizmetle Bayrampaşa'da hızlı çözümler sunuyoruz.",
    neighborhoods: ["Kartaltepe", "Yıldırım", "Vatan", "Terazidere", "Muratpaşa"],
    body: [
      "Bayrampaşa, İstanbul'un eski yerleşim dokusunu taşıyan ilçelerden. Yenidoğan, Altıntepsi, Muratpaşa, Terazidere ve Kartaltepe'nin sokaklarında beş altı katlı apartmanlar bitişik nizam sıralanıyor; birçoğunda asansör ya hiç yok ya da tek kişiyi zar zor alıyor. Bayrampaşa evden eve nakliyat işlerinin belkemiği bu yüzden mobil asansör. Vinci sokağa kurabilmek için cephe önündeki park halindeki araçların çekilmesi gerekiyor; bunu taşımadan önce komşularla konuşarak halletmek, taşınma sabahı yaşanacak bir saatlik kaybı baştan siliyor.",
      "İlçenin sanayi ve ticaret tarafı da hafif değil. Toptancı hali çevresinde, Vatan Caddesi hattında ve otogar civarında çok sayıda atölye, depo ve iş yeri var. Buralardaki taşımalarda mesele mobilya değil; raf sistemleri, makine, stok kolileri ve dosya arşivi taşınıyor. Bu işler mesai saatlerini bozmamak için çoğu zaman akşam ya da hafta sonu yapılıyor. Ofis taşıma tarafında da aynı yaklaşım geçerli: sökme, paketleme, taşıma ve yeniden kurulum tek gecede bitirilecek şekilde planlanıyor ki ertesi sabah iş aksamasın.",
      "Kentsel dönüşüm ilçede hâlâ sürüyor. Binası yıkılacak olan aileler önce eşyalarını çıkarmak, sonra da yeni yapı bitene kadar bir yerde tutmak zorunda kalıyor. Bu durumda eşyayı paketleyip depoya alıyoruz; teslim günü geldiğinde yeni adrese taşıyıp yerleştiriyoruz. Ulaşım açısından Bayrampaşa'nın konumu iyi: O-1 çevre yolu, E-5 ve TEM bağlantıları birkaç dakika içinde. Ama sabah 07.30'dan sonra Vatan Caddesi ve otogar çevresi belirgin şekilde yoğunlaşıyor. Kağıthane'deki merkezimizden Bayrampaşa'ya kısa sürede ulaşıyoruz, bu da sabah erken başlayan taşımaları kolaylaştırıyor. Sigortalı taşıma, paketleme ve asansörlü hizmet ilçenin her mahallesinde geçerli.",
    ],
    notes: [
      { title: "Asansörsüz eski bina", text: "İç mahallelerdeki apartmanların çoğunda eşya taşımaya elverişli asansör yok. Mobil asansörle balkondan indirme yapıyoruz; bu mümkün değilse ekibi büyütüp merdivenden taşıyoruz." },
      { title: "Sokakta vinç yeri", text: "Cephe önü park halindeki araçlarla doluysa vinç kurulamıyor. Taşımadan bir gün önce komşularla konuşup o birkaç metrelik alanın boşaltılmasını sağlamak, taşınma sabahını kurtarıyor." },
      { title: "Dönüşümde depolama", text: "Kentsel dönüşümde eşya, yeni bina bitene kadar bekletiliyor. Paketleyip depoya alıyoruz, teslim gününde yeni adrese taşıyıp yerleştiriyoruz." },
    ],
    faqs: [
      { question: "Binamda asansör yok, 5. kattayım. Nasıl taşıyacaksınız?", answer: "Bayrampaşa'da bu çok yaygın. Sokakta vinç kurulacak yer varsa mobil asansörle balkondan indiriyoruz, en pratik ve en güvenli yol bu. Sokak buna izin vermiyorsa ekibi büyütüp merdivenden taşıyoruz; süre uzar ama iş yine aynı gün biter." },
      { question: "Sokağım çok dar, vinç kurulabilir mi?", answer: "Genelde kurulabiliyor, kritik olan cephe önünde araçsız birkaç metrelik alan. Taşımadan önce adrese bakıp size net cevap veriyoruz. Alan çıkmıyorsa alternatif planı baştan konuşuyoruz, gün geldiğinde şaşırmıyorsunuz." },
      { question: "Toptancı hali çevresindeki iş yerimi taşıtabilir miyim?", answer: "Evet, ofis ve iş yeri taşıma yapıyoruz. Raf, stok, arşiv ve mobilyayı sökülüp paketlenerek taşıyor, yeni adreste yeniden kuruyoruz. İşinizi aksatmamak için taşımayı akşam saatlerine ya da hafta sonuna alabiliriz." },
      { question: "Kentsel dönüşüm nedeniyle çıkıyorum, eşyamı ne kadar süre depolayabilirsiniz?", answer: "Süreyi ihtiyacınıza göre belirliyoruz; birkaç haftalık da olabilir, aylarca da. Eşya paketlenip listelenerek depoya alınıyor. Yeni daireniz teslim edildiğinde aynı ekiple taşıyıp yerleştiriyoruz." },
    ],
    nearby: ["esenler", "gaziosmanpasa", "eyupsultan", "zeytinburnu"],
  },
  {
    slug: "zeytinburnu",
    name: "Zeytinburnu",
    side: "Avrupa Yakası",
    intro:
      "Zeytinburnu; sahil hattı ve yoğun konut dokusuyla tarihi yarımadaya komşu bir ilçedir. Zeytinburnu taşımalarında dar sokaklara uygun araç ve asansörlü taşıma tercih edilir.",
    neighborhoods: ["Merkezefendi", "Kazlıçeşme", "Seyitnizam", "Telsiz", "Veliefendi"],
    body: [
      "Zeytinburnu son yıllarda ikiye ayrılmış gibi. Kazlıçeşme ve sahil hattında dönüşümle yükselen yeni rezidanslar, iç tarafta ise Telsiz, Beştelsiz, Nuripaşa ve Yeşiltepe'nin dar, eğimli, sık dokulu sokakları var. Rezidans tarafında eşya asansörü ve yükleme alanı olan binalar çıkıyor; buralarda yönetimden saat almak ve asansörü rezerve etmek işi büyük ölçüde çözüyor. Kapalı otoparkların giriş yüksekliği kamyonu geçirmediği için yüklemeyi dış alanda yapıyoruz. Zeytinburnu evden eve nakliyat işlerinin diğer yarısı ise iç mahallelerde geçiyor ve orada tablo bambaşka.",
      "İç mahallelerde binalar bitişik, sokaklar dar, apartmanların çoğu asansörsüz ya da asansörü eşya almıyor. Mobil asansör burada kurtarıcı ama kurulum için cephe önünde boş alan şart. Sokakta çift sıra park varsa vinç ayakları basmıyor. Bir de tramvay ayrıntısı var: T1 hattının geçtiği caddelerde hat üzerine ve hemen bitişiğine vinç kurmak mümkün değil, o adreslerde ya arka sokaktan çalışıyoruz ya da elle taşıma planlıyoruz. Bunu adres alındığı anda kontrol ediyoruz, taşınma sabahına bırakmıyoruz.",
      "Yol tarafı ilçenin avantajı. D-100 ilçenin içinden geçiyor, sahil yolu (Kennedy Caddesi) hemen aşağıda, Kazlıçeşme üzerinden şehrin her yönüne çıkmak kolay. Ama D-100'ün Merter ve Cevizlibağ yönü sabah ve akşam zirve saatlerinde ağırlaşıyor; bu saatlerde araç hareketi yerine paketleme yapmak zamanı daha verimli kullanıyor. Kazlıçeşme çevresindeki tekstil ve deri iş yerlerinden gelen ofis taşıma ve şehirler arası yük talebini de karşılıyoruz. Eşyanız hemen yeni adrese sığmayacaksa bir bölümünü depoda tutabiliyoruz. Kağıthane merkezimizden Zeytinburnu'na kısa sürede ulaşıyoruz, bu da gün içinde esnek planlama sağlıyor.",
    ],
    notes: [
      { title: "Tramvay hattı kısıtı", text: "T1 tramvay hattının geçtiği caddelerde vinç kurmak mümkün değil. Bu adreslerde arka sokaktan çalışıyor ya da elle taşıma planlıyoruz; adres alındığında bunu baştan kontrol ediyoruz." },
      { title: "Rezidans yük asansörü", text: "Sahil hattındaki yeni binalarda eşya asansörü bulunuyor. Yönetimden gün ve saat rezervasyonu alındığında taşıma belirgin şekilde hızlanıyor." },
      { title: "İç mahallelerde park", text: "Telsiz ve Beştelsiz gibi sık dokulu mahallelerde çift sıra park vinç kurulumunu engelliyor. Taşımadan bir gün önce cephe önünü boşaltmak gerekiyor." },
    ],
    faqs: [
      { question: "Tramvay hattının geçtiği caddede oturuyorum, mobil asansör kurabilir misiniz?", answer: "Hat üzerine ve hemen bitişiğine vinç kurulamıyor. Binanın arka cephesi ya da yan sokağı uygunsa oradan çalışıyoruz. Uygun değilse ekibi büyütüp merdivenden taşıma yapıyoruz; adresi söylediğinizde hangisi olacağını önceden net söylüyoruz." },
      { question: "Kazlıçeşme'deki rezidansın kapalı otoparkına kamyon giriyor mu?", answer: "Girmiyor, giriş yüksekliği yetmiyor. Aracı bina dışındaki yükleme alanına yanaştırıyoruz, eşyayı binanın eşya asansörüyle indirip oradan yüklüyoruz. Yönetimden asansör rezervasyonu almak bu işi çok hızlandırıyor." },
      { question: "İç mahallelerdeki asansörsüz binalarda taşıma nasıl oluyor?", answer: "Cephe önü uygunsa mobil asansör kuruyoruz, eşya balkondan iniyor. Sokak buna izin vermiyorsa daha kalabalık ekiple merdivenden taşıyoruz. İki durumda da eşya paketlenip korumaya alınıyor, sigortalı taşınıyor." },
      { question: "Zeytinburnu'ndaki iş yerimi başka şehre taşıtabilir miyim?", answer: "Evet, şehirler arası yük taşımacılığı yapıyoruz. Tekstil ve deri sektöründen gelen bu tarz taleplerde makineyi, rafı ve stoku paketleyip sigortalı şekilde varış şehrine götürüyoruz. Varış adresini ve tarihi verirseniz planı buna göre kuruyoruz." },
    ],
    nearby: ["bakirkoy", "fatih", "bayrampasa", "gungoren"],
  },
  {
    slug: "gungoren",
    name: "Güngören",
    side: "Avrupa Yakası",
    intro:
      "Güngören; Merter'in tekstil ve iş bölgesiyle yoğun konutları bir arada barındırır. Dar sokaklı yapısı nedeniyle Güngören'de planlı taşıma önemlidir.",
    neighborhoods: ["Merter", "Tozkoparan", "Mareşal Çakmak", "Akıncılar", "Güneştepe"],
    body: [
      "Güngören, İstanbul'un yüzölçümü en küçük ama en sıkışık ilçelerinden. Haznedar, Tozkoparan, Güneştepe, Akıncılar ve Mareşal Çakmak'ta binalar bitişik nizam, sokaklar dar, otopark neredeyse yok. Güngören evden eve nakliyat işinde ilk sorulan soru şu oluyor: araç kapıya yanaşabilecek mi? Cevap çoğu zaman komşuların araçlarına bağlı. Cephe önünde vinç ayaklarının basacağı üç dört metrelik boş alan çıkmazsa mobil asansör kurulamıyor, o zaman merdivenden elle taşımaya geçmek gerekiyor. Bu yüzden taşımadan bir gün önce sokağı görüyor, gerekiyorsa komşularla konuşup alanı boşalttırıyoruz.",
      "Merter tarafı ilçenin ayrı bir yüzü. Tekstil showroom'ları, iş hanları ve ofisler burada yoğunlaşıyor. Bu binalarda yük asansörü genelde var ama mesai saatlerinde sürekli kullanımda; taşımayı akşam ya da hafta sonuna almak hem asansörü rahat kullanmayı sağlıyor hem de iş akışını bozmuyor. Ofis taşımalarında masaları, dolapları ve raf sistemlerini söküp paketliyor, yeni adreste yeniden kuruyoruz. Bilgisayar ve elektronik ekipman ayrı paketleniyor, çünkü bu tarz taşımalarda en çok zarar gören şey kablo ve ekran oluyor.",
      "Bina tipolojisinde bir başka detay: iç mahallelerdeki bazı dairelerin balkonu yok ya da balkon açıklığı büyük eşyayı geçirmiyor. Böyle durumlarda pencere kanadını söküp eşyayı oradan alıyoruz, işi bitirdikten sonra kanadı yerine takıyoruz. Ulaşımda E-5 ilçenin sınırından geçiyor ve Merter kavşağı sabah ile akşam saatlerinde ağır. Şehir içi uzun mesafeli taşımalarda çıkışı bu saatlerin dışına almak günü kısaltıyor. Kağıthane'deki merkezimizden Güngören'e erken saatte rahatlıkla ulaşıyoruz. Paketleme, asansörlü taşıma, ofis taşıma ve eşya depolama hizmetlerinin hepsi ilçe genelinde geçerli, taşınan eşya sigortalı.",
    ],
    notes: [
      { title: "Sokakta yer açma", text: "Güngören'de vinç kurulumunun önündeki tek engel genelde park eden araçlar. Taşımadan önce komşularla konuşup cephe önünde birkaç metrelik alanı boşalttırmak, saatlerce zaman kazandırıyor." },
      { title: "Merter ofis taşıma", text: "İş hanlarındaki yük asansörleri mesai saatinde sürekli meşgul. Ofis taşımalarını akşam ya da hafta sonuna alıp hem asansörü rahat kullanıyor hem de iş akışını bozmuyoruz." },
      { title: "Balkonsuz daire çözümü", text: "Balkonu olmayan ya da açıklığı dar olan dairelerde pencere kanadını söküp eşyayı oradan alıyoruz. İş bittikten sonra kanat yerine takılıyor, hasar bırakmıyoruz." },
    ],
    faqs: [
      { question: "Sokağımda hiç park yeri yok, taşıma yapılabilir mi?", answer: "Yapılabilir ama hazırlık gerekiyor. Vinç için cephe önünde üç dört metrelik boş alan lazım. Taşımadan bir gün önce komşularınızla konuşup o alanı boşaltırsanız iş çok daha hızlı bitiyor. Alan hiç açılmıyorsa kalabalık ekiple merdivenden taşıyoruz." },
      { question: "Merter'deki ofisimi hafta sonu taşıtabilir miyim?", answer: "Evet, ofis taşımalarını çoğunlukla hafta sonu ya da mesai bitiminde yapıyoruz. Böylece iş hanının yük asansörünü rahat kullanıyoruz ve siz pazartesi sabahı yeni ofiste çalışmaya başlıyorsunuz. 7/24 çalışıyoruz, saat konusunda esneğiz." },
      { question: "Dairemin balkonu yok, mobil asansör işe yarar mı?", answer: "Yarar. Pencere kanadını söküp eşyayı o açıklıktan alıyoruz, bu bizim için rutin bir işlem. Taşıma bittikten sonra kanadı yerine takıyoruz. Açıklık gerçekten çok darsa büyük mobilyaları söküp parça halinde indiriyoruz." },
      { question: "Güngören'den başka ilçeye taşınırken E-5 trafiği sorun olur mu?", answer: "Merter kavşağı sabah ve akşam zirve saatlerinde ağır ilerliyor. Biz de araç hareketini bu saatlere denk getirmiyoruz; yüklemeyi erken bitirip yolu daha rahat bir saatte açıyoruz. Böylece taşınma aynı gün kapanıyor." },
    ],
    nearby: ["bagcilar", "bahcelievler", "esenler", "zeytinburnu"],
  },
  {
    slug: "esenler",
    name: "Esenler",
    side: "Avrupa Yakası",
    intro:
      "Esenler, apartman yoğun yapısı ve otogara yakınlığıyla bilinen bir ilçedir. Esenler taşımalarında asansörlü ve sigortalı hizmet sunuyoruz.",
    neighborhoods: ["Menderes", "Oruçreis", "Fevzi Çakmak", "Havaalanı", "Birlik"],
    body: [
      "Esenler'de en çok karşılaştığımız iş, kentsel dönüşüm kaynaklı taşınmalar. Havaalanı, Menderes, Oruçreis ve Nine Hatun mahallelerinde bina bina yenilenme sürüyor; aileler önce eşyalarını çıkarıyor, sonra yeni yapı teslim edilene kadar bir yerde beklemek zorunda kalıyor. Bu işin nakliye kısmı kadar depolama kısmı da önemli. Eşyayı paketleyip listeleyerek depoya alıyoruz, teslim günü geldiğinde yeni daireye taşıyıp yerleştiriyoruz. Esenler evden eve nakliyat taleplerinin ciddi bir bölümü de aynı mahalle içinde, birkaç sokak ötesine yapılan kısa mesafe taşımalar oluyor.",
      "İlçenin eski yapı stoku beş yedi katlı apartmanlardan oluşuyor ve bunların çoğunda asansör eşya taşımaya elverişli değil. Sokaklar dar, birçok yerde eğimli. Mobil asansör kurmak için düz zemin bulmak yokuşlu sokaklarda kolay olmuyor; vincin ayakları dengeli basmazsa çalıştırmıyoruz, bu bir güvenlik meselesi. Böyle adreslerde ya cadde tarafına yakın bir noktadan çalışıyoruz ya da ekibi büyütüp merdivenden taşımaya geçiyoruz. Yeni yapılan sitelerde ise durum rahat: geniş giriş, düzgün otopark ve çoğunda kullanılabilir bir asansör.",
      "Ulaşım tarafında Esenler'in konumu güçlü. TEM ilçenin kuzeyinden, Basın Ekspres yolu batısından geçiyor; İstanbul'un her iki yakasına da hızlı çıkılıyor. Otogarın hemen yanı başında olmak ise gün içinde çevre yollarda ek yoğunluk demek. Sabah 07.30-09.30 arası TEM'in Mahmutbey gişeleri yönü tıkanıyor; taşıma aracını bu saatte yola çıkarmıyoruz. Kısa mesafeli mahalle içi taşımalarda bu bir sorun oluşturmuyor, o işleri gün içinde herhangi bir saatte yapabiliyoruz. Paketleme, asansörlü taşıma, ofis taşıma ve eşya depolama Esenler'in tüm mahallelerinde geçerli; taşınan eşya sigortalı.",
    ],
    notes: [
      { title: "Dönüşümde depolama", text: "Binası yıkılacak ailelerde eşya, yeni yapı teslim edilene kadar bekliyor. Eşyayı paketleyip listeleyerek depoya alıyor, teslim gününde yeni daireye taşıyıp yerleştiriyoruz." },
      { title: "Yokuşta vinç dengesi", text: "Eğimli sokaklarda mobil asansörün ayakları dengeli basmazsa vinci çalıştırmıyoruz. Bu adreslerde daha düz bir noktadan ya da merdivenden çalışıyoruz; güvenlikten taviz vermiyoruz." },
      { title: "Mahalle içi kısa taşıma", text: "Aynı mahallede birkaç sokak ötesine yapılan taşımalar Esenler'de çok yaygın. Bu işleri gün içinde esnek saatlerde, tek seferde bitiriyoruz." },
    ],
    faqs: [
      { question: "Kentsel dönüşüm için evden çıkıyorum, eşyamı depolayabilir misiniz?", answer: "Evet, eşya depolama veriyoruz. Eşyayı paketleyip listeleyerek depoya alıyoruz, siz yeni dairenizi teslim aldığınızda aynı ekiple taşıyıp yerleştiriyoruz. Süreyi ihtiyacınıza göre belirliyoruz." },
      { question: "Sokağım yokuşlu, mobil asansör kurulabilir mi?", answer: "Vincin ayaklarının dengeli basacağı bir zemin gerekiyor. Eğim çoksa cadde tarafına yakın uygun bir nokta arıyoruz. Bulunmazsa vinç kurmuyoruz, ekibi büyütüp merdivenden taşıyoruz. Güvenli olmayan kurulumu hiçbir koşulda yapmıyoruz." },
      { question: "Aynı mahalle içinde iki sokak ötesine taşınıyorum, bu iş için gelir misiniz?", answer: "Geliyoruz, Esenler'de en çok yaptığımız işlerden biri bu. Kısa mesafe olsa da eşya aynı özenle paketleniyor ve sigortalı taşınıyor. Mesafe kısa olduğu için genelde yarım gün içinde kapanıyor." },
      { question: "Otogar çevresindeki trafik taşımayı geciktirir mi?", answer: "Gün içinde çevre yollarda yoğunluk olabiliyor, özellikle sabah ve akşam saatlerinde. Mahalle içi taşımalarda bu bizi etkilemiyor. Başka ilçeye gidecek işlerde ise aracı zirve saatlerin dışında yola çıkarıp planı koruyoruz." },
    ],
    nearby: ["bagcilar", "bayrampasa", "gungoren", "gaziosmanpasa"],
  },
  {
    slug: "sultangazi",
    name: "Sultangazi",
    side: "Avrupa Yakası",
    intro:
      "Sultangazi, yoğun konut alanlarıyla İstanbul'un kalabalık ilçelerindendir. Sultangazi'de apartman taşımalarında asansörlü hizmetle hız kazandırıyoruz.",
    neighborhoods: ["Cebeci", "Habibler", "Gazi", "Esentepe", "50. Yıl"],
    body: [
      "Sultangazi'nin en belirleyici özelliği arazisi. Gazi Mahallesi, Cebeci, Habibler, Uğur Mumcu ve 50. Yıl hattında sokaklar hem dar hem dik. Bu, taşıma açısından iki ayrı zorluk demek: kamyonun sokağa girip manevra yapabilmesi ve mobil asansörün ayaklarını dengeli basabileceği düz bir zemin bulunması. Eğimli zeminde vinci çalıştırmıyoruz, bu bizim için tartışmaya kapalı bir kural. Sultangazi evden eve nakliyat işlerinde bu yüzden keşif, başka ilçelere göre daha çok işe yarıyor; sokağı görmeden söz vermek doğru olmuyor.",
      "Yapı stoku ağırlıklı olarak eski ve orta yaşlı apartmanlardan oluşuyor. Dört ila yedi kat arası binaların büyük bölümünde asansör ya yok ya da tek bir insanı alacak ölçüde. Cephe önü uygunsa mobil asansör kuruyoruz ve eşya balkondan doğrudan araca iniyor. Uygun değilse ekibi büyütüp merdivenden çalışıyoruz; süre uzuyor ama iş yine aynı gün bitiyor. Sultançiftliği ve Esentepe tarafındaki yeni sitelerde ise işler daha rahat ilerliyor, orada asıl mesele site yönetiminden gün ve saat izni almak.",
      "Cebeci sanayi bölgesi ilçenin ticari damarı. Buradaki atölye, imalathane ve depolardan gelen taşıma talepleri ev taşımasından farklı yürüyor: tezgâh, raf, makine ve stok taşınıyor, üretimin durmaması için genelde hafta sonu ya da akşam çalışılıyor. Şehirler arası yük taşımacılığı da bu bölgeden sık talep ediliyor. Ulaşım tarafında TEM ilçenin güney sınırına yakın; oraya çıkmak kolay ama iç yolların dar olması nedeniyle büyük araçla ana caddeye ulaşmak zaman alabiliyor. Sabah erken saatte yola çıkmak bu kaybı ortadan kaldırıyor. Paketleme, asansörlü taşıma, ofis taşıma ve eşya depolama hizmetleri ilçe genelinde geçerli, taşınan eşya sigortalı.",
    ],
    notes: [
      { title: "Eğimde vinç kurulumu", text: "Dik sokaklarda mobil asansörün ayakları dengeli basmalı. Uygun zemin bulunamayan adreslerde vinç kurmuyor, ekibi büyütüp merdivenden taşıyoruz." },
      { title: "Dar sokakta araç seçimi", text: "Habibler ve Gazi Mahallesi'nin bazı sokaklarına büyük kamyon girmiyor. Bu adreslerde küçük araçla ana caddeye aktarma yapıp oradan yüklüyoruz." },
      { title: "Cebeci sanayi taşıması", text: "Atölye ve depo taşımalarında tezgâh, raf ve stok taşınıyor. Üretimi aksatmamak için bu işleri akşam veya hafta sonu yapıyoruz." },
    ],
    faqs: [
      { question: "Sokağım dik, mobil asansör kurulabiliyor mu?", answer: "Vincin ayaklarının düz ve sağlam bir zemine basması gerekiyor. Eğim fazlaysa cephe boyunca uygun bir nokta arıyoruz. Bulamazsak vinç kurmuyoruz; ekibi büyütüp merdivenden taşıma yapıyoruz. Güvenli olmayan hiçbir kurulumu yapmıyoruz." },
      { question: "Asansörsüz 5 katlı binadan taşınıyorum, ne kadar sürer?", answer: "Cephe önü uygunsa mobil asansörle iş belirgin şekilde hızlanıyor ve standart bir daire aynı gün kapanıyor. Merdivenden taşımak gerekirse ekibi kalabalık tutup süreyi telafi ediyoruz. Eşya hacmini söylerseniz size gerçekçi bir süre veriyoruz." },
      { question: "Cebeci sanayideki atölyemi taşıtabilir miyim?", answer: "Evet. Tezgâh, raf, makine ve stoku söküp paketleyerek taşıyor, yeni adreste kuruyoruz. Üretiminizi durdurmamak için taşımayı hafta sonu ya da mesai dışı saatlere alıyoruz. Eşya sigortalı taşınıyor." },
      { question: "Habibler'deki dar sokaklara nakliye kamyonu girer mi?", answer: "Bazı sokaklara girmiyor. O adreslerde küçük araçla ana caddeye aktarma yapıyoruz, kamyonu orada yüklüyoruz. Adresi baştan söylerseniz hangi yöntemi kullanacağımızı önceden netleştirir, taşınma günü sürprizle karşılaşmazsınız." },
    ],
    nearby: ["gaziosmanpasa", "eyupsultan", "basaksehir", "arnavutkoy"],
  },
  {
    slug: "arnavutkoy",
    name: "Arnavutköy",
    side: "Avrupa Yakası",
    intro:
      "Arnavutköy; İstanbul Havalimanı'na yakınlığıyla hızla gelişen bir bölgedir. Hadımköy ve Taşoluk gibi semtlerde konut ve sanayi taşımaları yapıyoruz.",
    neighborhoods: ["Hadımköy", "Taşoluk", "Bolluca", "Haraççı", "Anadolu"],
    body: [
      "Arnavutköy yüzölçümü olarak İstanbul'un en geniş ilçelerinden ve bu, taşıma planını doğrudan etkiliyor. Merkez, Taşoluk, Bolluca, Haraççı ve Boğazköy'de kentsel yapı hâkimken, kuzeye çıktıkça Yassıören, Durusu ve Deliklikaya tarafında köy dokusu, müstakil evler ve bahçeli konutlar başlıyor. İki adres arasındaki mesafe ilçe içinde bile ciddi rakamlara ulaşabiliyor. Arnavutköy evden eve nakliyat işinde bu yüzden gün planı, eşya hacminden bağımsız olarak yol süresine göre kuruluyor; sabah erken başlamak neredeyse zorunlu.",
      "Merkez ve Taşoluk hattında beş sekiz katlı apartmanlar ağırlıkta; birçoğunda asansör eşya taşımaya uygun değil, cephe önü uygunsa mobil asansörle çalışıyoruz. Kırsal mahallelerdeki müstakil evlerde ise yükseklik sorun değil, hacim ve yol sorun. Bahçeden, kömürlükten, depodan çıkan eşya evin içindekiyle yarışıyor; köy yollarının bir kısmı dar ve kamyonun dönüş yapabileceği alan sınırlı. Bu adreslerde araç boyutunu küçültüp gerekiyorsa iki sefer planlamak, tek büyük araçla sıkışıp kalmaktan daha akıllıca oluyor.",
      "Hadımköy tarafı ilçenin sanayi yüzü. Depo, fabrika ve lojistik tesisleri burada yoğunlaşıyor; bu bölgeden gelen talepler ev taşımasından çok şehirler arası yük taşımacılığı ve ofis-depo taşıma oluyor. TEM ve Kuzey Marmara Otoyolu ilçenin içinden geçiyor, İstanbul Havalimanı da sınırlar içinde. Otoyol erişimi güçlü olduğu için şehir dışına çıkan yükler hızlı yola giriyor. Buna karşılık ilçe içindeki köy yolları ve bağlantı yolları aynı hızda değil; iç adreslere ulaşmak için gerçekçi süre payı bırakıyoruz. Sigortalı taşıma, paketleme ve eşya depolama ilçenin her mahallesinde geçerli, 7/24 ulaşabiliyorsunuz.",
    ],
    notes: [
      { title: "İlçe içi mesafe", text: "Arnavutköy geniş bir ilçe; merkez ile kuzey köyleri arası yol tek başına ciddi süre tutuyor. Randevuları buna göre erken saate alıyor, gün planını yol süresine göre kuruyoruz." },
      { title: "Köy yolu araç seçimi", text: "Bazı köy yolları dar ve kamyonun manevra alanı sınırlı. Bu adreslerde daha küçük araçla çalışıp gerekirse iki sefer yapıyoruz; tek büyük araçla sıkışmaktan iyisi bu." },
      { title: "Hadımköy depo taşıma", text: "Hadımköy'deki depo ve fabrikalardan gelen talepler ağırlıklı olarak yük taşımacılığı. Raf, stok ve makine taşınıyor, TEM ve Kuzey Marmara üzerinden şehir dışına çıkış hızlı." },
    ],
    faqs: [
      { question: "Kuzeydeki köy mahallelerine nakliye aracı çıkabiliyor mu?", answer: "Çıkıyor, ama bazı köy yollarında büyük kamyonun manevra alanı yetersiz kalıyor. O adreslerde daha küçük araçla çalışıyoruz. Adresi baştan verirseniz hangi araçla geleceğimizi netleştirip planı ona göre yapıyoruz." },
      { question: "Hadımköy'deki depomu taşıtabilir miyim?", answer: "Evet. Raf sistemleri, stok ve makine taşıması yapıyoruz. İşinizi aksatmamak için taşımayı mesai dışına ya da hafta sonuna alabiliriz. Şehir dışına gidecek yükler için de şehirler arası taşımacılık veriyoruz, eşya sigortalı." },
      { question: "Arnavutköy'den İstanbul'un merkezine taşınma tek günde biter mi?", answer: "Eşya hacmi standartsa biter. Kritik olan yola çıkış saati; yüklemeyi sabah erken bitirdiğimizde TEM üzerinden merkeze rahat ulaşıyoruz. Kuzey mahallelerinden çıkıyorsanız ilçe içi yol süresini de plana ekliyoruz." },
      { question: "Bahçeli müstakil evim var, ekip yetişir mi?", answer: "Ev, bahçe ve depo hacmini keşifte birlikte ölçüyoruz; ekip ve araç buna göre belirleniyor. Müstakil evlerde eşya çoğu zaman ilk tahminden fazla çıktığı için bu ölçüm önemli. Doğru planlandığında iş aynı gün kapanıyor." },
    ],
    nearby: ["basaksehir", "catalca", "eyupsultan", "sultangazi"],
  },
  {
    slug: "catalca",
    name: "Çatalca",
    side: "Avrupa Yakası",
    intro:
      "Çatalca; geniş alanı ve kentsel-kırsal karışık yapısıyla İstanbul'un en büyük yüzölçümlü ilçelerindendir. Çatalca merkez ve köylerine taşımalarda uzun yolu plana baştan ekliyoruz.",
    neighborhoods: ["Ferhatpaşa", "Kaleiçi", "Çakıl", "Çanakça", "Subaşı"],
    body: [
      "Çatalca, İstanbul'un kırsal karakterini koruyan ilçesi ve taşıma planı da buna göre kuruluyor. Merkezdeki Kaleiçi ve Ferhatpaşa çevresinde az katlı binalar, bunun dışında Ovayenice, Çiftlikköy, Subaşı, Binkılıç ve Karadeniz'e bakan Ormanlı, Yalıköy gibi köylerde müstakil, bahçeli evler var. Bu evlerde yükseklik sorun değil; asıl mesele hacim ve mesafe. Bahçe, depo, ahır ya da kömürlükten çıkan eşya çoğu zaman evin içindekinden fazla yer kaplıyor. Çatalca evden eve nakliyat işinde keşif yaparken evin dışını da ölçüyoruz, aksi halde araç boyutu yanlış çıkıyor.",
      "İlçenin şehir merkezine uzaklığı gün planını belirliyor. TEM üzerinden Çatalca çıkışına ulaşmak tek başına ciddi süre tutuyor; İstanbul'un içine yapılacak bir taşımada gidiş, yükleme, dönüş ve boşaltma zincirini tek güne sığdırmak için sabah erken yola çıkmak şart. Ekip bu yüzden Çatalca işlerine gün doğmadan hareket ediyor. Öğleden sonra başlayan bir taşıma, eşya az bile olsa akşamı buluyor ve boşaltma karanlıkta yapılmak zorunda kalıyor; biz bunu tercih etmiyoruz.",
      "Köy yolları bir başka detay. Bazı köylerde sokaklar dar, dönüş alanı sınırlı, yolun bir bölümü stabilize. Büyük kamyonun evin kapısına kadar girmesi her zaman mümkün değil; böyle adreslerde daha küçük araçla aktarma yapıyoruz. Yağışlı havalarda toprak ve stabilize yolların durumu değişebildiği için taşıma gününü hava durumuna göre esnetmek de bazen daha doğru oluyor. Merkeze ya da başka bir şehre taşınırken eşyanın bir bölümünü geçici olarak depolamak isteyenler için eşya depolama veriyoruz. Şehirler arası yük taşımacılığı, paketleme ve sigortalı taşıma Çatalca'nın tüm mahalle ve köylerinde geçerli.",
    ],
    notes: [
      { title: "Tam gün planı", text: "Çatalca merkeze uzak; gidiş, yükleme ve boşaltma tek güne sığması için sabah erken hareket ediyoruz. Öğleden sonra başlayan taşımalar akşamı buluyor." },
      { title: "Köy yolu ve araç", text: "Bazı köylerde yol dar, dönüş alanı sınırlı. Büyük kamyon kapıya yanaşamıyorsa küçük araçla aktarma yapıyoruz; bu, işi tıkanmadan yürütmenin en pratik yolu." },
      { title: "Bahçe ve depo hacmi", text: "Müstakil evlerde bahçe ve depo eşyası hesabı şaşırtıyor. Keşifte ev içiyle birlikte dışarısını da ölçüyoruz ki araç boyutu doğru seçilsin, ikinci sefer gerekmesin." },
    ],
    faqs: [
      { question: "Çatalca'dan İstanbul içine taşınma tek günde biter mi?", answer: "Sabah erken başlarsak biter. Mesafe uzun olduğu için gün planını yola göre kuruyoruz; ekip erken hareket ediyor, yükleme öğleden önce bitiyor ve boşaltmayı gün ışığında tamamlıyoruz. Eşya hacmi çok yüksekse ikinci araçla paralel çalışıyoruz." },
      { question: "Köyümün yolu dar, kamyon girebilir mi?", answer: "Bazı köy yollarına büyük kamyon giremiyor ya da dönüş yapamıyor. O adreslerde küçük araçla eve kadar gidip ana yoldaki kamyona aktarma yapıyoruz. Adresi verdiğinizde hangi yöntemle çalışacağımızı önceden söylüyoruz." },
      { question: "Bahçeli evim var, eşya çok. Kaç kişiyle geliyorsunuz?", answer: "Ekip sayısını hacme göre belirliyoruz. Bahçe mobilyası, depo ve tarım aletleri de hesaba katılıyor; bunlar ev içi eşya kadar yer tutabiliyor. Keşif sonrası kaç kişi ve hangi araçla geleceğimizi net söylüyoruz." },
      { question: "Çatalca'dan başka bir şehre taşınıyorum, yapıyor musunuz?", answer: "Evet, şehirler arası taşımacılık veriyoruz. Eşya paketlenip sigortalı şekilde varış şehrine götürülüyor. Yeni ev hazır değilse eşyayı bir süre depoda tutup siz hazır olduğunuzda teslim edebiliyoruz." },
    ],
    nearby: ["silivri", "arnavutkoy", "buyukcekmece"],
  },
  {
    slug: "silivri",
    name: "Silivri",
    side: "Avrupa Yakası",
    intro:
      "Silivri; sahil şeridi ve yazlık siteleriyle Marmara kıyısında yer alır. Silivri'de hem konut hem yazlık taşımalarını sigortalı olarak gerçekleştiriyoruz.",
    neighborhoods: ["Selimpaşa", "Gümüşyaka", "Değirmenköy", "Alibey", "Piri Mehmet Paşa"],
    body: [
      "Silivri, İstanbul'un en batı ucu ve merkeze olan mesafesi taşıma planının en belirleyici unsuru. Merkez, Alibey, Piri Mehmet Paşa ve Fatih mahallelerinde orta yükseklikte apartmanlar, sahil boyunca Selimpaşa, Gümüşyaka, Kavaklı ve Semizkumlar hattında ise yazlık kökenli siteler ve müstakil evler var. Bu sitelerin çoğu az katlı olduğu için mobil asansör her adreste gerekmiyor; buna karşılık merkez ve iç mahallelerdeki asansörsüz binalarda vinç işi belirgin şekilde hızlandırıyor. Silivri evden eve nakliyat işinde ilk konuştuğumuz şey bina tipi değil, saat planı oluyor.",
      "Sebep basit: İstanbul'un içine ya da tersine, şehir içinden Silivri'ye yapılan bir taşımada yol tek başına saatler yiyor. D-100 ve TEM üzerinden gelen araç, yüklemeye başlamadan önce zaten uzun bir mesafe kat etmiş oluyor. Bu yüzden ekip sabah çok erken yola çıkıyor, yükleme öğleden önce bitiyor ve boşaltma gün ışığında tamamlanıyor. Öğleden sonra başlayan taşımalar riskli; yaz aylarında D-100'ün sahil kesimi hafta sonları belirgin şekilde yavaşlıyor, o günlerde TEM'i tercih ediyoruz.",
      "Silivri'ye taşınan profil çoğunlukla sakin bir hayat arayan aileler ve yazlığını daimi konuta çeviren kişiler. Bu ikinci grupta eşyanın bir bölümü uzun süre kullanılmadığı için taşımadan önce ayıklama ve paketleme ihtiyacı çıkıyor; profesyonel paketleme hizmetini bu yüzden sık veriyoruz. Sezon dışında bazı sitelerde yönetim ve güvenlik sürekli bulunmuyor, taşıma günü giriş iznini önceden ayarlamak gerekiyor; yoksa ekip kapıda bekliyor. Eşyanız yeni eve tam sığmazsa ya da yeni ev henüz hazır değilse depolama veriyoruz. Şehirler arası taşımacılıkta da Silivri'nin konumu avantajlı, Tekirdağ yönü yolun üzerinde.",
    ],
    notes: [
      { title: "Erken çıkış zorunlu", text: "Silivri ile şehir merkezi arasındaki mesafe tek başına ciddi süre tutuyor. Ekip sabah çok erken yola çıkıyor ki yükleme öğleden önce bitsin, boşaltma gün ışığında tamamlansın." },
      { title: "Sezon dışı site girişi", text: "Yazlık sitelerde kış aylarında yönetim ve güvenlik her zaman bulunmuyor. Taşıma günü giriş iznini önceden ayarlıyoruz, ekip kapıda beklemiyor." },
      { title: "Yaz hafta sonu D-100", text: "Yaz aylarında sahil kesimindeki D-100 hafta sonları yavaşlıyor. O günlerde TEM üzerinden gidip yolda kaybedilen zamanı geri alıyoruz." },
    ],
    faqs: [
      { question: "Silivri'den İstanbul içine taşınma tek günde biter mi?", answer: "Sabah erken başlarsak biter. Yol uzun olduğu için ekip gün doğarken hareket ediyor, yükleme öğleden önce bitiyor ve boşaltmayı akşam olmadan tamamlıyoruz. Eşya hacmi çok yüksekse ikinci araçla aynı gün paralel çalışıyoruz." },
      { question: "Yazlık sitedeyim, kışın taşınıyorum. Site girişi sorun olur mu?", answer: "Sezon dışında yönetim ya da güvenlik kapıda olmayabiliyor. Taşıma gününü önceden bildirip giriş iznini ayarlıyoruz. Bu yapılmazsa ekip kapıda bekler ve gün boşa gider, o yüzden randevu alırken bunu mutlaka soruyoruz." },
      { question: "Merkezdeki binamda asansör yok, ne yapacaksınız?", answer: "Cephe önünde vinç kurulacak alan varsa mobil asansörle balkondan indirme yapıyoruz; en hızlı ve en güvenli yol bu. Sokak buna izin vermiyorsa ekibi büyütüp merdivenden taşıyoruz. Her iki durumda da eşya paketlenip sigortalı taşınıyor." },
      { question: "Uzun yıllardır kullanmadığım eşyalar var, paketleme yapıyor musunuz?", answer: "Yapıyoruz. Profesyonel paketleme verdiğimiz hizmetlerden biri; kırılacak eşya, tablo, cam ve elektronik ayrı korumaya alınıyor. Yazlıktan daimi eve geçişte bu ihtiyaç sık çıkıyor, kutuları etiketleyerek yeni evde yerleştirmeyi kolaylaştırıyoruz." },
    ],
    nearby: ["catalca", "buyukcekmece", "beylikduzu"],
  },
  {
    slug: "kadikoy",
    name: "Kadıköy",
    side: "Anadolu Yakası",
    intro:
      "Kadıköy; Moda, Caddebostan ve Göztepe gibi sevilen semtleriyle Anadolu yakasının merkezidir. Yoğun apartman dokusu ve trafiği nedeniyle Kadıköy'de asansörlü ve planlı taşıma en güvenli yöntemdir.",
    neighborhoods: ["Moda", "Caddebostan", "Fenerbahçe", "Göztepe", "Kozyatağı", "Bostancı"],
    body: [
      "Kadıköy, Anadolu Yakası'nın en talepkar taşıma bölgelerinden. Aynı ilçenin içinde Yeldeğirmeni'nin yüz yıllık, asansörsüz apartmanları da var, Fikirtepe'nin yeni yükselen kuleleri de. Moda, Caferağa, Rasimpaşa ve Yeldeğirmeni hattında sokaklar dar, çoğu tek yön, park yeri sıfıra yakın. Bu mahallelerde işi belirleyen şey binanın kaçıncı katı olduğu değil, kamyonun kapıya yanaşıp yanaşamayacağı. Kadıköy evden eve nakliyat işinde bu yüzden taşımadan bir gün önce sokağı görmeyi ve cephe önünde vinç için yer ayırtmayı standart hale getirdik.",
      "Bağdat Caddesi ve çevresinde başka bir düzen işliyor. Cadde üzerindeki binalarda park ve durma kısıtı sıkı, çift park cezalı; taşıma aracını uzun süre cadde üzerinde bırakmak mümkün değil. Bu adreslerde çoğu binanın arka sokağı kullanılıyor ya da yükleme saati sabahın erken saatine çekiliyor. Suadiye, Erenköy, Göztepe ve Sahrayıcedit'te ise bahçeli, az katlı apartmanlar yaygın; oralarda vinç kurmak genelde rahat, asıl mesele eşya hacmi. Fikirtepe ve Kozyatağı'ndaki yeni kulelerde ise mesele yeniden yüksekliğe dönüyor: yük asansörü rezervasyonu ve site yönetim izni olmadan işe başlamak zaman kaybı.",
      "Avrupa Yakası'ndan Kadıköy'e taşınacaksanız, işin yarısı geçişte bitiyor. Sabah 07.00-10.00 ile akşam 16.30-20.00 arasında köprüler ve Avrasya Tüneli ağır ilerliyor. Kağıthane'deki merkezimizden çıkan araç bu saatlerde yola girerse yüklemeye başlamadan zaman kaybediyor; biz de araç hareketini bu aralıkların dışına planlıyoruz. D-100 ve sahil yolu arasında geçiş yaparak trafiğe göre rota değiştiriyoruz. Kadıköy'de ofis ve iş yeri taşıma da yoğun; bu işleri hafta sonuna ya da mesai dışına alıp iş akışını bozmuyoruz. Paketleme, asansörlü taşıma, sigortalı nakliye ve eşya depolama ilçenin tüm mahallelerinde geçerli, 7/24 ulaşabiliyorsunuz.",
    ],
    notes: [
      { title: "Moda ve Yeldeğirmeni", text: "Dar, tek yönlü sokaklarda park yeri neredeyse yok. Taşımadan bir gün önce sokağı görüp cephe önünde vinç için yer ayırtıyoruz, aksi halde araç kapıya yanaşamıyor." },
      { title: "Bağdat Caddesi kısıtı", text: "Cadde üzerinde uzun süre durmak mümkün değil, çift park cezalı. Bu adreslerde arka sokağı kullanıyor ya da yüklemeyi sabahın erken saatine alıyoruz." },
      { title: "Köprü ve tünel saati", text: "Avrupa Yakası'ndan gelen taşımalarda geçiş saati her şeyi belirliyor. Zirve saatlerin dışında yola çıkıp yükleme ve boşaltmayı aynı güne sığdırıyoruz." },
    ],
    faqs: [
      { question: "Moda ve Yeldeğirmeni'nin dar sokaklarına büyük araç giriyor mu?", answer: "Bazı sokaklara giremiyor, girse bile kapıya yanaşamıyor. O adreslerde küçük araçla ana caddeye aktarma yapıyoruz ya da baştan küçük araçla çalışıyoruz. Sokağı önceden görüp hangi yöntemi kullanacağımızı size net söylüyoruz." },
      { question: "Bağdat Caddesi üzerindeyim, taşıma aracı nereye park edecek?", answer: "Cadde üzerinde uzun süre durmak cezalı ve pratik değil. Binanızın arka sokağı uygunsa oradan çalışıyoruz. Değilse yüklemeyi sabahın erken saatine alıp caddenin en boş olduğu zaman diliminde bitiriyoruz." },
      { question: "Yeldeğirmeni'ndeki eski apartmanda asansör yok, nasıl indireceksiniz?", answer: "Sokakta vinç kurulacak alan çıkarsa mobil asansörle balkondan indiriyoruz. Bu tarihi binalarda merdivenler dar ve dönüşlü olduğu için vinç ciddi fark yaratıyor. Alan çıkmazsa kalabalık ekiple elle taşıyoruz, mobilyaları gerekiyorsa sökerek indiriyoruz." },
      { question: "Avrupa Yakası'ndan Kadıköy'e taşınma tek günde biter mi?", answer: "Biter, ama geçiş saati kritik. Sabah zirve saatinde yola çıkan araç köprüde ya da tünelde zaman kaybediyor. Yüklemeyi erken bitirip geçişi yoğunluk düşükken yapıyoruz; böylece boşaltma akşam olmadan tamamlanıyor." },
    ],
    nearby: ["uskudar", "atasehir", "maltepe"],
  },
  {
    slug: "uskudar",
    name: "Üsküdar",
    side: "Anadolu Yakası",
    intro:
      "Üsküdar; Çengelköy ve Kuzguncuk'un tarihi dokusuyla Altunizade'nin modern yapılarını birleştirir. Dar sokaklı semtleri nedeniyle Üsküdar taşımalarında uygun araç ve mobil asansör önem taşır.",
    neighborhoods: ["Çengelköy", "Kuzguncuk", "Acıbadem", "Altunizade", "Beylerbeyi"],
    body: [
      "Üsküdar'da taşınma aslında iki farklı işe benziyor. Sahil hattında Kuzguncuk, Beylerbeyi ve Çengelköy var: yüz yıllık ahşap evler, tek şeride düşen sokaklar, kapı önüne dizilmiş araçlar. Yukarı çıktığınızda Altunizade, Acıbadem, Bulgurlu ve Ünalan başlıyor; burada konu yüksek katlı rezidanslar, güvenlikli siteler ve yük asansörü oluyor. Bir de Salacak, Şemsipaşa ve Ahmediye gibi eski merkez mahalleler var; oralarda hem bina hem sokak dar. Üsküdar evden eve nakliyat için teklif verirken ilk sorduğumuz şey bu yüzden hangi mahalle olduğu. Aynı ilçenin iki ucunda tamamen farklı araç, farklı ekipman ve farklı saat planı gerekiyor. Ekip, yükleme yapılacak sokağın genişliğini bilmeden yola çıkmıyor.",
      "Kuzguncuk ve Çengelköy'ün ara sokaklarına büyük kamyon sokmak çoğu zaman mümkün değil. Bu adreslerde küçük kasalı araçla çalışıp yükü ana caddede bekleyen büyük araca aktarıyoruz. Eski evlerin merdiven boşlukları dar; gardırop, yatak başlığı ya da üç kişilik koltuk merdivenden dönmüyor. Ahşap evlerde zemini ve basamakları koruyucu örtüyle kaplayıp öyle başlıyoruz. Mobil asansör kurmak için sokakta yeterli açı ve düzgün bir zemin gerekiyor, o yüzden ekibimiz taşınma gününden önce adresi görmeyi tercih ediyor. Asansör kurulamayan yerlerde eşyayı söküp kapı ve pencere ölçüsüne göre parça parça indiriyoruz. Kimi sokakta aracın bir süreliğine yolu kapatması gerekiyor; bunu komşularla önceden konuşmak gün içinde tartışma çıkmasını engelliyor.",
      "Altunizade ve Acıbadem tarafında iş daha çok yönetimle. Çoğu sitede taşınma için önceden randevu alınıyor, yük asansörü belirli saatlerde kullanılabiliyor, girişte araç kaydı isteniyor; bazı bloklarda kamyon kapalı otoparka giremediği için asansörü dışarıya kurmak gerekiyor. Bu yazışmayı ve saat ayarını sizin adınıza biz yürütüyoruz. Üsküdar iskelesi çevresindeki eski binalarda ise otopark neredeyse hiç yok; aracı yükleme boyunca bina önünde tutabilmek için komşularla ve esnafla önceden konuşmak gerekiyor. Trafik tarafında sahil yolu ile köprü bağlantısı sabahın ilerleyen saatlerinde ağırlaşıyor; Avrupa Yakası'na geçecek bir taşınmada kaybedilen iki saat, günün sonunda ikinci sefer demek. Bu yüzden işe erken başlıyoruz. Altunizade çevresindeki ofisleri genelde hafta sonuna alıyoruz. Paketleme, asansörlü taşıma ve sigortalı nakliye Üsküdar'ın her mahallesinde geçerli; 0533 929 83 24'ü arayıp adresi söylerseniz ekip planını çıkarıp gerçek bir teklif veriyoruz.",
    ],
    notes: [
      { title: "Dar sokak, küçük araç", text: "Kuzguncuk, Çengelköy ve Beylerbeyi'nin sokakları büyük kamyona uygun değil. Bu adreslerde küçük araçla çalışıp yükü ana caddede aktarıyoruz. Sokak trafiği kilitlenmiyor, taşıma da aksamıyor." },
      { title: "Asansör keşfi şart", text: "Yokuşlu sokaklarda mobil asansör her noktaya kurulmuyor; eğim ve zemin uygun olmalı. Ekibimiz taşınmadan önce adresi görüp asansörün nereye kurulacağına karar veriyor." },
      { title: "Site randevusu", text: "Altunizade ve Acıbadem'deki sitelerde yük asansörü için önceden saat ayırtmak gerekiyor. Yönetimle görüşmeyi ve araç kaydını biz yapıyoruz, siz sadece kapıyı açıyorsunuz." },
    ],
    faqs: [
      { question: "Kuzguncuk ve Çengelköy'ün dar sokaklarına nakliye aracı girebiliyor mu?", answer: "Büyük kamyonla çoğu sokağa girilmiyor, doğru. Biz bu adreslerde küçük kasalı araçla çalışıyoruz; eşya ana caddede bekleyen büyük araca aktarılıyor. Böylece hem sokak kapanmıyor hem taşıma güvenli ilerliyor." },
      { question: "Üsküdar'ın yokuşlu sokaklarında mobil asansör kurulabiliyor mu?", answer: "Çoğu adreste kurulabiliyor ama şartı var: asansör aracının dengeli duracağı bir zemin ve binaya uygun bir açı gerekiyor. Bulgurlu, Kısıklı ve Çengelköy'ün eğimli sokaklarında bakmadan söz vermiyoruz. Ekip keşifte kurulup kurulamayacağını net söylüyor." },
      { question: "Altunizade'deki sitelerde taşınma için saat kısıtı var mı?", answer: "Sitelerin çoğunda var. Genelde hafta içi mesai saatleri içinde ve önceden randevuyla taşınma yapılıyor, bazı yerlerde hafta sonu izni çıkmıyor. Site yönetimiyle görüşüp uygun günü ayarlamak işimizin parçası." },
      { question: "Üsküdar'dan Avrupa Yakası'na taşınma aynı gün biter mi?", answer: "Standart bir daire için evet, aynı gün bitiriyoruz. Şartı erken başlamak: köprü ve sahil yolu sabah tıkanınca tek sefer bile iki saat yiyor. Yükleme sabahın ilk saatlerinde biterse öğleden sonra karşı yakada boşaltmaya geçiyoruz." },
    ],
    nearby: ["kadikoy", "atasehir", "umraniye", "beykoz"],
  },
  {
    slug: "atasehir",
    name: "Ataşehir",
    side: "Anadolu Yakası",
    intro:
      "Ataşehir; Batı Ataşehir'in finans merkezi ve modern siteleriyle Anadolu yakasının yükselen ilçesidir. Yüksek katlı binalarda asansörlü taşıma Ataşehir için idealdir.",
    neighborhoods: ["Barbaros", "Batı Ataşehir", "İçerenköy", "Küçükbakkalköy", "Ferhatpaşa"],
    body: [
      "Ataşehir'i tek parça bir ilçe gibi düşünmek yanıltıyor. Batı Ataşehir'de finans merkezinin kuleleri, Barbaros ve Küçükbakkalköy'de yirmi katı geçen rezidanslar, geniş bulvarlar var; buralarda araç yanaştırmak kolay, asıl iş binanın içinde başlıyor. Ferhatpaşa, İçerenköy ve Yenişehir tarafı ise çok daha eski: beş altı katlı apartmanlar, iç sokaklarda çift sıra park, kimi binada asansör bile yok. İki bölge arasında sadece yol değil, taşınma günü yaşanan sorunlar da farklı. Ataşehir evden eve nakliyat işi bu yüzden adrese göre baştan kurgulanıyor. Kule tarafında ana mesele izinler ve yük asansörünün ölçüsü; eski mahallelerde ise araç nereye yanaşacak, eşya nereden inecek.",
      "Yüksek katlı sitelerde taşınma günü belirlemek tek başına yetmiyor. Site yönetimi önceden bildirim, araç plakası ve saat aralığı istiyor; yük asansörünün kapı ölçüsü belli, kabini de sınırlı. Üç kapılı gardırop ya da büyük bir köşe koltuk çoğu zaman o kabine girmiyor. Böyle durumlarda ya eşyayı söküyoruz ya da balkon uygunsa mobil asansörle indiriyoruz. Yirminci katın üstünde her sefer daha uzun sürdüğü için ekibi büyütüyor, kutuları asansör sırasına göre hazırlıyoruz. Kimi rezidansta taşınma yalnızca belirli günlerde yapılabiliyor; bu takvimi öğrenmeden gün sözü vermek doğru olmuyor. Hangi yöntemin daha hızlı olacağını ölçüye bakmadan söylemiyoruz; keşifte kat, balkon ve asansör ölçüsü alınıyor, ekip ile ekipman ona göre çıkıyor.",
      "İçerenköy ve Küçükbakkalköy'ün ara sokaklarında iş manevraya dönüyor. Sokaklar dar, gün ortasında bina önleri doluyor; kamyonu yanaştırmak için sabahın erken saatlerini seçiyoruz. Bu mahallelerdeki eski apartmanların çoğunda asansör küçük, o yüzden mobil asansör ilk seçenek oluyor. Barbaros tarafında ise otopark meselesi var; kamyona yer açmak için güvenlikle önceden konuşuyoruz. Ataşehir'in bir avantajı da konumu: TEM ile E-5'in kesiştiği noktada olduğu için hem Anadolu Yakası içinde hem Avrupa'ya taşınmalarda yolda kaybedilen zaman az; şehir dışına yük çıkarken de aynısı geçerli. Finans merkezi çevresindeki ofis taşımalarını çalışma düzenini bozmamak için genelde hafta sonuna alıyoruz; cuma akşamı sökülen ofis pazartesi sabahı çalışır halde oluyor. Eşyanız yeni adres hazır olana kadar depoda bekleyebiliyor. Paketleme, asansörlü taşıma ve sigorta her iki iş için de standart.",
    ],
    notes: [
      { title: "Yük asansörü ölçüsü", text: "Rezidansların yük asansörü her eşyayı almıyor. Gardırop, koltuk ve büyük beyaz eşyayı ölçüyor, sığmıyorsa mobil asansöre geçiyoruz." },
      { title: "Site izni ve saat", text: "Batı Ataşehir ve Barbaros'taki sitelerde taşınma için yönetim onayı gerekiyor. Bildirim, plaka kaydı ve saat ayarlaması bizde; siz sadece günü onaylıyorsunuz." },
      { title: "Hafta sonu ofis taşıma", text: "Finans merkezi çevresindeki ofisleri cuma akşamı toplayıp pazar günü kuruyoruz. Kablolar etiketleniyor, masa düzeni yeni adreste aynı şekilde kuruluyor." },
    ],
    faqs: [
      { question: "Batı Ataşehir'deki rezidanslarda taşınma için site yönetiminden izin gerekiyor mu?", answer: "Neredeyse hepsinde gerekiyor. Yönetim taşınma gününü, araç plakasını ve saat aralığını önceden bilmek istiyor; bazı sitelerde yük asansörü için depozito da alınıyor. Bu görüşmeleri biz yapıyoruz, size günü onaylamak kalıyor." },
      { question: "Yirminci kattaki daireden gardırop nasıl indiriliyor?", answer: "Önce yük asansörünün kapı ve kabin ölçüsüne bakıyoruz. Sığıyorsa asansörle, sığmıyorsa gardırop sökülüyor; balkon uygunsa mobil asansör de bir seçenek. Kararı ölçüye bakmadan vermiyoruz, keşif bu yüzden önemli." },
      { question: "İçerenköy'ün dar sokaklarına kamyon yanaşabiliyor mu?", answer: "Sokak boşsa yanaşıyor. Sıkıntı park eden araçlar; öğleden sonra yer bulmak zorlaşıyor. Bu yüzden İçerenköy ve Küçükbakkalköy adreslerinde işi sabah erken başlatıyoruz." },
      { question: "Ataşehir'deki ofisimi hafta sonu taşıyabilir misiniz?", answer: "Evet, ofislerin çoğunu hafta sonu taşıyoruz. Cuma akşamı sökme ve paketleme, cumartesi nakil, pazar kurulum şeklinde ilerliyoruz. Bilgisayarlar ve dosyalar etiketli kutulara giriyor, yeni adreste aynı düzenle yerleşiyor." },
    ],
    nearby: ["kadikoy", "umraniye", "uskudar", "maltepe"],
  },
  {
    slug: "umraniye",
    name: "Ümraniye",
    side: "Anadolu Yakası",
    intro:
      "Ümraniye; yoğun konut ve iş bölgeleriyle Anadolu yakasının kalabalık ilçelerindendir. Ümraniye taşımalarında asansörlü ve sigortalı hizmetle eşyalarınızı koruyoruz.",
    neighborhoods: ["Çakmak", "Atakent", "Site", "Tatlısu", "İnkılap"],
    body: [
      "Ümraniye büyük ve engebeli bir ilçe. Çakmak ile Atakent'te son yılların site projeleri sıralanırken, Yamanevler, İnkılap ve Tatlısu tarafında hâlâ seksenlerden kalma beş altı katlı apartmanlar duruyor. Aynı caddede asansörlü yeni blokla asansörsüz eski apartman yan yana durabiliyor; bu yüzden telefonda konuşmak çoğu zaman yetmiyor, adresi görmek gerekiyor. Eski binaların bir kısmında asansör yok, olanların kabini de bir buzdolabını zor alıyor. Ümraniye evden eve nakliyat çağrılarının büyük bölümü bu yüzden mobil asansörle çözülüyor. Eşyayı merdivenden indirmeye çalışmak hem duvarı hem eşyayı yıpratıyor, üstelik günü boşuna uzatıyor. Kaçıncı kat, asansör var mı, balkon nereye bakıyor gibi soruları baştan sormamızın sebebi bu.",
      "İlçenin ara sokakları dar ve yokuşlu. Alemdağ Caddesi gibi ana arterlerden içeri girdiğinizde iki araç yan yana zor geçiyor, gün ortasında bina önü tamamen doluyor. Ekip sabah erken geldiğinde hem kamyonu doğru noktaya yanaştırıyor hem asansörü rahat kuruyor. Eğimli sokaklarda asansör aracının dengeli durması önemli; ekip adrese varır varmaz kurulum yerini belirliyor, gerekirse aracı birkaç metre öteye çekiyor. Sokak iyice darsa küçük araçla mekik yapıp yükü caddedeki büyük araca aktarıyoruz. Kışın yağmurlu havada yokuşlu sokaklarda çalışmak ayrıca dikkat istiyor; eşyalar streçlenip ıslanmadan araca alınıyor. Komşuları uzun süre rahatsız etmemek için de işi öğleye kalmadan bitirmeye bakıyoruz.",
      "Ümraniye'nin diğer yüzü Dudullu. Küçük ve Yukarı Dudullu'daki sanayi sitelerinde atölye, depo ve ofis taşımaları var; burada iş ev taşımasından farklı yürüyor. Makineler ve raf sistemleri sökülüyor, ağır parçalar için uygun araç seçiliyor, yükleme sırası önceden çıkarılıyor ki yeni adreste kurulum aksamadan ilerlesin. Ofis taşımalarında bilgisayarlar ve dosyalar etiketli kutulara giriyor, yeni adreste aynı düzenle yerleştiriliyor; pazartesi sabahı kimse kutular arasında dosya aramıyor. Üretim durmasın diye çoğu zaman hafta sonu çalışıyoruz. TEM'in Ümraniye kavşağı buraya çok yakın olduğu için şehir içi taşımalarda da şehirler arası yük taşımacılığında da yol avantajı çıkıyor. Eşyanız bir süre bekleyecekse depolama tarafında da çözüm üretiyoruz: eşya listeleniyor, paketlenip depoya alınıyor, siz hazır olunca teslim ediliyor.",
    ],
    notes: [
      { title: "Asansörsüz apartman", text: "Yamanevler ve İnkılap çevresinde asansörsüz beş kat çok yaygın. Bu adreslerde mobil asansör hem eşyayı hem günü kurtarıyor." },
      { title: "Yokuşlu ara sokak", text: "Eğimli sokakta asansör aracının dengeli durması şart. Ekip adrese varır varmaz kurulum noktasını seçiyor, sonra yüklemeye başlıyor." },
      { title: "Dudullu sanayi", text: "Küçük ve Yukarı Dudullu'da atölye ve depo taşımalarını hafta sonuna alıyoruz. Raf ve makine sökümü yapılıyor, ağır yük uygun araçla taşınıyor." },
    ],
    faqs: [
      { question: "Ümraniye'de asansörsüz binadan taşınma nasıl yapılıyor?", answer: "Mobil asansörle. Aracı bina önüne kuruyoruz, eşya balkondan ya da pencereden platforma alınıp iniyor. Beş kat merdiven inip çıkmaya göre çok daha hızlı, eşya da çizilmiyor." },
      { question: "Dudullu'daki atölyemi hafta sonu taşıyabilir misiniz?", answer: "Evet, sanayi taşımalarının çoğunu hafta sonu yapıyoruz. Raflar ve makineler sökülüp uygun araca yükleniyor, yeni adreste aynı düzende kuruluyor. Üretiminiz pazartesi sabahı kaldığı yerden devam ediyor." },
      { question: "Çakmak ve Atakent'teki sitelerde taşınma saati sınırlı mı?", answer: "Çoğu sitede taşınma hafta içi belirli saatlerde yapılıyor ve yönetime önceden haber vermek gerekiyor. Yük asansörü varsa onu da ayırtmak lazım. Bu görüşmeleri biz yapıp size uygun günü kesinleştiriyoruz." },
      { question: "Ümraniye'den şehir dışına eşya taşıyor musunuz?", answer: "Taşıyoruz. TEM kavşağına yakınlık işi kolaylaştırıyor, Anadolu yönüne çıkış hızlı oluyor. Eşyalar paketlenip sigortalı şekilde yükleniyor, çıkış ve varış saatlerini önceden konuşuyoruz." },
    ],
    nearby: ["uskudar", "atasehir", "cekmekoy", "sancaktepe"],
  },
  {
    slug: "maltepe",
    name: "Maltepe",
    side: "Anadolu Yakası",
    intro:
      "Maltepe; sahil hattı ve siteleriyle Anadolu yakasının gözde konut bölgelerindendir. Maltepe'de yüksek katlı sitelerde asansörlü taşıma tercih edilir.",
    neighborhoods: ["Bağlarbaşı", "Cevizli", "Küçükyalı", "İdealtepe", "Fındıklı"],
    body: [
      "D-100 Maltepe'yi ikiye bölüyor ve taşınma işi de bu çizginin hangi tarafında olduğunuza göre değişiyor. Sahil tarafında Küçükyalı, İdealtepe, Cevizli ve Yalı var: yeni siteler, asansörlü binalar, düzgün caddeler. Yukarı çıkınca Zümrütevler, Başıbüyük, Gülsuyu ve Gülensu başlıyor; dik yokuşlar, dar sokaklar, kapıya zor yanaşan araçlar. Aynı ilçede, birbirine on dakika uzaklıkta iki ayrı taşıma senaryosu. Maltepe'ye taşınanların önemli kısmı Kadıköy tarafından geliyor; sahil hattı hâlâ ilçenin en çok tercih edilen yeri. Maltepe evden eve nakliyat planını çıkarırken önce adresin bu iki bölgeden hangisine düştüğüne bakıyoruz; araç, ekip ve ekipman buna göre belirleniyor.",
      "Yamaç mahallelerde işin zorluğu eğim. Kamyonu bina önüne yanaştırmak bazen mümkün olmuyor; olduğunda da mobil asansörün dengeli kurulabileceği düz bir alan aramak gerekiyor. Böyle adreslerde küçük araçla mekik yapıp yükü uygun bir noktada büyük araca aktarıyoruz. Bazı sokaklarda kamyonun geri geri girmesi gerekiyor, bu tek başına yarım saat demek; ekip bunu bilerek geliyor ve bir kişi trafiği yönlendiriyor. Eski binaların merdivenleri dar, sahanlıkları küçük; büyük eşyaları söküp taşımak çoğu zaman tek yol. Yağmurlu havada bu sokaklarda çalışmak ayrıca dikkat istiyor, eşyayı streçle sarıp ıslanmasını engelliyoruz. Bu detaylar teklif aşamasında konuşulmazsa taşınma günü sürprize dönüşüyor.",
      "Sahil hattındaki sitelerde tablo tersine dönüyor: bina modern, yük asansörü var ama yönetimden randevu almadan araç içeri giremiyor. Taşınma saatleri sınırlı, güvenlik girişte kayıt tutuyor, bazı sitelerde kamyonun kapalı otoparka girmesi yasak. Bunları önceden ayarlıyoruz. Eşya asansörden geçmiyorsa balkon kullanılıyor; balkon kapalıysa söküm yapılıyor. Trafik tarafında D-100'ün sabah ve akşam saatlerindeki Maltepe geçişi iyice ağırlaşıyor; Kadıköy ya da Ataşehir yönüne bir taşınmada iki sefer yapılacaksa erken başlamak gün sonunu kurtarıyor. Marmaray ve metro yolcuyu rahatlatıyor ama eşya için tek yol karayolu, o yüzden saat planı her şeyi belirliyor. Yeni ev hazır olmadığında eşyalar listelenip depoya alınıyor, siz hazır olduğunuzda teslim ediliyor. Paketleme, asansörlü taşıma ve sigorta ilçenin her mahallesinde geçerli. Adresi ve kat bilgisini iletirseniz hangi araçla, hangi ekipmanla geleceğimizi aynı gün söylüyoruz.",
    ],
    notes: [
      { title: "Yokuş ve dar sokak", text: "Başıbüyük, Gülsuyu ve Zümrütevler'de büyük araç kapıya yanaşamıyor. Küçük araçla mekik yapıp yükü uygun bir noktada aktarıyoruz." },
      { title: "Sahilde site kuralı", text: "Küçükyalı ve İdealtepe'deki sitelerde araç girişi randevuya bağlı. Yönetimle saat ayarlamasını biz yapıyoruz, kapıda beklemek zorunda kalmıyorsunuz." },
      { title: "D-100 saatleri", text: "Sabah ve akşam E-5'in Maltepe geçişi ağır ilerliyor. İşi erken saatte başlatıp ikinci seferi trafiğe denk getirmiyoruz." },
    ],
    faqs: [
      { question: "Başıbüyük ve Gülsuyu'nun yokuşlarına nakliye kamyonu çıkabiliyor mu?", answer: "Her sokağa değil. Bu mahallelerde çoğu zaman küçük araçla çalışıp yükü aşağıda büyük araca aktarıyoruz. Adresi tarif ederseniz sokağın durumuna bakıp hangi aracın çıkacağını önceden söylüyoruz." },
      { question: "Zümrütevler'de mobil asansör kurulabilir mi?", answer: "Genelde kurulabiliyor ama sokağın eğimi belirleyici. Asansör aracının dengeli durabileceği bir zemin gerekiyor; çok dik noktalarda kurulum yapılamıyor. Ekip keşifte bunu net söylüyor, taşınma sabahına sürpriz bırakmıyoruz." },
      { question: "Maltepe sahilindeki siteye taşınırken ne kadar önceden haber vermeliyim?", answer: "Site yönetimlerinin çoğu birkaç gün önceden bildirim istiyor, bazıları taşınmayı belirli günlere sınırlıyor. Bize erken haber verirseniz yönetimle konuşup uygun günü ayırtırız. Böylece taşınma sabahı kapıda beklemezsiniz." },
      { question: "Maltepe içinde ev değiştiriyorum, tek günde biter mi?", answer: "İlçe içi taşımaların büyük kısmı aynı gün bitiyor. Süreyi kat, asansör durumu ve eşya miktarı belirliyor. Sabah erken başlarsak akşam olmadan yeni evde kurulum tamamlanıyor." },
    ],
    nearby: ["kadikoy", "atasehir", "kartal", "sancaktepe"],
  },
  {
    slug: "kartal",
    name: "Kartal",
    side: "Anadolu Yakası",
    intro:
      "Kartal; yüksek katlı yeni konut projeleri ve sahiliyle hızla gelişen bir ilçedir. Kartal taşımalarında asansörlü hizmetle güvenli ve hızlı çözümler sunuyoruz.",
    neighborhoods: ["Soğanlık", "Yakacık", "Cevizli", "Orhantepe", "Kordonboyu"],
    body: [
      "Kartal'ın silueti son on yılda değişti. Kordonboyu ve Soğanlık'ta eski sanayi arazilerinin yerine yirmi otuz katlı rezidanslar dikildi, sahil hattı baştan aşağı yenilendi. Bunun hemen yanında Yakacık, Karlıktepe ve Atalar tarafında eski apartman dokusu duruyor: dar sokaklar, yokuşlar, asansörsüz binalar. İlçeye taşınanların çoğu daha büyük ve yeni bir daireye geçiyor; bu da hem eski hem yeni adreste ayrı bir plan demek. Kartal evden eve nakliyat işi bu iki dünya arasında gidip geliyor. Kule tarafında yük asansörü ve site izinleri konuşuluyor; yukarı mahallelerde ise mobil asansör, araç manevrası ve sokakta yer bulma derdi. Adres netleşmeden araç ve ekip belirlemiyoruz, çünkü ikisi için gereken ekipman aynı değil.",
      "Yüksek katlı rezidanslarda asansör tek başına çözüm değil. Yük asansörünün kabin ölçüsü belli; iki kapılı gardırop ya da büyük bir yemek masası çoğu zaman içeri girmiyor. Kat yükseldikçe her sefer daha çok zaman alıyor, o yüzden ekibi büyütüp kutuları asansör sırasına göre hazırlıyoruz; kat çok yüksekse ikinci bir ekip çıkarıp süreyi kısaltıyoruz. Balkon uygunsa mobil asansörle çalışmak çok daha hızlı ilerliyor; eşya doğrudan platformdan iniyor, bina içi trafiği kilitlenmiyor. Site yönetimleri taşınma günü için önceden bildirim, plaka kaydı ve saat aralığı istiyor, bazı sitelerde hafta sonu taşınmaya izin verilmiyor. Takvimi öğrenmeden gün sözü vermiyor, bu yazışmayı biz yürütüyoruz.",
      "Yakacık ve Karlıktepe'de mesele bambaşka. Sokaklar dar, eğim var, gün içinde bina önü doluyor. İşi sabah erken başlatıp aracı doğru noktaya yanaştırmak günün yarısını kurtarıyor. Eski binaların çoğunda asansör yok ya da kabini tek kişilik; mobil asansör bu adreslerde neredeyse zorunlu. Sahil yolu üzerindeki taşımalarda ise park yeri sorun oluyor; aracı bina önünde tutabilmek için erken geliyoruz. Kartal'ın konumu bir avantaj: E-5 ve sahil yolu ilçenin içinden geçiyor, Anadolu Yakası içindeki taşımalarda yol sorun olmuyor. Ama sabah saatlerinde E-5'in Kartal geçişi ağırlaşıyor; Kadıköy ya da Avrupa Yakası'na taşınmada erken çıkış şart. Paketleme malzemesini biz getiriyoruz, kutu derdine girmiyorsunuz. Sigortalı taşıma ve eşya depolama ilçenin her mahallesinde veriliyor.",
    ],
    notes: [
      { title: "Rezidans yük asansörü", text: "Kordonboyu ve Soğanlık'taki yüksek bloklarda yük asansörünün kabini sınırlı. Sığmayan eşyayı söküyor ya da balkondan mobil asansörle indiriyoruz." },
      { title: "Yakacık yokuşları", text: "Yakacık ve Karlıktepe'nin dar sokaklarında büyük araç zor yanaşıyor. Sabah erken gidip bina önünde yer tutmak günü kurtarıyor." },
      { title: "E-5 çıkış saati", text: "Sabah Kartal'dan şehir merkezine gitmek uzun sürüyor. Yüklemeyi erken bitirip trafiği beklemeden yola çıkıyoruz." },
    ],
    faqs: [
      { question: "Kartal'daki yüksek katlı rezidanslarda kaçıncı kata kadar çalışıyorsunuz?", answer: "Yük asansörü varsa kat sınırı yok; eşya asansöre sığdığı sürece en üst kata kadar çıkıyoruz. Sığmayan büyük parçalar için söküm yapıyor, balkon uygunsa mobil asansör kuruyoruz. Binayı görüp hangi yöntemin daha hızlı olduğunu söylüyoruz." },
      { question: "Yakacık'ın dar sokaklarında nakliye aracı bina önüne yanaşabiliyor mu?", answer: "Sokak boşsa yanaşıyor. Gün ilerledikçe park eden araçlar yüzünden yer bulmak zorlaşıyor, o yüzden bu bölgede sabahın ilk saatlerini tercih ediyoruz. Gerekirse küçük araçla mekik yapıp yükü caddedeki kamyona aktarıyoruz." },
      { question: "Kartal'dan Avrupa Yakası'na taşınma aynı gün biter mi?", answer: "Standart bir ev için biter, ama erken başlamak koşuluyla. Sabah E-5 üzerinden karşı yakaya geçiş uzun sürüyor; yükleme günün ilk saatlerinde biterse öğleden sonra boşaltmaya geçiyoruz. Eşya çoksa ikinci araç çıkarıp tek seferde bitiriyoruz." },
      { question: "Yeni evim hazır değil, eşyalarımı bir süre saklayabilir misiniz?", answer: "Evet, eşya depolama hizmetimiz var. Eşyalar paketlenip listelenerek depoya alınıyor, siz hazır olduğunuzda yeni adrese getiriliyor. Depoda kaldığı sürece sigorta devam ediyor." },
    ],
    nearby: ["maltepe", "pendik", "sultanbeyli", "sancaktepe"],
  },
  {
    slug: "pendik",
    name: "Pendik",
    side: "Anadolu Yakası",
    intro:
      "Pendik; Kurtköy ve Kaynarca gibi geniş semtleriyle hem konut hem sanayi barındıran büyük bir ilçedir. Sabiha Gökçen'e yakın Pendik'te konut ve ofis taşımaları yapıyoruz.",
    neighborhoods: ["Kaynarca", "Çamçeşme", "Velibaba", "Kurtköy", "Güzelyalı"],
    body: [
      "Pendik'i bir uçtan bir uca geçmek başlı başına iş. Sahilde Güzelyalı, Batı ve Doğu mahalleleri, marina çevresindeki yeni bloklar var; kuzeye doğru çıktıkça Kaynarca, Velibaba, Şeyhli ve en sonunda Kurtköy geliyor. Kurtköy tarafında Sabiha Gökçen, teknoloji bölgesi ve son yılların site projeleri sıralanıyor. Havalimanı çevresine taşınanlar genelde iş nedeniyle geliyor; sahil tarafında ise aile taşınmaları ağırlıkta. İki nokta arası uzun bir yol, bina tipi ise tamamen farklı. Pendik evden eve nakliyat işinde ilk netleştirdiğimiz şey bu yüzden adresin sahil hattında mı yoksa TEM'e yakın kuzey kesimde mi olduğu; araç seçimi de saat planı da buna göre değişiyor.",
      "Merkez mahallelerde yapı stoku eski. Kaynarca, Çamçeşme ve Doğu tarafında beş altı katlı apartmanlar sıralı; birçoğunda asansör dar ya da hiç yok. Sokaklar sıkışık, bina önü gün içinde park eden araçlarla doluyor. Bu adreslerde mobil asansör kurup eşyayı balkondan indirmek en pratik yöntem, çünkü merdivenle uğraşmak hem süreyi hem riski büyütüyor. Bina girişleri dar olduğu için beyaz eşya kapıdan zor geçiyor; kapı kanadı söküldüğünde iş kolaylaşıyor. Merdiven boşluğu darsa gardırobu söküp taşımak tek yol oluyor. Ekibimiz asansörün kurulacağı noktayı gelir gelmez belirliyor; sokak dar olduğu için aracı doğru açıyla konumlandırmak önemli. Komşularla sorun çıkmaması adına işi erken saatte bitirmeye bakıyoruz.",
      "Kurtköy ve Şeyhli'deki sitelerde tablo değişiyor: yük asansörü var ama yönetim önceden randevu ve araç kaydı istiyor, kimi sitede taşınma saatleri kısıtlı. Bu ayarlamaları biz yapıyoruz. Trafikte Pendik'in iki yüzü var; E-5 sabah ve akşam ağır ilerliyor, buna karşılık TEM'e yakınlık şehir dışına çıkışı çok kolaylaştırıyor. Anadolu yönüne şehirler arası yük taşımacılığında bu, erken çıkışla birleşince ciddi zaman kazandırıyor. Taşınma gününü belirlerken köprü ve E-5 durumunu birlikte konuşuyoruz; saat seçmek, araç seçmek kadar önemli. Sabiha Gökçen çevresindeki ofis ve şirket taşımalarını genelde hafta sonuna alıp pazartesiye hazır teslim ediyoruz; bilgisayarlar ve dosyalar etiketli kutularla gidiyor. Eşyanız yeni adres hazır olana kadar bekleyecekse depoya alıyoruz; eşya listeleniyor, paketleniyor ve sigortalı şekilde bekliyor.",
    ],
    notes: [
      { title: "Sahil mi, Kurtköy mü", text: "Pendik uzun bir ilçe; sahil ile Kurtköy arası hem yol hem bina olarak farklı. Adresi netleştirip aracı ve ekibi ona göre çıkarıyoruz." },
      { title: "Eski apartman, dar asansör", text: "Kaynarca ve Çamçeşme'de asansör çoğu eşyayı almıyor. Mobil asansörle balkondan indirmek hem hızlı hem güvenli oluyor." },
      { title: "TEM avantajı", text: "Kuzey mahalleler TEM'e yakın, şehir dışına çıkış hızlı. Şehirler arası taşımalarda yolu erken saatte açıyoruz." },
    ],
    faqs: [
      { question: "Pendik'ten Avrupa Yakası'na taşınma aynı gün biter mi?", answer: "Standart bir daire için biter, ama sabah erken başlamak gerekiyor. Pendik-Avrupa Yakası hattı köprü trafiğine bağlı; öğleden sonra yola çıkarsanız tek sefer bile saatler alıyor. Eşya çoksa iki araçla çalışıp tek seferde tamamlıyoruz." },
      { question: "Kurtköy'deki siteye taşınırken yönetimden izin gerekiyor mu?", answer: "Evet, sitelerin büyük kısmında taşınma öncesi bildirim ve araç kaydı isteniyor. Yük asansörü kullanımı da genelde saat ayırtmaya bağlı. Yönetimle iletişimi biz kuruyoruz, size günü onaylamak kalıyor." },
      { question: "Kaynarca'daki asansörsüz binadan çıkacağım, ne öneriyorsunuz?", answer: "Mobil asansör. Balkon ya da pencere uygunsa eşya doğrudan platformdan iniyor, merdivende sıkışma yaşanmıyor. Taşınma birkaç saat kısalıyor, eşya ve duvar da zarar görmüyor." },
      { question: "Pendik'ten şehir dışına eşya taşıyor musunuz?", answer: "Taşıyoruz. Pendik TEM'e yakın olduğu için şehir dışı çıkışını hızlı yapıyoruz. Eşya paketlenip sigortalı şekilde yükleniyor, varış saatini önceden konuşuyoruz." },
    ],
    nearby: ["kartal", "tuzla", "sultanbeyli", "cekmekoy"],
  },
  {
    slug: "tuzla",
    name: "Tuzla",
    side: "Anadolu Yakası",
    intro:
      "Tuzla; tersaneleri, organize sanayisi ve sahil konutlarıyla bilinen bir ilçedir. Tuzla'da hem konut hem işyeri/fabrika taşımalarında çözümler üretiyoruz.",
    neighborhoods: ["Aydınlı", "İçmeler", "Şifa", "Postane", "Anadolu"],
    body: [
      "Tuzla, İstanbul'un doğu ucunda üç ayrı hayatı bir arada yaşatıyor. Sahilde İçmeler, Şifa, Postane ve Aydıntepe'nin konut alanları var; Aydınlı hattında tersaneler; Orhanlı ve Tepeören tarafında organize sanayi bölgeleri ve fabrikalar. Bir de Akfırat çevresindeki müstakil evler ve villa siteleri. İlçenin bir ucundan diğerine geçmek bile zaman alıyor, çünkü Tuzla hem uzun hem yayvan. Tersane ve sanayi bölgesinde çalışan çok kişi ilçe içinde ev değiştiriyor; işe yakın oturmak burada yaygın. Tuzla evden eve nakliyat isteyen bir ailenin ihtiyacıyla tesisini taşıyan bir işletmenin ihtiyacı aynı olmuyor; ikisi için de ayrı ekip, ayrı araç ve ayrı plan çıkarıyoruz.",
      "Sanayi tarafındaki taşımalar ağır iş. Raf sistemleri, tezgâh ve makineler sökülüyor, ağırlığa uygun araç seçiliyor, yükleme sırası önceden belirleniyor ki yeni adreste kurulum aksamadan ilerlesin. Ağır makinelerde forklift ve uygun ekipman gerekiyor; sahada neyin gerektiğini önce görüp sonra teklif veriyoruz. Parçalar etiketleniyor, sökülen cıvatalar ayrı kutuya alınıyor; kurulumda en çok zaman kaybettiren şey kaybolan küçük parçalar oluyor. Üretimin durmaması için çoğu işi hafta sonuna ya da vardiya dışına alıyoruz. Tuzla'nın Kocaeli sınırında olması şehirler arası yük taşımacılığında işimizi kolaylaştırıyor; Anadolu yönüne çıkış TEM üzerinden hızlı oluyor ve aynı gün içinde varış çoğu zaman mümkün.",
      "Konut tarafında iş daha tanıdık ama mesafe belirleyici. Sahildeki sitelerde asansörlü taşıma ve yönetim randevusu standart; İçmeler ile Aydıntepe'de araç girişi için güvenlikten izin gerekiyor. İç mahallelerdeki eski apartmanlarda ise mobil asansör devreye giriyor. Asıl fark, İstanbul'un merkezinden Tuzla'ya ya da tersi yönde taşınırken yol süresinde ortaya çıkıyor. Sabah E-5 üzerinden gelmek uzun sürdüğü için ekibi erken saatte adrese gönderiyoruz; gün içinde ikinci sefere kalmadan işi bitirmeye çalışıyoruz. Eşya çoksa ikinci aracı baştan planlamak, aynı yolu iki kez gitmekten daha mantıklı. Şehir dışına giden taşımalarda çıkış saatini ve varış planını önceden konuşuyoruz; şoför yolda kalmıyor, siz de saatlerce beklemiyorsunuz. Eşyanız yeni ev hazır olana kadar bekleyecekse depolama tarafında da çözümümüz var.",
    ],
    notes: [
      { title: "Fabrika ve atölye", text: "Orhanlı ve Tepeören'deki tesislerde makine ve raf sökümü yapıyoruz. İş genelde hafta sonuna alınıyor ki üretim aksamasın." },
      { title: "Mesafe planı", text: "Tuzla şehir merkezine uzak; sabah E-5 yolu iyice uzatıyor. Ekip erken saatte adreste oluyor, iş tek güne sığıyor." },
      { title: "Sahil siteleri", text: "İçmeler ve Aydıntepe'deki sitelerde araç girişi ve yük asansörü randevuya bağlı. Yönetimle görüşmeyi biz yapıyoruz." },
    ],
    faqs: [
      { question: "Tuzla'daki atölyemi veya fabrikamı taşıyabilir misiniz?", answer: "Evet, işyeri ve tesis taşımaları yapıyoruz. Makine, tezgâh ve raflar sökülüp uygun araca yükleniyor, yeni adreste aynı düzende kuruluyor. Üretiminiz aksamasın diye çalışmayı hafta sonuna ya da mesai dışına planlıyoruz." },
      { question: "Tuzla'dan İstanbul'un diğer ucuna taşınma tek günde biter mi?", answer: "Normal bir daire için biter, ama gün erken başlamalı. Tuzla ile Avrupa Yakası arası yol tek başına saatler alabiliyor; yükleme öğleden önce tamamlanırsa akşam yeni evde kurulum bitiyor. Eşya çoksa iki araçla çıkıyoruz." },
      { question: "Kocaeli ve Anadolu yönüne şehirler arası taşıma yapıyor musunuz?", answer: "Yapıyoruz. Tuzla, TEM üzerinden şehir dışına çıkışın en kolay olduğu ilçelerden biri; Kocaeli tarafına taşımalar aynı gün tamamlanabiliyor. Eşyalar sigortalı olarak taşınıyor." },
      { question: "Akfırat tarafındaki villamı taşırken kaç araç gerekir?", answer: "Villa taşımalarında eşya sadece odalarda olmuyor; bahçe, depo ve bodrumdan çıkanlar hacmi ciddi büyütüyor. Bu yüzden önce yerinde bakıp gerçek hacmi çıkarıyoruz. Genelde tek araç yetmiyor; ikinci araçla tek seferde bitirmek iki sefer yapmaktan daha hızlı oluyor." },
    ],
    nearby: ["pendik", "kartal", "maltepe"],
  },
  {
    slug: "sancaktepe",
    name: "Sancaktepe",
    side: "Anadolu Yakası",
    intro:
      "Sancaktepe; Sarıgazi ve Samandıra gibi hızla büyüyen konut bölgeleriyle gelişen bir ilçedir. Sancaktepe taşımalarında sigortalı ve asansörlü hizmet veriyoruz.",
    neighborhoods: ["Sarıgazi", "Samandıra", "Yenidoğan", "Eyüp Sultan", "Abdurrahmangazi"],
    body: [
      "Sancaktepe iki merkez üzerine kurulu: Sarıgazi ve Samandıra. İkisi de hızlı büyüyor, yeni konut projeleri hâlâ ekleniyor. Ama eski doku yerinde duruyor; Yenidoğan ve Abdurrahmangazi çevresinde asansörsüz apartmanlar, dar ara sokaklar var. Kentsel dönüşüm sürdüğü için aynı sokakta yeni asansörlü blokla eski apartman yan yana durabiliyor. İlçenin kuzeyine, Paşaköy yönüne doğru gittiğinizde doku tamamen değişiyor: bahçeli evler, geniş parseller, orman kenarı. Sancaktepe evden eve nakliyat çağrılarının çoğu ilk evine ya da daha büyük bir daireye geçen ailelerden geliyor. Bu da bol eşya, çok koli ve sökülüp yeniden kurulacak mobilya demek; paketleme malzemesini biz getiriyoruz. Taşınmaların önemli kısmı hafta sonuna denk geldiği için takvimi erken kapatmakta fayda var.",
      "İlçenin en büyük avantajı TEM'e yakınlık. Samandıra kavşağından çıkış hızlı; şehrin diğer ucuna taşınırken de şehir dışına yük çıkarırken de yolda kaybedilen zaman az. Sıkıntı ana caddeden içeri girince başlıyor: iç sokaklar dar, çift sıra park yaygın, kamyonu bina önüne yanaştırmak sabır istiyor. İşi sabah erken başlatınca hem yer buluyoruz hem komşuları uzun süre rahatsız etmiyoruz; asansör de bu saatte rahat kuruluyor, çünkü sokak henüz araçlarla dolmamış oluyor. Sokak çok darsa yükü küçük araçla ana caddeye taşıyıp orada büyük araca aktarıyoruz. Apartman yönetiminden izin gerekiyorsa o görüşmeyi de biz yapıyoruz.",
      "Yeni sitelerde taşınma yönetim iznine bağlı; araç plakası ve saat önceden bildiriliyor, yük asansörü ayırtılıyor. Eski binalarda ise mobil asansör olmadan iş uzuyor. Merdiven boşlukları dar, gardırop ve büyük koltuk dönmüyor; bunları balkondan indirmek hem daha hızlı hem eşya için daha güvenli. Paşaköy yönündeki bahçeli evlerde hacim sürpriz yapabiliyor, çünkü depo ve bahçeden çıkan eşya çoğu zaman hesaba katılmıyor; o yüzden önden keşif yapıp araç sayısını doğru belirliyoruz. Beyaz eşya taşımaya uygun şekilde sabitleniyor, kırılacaklar ayrı kutulara giriyor; kolilerin üzerine oda adı yazılıyor ki yeni evde yerleştirme hızlansın. Paketleme, asansörlü taşıma ve sigorta hepsinde standart. Yeni ev hazır değilse eşyaları listeleyip depoya alıyor, siz hazır olduğunuzda teslim ediyoruz.",
    ],
    notes: [
      { title: "TEM'e yakınlık", text: "Samandıra kavşağı sayesinde hem şehir içine hem şehir dışına çıkış hızlı. Uzun mesafeli taşımalarda bu, işi tek güne sığdırmayı kolaylaştırıyor." },
      { title: "Dar iç sokaklar", text: "Sarıgazi ve Yenidoğan'ın ara sokaklarında çift sıra park yaygın. Erken saatte gelip aracı bina önüne yanaştırıyoruz." },
      { title: "Aile taşınması", text: "İlk ev ya da büyük daireye geçişte eşya çok oluyor. Paketleme malzemesini biz getiriyoruz, mobilya sökümü ve kurulumu ekipte." },
    ],
    faqs: [
      { question: "Sarıgazi'deki asansörsüz binadan eşya nasıl indiriliyor?", answer: "Mobil asansörle. Aracı bina önüne kuruyoruz, eşya balkondan platforma alınıp aşağı iniyor. Beş kat merdivende koltuk döndürmeye çalışmaktan hem hızlı hem güvenli." },
      { question: "Samandıra'dan şehir dışına eşya taşıyor musunuz?", answer: "Evet. Samandıra TEM kavşağına çok yakın, şehir dışı çıkışını hızlı yapıyoruz. Eşya paketlenip sigortalı şekilde yükleniyor, varış saatini önceden konuşuyoruz." },
      { question: "Sancaktepe'deki yeni sitelerde taşınma günü kısıtı var mı?", answer: "Sitelerin çoğu taşınmayı hafta içi belirli saatlere alıyor ve önceden bildirim istiyor. Yük asansörü kullanımı da randevuyla oluyor. Yönetimle görüşüp uygun günü ayırtmak bizde." },
      { question: "Mobilyaları söküp yeni evde kuruyor musunuz?", answer: "Evet, sökme ve kurma hizmete dahil. Gardırop, yatak ve mutfak masası gibi parçalar sökülüp korumalı şekilde taşınıyor, yeni adreste ekip aynı gün kuruyor. Akşam evinizde oturabiliyorsunuz." },
    ],
    nearby: ["umraniye", "cekmekoy", "sultanbeyli", "kartal"],
  },
  {
    slug: "sultanbeyli",
    name: "Sultanbeyli",
    side: "Anadolu Yakası",
    intro:
      "Sultanbeyli, yoğun konut dokusuyla Anadolu yakasının gelişen ilçelerindendir. Sultanbeyli'de apartman taşımalarında asansörlü hizmetle hız kazandırıyoruz.",
    neighborhoods: ["Abdurrahmangazi", "Mehmet Akif", "Battalgazi", "Fatih", "Hasanpaşa"],
    body: [
      "Sultanbeyli TEM'in iki yanına yayılmış, yoğun ve genç bir ilçe. Yapı stoku büyük ölçüde apartman: beş yedi katlı, çoğu 2000'ler öncesinden kalma. Abdurrahmangazi, Mehmet Akif, Battalgazi ve Fatih mahallelerinde bina sayısı yüksek, sokaklar sıkışık. Aynı sokakta yeni ve eski bina yan yana durabiliyor; bu yüzden kaçıncı katta olduğunuz kadar binanın yaşı da işi değiştiriyor. İlçeye taşınanların önemli kısmı şehrin başka bölgelerinden geliyor, yani uzun mesafeli bir taşınma söz konusu. Sultanbeyli evden eve nakliyat işlerinde en sık karşılaştığımız durum dar merdiven boşluğu ve kabini küçük asansör. Gardırop ya da üç kişilik koltuk çoğu binada merdivenden dönmüyor; mobil asansör bu yüzden neredeyse kural haline geliyor.",
      "Ana caddeler geniş ama ara sokaklarda gün ortasında bina önü kapanıyor. Kamyonu doğru noktaya yanaştıramazsak asansörü de kuramıyoruz, iş oracıkta tıkanıyor. Bu yüzden ekip sabahın erken saatinde adreste oluyor; hem yer bulunuyor hem iş öğleye doğru büyük ölçüde bitiyor. İki araçla geldiğimizde biri asansörü kurarken diğeri paketlemeye başlıyor, gün böylece kısalıyor. Sokak iyice darsa yük ana caddede aktarılıyor. Kentsel dönüşümle yenilenen binalarda yük asansörü çıkıyor, orada iş daha rahat ilerliyor ama bu sefer de yönetimden saat almak gerekiyor. Adresi önceden söylerseniz hangi yöntemle çalışacağımızı taşınma gününden önce netleştiriyoruz; sabah kapıda plan yapmak kimseye vakit kazandırmıyor.",
      "İlçenin konumu uzun mesafeli taşımalarda işe yarıyor. TEM kavşağı hemen burada; şehir içine de Anadolu yönüne de çıkış hızlı oluyor, şehirler arası yük taşımacılığında zaman kaybı az. Şehir dışı taşımalarda çıkış saatini ve varışı önceden konuşuyoruz; ekip yolda kalmıyor, siz de kapıda beklemiyorsunuz. Sultanbeyli'ye taşınanlar genelde aile; koli sayısı fazla, beyaz eşya ve büyük mobilya çok. Paketleme desteği bu yüzden neredeyse her işte isteniyor; malzemeyi biz getiriyoruz, mobilya sökümü ve yeni adreste kurulum ekibin işi. Çamaşır makinesi ile buzdolabı taşımaya uygun şekilde sabitleniyor, kırılacaklar ayrı kutulara giriyor, kolilerin üstüne oda adı yazılıyor. Yeni ev henüz hazır değilse eşyaları depoya alıp siz hazır olduğunuzda teslim ediyoruz; depoda kaldığı sürece sigorta devam ediyor.",
    ],
    notes: [
      { title: "Dar merdiven, küçük asansör", text: "Sultanbeyli'deki eski apartmanların asansörü büyük eşyayı almıyor. Mobil asansörle balkondan indirmek en pratik yol." },
      { title: "Sabahın ilk saati", text: "Ara sokaklarda gün ilerledikçe bina önü doluyor. Ekip erken gelip aracı yanaştırıyor, asansörü rahat kuruyor." },
      { title: "TEM kavşağı", text: "İlçe TEM'in üzerinde, şehir dışı çıkışları hızlı. Uzun mesafeli taşımalarda yolu erkenden açıyoruz." },
    ],
    faqs: [
      { question: "Sultanbeyli'de asansörsüz beşinci kattan taşınma ne kadar sürer?", answer: "Mobil asansörle çalışırsak standart bir daire genelde yarım günde yükleniyor. Merdivenden taşımaya kalkınca aynı iş katlanarak uzuyor, eşya da risk altına giriyor. Ekip ve asansör doğru kurulduğunda öğleden sonra yeni adreste boşaltmaya başlıyoruz." },
      { question: "Ara sokakta kamyona yer bulunabiliyor mu?", answer: "Sabah erken saatte genelde bulunuyor. Öğleden sonra bina önleri dolduğu için hem araç yanaşamıyor hem asansör kurulamıyor. Bu yüzden Sultanbeyli adreslerinde günün ilk saatlerini tercih ediyoruz." },
      { question: "Sultanbeyli'den başka bir şehre taşınıyorum, aynı gün yola çıkabilir miyiz?", answer: "Evet. İlçe TEM üzerinde olduğu için yükleme biter bitmez şehir dışına çıkabiliyoruz. Eşyalar paketlenip sigortalı şekilde yükleniyor, varış planını önceden konuşuyoruz." },
      { question: "Beyaz eşya ve mobilyayı siz mi söküyorsunuz?", answer: "Evet, sökme ve kurma hizmete dahil. Çamaşır makinesi ve buzdolabı taşımaya uygun şekilde sabitleniyor; gardırop ve yataklar sökülüp korumalı taşınıyor. Yeni evde ekip aynı gün hepsini kuruyor." },
    ],
    nearby: ["sancaktepe", "pendik", "kartal"],
  },
  {
    slug: "cekmekoy",
    name: "Çekmeköy",
    side: "Anadolu Yakası",
    intro:
      "Çekmeköy; Taşdelen ve Alemdağ gibi villa ve site bölgeleriyle yeşil bir konut ilçesidir. Çekmeköy'de villa ve site taşımalarında planlı lojistik sunuyoruz.",
    neighborhoods: ["Taşdelen", "Alemdağ", "Ömerli", "Mimarsinan", "Hamidiye"],
    body: [
      "Çekmeköy'ün büyük kısmı orman ve Ömerli havzasıyla çevrili. Nişantepe, Ömerli ve Alemdağ tarafında bahçeli müstakil evler ve villa siteleri sıralanıyor; Taşdelen ile merkez çevresinde apartmanlar ve yeni site projeleri var. İlçeye taşınanlar genelde daha sakin ve yeşil bir çevre için geliyor; eşya çok, mesafe uzun, plan ister istemez detaylı oluyor. Çekmeköy evden eve nakliyat işlerinin önemli bölümü villa taşıması ve villa taşıması, daire taşımasına hiç benzemiyor. Kat yok ama eşya çok: bodrum, garaj, bahçe deposu ve çatı arası hesaba katılmadan yapılan hiçbir plan tutmuyor. Üstelik evin kapısından araca kadar olan mesafe uzun; bahçeden geçen her adım süreye ekleniyor.",
      "Villa taşımasında en sık yapılan hata hacmi az tahmin etmek. Bahçe mobilyası, bisikletler, alet çantaları, mangal, kışlık lastikler derken tek araçlık iş iki araca çıkıyor. Bu yüzden önce yerinde bakıp gerçek hacmi çıkarıyoruz; ikinci sefere kalmak, baştan iki araçla çıkmaktan daha çok vakit ve para yakıyor. Bahçe aletleri ve depo eşyaları için ayrı kutu ve etiket kullanıyoruz, yeni evde neyin nereye gideceği karışmıyor. Ekip sayısını artırmak da süreyi ciddi kısaltıyor, çünkü kapı ile araç arasındaki mesafe her seferde zaman yiyor. Villa sitelerinde bir de kamyon giriş izni meselesi var: güvenlik önceden bildirim istiyor, iç yollar dar olduğu için manevra alanı sınırlı, bazı sitelerde araç boyutuna sınır konuyor. Bunları taşınma sabahı çözmeye çalışmak günü uzatıyor, o yüzden izinleri önceden alıyoruz.",
      "Merkez, Taşdelen ve Mimar Sinan tarafındaki apartman ve sitelerde iş daha standart ilerliyor: yük asansörü varsa randevu alınıyor, yoksa mobil asansör kuruluyor. Metro hattının ilçeye ulaşmasıyla taşınma talebi arttı; hafta sonları takvim hızlı doluyor, tarihi erken vermekte fayda var. Ulaşımda ilçe şanslı; Şile Otoyolu ve TEM bağlantısı sayesinde hem şehir merkezine hem Şile yönüne çıkış rahat, kamyon yolda zorlanmıyor. Yine de Alemdağ Caddesi'nin sabah trafiğini hesaba katıp ekibi erken saatte adrese gönderiyoruz. Ev satılıp yenisine geçilirken arada kalan eşyalar için depolama veriyoruz; eşya listelenip paketleniyor, depoya alınıyor, siz hazır olduğunuzda yeni adreste kuruluyor. Taşıma sigortalı; depoda beklediği sürede de koruma devam ediyor.",
    ],
    notes: [
      { title: "Villa hacmi", text: "Bahçe, depo ve bodrumdan çıkan eşya hacmi neredeyse ikiye katlıyor. Yerinde keşif yapıp araç sayısını doğru belirliyoruz." },
      { title: "Site giriş izni", text: "Nişantepe ve Ömerli'deki villa sitelerinde kamyon girişi bildirime bağlı. İzni önceden alıyoruz, güvenlik kapısında beklemiyoruz." },
      { title: "Şile Otoyolu bağlantısı", text: "İlçe hem TEM'e hem Şile Otoyolu'na bağlı. Şehir merkezi ve Şile yönündeki taşımalarda yol planı rahat çıkıyor." },
    ],
    faqs: [
      { question: "Villa taşımasında kaç araç gerekiyor?", answer: "Eşyanın gerçek hacmine bağlı ve villalarda bu hacim çoğu zaman tahmin edilenden büyük çıkıyor. Bodrum, garaj ve bahçe deposunu da sayınca tek araç genelde yetmiyor. Yerinde bakıp net söylüyoruz; ikinci araçla tek seferde bitirmek iki sefer yapmaktan daha hızlı." },
      { question: "Ömerli ve Nişantepe'deki sitelere nakliye kamyonu girebiliyor mu?", answer: "Giriyor ama güvenlikten önceden izin almak gerekiyor; bazı sitelerde araç boyutuna sınır var. İç yollar dar olduğu için manevra alanını da hesaba katıyoruz. Bu izinleri taşınmadan önce biz ayarlıyoruz." },
      { question: "Çekmeköy'den şehir merkezine taşınma ne kadar sürer?", answer: "Yol tarafı sanıldığı kadar zor değil; TEM bağlantısı sayesinde merkeze çıkış rahat. Süreyi belirleyen genelde yükleme, yani eşya miktarı ve bina tipi. Sabah erken başlarsak standart bir taşınma aynı gün tamamlanıyor." },
      { question: "Yeni evim hazır olana kadar eşyalarımı saklar mısınız?", answer: "Evet, depolama hizmeti veriyoruz. Eşyalar paketlenip listelenerek depoya alınıyor ve depoda kaldığı sürece sigortalı oluyor. Hazır olduğunuzda yeni adrese getirip kuruyoruz." },
    ],
    nearby: ["umraniye", "sancaktepe", "beykoz", "sile"],
  },
  {
    slug: "beykoz",
    name: "Beykoz",
    side: "Anadolu Yakası",
    intro:
      "Beykoz; ormanları, Boğaz kıyısı ve yalılarıyla İstanbul'un en yeşil ilçelerindendir. Kavacık'ın iş merkezleriyle sahil yalıları için Beykoz'da özel planlı taşıma yapıyoruz.",
    neighborhoods: ["Kavacık", "Paşabahçe", "Anadoluhisarı", "Çubuklu", "Kanlıca"],
    body: [
      "Beykoz'da taşınma coğrafyayla başlıyor. Boğaz kıyısında Kanlıca, Çubuklu, Paşabahçe ve Anadoluhisarı var; sahil yolu dar, yer yer tek şeride düşüyor ve durduğunuz anda arkanızda kuyruk oluşuyor. Aracın nereye park edeceği burada taşınmanın en kritik kararı. Yamaçlara tırmandıkça yokuşlar ve dar sokaklar başlıyor, kimi eve araçla yaklaşmak bile zor. Kavacık'ta ise iş merkezleri, köprü bağlantısı ve sabah akşam kilitlenen kavşak. Bir de Riva, Polonezköy ve Acarkent yönündeki geniş bahçeli evler var; ilçenin bir ucundan diğerine gitmek başka bir ilçeye gitmek kadar sürebiliyor. Yalı, ahşap köşk ve site dairesi aynı ilçede yan yana duruyor ve her biri farklı ekipman istiyor. Beykoz evden eve nakliyat planı yapılırken yol ve saat, eşyadan bile önce konuşuluyor.",
      "Sahil hattındaki köşklerde ve eski evlerde araç park edecek yer bulmak başlı başına mesele. Kapılar dar, merdivenler ahşap ve dönemeçli; büyük eşya çoğu zaman olduğu gibi çıkmıyor. Bu adreslerde önce mobil asansörü kurabileceğimiz bir nokta arıyoruz; bulamazsak eşyayı söküp parça parça çıkarıyoruz. Ekip işe başlamadan zemini ve merdiveni koruyucu örtüyle kaplıyor, çünkü bu evlerde zemin de en az eşya kadar kıymetli. Antika mobilya, piyano ya da tablo gibi hassas parçalar için ekstra paketleme yapıyor, ağır parçalarda ek ekiple çalışıyoruz. Paketleme burada işin en uzun süren kısmı oluyor. Sahil yolunu uzun süre kapatmamak adına da işi erken saatte, planlı biçimde yürütüyoruz.",
      "Kavacık tarafında iş daha çok ofis taşıma. Köprü bağlantısı yüzünden hafta içi araç indirip bindirmek zor, otopark da sınırlı; bu yüzden ofisleri genelde hafta sonu taşıyoruz. Cuma akşamı toplanan bir ofis pazar günü kurulmuş oluyor; kablo düzeni etiketleniyor, masa yerleşimi yeni adreste aynı şekilde kuruluyor. Acarkent, Riva ve Polonezköy yönündeki villa taşımaları ise ayrı bir dünya: uzun iç yollar, bahçeli evler, hesaba katılmayan depo eşyaları. Bahçe ve depodan çıkan eşya hacmi çoğu zaman ikiye katlıyor, o yüzden araç sayısını yerinde bakarak belirliyoruz. Beykoz'un her noktasında paketleme, asansörlü taşıma ve sigortalı nakliye geçerli; adresi söyleyin, yolun ve binanın durumuna göre gerçek bir plan çıkaralım.",
    ],
    notes: [
      { title: "Sahil yolu planı", text: "Kanlıca ve Çubuklu'da sahil yolunu kapatmadan çalışmak gerekiyor. İşi erken saate alıp aracı planlı biçimde konumlandırıyoruz." },
      { title: "Köşk ve yalı eşyası", text: "Ahşap merdivenler ve dar kapılar büyük eşyayı geçirmiyor. Hassas parçalara ekstra paketleme, gerekirse söküm uyguluyoruz." },
      { title: "Kavacık kavşağı", text: "Kavacık sabah ve akşam kilitleniyor. Ofis taşımalarını hafta sonuna almak hem hızlı hem sorunsuz oluyor." },
    ],
    faqs: [
      { question: "Boğaz sahilindeki köşke mobil asansör kurulabiliyor mu?", answer: "Adrese bağlı. Sahil yolu dar olduğu için asansör aracının duracağı alanı önceden belirlemek şart; bazı yerlerde bahçe içi kullanılabiliyor. Kurulum mümkün değilse eşyayı söküp elle çıkarıyoruz. Planı taşınmadan önce netleştiriyoruz." },
      { question: "Beykoz'da taşınma için hangi saat daha uygun?", answer: "Sabahın erken saatleri. Kavacık kavşağı ve sahil yolu gün ilerledikçe ağırlaşıyor, aracı bina önünde uzun süre tutmak da mümkün olmuyor. Erken başlayınca yükleme rahat oluyor, trafik gününüzü yemiyor." },
      { question: "Piyano ve antika mobilyam var, taşıyabilir misiniz?", answer: "Taşıyoruz. Bu tür parçalar özel paketlemeyle, gerekirse ek ekiple ve uygun ekipmanla çıkarılıyor. Taşıma sigortalı yapılıyor; hangi yöntemle çıkacağını önce yerinde görüp söylüyoruz." },
      { question: "Kavacık'taki ofisimizi hafta sonu taşıyabilir misiniz?", answer: "Evet, Kavacık'taki ofisleri genelde hafta sonu taşıyoruz. Hafta içi köprü trafiği ve otopark yüzünden yükleme uzuyor. Cuma akşamı toplayıp pazar günü kurarak pazartesiye hazır teslim ediyoruz." },
    ],
    nearby: ["uskudar", "umraniye", "cekmekoy", "sile"],
  },
  {
    slug: "sile",
    name: "Şile",
    side: "Anadolu Yakası",
    intro:
      "Şile; Karadeniz kıyısındaki yazlıkları ve doğasıyla bilinen bir ilçedir. Şile'de özellikle yazlık ev taşımalarında hizmet veriyoruz.",
    neighborhoods: ["Ağva", "Çayırbaşı", "Balibey", "Kumbaba", "Hacıllı"],
    body: [
      "Şile İstanbul'un içinde ama şehirden uzakta. Karadeniz kıyısındaki merkez, Anadolu Yakası'nın iç ilçelerinden yola çıkan bir araç için ciddi bir mesafe; Şile Otoyolu yolu kısalttı ama gene de günün önemli bir bölümünü alıyor. Ağva ve köyler tarafına geçtiğinizde yol daralıyor, kıvrımlı orman yollarına giriyorsunuz; büyük araçla oralara girmek her zaman mümkün olmuyor. Ekip günün büyük bölümünü yolda geçirdiği için araç, ekipman ve kişi sayısı baştan doğru belirlenmek zorunda. Yol tarifini önceden paylaşmanız da işi hızlandırıyor; bazı adresleri bulmak bile burada zaman alıyor. Şile evden eve nakliyat işinde en kritik konu bu yüzden mesafe planı: hangi araçla, hangi saatte çıkılacak ve iş tek seferde bitecek mi.",
      "Buradaki taşımaların çoğu yazlık, villa ve müstakil ev. Eşya odalarla sınırlı kalmıyor; bahçe mobilyası, depo, kışlık malzeme, bahçe aletleri derken hacim beklenenden büyük çıkıyor. Müstakil evlerde eşya tek katta bitmiyor, bodrum ve kiler ayrı ayrı toplanıyor. Mesafe uzun olduğu için ikinci sefer hem gün hem masraf demek; o yüzden eşyayı önden doğru sayıyor ve aracı buna göre seçiyoruz. Paketleme malzemesini yanımızda getiriyoruz, gün ortasında koli aramak zaman kaybı. Ağva ve köy yollarında büyük araçla girmek mümkün olmuyor; bu bölgelerde küçük kasalı araçla çalışıp gerekirse ana yolda aktarma yapıyoruz. Adresi tarif ettiğinizde hangi aracın gireceğini önceden söylüyoruz.",
      "Mevsim de işin parçası. Bahar ve yaz başında yazlık açılışları, güzde kapanışlar yoğunlaşıyor; kışın sis ve yol koşulları planı değiştirebiliyor, ekip bunu hesaba katıp yola erken çıkıyor. Son yıllarda Şile'ye kalıcı taşınanlar arttı; evden çalışanlar için masa, koltuk ve ekipman ayrı paketleniyor, ev eşyasıyla birlikte tek seferde gidiyor. Bu da paketleme ve depolama ihtiyacını büyüttü. Yazlığı kapatıp eşyayı bir süre saklatmak isterseniz depolama tarafında çözümümüz var: eşya listeleniyor, paketleniyor, depoda sigortalı bekliyor. Şile çıkışlı şehirler arası taşımalar da yapıyoruz. Yaz aylarında hafta sonu takvimi hızlı doluyor, tarihi erken vermek işinizi kolaylaştırıyor. 7/24 çalıştığımız için çıkış saatini birlikte belirliyoruz; erken yola çıkan araç akşam olmadan boşaltmayı bitiriyor.",
    ],
    notes: [
      { title: "Mesafe ve tek sefer", text: "Şile şehir merkezine uzak; ikinci sefer hem gün hem bütçe kaybı. Eşyayı önden doğru sayıp aracı işi tek seferde bitirecek şekilde seçiyoruz." },
      { title: "Ağva ve köy yolları", text: "Ağva tarafındaki dar ve kıvrımlı yollara büyük araç girmiyor. Küçük araçla çalışıp gerekirse ana yolda aktarma yapıyoruz." },
      { title: "Yazlık mevsimi", text: "Bahar açılışı ve güz kapanışı yoğun geçiyor. Tarihi erkenden belirleyip aracı ve ekibi o güne ayırıyoruz." },
    ],
    faqs: [
      { question: "Şile'ye taşınma bir günde biter mi?", answer: "Standart bir yazlık ya da daire için biter, ama sabah erken çıkmak gerekiyor. Mesafe uzun olduğu için yükleme öğleye kalırsa boşaltma akşamı buluyor. Eşya çoksa iki araçla gidip tek seferde tamamlıyoruz." },
      { question: "Ağva'daki eve büyük nakliye aracı girebiliyor mu?", answer: "Yolların çoğu büyük araç için uygun değil; dar ve kıvrımlı. Bu bölgede küçük kasalı araçla çalışıyor, gerekirse yükü ana yolda büyük araca aktarıyoruz. Adresi tarif ederseniz hangi aracın gireceğini önceden söylüyoruz." },
      { question: "Yazlığı kapatıyorum, eşyalarımı kışın saklayabilir misiniz?", answer: "Evet, eşya depolama hizmetimiz var. Eşyalar paketlenip listelenerek depoya alınıyor, sezon açılırken yeniden Şile'ye getirip yerleştiriyoruz. Depoda kaldığı sürece sigorta devam ediyor." },
      { question: "Kış aylarında Şile'ye taşınma yapıyor musunuz?", answer: "Yapıyoruz. Sis ve yol koşulları yüzünden çıkışı erkene alıyor, planı hava durumuna göre birlikte gözden geçiriyoruz. 7/24 çalıştığımız için gün ve saati esnetebiliyoruz." },
    ],
    nearby: ["beykoz", "cekmekoy", "pendik"],
  },
  {
    slug: "adalar",
    name: "Adalar",
    side: "Anadolu Yakası",
    intro:
      "Adalar; Büyükada, Heybeliada ve Burgazada'dan oluşan, araç trafiğinin kısıtlı olduğu özel bir ilçedir. Adalar'a taşıma, feribot ve ada içi lojistik nedeniyle önceden planlama gerektirir; planı sizinle birlikte baştan kuruyoruz.",
    neighborhoods: ["Büyükada", "Heybeliada", "Burgazada", "Kınalıada", "Maden"],
    body: [
      "Adalar'a taşınmak İstanbul'un hiçbir ilçesine benzemiyor. Büyükada, Heybeliada, Burgazada ve Kınalıada'da motorlu araç kullanımı kısıtlı; nakliye kamyonunu adaya çıkarıp kapıya yanaştırmak diye bir seçenek yok. Eşya karşı kıyıda yükleniyor, deniz yoluyla adaya geçiyor, iskelede aktarılıyor ve ada içinde elektrikli araç ya da el arabasıyla eve ulaşıyor. Karada tek parça olan iş burada üç ayrı aşamaya bölünüyor ve her aşamanın kendi saati var. Adalar evden eve nakliyat planı bu yüzden gün üzerinden değil, saat üzerinden kuruluyor. Tarihi erken belirlemek gerekiyor, çünkü deniz ayağı bir günde kurulmuyor; kışın hava koşulları planı daha da sıkı tutmayı gerektiriyor.",
      "Denizin kendi kuralları var. Lodos çıktığında geçişler aksayabiliyor, o yüzden taşınma tarihini belirlerken yedek bir gün konuşuyoruz. Eşya hacmini de önceden net bilmek şart: adaya ikinci bir sefer yapmak karadaki gibi kolay değil, hem gün hem masraf demek. Sayım ve paketleme bu işin en kritik kısmı. Bahçe eşyası, bisiklet ve depo malzemesi de hacme dahil ediliyor; adaya boşluk taşımak istemiyoruz. Eşyalar deniz aktarmasına dayanacak şekilde daha kalın sarılıyor, kutular sağlam kapatılıyor, kırılacaklar ayrı işaretleniyor; elektronik eşyaya nem düşünülerek ekstra koruma konuyor. Eşyanın ölçüsü ve ağırlığı önceden belliyse yükleme sırası da rahat kuruluyor. Bu sıra önden çıkarılıyor, çünkü eşyanın iskelede beklemesini istemiyoruz.",
      "Ada içinde iş büyük ölçüde elle yürüyor. Sokaklar dik, evlerin çoğu ahşap; merdivenler dar ve dönemeçli, bahçe kapıları küçük. İskeleden eve giden yol haritada kısa görünse de dik ve dar, büyük eşya birkaç kişiyle taşınıyor; bu yüzden ekip sayısını normalden yüksek tutuyoruz. Büyük mobilya bu merdivenlerden olduğu gibi çıkmıyor, o nedenle gardırop, yatak ve büyük dolaplar sökülerek taşınıyor, evde yeniden kuruluyor. Mobil asansör her adrese götürülebilecek bir ekipman değil; planı ona güvenerek yapmıyoruz. Adalar taşınması doğru sayı ve doğru sıra işi: iskeleden eve giden yolu bilen bir ekiple çalışırsanız gün içinde biter, bilmeyen bir ekiple iki güne yayılır. Adresi ve eşya durumunu söyleyin; deniz ayağını da kara ayağını da biz planlayalım.",
    ],
    notes: [
      { title: "Deniz yoluyla aktarma", text: "Eşya karşı kıyıda yüklenip deniz yoluyla adaya geçiyor, iskelede aktarılıyor. Bu geçişin saatini ve düzenini önceden planlıyoruz." },
      { title: "Hava durumu payı", text: "Lodos deniz geçişini aksatabiliyor. Taşınma tarihine yedek bir gün koyup planı buna göre kuruyoruz." },
      { title: "Ada içi taşıma", text: "İskeleden eve ulaşım elektrikli araç ve el arabasıyla oluyor. Dik sokaklar ve dar kapılar için eşya söküm planını önceden çıkarıyoruz." },
    ],
    faqs: [
      { question: "Büyükada'ya nakliye kamyonu çıkabiliyor mu?", answer: "Hayır, adalarda motorlu araç kullanımı kısıtlı; kamyonu kapıya yanaştırma imkânı yok. Eşya karşı kıyıda yüklenip deniz yoluyla adaya geçiyor, iskeleden eve ada içi ulaşımla taşınıyor. Bu yüzden saatleri ve sırayı önceden netleştiriyoruz." },
      { question: "Heybeliada'daki ahşap eve gardırop nasıl çıkarılır?", answer: "Ada evlerinin merdivenleri dar ve dönemeçli, büyük mobilya çoğu zaman olduğu gibi geçmiyor. Gardırop, yatak ve büyük dolapları söküp taşıyor, evde yeniden kuruyoruz. Hangi parçanın sökülmesi gerektiğini yerinde görüp söylüyoruz." },
      { question: "Hava bozarsa taşınma ne oluyor?", answer: "Lodos ve sert hava deniz geçişini aksatabiliyor. Taşınma tarihini belirlerken yedek bir gün konuşuyor, hava durumunu birlikte takip ediyoruz. Eşya güvende kalsın diye riskli havada denize çıkmıyoruz." },
      { question: "Kınalıada'dan İstanbul içine taşınırken eşyalarımı depolayabilir misiniz?", answer: "Evet. Eşyalar adadan alınıp karşı kıyıya geçirildikten sonra doğrudan depoya alınabiliyor. Paketlenip listeleniyor, yeni eviniz hazır olduğunda teslim ediyoruz. Depoda kaldığı sürece sigorta devam ediyor." },
    ],
    nearby: ["kadikoy", "maltepe", "kartal"],
  },
];

export function getIstanbulDistrict(slug: string): District | undefined {
  return istanbulDistricts.find((d) => d.slug === slug);
}
