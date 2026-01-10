"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { BrandLogo } from "@/components/brand-logo"
import { Wrench, Shield, Clock, Award, Users } from "lucide-react"

interface BentoItemProps {
  title: string | ReactNode
  description: string
  header?: ReactNode
  className?: string
  icon?: ReactNode
}

function BentoGrid({ className, children }: { className?: string; children?: ReactNode }) {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  )
}

function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
}: BentoItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="mb-2">
            {icon}
        </div>
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </motion.div>
  )
}

export function AboutSection() {
  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight flex items-center justify-center gap-2">
          About <BrandLogo width={40} height={40} />
        </h2>
        
        <BentoGrid>
          <BentoGridItem
            title="Family Owned"
            description="Founded in 2003, we bring over two decades of family values to every project."
            header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/50 bg-[url('/g3.png')] bg-cover bg-center grayscale opacity-50" />}
            icon={<Users className="h-4 w-4 text-neutral-500" />}
            className="md:col-span-1"
          />
          <BentoGridItem
            title="Craftsmanship"
            description="Uncompromising attention to detail in every remodel and renovation."
            header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/50 bg-[url('/luxury-shaker-style-kitchen-cabinets-3d-architectu.jpg')] bg-cover bg-center" />}
            icon={<Wrench className="h-4 w-4 text-neutral-500" />}
            className="md:col-span-1"
          />
          <BentoGridItem
            title="Design-Build"
            description="Seamless integration of architectural design and construction excellence."
            header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/50 bg-[url('/luxury-home-construction-blueprint-architectural-p.jpg')] bg-cover bg-center" />}
            icon={<Shield className="h-4 w-4 text-neutral-500" />}
            className="md:col-span-1"
          />
          <BentoGridItem
            title={<span className="flex items-center gap-2">Experience <BrandLogo width={16} height={16} /></span>}
            description="We transform luxury estates with precision and artistry."
            header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/50 bg-[url('/luxury-home-community-aerial-view-modern-houses-de.jpg')] bg-cover bg-center" />}
            icon={<Award className="h-4 w-4 text-neutral-500" />}
            className="md:col-span-3"
          />
        </BentoGrid>
      </div>
    </section>
  )
}
