import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/services";

export const metadata = {
  title: "Servizi &bull; LEMNIS",
  description: "Le cinque aree di produzione visiva e sviluppo dello studio Lemnis a Forlì.",
};

export default function ServicesPage() {
  return (
    <div className="pt-36 pb-32 px-6 sm:px-12 max-w-[1720px] mx-auto">
      {/* Page Title */}
      <div className="mb-20 pb-12 border-b border-white/[0.08]">
        <span className="text-xs tracking-wider text-muted/60 uppercase block mb-6">
          Aree di Produzione &bull; Forlì
        </span>
        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-light tracking-tight text-white max-w-5xl leading-[0.88] mb-8">
          CINQUE DISCIPLINE.
        </h1>
        <p className="text-muted text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
          Uniamo direzione visiva, fotografia, video, campagne pubblicitarie e sviluppo web in un ecosistema coordinato, curando ogni progetto direttamente e senza intermediari.
        </p>

        {/* Quick Discipline Anchor Links */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs uppercase tracking-wider pt-2">
          {SERVICES.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="px-4 py-2 rounded-full border border-white/10 hover:border-white text-muted hover:text-white transition-colors"
            >
              {s.idNumber}. {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* Services List — Clean Editorial Layout */}
      <div className="space-y-36">
        {SERVICES.map((service) => (
          <div
            key={service.slug}
            id={service.slug}
            className="pt-16 border-t border-white/[0.08] scroll-mt-28"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Number, Title, Intro, Target */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs text-muted/60 uppercase tracking-wider block">
                  {service.idNumber} &bull; {service.slug.toUpperCase()}
                </span>
                <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
                  {service.title}
                </h2>
                <p className="text-xs text-muted/70 uppercase tracking-wider">
                  {service.tagline}
                </p>
                <p className="text-muted text-base leading-relaxed pt-2">
                  {service.leadParagraph}
                </p>

                {/* Target Pills */}
                <div className="pt-2 space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-muted/60 block">Ideale Per:</span>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {service.target.idealFor.slice(0, 2).map((item, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/80">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="group inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white hover:text-muted border-b border-white/40 pb-1 hover:border-white transition-colors"
                  >
                    <span>Dettagli e Metodologia di {service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Center Column: Clean Deliverables List */}
              <div className="lg:col-span-4 space-y-4">
                <span className="text-xs uppercase tracking-widest text-white/70 block mb-3 font-medium">
                  Cosa Include
                </span>
                <div className="space-y-4">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="border-b border-white/[0.04] pb-4 group hover:border-white/20 transition-colors">
                      <h3 className="text-sm font-medium text-white/95 mb-1">
                        0{idx + 1}. {item.title}
                      </h3>
                      <p className="text-xs text-muted leading-relaxed">
                        {item.description}
                      </p>
                      {item.specs && (
                        <span className="text-[10px] text-muted/60 uppercase tracking-wider block mt-1">
                          Output: {item.specs}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Clean Image & Specs */}
              <div className="lg:col-span-3 space-y-6">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-neutral-900 border border-white/[0.06] group">
                  <Image
                    src={service.heroMedia.url}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                    <span className="text-[11px] uppercase tracking-wider text-white/90">
                      {service.heroMedia.caption}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 border-t border-white/[0.06] pt-3 text-xs">
                  {service.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="flex items-baseline justify-between py-1.5 border-b border-white/[0.02]"
                    >
                      <span className="text-[10px] text-muted uppercase tracking-wider">
                        {m.label}
                      </span>
                      <span className="text-white font-medium">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
