import Image from "next/image"
import { cn } from "@/lib/utils"

interface BrandLogoProps {
  className?: string
  width?: number
  height?: number
  variant?: "brand" | "watermark"
}

export function BrandLogo({ className, width = 40, height = 40, variant = "brand" }: BrandLogoProps) {
  return (
    <span className={cn("relative inline-block align-middle", className)} style={{ width, height }}>
      <Image
        src="/g3.png"
        alt="G3 Contracting Logo"
        fill
        className={cn(
          "object-contain",
          variant === "watermark" && "opacity-10 mix-blend-multiply grayscale"
        )}
        priority
      />
    </span>
  )
}
