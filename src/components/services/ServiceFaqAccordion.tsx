"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { ServiceFAQ } from "@/types/service";
import { appleEase } from "@/lib/animations";

interface Props {
  faqs: ServiceFAQ[];
}

export default function ServiceFaqAccordion({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-white/[0.08]">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-white/[0.08]">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full py-6 sm:py-8 flex items-center justify-between text-left group focus:outline-none"
            >
              <span className="text-lg sm:text-xl font-light text-white group-hover:text-neutral-300 transition-colors pr-6">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3, ease: appleEase }}
                className="w-8 h-8 shrink-0 rounded-full border border-white/10 flex items-center justify-center text-muted group-hover:text-white group-hover:border-white transition-colors"
              >
                {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
              </motion.div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: appleEase }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 text-muted text-sm sm:text-base leading-relaxed max-w-3xl font-normal">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

