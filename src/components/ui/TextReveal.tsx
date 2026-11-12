"use client";

import { motion } from "framer-motion";
import { textMaskReveal } from "@/lib/animations";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
}: TextRevealProps) {
  const lines = children.split("\n");

  return (
    <div className={`overflow-hidden ${className}`}>
      {lines.map((line, idx) => (
        <div key={idx} className="overflow-hidden">
          <motion.div
            custom={delay + idx * 0.15}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textMaskReveal}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

