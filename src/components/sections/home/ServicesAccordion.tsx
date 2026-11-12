"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, Minus, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import { appleEase } from "@/lib/animations";

export default function ServicesAccordion() {
  const [activeSlug, setActiveSlug] = useState<string | null>("social-media");

  return (
    <section className="py-32 sm:py-44 px-6 sm:px-12 max-w-[1720px] mx-auto border-b border-white/[0.08]">
      <SectionHeading
        index="01"
        tag="I NOSTRI SERVIZI"
        title="Cinque aree di produzione. Cura sartoriale."
        subtitle="Uniamo direzione visiva, produzione foto e video, campagne pubblicitarie e sviluppo web in un flusso continuo e coordinato."
      />

      <div className="border-t border-white/[0.08]">
        {SERVICES.map((service, index) => {
          const isOpen = activeSlug === service.slug;

          return (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: appleEase }}
              className="border-b border-white/[0.08] transition-colors"
            >
              {/* Header Row — Minimalist, fluid typography */}
              <button
                onClick={() => setActiveSlug(isOpen ? null : service.slug)}
                className="w-full py-8 sm:py-12 flex items-center justify-between text-left group focus:outline-none"
              >
                <div className="flex items-baseline gap-6 sm:gap-12">
                  <span className="text-xs sm:text-sm text-muted/50 group-hover:text-white transition-colors">
                    {service.idNumber}
                  </span>
                  <h3 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white group-hover:translate-x-2 transition-transform duration-300">
                    {service.title}
                  </h3>
                </div>

                <div className="flex items-center gap-6">
                  <span className="hidden md:inline text-xs text-muted/60">
                    {service.tagline}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3, ease: appleEase }}
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-muted group-hover:text-white group-hover:border-white transition-colors"
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </motion.div>
                </div>
              </button>

              {/* Clean Expandable Area with Rich Animations */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: appleEase }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 pt-4">
                      {/* Left: Clear & Precise Paragraph + Deliverables List */}
                      <div className="lg:col-span-7 space-y-10">
                        <motion.p
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1, ease: appleEase }}
                          className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl font-normal"
                        >
                          {service.leadParagraph}
                        </motion.p>

                        {/* Deliverables with clear, precise copy */}
                        <div className="space-y-4 pt-2">
                          <span className="text-xs tracking-widest text-white/80 block uppercase font-medium">
                            Cosa Include &bull; Deliverables
                          </span>
                          <div className="space-y-4">
                            {service.deliverables.map((item, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.15 + idx * 0.06 }}
                                className="py-3 border-b border-white/[0.04] flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-sm"
                              >
                                <span className="font-medium text-white/95 flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                  <span>0{idx + 1}. {item.title}</span>
                                </span>
                                <span className="text-xs text-muted sm:max-w-sm text-left sm:text-right font-normal">
                                  {item.description}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Direct Link to Single Service Page */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="pt-4"
                        >
                          <Link
                            href={`/services/${service.slug}`}
                            className="group inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white hover:text-muted transition-colors border-b border-white/40 pb-1 hover:border-white"
                          >
                            <span>Scopri il Processo e i Dettagli di {service.title}</span>
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </Link>
                        </motion.div>
                      </div>

                      {/* Right: Clean Image with smooth zoom and real metrics */}
                      <div className="lg:col-span-5 space-y-6">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.15, ease: appleEase }}
                          className="relative aspect-[16/10] rounded-xl overflow-hidden bg-neutral-900 border border-white/[0.08] group"
                        >
                          <Image
                            src={service.heroMedia.url}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter contrast-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                            <span className="text-xs uppercase tracking-wider text-white/90">
                              {service.heroMedia.caption}
                            </span>
                          </div>
                        </motion.div>

                        {/* Three Key Specifications */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.25 }}
                          className="grid grid-cols-3 gap-6 pt-3 border-t border-white/[0.06] text-xs"
                        >
                          {service.metrics.map((m, mIdx) => (
                            <div key={mIdx}>
                              <div className="text-white font-medium mb-0.5 text-sm">
                                {m.value}
                              </div>
                              <div className="text-[10px] text-muted uppercase tracking-wider">
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
