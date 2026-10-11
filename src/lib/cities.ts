/**
 * Şehir (bölge) landing sayfaları — yerel SEO için.
 * Her ilde ÖZGÜN içerik (giriş, gövde metni, taşıma notları, SSS, ilçeler, güzergâhlar) — kopya/doorway değil.
 * İstanbul merkez (Kağıthane) olduğu için ağırlıklı; liste Google İşletme Profili'ndeki hizmet bölgesiyle aynı.
 */

import type { Faq } from "./faqs";

export type City = {
  slug: string;
  name: string;
  /** Sayfa başlığı/açıklaması için kısa özet */
  metaDescription: string;
  /** O ile özgü giriş metni (benzersiz) */
  intro: string[];
  /** İle özgü gövde metni (paragraflar). */
  body: string[];
  /** Bu ilde taşımada dikkat edilen pratik konular. */
  notes: { title: string; text: string }[];
  /** İle özgü sık sorulan sorular (FAQPage şeması olarak da yayınlanır). */
  faqs: Faq[];
  /** İlin ilçeleri — merkez ilçeler önce (İstanbul'un ilçe sayfaları istanbul-districts.ts'ten gelir). */
  districts?: string[];
  /** Popüler güzergâhlar (bu ilden gidilen yerler) */
  routes: string[];
};

