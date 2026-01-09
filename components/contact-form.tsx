"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

gsap.registerPlugin(ScrollTrigger)

const communities = [
  "Ascent at The Phoenician",
  "Ironwood Golf Villas",
  "Sanctuary on Black Mountain",
  "Village at Secret Desert Mountain",
]

export function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const [selectedCommunities, setSelectedCommunities] = useState<string[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const toggleCommunity = (community: string) => {
    setSelectedCommunities((prev) =>
      prev.includes(community) ? prev.filter((c) => c !== community) : [...prev, community],
    )
  }

  return (
    <section id="contact" ref={sectionRef} className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <h3 className="mb-12 text-center text-sm uppercase tracking-[0.4em] text-muted-foreground md:mb-16">
          Interested in Learning More?
        </h3>

        {/* Form */}
        <div ref={formRef} className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left Column - Contact Fields */}
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Email</label>
              <Input
                type="email"
                className="rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">First Name</label>
              <Input
                type="text"
                className="rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Last Name</label>
              <Input
                type="text"
                className="rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Phone Number</label>
              <Input
                type="tel"
                className="rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                Message or Comments
              </label>
              <Textarea className="min-h-[100px] rounded-none border-0 border-b border-border bg-transparent px-0 resize-none focus-visible:ring-0" />
            </div>
          </div>

          {/* Right Column - Options */}
          <div className="space-y-8">
            {/* Community Checkboxes */}
            <div className="space-y-3">
              {communities.map((community) => (
                <div key={community} className="flex items-center gap-3">
                  <Checkbox
                    id={community}
                    checked={selectedCommunities.includes(community)}
                    onCheckedChange={() => toggleCommunity(community)}
                    className="rounded-none"
                  />
                  <label htmlFor={community} className="cursor-pointer text-sm text-muted-foreground">
                    {community}
                  </label>
                </div>
              ))}
            </div>

            {/* Dropdowns */}
            <div>
              <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                Area of Interest:
              </label>
              <Select>
                <SelectTrigger className="rounded-none border-0 border-b border-border bg-transparent px-0 focus:ring-0">
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="estate">Estate Homes</SelectItem>
                  <SelectItem value="architecture">Architecture & Interior Design</SelectItem>
                  <SelectItem value="renovations">Renovations</SelectItem>
                  <SelectItem value="communities">Communities</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Price Point:</label>
              <Select>
                <SelectTrigger className="rounded-none border-0 border-b border-border bg-transparent px-0 focus:ring-0">
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-2m">$1M - $2M</SelectItem>
                  <SelectItem value="2-3m">$2M - $3M</SelectItem>
                  <SelectItem value="3-5m">$3M - $5M</SelectItem>
                  <SelectItem value="5m+">$5M+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                How did you hear about us?
              </label>
              <Select>
                <SelectTrigger className="rounded-none border-0 border-b border-border bg-transparent px-0 focus:ring-0">
                  <SelectValue placeholder="Website" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="website">Website</SelectItem>
                  <SelectItem value="referral">Referral</SelectItem>
                  <SelectItem value="social">Social Media</SelectItem>
                  <SelectItem value="advertisement">Advertisement</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-12 flex justify-center">
          <Button className="rounded-full bg-foreground px-10 py-6 text-sm uppercase tracking-wider text-background hover:bg-foreground/90">
            Submit
          </Button>
        </div>
      </div>
    </section>
  )
}
