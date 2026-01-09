"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function AvailableHomesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="available" ref={sectionRef} className="relative h-[70vh] w-full overflow-hidden md:h-[80vh]">
      {/* Background image - pool at night */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/luxury-infinity-pool-night-time-modern-desert-home.jpg')`,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Centered content */}
      <div ref={textRef} className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <h3 className="text-center font-serif text-3xl font-light text-white md:text-4xl lg:text-5xl">
          Available Homes
        </h3>
        <button className="mt-6 flex items-center justify-center rounded-full border border-white/50 p-3 transition-all hover:border-white hover:bg-white/10">
          <ArrowRight className="h-5 w-5 text-white" />
        </button>
      </div>
    </section>
  )
}
