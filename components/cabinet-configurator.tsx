"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { BrandLogo } from "@/components/brand-logo"

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
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-10"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <BrandLogo width={64} height={64} />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

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

              {/* Summary */}
              <div className="bg-zinc-800/50 rounded-xl p-4 border border-white/5">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3">Cabinet Selection</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Style</span>
                    <span className="font-semibold">{currentStyle.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Color</span>
                    <span className="font-semibold">{currentColor.color}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HARDWARE CONFIGURATOR - Separate Section */}
        <div className="mt-16 border-t border-white/10 pt-16">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-3">Step 2</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Select Your Hardware</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Choose from our curated collection of premium hardware finishes to complete your look.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Hardware Type Selection */}
            <div className="bg-zinc-900 rounded-2xl border border-white/5 p-6">
              <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-400 font-black mb-6">Hardware Style</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {Object.entries(CONFIG_DATA.hardware).map(([id, data]) => (
                  <button
                    key={id}
                    onClick={() => handleHwTypeChange(id)}
                    className={cn(
                      "relative p-4 rounded-xl text-center transition-all duration-200 border-2",
                      hwType === id
                        ? "bg-white text-zinc-900 border-white shadow-lg shadow-white/20"
                        : "bg-white/5 text-zinc-300 border-transparent hover:bg-white/10 hover:text-white hover:border-white/20"
                    )}
                  >
                    <div className="h-16 flex items-center justify-center mb-3">
                      <Image
                        src={`/cabs_clean/${Object.values(data.finishes)[0]}`}
                        alt={data.name}
                        width={60}
                        height={60}
                        className={cn(
                          "object-contain transition-all",
                          hwType === id ? "" : "opacity-60"
                        )}
                      />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider">{data.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Hardware Finish Selection */}
            <div className="bg-zinc-900 rounded-2xl border border-white/5 p-6">
              <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-400 font-black mb-6">Finish for {currentHw.name}</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(currentHw.finishes).map(([finish, path]) => (
                  <button
                    key={finish}
                    onClick={() => setHwFinish(finish)}
                    className={cn(
                      "group relative p-4 rounded-xl transition-all duration-200 border-2",
                      hwFinish === finish
                        ? "bg-orange-600/20 border-orange-500"
                        : "bg-white/5 border-transparent hover:bg-white/10 hover:border-white/20"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-full border-2 shadow-lg flex-shrink-0",
                          hwFinish === finish ? "border-orange-500" : "border-white/20"
                        )}
                        style={{ backgroundColor: FINISH_COLORS[finish] || "#666" }}
                      />
                      <div className="text-left">
                        <p className="font-bold text-sm">{FINISH_NAMES[finish] || finish}</p>
                        <p className="text-xs text-zinc-500">Premium finish</p>
                      </div>
                    </div>
                    {/* Preview Image */}
                    <div className="mt-4 h-20 flex items-center justify-center bg-zinc-800/50 rounded-lg">
                      <Image
                        src={`/cabs_clean/${path}`}
                        alt={`${FINISH_NAMES[finish]} ${currentHw.name}`}
                        width={80}
                        height={80}
                        className="object-contain drop-shadow-lg"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Final Summary & CTA */}
          <div className="mt-12 bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl border border-white/10 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">Your Complete Selection</p>
                <div className="flex flex-wrap gap-6">
                  <div>
                    <p className="text-xs text-zinc-500">Cabinet Style</p>
                    <p className="text-lg font-bold">{currentStyle.name}</p>
                  </div>
                  <div className="w-px bg-white/10" />
                  <div>
                    <p className="text-xs text-zinc-500">Color</p>
                    <p className="text-lg font-bold">{currentColor.color}</p>
                  </div>
                  <div className="w-px bg-white/10" />
                  <div>
                    <p className="text-xs text-zinc-500">Hardware</p>
                    <p className="text-lg font-bold">{currentHw.name} · {FINISH_NAMES[hwFinish]}</p>
                  </div>
                </div>
              </div>
              <div>
                <button className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-black rounded-xl transition-all duration-200 shadow-xl shadow-orange-900/30 uppercase tracking-wider text-sm">
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
