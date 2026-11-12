"use client";

import { motion } from "framer-motion";
import { AGENCY } from "@/data/agency";
import { appleEase } from "@/lib/animations";

export default function MetricsStrip() {
  return (
    <section className="py-28 sm:py-36 px-6 sm:px-12 max-w-[1720px] mx-auto border-b border-white/[0.08]">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-14">
        <span className="text-xs tracking-wider text-muted/60 uppercase">
          Standard Operativi
        </span>
        <span className="text-xs tracking-wider text-muted/60 uppercase hidden sm:block">
          Forlì &bull; Esecuzione Diretta
        </span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16">
        {AGENCY.metrics.map((m, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: appleEase }}
            className="space-y-2"
          >
            <div className="text-4xl sm:text-6xl font-light text-white tracking-tight">
              {m.value}
            </div>
            <div className="text-xs text-muted/70 uppercase tracking-wider">
              {m.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
