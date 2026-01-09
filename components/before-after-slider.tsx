"use client"

import { useRef, useState, useCallback } from "react"
import Image from "next/image"
import { Slider } from "@/components/ui/slider"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const [sliderValue, setSliderValue] = useState([50])
  const containerRef = useRef<HTMLDivElement>(null)

  const handleSliderChange = useCallback((value: number[]) => {
    setSliderValue(value)
  }, [])

  return (
    <div className="w-full">
      <div ref={containerRef} className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <Image src={afterImage || "/placeholder.svg"} alt={afterLabel} fill className="object-cover" />
        </div>

        {/* Before Image (Clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderValue[0]}%` }}>
          <div className="relative h-full w-full" style={{ width: `${100 / (sliderValue[0] / 100)}%` }}>
            <Image src={beforeImage || "/placeholder.svg"} alt={beforeLabel} fill className="object-cover" />
          </div>
        </div>

        {/* Divider Line */}
        <div
          className="absolute bottom-0 top-0 z-10 w-1 bg-[#c4a052]"
          style={{ left: `${sliderValue[0]}%`, transform: "translateX(-50%)" }}
        >
          {/* Handle */}
          <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#c4a052] bg-[#060010]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#c4a052"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 8-4 4 4 4" />
              <path d="m6 8 4 4-4 4" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute left-4 top-4 rounded-full bg-[#060010]/80 px-4 py-2 text-xs uppercase tracking-widest text-[#f5f0e8]">
          {beforeLabel}
        </div>
        <div className="absolute right-4 top-4 rounded-full bg-[#c4a052] px-4 py-2 text-xs uppercase tracking-widest text-[#060010]">
          {afterLabel}
        </div>
      </div>

      {/* Slider Control */}
      <div className="mt-6 px-4">
        <Slider value={sliderValue} onValueChange={handleSliderChange} max={100} min={0} step={1} className="w-full" />
      </div>
    </div>
  )
}
