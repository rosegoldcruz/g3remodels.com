"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: "Cabinet Refacing",
    image: "/luxury-shaker-style-kitchen-cabinets-3d-architectu.jpg",
  },
  {
    title: "Kitchen Remodeling",
    image: "/luxury-home-renovation-modern-kitchen-remodel-high.jpg",
  },
  {
    title: "Bathroom Renovations",
    image: "/modern-luxury-interior-design-living-room-contempo.jpg",
  },
  {
    title: "Full Home Remodels",
    image: "/luxury-modern-interior-living-room-open-concept-hi.jpg",
  },
]

export function ServicesGrid() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
          },
        },
      )
    }, gridRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="services" className="bg-white py-4">
      <div ref={gridRef} className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 md:grid-cols-2">
        {services.map((service, index) => (
          <div key={index} className="service-card group relative aspect-[4/3] cursor-pointer overflow-hidden">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${service.image}')` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 transition-all duration-500 group-hover:bg-black/50" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              <h4 className="text-center font-serif text-xl font-light text-white md:text-2xl">{service.title}</h4>
              <button className="mt-4 flex items-center justify-center rounded-full border border-white/50 p-2 opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-white/10">
                <ArrowRight className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
