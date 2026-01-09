"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: "power2.out" })
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Full-bleed background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/seven-desert-mountain-header.mp4"
        autoPlay
        muted
        loop
        playsInline
        // Using the video as background, no controls
      />

      {/* Subtle dark gradient overlay for better nav visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
    </section>
  )
}
