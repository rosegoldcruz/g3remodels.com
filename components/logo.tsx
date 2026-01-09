"use client"

import Image from "next/image"

interface LogoProps {
  className?: string
  alt?: string
}

export function Logo({ className = "h-10 w-auto", alt = "G3 Contracting Logo" }: LogoProps) {
  return (
    <Image
      src="/g3-1.1.jpeg"
      alt={alt}
      width={160}
      height={48}
      className={className}
      priority
    />
  )
}
