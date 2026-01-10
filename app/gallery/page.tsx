"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LuxuryGallery } from "@/components/luxury-gallery"

export default function GalleryPage() {
  // Extended gallery items for the dedicated page
  const galleryItems = [
    { src: "/1.jpeg", alt: "Luxury Kitchen 1", title: "Fusion Shaker", cols: "col-span-2 row-span-2" },
    { src: "/2.jpeg", alt: "Luxury Kitchen 2", title: "Slab Minimalist", cols: "col-span-1" },
    { src: "/3.jpeg", alt: "Luxury Kitchen 3", title: "Modern Elegance", cols: "col-span-1" },
    { src: "/4.jpeg", alt: "Luxury Kitchen 4", title: "Heritage Craft", cols: "col-span-1" },
    { src: "/5.jpeg", alt: "Luxury Kitchen 5", title: "Contemporary", cols: "col-span-1 row-span-2" },
    { src: "/6.jpeg", alt: "Luxury Project 6", title: "Project 6", cols: "col-span-1" },
    { src: "/7.jpeg", alt: "Luxury Project 7", title: "Project 7", cols: "col-span-1" },
    { src: "/8.jpeg", alt: "Luxury Project 8", title: "Project 8", cols: "col-span-2" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <LuxuryGallery items={galleryItems} />
      </div>
      <Footer />
    </main>
  )
}
