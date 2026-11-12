"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, PanInfo } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { SERVICES } from "@/data/services";

const SHORT_LABELS = ["Web & E-Commerce", "Social", "Fotografia", "Video", "Ads"];

export default function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileTabContainerRef = useRef<HTMLDivElement>(null);
  const mobileTabButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // Auto-scroll the mobile tab bar to keep the active pill in view
  useEffect(() => {
    const activeBtn = mobileTabButtonsRef.current[activeIndex];
    const container = mobileTabContainerRef.current;
    if (activeBtn && container) {
      const containerWidth = container.offsetWidth;
      const btnLeft = activeBtn.offsetLeft;
      const btnWidth = activeBtn.offsetWidth;
      container.scrollTo({
        left: btnLeft - containerWidth / 2 + btnWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  // Desktop Scroll Tracking (Calibrated 420vh pinned container: exactly equal 64vh per service)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Each of the 5 services receives an exact 20% (0.20) slice of the scroll distance
    const clamped = Math.max(0, Math.min(0.9999, latest));
    const index = Math.floor(clamped * SERVICES.length);
    if (index !== activeIndex && index >= 0 && index < SERVICES.length) {
      setActiveIndex(index);
    }
  });

  const activeService = SERVICES[activeIndex];

  const handleTabClick = (idx: number) => {
    setActiveIndex(idx);
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const containerTop = rect.top + scrollTop;
      const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
      // Scroll to the exact dead center of the service's slice
      const targetProgress = (idx + 0.5) / SERVICES.length;
      const targetScroll = containerTop + targetProgress * scrollableDistance;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? SERVICES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === SERVICES.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* =========================================================================
          1. DESKTOP EXPERIENCE (lg:block)
          Equidistant scroll-driven pinning: exactly identical scroll distance per card
         ========================================================================= */}
      <section ref={containerRef} className="hidden lg:block relative h-[420vh] border-b border-white/[0.08]">
        <div className="sticky top-0 h-screen flex flex-col justify-center z-20 w-full max-w-[1720px] mx-auto px-12 pt-20 pb-6">
          {/* Streamlined Minimalist Bar */}
          <div className="flex items-center justify-between gap-4 mb-3.5 shrink-0">
            {/* Left: Minimalist Category Tag */}
            <div className="flex items-center gap-2.5 text-xs tracking-widest uppercase text-muted/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white font-medium">Aree di Produzione</span>
            </div>

            {/* Center: Fast CSS-Accelerated Segmented Tabs */}
            <div className="flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
              {SERVICES.map((s, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={s.slug}
                    onClick={() => handleTabClick(idx)}
                    className={`relative px-4 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all duration-150 focus:outline-none whitespace-nowrap ${
                      isActive
                        ? "text-white font-medium bg-white/[0.12] border border-white/[0.2] shadow-sm"
                        : "text-muted hover:text-white hover:bg-white/[0.04] border border-transparent"
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-1.5 text-[11px]">
                      <span className="text-[10px] text-muted/50">{s.idNumber}</span>
                      <span>{SHORT_LABELS[idx]}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right: Discreet Step Counter */}
            <div className="flex items-center gap-2 text-xs text-muted/60 uppercase tracking-widest text-[11px]">
              <span className="text-white font-normal">{activeService.idNumber}</span>
              <span className="text-white/20">/</span>
              <span>0{SERVICES.length}</span>
            </div>
          </div>

          {/* Desktop Stage Box — Fast solid surface (no heavy backdrop-blur, perfectly locked height) */}
          <div className="relative rounded-3xl bg-[#0c0c0c] border border-white/[0.08] p-7 lg:p-8 overflow-hidden shadow-2xl shrink-0">
            {/* Fluid Continuous Progress Line (Subpixel smooth and GPU-accelerated) */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/[0.06] z-20">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="h-full bg-gradient-to-r from-white/30 via-white to-white origin-left will-change-transform"
              />
            </div>

            {/* Stable Single-Cell CSS Grid: prevents layout shift and vertical jumping */}
            <div className="grid grid-cols-1 grid-rows-1 items-center">
              <AnimatePresence initial={false}>
                <motion.div
                  key={activeService.slug}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="col-start-1 row-start-1 grid grid-cols-12 gap-10 items-center will-change-opacity"
                >
                  {/* Left Column: Clear Text & Deliverables with locked geometry */}
                  <div className="col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-3 text-xs">
                      <span className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white text-[11px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>AREE DI STUDIO &bull; {activeService.idNumber}</span>
                      </span>
                      <span className="text-muted/60 uppercase tracking-wider text-[11px]">
                        Tempistiche: <span className="text-white/90">{activeService.deliverablesSpecs.turnaround}</span>
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-3xl lg:text-4xl font-light tracking-tight text-white leading-[1.05] min-h-[42px] flex items-center">
                        {activeService.title}
                      </h3>
                      <p className="text-sm text-white/80 font-light leading-relaxed max-w-2xl min-h-[38px] flex items-center">
                        {activeService.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-muted leading-relaxed max-w-2xl font-normal line-clamp-2 min-h-[34px]">
                      {activeService.leadParagraph}
                    </p>

                    {/* Deliverables Grid with uniform box heights */}
                    <div className="space-y-1 pt-0.5">
                      <span className="text-[10px] uppercase tracking-wider text-muted/60 block font-medium">
                        Cosa Include
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {activeService.deliverables.map((item, dIdx) => (
                          <div
                            key={dIdx}
                            className="flex items-start gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/15 transition-colors h-[56px]"
                          >
                            <div className="w-3.5 h-3.5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2 h-2 text-white" />
                            </div>
                            <div className="space-y-0.5 min-w-0">
                              <h4 className="text-xs font-medium text-white truncate">
                                {item.title}
                              </h4>
                              <p className="text-[11px] text-muted line-clamp-1">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Strip */}
                    <div className="flex items-center justify-between gap-4 pt-3 border-t border-white/[0.06]">
                      <div className="flex items-center gap-3 text-xs text-muted/70 text-[11px]">
                        <span>Licenza: <strong className="text-white font-normal">Illimitata</strong></span>
                        <span>&bull;</span>
                        <span>Revisioni: <strong className="text-white font-normal">{activeService.deliverablesSpecs.revisions}</strong></span>
                      </div>

                      <Link
                        href={`/services/${activeService.slug}`}
                        className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black hover:bg-neutral-200 text-xs uppercase tracking-wider font-medium transition-colors"
                      >
                        <span>Dettagli e Metodologia</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Visual Stage (GPU-friendly, locked aspect) */}
                  <div className="col-span-5">
                    <div className="relative aspect-[16/11] max-h-[340px] rounded-2xl overflow-hidden bg-neutral-900 border border-white/[0.08] group shadow-xl">
                      <Image
                        src={activeService.heroMedia.url}
                        alt={activeService.title}
                        fill
                        priority
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />

                      <div className="absolute top-3.5 right-3.5 z-10 px-2.5 py-1 rounded-full bg-black/80 border border-white/10 text-[10px] tracking-wider uppercase text-white/90">
                        {activeService.metrics[0]?.value || "Studio Set"}
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-5">
                        <div className="space-y-0.5">
                          <span className="text-[10px] uppercase tracking-wider text-muted/80 block">
                            Produzione In-House &bull; Forlì
                          </span>
                          <p className="text-xs text-white/90 font-light leading-snug">
                            {activeService.heroMedia.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. MOBILE EXPERIENCE (lg:hidden)
          Snappy, hardware-accelerated touch carousel with instant response
         ========================================================================= */}
      <section className="block lg:hidden py-14 px-5 sm:px-8 border-b border-white/[0.08]">
        {/* Mobile Header */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white font-medium">Aree di Produzione</span>
            <span className="text-muted/40">&mdash; Forlì</span>
          </div>
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white">
              Cinque discipline.
            </h2>
            <span className="text-xs text-muted/60 tracking-wider">
              {activeService.idNumber} / 0{SERVICES.length}
            </span>
          </div>
        </div>

        {/* Horizontal Scrollable Tabs */}
        <div
          ref={mobileTabContainerRef}
          className="overflow-x-auto no-scrollbar pb-2 mb-5 -mx-5 px-5 sm:-mx-8 sm:px-8"
        >
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.03] border border-white/[0.08] w-max">
            {SERVICES.map((s, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={s.slug}
                  ref={(el) => {
                    mobileTabButtonsRef.current[idx] = el;
                  }}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all duration-150 whitespace-nowrap focus:outline-none ${
                    isActive
                      ? "text-white font-medium bg-white/[0.14] border border-white/[0.22]"
                      : "text-muted hover:text-white border border-transparent"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1.5 text-[11px]">
                    <span className="text-[10px] text-muted/50">{s.idNumber}</span>
                    <span>{SHORT_LABELS[idx]}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Interactive Card Stage with Fast Gesture */}
        <div className="relative rounded-2xl bg-[#0d0d0d] border border-white/[0.08] p-5 shadow-xl overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={activeService.slug}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_e, info: PanInfo) => {
                const swipeThreshold = 35;
                if (info.offset.x < -swipeThreshold) {
                  handleNext();
                } else if (info.offset.x > swipeThreshold) {
                  handlePrev();
                }
              }}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
              className="space-y-4 touch-pan-y will-change-[transform,opacity]"
            >
              {/* Image Preview with Badges */}
              <Link
                href={`/services/${activeService.slug}`}
                className="block relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-neutral-900 border border-white/[0.06] group"
              >
                <Image
                  src={activeService.heroMedia.url}
                  alt={activeService.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-black/80 border border-white/10 text-[9px] uppercase tracking-wider text-white">
                  {activeService.metrics[0]?.value || "Studio Set"}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-3.5">
                  <span className="text-[11px] text-white/90 font-light line-clamp-1">
                    {activeService.heroMedia.caption}
                  </span>
                </div>
              </Link>

              {/* Title & Tagline */}
              <div className="space-y-1 pt-0.5">
                <div className="flex items-center justify-between text-[10px] text-muted/60 uppercase tracking-wider">
                  <span>DISCIPLINA {activeService.idNumber}</span>
                  <span className="text-white/80 font-normal">
                    {activeService.deliverablesSpecs.turnaround}
                  </span>
                </div>
                <h3 className="text-2xl font-light tracking-tight text-white leading-tight">
                  {activeService.title}
                </h3>
                <p className="text-xs text-white/80 font-light leading-relaxed">
                  {activeService.tagline}
                </p>
              </div>

              {/* Deliverables Grid (All 4 Items in 2x2 Grid) */}
              <div className="space-y-2 pt-1">
                <span className="text-[10px] uppercase tracking-wider text-muted/60 block font-medium">
                  Cosa Include
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {activeService.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-2.5 rounded-xl bg-white/[0.025] border border-white/[0.06] flex items-start gap-2"
                    >
                      <div className="w-3.5 h-3.5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2 h-2 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-[11px] font-medium text-white truncate leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-[10px] text-muted line-clamp-1 mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specs Strip */}
              <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.04] text-[10px] text-muted/70">
                <span>Licenza: <strong className="text-white font-normal">Illimitata</strong></span>
                <span>&bull;</span>
                <span>Revisioni: <strong className="text-white font-normal">{activeService.deliverablesSpecs.revisions}</strong></span>
              </div>

              {/* CTA Action Button */}
              <div className="pt-1">
                <Link
                  href={`/services/${activeService.slug}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-white text-black text-xs uppercase tracking-wider font-medium hover:bg-neutral-200 transition-colors shadow-lg shadow-white/5"
                >
                  <span>Dettagli e Metodologia</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Stepper Controls & Dots */}
          <div className="flex items-center justify-between pt-4 mt-3 border-t border-white/[0.06] text-xs">
            <button
              onClick={handlePrev}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-muted hover:text-white uppercase tracking-wider text-[11px] hover:bg-white/[0.05] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Prec.</span>
            </button>

            {/* Position Dots */}
            <div className="flex items-center gap-1.5">
              {SERVICES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Vai al servizio ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    activeIndex === idx ? "bg-white w-5" : "bg-white/20 w-1.5"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-muted hover:text-white uppercase tracking-wider text-[11px] hover:bg-white/[0.05] transition-colors"
            >
              <span>Succ.</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Discreet Swipe Hint */}
          <div className="text-center pt-2">
            <span className="text-[9px] uppercase tracking-widest text-muted/40">
              Scorri orizzontalmente per cambiare disciplina
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
