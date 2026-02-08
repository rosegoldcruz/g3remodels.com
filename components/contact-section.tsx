"use client"

import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const FORMSPREE_URL = "https://formspree.io/f/mnjbqkwr"

type FormStatus = "idle" | "submitting" | "success" | "error"

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [formStatus, setFormStatus] = useState<FormStatus>("idle")

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    try {
      const form = formRef.current
      if (!form) throw new Error("Form not found")

      const formData = new FormData(form)

      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (!res.ok) throw new Error("Failed to send")

      setFormStatus("success")
      form.reset()
    } catch {
      setFormStatus("error")
    }
  }

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
                  <h4 className="font-medium text-[#f5f0e8]">Location</h4>
                  <p className="text-sm text-[#8a8a94]">
                    Tempe, Arizona
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#2a2a34]">
                  <Phone className="h-5 w-5 text-[#c4a052]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#f5f0e8]">Phone</h4>
                  <a href="tel:+14802031635" className="text-sm text-[#8a8a94] hover:text-[#c4a052] transition-colors">
                    (480) 203-1635
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#2a2a34]">
                  <Mail className="h-5 w-5 text-[#c4a052]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#f5f0e8]">Email</h4>
                  <a href="mailto:toddgentner@hotmail.com" className="text-sm text-[#8a8a94] hover:text-[#c4a052] transition-colors">
                    toddgentner@hotmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="rounded-2xl bg-[#0a0a14] p-8 md:p-12">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              action={FORMSPREE_URL}
              method="POST"
              className="space-y-6"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-[#8a8a94]">First Name</label>
                  <Input
                    name="firstName"
                    placeholder="John"
                    required
                    className="border-[#2a2a34] bg-transparent text-[#f5f0e8] placeholder:text-[#4a4a54] focus:border-[#c4a052]"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-[#8a8a94]">Last Name</label>
                  <Input
                    name="lastName"
                    placeholder="Doe"
                    required
                    className="border-[#2a2a34] bg-transparent text-[#f5f0e8] placeholder:text-[#4a4a54] focus:border-[#c4a052]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-[#8a8a94]">Email</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="border-[#2a2a34] bg-transparent text-[#f5f0e8] placeholder:text-[#4a4a54] focus:border-[#c4a052]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-[#8a8a94]">Phone</label>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="(480) 555-1234"
                  className="border-[#2a2a34] bg-transparent text-[#f5f0e8] placeholder:text-[#4a4a54] focus:border-[#c4a052]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-[#8a8a94]">Project Type</label>
                <select
                  name="projectType"
                  className="w-full rounded-md border border-[#2a2a34] bg-transparent px-3 py-2 text-[#f5f0e8] focus:border-[#c4a052] focus:outline-none"
                >
                  <option value="" className="bg-[#0a0a14]">
                    Select a project type
                  </option>
                  <option value="Kitchen Remodel" className="bg-[#0a0a14]">
                    Kitchen Remodel
                  </option>
                  <option value="Bathroom Remodel" className="bg-[#0a0a14]">
                    Bathroom Remodel
                  </option>
                  <option value="Full Home Renovation" className="bg-[#0a0a14]">
                    Full Home Renovation
                  </option>
                  <option value="Cabinets" className="bg-[#0a0a14]">
                    Cabinets
                  </option>
                  <option value="Flooring" className="bg-[#0a0a14]">
                    Flooring
                  </option>
                  <option value="Other" className="bg-[#0a0a14]">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-[#8a8a94]">Tell us about your project</label>
                <Textarea
                  name="message"
                  placeholder="Describe your vision..."
                  rows={4}
                  required
                  className="border-[#2a2a34] bg-transparent text-[#f5f0e8] placeholder:text-[#4a4a54] focus:border-[#c4a052]"
                />
              </div>

              {formStatus === "success" && (
                <div className="flex items-center gap-2 rounded-md bg-green-900/30 border border-green-800/50 p-3 text-sm text-green-400">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  Thank you! We&apos;ll be in touch shortly.
                </div>
              )}

              {formStatus === "error" && (
                <div className="flex items-center gap-2 rounded-md bg-red-900/30 border border-red-800/50 p-3 text-sm text-red-400">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <Button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full bg-[#c4a052] text-[#060010] hover:bg-[#d4b062] disabled:opacity-60"
                size="lg"
              >
                {formStatus === "submitting" ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  "Request Consultation"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
