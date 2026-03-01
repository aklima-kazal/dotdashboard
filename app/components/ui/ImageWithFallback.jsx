"use client";
import { useState } from "react";
import Image from "next/image";

export default function ImageWithFallback({ src, fallbackSrc, alt, ...props }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallbackSrc || "/placeholder.png")}
    />
  );
}
