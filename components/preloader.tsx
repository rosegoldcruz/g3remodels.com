"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { BrandLogo } from "@/components/brand-logo"

export function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setComplete(true),
    })

    // Initial state
    gsap.set(containerRef.current, { zIndex: 9999 })
    
    // Glitch/Draw effect imitation
    tl.to(logoRef.current, {
      opacity: 1,
      duration: 0.1,
      repeat: 5,
      yoyo: true,
      ease: "steps(1)",
    })
    .to(logoRef.current, {
      scale: 1.5,
      duration: 0.8,
      ease: "power4.out",
    })
    .to(containerRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "power2.inOut",
      delay: 0.2,
    })
    .set(containerRef.current, { display: "none" })

    return () => {
      tl.kill()
    }
  }, [])

  if (complete) return null

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex items-center justify-center bg-black z-[9999]"
    >
      <div ref={logoRef} className="opacity-0">
        <BrandLogo width={120} height={120} className="invert" />
      </div>
    </div>
  )
}
