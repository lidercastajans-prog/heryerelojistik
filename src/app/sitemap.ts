import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/hizmetler/evden-eve-nakliyat",
    "/hizmetler/sehirler-arasi-yuk-tasimaciligi",
    "/hakkimizda",
    "/galeri",
    "/sss",
    "/iletisim",
    "/teklif-al",
  ];
  const now = new Date();

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
