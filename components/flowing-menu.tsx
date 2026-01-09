"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { gsap } from "gsap"
import Image from "next/image"

interface MenuItem {
  name: string
  image: string
  description: string
}

interface FlowingMenuProps {
  items: MenuItem[]
}

export function FlowingMenu({ items }: FlowingMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (imageRef.current && activeIndex !== null) {
      gsap.to(imageRef.current, {
        x: mousePosition.x - 200,
        y: mousePosition.y - 150,
        duration: 0.4,
        ease: "power3.out",
      })
    }
  }, [mousePosition, activeIndex])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index)
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power3.out",
      })
    }
  }

  const handleMouseLeave = () => {
    setActiveIndex(null)
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.3,
        ease: "power3.in",
      })
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
      style={{ backgroundColor: "#060010" }}
      onMouseMove={handleMouseMove}
    >
      {/* Floating Image Preview */}
      <div
        ref={imageRef}
        className="pointer-events-none absolute z-10 h-[300px] w-[400px] overflow-hidden rounded-lg opacity-0"
        style={{ transform: "scale(0.9)" }}
      >
        {activeIndex !== null && (
          <Image
            src={items[activeIndex].image || "/placeholder.svg"}
            alt={items[activeIndex].name}
            fill
            className="object-cover"
          />
        )}
      </div>

      {/* Menu Items */}
      <div className="flex h-full flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[#8a8a94]">Our Signature Collections</span>
        </div>
        {items.map((item, index) => (
          <MenuItem
            key={item.name}
            item={item}
            index={index}
            isActive={activeIndex === index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  )
}

interface MenuItemProps {
  item: MenuItem
  index: number
  isActive: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}

function MenuItem({ item, index, isActive, onMouseEnter, onMouseLeave }: MenuItemProps) {
  const itemRef = useRef<HTMLDivElement>(null)
  const numberRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (itemRef.current && textRef.current && lineRef.current && numberRef.current) {
      if (isActive) {
        gsap.to(textRef.current, {
          x: 40,
          duration: 0.4,
          ease: "power3.out",
        })
        gsap.to(lineRef.current, {
          width: "100%",
          duration: 0.6,
          ease: "power3.out",
        })
        gsap.to(numberRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: "power3.out",
        })
      } else {
        gsap.to(textRef.current, {
          x: 0,
          duration: 0.3,
          ease: "power3.in",
        })
        gsap.to(lineRef.current, {
          width: "0%",
          duration: 0.4,
          ease: "power3.in",
        })
        gsap.to(numberRef.current, {
          opacity: 0.3,
          x: -10,
          duration: 0.3,
          ease: "power3.in",
        })
      }
    }
  }, [isActive])

  return (
    <div
      ref={itemRef}
      className="group relative cursor-pointer border-b border-[#2a2a34] py-6 md:py-8"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-center gap-6">
        <span
          ref={numberRef}
          className="font-mono text-sm text-[#c4a052] opacity-30"
          style={{ transform: "translateX(-10px)" }}
        >
          0{index + 1}
        </span>
        <div ref={textRef} className="flex flex-col">
          <h3
            className="font-serif text-4xl font-light tracking-wide md:text-5xl lg:text-6xl"
            style={{ color: "#f5f0e8" }}
          >
            {item.name}
          </h3>
          <p
            className={`mt-2 max-w-md text-sm text-[#8a8a94] transition-opacity duration-300 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            {item.description}
          </p>
        </div>
      </div>
      <div ref={lineRef} className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#c4a052]" />
    </div>
  )
}
