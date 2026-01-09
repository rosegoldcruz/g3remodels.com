"use client"

import { useState, useEffect } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { Logo } from "./logo"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.fromTo(".mobile-menu", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.3, ease: "power3.out" })
    }
  }, [isMobileMenuOpen])

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 py-4 shadow-sm backdrop-blur-md" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="flex items-center">
          <Logo className={`h-9 w-auto`} />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className={`text-sm tracking-wide transition-colors ${
              isScrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"
            }`}
          >
            About
          </a>
          <a
            href="#services"
            className={`text-sm tracking-wide transition-colors ${
              isScrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"
            }`}
          >
            Services
          </a>
          <a
            href="/gallery"
            className={`text-sm tracking-wide transition-colors ${
              isScrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"
            }`}
          >
            Gallery
          </a>
          <Button
            asChild
            className={`rounded-none px-6 text-sm uppercase tracking-wider ${
              isScrolled
                ? "bg-foreground text-background hover:bg-foreground/90"
                : "bg-white text-foreground hover:bg-white/90"
            }`}
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu absolute left-0 right-0 top-full bg-white px-6 py-8 shadow-lg md:hidden">
          <div className="flex flex-col gap-6">
            <a href="#about" className="text-lg text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </a>
            <a href="#services" className="text-lg text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </a>
            <a href="/gallery" className="text-lg text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
              Gallery
            </a>
            <a href="#contact" className="text-lg text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
