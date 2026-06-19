/**
 * Teklif formundaki "Nereden/Nereye" alanları için il + ilçe önerileri (datalist).
 * 81 il + büyük şehirlerin ilçeleri. Gerektikçe genişletilebilir.
 */

const provinces = [
  "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Aksaray", "Amasya", "Ankara",
  "Antalya", "Ardahan", "Artvin", "Aydın", "Balıkesir", "Bartın", "Batman",
  "Bayburt", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale",
  "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Düzce", "Edirne", "Elazığ",
  "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane",
  "Hakkâri", "Hatay", "Iğdır", "Isparta", "İstanbul", "İzmir", "Kahramanmaraş",
  "Karabük", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kırıkkale", "Kırklareli",
  "Kırşehir", "Kilis", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa",
  "Mardin", "Mersin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Osmaniye",
  "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Şanlıurfa", "Şırnak",
  "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Uşak", "Van", "Yalova", "Yozgat",
  "Zonguldak",
];

const districtsByCity: Record<string, string[]> = {
  "İstanbul": [
    "Adalar", "Arnavutköy", "Ataşehir", "Avcılar", "Bağcılar", "Bahçelievler",
    "Bakırköy", "Başakşehir", "Bayrampaşa", "Beşiktaş", "Beykoz", "Beylikdüzü",
    "Beyoğlu", "Büyükçekmece", "Çatalca", "Çekmeköy", "Esenler", "Esenyurt",
    "Eyüpsultan", "Fatih", "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kağıthane",
    "Kartal", "Küçükçekmece", "Maltepe", "Pendik", "Sancaktepe", "Sarıyer",
    "Silivri", "Sultanbeyli", "Sultangazi", "Şile", "Şişli", "Tuzla", "Ümraniye",
    "Üsküdar", "Zeytinburnu",
  ],
  "Ankara": [
    "Altındağ", "Beypazarı", "Çankaya", "Çubuk", "Elmadağ", "Etimesgut",
    "Gölbaşı", "Keçiören", "Kızılcahamam", "Mamak", "Polatlı", "Pursaklar",
    "Sincan", "Yenimahalle",
  ],
  "İzmir": [
    "Aliağa", "Balçova", "Bayraklı", "Bergama", "Bornova", "Buca", "Çeşme",
    "Çiğli", "Foça", "Gaziemir", "Karabağlar", "Karşıyaka", "Kemalpaşa", "Konak",
    "Menemen", "Narlıdere", "Ödemiş", "Seferihisar", "Torbalı", "Urla",
  ],
  "Bursa": [
    "Gemlik", "Gürsu", "İnegöl", "İznik", "Karacabey", "Kestel", "Mudanya",
    "Mustafakemalpaşa", "Nilüfer", "Orhangazi", "Osmangazi", "Yıldırım",
  ],
  "Antalya": [
    "Aksu", "Alanya", "Döşemealtı", "Finike", "Gazipaşa", "Kaş", "Kemer", "Kepez",
    "Konyaaltı", "Korkuteli", "Kumluca", "Manavgat", "Muratpaşa", "Serik",
  ],
  "Kocaeli": [
    "Başiskele", "Çayırova", "Darıca", "Derince", "Dilovası", "Gebze", "Gölcük",
    "İzmit", "Kandıra", "Karamürsel", "Kartepe", "Körfez",
  ],
};

export const locations: string[] = [
  ...Object.entries(districtsByCity).flatMap(([il, ilceler]) =>
    ilceler.map((d) => `${d}, ${il}`)
  ),
  ...provinces,
];
