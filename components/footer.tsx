"use client"

import { useEffect, useState } from "react"
import { BrandLogo } from "@/components/brand-logo"

export function Footer() {
  const [year, setYear] = useState(2026)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="relative bg-background py-20 overflow-hidden">
      {/* Watermark Logo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 opacity-[0.03] select-none pointer-events-none">
         <BrandLogo width={800} height={800} variant="watermark" />
      </div>

      <div className="mx-auto max-w-5xl px-6 relative z-10">
         {/* Center Active Logo in Contact/Footer Area */}
         <div className="flex justify-center mb-12">
            <a href="/" aria-label="Home" className="inline-block transition-opacity hover:opacity-80">
                <BrandLogo width={80} height={80} />
            </a>
         </div>

        {/* Copyright and Links */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            Copyright ©{year} <BrandLogo width={16} height={16} className="opacity-50" />. All Rights Reserved.
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">
              Privacy Policy
            </a>
            {" · "}
            <a href="#contact" className="hover:text-foreground">
              Contact Us
            </a>
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Family-Owned Since 2003
          </p>
        </div>
      </div>
    </footer>
  )
}
