"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const heroImageSrc = "/minimalist-contemporary-kitchen-sleek-handleless-c.jpg"
const detailImageSrc = "/ultra-modern-slim-profile-kitchen-cabinets-floatin.jpg"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* HERO (FULL BLEED) */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImageSrc}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55" />
        </div>

        <div className="relative z-10 min-h-[85vh] flex items-end">
          <div className="container mx-auto px-6 pt-40 pb-20">
            <h1 className="max-w-4xl text-5xl md:text-7xl font-semibold tracking-tight text-white">
              Craftsmanship That Endures.
            </h1>
            <p className="mt-6 max-w-3xl text-base md:text-lg text-white/80">
              Since 2003, G3 Contracting has delivered refined kitchen transformations through precision, restraint, and respect for the home.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1 — THE PHILOSOPHY */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Our Approach</h2>
          <div className="mt-8 max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
            <p>We don’t believe in loud renovations or chaotic job sites. We believe in control, clarity, and craftsmanship.</p>
            <p>
              Every G3 project is approached with a singular mindset: treat the home as if it were our own. That means disciplined planning,
              clean execution, and finishes that feel intentional—not trendy.
            </p>
            <p>Our work isn’t designed to impress today. It’s built to feel right for decades.</p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — ESTABLISHED CREDIBILITY (NO FACES) */}
      <section className="py-20 md:py-28 border-y border-border/40">
        <div className="container mx-auto px-6 grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Established in 2003</h2>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                G3 Contracting was founded in Arizona in 2003 with a simple principle: do the work correctly, or don’t do it at all.
              </p>
              <p>
                Over two decades later, that principle still governs every project. We specialize in kitchen remodeling and cabinet refacing
                for homeowners who value precision over shortcuts and long-term quality over quick wins.
              </p>
              <p>
                Our reputation has been built quietly—project by project—through consistency, accountability, and results.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted">
            <Image
              src={detailImageSrc}
              alt="Architectural detail"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT SETS US APART (LUXURY SIGNALING) */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Precision",
                desc: "Every measurement matters. Every reveal is intentional.",
              },
              {
                title: "Respect for the Home",
                desc: "Clean sites. Clear communication. No disruption theatrics.",
              },
              {
                title: "Craftsmanship",
                desc: "Materials, finishes, and installation standards that hold up under scrutiny.",
              },
              {
                title: "Longevity",
                desc: "We build for permanence, not trends.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-border/40 p-6">
                <div className="h-px w-10 bg-border" />
                <h3 className="mt-6 text-lg font-medium tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — PROCESS (EDITORIAL STYLE) */}
      <section className="py-20 md:py-28 border-y border-border/40">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">A Controlled Process</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Consultation",
                desc: "We listen first. We assess the space, goals, and constraints before offering solutions.",
              },
              {
                title: "Design Alignment",
                desc: "Materials, proportions, and finishes are refined to work as a single system.",
              },
              {
                title: "Installation",
                desc: "Executed with discipline, protection, and respect for your home.",
              },
              {
                title: "Final Review",
                desc: "Details are checked. Standards are met. The space is delivered complete.",
              },
            ].map((step) => (
              <Card key={step.title} className="rounded-none border-border/40">
                <CardHeader className="pb-0">
                  <CardTitle className="text-base md:text-lg tracking-tight">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — CLOSING STATEMENT */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              Luxury isn’t excess.
              <br />
              It’s restraint, precision, and trust.
            </p>

            <div className="mt-10">
              <Button asChild size="lg" className="rounded-none">
                <Link href="/#contact">Start Your Kitchen Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
