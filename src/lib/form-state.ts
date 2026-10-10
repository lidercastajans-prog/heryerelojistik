/**
 * Form eylemlerinin (actions/quote.ts, actions/contact.ts) ortak durum tipi ve başlangıç değeri.
 * Ayrı dosyada: "use server" dosyası yalnız async fonksiyon dışa aktarabilir; istemciye giden
 * başlangıç durumu oradan alınırsa nesne yerine sunucu referansı gelir.
 */
export type FormState = {
  ok: boolean;
  message: string;
  errors?: Record<string, string>;
  whatsappUrl?: string;
};

export const initialFormState: FormState = { ok: false, message: "" };
