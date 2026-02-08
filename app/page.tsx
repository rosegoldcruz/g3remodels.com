"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LegacySection } from "@/components/legacy-section"
import { MethodSection } from "@/components/method-section"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"
import { Formbutton } from "@/components/formbutton"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <LegacySection />
      <MethodSection />
      <ServicesSection />
      <Footer />
      <Formbutton />
    </main>
  )
}
