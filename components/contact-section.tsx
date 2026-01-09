"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="bg-[#060010] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={contentRef} className="grid gap-16 lg:grid-cols-2">
          {/* Left Column - Info */}
          <div>
            <span className="mb-4 inline-block text-xs uppercase tracking-[0.3em] text-[#c4a052]">
              Begin Your Transformation
            </span>
            <h2 className="font-serif text-4xl font-light text-[#f5f0e8] md:text-5xl">
              Let{"'"}s Create
              <br />
              Something Extraordinary
            </h2>
            <p className="mt-6 text-[#8a8a94]">
              Schedule a private consultation with our design team to discuss your vision. Every masterpiece begins with
              a conversation.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#2a2a34]">
                  <MapPin className="h-5 w-5 text-[#c4a052]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#f5f0e8]">Design Studio</h4>
                  <p className="text-sm text-[#8a8a94]">
                    1247 Ocean Avenue, Suite 400
                    <br />
                    Santa Monica, CA 90401
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#2a2a34]">
                  <Phone className="h-5 w-5 text-[#c4a052]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#f5f0e8]">Phone</h4>
                  <p className="text-sm text-[#8a8a94]">+1 (310) 555-AXIOM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#2a2a34]">
                  <Mail className="h-5 w-5 text-[#c4a052]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#f5f0e8]">Email</h4>
                  <p className="text-sm text-[#8a8a94]">design@axiom-arch.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="rounded-2xl bg-[#0a0a14] p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-[#8a8a94]">First Name</label>
                  <Input
                    placeholder="John"
                    className="border-[#2a2a34] bg-transparent text-[#f5f0e8] placeholder:text-[#4a4a54] focus:border-[#c4a052]"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-[#8a8a94]">Last Name</label>
                  <Input
                    placeholder="Doe"
                    className="border-[#2a2a34] bg-transparent text-[#f5f0e8] placeholder:text-[#4a4a54] focus:border-[#c4a052]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-[#8a8a94]">Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="border-[#2a2a34] bg-transparent text-[#f5f0e8] placeholder:text-[#4a4a54] focus:border-[#c4a052]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-[#8a8a94]">Project Type</label>
                <select className="w-full rounded-md border border-[#2a2a34] bg-transparent px-3 py-2 text-[#f5f0e8] focus:border-[#c4a052] focus:outline-none">
                  <option value="" className="bg-[#0a0a14]">
                    Select a collection
                  </option>
                  <option value="shaker" className="bg-[#0a0a14]">
                    Structural Shaker
                  </option>
                  <option value="slab" className="bg-[#0a0a14]">
                    Precision Slab
                  </option>
                  <option value="hybrid" className="bg-[#0a0a14]">
                    Fusion Hybrid
                  </option>
                  <option value="slide" className="bg-[#0a0a14]">
                    Integrated Slide
                  </option>
                  <option value="slim" className="bg-[#0a0a14]">
                    Architectural Slim
                  </option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-[#8a8a94]">Tell us about your project</label>
                <Textarea
                  placeholder="Describe your vision..."
                  rows={4}
                  className="border-[#2a2a34] bg-transparent text-[#f5f0e8] placeholder:text-[#4a4a54] focus:border-[#c4a052]"
                />
              </div>

              <Button type="submit" className="w-full bg-[#c4a052] text-[#060010] hover:bg-[#d4b062]" size="lg">
                Request Consultation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
