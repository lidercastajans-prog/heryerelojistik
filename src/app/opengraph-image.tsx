import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — Evden Eve Nakliyat & Şehirler Arası Yük Taşımacılığı`;

// Statik üretilir; harici font/asset çekmez (offline güvenli).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #1e3a85 0%, #2563eb 55%, #06b6d4 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Marka */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              display: "flex",
              width: 88,
              height: 88,
              borderRadius: 22,
              background: "rgba(255,255,255,0.16)",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              fontWeight: 800,
            }}
          >
            HY
          </div>
          <div style={{ fontSize: 44, fontWeight: 800 }}>{site.name}</div>
        </div>

        {/* Ana mesaj */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 66, fontWeight: 800, lineHeight: 1.05, maxWidth: 980 }}>
            Türkiye&apos;nin her yerine güvenli taşımacılık
          </div>
          <div style={{ fontSize: 32, opacity: 0.92 }}>
            Evden eve nakliyat · Şehirler arası yük · Sigortalı · Asansörlü
          </div>
        </div>

        {/* Alt bilgi */}
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30, opacity: 0.95 }}>
          <div>heryerelojistik.com</div>
          <div>4.9/5 puan · 50.000+ taşıma</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
