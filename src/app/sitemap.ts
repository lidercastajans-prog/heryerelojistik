import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { cities } from "@/lib/cities";
import { istanbulDistricts } from "@/lib/istanbul-districts";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/hizmetler/evden-eve-nakliyat",
    "/hizmetler/sehirler-arasi-yuk-tasimaciligi",
    "/nakliyat",
    "/blog",
    "/hakkimizda",
    "/galeri",
    "/sss",
    "/iletisim",
    "/teklif-al",
  ];

  const cityRoutes = cities.map((c) => `/nakliyat/${c.slug}`);
  const districtRoutes = istanbulDistricts.map((d) => `/nakliyat/istanbul/${d.slug}`);
  const postRoutes = posts.map((p) => `/blog/${p.slug}`);

  const all = [...staticRoutes, ...cityRoutes, ...districtRoutes, ...postRoutes];

  return all.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
