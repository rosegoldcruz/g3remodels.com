"use client";

import React, { useState } from "react";
import { ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";
import {
  StaggeredText,
  TiltCard,
  MagicCard,
  FadeIn,
  ShimmerButton,
  PortfolioItem,
  AccordionItem
} from "@/components/about-components";

// --- Data ---
const industryStandards = [
  { title: "Precision", desc: "Every pixel is calculated. We do not rely on guesswork." },
  { title: "Durability", desc: "Built to withstand the shifts in digital landscapes." },
  { title: "Aesthetics", desc: "Beauty is a function of purpose, not just decoration." },
  { title: "Velocity", desc: "Optimized performance delivered at the speed of thought." },
];

const faqData = [
  { q: "What is your design philosophy?", a: "We believe in subtraction. We remove the non-essential until only the pure function and form remain." },
  { q: "How do you handle project timelines?", a: "Our timelines are rigid yet realistic. We operate in two-week sprints with transparent deliverables." },
  { q: "Do you offer post-launch support?", a: "Yes. A digital product is a living organism. We provide ongoing care packages to ensure health." },
  { q: "What technologies do you prefer?", a: "We are agnostic, but we lean heavily towards React ecosystems and edge-ready frameworks." },
];

export default function AboutPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  return (
    <main className="bg-neutral-50 min-h-screen text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">

      {/* 1. Header/Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold tracking-tighter text-xl">G3 CONTRACTING</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-600">
            <a href="/" className="hover:text-black transition-colors">Home</a>
            <a href="/about" className="hover:text-black transition-colors">About</a>
            <a href="/gallery" className="hover:text-black transition-colors">Gallery</a>
          </div>
          <button className="text-sm font-medium border border-neutral-300 px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors">
            Get in touch
          </button>
        </div>
      </nav>

      {/* 2. Hero */}
      <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center pt-16">
        {/* Cinematic Brownstone Background */}
        <div
            className="absolute inset-0 bg-cover bg-center z-0 scale-105"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516156008625-3a9d60da923c?q=80&w=2874&auto=format&fit=crop')" }}
        >
            <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center text-white">
          <StaggeredText text="ABOUT THE FIRM" className="text-7xl md:text-9xl font-bold tracking-tighter" />
        </div>
      </section>

      {/* 3. Our Story */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <h2 className="text-sm font-bold tracking-widest text-neutral-500 mb-6 uppercase">Our Story</h2>
          <p className="text-2xl md:text-3xl font-light leading-tight mb-6">
            We started with a simple premise: Digital spaces should feel as permanent and crafted as physical architecture.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            Founded in 2003, our team combines the discipline of traditional engineering with the fluidity of modern art. We don't just build websites; we construct digital legacies.
          </p>
        </FadeIn>

        <div className="flex justify-center md:justify-end">
          <TiltCard className="w-full max-w-md aspect-[3/4] rounded-sm overflow-hidden shadow-2xl">
             <img
               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop"
               alt="Founder"
               className="object-cover w-full h-full"
             />
          </TiltCard>
        </div>
      </section>

      {/* 4. Industry Standards */}
      <section className="bg-neutral-50 py-24 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-sm font-bold tracking-widest text-neutral-500 mb-12 uppercase">Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industryStandards.map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                    <MagicCard title={item.title} desc={item.desc} />
                </FadeIn>
            ))}
            </div>
        </div>
      </section>

      {/* 5. Quality & Materials */}
      <div className="max-w-7xl mx-auto px-6 py-32 space-y-32">
        {[
            { tag: "Materials", title: "Code as Concrete", desc: "We use TypeScript as our rebar. Strong, typed, and unyielding." },
            { tag: "Control", title: "Pixel Perfect", desc: "Automated regression testing ensures that nothing moves unless we tell it to." },
            { tag: "Services", title: "Holistic Design", desc: "From the first wireframe to the final deployment, we own the process." }
        ].map((section, i) => (
            <FadeIn key={i} className="grid md:grid-cols-2 gap-12 border-t border-neutral-200 pt-12">
                <div className="text-xl font-medium">{section.tag}</div>
                <div>
                    <h3 className="text-4xl font-light mb-4">{section.title}</h3>
                    <p className="text-neutral-600">{section.desc}</p>
                </div>
            </FadeIn>
        ))}
      </div>

      {/* 6. Black CTA Bar */}
      <section className="bg-neutral-900 py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-8">
                Ready to elevate your digital presence?
            </h2>
            <div className="flex justify-center">
                <ShimmerButton text="Schedule Your Design Consultation" />
            </div>
        </div>
      </section>

      {/* 7. Portfolio (5-Column) */}
      <section className="grid grid-cols-2 md:grid-cols-5 bg-black">
        {[1,2,3,4,5].map((n) => (
            <PortfolioItem
                key={n}
                src={`https://images.unsplash.com/photo-1600${500+n}-cdbca1d794b7?auto=format&fit=crop&w=800&q=80`}
                title={`Project 0${n}`}
            />
        ))}
      </section>

      {/* 8. Testimonials */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
                <FadeIn key={i} delay={i * 0.2} className="space-y-4">
                    <div className="text-2xl text-neutral-900">★★★★★</div>
                    <p className="text-lg text-neutral-600 font-light italic">
                        "They didn't just build a site, they built a cathedral for our brand. Absolutely stunning work."
                    </p>
                    <p className="text-sm font-bold uppercase">— CEO, TechCorp</p>
                </FadeIn>
            ))}
        </div>
      </section>

      {/* 9. Trust Badges */}
      <section className="border-t border-neutral-200 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholders for logos */}
            {['Acme', 'Stark', 'Wayne', 'Cyberdyne', 'Umbrella'].map(logo => (
                <span key={logo} className="text-2xl font-black text-neutral-300 select-none">{logo}</span>
            ))}
        </div>
      </section>

      {/* 10. Consultation Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-neutral-900 z-0">
             <img
               src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
               className="w-full h-full object-cover opacity-20"
               alt="Office"
             />
        </div>
        <div className="relative z-10 text-center">
             <h2 className="text-white text-5xl font-light mb-6">Let's Build Something Real.</h2>
             <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-neutral-200 transition-colors">
                Start Project
             </button>
        </div>
      </section>

      {/* 11. The Accordion Section */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12 tracking-tight">Frequently Asked Questions</h2>
        <div className="w-full">
            {faqData.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.q}
                    answer={item.a}
                    isOpen={openAccordion === index}
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                />
            ))}
        </div>
      </section>

      {/* 12. Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
                <h3 className="font-bold text-xl mb-4">G3 CONTRACTING</h3>
                <p className="text-neutral-400 text-sm">Est. 2003. Arizona.</p>
            </div>
            <div className="flex flex-col space-y-2">
                <h4 className="font-bold mb-2">Sitemap</h4>
                {['Home', 'About', 'Gallery', 'Contact'].map(link => (
                    <a key={link} href="#" className="text-neutral-400 hover:text-white hover:underline underline-offset-4 decoration-neutral-500 transition-all w-fit">
                        {link}
                    </a>
                ))}
            </div>
            <div className="flex flex-col space-y-2">
                <h4 className="font-bold mb-2">Social</h4>
                <div className="flex gap-4">
                    <Instagram className="w-5 h-5 text-neutral-400 hover:text-white cursor-pointer" />
                    <Twitter className="w-5 h-5 text-neutral-400 hover:text-white cursor-pointer" />
                    <Linkedin className="w-5 h-5 text-neutral-400 hover:text-white cursor-pointer" />
                </div>
            </div>
            <div>
                <h4 className="font-bold mb-2">Newsletter</h4>
                <div className="flex border-b border-neutral-700 pb-2">
                    <input type="email" placeholder="Email Address" className="bg-transparent outline-none w-full placeholder:text-neutral-600" />
                    <ArrowRight className="w-4 h-4 text-neutral-400" />
                </div>
            </div>
        </div>
      </footer>

    </main>
  );
}
