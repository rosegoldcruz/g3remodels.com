"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"
import { BrandLogo } from "@/components/brand-logo"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 flex items-center justify-center gap-4"
            >
                Our Legacy <BrandLogo width={60} height={60} />
            </motion.h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Since 2003, we have been redefining the standard of luxury remodeling through uncompromising craftsmanship and a family-first approach.
            </p>
        </div>
      </section>

      <AboutSection />
      
      <div className="py-20 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
            <h2 className="text-3xl font-bold">The G3 Standard</h2>
            <p className="text-lg leading-relaxed text-left md:text-center">
                We believe that true luxury lies in the details. From the initial blueprint to the final polish, every step of our process is governed by a strict code of excellence. We don't just build; we curate environments that elevate the way you live. Our team of master artisans brings decades of collective experience to your estate, ensuring that your vision is realized with precision.
            </p>
        </div>
      </div>

      <Footer />
    </main>
  )
}
