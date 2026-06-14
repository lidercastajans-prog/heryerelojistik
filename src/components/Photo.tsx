"use client";

import Image from "next/image";
import { useState } from "react";
import Icon from "./Icon";
import type { IconKey } from "@/lib/services";

/**
 * Akıllı görsel: next/image ile yükler; URL yoksa veya yükleme başarısız olursa
 * şık bir gradient + ikon fallback gösterir. Asla "kırık görsel" çıkmaz.
 * Ebeveyn element `relative` ve bir boyut/aspect-ratio'ya sahip olmalı.
 */
export default function Photo({
  src,
  alt,
  sizes = "100vw",
  priority = false,
  className = "",
  fallback,
}: {
  src?: string | null;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  fallback?: { from: string; to: string; icon?: IconKey };
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${
          fallback?.from ?? "from-brand-600"
        } ${fallback?.to ?? "to-accent-600"} ${className}`}
        aria-hidden
      >
        {fallback?.icon && <Icon name={fallback.icon} className="h-12 w-12 text-white/85" />}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
