import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Geçici stok fotoğraflar (kullanıcının kendi fotoğraflarıyla değiştirilecek).
      // Kendi görsellerinizi /public/images altına koyup src/lib/images.ts'i güncelleyin.
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
