"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Formbutton } from "@/components/formbutton"
import { MapPin, Shield, Thermometer, Ruler, ArrowRight } from "lucide-react"

const services = [
  {
    title: "Full-Home Remodels",
    description:
      "Central Phoenix homes deserve upgrades that respect their character while bringing them into the modern era. We manage the entire build — structural, electrical, plumbing, and finish — so you deal with one team, not twelve.",
    image: "/service-whole-home.png",
  },
  {
    title: "Kitchen Transformations",
    description:
      "Open-concept layouts built for desert entertaining. We tear down walls, reroute utilities, and install custom cabinetry — turning cramped galley kitchens into the centerpiece of your Phoenix home.",
    image: "/service-kitchens.png",
  },
  {
    title: "Bathroom Renovations",
    description:
      "From outdated tile to walk-in showers with frameless glass and heated flooring. We handle Phoenix building permits, plumbing rough-ins, and waterproofing — delivering spa-grade bathrooms on schedule.",
    image: "/service-bathrooms.png",
  },
  {
    title: "Additions & Build-Outs",
    description:
      "Maximize square footage in established Phoenix neighborhoods where lot space is limited. Room additions, garage conversions, and ADUs — fully permitted and engineered for Arizona's climate.",
    image: "/service-design-build.png",
  },
]

const advantages = [
  {
    icon: Thermometer,
    title: "Desert-Engineered",
    description:
      "Every material and system is selected for Arizona's extreme heat — energy-efficient windows, insulated framing, and HVAC optimization that cuts cooling costs.",
  },
  {
    icon: Shield,
    title: "Permit-Ready Execution",
    description:
      "We navigate Phoenix's building codes and permitting process so you don't have to. Every project is fully compliant before a single wall is opened.",
  },
  {
    icon: MapPin,
    title: "Central Metro Specialists",
    description:
      "From Arcadia to Encanto, Camelback Corridor to downtown — we understand the architectural character of Phoenix's most established neighborhoods.",
  },
  {
    icon: Ruler,
    title: "One Team, Entire Build",
    description:
      "No juggling subcontractors. G3 manages your full-scale transformation from demolition to the final walkthrough. One point of contact, one standard of quality.",
  },
]

export default function PhoenixPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/service-whole-home.png"
            alt="Phoenix home remodeling"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 min-h-[85vh] flex items-end">
          <div className="container mx-auto px-6 pt-40 pb-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 inline-block text-xs uppercase tracking-[0.3em] text-[#c4a052]"
            >
              Phoenix Metro &middot; General Contractor
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-4xl text-5xl md:text-7xl font-semibold tracking-tight text-white"
            >
              Full-Scale Remodeling for Phoenix Homeowners
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-3xl text-base md:text-lg text-white/80"
            >
              G3 Contracting manages the entire build — from blueprint to final
              walkthrough — so Phoenix homeowners get urban-ready upgrades without
              the chaos of managing multiple contractors.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8"
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#c4a052] text-black px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#d4b062] transition-colors"
              >
                Start Your Phoenix Project
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRO / AUTHORITY */}
      <section className="py-24 md:py-32 border-t border-border/40">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl tracking-tight text-center mb-8"
          >
            The Metro Hub Demands More
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed text-center max-w-3xl mx-auto"
          >
            Phoenix isn&apos;t just growing — it&apos;s evolving. Historic bungalows in Willo,
            mid-century gems in Paradise Valley, and modern builds across the Camelback
            Corridor all share one thing: they need contractors who understand the
            difference between a renovation and a transformation.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground text-lg leading-relaxed text-center max-w-3xl mx-auto mt-6"
          >
            G3 has been delivering full-scale transformations across the Valley since
            2003. We don&apos;t subcontract your vision out to the lowest bidder — we
            own every phase of the build.
          </motion.p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-muted/30 py-24 md:py-32 border-t border-border/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-5xl mb-6 tracking-tight uppercase"
            >
              What We Build in Phoenix
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Every project is managed end-to-end by G3. One team, one standard,
              one outcome: a home that works for how Phoenix families actually live.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl overflow-hidden shadow-xl shadow-black/5 border border-border/50 group"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="font-serif text-2xl tracking-tight uppercase">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-24 md:py-32 border-t border-border/40">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl tracking-tight text-center mb-16"
          >
            Why Phoenix Homeowners Choose G3
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {advantages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-5 p-6 rounded-xl border border-border/50 bg-muted/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/50 shrink-0">
                  <item.icon className="h-5 w-5 text-[#c4a052]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#060010] py-24 md:py-32">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl text-[#f5f0e8] mb-6"
          >
            Ready to Transform Your Phoenix Home?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#8a8a94] text-lg mb-10"
          >
            Schedule a consultation with G3 Contracting. We&apos;ll walk your
            property, discuss the scope, and give you a straight answer — no
            pressure, no runaround.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#c4a052] text-black px-10 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#d4b062] transition-colors"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
      </section>

      <Footer />
      <Formbutton />
    </main>
  )
}
