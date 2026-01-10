"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoWrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pinning the hero section for the scroll effect
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top", 
          scrub: 1, 
          pin: true, 
          pinSpacing: false, // Allow content to overlap if needed, or true to push
        }
      })

      // Scale down video and round corners
      tl.to(videoWrapperRef.current, {
        scale: 0.9,
        borderRadius: "2rem",
        duration: 1,
        ease: "power2.out",
      })
      
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-background">
      <div 
        ref={videoWrapperRef}
        className="relative h-full w-full overflow-hidden origin-center will-change-transform"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/seven-desert-mountain-header.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="absolute bottom-12 left-0 right-0 text-center z-30 pointer-events-none">
        <p className="text-white/80 uppercase tracking-[0.3em] text-xs md:text-sm animate-pulse">
          Scroll to Explore
        </p>
      </div>
    </section>
  )
}
