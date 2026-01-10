"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface GalleryItem {
  id: number
  src: string
  className: string
  title: string
}

const defaultItems: GalleryItem[] = [
  { id: 1, src: "/1.jpeg", className: "col-span-1 md:col-span-2 row-span-2", title: "Fusion Shaker" },
  { id: 2, src: "/2.jpeg", className: "col-span-1", title: "Slab Minimalist" },
  { id: 3, src: "/3.jpeg", className: "col-span-1", title: "Modern Elegance" },
  { id: 4, src: "/4.jpeg", className: "col-span-1 md:col-span-2", title: "Heritage Craft" },
  { id: 5, src: "/5.jpeg", className: "col-span-1 md:col-span-1", title: "Contemporary" },
]

export function LuxuryGallery({ items = defaultItems }: { items?: any[] }) {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  // Use props items if available (mapping them to our structure if needed), or default
  // Just use defaultItems for now as prop passing requires remapping logic which I can simplify:
  // We utilize the passed items if strictly matching or just ignore for rebuild per prompt requirements
  // "Use Layout Morphing"
  
  const displayItems = items === defaultItems ? defaultItems : items?.map((item, idx) => ({
      id: idx + 1,
      src: item.src,
      title: item.title,
      className: item.cols || "col-span-1"
  })) || defaultItems

  return (
    <section className="py-24 bg-background" id="projects">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">Selected Works</h2>
      </div>
      
      <div className="container mx-auto px-6 h-full min-h-[600px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {displayItems.map((item) => (
            <motion.div
              key={item.id}
              layoutId={`card-${item.id}`}
              onClick={() => setSelectedId(item.id)}
              className={cn(
                "relative cursor-pointer overflow-hidden rounded-xl gap-4 group",
                item.className
              )}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                  <h3 className="font-bold text-xl">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
