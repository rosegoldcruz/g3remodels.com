"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function IntroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-24 md:py-32">
      <div ref={contentRef} className="mx-auto max-w-4xl px-6 text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          G³ Contracting
        </p>

        {/* Main Headline */}
        <h2 className="font-serif text-4xl font-light leading-tight tracking-wide text-foreground md:text-5xl lg:text-6xl">
          <span className="uppercase tracking-[0.15em]">Quality</span> <span className="font-serif italic">Home</span>
          <br />
          <span className="uppercase tracking-[0.15em]">Remodeling</span>
          <br />
          <span className="uppercase tracking-[0.15em]">Since 2003</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-10 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
          We specialize in efficient, high-quality upgrades—not long, drawn-out construction projects. 
          Our focus is on smart solutions like cabinet refacing and fast-turn remodels that give homeowners 
          a major visual upgrade without weeks or months of disruption. As a family operation, every project 
          is personally overseen by our experienced team.
        </p>
      </div>
    </section>
  )
}
