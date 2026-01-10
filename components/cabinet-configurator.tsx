"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

// ============================================================================
// CONFIG DATA - Maps your cabs_clean folder structure
// ============================================================================
const CONFIG_DATA = {
  doorStyles: {
    shaker_classic: {
      name: "Shaker Classic",
      options: [
        { id: "flour", color: "Flour", door: "doors/shaker_classic/shaker-classic-flour.png", kitchen: "kitchens/Flour-Shaker_Kitchen.jpg" },
        { id: "storm", color: "Storm", door: "doors/shaker_classic/shaker-classic-storm.png", kitchen: "kitchens/Storm-Shaker_Kitchen (1).jpg" },
        { id: "graphite", color: "Graphite", door: "doors/shaker_classic/shaker-classic-graphite.png", kitchen: "kitchens/Graphite-Shaker_Kitchen.jpg" },
        { id: "mist", color: "Mist", door: "doors/shaker_classic/shaker-classic-mist.png", kitchen: "kitchens/Mist-Shaker_Kitchen.jpg" },
        { id: "slate", color: "Slate", door: "doors/shaker_classic/shaker-classic-slate.png", kitchen: "kitchens/Slate-Shaker_Kitchen.jpg" },
        { id: "espresso_walnut", color: "Espresso Walnut", door: "doors/shaker_classic/shaker-classic-espresso-walnut.png", kitchen: "kitchens/Espresso-Walnut-Shaker_Kitchen.jpg" },
        { id: "latte_walnut", color: "Latte Walnut", door: "doors/shaker_classic/shaker-claassic-latte-walnut.png", kitchen: "kitchens/Latte-Walnut-Shaker_Kitchen.jpg" },
        { id: "nimbus_oak", color: "Nimbus Oak", door: "doors/shaker_classic/shaker-classic-nimbus-oak.png", kitchen: "kitchens/Nimbus-Oak-Shaker_Kitchen.jpg" },
        { id: "sable_oak", color: "Sable Oak", door: "doors/shaker_classic/shaker-classic-sable-oak.png", kitchen: "kitchens/Sable-Oak-Shaker.jpg" },
      ],
    },
    fusion_shaker: {
      name: "Fusion Shaker",
      options: [
        { id: "flour", color: "Flour", door: "doors/fusion_in_shaker/Fusion-Shaker-flour.png", kitchen: "kitchens/Flour-Fusion-Shaker_Kitchen.jpg" },
        { id: "storm", color: "Storm", door: "doors/fusion_in_shaker/Fusion-Shaker-storm.png", kitchen: "kitchens/Storm-Fusion-Shaker_Kitchen (1).jpg" },
        { id: "graphite", color: "Graphite", door: "doors/fusion_in_shaker/Fusion-Shaker-graphite.png", kitchen: "kitchens/Graphite-Fusion-Shaker_Kitchen.jpg" },
        { id: "mist", color: "Mist", door: "doors/fusion_in_shaker/Fusion-Shaker-mist.png", kitchen: "kitchens/Mist-Fusion-Shaker_Kitchen.jpg" },
        { id: "slate", color: "Slate", door: "doors/fusion_in_shaker/Fusion-Shaker-slate.png", kitchen: "kitchens/Slate-Fusion-Shaker_Kitchen.jpg" },
        { id: "espresso_walnut", color: "Espresso Walnut", door: "doors/fusion_in_shaker/Fusion-Shaker-espresso-walnut.png", kitchen: "kitchens/Espresso-Walnut-Fusion-Shaker.jpg" },
        { id: "latte_walnut", color: "Latte Walnut", door: "doors/fusion_in_shaker/Fusion-Shaker-latte-walnut.png", kitchen: "kitchens/Latte-Walnut-Fusion-Shaker_Kitchen.jpg" },
      ],
    },
    fusion_slide: {
      name: "Fusion Slide",
      options: [
        { id: "flour", color: "Flour", door: "doors/fusion_in_slide/Fusion-Slide-flour.png", kitchen: "kitchens/Flour-Fusion-Slide_Kitchen.jpg" },
        { id: "storm", color: "Storm", door: "doors/fusion_in_slide/Fusion-Slide-storm.png", kitchen: "kitchens/Storm-Fusion-Slide_Kitchen (1).jpg" },
        { id: "graphite", color: "Graphite", door: "doors/fusion_in_slide/Fusion-Slide-graphite.png", kitchen: "kitchens/Graphite-Fusion-Slide_Kitchen.jpg" },
        { id: "espresso_walnut", color: "Espresso Walnut", door: "doors/fusion_in_slide/Fusion-Slide-espresso-walnut.png", kitchen: "kitchens/Espresso-Walnut-Fusion-Slide.jpg" },
      ],
    },
    shaker_slide: {
      name: "Shaker Slide",
      options: [
        { id: "flour", color: "Flour", door: "doors/shaker_slide/shaker-slide-flour.png", kitchen: "kitchens/Flour-Slide_Kitchen.jpg" },
        { id: "storm", color: "Storm", door: "doors/shaker_slide/shaker-slide-storm.png", kitchen: "kitchens/Storm-Slide_Kitchen.jpg" },
        { id: "graphite", color: "Graphite", door: "doors/shaker_slide/shaker-slide-graphite.png", kitchen: "kitchens/Graphite-Slide_Kitchen (1).jpg" },
        { id: "espresso_walnut", color: "Espresso Walnut", door: "doors/shaker_slide/shaker-slide-espresso-walnut.png", kitchen: "kitchens/Espresso-Walnut-Slide_Kitchen.jpg" },
      ],
    },
    slab: {
      name: "Slab Modern",
      options: [
        { id: "flour", color: "Flour", door: "doors/slab/slab-flour.png", kitchen: "kitchens/Flour-Slab_Kitchen.jpg" },
        { id: "storm", color: "Storm", door: "doors/slab/slab-storm.png", kitchen: "kitchens/Storm-Slab_Kitchen.jpg" },
        { id: "graphite", color: "Graphite", door: "doors/slab/slab-graphite.png", kitchen: "kitchens/Graphite-Slab_Kitchen.jpg" },
        { id: "mist", color: "Mist", door: "doors/slab/slab-mist.png", kitchen: "kitchens/Mist-Slab_Kitchen.jpg" },
        { id: "slate", color: "Slate", door: "doors/slab/slab-slate.png", kitchen: "kitchens/Slate-Slab_Kitchen.jpg" },
        { id: "espresso_walnut", color: "Espresso Walnut", door: "doors/slab/slab-espresso-walnut.png", kitchen: "kitchens/Espresso-Walnut-Slab.jpg" },
        { id: "latte_walnut", color: "Latte Walnut", door: "doors/slab/slab-latte-walnut.png", kitchen: "kitchens/Latte-Walnut-Slab_Kitchen.jpg" },
        { id: "snow_gloss", color: "Snow Gloss", door: "doors/slab/slab-snow-gloss-white.png", kitchen: "kitchens/Snow-Gloss-Slab_Kitchen.jpg" },
        { id: "urban_teak", color: "Urban Teak", door: "doors/slab/slab-urban-teak.png", kitchen: "kitchens/Urban-Teak-Slab_Kitchen.jpg" },
        { id: "platinum_teak", color: "Platinum Teak", door: "doors/slab/slab-platnum-teak.png", kitchen: "kitchens/Platinum-Teak-Slab_Kitchen.jpg" },
        { id: "wheat_oak", color: "Wheat Oak", door: "doors/slab/slab-wheat-oak.png", kitchen: "kitchens/Wheat-Oak-Slab.jpg" },
      ],
    },
  },
  hardware: {
    arch: {
      name: "Arch",
      finishes: {
        rose_gold: "hardware/arch/Arch_RoseGold.png",
        satin_nickel: "hardware/arch/Arch_SatinNickel.png",
        matte_black: "hardware/arch/Arch_MatteBlack.png",
        chrome: "hardware/arch/arch_chrome.png",
      },
    },
    bar: {
      name: "Bar Pull",
      finishes: {
        matte_black: "hardware/bar/Bar-pulls-black .png",
        satin_nickel: "hardware/bar/BarPull_SatinNickel.png",
      },
    },
    artisan: {
      name: "Artisan",
      finishes: {
        rose_gold: "hardware/artisan/Artisan_RoseGold.png",
        satin_nickel: "hardware/artisan/Artisan_SatinNickel.png",
        matte_black: "hardware/artisan/Artisan_MatteBlack.png",
        chrome: "hardware/artisan/Artisan_Chrome.png",
      },
    },
    cottage: {
      name: "Cottage",
      finishes: {
        rose_gold: "hardware/cottage/Cottage_RoseGold_.png.png",
        satin_nickel: "hardware/cottage/Cottage__SatinNickel.png",
        chrome: "hardware/cottage/Cottage__Chrome.png",
      },
    },
    loft: {
      name: "Loft",
      finishes: {
        rose_gold: "hardware/loft/Loft_RoseGold.png",
        satin_nickel: "hardware/loft/Loft_SatinNickel.png",
        matte_black: "hardware/loft/Loft_MatteBlack.png",
        chrome: "hardware/loft/Loft_Chrome_1.png.png",
      },
    },
    square: {
      name: "Square",
      finishes: {
        rose_gold: "hardware/square/Square_RoseGold.png",
        satin_nickel: "hardware/square/Square_SatinNickel.png",
        matte_black: "hardware/square/Square_MatteBlack.png",
        chrome: "hardware/square/Square_chrome.png",
      },
    },
  },
}

