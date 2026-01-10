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
      description: "Elegant curved pulls with a timeless silhouette. Perfect for transitional and contemporary kitchens.",
      finishes: {
        rose_gold: { 
          pull: "hardware/arch/Arch_RoseGold.png",
          withDoor: "hardware/arch/Arch_RoseGold_with_tpull.png",
          sizeImages: [
            { size: "Knob: 1 7/16\"", image: "hardware/arch/Arch_RoseGoldSize 1in 7-16 - Edited.png" },
            { size: "Pull: 6\"", image: "hardware/arch/Arch_RoseGold_Size 6 Inches - Edited.png" },
            { size: "Pull: 7 1/8\"", image: "hardware/arch/Arch_RoseGold_-Size 7 1-8in - Edited.png" },
          ]
        },
        satin_nickel: { 
          pull: "hardware/arch/Arch_SatinNickel.png",
          withDoor: "hardware/arch/Arch_SatinNickel_with_tpull.png",
          sizeImages: [
            { size: "Knob: 1 7/16\"", image: "hardware/arch/Arch_SatinNickel-Size 1in 7-16 - Edited.png" },
            { size: "Pull: 6\"", image: "hardware/arch/Arch_SatinNickel_Size 6 Inches - Edited.png" },
            { size: "Pull: 7 1/8\"", image: "hardware/arch/Arch_SatinNickel-Size 7 1-8in - Edited.png" },
          ]
        },
        matte_black: { 
          pull: "hardware/arch/Arch_MatteBlack.png",
          withDoor: "hardware/arch/Arch_MatteBlack_with _tpull.png",
          sizeImages: [
            { size: "Knob: 1 7/16\"", image: "hardware/arch/Arch_MatteBlack_Size 1in 7-16 - Edited.png" },
            { size: "Pull: 6\"", image: "hardware/arch/Arch_MatteBlack_Size 6 Inches - Edited.png" },
            { size: "Pull: 7 1/8\"", image: "hardware/arch/Arch_MatteBlack_Size 7 1-8in - Edited.png" },
          ]
        },
        chrome: { 
          pull: "hardware/arch/arch_chrome.png",
          withDoor: "hardware/arch/arch_chrome_with_tpull.png",
          sizeImages: [
            { size: "Knob: 1 7/16\"", image: "hardware/arch/arch_chrome_Size 1in 7-16.png" },
            { size: "Pull: 6\"", image: "hardware/arch/arch_chrome_6in.png" },
            { size: "Pull: 7 1/8\"", image: "hardware/arch/arch_chrome_7 1-8in.png" },
          ]
        },
      },
    },
    artisan: {
      name: "Artisan",
      description: "Handcrafted-inspired pulls bring warmth and character to your cabinets. Ideal for rustic, farmhouse, or eclectic styles.",
      finishes: {
        rose_gold: { 
          pull: "hardware/artisan/Artisan_RoseGold.png",
          withDoor: "hardware/artisan/Artisan_RoseGold_with_knob.png.png",
          sizeImages: [
            { size: "Knob: 1 7/32\"", image: "hardware/artisan/Artisan_RoseGold_Size1 7-32 Inch Knob - Edited.png" },
            { size: "Pull: 4 3/4\"", image: "hardware/artisan/Artisan_RoseGold_Size4 3-4 Inches - Edited.png" },
            { size: "Pull: 6 1/16\"", image: "hardware/artisan/Artisan_RoseGold_Size6 1-6 Inches - Edited.png" },
          ]
        },
        satin_nickel: { 
          pull: "hardware/artisan/Artisan_SatinNickel.png",
          withDoor: "hardware/artisan/Artisan_SatinNickel_with_knob.png.png",
          sizeImages: [
            { size: "Knob: 1 7/32\"", image: "hardware/artisan/Artisan_SatinNickel_Size1 7-32 Inch Knob .png" },
            { size: "Pull: 4 3/4\"", image: "hardware/artisan/Artisan_SatinNickel_Size4 3-4 Inches .png" },
            { size: "Pull: 6 1/16\"", image: "hardware/artisan/Artisan_SatinNickel_Size6 1-6 Inches.png" },
          ]
        },
        matte_black: { 
          pull: "hardware/artisan/Artisan_MatteBlack.png",
          withDoor: "hardware/artisan/Artisan_MatteBlack_with_knob.png.png",
          sizeImages: [
            { size: "Knob: 1 7/32\"", image: "hardware/artisan/Artisan_MatteBlack_Size1 7-32 Inch Knob - Edited.png" },
            { size: "Pull: 4 3/4\"", image: "hardware/artisan/Artisan_MatteBlack_Size4 3-4 Inches - Edited.png" },
            { size: "Pull: 6 1/16\"", image: "hardware/artisan/Artisan_MatteBlack_Size6 1-6-16 Inches - Edited.png" },
          ]
        },
        chrome: { 
          pull: "hardware/artisan/Artisan_Chrome.png",
          withDoor: "hardware/artisan/Artisan_Chrome_with_tpull.png.png",
          sizeImages: [
            { size: "Knob: 1 7/32\"", image: "hardware/artisan/Artisan_Chrome_Size1 7-32 Inch.png" },
            { size: "Pull: 4 3/4\"", image: "hardware/artisan/Artisan_Chrome_Size4 3-4 Inches.png" },
            { size: "Pull: 6 1/16\"", image: "hardware/artisan/Artisan_Chrome_6 1-16 Inches - Edited.png" },
          ]
        },
      },
    },
    cottage: {
      name: "Cottage",
      description: "Classic cottage-style hardware with soft curves. Brings a cozy, welcoming feel to any kitchen.",
      finishes: {
        rose_gold: { 
          pull: "hardware/cottage/Cottage_RoseGold_.png.png",
          withDoor: "hardware/cottage/Cottage_RoseGold_with_knob.png",
          sizeImages: [
            { size: "Knob", image: "hardware/cottage/Cottage_RoseGold__K.png" },
            { size: "Pull: 96mm", image: "hardware/cottage/Cottage_RoseGold_96 .png" },
            { size: "Pull: 128mm", image: "hardware/cottage/Cottage_RoseGold_128-1.png" },
          ]
        },
        satin_nickel: { 
          pull: "hardware/cottage/Cottage__SatinNickel.png",
          withDoor: "hardware/cottage/Cottage__SatinNickel_with_knob.png",
          sizeImages: [
            { size: "Knob: 1 7/32\"", image: "hardware/cottage/Cottage__SatinNickel_Size1 7-32 Inch Knob .png" },
            { size: "Pull: 4 3/4\"", image: "hardware/cottage/Cottage__SatinNickel_Size4 3-4 Inches .png" },
            { size: "Pull: 6 1/16\"", image: "hardware/cottage/Cottage__SatinNickel_Size6 1-6 Inches .png" },
          ]
        },
        chrome: { 
          pull: "hardware/cottage/Cottage__Chrome.png",
          withDoor: "hardware/cottage/Cottage__Chrome_with_knob.png",
          sizeImages: [
            { size: "Knob: 1 7/32\"", image: "hardware/cottage/Cottage__Chrome_Size1 7-32 Inch Knob .png" },
            { size: "Pull: 4 3/4\"", image: "hardware/cottage/Cottage__Chrome_Size4 3-4 Inches.png" },
            { size: "Pull: 6 1/16\"", image: "hardware/cottage/Cottage__Chrome_Size6 1-6 Inches .png" },
          ]
        },
      },
    },
    loft: {
      name: "Loft",
      description: "Sleek industrial-inspired pulls. The perfect choice for modern and urban kitchen designs.",
      finishes: {
        rose_gold: { 
          pull: "hardware/loft/Loft_RoseGold.png",
          withDoor: "hardware/loft/Loft_RoseGold_with_knob.png",
          sizeImages: [
            { size: "Knob: 15/16\"", image: "hardware/loft/Loft_RoseGold_size 15-16 inch knob .png" },
            { size: "Pull: 4 5/8\"", image: "hardware/loft/Loft_RoseGold_size 4 5-8 inch .png" },
            { size: "Pull: 5 7/8\"", image: "hardware/loft/Loft_RoseGold_size 5 7-8 inch .png" },
          ]
        },
        satin_nickel: { 
          pull: "hardware/loft/Loft_SatinNickel.png",
          withDoor: "hardware/loft/Loft_SatinNickel_with_knob.png",
          sizeImages: [
            { size: "Knob: 15/16\"", image: "hardware/loft/Loft_SatinNickel_size 15-16 inch knob .png" },
            { size: "Pull: 4 5/8\"", image: "hardware/loft/Loft_SatinNickel_size 4 5-8 inch  .png" },
            { size: "Pull: 5 7/8\"", image: "hardware/loft/Loft_SatinNickel_size 5 7-8 inch .png" },
          ]
        },
        matte_black: { 
          pull: "hardware/loft/Loft_MatteBlack.png",
          withDoor: "hardware/loft/Loft_MatteBlack__with_knob.png",
          sizeImages: [
            { size: "Knob: 15/16\"", image: "hardware/loft/Loft_MatteBlack_size 15-16 inch knob .png" },
            { size: "Pull: 4 5/8\"", image: "hardware/loft/Loft_MatteBlack_size 4 5-8 inch .png" },
            { size: "Pull: 5 7/8\"", image: "hardware/loft/Loft_MatteBlack_size 5 7-8 inch .png" },
          ]
        },
        chrome: { 
          pull: "hardware/loft/Loft_Chrome_1.png.png",
          withDoor: "hardware/loft/Loft_Chrome_with_knob.png",
          sizeImages: [
            { size: "Knob: 15/16\"", image: "hardware/loft/Loft_Chrome_size 15-16 inch knob.png" },
            { size: "Pull: 4 5/8\"", image: "hardware/loft/Loft_Chrome_size 4 5-8 inch .png" },
            { size: "Pull: 5 7/8\"", image: "hardware/loft/Loft_Chrome_size 5 7-8 inch .png" },
          ]
        },
      },
    },
    square: {
      name: "Square",
      description: "Bold geometric hardware with clean lines. Makes a statement in contemporary and minimalist kitchens.",
      finishes: {
        rose_gold: { 
          pull: "hardware/square/Square_RoseGold.png",
          withDoor: "hardware/square/Square_RoseGold_with_knob.png",
          sizeImages: [
            { size: "Knob: 15/16\"", image: "hardware/square/Square_RoseGold_Size 15-16 Inch.png" },
            { size: "Pull: 4 1/4\"", image: "hardware/square/Square_RoseGold_Size 4 1-4 Inches .png" },
          ]
        },
        satin_nickel: { 
          pull: "hardware/square/Square_SatinNickel.png",
          withDoor: "hardware/square/Square_SatinNickel__with_knob.png",
          sizeImages: [
            { size: "Knob: 15/16\"", image: "hardware/square/Square_SatinNickel_Size 15-16 Inch .png" },
            { size: "Pull: 4 1/4\"", image: "hardware/square/Square_SatinNickel_Size 4 1-4 Inches .png" },
            { size: "Pull: 5 7/16\"", image: "hardware/square/Square_SatinNickel_Size 5 7-16 Inches.png" },
          ]
        },
        matte_black: { 
          pull: "hardware/square/Square_MatteBlack.png",
          withDoor: "hardware/square/Square_MatteBlack__with_knob.png",
          sizeImages: [
            { size: "Knob: 15/16\"", image: "hardware/square/Square_MatteBlack_Size 15-16 Inch .png" },
            { size: "Pull: 4 1/4\"", image: "hardware/square/Square_MatteBlack_Size 4 1-4 Inches .png" },
            { size: "Pull: 5 7/16\"", image: "hardware/square/Square_MatteBlack_Size 5 7-16 Inches .png" },
          ]
        },
        chrome: { 
          pull: "hardware/square/Square_chrome.png",
          withDoor: "hardware/square/Square_chrome__with_knob.png",
          sizeImages: [
            { size: "Knob: 15/16\"", image: "hardware/square/Square_chrome_Size 15-16 Inch .png" },
            { size: "Pull: 4 1/4\"", image: "hardware/square/Square_chrome_Size 4 1-4 Inches .png" },
            { size: "Pull: 5 7/16\"", image: "hardware/square/Square_chrome_Size 5 7-16 Inches .png" },
          ]
        },
      },
    },
    bar: {
      name: "Bar",
      description: "Classic bar pulls with a timeless appeal. Versatile enough for any kitchen style.",
      finishes: {
        matte_black: { 
          pull: "hardware/bar/Bar-pulls-black .png",
          withDoor: "hardware/bar/Bar-matte-black-tpull.png",
          sizeImages: [
            { size: "Knob: Round", image: "hardware/bar/Bar-Black-Matte-Round-Knob-on-Shaker.png" },
            { size: "Pull: 4.5\"", image: "hardware/bar/Bar-Black-Matte-Pull-4.5-on-Shaker - Edited.png" },
            { size: "Pull: 6\"", image: "hardware/bar/Bar-Black-Matte-Pull-6.0-on-Shaker.png" },
          ]
        },
        satin_nickel: { 
          pull: "hardware/bar/BarPull_SatinNickel.png",
          withDoor: "hardware/bar/BarPull_SatinNickel_with_tpull.png",
          sizeImages: [
            { size: "Knob: Round", image: "hardware/bar/Satin-Nickle-Round-Knob .png" },
            { size: "Pull", image: "hardware/bar/BarPull_SatinNickel_scale.png" },
          ]
        },
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* LEFT: Hardware Style Selection Cards */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-sm uppercase tracking-[0.2em] text-zinc-400 font-black mb-4">Hardware Style</h3>
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                {Object.entries(CONFIG_DATA.hardware).map(([id, data]) => {
                  const isSelected = hwType === id
                  const firstFinishData = Object.values(data.finishes)[0]
                  return (
                    <button
                      key={id}
                      onClick={() => handleHwTypeChange(id)}
                      className={cn(
                        "w-full relative p-4 rounded-xl text-left transition-all duration-200 border-2",
                        isSelected
                          ? "bg-zinc-800 border-orange-500"
                          : "bg-zinc-900/50 border-white/5 hover:border-white/20"
                      )}
                    >
                      <div className="flex items-start gap-4">
                        {/* Hardware Preview Image */}
                        <div className="w-20 h-20 rounded-lg bg-zinc-800/80 flex items-center justify-center flex-shrink-0">
                          <Image
                            src={`/cabs_clean/${firstFinishData.pull}`}
                            alt={data.name}
                            width={60}
                            height={60}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className={cn(
                            "font-bold text-base mb-1",
                            isSelected ? "text-orange-400" : "text-white"
                          )}>
                            {data.name}
                          </h4>
                          <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">{data.description}</p>
                          {/* Finish Swatches */}
                          <div className="flex gap-1.5 mt-3">
                            {Object.entries(data.finishes).map(([finish]) => (
                              <div
                                key={finish}
                                className="w-5 h-5 rounded-full border border-white/20 shadow-sm"
                                style={{ backgroundColor: FINISH_COLORS[finish] || "#666" }}
                                title={FINISH_NAMES[finish]}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* RIGHT: Large Preview + Finish Selection */}
            <div className="lg:col-span-7 space-y-6">
              {/* Large Door with Hardware Preview */}
              <div className="relative aspect-[4/3] bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${hwType}-${hwFinish}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={`/cabs_clean/${currentHw.finishes[hwFinish]?.withDoor || currentHw.finishes[hwFinish]?.pull}`}
                      alt={`${currentHw.name} in ${FINISH_NAMES[hwFinish]}`}
                      fill
                      className="object-contain p-8"
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Hardware Info Badge */}
                <div className="absolute top-4 left-4 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider">{currentHw.name} · {FINISH_NAMES[hwFinish]}</span>
                </div>
              </div>

              {/* Finish Selection Grid */}
              <div className="bg-zinc-900/50 rounded-xl p-4 border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Available Finishes
                  </p>
                  <p className="text-xs text-zinc-500">
                    {Object.keys(currentHw.finishes).length} options
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {Object.entries(currentHw.finishes).map(([finish]) => (
                    <button
                      key={finish}
                      onClick={() => setHwFinish(finish)}
                      className={cn(
                        "group relative p-3 rounded-xl transition-all duration-200 border-2",
                        hwFinish === finish
                          ? "bg-orange-600/20 border-orange-500"
                          : "bg-zinc-800/50 border-transparent hover:bg-zinc-800 hover:border-white/20"
                      )}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div
                          className={cn(
                            "w-10 h-10 rounded-full border-2 shadow-lg",
                            hwFinish === finish ? "border-orange-500 scale-110" : "border-white/20"
                          )}
                          style={{ backgroundColor: FINISH_COLORS[finish] || "#666" }}
                        />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-center">
                          {FINISH_NAMES[finish] || finish}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Available Sizes - Image Gallery */}
              <div className="bg-zinc-800/30 rounded-xl p-4 border border-white/5">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">Available Sizes for {FINISH_NAMES[hwFinish]}</p>
                <div className="grid grid-cols-3 gap-3">
                  {currentHw.finishes[hwFinish]?.sizeImages?.map((sizeItem: { size: string; image: string }, idx: number) => (
                    <div key={idx} className="group relative">
                      <div className="aspect-square bg-zinc-900 rounded-lg overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all">
                        <Image
                          src={`/cabs_clean/${sizeItem.image}`}
                          alt={`${currentHw.name} ${FINISH_NAMES[hwFinish]} - ${sizeItem.size}`}
                          fill
                          className="object-contain p-2 group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <p className="text-[10px] text-center text-zinc-400 mt-2 font-medium">{sizeItem.size}</p>
                    </div>
                  ))}
                </div>
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
