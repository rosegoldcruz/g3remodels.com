"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LegacySection } from "@/components/legacy-section"
import { MethodSection } from "@/components/method-section"
import { ServicesSection } from "@/components/services-section"
import { LuxuryGallery } from "@/components/luxury-gallery"
import { Footer } from "@/components/footer"

export default function Home() {
  const galleryItems = [
    { src: "/luxury-desert-estate-panoramic-view-with-golf-cour.jpg", alt: "Desert Estate", title: "Desert Estate", cols: "col-span-1 md:col-span-2 row-span-2" },
    { src: "/luxury-infinity-pool-night-time-modern-desert-home.jpg", alt: "Modern Villa", title: "Modern Villa", cols: "col-span-1" },
    { src: "/luxury-home-interior-living-room-modern-furniture-.jpg", alt: "Interior Design", title: "Interior Design", cols: "col-span-1" },
    { src: "/luxury-estate-home-exterior-modern-architecture-de.jpg", alt: "Architectural Detail", title: "Architectural Detail", cols: "col-span-1 md:col-span-2" },
    { src: "/luxury-modern-home-exterior-desert-landscape-archi.jpg", alt: "Landscape Integration", title: "Landscape Integration", cols: "col-span-1 md:col-span-2" },
    { src: "/luxury-modern-kitchen-with-white-marble-countertop.jpg", alt: "Gourmet Kitchen", title: "Gourmet Kitchen", cols: "col-span-1" },
    { src: "/luxury-modern-interior-living-room-open-concept-hi.jpg", alt: "Open Concept Living", title: "Open Concept Living", cols: "col-span-1" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <LegacySection />
      <MethodSection />
      <ServicesSection />
      <LuxuryGallery items={galleryItems} />
      <Footer />
    </main>
  )
}
