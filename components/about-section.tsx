"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Users, Clock, Shield, Wrench } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="bg-neutral-50 py-24 md:py-32">
      <div ref={contentRef} className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="about-item mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Our Story
          </p>
          <h2 className="font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
            About G³ Contracting
          </h2>
        </div>

        {/* Main Content */}
        <div className="about-item mb-16 grid gap-12 md:grid-cols-2">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground">
              G³ Contracting is a family-owned, owner-operated remodeling company founded in 2003. Built by the owner alongside his two sons, G³ has spent over two decades delivering custom residential remodeling with a hands-on approach and zero middlemen.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              We specialize in efficient, high-quality upgrades—not long, drawn-out construction projects. Our focus is on smart solutions like cabinet refacing and fast-turn remodels that give homeowners a major visual upgrade without weeks or months of disruption.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              As a family operation, every project is personally overseen. No subcontractor roulette. No passing jobs down the line. Just experienced craftsmen who've been working together for years and care about getting it done right—and getting it done fast.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div
              className="aspect-[4/3] w-full bg-cover bg-center"
              style={{
                backgroundImage: `url('/two-professional-executives-business-partners-port.jpg')`,
              }}
            />
            <div className="absolute -bottom-4 -left-4 bg-foreground px-6 py-4 text-white">
              <p className="text-3xl font-light">20+</p>
              <p className="text-xs uppercase tracking-wider">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Our Goal */}
        <div className="about-item mb-16 text-center">
          <h3 className="mb-6 font-serif text-2xl font-light text-foreground">Our Goal is Simple</h3>
          <div className="flex flex-wrap items-center justify-center gap-8 text-lg text-muted-foreground">
            <span className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-foreground" />
              Short Timelines
            </span>
            <span className="hidden text-foreground/30 md:inline">•</span>
            <span className="flex items-center gap-2">
              <Wrench className="h-5 w-5 text-foreground" />
              Clean Installs
            </span>
            <span className="hidden text-foreground/30 md:inline">•</span>
            <span className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-foreground" />
              Predictable Results
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="about-item grid grid-cols-2 gap-8 border-t border-foreground/10 pt-12 md:grid-cols-4">
          <div className="text-center">
            <p className="font-serif text-4xl font-light text-foreground">2003</p>
            <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">Founded</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl font-light text-foreground">3</p>
            <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">Family Members</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl font-light text-foreground">1000+</p>
            <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl font-light text-foreground">0</p>
            <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">Middlemen</p>
          </div>
        </div>
      </div>
    </section>
  )
}
