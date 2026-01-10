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
    <section ref={sectionRef} className="bg-background py-24 md:py-32">
      <div ref={contentRef} className="mx-auto max-w-5xl px-6 text-center">
        <div className="flex justify-center mb-8">
            <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-50">
                Established 2003
            </span>
        </div>

        {/* Main Headline */}
        <h2 className="font-serif text-3xl font-light leading-tight tracking-wide text-foreground md:text-5xl lg:text-6xl mb-8">
          Defining the standard of <br />
          <span className="italic">Luxury Renovation</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground font-light">
          We specialize in high-impact residential transformations. By combining architectural precision with efficient execution, we deliver estate-grade upgrades without the typical construction delays.
        </p>
      </div>
    </section>
  )
}
