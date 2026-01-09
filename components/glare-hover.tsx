"use client"

import type React from "react"

import { useRef, useState } from "react"
import { gsap } from "gsap"
import Image from "next/image"

interface GlareHoverProps {
  children: React.ReactNode
  glareOpacity?: number
  glareColor?: string
  transitionDuration?: number
  className?: string
}

export function GlareHover({
  children,
  glareOpacity = 0.2,
  glareColor = "#ffffff",
  transitionDuration = 800,
  className = "",
}: GlareHoverProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !glareRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    gsap.to(glareRef.current, {
      x: x - 150,
      y: y - 150,
      duration: transitionDuration / 1000,
      ease: "power3.out",
    })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (glareRef.current) {
      gsap.to(glareRef.current, {
        opacity: glareOpacity,
        scale: 1,
        duration: transitionDuration / 1000,
        ease: "power3.out",
      })
    }
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        scale: 1.02,
        duration: transitionDuration / 1000,
        ease: "power3.out",
      })
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (glareRef.current) {
      gsap.to(glareRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: transitionDuration / 1000,
        ease: "power3.in",
      })
    }
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        scale: 1,
        duration: transitionDuration / 1000,
        ease: "power3.in",
      })
    }
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glare effect */}
      <div
        ref={glareRef}
        className="pointer-events-none absolute h-[300px] w-[300px] rounded-full opacity-0"
        style={{
          background: `radial-gradient(circle, ${glareColor} 0%, transparent 70%)`,
          transform: "scale(0.8)",
        }}
      />
      {children}
    </div>
  )
}

interface GlareCardProps {
  image: string
  title: string
  location: string
  category: string
  glareOpacity?: number
  glareColor?: string
  transitionDuration?: number
}

export function GlareCard({
  image,
  title,
  location,
  category,
  glareOpacity = 0.2,
  glareColor = "#ffffff",
  transitionDuration = 800,
}: GlareCardProps) {
  return (
    <GlareHover
      glareOpacity={glareOpacity}
      glareColor={glareColor}
      transitionDuration={transitionDuration}
      className="group cursor-pointer rounded-lg bg-[#0a0a14]"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060010] via-transparent to-transparent opacity-60" />
        <div className="absolute right-4 top-4 rounded-full bg-[#c4a052]/90 px-3 py-1 text-xs font-medium text-[#060010]">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h4 className="font-serif text-xl text-[#f5f0e8]">{title}</h4>
        <p className="mt-2 text-sm text-[#8a8a94]">{location}</p>
      </div>
    </GlareHover>
  )
}
