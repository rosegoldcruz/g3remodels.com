import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Preloader } from "@/components/preloader"
import "./globals.css"

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans",
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
})
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "G³ Contracting | Family-Owned Home Remodeling Since 2003",
  description:
    "G³ Contracting is a family-owned, owner-operated home remodeling company. Specializing in cabinet refacing, kitchen remodels, and fast-turn renovations with over 20 years of experience.",
  keywords: [
    "home remodeling",
    "kitchen remodel",
    "cabinet refacing",
    "bathroom renovation",
    "home renovation",
    "residential remodeling",
    "family-owned contractor",
    "G3 Contracting",
  ],
  authors: [{ name: "G³ Contracting" }],
  openGraph: {
    title: "G³ Contracting | Family-Owned Home Remodeling Since 2003",
    description:
      "Family-owned, owner-operated home remodeling. Cabinet refacing, kitchen remodels, and fast-turn renovations with 20+ years experience.",
    type: "website",
    locale: "en_US",
  },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
}

// JSON-LD Business Schema for SEO
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "G³ Contracting",
  description:
    "Family-owned, owner-operated home remodeling company founded in 2003. Specializing in cabinet refacing, kitchen remodels, and fast-turn residential renovations.",
  foundingDate: "2003",
  founder: {
    "@type": "Person",
    name: "G³ Contracting Founder",
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: "3",
  },
  areaServed: {
    "@type": "state",
    name: "arizona",
  },
  serviceType: [
    "Home Remodeling",
    "Kitchen Remodeling",
    "Cabinet Refacing",
    "Bathroom Renovation",
    "Residential Construction",
  ],
  knowsAbout: [
    "Cabinet Refacing",
    "Kitchen Remodeling",
    "Bathroom Remodeling",
    "Home Renovation",
    "Residential Remodeling",
  ],
  slogan: "Short timelines. Clean installs. Predictable results.",
  priceRange: "$$",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Preloader />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
