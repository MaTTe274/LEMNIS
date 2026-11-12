import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AGENCY } from "@/data/agency";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Chi Siamo • LEMNIS | Studio di Direzione Visiva & Nuove Tecnologie",
  description:
    "Due creativi di vent'anni a Forlì: direzione visiva, produzioni cinema e foto, sviluppo web moderno e modelli AI di frontiera per brand contemporanei.",
};

export default function AboutPage() {
  const studioMoments = [
    {
      url: "/images/founder-studio.jpg",
      caption: "01 / STUDIO • Direzione visiva, prototipazione e codice su misura",
    },
    {
      url: "/images/hero-campaign.jpg",
      caption: "02 / SET • Fotografia still-life, lookbook e luce controllata",
    },
    {
      url: "/images/streetwear-hustle.jpg",
      caption: "03 / PRODUZIONE • Cinema RAW, modelli AI generativi e montaggio",
    },
  ];

  const disciplines = [
    {
      number: "01",
      name: "Siti Web & E-Commerce",
      description:
        "Architetture digitali custom su Next.js, interfacce d'autore, massima fluidità e ottimizzazione rigorosa per la conversione.",
      href: "/services/web-ecommerce",
    },
    {
      number: "02",
      name: "Fotografia & Still-Life",
      description:
        "Immagini ad alto contrasto e luce scolpita per collezioni moda, cataloghi di design, ristorazione d'autore e manifattura.",
      href: "/services/foto",
    },
    {
      number: "03",
      name: "Video & Cinema",
      description:
        "Spot commerciali, fashion film, reel e documentari d'impresa girati in 4K/6K RAW con color grading DaVinci Resolve.",
      href: "/services/video",
    },
    {
      number: "04",
      name: "Social Media & Content",
      description:
        "Piani editoriali e formati video verticali che intercettano i codici della cultura contemporanea senza sembrare pubblicità.",
      href: "/services/social-media",
    },
    {
      number: "05",
      name: "Creatività per Ads & Paid Social",
      description:
        "Asset visivi ad alte prestazioni per Meta, TikTok e canali paid, combinando riprese reali e modelli AI di ultima generazione.",
      href: "/services/ads",
    },
  ];

  return (
    <div className="pt-36 pb-32 px-6 sm:px-12 max-w-[1720px] mx-auto">
      {/* Editorial Hero */}
      <div className="mb-24 pb-16 border-b border-white/[0.08]">
        <span className="text-xs tracking-wider text-muted/60 uppercase block mb-6">
          Identità &bull; Studio Indipendente &bull; Forlì, Romagna
        </span>
        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-light tracking-tight text-white max-w-6xl leading-[0.88] mb-8">
          DUE CREATIVI DI VENT&apos;ANNI. <br className="hidden sm:inline" />
          FILIERA DIRETTA.
        </h1>
        <p className="text-muted text-lg sm:text-2xl max-w-4xl font-light leading-relaxed">
          Siamo due creativi con base a Forlì. Abbiamo fondato LEMNIS per superare il modello delle agenzie lente e burocratiche: uniamo direzione visiva contemporanea, produzioni cinema e foto, sviluppo web moderno e padronanza dei modelli AI di frontiera. Nessun account manager o intermediario: dialoghi sempre e solo con chi pensa, scatta, programma e monta ogni singolo progetto.
        </p>
      </div>

      {/* Visual Photo Showcase: 3 Curated Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {studioMoments.map((item, idx) => (
          <div key={idx} className="space-y-3 group">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-neutral-900 border border-white/[0.06]">
              <Image
                src={item.url}
                alt={item.caption}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-110"
              />
            </div>
            <p className="text-xs text-muted/70 uppercase tracking-wider">
              {item.caption}
            </p>
          </div>
        ))}
      </div>

      {/* The Lemnis Advantage: 3 Concrete Value Pillars */}
      <div className="mb-32">
        <SectionHeading
          index="01"
          tag="VANTAGGIO STRATEGICO"
          title="Perché scegliere Lemnis."
          subtitle="Cosa cambia realmente per un brand quando elimina la burocrazia di agenzia."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-4 border-t border-white/[0.08]">
          <div className="space-y-4">
            <span className="text-xs text-muted/60 block uppercase tracking-wider">
              01 &bull; Frontiera Tecnologica &amp; AI
            </span>
            <h3 className="text-2xl font-light tracking-tight text-white">
              Sempre al passo coi tempi.
            </h3>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Siamo costantemente aggiornati sui modelli di intelligenza artificiale generativa, automazione visiva e sviluppo web moderno. Non usiamo l&apos;AI per generare contenuti dozzinali: la utilizziamo come moltiplicatore creativo e acceleratore di flussi di lavoro, offrendo ai brand soluzioni d&apos;avanguardia che le agenzie tradizionali impiegano mesi solo a pianificare.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-xs text-muted/60 block uppercase tracking-wider">
              02 &bull; Filiera Corta 100% In-House
            </span>
            <h3 className="text-2xl font-light tracking-tight text-white">
              Zero intermediari, zero filtri.
            </h3>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Nessun commerciale, account manager o passaggio a vuoto in cui la visione iniziale si disperde. Il cliente lavora direttamente con noi due: chi imposta le luci sul set o scrive la sceneggiatura è la stessa persona che monta il master, colora il girato e programma l&apos;architettura web.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-xs text-muted/60 block uppercase tracking-wider">
              03 &bull; Istinto Generazionale &amp; Concretezza
            </span>
            <h3 className="text-2xl font-light tracking-tight text-white">
              I linguaggi di oggi, sul serio.
            </h3>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              A vent&apos;anni i linguaggi digitali contemporanei sono la nostra lingua madre, non un capitolo teorico di un manuale. A questa velocità visiva uniamo il pragmatismo e l&apos;etica del lavoro della nostra terra: risposte garantite entro 24 ore, rispetto assoluto delle consegne e cura maniacale per ogni frame.
            </p>
          </div>
        </div>
      </div>

      {/* Cinematic Location Banner — Real High-Res Photography */}
      <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-neutral-900 border border-white/[0.08] mb-32 group">
        <Image
          src="/images/dolomites-seceda.jpg"
          alt="Produzione Visiva in Esterna"
          fill
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end p-8 sm:p-12">
          <div className="space-y-2 max-w-3xl">
            <span className="text-[11px] uppercase tracking-wider text-muted/80 block">
              Produzione in Esterna &bull; Seceda Altitude
            </span>
            <span className="text-white text-lg sm:text-2xl lg:text-3xl font-light tracking-tight leading-snug block">
              Dalle colline della Romagna ai teatri di posa e alle vette alpine: nessuna scenografia finta. Solo luce autentica, materia reale e rigore formale.
            </span>
          </div>
        </div>
      </div>

      {/* 5 Integrated Disciplines — Clear Scope of Work */}
      <div className="mb-32">
        <SectionHeading
          index="02"
          tag="DISCIPLINE"
          title="Cinque ambiti. Una sola firma visiva."
          subtitle="Tutto ciò che serve al brand per dominare la scena digitale e visiva."
        />

        <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
          {disciplines.map((d) => (
            <Link
              key={d.number}
              href={d.href}
              className="py-8 group flex flex-col md:flex-row md:items-baseline justify-between gap-6 hover:bg-white/[0.02] px-2 sm:px-4 -mx-2 sm:-mx-4 transition-colors rounded-lg"
            >
              <div className="flex items-baseline gap-6 md:w-1/3">
                <span className="text-xs text-muted/50 font-mono">{d.number}</span>
                <h3 className="text-xl sm:text-2xl font-light text-white group-hover:text-muted transition-colors flex items-center gap-2">
                  <span>{d.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </div>
              <p className="text-muted text-sm sm:text-base leading-relaxed md:w-2/3 max-w-2xl font-light">
                {d.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* 4 Core Principles — Clean Grid */}
      <div className="mb-32">
        <SectionHeading
          index="03"
          tag="APPROCCIO"
          title="Quattro principi. Nessuna eccezione."
          subtitle="Il nostro codice operativo con ogni cliente e progetto."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          {AGENCY.principles.map((p) => (
            <div key={p.number} className="space-y-3 border-t border-white/[0.06] pt-6">
              <span className="text-sm text-muted/60 font-mono">
                {p.number}
              </span>
              <h3 className="text-2xl font-light tracking-tight text-white">
                {p.title}
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed font-light">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Manifesto Section */}
      <div className="py-20 border-t border-b border-white/[0.08] mb-32">
        <span className="text-xs tracking-wider text-muted/60 uppercase block mb-12">
          Manifesto &bull; Standard Non Negoziabili
        </span>
        <div className="space-y-8 max-w-4xl">
          {AGENCY.manifesto.map((line, idx) => (
            <div
              key={idx}
              className="flex items-baseline gap-6 pb-6 border-b border-white/[0.04] last:border-0"
            >
              <span className="text-xs text-muted/50 font-mono">
                0{idx + 1}
              </span>
              <p className="text-xl sm:text-3xl font-light tracking-tight text-white/90 leading-snug">
                {line}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Studio Setup & Infrastructure */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24 border-b border-white/[0.08] pb-24">
        <div className="lg:col-span-6 space-y-4">
          <span className="text-xs uppercase tracking-widest text-white block">
            Base Operativa &bull; Forlì &amp; Territorio
          </span>
          <p className="text-muted leading-relaxed text-sm sm:text-base font-light">
            Operiamo dal nostro studio a Forlì, muovendoci regolarmente in tutta la Romagna, a Bologna, Milano e ovunque ci sia una visione da realizzare. Lavoriamo sia sul set di persona che da remoto con committenti in tutta Italia, garantendo reperibilità continua e aggiornamenti trasparenti.
          </p>
        </div>

        <div className="lg:col-span-6 space-y-4">
          <span className="text-xs uppercase tracking-widest text-white block">
            Dotazione Tecnica &amp; Stack Digitale
          </span>
          <p className="text-muted leading-relaxed text-sm sm:text-base font-light">
            Sensori Full-Frame RAW, camere cinema 4K/6K, stabilizzatori a 3 assi, luci continue per moda e still-life, suite DaVinci Resolve Studio calibrata, modelli AI generativi multimodali di frontiera e sviluppo web Next.js su infrastrutture cloud ad altissime prestazioni.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 py-8">
        <div>
          <span className="text-xs tracking-wider text-muted/60 uppercase block mb-2">
            Prossimo Passo
          </span>
          <p className="text-xl sm:text-2xl font-light text-white">
            Hai un progetto in mente? Parliamone direttamente.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white hover:text-muted border-b border-white pb-1 transition-colors"
        >
          <span>Inizia una Conversazione</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
