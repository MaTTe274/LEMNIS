"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { appleEase } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-36 pb-12 px-6 sm:px-12 max-w-[1720px] mx-auto border-b border-white/[0.08]">
      {/* Top Editorial Line */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: appleEase }}
        className="flex items-center justify-between text-xs tracking-wider uppercase text-muted"
      >
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-white" />
          <span>FORLÌ, ROMAGNA</span>
        </div>
        <span className="hidden sm:inline">STUDIO DI DIREZIONE VISIVA</span>
      </motion.div>

      {/* Main Grid: Headline + Editorial Hero Visual */}
      <div className="my-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Monumental Headline with Staggered Line Reveals */}
        <div className="lg:col-span-8 space-y-6">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, ease: appleEase }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.8vw] font-light leading-[0.9] tracking-tight text-white"
            >
              PRODUZIONE VISIVA.
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.1, ease: appleEase }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.8vw] font-light leading-[0.9] tracking-tight text-muted/60 hover:text-white transition-colors duration-500"
            >
              SENZA COMPROMESSI.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: appleEase }}
            className="text-muted text-base sm:text-lg leading-relaxed max-w-xl pt-4 font-normal"
          >
            Due creativi con base a Forlì. Realizziamo progetti fotografici, produzioni video, architetture social e campagne visive per brand che esigono eleganza e carattere.
          </motion.p>
        </div>

        {/* Right Column: Curated Hero Photograph with Smooth Entrance & Hover Zoom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: appleEase }}
          className="lg:col-span-4"
        >
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-neutral-900 border border-white/[0.08] group">
            <Image
              src="/images/editorial-fashion-portrait.jpg"
              alt="Direzione Visiva &bull; Studio Set"
              fill
              priority
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <span className="text-xs uppercase tracking-wider text-white/90">
                Shooting &bull; Studio Set
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero Bottom Bar — Clean, no duplicated sections bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: appleEase }}
        className="pt-8 border-t border-white/[0.08] flex items-center justify-between text-xs text-muted/60 uppercase tracking-wider"
      >
        <span>Direzione Artistica &bull; Produzione In-House</span>
        <div className="flex items-center gap-2">
          <span>Scorri per esplorare</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
