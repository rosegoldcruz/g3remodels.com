"use client"

import { useState, useCallback, useEffect } from "react"
import { BubbleMenu } from "@/components/bubble-menu"
import { Footer } from "@/components/footer"
import { LuxuryGallery } from "@/components/luxury-gallery"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"

// Gallery images (1-28, excluding 27 which doesn't exist)
const galleryImages = [
  { id: 1, src: "/1.jpeg", alt: "G3 Contracting Project 1" },
  { id: 2, src: "/2.jpeg", alt: "G3 Contracting Project 2" },
  { id: 3, src: "/3.jpeg", alt: "G3 Contracting Project 3" },
  { id: 4, src: "/4.jpeg", alt: "G3 Contracting Project 4" },
  { id: 5, src: "/5.jpeg", alt: "G3 Contracting Project 5" },
  { id: 6, src: "/6.jpeg", alt: "G3 Contracting Project 6" },
  { id: 7, src: "/7.jpeg", alt: "G3 Contracting Project 7" },
  { id: 8, src: "/8.jpeg", alt: "G3 Contracting Project 8" },
  { id: 9, src: "/9.jpeg", alt: "G3 Contracting Project 9" },
  { id: 10, src: "/10.jpeg", alt: "G3 Contracting Project 10" },
  { id: 11, src: "/11.jpeg", alt: "G3 Contracting Project 11" },
  { id: 12, src: "/12.jpeg", alt: "G3 Contracting Project 12" },
  { id: 13, src: "/13.jpeg", alt: "G3 Contracting Project 13" },
  { id: 14, src: "/14.jpeg", alt: "G3 Contracting Project 14" },
  { id: 15, src: "/15.jpeg", alt: "G3 Contracting Project 15" },
  { id: 16, src: "/16.jpeg", alt: "G3 Contracting Project 16" },
  { id: 17, src: "/17.jpeg", alt: "G3 Contracting Project 17" },
  { id: 18, src: "/18.jpeg", alt: "G3 Contracting Project 18" },
  { id: 19, src: "/19.jpeg", alt: "G3 Contracting Project 19" },
  { id: 20, src: "/20.jpeg", alt: "G3 Contracting Project 20" },
  { id: 21, src: "/21.jpeg", alt: "G3 Contracting Project 21" },
  { id: 22, src: "/22.jpeg", alt: "G3 Contracting Project 22" },
  { id: 23, src: "/23.jpeg", alt: "G3 Contracting Project 23" },
  { id: 24, src: "/24.jpeg", alt: "G3 Contracting Project 24" },
  { id: 25, src: "/25.jpeg", alt: "G3 Contracting Project 25" },
  { id: 26, src: "/26.jpeg", alt: "G3 Contracting Project 26" },
  { id: 28, src: "/28.jpeg", alt: "G3 Contracting Project 28" },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
  const [lightboxEmblaRef, lightboxEmblaApi] = useEmblaCarousel({ loop: true })


const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

const galleryItems = [
  { src: "/1.jpeg", alt: "Luxury Kitchen 1", title: "Fusion Shaker", cols: "col-span-2 row-span-2" },
  { src: "/2.jpeg", alt: "Luxury Kitchen 2", title: "Slab Minimalist", cols: "col-span-1" },
  { src: "/3.jpeg", alt: "Luxury Kitchen 3", title: "Modern Elegance", cols: "col-span-1" },
  { src: "/4.jpeg", alt: "Luxury Kitchen 4", title: "Heritage Craft", cols: "col-span-1" },
  { src: "/5.jpeg", alt: "Luxury Kitchen 5", title: "Contemporary", cols: "col-span-1 row-span-2" },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <BubbleMenu
        items={navItems}
        logo={<span className="text-lg font-bold tracking-tighter">G3 LUXE</span>}
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={true}
      />
      
      <LuxuryGallery items={galleryItems} />
      
      <Footer />
    </main>
  )
}
