"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Formbutton } from "@/components/formbutton"
import { Gem, Shield, Thermometer, Ruler, ArrowRight } from "lucide-react"

const services = [
  {
    title: "Luxury Kitchen Remodels",
    description:
      "Gilbert homeowners invest in their kitchens because they live in them. We build chef-grade spaces with custom cabinetry, waterfall quartz islands, professional appliance integration, and open layouts designed for desert entertaining.",
    image: "/service-kitchens.png",
  },
  {
    title: "High-End Bathroom Renovations",
    description:
      "Walk-in rain showers, freestanding tubs, heated tile, and custom vanities — built to the standard Gilbert homeowners expect. We handle structural modifications, plumbing reroutes, and finish work with zero compromise.",
    image: "/service-bathrooms.png",
  },
  {
    title: "Whole-Home Transformations",
    description:
      "When your Gilbert home needs more than one room updated, G3 coordinates the full-scale renovation — structural, mechanical, and finish — under a single contract. No scheduling chaos, no finger-pointing between trades.",
    image: "/service-whole-home.png",
  },
  {
    title: "Custom Additions",
    description:
      "Expanding square footage in Gilbert's premium communities requires precision engineering and HOA-compliant design. We design, permit, and build additions that integrate seamlessly with your existing architecture.",
    image: "/service-design-build.png",
  },
]

const advantages = [
  {
    icon: Gem,
    title: "Luxury-Grade Execution",
    description:
      "Gilbert's homes aren't starter properties — and they shouldn't be treated like them. G3 delivers finishes, materials, and craftsmanship calibrated for high-value suburban residences.",
  },
  {
    icon: Thermometer,
    title: "Arizona Climate Engineering",
    description:
      "Every Gilbert remodel includes energy-efficient window systems, radiant barrier insulation, and HVAC optimization — keeping your home cool without running your electric bill through the roof.",
  },
  {
    icon: Shield,
    title: "Town of Gilbert Permitting",
    description:
      "We manage the Town of Gilbert's permitting and inspection process from submission to final sign-off. HOA architectural review included — we handle the paperwork and the politics.",
  },
  {
    icon: Ruler,
    title: "End-to-End Management",
    description:
      "G3 doesn't hand you off to subcontractors. From demolition to punch list, your project is managed by one team with one point of contact and one quality standard.",
  },
]

export default function GilbertPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/service-bathrooms.png"
            alt="Gilbert luxury home remodeling"
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
              Gilbert &middot; Southeast Valley &middot; Luxury Remodeling
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-4xl text-5xl md:text-7xl font-semibold tracking-tight text-white"
            >
              Elevating Gilbert Homes to Their Full Potential
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-3xl text-base md:text-lg text-white/80"
            >
              Gilbert&apos;s premier family communities deserve remodeling that matches
              the investment. G3 Contracting delivers high-end, full-scale home
              transformations — managing the entire build so you get luxury results
              without the luxury headaches.
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
                Start Your Gilbert Project
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
            Premium Homes. Premium Standards.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed text-center max-w-3xl mx-auto"
          >
            Gilbert consistently ranks among the best places to raise a family in
            Arizona — and the housing reflects it. From Power Ranch to Agritopia,
            Morrison Ranch to Seville, these are homes built to impress. But even
            premium builds need updating when finishes age and families evolve.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground text-lg leading-relaxed text-center max-w-3xl mx-auto mt-6"
          >
            G3 Contracting specializes in luxury suburban transformations — taking
            Gilbert&apos;s already-solid homes and upgrading them with the finishes,
            layouts, and systems that match today&apos;s standards. We don&apos;t do
            cookie-cutter. Every project is custom-scoped for how your family
            actually lives.
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
              What We Build in Gilbert
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Luxury-grade remodeling for Gilbert&apos;s most discerning homeowners.
              Every project managed end-to-end by G3.
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
            Why Gilbert Homeowners Choose G3
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
            Elevate Your Gilbert Home
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#8a8a94] text-lg mb-10"
          >
            Your home should reflect the standard you set for everything else.
            Schedule a private consultation with G3 — we&apos;ll discuss design,
            scope, budget, and timeline with zero pressure.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#c4a052] text-black px-10 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#d4b062] transition-colors"
          >
            Schedule a Consultation
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
      </section>

      <Footer />
      <Formbutton />
    </main>
  )
}
