"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { X, ZoomIn } from "lucide-react"

// Only numbered images from public folder
const numberIds = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 28, 29, 30, 31,
  32, 33, 34, 35, 38, 39, 41, 42, 43, 44
]

const allImages = numberIds.map(id => ({ src: `/${id}.jpeg`, type: "standard" }))

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      <section className="pt-32 pb-12 px-6 container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Master Gallery</h1>
            <p className="text-muted-foreground">A complete archive of our architectural transformations.</p>
      </section>

      <section className="container mx-auto px-4 pb-24">
        {/* Simple Masonry-ish Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {allImages.map((img, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "100px" }}
                    onClick={() => setSelectedImage(img.src)}
                    className="relative group break-inside-avoid overflow-hidden rounded-lg cursor-zoom-in bg-neutral-100 dark:bg-neutral-900"
                >
                    <Image
                        src={img.src}
                        alt="Gallery Image"
                        width={600}
                        height={800}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <ZoomIn className="text-white drop-shadow-md w-8 h-8" />
                    </div>
                </motion.div>
            ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
        >
            <button 
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                onClick={() => setSelectedImage(null)}
            >
                <X className="w-10 h-10" />
            </button>
            <div className="relative w-full max-w-5xl h-full max-h-[90vh] flex items-center justify-center">
                <Image
                    src={selectedImage}
                    alt="Gallery Fullscreen"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
