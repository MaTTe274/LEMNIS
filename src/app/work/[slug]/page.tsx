import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function SingleProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="pt-36 pb-32 px-6 sm:px-12 max-w-[1720px] mx-auto">
      {/* Back button */}
      <div className="mb-12">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-muted hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Tutti i Lavori</span>
        </Link>
      </div>

      {/* Case Study Header */}
      <div className="border-b border-white/[0.08] pb-16 mb-20">
        <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-wider text-muted/60 mb-6">
          <span>CLIENTE: <span className="text-white">{project.client}</span></span>
          <span>&bull;</span>
          <span>DISCIPLINA: <span className="text-white">{project.categoryLabel}</span></span>
          <span>&bull;</span>
          <span>ANNO: <span className="text-white">{project.year}</span></span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-light tracking-tight text-white max-w-5xl leading-[0.88] mb-8">
          {project.title}
        </h1>

        <p className="text-xl sm:text-2xl text-white/90 max-w-3xl font-light leading-relaxed">
          {project.subtitle}
        </p>
      </div>

      {/* Hero Full-bleed Image */}
      <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-neutral-900 border border-white/[0.06] mb-28">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          className="object-cover filter contrast-110"
        />
      </div>

      {/* Challenge & Solution Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-white/[0.08] pb-28 mb-28">
        {/* Left: Challenge & Solution */}
        <div className="lg:col-span-7 space-y-16">
          <div>
            <span className="text-xs tracking-wider uppercase text-muted/60 block mb-3">
              La Sfida
            </span>
            <p className="text-xl sm:text-2xl text-white font-light leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div>
            <span className="text-xs tracking-wider uppercase text-muted/60 block mb-3">
              La Soluzione Visiva
            </span>
            <p className="text-base text-muted leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div className="border-t border-white/[0.06] pt-6 space-y-1">
            <span className="text-xs tracking-wider uppercase text-white/70 block">
              Note di Direzione Artistica
            </span>
            <p className="text-xs text-muted leading-relaxed">
              {project.artDirectionNotes}
            </p>
          </div>
        </div>

        {/* Right: Deliverables & Specs */}
        <div className="lg:col-span-5 space-y-12">
          <div>
            <span className="text-xs tracking-wider uppercase text-muted/60 block mb-4">
              Attività Svolte
            </span>
            <ul className="space-y-2.5 text-xs text-white">
              {project.servicesProvided.map((serviceName, idx) => (
                <li
                  key={idx}
                  className="py-1.5 border-b border-white/[0.04] flex items-center justify-between"
                >
                  <span>{serviceName}</span>
                  <span className="text-muted/40">0{idx + 1}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-xs tracking-wider uppercase text-muted/60 block mb-4">
              Dati Tecnici
            </span>
            <div className="space-y-2 text-xs">
              {project.results.map((r, rIdx) => (
                <div
                  key={rIdx}
                  className="py-2 border-b border-white/[0.04] flex items-baseline justify-between"
                >
                  <span className="text-muted/60 uppercase">
                    {r.label}
                  </span>
                  <span className="text-white font-medium">
                    {r.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Showcase with 3 Rich Images */}
      <div className="space-y-10 mb-32">
        <span className="text-xs tracking-wider text-muted/60 uppercase block">
          Asset Visivi
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.gallery.map((imgUrl, gIdx) => (
            <div
              key={gIdx}
              className={`relative rounded-xl overflow-hidden bg-neutral-900 border border-white/[0.06] ${
                gIdx === 0 ? "md:col-span-2 aspect-[21/9]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={imgUrl}
                alt={`${project.title} gallery ${gIdx + 1}`}
                fill
                className="object-cover filter contrast-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Next Project Teaser */}
      <div className="pt-16 border-t border-white/[0.08]">
        <span className="text-xs tracking-wider text-muted/60 uppercase block mb-3">
          Prossimo Progetto &rarr;
        </span>
        <Link
          href={`/work/${nextProject.slug}`}
          className="group block"
        >
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white group-hover:text-muted transition-colors flex items-center justify-between">
            <span>{nextProject.title}</span>
            <ArrowUpRight className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity" />
          </h2>
          <p className="text-xs text-muted/60 uppercase mt-2">
            {nextProject.categoryLabel} &bull; {nextProject.year}
          </p>
        </Link>
      </div>
    </div>
  );
}
