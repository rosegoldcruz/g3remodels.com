"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      title: "Design-Build",
      description: "Experience the ease of a full-service design-build firm for your home remodel. From initial concept to final touches, we manage every detail, ensuring a seamless renovation journey.",
      image: "/service-design-build.png"
    },
    {
      title: "Bathrooms",
      description: "Make your bathroom a functional and relaxing space with complete bathroom remodeling. We take care of plumbing, fixtures, tile work, and lighting, delivering a smooth process and stunning result.",
      image: "/service-bathrooms.png"
    },
    {
      title: "Kitchens",
      description: "Upgrade your kitchen with our remodeling services. We design layouts that maximize space and efficiency, handling everything from cabinetry and countertops to appliances and lighting.",
      image: "/service-kitchens.png"
    },
    {
      title: "Basements",
      description: "Maximize your home's potential with custom basement remodeling. We oversee every step, from moisture control and insulation to flooring and lighting, creating a versatile, stylish basement.",
      image: "/service-basements.png"
    },
    {
      title: "Attics",
      description: "Expand your living space with professional attic conversions. We craft layouts that optimize space and ensure compliance with building codes, turning your attic into a cozy, useful area.",
      image: "/service-attics.png"
    },
    {
      title: "Whole Home",
      description: "Renovating more than one space? Our comprehensive services cover your entire home, updating each room to reflect your style and needs for a seamless and stress-free experience.",
      image: "/service-whole-home.png"
    }
  ]

  return (
    <section className="bg-muted/30 py-24 md:py-32 border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl mb-6 tracking-tight uppercase"
          >
            Personalized Remodeling Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            We provide full-service remodeling from bathrooms to kitchens and even whole-home renovations. From concept to completion, we adapt to your specific needs to deliver the best results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background rounded-2xl overflow-hidden shadow-xl shadow-black/5 border border-border/50 group"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="font-serif text-2xl tracking-tight uppercase">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
