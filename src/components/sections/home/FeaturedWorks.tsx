"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import { appleEase } from "@/lib/animations";

export default function FeaturedWorks() {
  return (
    <section className="py-32 sm:py-40 px-6 sm:px-12 max-w-[1720px] mx-auto border-b border-white/[0.08]">
      <SectionHeading
        index="02"
        tag="SELEZIONE PROGETTI"
        title="Opere recenti. Visione coerente."
        subtitle="Fotografia, video e campagne realizzati per brand indipendenti e realtà contemporanee."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: idx * 0.1, ease: appleEase }}
            className={`group ${idx % 2 === 1 ? "md:translate-y-16" : ""}`}
          >
            <Link href={`/work/${project.slug}`} className="block">
              {/* Clean Image Card with smooth hover zoom */}
              <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-neutral-900 border border-white/[0.06] mb-5">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-108 filter contrast-110"
                />
              </div>

              {/* Minimalist Editorial Info */}
              <div className="flex items-baseline justify-between border-b border-white/[0.06] pb-3 text-sm">
                <div>
                  <h3 className="text-xl sm:text-2xl font-light tracking-tight text-white group-hover:text-neutral-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted mt-0.5">
                    {project.categoryLabel}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted/60">
                  <span>{project.year}</span>
                  <ArrowUpRight className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-32 text-center">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white hover:text-muted transition-colors border-b border-white/30 pb-1 hover:border-white"
        >
          <span>Esplora l&apos;Archivio Completo</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