export const cities: City[] = [
  {
    slug: "istanbul",
    name: "İstanbul",
    metaDescription:
      "İstanbul evden eve nakliyat ve şehirler arası yük taşımacılığı. Kağıthane merkezli, Avrupa ve Anadolu yakasının tamamına sigortalı, asansörlü taşıma.",
    intro: [
      "Merkezimiz İstanbul Kağıthane'de; şehrin hem Avrupa hem Anadolu yakasının tamamına evden eve nakliyat ve yük taşımacılığı hizmeti veriyoruz. Kadıköy'den Beylikdüzü'ne, Üsküdar'dan Başakşehir'e kadar dar sokak, yüksek kat, otopark ve trafik koşullarını iyi bilen ekibimizle çalışıyoruz.",
      "Asansörlü taşıma araçlarımız ve profesyonel paketleme ekibimizle eşyalarınızı ilk günkü gibi koruyor; tüm taşımaları sigorta güvencesiyle yapıyoruz. İstanbul içi taşımaların yanında, İstanbul'dan Türkiye'nin 81 iline düzenli sevkiyat sağlıyoruz.",
    ],
    body: [
      "Avrupa Yakası'ndan Anadolu Yakası'na ya da tersine taşınırken planın ilk satırına Boğaz geçişini yazıyoruz. Avrasya Tüneli kamyon almıyor, köprülerde de ağır vasıtalar için geçiş kısıtları var; geçeceğimiz hattı bu yüzden aracın boyuna göre seçiyor, rotayı araç belli olduktan sonra çiziyoruz. İkinci mesele saat. Sabah ve akşam zirve saatlerinde köprü bağlantılarında tek bir geçiş bile beklenenden uzun sürebiliyor. Yüklemeyi erken bitirip karşıya trafiğin gevşediği saatte geçmeye çalışıyoruz; bu planla standart bir daire çoğu zaman aynı gün boşaltılıp yeni evde kuruluyor. Merkezimiz Avrupa Yakası'nda olduğu için Anadolu Yakası'ndan başlayan işlerde ekibin sabah karşıya geçişini de hesaba katıyoruz. Eşya tek araca sığmayacak kadar fazlaysa ikinci aracı baştan yola çıkarıyoruz. Tek araçla iki sefer yapmak Boğaz'ı en az üç kez geçmek demek ve boşaltmayı genelde akşama itiyor. Yaka değiştiren işlerde iki adresin bilgilerini önceden alıp yükleme ve boşaltma saatlerini ona göre ayarlıyoruz.",
      "İstanbul'da evden eve nakliyat yaparken aynı gün çıktığımız iki işte aynı yöntemi kullandığımız pek olmuyor. Eski apartmanların bir kısmında asansör bulunmuyor, olanların da kabini genelde küçük; merdiven sahanlıkları çift kişilik bazayı ya da üçlü koltuğu döndürmeye yetmiyor. Bu binalarda büyük parçaları sökebildiğimiz kadar söküyor, sökülmeyenleri balkon ya da pencereden mobil asansörle indiriyoruz. Yeni sitelerde ve rezidanslarda ise işin akışını yönetimin kuralları belirliyor. Pek çok yönetim taşınma için gün ve saat aralığı veriyor, yük asansörünü randevuyla açıyor, kabinin örtüyle kaplanmasını istiyor; araç girişi için güvenliğe plaka bildirmek de gerekebiliyor. Bu kuralları tarih kesinleşmeden öğrenmek, ekibin kapıda beklemesini önlüyor; isterseniz yönetimle görüşmeyi biz yapıyoruz. Bazı yönetimler çıkıştan önce aidat hesabının kapatılmasını da bekliyor, bunu son güne bırakmamakta fayda var. Bina hangi tipte olursa olsun kolileri oda oda etiketliyoruz; yeni evde hangi kutunun nereye gideceği ilk dakikadan belli oluyor.",
      "Takvim de İstanbul'da en az adres kadar belirleyici. Okulların kapandığı yaz ayları aile taşınmalarıyla, ay sonları da kiracı taşınmalarıyla dolu geçiyor; bu dönemlerde tarih seçeneği hızla daralıyor. Sık karşılaştığımız bir durum da eski evin boşaltma günüyle yeni evin teslim gününün tutmaması. Böyle olunca eşya aradaki günleri depoda geçiriyor, ev hazır olduğunda paketlendiği gibi kapınıza geliyor; iki ayrı taşımayı ayarlama derdi size kalmıyor. İstanbul'dan şehirler arası nakliyatta ise planı çıkış yönü belirliyor. Trakya'ya TEM ve D-100 üzerinden, Ankara tarafına TEM ya da Kuzey Marmara Otoyolu ile, Bursa ve İzmir yönüne Osmangazi Köprüsü'nden geçerek gidiyoruz. Yüklemeyi şehir trafiği yoğunlaşmadan bitirip aracı vakit kaybetmeden yola çıkarıyoruz; yakın illere giderken İstanbul'dan çıkmak bazen yolun geri kalanı kadar sürüyor. Varışta boşaltma ve kurulumu da aynı ekip yapıyor. Mobilyayı söken ellerin yeni evde kurması işi hızlandırıyor; hangi vidanın nereden çıktığını bilen ekip montajda zaman kaybetmiyor.",
    ],
    notes: [
      { title: "Uç ilçelerde erken çıkış", text: "Silivri, Çatalca, Şile ve Tuzla gibi merkeze uzak ilçelerde yol tek başına günün önemli bir kısmını alıyor. Bu adreslere ekibi sabah erkenden çıkarıyor, yükleme ve boşaltmayı gün ışığında bitirecek şekilde planlıyoruz." },
      { title: "Dar merdivenli apartmanlar", text: "Eski binaların dönemeçli merdiveninden büyük mobilya kolay kolay geçmiyor, asansörler de genelde dar. Gardırop ve köşe koltuk gibi parçaları cepheden mobil asansörle alıyor, merdiveni yalnız kolilere bırakıyoruz." },
      { title: "Ay sonu yoğunluğu", text: "Kira dönemleri yüzünden ayın son ve ilk günlerinde araç ve ekip takvimi hızla doluyor. Tarihiniz esnekse ayın ortasını seçmek, değilse birkaç gün önceden yer ayırtmak işinizi kolaylaştırır." },
    ],
    faqs: [
      { question: "Nakliye kamyonu Avrasya Tüneli'nden geçebiliyor mu?", answer: "Geçemiyor. Avrasya Tüneli yalnız otomobil ve minibüs gibi hafif araçlara açık, nakliye kamyonları için kullanılamıyor. Köprülerde de ağır vasıtalara uygulanan geçiş kısıtları olduğu için yaka değiştiren taşımalarda güzergâhı aracın büyüklüğüne göre önceden belirliyoruz. Geçişi sabah ve akşam zirve saatlerinin dışına denk getirmek için yüklemeye erken başlıyoruz; böylece orta büyüklükte bir ev, çoğu durumda akşam olmadan karşı yakada kurulmuş oluyor." },
      { question: "Sitemiz taşınmaya yalnız belirli saatlerde izin veriyor, o saatte gelebilir misiniz?", answer: "Gelebiliriz. 7/24 çalıştığımız için yönetimin verdiği aralık akşama ya da hafta sonuna denk gelse de ekibi ona göre kuruyoruz. Yük asansörü randevusunu, kabin korumasını ve aracın nereye yanaşacağını yönetimle önceden konuşuyoruz. Yük asansörü verilmeyen binalarda, yönetim izin verirse büyük parçaları cepheden mobil asansörle alıyor, lobiyi ve koridorları meşgul etmeden çalışıyoruz." },
      { question: "Eski evden çıkış ile yeni eve giriş tarihleri tutmuyor, eşyaları ne yapabiliriz?", answer: "Eşyayı eski evde paketleyip depoya alıyoruz, yeni ev hazır olduğunda adresinize getirip kuruyoruz. Bekleme birkaç gün de sürse birkaç ay da sürse süreyi ihtiyacınıza göre ayarlıyoruz. Mobilyalar sökülmüş, koliler oda adına göre etiketlenmiş olarak saklandığı için teslim günü yerleşme hızlı ilerliyor. Depoya giriş ve çıkıştaki taşımalar da diğer tüm taşımalarımız gibi sigortalı." },
      { question: "İstanbul'dan başka bir şehre taşınırken eşya aynı gün yola çıkıyor mu?", answer: "Çoğu zaman evet. Yüklemeyi sabah bitirip aracı doğrudan varış şehrine yönlendiriyoruz. Kocaeli, Sakarya ve Tekirdağ gibi yakın illerde, hacme ve kat durumuna bağlı olarak, boşaltma ve kurulum genellikle aynı gün tamamlanıyor; Ankara, İzmir ya da Antalya gibi uzak illerde teslim gününü yüklemeden önce netleştiriyoruz. Taşıma sigortalı, montaj da varış adresinde yapılıyor. Varış şehrini ve tarihi 0533 929 83 24'ten söylerseniz yükleme saatini birlikte planlayalım." },
    ],
    routes: ["Ankara", "İzmir", "Bursa", "Antalya", "Kocaeli", "Tekirdağ"],
  },
  {
    slug: "kocaeli",
    name: "Kocaeli",
    metaDescription:
      "Kocaeli (İzmit) evden eve nakliyat ve yük taşımacılığı. Gebze, Darıca, Çayırova, Körfez dahil tüm ilçelere sigortalı, asansörlü taşıma.",
    intro: [
      "Kocaeli'nin merkez İzmit ile birlikte Gebze, Darıca, Çayırova, Körfez, Gölcük ve diğer tüm ilçelerine evden eve nakliyat ve yük taşımacılığı hizmeti veriyoruz.",
      "İstanbul'a komşu konumumuz sayesinde Kocaeli–İstanbul taşımalarında hızlı ve ekonomik çözümler sunuyoruz. Bölgenin sanayi yoğun yapısı nedeniyle ofis, işyeri ve fabrika taşımacılığında da deneyimliyiz.",
    ],
    body: [
      "Gebze, Darıca ve Çayırova, İstanbul'un Tuzla ve Pendik tarafıyla neredeyse iç içe; il sınırını geçtiğinizi çoğu zaman yalnız tabeladan anlıyorsunuz. Kartal'dan Darıca'ya ya da Pendik'ten Gebze'ye yapılan bir taşınma, plan açısından uzun bir şehir içi taşımaya benziyor. Yine de iki ili bağlayan TEM ve D-100 sabah ve akşam iş trafiğiyle ağırlaşıyor; yükleme geç başlarsa boşaltma akşama kalıyor, o nedenle işe günün ilk saatlerinde başlıyoruz. Bölgede bina tipi de adresten adrese değişiyor. Darıca'da sahile yakın sitelerle eski apartmanlar yan yana, Bayramoğlu tarafında villa ve site yerleşimi var; Gebze merkezde ise sık apartman dokusu içinde aracın duracağı yeri bulmak zaman alabiliyor. Sitelerde yönetim randevusu ve yük asansörü saati, asansörsüz apartmanlarda ise mobil asansör planın parçası oluyor. Bu çeşitlilik yüzünden Kocaeli evden eve nakliyat işlerinde tek tip araçla yola çıkmıyor, ekipmanı her adres için ayrı seçiyoruz.",
      "Kocaeli'de taşınan şey her zaman ev eşyası olmuyor. Gebze'deki organize sanayi bölgelerinde, Dilovası OSB'de ve Çayırova'da Şekerpınar çevresindeki fabrika ve depolarda yapılan taşımalarda raf sistemleri, arşiv dolapları, tezgâhlar ve küçük makineler yer değiştiriyor. Bu tesislerin girişinde araç ve personel kaydı, sahada baret ve yelek gibi iş güvenliği kuralları standart; ekibi bu kurallara hazır gönderiyoruz. Ağır parçalarda tesisin kendi forklifti olup olmadığını önceden soruyor, yoksa gereken ekipmanı plana ekliyoruz. İşin aksamaması için bu taşımaları çoğunlukla hafta sonuna ya da bakım duruşu gibi üretimin zaten durduğu günlere yerleştiriyoruz. Gebze'deki Bilişim Vadisi ve çevresindeki teknoloji firmalarında öncelik başka: bilgisayarlar, ekranlar ve dosyalar karışmadan yeni adrese geçmeli. Masa ve dolaplar numaralanıyor, kablolar cihazıyla aynı poşete konuyor, yeni ofiste her şey eski yerleşime göre kuruluyor. Ofis taşımasını hafta sonuna yaydığımızda çalışanlar pazartesi sabahı masalarına oturup kaldıkları yerden devam edebiliyor.",
      "İzmit merkezde işin zorluğu, binanın sahile mi yamaca mı yakın olduğuna göre değişiyor. D-100'e yakın düz kesimde araç binanın önüne rahat yanaşıyor; şehir körfezden kuzeye doğru tırmandıkça ise sokaklar dikleşip daralıyor ve büyük kamyonun dönecek yer bulması zorlaşıyor. Bu mahallelerde eşyayı daha kısa bir araçla taşıyor ya da cepheden mobil asansör kuruyoruz; hangisinin uygun olduğuna sokağın durumuna bakarak karar veriyoruz. Kocaeli Üniversitesi'nin Umuttepe Yerleşkesi çevresindeki öğrenci evlerinde hacim küçük, ama dönem başı ve sonunda herkes aynı günlerde taşınmak istiyor. Kartepe ve Başiskele'deki yeni sitelerde girişteki güvenlik kaydı ve yönetimin verdiği taşınma saati günün planını belirliyor; müstakil evlerde ise eşya listesini bahçe ve depoyla birlikte çıkarıyoruz. İzmit evden eve nakliyat işlerinde bu farkları baştan konuşup aracı ve ekibi adrese göre ayarlıyoruz. Ekibimiz İstanbul'dan geldiği için Kocaeli içindeki taşımalarda da güne erken başlayıp boşaltmayı karanlığa bırakmıyoruz.",
    ],
    notes: [
      { title: "Körfezin güney kıyısı", text: "Gölcük ve Karamürsel, İzmit'e göre körfezin karşı yakasında kalıyor. İstanbul'dan gelirken Osmangazi Köprüsü'nden geçmenin mi, körfezi İzmit üzerinden dolaşmanın mı daha hızlı olacağına o günün trafiğine ve araca bakarak karar veriyoruz." },
      { title: "Kandıra'da dar yollar", text: "Kefken ve Kerpe tarafındaki yazlıklara ve köy evlerine giden yollar dar, yer yer virajlı. Büyük kamyon yerine yola uygun araçla geliyor, hacim büyükse işi iki sefere bölüyoruz." },
      { title: "TEM ile D-100", text: "İzmit ile Gebze arasında TEM ve D-100 birbirine paralel ilerliyor; birinde kaza ya da yol çalışması olduğunda diğeri çoğu zaman daha hızlı. Rotayı yola çıkmadan iki hattın o anki durumuna bakarak seçiyoruz." },
    ],
    faqs: [
      { question: "İstanbul'dan Kocaeli'ye taşınma aynı gün biter mi?", answer: "Çoğu taşıma aynı gün bitiyor; süreyi eşya hacmi, kat durumu ve gideceğiniz ilçe belirliyor. Gebze ve Darıca İstanbul'un hemen yanında, İzmit ve Kartepe biraz daha uzakta. Ekibimiz Avrupa Yakası'ndaki Kağıthane'den çıktığı için Boğaz geçişini de hesaba katıp yüklemeyi sabah erken başlatıyoruz. Böylece yola iş trafiği hafiflediğinde çıkıyor, boşaltmayı ve kurulumu gün ışığında bitiriyoruz." },
      { question: "Gebze'deki depomuzu veya fabrikamızı hafta sonu taşıyabilir misiniz?", answer: "Taşıyabiliriz. 7/24 çalıştığımız için tesis taşımalarını hafta sonu ya da gece saatlerinde yapmak sorun olmuyor. Önce tesisi görüp raf, makine ve stok için hangi araç ve ekipmanın gerektiğini çıkarıyoruz. Sökülen her parça etiketleniyor, küçük bağlantı elemanları ait oldukları rafın yanına poşetlenip bantlanıyor; yeni adreste yerleşim planına göre kurulum yapılıyor. Böylece pazartesi sabahı sevkiyata kaldığınız yerden devam edebiliyorsunuz." },
      { question: "İzmit'te yokuşlu bir sokaktayız, kamyon kapıya kadar gelebilir mi?", answer: "Sokağın genişliğine ve eğimine bağlı. Yamaçtaki bazı sokaklarda büyük kamyon ne dönebiliyor ne de güvenle park edebiliyor. Böyle adreslerde eşyayı küçük bir araçla caddede bekleyen kamyona aktarıyor ya da baştan küçük araçla çalışıyoruz. Bina cephesi uygunsa büyük parçaları mobil asansörle indiriyoruz. Hangi yöntemle çalışacağımızı adresi inceledikten sonra, taşınma gününden önce size bildiriyoruz." },
      { question: "Umuttepe'deki öğrenci evimden birkaç koli ve bir yatak taşıtacağım, bu kadar az eşyaya gelir misiniz?", answer: "Geliyoruz. Kocaeli Üniversitesi çevresindeki öğrenci taşımaları genelde küçük hacimli; tek araç ve az kişilik ekiple çıkıp işi kısa sürede bitiriyoruz. Eşyayı İzmit'te başka bir eve, İstanbul'a ya da memleketinize götürebiliriz, taşıma her durumda sigortalı. Dönem başı ve sonu yoğun geçtiği için tarihi erken söylemeniz iyi olur; 0533 929 83 24'ten arayıp eşyanızı kısaca anlatmanız yeterli." },
    ],
    districts: [
      "İzmit", "Gebze", "Darıca", "Çayırova", "Körfez", "Gölcük", "Derince", "Kartepe", "Başiskele",
      "Dilovası", "Karamürsel", "Kandıra"
    ],
    routes: ["İstanbul", "Ankara", "Bursa", "Sakarya", "Yalova"],
  },
  {
    slug: "tekirdag",
    name: "Tekirdağ",
    metaDescription:
      "Tekirdağ evden eve nakliyat. Çorlu, Çerkezköy, Kapaklı, Süleymanpaşa dahil tüm ilçelere sigortalı, asansörlü taşımacılık.",
    intro: [
      "Tekirdağ ve Çorlu, Çerkezköy, Kapaklı, Süleymanpaşa, Malkara ilçelerine evden eve nakliyat ve şehirler arası yük taşımacılığı yapıyoruz.",
      "Trakya'nın hızla büyüyen ve sanayisi gelişen bu bölgesinde, İstanbul'dan Tekirdağ'a taşınanların ve bölge içi taşımaların ihtiyaçlarını sigortalı ve asansörlü hizmetle karşılıyoruz.",
    ],
    body: [
      "Çorlu, Çerkezköy, Kapaklı ve Ergene'de pek çok ailenin günlük düzeni fabrika vardiyasına göre kurulu; taşınma günü de çoğu zaman buna göre seçiliyor. Çerkezköy OSB ve çevresindeki fabrikalarda çalışanlar işe yakın oturmak için bu ilçeler arasında sık sık ev değiştirebiliyor. Gece vardiyasından çıkan birinin sabah sekizde ekibi kapıda karşılaması gerçekçi olmadığı için yüklemeyi vardiya çıkışına ya da izin gününe denk getiriyor, gerekirse akşam saatlerinde başlatıyoruz. Kapaklı ve Çerkezköy'de son yıllarda yükselen çok katlı sitelerde yük asansörü, otopark girişi ve taşınma saati yönetimin kurallarına bağlı. Bu bilgileri birkaç gün önceden alıyor, ekibi ve aracı ona göre ayarlıyoruz; yük asansörü verilmeyen binalarda gardırop ve koltuk takımı balkondan mobil asansörle iniyor. Bölgede işyeri taşımaları da ayrı bir başlık: sanayi bölgesindeki firmaların idari ofislerini, arşiv dolaplarını ve depo raflarını söküp etiketliyor, yeni adreste aynı düzende yerleştiriyoruz. Bu tür işlerde hedef, ertesi sabah mesainin kaldığı yerden devam edebilmesi.",
      "Süleymanpaşa'da işin rengi değişiyor. Merkezde sokaklar sahilden içeriye doğru yükseliyor; eski apartmanların bir kısmında asansör bulunmuyor, olanlar da genellikle bir koltuğu almayacak kadar küçük. Bu binalarda kolileri ve küçük eşyayı merdivenden indiriyor, gardırop ve kanepe gibi büyük parçalar için balkon cephesine mobil asansör kuruyoruz. Lodosun sert estiği günlerde asansörle çalışmak güvenli olmayabildiği için sahile bakan cephelerde hava durumunu bir gün önceden kontrol ediyoruz. Değirmenaltı ve sahil şeridindeki apartmanlarda asıl mesele park yeri; sahil yolunda kamyonu uzun süre bekletmek yerine yükleme noktasını sizinle birlikte önceden, yan sokaklardan birinde belirliyoruz. Barbaros ve Kumbağ'da yazlıkla kalıcı ev iç içe. Yaz aylarında sahile yakın sokaklar kalabalıklaştığı için bu adreslerdeki işleri mümkünse hafta içine ya da sezon dışına alıyoruz. Tekirdağ Namık Kemal Üniversitesi'nin kampüsü de Süleymanpaşa'da; eylül başında İstanbul'dan gelen öğrencilerin taşımaları başlıyor. Bu işler küçük hacimli olduğu için kamyon göndermiyor, küçük bir araçla çıkıyoruz.",
      "Kağıthane'den Tekirdağ'a giden bir ekibin yolda en çok vakit kaybettiği yer, çoğu zaman İstanbul'un batı çıkışı. Büyükçekmece'ye kadar olan bölümü sabah trafiği başlamadan geçmek için ekibi erkenden yola çıkarıyoruz. Çorlu, Çerkezköy ve Kapaklı'ya genelde TEM ya da D-100 üzerinden gidiyor, Süleymanpaşa ve Marmaraereğlisi'ne Silivri'den sonra sahile paralel ilerleyen karayoluyla ulaşıyoruz. İstanbul'dan Tekirdağ'a evden eve nakliyatta taşımaların çoğu aynı gün bitiyor; süreyi en çok eşya hacmi, iki adresteki kat durumu ve aradaki mesafe belirliyor. Ters yönde, Tekirdağ'dan İstanbul'a yapılan taşımalarda yüklemeyi sabah erken başlatıp boşaltmanın akşam trafiğine kalmamasına dikkat ediyoruz. Tekirdağ içindeki taşımalarda da, örneğin Çorlu'dan Süleymanpaşa'ya, ekip İstanbul'dan geliyor. Bu yüzden Şarköy, Mürefte, Malkara ve Hayrabolu gibi İstanbul'a uzak adreslerde yükleme saatini yol süresini hesaba katarak veriyoruz. İzmir yönüne giden taşımalarda ise güzergâhı İstanbul üzerinden ya da Malkara ve 1915 Çanakkale Köprüsü üzerinden, günün koşullarına göre belirliyoruz. Saray ve Muratlı'nın köylerinden çıkan işlerde aracı yolun genişliğine göre seçiyor, bahçeli müstakil evlerde bahçe eşyasını ve kilerden çıkanları ayrı paketliyoruz.",
    ],
    notes: [
      { title: "Vardiyaya göre saat", text: "Çerkezköy OSB çevresinde çalışanların taşınmasını vardiya çıkışına ya da izin gününe göre planlıyoruz. Akşam başlayan yüklemeler de mümkün; yalnız sitenin akşam saatleriyle ilgili kuralını önceden soruyoruz." },
      { title: "Erken yola çıkış", text: "Ekip her taşımaya Kağıthane'den çıktığı için İstanbul'un batı çıkışındaki trafik günün planını belirliyor. Büyükçekmece'yi sabah yoğunluğu başlamadan geçmek, Tekirdağ'daki yüklemenin zamanında başlamasını ve işin gün içinde bitmesini kolaylaştırıyor." },
      { title: "Köy yolunda araç seçimi", text: "Malkara, Hayrabolu, Saray ve Muratlı'nın köylerinde yollar çoğu zaman dar, evler bahçeli ve müstakil. Büyük kamyonun dönemeyeceği adreslere daha küçük araçla gidiyor, gerekirse eşyayı iki seferde taşıyoruz." },
    ],
    faqs: [
      { question: "İstanbul'dan Çorlu'ya taşınma aynı gün biter mi?", answer: "Çoğu zaman biter. Ekip sabah erkenden Kağıthane'den çıkıyor, İstanbul'un batı çıkışını trafik yoğunlaşmadan geçip TEM ya da D-100 üzerinden Çorlu'ya ulaşıyor. Süreyi asıl belirleyen, eşya hacmi ile iki adresteki kat ve asansör durumu. Asansörsüz yüksek katlar ya da eşyası kalabalık bir ev söz konusuysa yüklemeyi bir gün, boşaltmayı ertesi sabah yapmayı önerebiliyoruz; bunu planlama aşamasında baştan söylüyoruz." },
      { question: "Kapaklı'da vardiyalı çalışıyorum, taşınmayı akşam yapabilir miyiz?", answer: "Yapabiliriz. 7/24 çalıştığımız için yüklemeyi vardiya çıkışınıza göre akşam ya da gece başlatabiliyoruz. Burada belirleyici olan sitenin kuralı: bazı siteler akşam saatlerinde yük asansörü vermiyor ya da gürültü nedeniyle taşınmaya saat sınırı koyuyor. Yönetimden izin verilen saat aralığını öğrenip bize iletmeniz yeterli, isterseniz yönetimle görüşmeyi biz üstleniyoruz. Ekip o saatte kapınızda oluyor." },
      { question: "Tekirdağ Namık Kemal Üniversitesi'ni kazandım, birkaç koli ve bir yatak için de geliyor musunuz?", answer: "Geliyoruz. Öğrenci taşımalarında eşya genelde birkaç koli, yatak, çalışma masası ve küçük bir buzdolabından oluşuyor; bunun için küçük bir araç ve iki kişilik ekip yetiyor. İstanbul'daki aile evinden yüklemeyi sabah yapıp eşyayı Süleymanpaşa'daki eve aynı gün bırakmayı hedefliyoruz. Koliniz yoksa paketleme malzemesini biz getiriyoruz, söktüğümüz yatak ve masayı yeni evde yeniden kuruyoruz." },
      { question: "Şarköy'deki yazlığımızı boşaltıp eşyaları İstanbul'a getirebilir misiniz?", answer: "Getiriyoruz. Şarköy ve Mürefte İstanbul'a uzak olduğu için ekip sabah erken çıkıyor, yüklemeyi gün ışığında bitirecek şekilde plan yapıyoruz. Yazlıklarda bahçe mobilyası, şezlong ve beyaz eşya gibi hacimli parçalar çok olur; bunları ayrıca sarıp araçta sabitliyoruz. Eşyanın bir kısmı İstanbul'daki eve sığmayacaksa depolama seçeneği de var. Tarihi ve evin durumunu 0533 929 83 24'ten konuşalım, aracı ona göre belirleyelim." },
    ],
    districts: [
      "Süleymanpaşa", "Çorlu", "Çerkezköy", "Kapaklı", "Ergene", "Malkara", "Saray", "Hayrabolu",
      "Şarköy", "Muratlı", "Marmaraereğlisi"
    ],
    routes: ["İstanbul", "Kocaeli", "Bursa", "İzmir"],
  },
  {
    slug: "bursa",
    name: "Bursa",
    metaDescription:
      "Bursa evden eve nakliyat ve şehirler arası yük taşımacılığı. Nilüfer, Osmangazi, Yıldırım ve tüm ilçelere sigortalı, asansörlü taşıma.",
    intro: [
      "Bursa'nın Nilüfer, Osmangazi, Yıldırım merkez ilçeleri başta olmak üzere tüm ilçelerine evden eve nakliyat ve yük taşımacılığı hizmeti veriyoruz.",
      "İstanbul–Bursa hattındaki düzenli seferlerimizle eşyalarınızı güvenle taşıyor; paketleme, mobilya söküm-montaj ve depolama dahil kapıdan kapıya tam hizmet sunuyoruz.",
    ],
    body: [
      "Osmangazi ve Yıldırım'ın tarihi mahallelerinde araç çoğu zaman kapıya kadar gelemiyor. Muradiye, Hisar ve Pınarbaşı ile Yıldırım tarafında Emirsultan ve Yeşil çevresi Uludağ'ın eteğine yaslanıyor; sokaklar dar, yokuşlar dik, kimi evin önünde kamyonun duracağı düz bir parça bile bulunmuyor. Bu adreslere kısa şasi bir araçla yaklaşıyor, eşyayı araca kadar elle taşıyoruz. Eski Bursa evlerinde merdivenler dar ve sarp olduğu için gardırop, vitrin ve köşe takımı genellikle içeriden çıkmıyor. Dolapları ve yatak bazalarını parçalara ayırıp yeni evde kuruyoruz; tek parça kalan vitrin ve koltuklar ise balkon ya da pencere cephesine kurulan mobil asansörle iniyor. Kapalıçarşı ve Ulu Cami çevresinde dükkân ya da atölye taşıyacaksanız gündüz araç yanaştırmak zor, bu işleri çarşı kapandıktan sonra ya da sabahın ilk saatlerinde yapıyoruz. Ekip İstanbul'dan geldiği için sokağı önceden görmek bizim için önemli; birkaç fotoğraf, taşınma sabahı kapıda kaybedilecek zamanı azaltıyor.",
      "Nilüfer'de taşınma, daha eşya inmeden site kapısında başlıyor. Özlüce, Beşevler ve İhsaniye'deki bloklarda, Mudanya Yolu üzerindeki büyük sitelerde de taşınma günü güvenliğe önceden bildiriliyor; kimi yönetim yük asansörünü belli saatlerde açıyor, kimi araç plakasını bir gün önceden istiyor. Bazı siteler asansör kabininin korunmasını da şart koşuyor; kabini battaniye ve köşe koruyucuyla kaplayıp iş bitince temiz teslim ediyoruz. Blok sayısı fazla olan sitelerde aracın hangi bloğun önüne yanaşacağını güvenlikle baştan konuşmak, taşınma sabahı yaşanacak karışıklığı önlüyor. Yeni teslim edilen projelerde taşınmalar aynı haftalara yığılabiliyor; yönetim günde tek taşınmaya izin veriyorsa sıranızı erkenden almanız işinizi kolaylaştırır. Görükle'deki Bursa Uludağ Üniversitesi kampüsünün çevresinde ise takvimi akademik yıl belirliyor: haziran ve temmuzda mezun olup İstanbul'a dönenler, eylülde yeni gelenler taşınıyor. Hacim küçük olduğundan tek araç ve iki kişi çoğu zaman yetiyor. Ev arkadaşlarıyla paylaşılan dairelerde eşyalar karışmasın diye kolileri isimle etiketliyor, her kişinin eşyasını araçta ayrı bölüme yüklüyoruz.",
      "Bursa ile İstanbul arasındaki yolu ekip çoğunlukla Osmangazi Köprüsü ve İstanbul–İzmir Otoyolu üzerinden alıyor; köprü yerine körfezi dolaşmak ya da feribota binmek gerekirse güzergâhı taşınma gününün koşullarına göre seçiyoruz. İstanbul–Bursa evden eve nakliyatta bir daire taşıması çoğu zaman tek günde bitiyor, ama eşya fazlaysa ve iki tarafta da asansör yoksa boşaltmayı ertesi sabaha bırakmak daha sağlıklı olabiliyor. İnegöl'den yapılan taşımalar ev taşımasından biraz farklı: mobilya mağazasından ya da atölyeden alınan koltuk takımını, yemek odasını ya da yatak odasını İstanbul'daki eve götürüyoruz. Fabrika ambalajı uzun yol için tek başına yetmeyebiliyor; parçaları ek korumayla sarıp araçta birbirine sürtmeyecek şekilde sabitliyoruz. Mudanya'da Güzelyalı'nın sahil apartmanlarıyla Trilye'nin dar sokaklı taş evleri aynı ilçede bambaşka araç ve ekip istiyor. Gemlik'te Kurşunlu'daki yazlıklara ya da Keles, Orhaneli ve Büyükorhan gibi dağlık ilçelerdeki evlere giderken de aracı yolun durumuna göre seçiyoruz.",
    ],
    notes: [
      { title: "Yokuşta kısa şasi", text: "Muradiye, Hisar ve Emirsultan gibi Uludağ eteğindeki mahallelerde büyük kamyon dönemiyor, durabileceği düz alan da az. Bu sokaklara kısa şasi araçla giriyor, aracın yanaşamadığı son metreleri taşıyıcı ekiple tamamlıyoruz." },
      { title: "Site kapısında kayıt", text: "Nilüfer'deki sitelerin bir kısmı araç plakasını, taşınma saatini ve asansör korumasını önceden soruyor. Bu bilgileri yönetimle birkaç gün önce netleştiriyoruz; ekip de güvenlikte beklemeden doğrudan işe başlıyor." },
      { title: "İnegöl'den yeni mobilya", text: "İnegöl'den alınan yeni mobilyayı fabrika ambalajının üzerine battaniye ve streç sararak yol boyunca koruyoruz. Satıcının kurulum hizmeti yoksa parçalı gelen takımların montajını İstanbul'daki evde ekip yapıyor." },
    ],
    faqs: [
      { question: "İstanbul'dan Bursa'ya eşyalar hangi yoldan geliyor, taşınma kaç saat sürer?", answer: "Araç genelde Kağıthane'den çıkıp Osmangazi Köprüsü ve İstanbul–İzmir Otoyolu üzerinden Bursa'ya geliyor; gerektiğinde güzergâhı o günün yol durumuna göre değiştiriyoruz. Baştan kesin saat vermek doğru olmaz, çünkü işin büyük kısmı yolda değil, iki adresteki yükleme ve boşaltmada geçiyor. Bir daire taşımasını çoğunlukla tek günde bitiriyoruz: sabah İstanbul'da yükleme, öğleden sonra Bursa'da boşaltma. Nilüfer'deki sitelerde taşınma saati yönetimin onayına bağlıysa planı o saate göre geriye doğru kuruyoruz." },
      { question: "Muradiye'de yokuşlu ve dar bir sokaktayız, eşyalarımız nasıl taşınacak?", answer: "Önce sokağın durumuna bakıyoruz. Kısa şasi araç kapıya yaklaşabiliyorsa oradan yüklüyoruz; yaklaşamıyorsa aracı en yakın düz noktaya bırakıp eşyayı elle taşıyoruz. Merdivenden geçmeyen gardırop ya da köşe takımı için balkon veya pencere cephesine mobil asansör kuruyoruz. Eğimli sokakta asansörün nereye kurulacağını taşınmadan önce birkaç fotoğrafla netleştirmek, o sabah işi epey hızlandırıyor." },
      { question: "Bursa Uludağ Üniversitesi'nden mezun oldum, Görükle'deki eşyamı İstanbul'a taşıyabilir misiniz?", answer: "Taşıyoruz. Mezuniyet dönemindeki öğrenci taşımaları genelde küçük hacimli olduğu için tek araçla çıkıyoruz. Kira sözleşmeniz bitmeden evi boşaltmanız gerekiyorsa tarihi ona göre öne alıyoruz. Ev arkadaşlarınızla aynı daireden çıkıyor ve İstanbul'da farklı adreslere gidiyorsanız teslim sırasını baştan planlıyoruz. Koli ve bant yoksa paketleme malzemesini biz getiriyoruz." },
      { question: "İnegöl'den aldığım mobilyayı İstanbul'a taşıyabilir misiniz?", answer: "Evet. Mobilyayı mağazadan ya da atölyeden teslim alıp İstanbul'daki adresinize getiriyoruz. Uzun yolda çizilmemesi için ambalajın üzerine ek koruma sarıyor, parçaları araçta sabitliyoruz; taşıma süresince mobilya sigorta kapsamında oluyor. Satıcı kurulum yapmıyorsa montajı yeni evde biz üstleniyoruz. Teslim alacağımız yerin adresini ve takımın kaç parça olduğunu 0533 929 83 24'ten paylaşın, uygun aracı ve günü birlikte belirleyelim." },
    ],
    districts: [
      "Osmangazi", "Nilüfer", "Yıldırım", "İnegöl", "Gemlik", "Mudanya", "Gürsu", "Kestel",
      "Mustafakemalpaşa", "Karacabey", "Orhangazi", "Yenişehir", "İznik", "Orhaneli", "Keles",
      "Harmancık", "Büyükorhan"
    ],
    routes: ["İstanbul", "Kocaeli", "Yalova", "Ankara", "İzmir"],
  },
  {
    slug: "sakarya",
    name: "Sakarya",
    metaDescription:
      "Sakarya (Adapazarı) evden eve nakliyat. Serdivan, Erenler, Hendek dahil tüm ilçelere sigortalı, asansörlü taşımacılık.",
    intro: [
      "Sakarya merkez Adapazarı ile Serdivan, Erenler, Hendek ve diğer ilçelerine evden eve nakliyat ve yük taşımacılığı yapıyoruz.",
      "İstanbul ve Kocaeli'ye yakınlığı sayesinde Sakarya taşımalarında hızlı çözümler üretiyor; sigortalı ve asansörlü taşımacılıkla eşyalarınızı güvenle ulaştırıyoruz.",
    ],
    body: [
      "Adapazarı ovanın ortasına kurulu; merkezde, Erenler tarafında ve Serdivan'ın büyük kısmında yokuş neredeyse yok. Taşıma açısından bu ciddi bir kolaylık: araç çoğu binanın önüne rahat yanaşıyor, mobil asansör düz zeminde kısa sürede kuruluyor ve yükleme yokuşlu bir şehre göre hızlı ilerliyor. Zorluk daha çok merkezin trafiğinde çıkıyor. Çark Caddesi çevresindeki çarşı bölgesinde gündüz araç ve park yoğunluğu yüksek; bu adreslerde yüklemeyi sabah erken ya da akşam dükkânlar kapandıktan sonra yapıyoruz. Sakarya Üniversitesi'nin Esentepe Kampüsü Serdivan'da; kampüse yakın öğrenci evlerindeki taşımalar genelde tek araçla ve kısa sürede bitiyor. Merkezdeki aile taşınmalarında ise hacim büyüdükçe ekibi kalabalıklaştırıp işi tek seferde tamamlamaya çalışıyoruz. Ovadaki adreslerin çoğunda iş rahat ilerliyor; Sakarya evden eve nakliyat işlerinde asıl planlama isteyen yerler göl kıyısı, sahil ve vadi köyleri. Bu adreslerde aracı ve günü yolun durumu ile sezon belirliyor.",
      "Sapanca Gölü çevresiyle Karasu ve Kocaali sahili, Sakarya'da ikinci konutların toplandığı yerler ve buradaki taşımalar şehir içindekilere benzemiyor. Kırkpınar gibi göle yakın mahallelerde villa ve bungalov çok. Bungalovlar çoğunlukla ahşap; kapıları dar, çatı katına çıkan merdivenleri dik oluyor. Bu evlerde zemini ve basamakları örtüyle kaplıyor, büyük parçaları sökerek çıkarıyoruz. Bahçe mobilyası, salıncak, mangal ve kamp malzemesi listeye eklenince hacim tahmin edilenden büyük çıkabiliyor; eşya listesini çıkarırken evin dışını da sormamız bu yüzden. Karasu ve Kocaali'deki yazlıklarda taşımanın kapsamı aileden aileye değişiyor: kimi evi tamamen boşaltıyor, kimi yalnız birkaç parçayı İstanbul'daki ya da Adapazarı'ndaki evine götürüp gerisini bırakıyor. Kiralık yazlıktan çıkanlar ya da eşyasını kış boyunca boş evde bırakmak istemeyenler için eşyayı depoya alıp yeni sezonda istedikleri adrese teslim ediyoruz. Az eşyalı bu işlere büyük kamyon yerine daha küçük bir araçla çıkıyoruz.",
      "İstanbul ile Sakarya arasında üç ana hat var: D-100, TEM ve Akyazı yakınında TEM'e bağlanan Kuzey Marmara Otoyolu. Hangisini kullanacağımızı yükleme adresi, aracın büyüklüğü ve Kocaeli geçişindeki o günkü trafik belirliyor. Ekibimiz İstanbul'dan geldiği için Sakarya içindeki taşımalarda da yol süresini gün planına baştan ekleyip yüklemeye sabah başlıyoruz. Varış ilçesi de planı değiştiriyor. Hendek ve Akyazı otoyola yakın, araç bu ilçelere kolay ulaşıyor; Hendek ve Arifiye çevresindeki fabrika ve atölyelerin taşımalarını, işleri aksamasın diye çoğunlukla hafta sonuna alıyoruz. Geyve ve Pamukova'da yerleşim Sakarya Nehri vadisi boyunca uzanıyor; yamaçlardaki köy evlerine giden yollar dar ve eğimli olabildiği için bu adreslere orta boy araçla geliyoruz. Gerekirse eşyayı köy yolunun başında bekleyen büyük araca aktarıp İstanbul'a ya da şehir merkezine tek seferde götürüyoruz. Evin yolunu baştan konuşmak, taşınma sabahı kapıda araç değiştirmek zorunda kalmamanın en kolay çaresi.",
    ],
    notes: [
      { title: "Göl çevresi yolları", text: "Sapanca Gölü çevresindeki villa ve bungalovlara giden yolların bir kısmı dar ve eğimli, yağmurdan sonra toprak kesimler kayganlaşıyor. Bu adreslere yola uygun boyutta araçla geliyor, kapıya yaklaşamadığımız yerde eşyayı taşıyıcı ekiple araca ulaştırıyoruz." },
      { title: "Sahilde sezon takvimi", text: "Karasu ve Kocaali'de yaz ortasında hafta sonları sahile giden yollar ve site girişleri kalabalıklaşıyor. Yazlık taşımalarını mümkünse hafta içine ya da sezon açılmadan önceki haftalara alıp yolda kaybedilen zamanı azaltıyoruz." },
      { title: "Serdivan'da dönem başı", text: "Sakarya Üniversitesi çevresinde dönem başında ve sonunda öğrenci taşınmaları aynı haftalara sıkışıyor. Bu haftalarda tarih bulmak zorlaştığı için taşınma gününü kesinleşir kesinleşmez bildirmeniz, istediğiniz gün ve saati almanızı kolaylaştırıyor." },
    ],
    faqs: [
      { question: "Avrupa Yakası'ndan Adapazarı'na taşınırken hangi yolu kullanıyorsunuz?", answer: "Yükleme adresine ve aracın büyüklüğüne göre seçiyoruz. Avrupa Yakası'ndan çıkışta Kuzey Marmara Otoyolu çoğu zaman en pratik hat, çünkü şehir içi trafiğe ve Boğaz'daki yoğunluğa daha az takılıyor. Bazı işlerde TEM daha uygun düşüyor; son kararı yükleme günü trafiğe bakarak veriyoruz. Yüklemeyi sabah erken bitirdiğimizde çoğu taşıma aynı gün Adapazarı'nda boşaltılıp kuruluyor, hacim büyük ve katlar yüksekse iş akşama uzayabiliyor." },
      { question: "Adapazarı'nda asansörsüz bir binadan taşınıyoruz, mobil asansör kurulabilir mi?", answer: "Büyük ihtimalle evet. Merkezde zemin düz olduğu için asansör aracı çoğu binanın önüne kolayca konumlanıyor; balkon ya da geniş bir pencere varsa büyük parçaları cepheden indiriyoruz. Aracı asfalta ya da sert zemine kuruyoruz; yağışlı günlerde bahçe ve toprak alanları kullanmıyoruz. Koliler ise taşıyıcı ekiple merdivenden iniyor, böylece iş iki koldan ilerliyor ve süre kısalıyor." },
      { question: "Serdivan'daki öğrenci evimi yazın boşaltacağım, eşyalarımı eylüle kadar saklayabilir misiniz?", answer: "Saklayabiliriz. Dönem sonunda eşyanızı paketleyip depoya alıyor, yeni dönem başlamadan önce istediğiniz adrese teslim ediyoruz. Yaz boyunca boş eve kira ödemek istemeyenler için pratik bir çözüm; süreyi ihtiyaca göre ayarlıyoruz. Koliler isim ve içerikle etiketlendiği için teslimde neyin nerede olduğu belli oluyor. Depoya gidiş ve dönüş yolunda eşyanız sigorta kapsamında." },
      { question: "Karasu'daki yazlığımızın eşyasını İstanbul'a taşıyabilir misiniz?", answer: "Taşıyabiliriz. Yazlıktaki eşyanın tamamını ya da yalnız bir kısmını alıp İstanbul'daki evinize götürüyoruz; eşya azsa aracı da ona göre küçültüyoruz. Sezon kapanışı yoğun geçtiği için tarihi erken belirlemek işi kolaylaştırıyor. Mobilyalar yazlıkta sökülüp paketleniyor, İstanbul'da yeniden kuruluyor ve taşıma boyunca sigortalı. Yazlığın adresini ve yaklaşık eşya listesini 0533 929 83 24'ten iletirseniz uygun aracı söyleyelim." },
    ],
    districts: [
      "Adapazarı", "Serdivan", "Erenler", "Arifiye", "Sapanca", "Akyazı", "Hendek", "Karasu", "Geyve",
      "Pamukova", "Ferizli", "Söğütlü", "Kocaali", "Kaynarca", "Karapürçek", "Taraklı"
    ],
    routes: ["İstanbul", "Kocaeli", "Bursa", "Ankara"],
  },
  {
    slug: "yalova",
    name: "Yalova",
    metaDescription:
      "Yalova evden eve nakliyat. Çiftlikköy, Çınarcık, Altınova dahil tüm ilçelere sigortalı, asansörlü taşımacılık.",
    intro: [
      "Yalova merkez ile Çiftlikköy, Çınarcık, Altınova, Termal ilçelerine evden eve nakliyat ve yük taşımacılığı hizmeti veriyoruz.",
      "İstanbul'a feribot ve kara yoluyla yakın konumda; hem konut hem yazlık taşımalarında deneyimli ekibimizle sigortalı ve asansörlü taşıma yapıyoruz.",
    ],
    body: [
      "Çınarcık, Esenköy ve Armutlu'daki yazlık sitelerde yılın iki dönemi hareketli geçiyor: yaz başı ve sonbahar. Mayıs-haziranda İstanbul'dan gelen eşya yazlığa yerleşiyor, eylül-ekimde evler kapanırken beyaz eşyanın ve mobilyanın bir kısmı geri dönüyor. Sezon içinde site yönetimlerinin kuralları işin seyrini belirliyor. Bazı siteler yaz boyunca taşınmaya yalnız belirli saatlerde izin veriyor, bazıları hafta sonu nakliye aracını içeri almıyor; havuz ve plaj tarafındaki bloklara araç yanaştırmak da çoğu zaman mümkün olmuyor. Bu yüzden tarih vermeden önce sitenin kuralını öğreniyor, gerekirse eşyayı araçtan bloğa elle taşıyoruz. Temmuz ve ağustosta Çınarcık sahilinde trafik ve park yeri sıkıntısı arttığı için yüklemeyi sabahın erken saatlerine çekiyoruz. Sezon dışında tablo tersine dönüyor: site sessiz, görevli az. Taşınma günü sizin ya da bir yakınınızın hangi saatte orada olacağını ve siteye girişin nasıl yapılacağını önceden netleştiriyoruz. Kışın yazlıkta eşya bırakmak istemeyenler için hepsini paketleyip depoluyor, yaz başında aynı eve geri getiriyoruz.",
      "Emekliliğinde İstanbul'daki evini kapatıp Yalova'ya yerleşenlerin taşınması, yazlık işinden epey farklı. Burada bir evin bütün eşyası, yıllar içinde biriken kitaplar, porselen takımları ve aile hatıraları yola çıkıyor; paketlemede acele etmiyor, kırılacak eşyayı tek tek sarıp kolileri oda adına göre etiketliyoruz. Yeni evin oda ölçülerini önceden paylaşırsanız hangi mobilyanın hangi odaya gideceğini yükleme sırasında işaretliyoruz. Merkezin sahile yakın apartmanlarında ve Çiftlikköy'deki sitelerde plan, İstanbul'daki bir apartman taşımasına benziyor: kat, asansör ve aracın duracağı yer. Asansörü küçük olan yüksek katlarda kanepe ve gardırop gibi parçaları balkondan mobil asansörle indiriyoruz. Altınova'da tersaneler bölgesinin çevresindeki kiralık dairelerden çıkan küçük taşımalar için ise tek araç ve az kişilik bir ekip yetiyor. Termal ve Gökçedere'de evler ormanlık yamaçlara dağılmış; buradaki işlerde aracı, ana yoldan ayrılan dar yolların durumuna göre seçiyoruz. Yalova evden eve nakliyat taleplerinde planı bu yüzden adres adres kuruyoruz; aynı ilçede bile iki ev farklı araç isteyebiliyor.",
      "Yalova'ya İstanbul'dan çoğunlukla iki yoldan ulaşıyoruz: Osmangazi Köprüsü üzerinden kara yolu ya da feribot. İstanbul'dan Yalova'ya evden eve nakliyatta hangisini kullanacağımıza taşınma gününün koşullarına bakarak karar veriyor, planı size önceden bildiriyoruz. Kara yolunda ekip Kağıthane'den çıkıp Boğaz'ı geçiyor, Gebze tarafından köprüye bağlanıyor ve Altınova'dan Yalova'ya giriyor. İstanbul içindeki trafik yolun en belirsiz kısmı olduğundan Boğaz geçişini sabah yoğunluğundan önce tamamlamaya çalışıyoruz. Bayram öncesinde ve yaz hafta sonlarında Yalova yönündeki yol ve iskeleler kalabalıklaştığı için bu tarihlerde planı daha erken başlatıyoruz. Taşımaların çoğu tek günde bitiyor; eşya miktarı ve iki adresteki kat durumu süreyi uzatıp kısaltıyor. Yalova'nın kendi içindeki mesafeler kısa, merkezden Çiftlikköy'e ya da Çınarcık'a taşınma hızlı ilerliyor. Armutlu ise yarımadanın batı ucunda kaldığı için oraya giden işlerde yol süresini plana ayrıca ekliyoruz. Yalova'dan Bursa'ya taşınanlar için Orhangazi üzerinden giden yolu kullanıyor, Kocaeli yönündeki işlerde köprü ile körfez kıyısındaki yol arasında o günün trafiğine göre seçim yapıyoruz.",
    ],
    notes: [
      { title: "Sezon takvimi", text: "Çınarcık, Esenköy ve Armutlu'daki yazlıklarda mayıs-haziran ile eylül-ekim en hareketli aylar. Bu dönemde tarihi birkaç hafta önceden netleştirmek, istediğiniz gün ve saatte taşınmanızı kolaylaştırıyor; araç ve ekip de ona göre ayrılıyor." },
      { title: "Sitenin yaz kuralı", text: "Yazlık sitelerin bir kısmı sezonda taşınmayı belli saatlere sıkıştırıyor, kimi hafta sonu kamyonu kapıdan içeri sokmuyor. Yönetimin verdiği saat aralığını öğrenip ekibi Kağıthane'den ona göre yola çıkarıyoruz." },
      { title: "Termal'de orman yolu", text: "Termal ve Gökçedere'de evler ağaçlık yamaçlara dağılmış, bazı yollar dar ve virajlı. Bu adreslere yola uygun boyda araçla çıkıyor, gerekirse eşyayı ana yolda bekleyen büyük araca küçük araçla aktarıyoruz." },
    ],
    faqs: [
      { question: "İstanbul'dan Yalova'ya eşya köprüden mi gidiyor, feribotla mı?", answer: "İkisi de mümkün. Güzergâhı taşınma gününün koşullarına göre seçiyor, planlama sırasında hangi yolu kullanacağımızı size söylüyoruz. Kara yolunda araç Gebze tarafından Osmangazi Köprüsü'ne çıkıp Altınova'dan Yalova'ya giriyor. Hangi güzergâhı kullanırsak kullanalım yükleme saatini, boşaltma gün içinde bitecek şekilde veriyoruz. Taşımaların çoğu aynı gün tamamlanıyor; eşya miktarı ve kat durumu süreyi belirliyor." },
      { question: "Çınarcık'taki sitemiz yazın taşınmaya izin vermiyor, ne yapabiliriz?", answer: "Birkaç seçenek var. Taşınmayı sezon açılmadan önceye ya da kapandıktan sonraya alabiliriz; site belirli saatlerde izin veriyorsa o aralığı kullanırız; zorunlu bir durum varsa yönetimden yazılı izin istemek de bir yol. İzin verilen saat sabahın erken saatiyse sorun değil, 7/24 çalıştığımız için ekip o saatte kapıda olabiliyor. Kuralı yönetimden öğrenip bize iletmeniz yeterli, görüşmeyi isterseniz biz de yapabiliriz." },
      { question: "Yazlığı kışın boşaltıp eşyaları saklatabilir miyiz?", answer: "Evet. Sezon kapanırken eşyayı yazlıkta paketleyip etiketliyor, depoya alıyoruz; yaz başında aynı eve getirip yerleştiriyoruz. Kışın boş kalacak evde nem ya da hırsızlık kaygısı taşıyanlar için pratik bir çözüm. Hangi parçaların depoya gideceğini, hangilerinin evde kalacağını önceden listelerseniz araç ve koli ihtiyacını buna göre çıkarıyoruz. Buzdolabını taşınmadan bir gün önce kapatıp kurutmanız da işi kolaylaştırıyor." },
      { question: "Emekli olduk, İstanbul'daki evimizi tamamen Yalova'ya taşıyacağız. Nasıl bir plan yapıyorsunuz?", answer: "Tam ev taşımalarında paketlemeyi genelde taşınmadan bir gün önce yapıyoruz; mutfak, kitaplık ve vitrin gibi zaman alan bölümler o gün kolileniyor. Taşınma sabahı yükleme İstanbul'da başlıyor, eşyayı çoğu zaman aynı gün Yalova'daki eve yerleştiriyoruz. Yeni ev daha küçükse sığmayacak parçaları depolayabiliyoruz. Eşya listesini ve iki adresin kat bilgisini 0533 929 83 24'ten paylaşın, planı birlikte çıkaralım." },
    ],
    districts: ["Yalova Merkez", "Çiftlikköy", "Altınova", "Çınarcık", "Termal", "Armutlu"],
    routes: ["İstanbul", "Bursa", "Kocaeli"],
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

/** İl adından (varsa) şehir sayfası slug'ı döndürür. */
export function citySlugByName(name: string): string | undefined {
  return cities.find((c) => c.name === name)?.slug;
}
