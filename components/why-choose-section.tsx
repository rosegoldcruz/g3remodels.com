"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function WhyChooseSection() {
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
    <section ref={sectionRef} className="relative h-[70vh] w-full overflow-hidden md:h-[80vh]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/luxury-modern-interior-living-room-open-concept-hi.jpg')`,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Centered content */}
      <div ref={textRef} className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <h3 className="text-center font-serif text-3xl font-light text-white md:text-4xl lg:text-5xl">
          Why Choose G³ Contracting?
        </h3>
        <p className="mt-4 max-w-xl text-center text-white/80">
          No subcontractor roulette. No passing jobs down the line. Just experienced craftsmen who care.
        </p>
        <a href="#about" className="mt-6 flex items-center justify-center rounded-full border border-white/50 p-3 transition-all hover:border-white hover:bg-white/10">
          <ArrowRight className="h-5 w-5 text-white" />
        </a>
      </div>
    </section>
  )
}
