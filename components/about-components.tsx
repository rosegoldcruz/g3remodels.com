"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Wrappers for Scroll Reveals ---
export const FadeIn = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

// --- Hero Text Reveal ---
export const StaggeredText = ({ text, className }: { text: string, className?: string }) => {
  const words = text.split(" ");
  return (
    <motion.h1 className={cn("overflow-hidden flex flex-wrap gap-x-3", className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
          className="block"
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

// --- React Bits 'Tilt' Simulation ---
export const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 1000 }}
      className={cn("relative transition-all duration-200 ease-linear", className)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.div>
  );
};

// --- Magic UI 'Magic Card' Simulation ---
export const MagicCard = ({ title, desc }: { title: string, desc: string }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <div
      className="group relative border border-neutral-200 bg-white p-8 overflow-hidden"
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(0,0,0,0.1), transparent 80%)`,
        }}
      />
      <h3 className="text-xl font-medium mb-2 relative z-10">{title}</h3>
      <p className="text-neutral-500 text-sm relative z-10">{desc}</p>
    </div>
  );
};

// --- Magic UI 'Shimmer Button' Simulation ---
export const ShimmerButton = ({ text }: { text: string }) => (
  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
      {text}
    </span>
  </button>
);

// --- Aceternity 'Directional Hover' Logic ---
export const PortfolioItem = ({ src, title }: { src: string, title: string }) => (
  <motion.div
    className="relative h-[400px] w-full overflow-hidden bg-neutral-100 group cursor-pointer"
    initial="initial"
    whileHover="hover"
  >
    <img src={src} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <motion.div
      variants={{ initial: { opacity: 0 }, hover: { opacity: 1 }}}
      className="absolute inset-0 bg-black/40 flex items-center justify-center"
    >
      <span className="text-white text-lg font-light tracking-widest uppercase">{title}</span>
    </motion.div>
  </motion.div>
);

// --- The Accordion (Motion Primitives Logic) ---
export const AccordionItem = ({ title, answer, isOpen, onClick }: any) => {
  return (
    <div className="border-b border-neutral-300">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="text-lg font-medium tracking-tight text-neutral-900">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Plus className="h-5 w-5 text-neutral-500" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-neutral-600 leading-relaxed max-w-2xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
