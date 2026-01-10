"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const styles = [
    {
        title: "Fusion Shaker",
        description: "A modern twist on a timeless classic. Clean lines meet traditional warmth.",
        image: "/luxury-shaker-style-kitchen-cabinets-3d-architectu.jpg"
    },
    {
        title: "Slab Minimalist",
        description: "Ultra-modern, handleless designs for the purist aesthetic.",
        image: "/sleek-minimalist-slab-front-kitchen-cabinets-handl.jpg"
    },
    {
        title: "Transitional Elegance",
        description: "The perfect balance between contemporary edge and classic comfort.",
        image: "/luxury-transitional-kitchen-blending-classic-and-c.jpg"
    },
    {
        title: "Structural Refacing",
        description: "Transform existing structures with high-end architectural skins.",
        image: "/luxury-3d-structural-refacing-kitchen-modern-archi.jpg"
    }
]

export default function CabinetsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image 
            src="/luxury-modern-kitchen-with-white-marble-countertop.jpg"
            alt="Luxury Cabinetry"
            fill
            className="object-cover brightness-50"
            priority
        />
        <div className="relative z-10 text-center text-white px-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
                Bespoke Cabinetry
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/80 max-w-2xl mx-auto">
                Architectural grade millwork tailored to your lifestyle.
            </p>
        </div>
      </section>

      {/* Styles Grid */}
      <section className="py-24 px-6 container mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Design Collection</h2>
            <p className="text-muted-foreground">Select a foundation for your unique vision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {styles.map((style, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative h-[400px] overflow-hidden rounded-2xl cursor-pointer"
                >
                    <Image
                        src={style.image}
                        alt={style.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                        <h3 className="text-2xl font-bold mb-2">{style.title}</h3>
                        <p className="text-white/80 mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            {style.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            Configure <ArrowRight className="h-4 w-4" />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </section>

      {/* Configurator CTA */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="container mx-auto px-6 text-center">
             <h2 className="text-3xl md:text-5xl font-bold mb-6">Built to Your Specification</h2>
             <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
                Our distinct process allows for complete customization of materials, finishes, and hardware.
             </p>
             <Button size="lg" className="bg-white text-black hover:bg-white/90 px-8 py-6 text-lg rounded-full">
                Start Design Consultation
             </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