// Hardware finish color swatches for visual selection
const FINISH_COLORS: Record<string, string> = {
  rose_gold: "#B76E79",
  satin_nickel: "#9A9A9A",
  matte_black: "#1a1a1a",
  chrome: "#C0C0C0",
}

const FINISH_NAMES: Record<string, string> = {
  rose_gold: "Rose Gold",
  satin_nickel: "Satin Nickel",
  matte_black: "Matte Black",
  chrome: "Chrome",
}

export function CabinetConfigurator() {
  const [style, setStyle] = useState("shaker_classic")
  const [colorKey, setColorKey] = useState("flour")
  const [hwType, setHwType] = useState("arch")
  const [hwFinish, setHwFinish] = useState("matte_black")
  const [isLoading, setIsLoading] = useState(false)

  // Current selections
  const currentStyle = CONFIG_DATA.doorStyles[style as keyof typeof CONFIG_DATA.doorStyles]
  const currentColor = currentStyle.options.find((c) => c.id === colorKey) || currentStyle.options[0]
  const currentHw = CONFIG_DATA.hardware[hwType as keyof typeof CONFIG_DATA.hardware]
  const currentHwFinish = currentHw.finishes[hwFinish as keyof typeof currentHw.finishes] || Object.values(currentHw.finishes)[0]

  // Handle style change - reset color to first available
  const handleStyleChange = (newStyle: string) => {
    setIsLoading(true)
    setStyle(newStyle)
    setColorKey(CONFIG_DATA.doorStyles[newStyle as keyof typeof CONFIG_DATA.doorStyles].options[0].id)
    setTimeout(() => setIsLoading(false), 300)
  }

  // Handle hardware type change - ensure finish exists
  const handleHwTypeChange = (newHwType: string) => {
    setHwType(newHwType)
    const newHw = CONFIG_DATA.hardware[newHwType as keyof typeof CONFIG_DATA.hardware]
    if (!newHw.finishes[hwFinish as keyof typeof newHw.finishes]) {
      setHwFinish(Object.keys(newHw.finishes)[0])
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <div className="border-b border-white/10 py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-2">Design Studio</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">Cabinet Configurator</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: Visualizer (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Kitchen Scene */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/10] bg-zinc-900">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${style}-${colorKey}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={`/cabs_clean/${currentColor.kitchen}`}
                    alt="Kitchen Scene"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Loading Overlay */}
              {isLoading && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
                  <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                </div>
              )}

              {/* Floating Hardware Preview Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-4 left-4 w-44 bg-black/70 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-2xl"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-3">Hardware Preview</p>
                <div className="relative h-28 flex items-center justify-center bg-zinc-800/50 rounded-lg overflow-hidden">
                  {/* Door Sample (faded) */}
                  <Image
                    src={`/cabs_clean/${currentColor.door}`}
                    alt="Door Sample"
                    fill
                    className="object-contain opacity-40"
                  />
                  {/* Hardware Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={`/cabs_clean/${currentHwFinish}`}
                      alt="Hardware"
                      width={48}
                      height={48}
                      className="object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
                    />
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-[11px] font-semibold text-orange-500">
                    {currentColor.color} + {FINISH_NAMES[hwFinish] || hwFinish}
                  </p>
                </div>
              </motion.div>

              {/* Style Badge */}
              <div className="absolute top-4 left-4 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider">{currentStyle.name}</span>
              </div>
            </div>

            {/* Color Selection Thumbnails */}
            <div className="bg-zinc-900/50 rounded-xl p-4 border border-white/5">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">
                Available Colors for {currentStyle.name}
              </p>
              <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 gap-2">
                {currentStyle.options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setIsLoading(true)
                      setColorKey(opt.id)
                      setTimeout(() => setIsLoading(false), 300)
                    }}
                    className={cn(
                      "group relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200",
                      colorKey === opt.id
                        ? "border-orange-500 scale-105 shadow-lg shadow-orange-500/20"
                        : "border-transparent hover:border-white/30 opacity-70 hover:opacity-100"
                    )}
                  >
                    <Image
                      src={`/cabs_clean/${opt.door}`}
                      alt={opt.color}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-1">
                      <span className="text-[8px] font-bold truncate px-1">{opt.color}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Controls (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-zinc-900 rounded-2xl border border-white/5 p-6 space-y-8">
              {/* Step 1: Door Style */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-6 h-6 rounded-full bg-orange-600 text-xs font-black flex items-center justify-center">1</span>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-black">Door Style</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(CONFIG_DATA.doorStyles).map(([id, data]) => (
                    <button
                      key={id}
                      onClick={() => handleStyleChange(id)}
                      className={cn(
                        "px-4 py-2.5 rounded-lg text-xs font-bold transition-all duration-200",
                        style === id
                          ? "bg-orange-600 text-white shadow-lg shadow-orange-600/30"
                          : "bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      {data.name}
                    </button>
                  ))}
                </div>
              </section>

              {/* Step 2: Hardware Type */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-6 h-6 rounded-full bg-orange-600 text-xs font-black flex items-center justify-center">2</span>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-black">Hardware Style</h3>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(CONFIG_DATA.hardware).map(([id, data]) => (
                    <button
                      key={id}
                      onClick={() => handleHwTypeChange(id)}
                      className={cn(
                        "px-3 py-2.5 rounded-lg text-xs font-bold transition-all duration-200",
                        hwType === id
                          ? "bg-white text-zinc-900 shadow-lg"
                          : "bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      {data.name}
                    </button>
                  ))}
                </div>
              </section>

              {/* Step 3: Hardware Finish */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-6 h-6 rounded-full bg-orange-600 text-xs font-black flex items-center justify-center">3</span>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-black">Hardware Finish</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {Object.keys(currentHw.finishes).map((finish) => (
                    <button
                      key={finish}
                      onClick={() => setHwFinish(finish)}
                      className={cn(
                        "group flex flex-col items-center gap-2 p-2 rounded-lg transition-all duration-200",
                        hwFinish === finish ? "bg-white/10" : "hover:bg-white/5"
                      )}
                      title={FINISH_NAMES[finish] || finish}
                    >
                      <div
                        className={cn(
                          "w-10 h-10 rounded-full border-2 transition-all duration-200 shadow-lg",
                          hwFinish === finish
                            ? "border-orange-500 scale-110"
                            : "border-white/20 group-hover:border-white/40"
                        )}
                        style={{ backgroundColor: FINISH_COLORS[finish] || "#666" }}
                      />
                      <span className="text-[10px] font-medium text-zinc-400 group-hover:text-white">
                        {FINISH_NAMES[finish] || finish}
                      </span>
                    </button>
                  ))}
                </div>
              </section>

              {/* Summary */}
              <div className="bg-zinc-800/50 rounded-xl p-4 border border-white/5">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3">Your Selection</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Style</span>
                    <span className="font-semibold">{currentStyle.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Color</span>
                    <span className="font-semibold">{currentColor.color}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Hardware</span>
                    <span className="font-semibold">{currentHw.name} - {FINISH_NAMES[hwFinish]}</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-black rounded-xl transition-all duration-200 shadow-xl shadow-orange-900/30 uppercase tracking-wider text-sm">
                Get a Quote on This Look
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
