import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { AboutSection } from "@/components/about-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { ServicesGrid } from "@/components/services-grid"
import { AvailableHomesSection } from "@/components/available-homes-section"
import { AboutGrid } from "@/components/about-grid"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <AboutSection />
      <WhyChooseSection />
      <ServicesGrid />
      <AvailableHomesSection />
      <AboutGrid />
      <ContactForm />
      <Footer />
    </main>
  )
}
