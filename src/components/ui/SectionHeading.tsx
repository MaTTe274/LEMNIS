"use client";

import { motion } from "framer-motion";
import { appleEase } from "@/lib/animations";

interface SectionHeadingProps {
  index: string;
  tag: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  index,
  tag,
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`w-full mb-16 md:mb-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: appleEase }}
        className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-8"
      >
        <div className="flex items-center space-x-3 text-xs tracking-wider uppercase text-muted">
          <span className="text-white font-medium">{index}</span>
          <span>&mdash;</span>
          <span>{tag}</span>
        </div>
        <div className="text-xs tracking-wider uppercase text-muted/60 hidden sm:block">
          LEMNIS STUDIO
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.85, ease: appleEase }}
          className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight col-span-1 lg:col-span-8 text-foreground"
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.85, delay: 0.1, ease: appleEase }}
            className="text-muted text-base sm:text-lg leading-relaxed col-span-1 lg:col-span-4"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
