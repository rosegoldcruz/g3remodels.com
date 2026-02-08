"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Formbutton } from "@/components/formbutton"
import { Building2, Shield, Thermometer, Ruler, ArrowRight } from "lucide-react"

const services = [
  {
    title: "Multi-Family & Rental Renovations",
    description:
      "Tempe's rental market moves fast — and tenants expect modern finishes. G3 renovates duplexes, triplexes, and multi-unit properties with durable, tenant-ready materials that look premium and survive heavy turnover. We handle full-unit gut renovations on tight timelines so you minimize vacancy.",
    image: "/service-whole-home.png",
  },
  {
    title: "Kitchen Remodels",
    description:
      "Whether it's a homeowner near Papago Park or a landlord updating units off Mill Avenue, G3 builds kitchens that maximize space and durability. Open layouts, quartz countertops, soft-close cabinetry, and energy-efficient appliances built to withstand Arizona heat and daily use.",
    image: "/service-kitchens.png",
  },
  {
    title: "Bathroom Renovations",
    description:
      "Tempe bathrooms take a beating — especially in rental and student-adjacent properties. We install walk-in showers, commercial-grade tile, and proper waterproofing that holds up for years. For homeowners, we deliver spa-level finishes that compete with anything in Scottsdale.",
    image: "/service-bathrooms.png",
  },
  {
    title: "Investment Property Upgrades",
    description:
      "Tempe's proximity to ASU makes it one of the Valley's strongest rental markets. G3 helps investors and property owners modernize aging units — kitchens, baths, flooring, and common areas — to command higher rents and attract better tenants. Fast turnaround, no fluff.",
    image: "/service-design-build.png",
  },
]

const advantages = [
  {
    icon: Building2,
    title: "Multi-Family Specialists",
    description:
      "Tempe isn't just single-family homes. We renovate duplexes, fourplexes, and small apartment buildings — coordinating phased construction so occupied units aren't disrupted while vacant ones get upgraded.",
  },
  {
    icon: Thermometer,
    title: "Energy-Efficient Builds",
    description:
      "Arizona summers don't care if it's a rental or a primary residence. Every Tempe project includes energy-efficient windows, proper insulation, and HVAC considerations that lower utility costs for owners and tenants alike.",
  },
  {
    icon: Shield,
    title: "City of Tempe Permitting",
    description:
      "Multi-family renovations, ADU conversions, and structural modifications all require permits. G3 handles the City of Tempe permitting process end-to-end — including zoning reviews for rental and investment properties.",
  },
  {
    icon: Ruler,
    title: "Investor-Friendly Timelines",
    description:
      "Vacancy costs money. G3 runs tight schedules with coordinated trade sequencing to get your Tempe units renovated and back on the market fast. We quote realistic timelines and hit them.",
  },
]

export default function TempePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HERO */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/service-design-build.png"
            alt="Tempe home and multi-family remodeling"
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
              Tempe &middot; ASU Corridor &middot; General Contractor
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-4xl text-5xl md:text-7xl font-semibold tracking-tight text-white"
            >
              Remodeling Tempe — From College Rentals to Custom Homes
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-3xl text-base md:text-lg text-white/80"
            >
              Tempe is a city that runs on two speeds: the energy of a university
              town and the stability of established neighborhoods. G3 Contracting
              builds for both — delivering full-scale remodels for homeowners,
              landlords, and investors across the Tempe market.
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
                Start Your Tempe Project
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
            A College Town That Builds Serious Equity
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed text-center max-w-3xl mx-auto"
          >
            Tempe sits at the center of the Valley — bordered by Scottsdale, Phoenix,
            and Mesa — with Arizona State University driving non-stop demand for
            housing. That means two things: homeowners in neighborhoods like Maple-Ash
            and Optimist Park are sitting on appreciating properties that deserve
            modern upgrades, and landlords near campus are leaving money on the table
            with outdated units.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground text-lg leading-relaxed text-center max-w-3xl mx-auto mt-6"
          >
            G3 Contracting works both sides of the Tempe market. We do high-end
            kitchen and bath remodels for families who plan to stay, and fast,
            durable multi-unit renovations for investors who need turnover-proof
            finishes and tight timelines. Same quality standard. Different scope.
          </motion.p>
        </div>
      </section>

      {/* DUAL-MARKET CALLOUT */}
      <section className="border-t border-border/40">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="py-16 md:py-24 md:pr-12"
            >
              <span className="inline-block bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                Homeowners
              </span>
              <h3 className="font-serif text-2xl md:text-3xl tracking-tight mb-4">
                Your Tempe Home, Reimagined
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                South Tempe, the Lakes, Optimist Park — these neighborhoods have
                character and location. G3 preserves what works and transforms what
                doesn&apos;t. Open-concept kitchens, master bath renovations, and whole-home
                updates that add real value and daily livability to your Tempe property.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="py-16 md:py-24 md:pl-12"
            >
              <span className="inline-block bg-[#c4a052]/10 text-[#c4a052] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                Investors & Landlords
              </span>
              <h3 className="font-serif text-2xl md:text-3xl tracking-tight mb-4">
                Maximize Your Rental ROI
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                ASU drives 70,000+ students into Tempe every year — plus faculty,
                staff, and young professionals. Updated units near campus, along the
                light rail corridor, and in emerging rental zones command premium rents.
                G3 renovates multi-family properties fast with durable, modern finishes
                that survive high-turnover use.
              </p>
            </motion.div>
          </div>
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
              Remodeling Services for Tempe
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Single-family homes and multi-unit properties — G3 manages every
              phase of your Tempe project under one contract.
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
            Why Tempe Owners &amp; Investors Choose G3
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
            Tempe Properties Don&apos;t Wait — Neither Should You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#8a8a94] text-lg mb-10"
          >
            Whether you&apos;re a homeowner ready for a real upgrade or an investor
            looking to maximize rental returns near ASU, G3 is the general
            contractor that gets it done. Free consultation — let&apos;s talk scope.
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
