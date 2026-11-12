import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight, ShieldCheck, Check } from "lucide-react";
import { SERVICES } from "@/data/services";
import { PROJECTS } from "@/data/projects";
import ServiceFaqAccordion from "@/components/services/ServiceFaqAccordion";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default async function SingleServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const serviceIndex = SERVICES.findIndex((s) => s.slug === slug);

  if (serviceIndex === -1) {
    notFound();
  }

  const service = SERVICES[serviceIndex];
  const relatedProjects = PROJECTS.filter((p) => p.category === service.slug);

  // Previous and Next service calculation
  const prevService = SERVICES[(serviceIndex - 1 + SERVICES.length) % SERVICES.length];
  const nextService = SERVICES[(serviceIndex + 1) % SERVICES.length];

  return (
    <div className="pt-36 pb-32 px-6 sm:px-12 max-w-[1720px] mx-auto">
      {/* Back button */}
      <div className="mb-12">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-muted hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Tutte le Discipline</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="border-b border-white/[0.08] pb-16 mb-16">
        <div className="flex items-center gap-3 text-xs tracking-wider text-muted/60 uppercase mb-6">
          <span>{service.idNumber}</span>
          <span>&mdash;</span>
          <span>Aree di Produzione</span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-white max-w-5xl leading-[0.9] mb-8">
          {service.title}
        </h1>

        <p className="text-xl sm:text-2xl text-white/90 max-w-3xl font-light leading-relaxed mb-8">
          {service.tagline}
        </p>

        <p className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
          {service.leadParagraph}
        </p>
      </div>

      {/* Quick Specs Bar — Clean Horizontal Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-b border-white/[0.08] mb-16 text-xs">
        <div>
          <span className="text-muted/60 uppercase tracking-wider block mb-1">Tempistiche</span>
          <span className="text-white font-medium text-sm">{service.deliverablesSpecs.turnaround}</span>
        </div>
        <div>
          <span className="text-muted/60 uppercase tracking-wider block mb-1">Licenza d&apos;Uso</span>
          <span className="text-white font-medium text-sm">{service.deliverablesSpecs.licensing}</span>
        </div>
        <div>
          <span className="text-muted/60 uppercase tracking-wider block mb-1">Revisioni</span>
          <span className="text-white font-medium text-sm">{service.deliverablesSpecs.revisions}</span>
        </div>
        <div>
          <span className="text-muted/60 uppercase tracking-wider block mb-1">Formati Master</span>
          <span className="text-white font-medium text-sm">{service.deliverablesSpecs.formats[0]}</span>
        </div>
      </div>

      {/* Hero Visual Media (21:9) */}
      <div className="relative aspect-[21/9] rounded-xl overflow-hidden bg-neutral-900 border border-white/[0.06] mb-28 group">
        <Image
          src={service.heroMedia.url}
          alt={service.title}
          fill
          priority
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
          <span className="text-xs uppercase tracking-wider text-white/90">
            {service.heroMedia.caption}
          </span>
        </div>
      </div>

      {/* Target & Triggers — Two Clean Editorial Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-white/[0.08] pb-24 mb-24">
        <div className="lg:col-span-6 space-y-6">
          <div className="border-b border-white/[0.08] pb-3">
            <span className="text-xs uppercase tracking-wider text-muted/60 block">A Chi Si Rivolge</span>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white mt-1">
              Brand e Realtà Ideali
            </h2>
          </div>
          <ul className="space-y-3 text-sm">
            {service.target.idealFor.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-white/90">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="border-b border-white/[0.08] pb-3">
            <span className="text-xs uppercase tracking-wider text-muted/60 block">Diagnosi</span>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white mt-1">
              Quando Serve Questo Servizio
            </h2>
          </div>
          <ul className="space-y-3 text-sm">
            {service.target.triggers.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-2 shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Deliverables Section with Specs */}
      <div className="space-y-12 border-b border-white/[0.08] pb-24 mb-24">
        <div>
          <span className="text-xs uppercase tracking-wider text-muted/60 block">Consegne</span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mt-1">
            Cosa Ricevi Concretamente
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {service.deliverables.map((item, idx) => (
            <div key={idx} className="border-t border-white/[0.06] pt-5 space-y-2">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-medium text-white">
                  0{idx + 1}. {item.title}
                </h3>
              </div>
              <p className="text-sm text-muted leading-relaxed font-normal">
                {item.description}
              </p>
              {item.specs && (
                <div className="pt-1 text-xs text-muted/60 tracking-wider uppercase">
                  &rarr; Output: {item.specs}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 4-Step Methodology Timeline */}
      <div className="space-y-12 border-b border-white/[0.08] pb-24 mb-24">
        <div>
          <span className="text-xs uppercase tracking-wider text-muted/60 block">Metodo</span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mt-1">
            Come Lavoriamo &bull; Il Percorso in 4 Fasi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {service.process.map((step) => (
            <div key={step.step} className="border-t border-white/[0.08] pt-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-light text-white/40">{step.step}</span>
                {step.timeline && (
                  <span className="text-xs text-muted/60 uppercase tracking-wider">{step.timeline}</span>
                )}
              </div>
              <span className="text-[10px] text-muted/60 uppercase tracking-widest block">
                {step.phase}
              </span>
              <h3 className="text-base font-medium text-white">{step.title}</h3>
              <p className="text-xs text-muted leading-relaxed font-normal">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Guarantees & Transparency */}
      <div className="space-y-12 border-b border-white/[0.08] pb-24 mb-24">
        <div>
          <span className="text-xs uppercase tracking-wider text-muted/60 block">Garanzie</span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mt-1">
            Standard di Qualità &bull; Zero Ambiguità
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {service.guarantees.map((g, idx) => (
            <div key={idx} className="border-t border-white/[0.06] pt-5 space-y-2">
              <div className="flex items-center gap-2 text-white font-medium text-base">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{g.title}</span>
              </div>
              <p className="text-xs text-muted leading-relaxed font-normal">{g.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs Section */}
      <div className="space-y-10 border-b border-white/[0.08] pb-24 mb-24">
        <div>
          <span className="text-xs uppercase tracking-wider text-muted/60 block">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mt-1">
            Domande Frequenti su {service.title}
          </h2>
        </div>

        <ServiceFaqAccordion faqs={service.faqs} />
      </div>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <div className="mb-28">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-12">
            <span className="text-xs tracking-wider text-muted/60 uppercase">
              Lavori Correlati
            </span>
            <Link
              href="/work"
              className="text-xs uppercase tracking-wider text-muted hover:text-white transition-colors"
            >
              Tutti i Progetti &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {relatedProjects.map((p) => (
              <Link key={p.slug} href={`/work/${p.slug}`} className="group block">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-neutral-900 border border-white/[0.06] mb-4">
                  <Image
                    src={p.heroImage}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110"
                  />
                </div>
                <h3 className="text-xl font-light tracking-tight text-white group-hover:text-muted transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-muted/60 uppercase mt-1">
                  {p.client} &bull; {p.year}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Previous / Next Service Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-12 border-t border-b border-white/[0.08] mb-20 text-sm">
        <Link
          href={`/services/${prevService.slug}`}
          className="group flex items-center gap-3 text-muted hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <div>
            <span className="text-[10px] uppercase tracking-wider text-muted/60 block">Precedente</span>
            <span className="text-white text-base font-light">{prevService.title}</span>
          </div>
        </Link>

        <Link
          href={`/services/${nextService.slug}`}
          className="group flex items-center justify-start sm:justify-end gap-3 text-muted hover:text-white transition-colors text-left sm:text-right"
        >
          <div>
            <span className="text-[10px] uppercase tracking-wider text-muted/60 block">Successivo</span>
            <span className="text-white text-base font-light">{nextService.title}</span>
          </div>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Callout Action */}
      <div className="py-12 text-left">
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-4">
          Vuoi avviare un progetto in {service.title}?
        </h2>
        <p className="text-muted text-base max-w-lg mb-8">
          Parlaci della tua idea. Ti rispondiamo direttamente noi due con una proposta chiara.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white hover:text-muted border-b border-white pb-1 transition-colors"
        >
          <span>Richiedi un confronto</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
