"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Formbutton } from "@/components/formbutton"
import { Home, Shield, Thermometer, Ruler, ArrowRight } from "lucide-react"

const services = [
  {
    title: "Kitchen Remodels",
    description:
      "Mesa kitchens were built for a different era. We rip out dated layouts and replace them with open-concept designs — custom cabinetry, quartz countertops, and energy-efficient appliances that handle Arizona summers without spiking your SRP bill.",
    image: "/service-kitchens.png",
  },
  {
    title: "Bathroom Renovations",
    description:
      "From master suites to hall baths, we modernize Mesa bathrooms with walk-in showers, floating vanities, and proper ventilation. Every project includes full waterproofing and plumbing updates — no shortcuts.",
    image: "/service-bathrooms.png",
  },
  {
    title: "Whole-Home Renovations",
    description:
      "When one room isn't enough, G3 manages full-scale transformations across your entire Mesa home. We coordinate structural, mechanical, and finish trades under one contract — eliminating the chaos of piecemeal renovations.",
    image: "/service-whole-home.png",
  },
  {
    title: "Design-Build Services",
    description:
      "Skip the architect-contractor runaround. Our design-build approach means your Mesa remodel moves from concept to construction under one roof, one timeline, and one budget. No surprises.",
    image: "/service-design-build.png",
  },
]

const advantages = [
  {
    icon: Home,
    title: "Built for Established Homes",
    description:
      "Mesa's housing stock ranges from 1970s ranch homes to 2000s builds. We know the construction quirks of each era and modernize them without gutting what makes them solid.",
  },
  {
    icon: Thermometer,
    title: "Energy-First Approach",
    description:
      "Arizona summers are brutal. Every Mesa remodel includes energy-efficient windows, proper insulation, and HVAC considerations that reduce cooling costs — not just look good.",
  },
  {
    icon: Shield,
    title: "Mesa Permits Handled",
    description:
      "We manage the City of Mesa permitting process end-to-end. Structural changes, electrical upgrades, plumbing relocations — every modification is code-compliant and inspector-ready.",
  },
  {
    icon: Ruler,
    title: "Family-Owned Since 2003",
    description:
      "G3 isn't a franchise or a lead-gen middleman. We're a family-run general contractor that's been doing this across the East Valley for over two decades. We answer our own phone.",
  },
]

export default function MesaPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/service-kitchens.png"
            alt="Mesa home remodeling"
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
              Mesa &middot; East Valley &middot; General Contractor
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-4xl text-5xl md:text-7xl font-semibold tracking-tight text-white"
            >
              Modernizing Mesa Homes — One Build at a Time
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-3xl text-base md:text-lg text-white/80"
            >
              Mesa&apos;s established neighborhoods deserve more than surface-level updates.
              G3 Contracting delivers full-scale home remodels — managing every trade,
              every permit, and every detail so East Valley families get the home 
              they actually want.
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
                Start Your Mesa Project
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
            The East Valley&apos;s Remodeling Standard
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed text-center max-w-3xl mx-auto"
          >
            Mesa is the backbone of the East Valley — a city of established family homes,
            mature neighborhoods, and homeowners who&apos;ve outgrown their original floor plans.
            The kitchens are too small. The bathrooms haven&apos;t been touched since the Clinton
            administration. The layout doesn&apos;t work for how your family lives now.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground text-lg leading-relaxed text-center max-w-3xl mx-auto mt-6"
          >
            G3 Contracting doesn&apos;t do cosmetic flips. We do structural, comprehensive
            remodels that modernize Mesa homes from the inside out — while respecting
            the neighborhoods that make this city worth living in.
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
              Remodeling Services for Mesa
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              From outdated kitchens to complete home overhauls, G3 handles every
              phase of your Mesa remodel under one contract.
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
            Why Mesa Families Trust G3
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
            Your Mesa Home Deserves Better
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#8a8a94] text-lg mb-10"
          >
            Stop patching — start transforming. Talk to G3 about a full-scale
            remodel that brings your Mesa home into this decade. Free consultation,
            straight talk, no obligations.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#c4a052] text-black px-10 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#d4b062] transition-colors"
          >
            Get Your Free Estimate
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
      </section>

      <Footer />
      <Formbutton />
    </main>
  )
}
