"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BeforeAfterSlider } from "./before-after-slider"

gsap.registerPlugin(ScrollTrigger)

export function ComparisonSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }
  }, [])

  return (
    <section id="process" ref={sectionRef} className="bg-[#0a0a14] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div ref={contentRef}>
          {/* Section Header */}
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block text-xs uppercase tracking-[0.3em] text-[#c4a052]">
              The AXIOM Difference
            </span>
            <h2 className="font-serif text-4xl font-light text-[#f5f0e8] md:text-5xl">Beyond Surface Finishing</h2>
            <p className="mx-auto mt-6 max-w-2xl text-[#8a8a94]">
              See the transformation from standard painted cabinets to our signature 3D structural refacing—where every
              angle tells a story of precision engineering.
            </p>
          </div>

          {/* Before/After Slider */}
          <BeforeAfterSlider
            beforeImage="/basic-white-painted-kitchen-cabinets-standard-buil.jpg"
            afterImage="/luxury-3d-structural-refacing-kitchen-modern-archi.jpg"
            beforeLabel="Standard Finish"
            afterLabel="AXIOM 3D Refacing"
          />

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "15", label: "Years Experience" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "5", label: "Design Patents" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-4xl text-[#c4a052] md:text-5xl">{stat.value}</div>
                <div className="mt-2 text-sm uppercase tracking-wider text-[#8a8a94]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
