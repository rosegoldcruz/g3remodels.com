"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function MethodSection() {
  const steps = [
    {
      number: "Step 1",
      title: "Laser Diagnostics",
      description: "We begin with sub-millimeter mapping of your existing space. Using advanced laser leveling technology, we identify every nuance of your walls and floors before a single cabinet is ordered. This ensures a fit so precise, it looks born from the structure itself.",
      image: "/method-step-1.png"
    },
    {
      number: "Step 2",
      title: "Elite Curation",
      description: "Sourcing isn't just shopping; it's curation. We select premium wood grains, marine-grade plywoods, and high-performance polymers. Every material is inspected for defects, ensuring only the finest components make it to your estate.",
      image: "/method-step-2.png"
    },
    {
      number: "Step 3",
      title: "The 48-Hour Execution",
      description: "Disruption is the enemy of luxury. Our '48-Hour Execution' protocol means once demolition is complete, our team swarms with military precision to install, level, and finish your primary joinery in record time without sacrificing a micron of accuracy.",
      image: "/method-step-3.png"
    }
  ]

  return (
    <section className="bg-background py-24 md:py-32 border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl mb-4 tracking-tight"
          >
            The G3 Method
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg tracking-widest uppercase"
          >
            Technical precision. Uncompromised craft.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto space-y-24 md:space-y-32">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}
            >
              <div className="flex-1 space-y-6">
                <span className="text-primary font-bold tracking-tighter text-xl md:text-2xl">
                  {step.number}: {step.title}
                </span>
                <p className="text-muted-foreground text-lg leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
              <div className="flex-1 w-full">
                <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl shadow-black/5 group">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
