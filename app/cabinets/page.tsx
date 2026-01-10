"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CabinetConfigurator } from "@/components/cabinet-configurator"
import Image from "next/image"

export default function CabinetsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero - Cabinet Refacing */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image 
            src="/luxury-modern-kitchen-with-white-marble-countertop.jpg"
            alt="Cabinet Refacing"
            fill
            className="object-cover brightness-[0.35]"
            priority
        />
        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-orange-500 font-bold mb-6">
                The Smarter Kitchen Upgrade
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
                Cabinet Refacing
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto mb-4">
                Transform your kitchen in days, not months.
            </p>
            <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-8">
                Why rip out perfectly good cabinet boxes? Refacing gives you a stunning, brand-new look at a fraction of the cost and time of a full remodel. Same layout. New doors. New hardware. New life.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-10 text-left">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 w-64">
                    <p className="text-3xl font-bold text-orange-500 mb-1">50%</p>
                    <p className="text-sm text-white/70">Less than full replacement cost</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 w-64">
                    <p className="text-3xl font-bold text-orange-500 mb-1">3-5 Days</p>
                    <p className="text-sm text-white/70">Average project completion</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 w-64">
                    <p className="text-3xl font-bold text-orange-500 mb-1">Zero</p>
                    <p className="text-sm text-white/70">Demo dust & kitchen downtime</p>
                </div>
            </div>
        </div>
      </section>

      {/* Product Configurator */}
      <section>
        <CabinetConfigurator />
      </section>

      <Footer />
    </main>
  )
}
