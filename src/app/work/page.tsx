"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";

const FILTERS = [
  { id: "all", label: "Tutti" },
  { id: "social-media", label: "Social Media" },
  { id: "foto", label: "Foto" },
  { id: "video", label: "Video" },
  { id: "ads", label: "Ads" },
  { id: "web-ecommerce", label: "Siti & E-Commerce" },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-36 pb-32 px-6 sm:px-12 max-w-[1720px] mx-auto">
      {/* Title */}
      <div className="mb-20 pb-12 border-b border-white/[0.08]">
        <span className="text-xs tracking-wider text-muted/60 uppercase block mb-6">
          Archivio Progetti
        </span>
        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-light tracking-tight text-white max-w-5xl leading-[0.88] mb-8">
          PRODUZIONI.
        </h1>
        <p className="text-muted text-lg sm:text-xl max-w-2xl leading-relaxed">
          Una raccolta di produzioni fotografiche, video, feed curation e creatività per campagne.
        </p>

        {/* Minimal Text Filter Tags */}
        <div className="flex flex-wrap gap-6 sm:gap-8 pt-10 text-xs uppercase tracking-wider">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`transition-colors pb-1 border-b ${
                activeFilter === f.id
                  ? "text-white border-white font-medium"
                  : "text-muted/60 border-transparent hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid — Minimalist and uncluttered */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
        {filteredProjects.map((project, idx) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group block"
          >
            <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-neutral-900 border border-white/[0.06] mb-5">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-110"
              />
            </div>

            <div className="flex items-baseline justify-between border-b border-white/[0.06] pb-3">
              <div>
                <h3 className="text-xl sm:text-2xl font-light tracking-tight text-white group-hover:text-muted transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-muted mt-0.5">
                  {project.categoryLabel} &bull; {project.year}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted/60">
                <span>0{idx + 1}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            <p className="text-muted text-sm mt-2.5 line-clamp-2">
              {project.subtitle}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
