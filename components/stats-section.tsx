"use client"

import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

function NumberTicker({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(latest.toFixed(0) as unknown as number)
      }
    })
  }, [springValue])

  return <span ref={ref} />
}

export function StatsSection() {
  return (
    <section className="bg-black text-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          <div className="p-8">
            <p className="text-6xl font-bold mb-4 font-mono tracking-tighter">
              <NumberTicker value={20} />+
            </p>
            <div className="text-sm uppercase tracking-[0.2em] text-neutral-400">Years Experience</div>
          </div>
          <div className="p-8">
            <p className="text-6xl font-bold mb-4 font-mono tracking-tighter">
              <NumberTicker value={150} />+
            </p>
             <div className="text-sm uppercase tracking-[0.2em] text-neutral-400">Projects Completed</div>
          </div>
          <div className="p-8">
            <p className="text-6xl font-bold mb-4 font-mono tracking-tighter">
              100%
            </p>
             <div className="text-sm uppercase tracking-[0.2em] text-neutral-400">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
