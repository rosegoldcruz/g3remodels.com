"use client"

import { useState, useCallback, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
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

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const lightboxScrollPrev = useCallback(() => {
    if (lightboxEmblaApi) lightboxEmblaApi.scrollPrev()
  }, [lightboxEmblaApi])

  const lightboxScrollNext = useCallback(() => {
    if (lightboxEmblaApi) lightboxEmblaApi.scrollNext()
  }, [lightboxEmblaApi])

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  // Scroll to selected image when lightbox opens
  useEffect(() => {
    if (selectedImage !== null && lightboxEmblaApi) {
      lightboxEmblaApi.scrollTo(selectedImage)
    }
  }, [selectedImage, lightboxEmblaApi])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") lightboxScrollPrev()
      if (e.key === "ArrowRight") lightboxScrollNext()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage, lightboxScrollPrev, lightboxScrollNext])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-foreground pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/60">
            Our Work
          </p>
          <h1 className="font-serif text-4xl font-light text-white md:text-5xl lg:text-6xl">
            Project Gallery
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            Browse through our collection of completed remodeling projects. Each image represents our commitment to quality craftsmanship and attention to detail.
          </p>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-8 text-center font-serif text-2xl font-light text-foreground">
            Featured Projects
          </h2>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4">
                {galleryImages.slice(0, 10).map((image, index) => (
                  <div
                    key={image.id}
                    className="relative min-w-0 flex-[0_0_100%] cursor-pointer md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="group relative aspect-[4/3] overflow-hidden bg-neutral-200">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                        <ZoomIn className="h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition-colors hover:bg-white"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-lg transition-colors hover:bg-white"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Full Gallery Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-8 text-center font-serif text-2xl font-light text-foreground">
            All Projects
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square cursor-pointer overflow-hidden bg-neutral-200"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40">
                  <ZoomIn className="h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="h-full w-full" ref={lightboxEmblaRef}>
            <div className="flex h-full">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="flex min-w-0 flex-[0_0_100%] items-center justify-center p-8"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="max-h-[85vh] max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={lightboxScrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-4 text-white transition-colors hover:bg-white/20"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={lightboxScrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-4 text-white transition-colors hover:bg-white/20"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/70">
            {galleryImages.length} Images
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
