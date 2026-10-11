/**
 * Özel adlara kesme işaretiyle Türkçe hâl eki: bulunma ("Kadıköy'de", "Beşiktaş'ta") ve tamlayan ("Şişli'nin").
 * Şablonlarda ek elle yazılınca ("{ad}'da") ünlü uyumu bozuluyordu: "Kadıköy'da", "Beşiktaş'da", "Şişli'ın".
 */

const UNLULER = "aeıioöuü";
const INCE_UNLULER = "eiöü";
/** Sert ünsüzle (fıstıkçı şahap) biten ad bulunma ekini "-te/-ta" olarak alır: Pendik'te, Beşiktaş'ta. */
const SERT_UNSUZLER = "fstkçşhp";

/**
 * İyelik ekiyle biten birleşik adlar bulunma ekini "n" kaynaştırmasıyla alır (Bey-oğl-u → Beyoğlu'nda);
 * kuraldan çıkarılamadığı için elle verilir.
 */
const BULUNMA_ISTISNALARI: Record<string, string> = {
  Beyoğlu: "Beyoğlu'nda",
  Beylikdüzü: "Beylikdüzü'nde",
  Zeytinburnu: "Zeytinburnu'nda",
};

function sonUnlu(kucukAd: string): string {
  for (let i = kucukAd.length - 1; i >= 0; i--) {
    if (UNLULER.includes(kucukAd[i])) return kucukAd[i];
  }
  return "e";
}

/** "Kadıköy" → "Kadıköy'de", "Beşiktaş" → "Beşiktaş'ta", "Bursa" → "Bursa'da" */
export function bulunmaHali(ad: string): string {
  const istisna = BULUNMA_ISTISNALARI[ad];
  if (istisna) return istisna;
  const kucuk = ad.toLocaleLowerCase("tr");
  const unsuz = SERT_UNSUZLER.includes(kucuk.at(-1) ?? "") ? "t" : "d";
  const unlu = INCE_UNLULER.includes(sonUnlu(kucuk)) ? "e" : "a";
  return `${ad}'${unsuz}${unlu}`;
}

/** "Şişli" → "Şişli'nin", "Kartal" → "Kartal'ın", "Kadıköy" → "Kadıköy'ün" */
export function tamlayanHali(ad: string): string {
  const kucuk = ad.toLocaleLowerCase("tr");
  const son = sonUnlu(kucuk);
  const unlu = "aı".includes(son) ? "ı" : "ei".includes(son) ? "i" : "ou".includes(son) ? "u" : "ü";
  const kaynastirma = UNLULER.includes(kucuk.at(-1) ?? "") ? "n" : "";
  return `${ad}'${kaynastirma}${unlu}n`;
}
