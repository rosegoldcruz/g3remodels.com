"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { StatsSection } from "@/components/stats-section"
import { LuxuryGallery } from "@/components/luxury-gallery"
import { Footer } from "@/components/footer"

export default function Home() {
  const galleryItems = [
    { src: "/1.jpeg", alt: "Luxury Kitchen 1", title: "Fusion Shaker", cols: "col-span-2 row-span-2" },
    { src: "/2.jpeg", alt: "Luxury Kitchen 2", title: "Slab Minimalist", cols: "col-span-1" },
    { src: "/3.jpeg", alt: "Luxury Kitchen 3", title: "Modern Elegance", cols: "col-span-1" },
    { src: "/4.jpeg", alt: "Luxury Kitchen 4", title: "Heritage Craft", cols: "col-span-1" },
    { src: "/5.jpeg", alt: "Luxury Kitchen 5", title: "Contemporary", cols: "col-span-1 row-span-2" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <LuxuryGallery items={galleryItems} />
      <Footer />
    </main>
  )
}
