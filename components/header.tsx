"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { BrandLogo } from "@/components/brand-logo"
import { cn } from "@/lib/utils"

export function Header() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  // Subtle magnetic effect for the logo on mouse move
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = (clientX - (left + width / 2)) * 0.2
    const y = (clientY - (top + height / 2)) * 0.2
    setPosition({ x, y })
  }
  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "py-4 bg-background/80 backdrop-blur-md border-b border-border/10" : "py-8 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{ x: position.x, y: position.y }}
          transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
          className="cursor-pointer"
        >
          <a href="#" aria-label="Home">
             {/* The logo here should be invisible initially if handled by Hero, but prompt implies docking.
                 We can just keep it here and let Hero cover it or cross-fade.
                 For simplicity + robustness: Logo is visible in header when scrolled, or always visible but Hero uses a different one?
                 Prompt: "BrandLogo performs a Zoom-In entrance... then docks into the sticky navbar"
                 Let's make Header logo opacity 0 until scroll triggers.
             */}
            <BrandLogo width={isScrolled ? 32 : 40} height={isScrolled ? 32 : 40} />
          </a>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
           {/* Replaced text with standard links, simplified */}
           <a href="#about" className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity mixed-blend-difference">About</a>
           <a href="#projects" className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity mixed-blend-difference">Projects</a>
           <Button className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90">
             Contact
           </Button>
        </nav>
      </div>
    </header>
  )
}

// Minimal Button for header
import { ButtonHTMLAttributes, forwardRef } from "react"
const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn("px-6 py-2 text-sm font-medium uppercase tracking-wider transition-colors", className)}
      {...props}
    />
  )
})
Button.displayName = "Button"
