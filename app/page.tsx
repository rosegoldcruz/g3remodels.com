import { BubbleMenu } from "@/components/bubble-menu"
import { LightRays } from "@/components/light-rays"
import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { AboutSection } from "@/components/about-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { ServicesGrid } from "@/components/services-grid"
import { AvailableHomesSection } from "@/components/available-homes-section"
import { AboutGrid } from "@/components/about-grid"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <BubbleMenu
        items={navItems}
        logo={<span className="text-lg font-bold tracking-tighter">G3 LUXE</span>}
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={true}
      />
      
      <div style={{ position: 'relative', height: '600px' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>
      
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
