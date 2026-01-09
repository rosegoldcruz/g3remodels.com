"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { GlareCard } from "./glare-hover"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    image: "/luxury-modern-kitchen-with-white-marble-countertop.jpg",
    title: "The Meridian Estate",
    location: "Pacific Palisades, CA",
    category: "Structural Shaker",
  },
  {
    image: "/minimalist-contemporary-kitchen-sleek-handleless-c.jpg",
    title: "Obsidian Penthouse",
    location: "Manhattan, NY",
    category: "Precision Slab",
  },
  {
    image: "/luxury-fusion-style-kitchen-combining-modern-and-t.jpg",
    title: "The Harrington Residence",
    location: "Greenwich, CT",
    category: "Fusion Hybrid",
  },
  {
    image: "/modern-architectural-kitchen-with-integrated-slidi.jpg",
    title: "Apex Tower Suite",
    location: "Miami Beach, FL",
    category: "Integrated Slide",
  },
  {
    image: "/ultra-modern-slim-profile-kitchen-cabinets-floatin.jpg",
    title: "The Whitmore Gallery",
    location: "Aspen, CO",
    category: "Architectural Slim",
  },
  {
    image: "/luxury-transitional-kitchen-blending-classic-and-c.jpg",
    title: "Belvedere Manor",
    location: "Napa Valley, CA",
    category: "Fusion Hybrid",
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="bg-[#060010] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headingRef} className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs uppercase tracking-[0.3em] text-[#c4a052]">Portfolio</span>
          <h2 className="font-serif text-4xl font-light text-[#f5f0e8] md:text-5xl lg:text-6xl">
            Completed Transformations
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[#8a8a94]">
            Each project represents a unique collaboration, where vision meets precision craftsmanship to create spaces
            that transcend the ordinary.
          </p>
        </div>

        {/* Projects Grid with GlareHover */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <GlareCard
              key={project.title}
              image={project.image}
              title={project.title}
              location={project.location}
              category={project.category}
              glareOpacity={0.2}
              glareColor="#ffffff"
              transitionDuration={800}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
