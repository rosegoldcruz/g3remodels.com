"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Playfair_Display } from "next/font/google"

export function LegacySection() {
  return (
    <section className="bg-background text-foreground py-24 md:py-32 overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Main Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-4xl md:text-6xl text-center mb-24 tracking-tight"
        >
          The G3 Legacy
        </motion.h2>

        <div className="space-y-32">
          {/* Inception Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <span className="inline-block bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              Inception
            </span>
            <h3 className="font-serif text-3xl md:text-4xl">The Genesis of Precision</h3>
            <p className="text-muted-foreground text-lg leading-relaxed font-light max-w-2xl">
              Built on a foundation of architectural integrity and master-level craftsmanship, 
              G3 was established to bridge the gap between complex engineering and 
              high-end residential aesthetics.
            </p>
            <div className="bg-muted/30 border-l-2 border-primary p-8 mt-10 italic text-foreground/80 rounded-r-xl">
              "We didn't set out to be the largest firm in the valley. We set out to be the most meticulous."
            </div>
          </motion.div>

          {/* Leadership Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <span className="inline-block bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              Leadership
            </span>
            <h3 className="font-serif text-3xl md:text-4xl">Architectural Vision</h3>
            <p className="text-muted-foreground text-lg leading-relaxed font-light max-w-2xl">
              Founder Todd Gentner leads G3 with an uncompromising standard for detail. 
              By merging rigorous construction management with a deep understanding of 
              luxury design, he ensures every renovation is a seamless extension of 
              the homeowner's lifestyle.
            </p>
            <div className="relative aspect-video w-full overflow-hidden rounded-3xl mt-12 group shadow-2xl shadow-black/5">
              <Image
                src="/legacy-construction.png"
                alt="Luxury Construction Site"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          {/* Legacy Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <span className="inline-block bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              Legacy
            </span>
            <h3 className="font-serif text-3xl md:text-4xl">The G3 Standard</h3>
            <p className="text-muted-foreground text-lg leading-relaxed font-light max-w-2xl">
              Today, G3 Contracting is recognized as a premier partner for those who 
              value transparency and perfection. We don't just manage projects; we 
              curate the environments where your legacy begins.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
