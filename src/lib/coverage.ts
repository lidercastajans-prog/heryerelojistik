/** Hizmet bölgeleri (statik). Firma teyidi 15.11.2026: Marmara, Ege ve Akdeniz'e düzenli sefer. */

/** İstanbul ve Marmara'da düzenli hizmet verilen iller (her birinin kendi sayfası var). */
export const featuredCities: string[] = [
  "İstanbul",
  "Kocaeli",
  "Tekirdağ",
  "Bursa",
  "Sakarya",
  "Yalova",
];

/** Ege ve Akdeniz'de düzenli sefer yapılan iller (ayrı il sayfası yok). Sefer sıklığı teyitli değil: yalnız "düzenli" yazılır. */
export const regularRouteCities: string[] = [
  "İzmir",
  "Aydın",
  "Muğla",
  "Denizli",
  "Manisa",
  "Antalya",
  "Mersin",
  "Adana",
];

/** Düzenli sefer bölgesi dışında, talep üzerine gidilen iller. */
export const intercityCities: string[] = [
  "Ankara",
  "Konya",
  "Gaziantep",
  "Balıkesir",
];

/** Düzenli hizmet / sefer verilen tüm iller (schema areaServed için). */
export const servedCities: string[] = [...featuredCities, ...regularRouteCities];

export const coverageNote =
  "İstanbul'un iki yakasında ve Kocaeli, Tekirdağ, Bursa, Sakarya, Yalova'da düzenli taşıma yapıyoruz. Ege ve Akdeniz'e de düzenli seferimiz var. Diğer illere talep üzerine gidiyoruz; gideceğiniz yeri yazın, planlayalım.";
