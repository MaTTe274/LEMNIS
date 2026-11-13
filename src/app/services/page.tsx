import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  Globe,
  ShoppingBag,
  Sparkles,
  MapPin,
  QrCode,
  ShieldCheck,
  Instagram,
  Camera,
  Mail,
  Palette,
  Languages,
  Bot,
  Wrench,
  Gift,
  Star,
  Film,
  Award,
  Zap,
} from "lucide-react";
import { SERVICES } from "@/data/services";

export const metadata = {
  title: "Tutti i Servizi &bull; LEMNIS Studio",
  description:
    "I pacchetti per siti web, schede Google Maps, menu digitali, social media e gestione tecnica curati da Lemnis Studio a Forlì.",
};

// 1. Core Web Packages (Siti Web)
const WEB_PACKAGES = [
  {
    name: "Start — Vetrina Express",
    badge: "Essenziale & Rapido",
    subtitle: "La presenza online moderna per professionisti e attività locali",
    description:
      "Sito one-page o fino a 3 pagine fluide, progettato su misura con approccio 100% mobile-first per garantire una consultazione immediata da smartphone.",
    features: [
      "Struttura one-page o fino a 3 sezioni/pagine dedicate",
      "Design sartoriale coordinato con il tuo brand",
      "Stesura integrale dei testi e ottimizzazione SEO base",
      "Pulsante WhatsApp rapido galleggiante",
      "Modulo di contatto guidato con invio diretto via email",
      "Mappa Google interattiva e collegamenti a tutti i social",
      "1 round di revisione prima della messa online",
    ],
    idealFor: "Artigiani, liberi professionisti, botteghe e studi che vogliono una presenza curata e veloce.",
    slug: "web-ecommerce",
  },
  {
    name: "Business — Attività Completa",
    badge: "Il Più Scelto",
    subtitle: "L'ecosistema completo per dominare le ricerche locali e convertire",
    description:
      "Sito multi-pagina da 5 a 7 pagine con posizionamento SEO locale specifico per ciascuno dei tuoi servizi chiave e per la tua area geografica.",
    features: [
      "Architettura da 5 a 7 pagine con pagine servizi approfondite",
      "SEO locale avanzata mirata a parole chiave e città della tua zona",
      "Integrazione sistema richieste preventivi o prenotazione appuntamenti",
      "Creazione e ottimizzazione completa della scheda Google Maps",
      "Report mensile sull'andamento delle visite e parole chiave",
      "Design responsive ultra-reattivo con animazioni fluide",
      "2 round di revisione strutturati sul prototipo e pre-lancio",
    ],
    idealFor: "Aziende strutturate, cliniche, saloni, studi associati e realtà che puntano ad acquisire clienti sul territorio.",
    slug: "web-ecommerce",
  },
  {
    name: "Store — E-Commerce",
    badge: "Vendita Online",
    subtitle: "La piattaforma di vendita digitale veloce, sicura e senza frizioni",
    description:
      "Negozio online sartoriale ad alte prestazioni con catalogo prodotti, checkout istantaneo e integrazione con tutti i moderni sistemi di pagamento.",
    features: [
      "Catalogo fino a 30 prodotti caricati e configurati con varianti",
      "Gateway di pagamento: Carte di credito, Apple Pay, Google Pay, PayPal, Satispay e Klarna",
      "Regole di spedizione automatiche e calcolo costi di consegna",
      "Email transazionali di conferma ordine e fatturazione",
      "Video-tutorial personalizzato per gestire catalogo e ordini in autonomia",
      "Sicurezza avanzata e conformità GDPR per il commercio elettronico",
      "2 round di revisione e collaudo carrello pre-lancio",
    ],
    idealFor: "Brand D2C, atelier di moda, cantine, produttori artigianali e negozi che desiderano vendere in tutta Italia.",
    slug: "web-ecommerce",
  },
];

// 2. Pacchetti Apripista
const ENTRY_PACKAGES = [
  {
    title: "Google Maps & Recensioni 5 Stelle",
    badge: "Visibilità Immediata",
    icon: MapPin,
    description:
      "Intervento focalizzato per scalare la visibilità nelle ricerche locali di Google e attrarre clienti fisici che cercano i tuoi servizi nei dintorni.",
    points: [
      "Creazione o ottimizzazione del profilo Google Business Profile",
      "SEO locale per le ricerche geografiche (es. 'nella mia zona')",
      "Caricamento e post-produzione di 15–20 fotografie curate",
      "File grafico QR Code pronto per la stampa per incentivare recensioni a 5 stelle",
    ],
  },
  {
    title: "Menu QR & Listino Digitale",
    badge: "Pratico & Senza PDF",
    icon: QrCode,
    description:
      "Pagina web mobile istantanea per consultare menu e listini da smartphone tramite QR Code, eliminando i lenti file PDF che non si caricano mai.",
    points: [
      "Interfaccia specifica per ristoranti, bar, bistrot, saloni e centri estetici",
      "Organizzazione chiara per categorie, ingredienti e allergeni di legge",
      "Grafica personalizzata del QR Code coordinata con il locale, pronta da stampare",
      "Aggiornamenti illimitati di prezzi, piatti o trattamenti nel tempo",
    ],
  },
];

// 3. Social Media Management
const SOCIAL_PACKAGES = [
  {
    name: "Social Start",
    badge: "Costanza & Cura Visiva",
    icon: Instagram,
    subtitle: "Gestione strategica Instagram e Facebook con collaboratore dedicato P.IVA",
    description:
      "Presenza costante, piano editoriale ragionato e grafiche sartoriali per mantenere i canali social curati, attivi e coerenti con l'immagine aziendale.",
    deliverables: [
      "8 post / caroselli grafici e fotografici mensili",
      "Storie Instagram coordinate per mantenere attivo il profilo",
      "Piano editoriale mensile concordato con anticipo",
      "Copywriting essenziale e orientato al tono del brand",
      "Report mensile sull'interazione e la crescita del pubblico",
    ],
  },
  {
    name: "Social Pro",
    badge: "Video & Campagne Locali",
    icon: Film,
    subtitle: "La formula avanzata con formati video 9:16 e sponsorizzate Meta Ads",
    description:
      "Per attività che vogliono accelerare la crescita con video brevi ad alto impatto e sponsorizzazioni territoriali mirate per generare contatti.",
    deliverables: [
      "12 post mensili ad alta frequenza visiva",
      "4 Reel / video verticali cinematografici a ritmo musicale",
      "Storie settimanali costanti di backstage e interazione",
      "Gestione strategica di 1 campagna sponsorizzata locale Meta Ads (Facebook/Instagram)",
      "Monitoraggio costante di contatti generati e report analitico",
    ],
  },
];

// 4. Servizi Extra & Upsell
const EXTRA_SERVICES = [
  {
    title: "Setup Email Aziendali",
    spec: "info@tuodominio.it",
    icon: Mail,
    desc: "Configurazione professionale delle caselle di posta con dominio proprio su Google Workspace o Zoho Mail, con filtri antispam e configurazione su smartphone.",
  },
  {
    title: "Servizio Fotografico in Loco",
    spec: "Shooting in-house a Forlì e Romagna",
    icon: Camera,
    desc: "Sessione di scatto professionale direttamente presso la tua sede, locale o officina con fotocamere cinema: 20–30 scatti selezionati e post-prodotti per web e social.",
  },
  {
    title: "Logo Restyling & Biglietti da Visita",
    spec: "File vettoriali pronti per la stampa",
    icon: Palette,
    desc: "Modernizzazione del logo esistente, definizione palette colori, font coordinati e grafica per biglietti da visita pronta per la tipografia.",
  },
  {
    title: "Seconda Lingua sul Sito",
    spec: "Inglese o lingua a scelta",
    icon: Languages,
    desc: "Struttura multilingua con selettore dedicato e traduzione dei contenuti per accogliere clienti internazionali e turisti.",
  },
  {
    title: "Assistente & FAQ WhatsApp Automatizzato",
    spec: "Risposte istantanee 24/7",
    icon: Bot,
    desc: "Configurazione di risposte rapide automatiche su WhatsApp per dare orari, listini e risposte alle domande frequenti anche a serranda abbassata.",
  },
  {
    title: "Assistenza & Ore Modifiche Extra",
    spec: "Tariffazione oraria trasparente",
    icon: Wrench,
    desc: "Disponibilità per implementazioni su richiesta fuori contratto: nuove sezioni, landing page promozionali o integrazioni custom.",
  },
];

// 5. Le "Carinerie" (Signature Value-Add)
const SIGNATURE_TOUCHES = [
  {
    number: "01",
    title: "Bozza in Anteprima Gratuita (Pre-vendita)",
    desc: "Non ti chiediamo di immaginare il sito a scatola chiusa: al primo appuntamento ti mostriamo un'anteprima reale della homepage già personalizzata con il tuo logo e le tue foto.",
  },
  {
    number: "02",
    title: "Onboarding Zero Stress & Testi Inclusi",
    desc: "Non devi perdere ore a scrivere testi complessi: compili un questionario guidato da 5 minuti (o lo facciamo insieme a voce) e ci pensiamo noi a scrivere testi persuasivi e professionali.",
  },
  {
    number: "03",
    title: "Video-Tour Personale al Lancio",
    desc: "Appena il sito è online, ti inviamo una breve video-guida registrata da noi di 2 minuti dove ti mostriamo il sito e ti spieghiamo come gestire le richieste in arrivo.",
  },
  {
    number: "04",
    title: "Kit Lancio per i Social Network",
    desc: "Ricevi 2 grafiche coordinate (Post + Storia Instagram con mockup tridimensionale su smartphone) già pronte da pubblicare per annunciare il nuovo sito ai tuoi follower.",
  },
  {
    number: "05",
    title: "Espositore QR per Recensioni da Bancone",
    desc: "Grafica coordinata ed elegante da posizionare sul bancone o alla cassa con link diretto per raccogliere recensioni a 5 stelle su Google in un tocco.",
  },
  {
    number: "06",
    title: "Check-up e Analisi Visite a 30 Giorni",
    desc: "Un mese dopo la pubblicazione, ci sentiamo per verificare l'andamento del sito e ti inviamo il report con le prime visite reali generate da Google.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-36 pb-32 px-6 sm:px-12 max-w-[1720px] mx-auto space-y-36">
      {/* =========================================================================
          HERO & INTRODUZIONE
         ========================================================================= */}
      <div className="pb-16 border-b border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted/70 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>I Servizi di Lemnis Studio &bull; Forlì</span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-light tracking-tight text-white max-w-6xl leading-[0.88] mb-8">
          LE DISCIPLINE &amp; I PACCHETTI.
        </h1>

        <p className="text-muted text-lg sm:text-2xl max-w-3xl leading-relaxed mb-12">
          Dalla presenza web sartoriale alla visibilità su Google Maps, dalla gestione social alla direzione visiva in-house. Tutto spiegato con la massima trasparenza, senza costi nascosti e con una filiera diretta a vent&apos;anni.
        </p>

        {/* Anchor Navigator */}
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wider pt-2">
          <a
            href="#siti-web"
            className="px-4 py-2 rounded-full border border-white/10 hover:border-white text-muted hover:text-white transition-colors"
          >
            Siti Web (Core Business)
          </a>
          <a
            href="#pacchetti-apripista"
            className="px-4 py-2 rounded-full border border-white/10 hover:border-white text-muted hover:text-white transition-colors"
          >
            Pacchetti Apripista
          </a>
          <a
            href="#gestione-tecnica"
            className="px-4 py-2 rounded-full border border-white/10 hover:border-white text-muted hover:text-white transition-colors"
          >
            Gestione Tecnica &amp; GDPR
          </a>
          <a
            href="#social-media"
            className="px-4 py-2 rounded-full border border-white/10 hover:border-white text-muted hover:text-white transition-colors"
          >
            Social Media
          </a>
          <a
            href="#servizi-extra"
            className="px-4 py-2 rounded-full border border-white/10 hover:border-white text-muted hover:text-white transition-colors"
          >
            Servizi Extra
          </a>
          <a
            href="#le-carinerie"
            className="px-4 py-2 rounded-full border border-white/10 hover:border-white text-muted hover:text-white transition-colors"
          >
            Le Attenzioni Incluse
          </a>
        </div>
      </div>

      {/* =========================================================================
          SEZIONE 1: SITI WEB (CORE BUSINESS)
         ========================================================================= */}
      <section id="siti-web" className="space-y-12 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-muted/60 block mb-2 font-mono">
              01 &bull; CORE BUSINESS
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
              Siti Web &amp; E-Commerce Sartoriali
            </h2>
          </div>
          <p className="text-sm text-muted max-w-md leading-relaxed">
            Zero template preconfezionati. Realizziamo piattaforme veloci, pulite e disegnate da zero per rispecchiare il vero valore della tua attività.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {WEB_PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-[#0c0c0c] border border-white/[0.08] flex flex-col justify-between hover:border-white/20 transition-all duration-300 group shadow-xl relative"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-muted/70 font-mono">
                    Pacchetto 0{idx + 1}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-white text-[11px] font-medium tracking-wider uppercase">
                    {pkg.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-white/80 font-light leading-relaxed">
                    {pkg.subtitle}
                  </p>
                </div>

                <p className="text-xs text-muted leading-relaxed">
                  {pkg.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                  <span className="text-[10px] uppercase tracking-wider text-muted/60 block font-medium">
                    Cosa è incluso
                  </span>
                  <div className="space-y-2">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-white/90">
                        <Check className="w-3.5 h-3.5 text-white/60 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/[0.06] space-y-4">
                <p className="text-[11px] text-muted leading-relaxed italic">
                  <strong>Ideale per:</strong> {pkg.idealFor}
                </p>

                <Link
                  href="/contact"
                  className="w-full py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Richiedi Informazioni</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SEZIONE 2: PACCHETTI APRIPISTA
         ========================================================================= */}
      <section id="pacchetti-apripista" className="space-y-12 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-muted/60 block mb-2 font-mono">
              02 &bull; BUDGET ACCESSIBILE
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
              Pacchetti Apripista
            </h2>
          </div>
          <p className="text-sm text-muted max-w-md leading-relaxed">
            Soluzioni ad attivazione rapida per risolvere esigenze puntuali con un impatto visivo e commerciale immediato.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ENTRY_PACKAGES.map((entry, idx) => {
            const Icon = entry.icon;
            return (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-[#0c0c0c] border border-white/[0.08] space-y-6 flex flex-col justify-between hover:border-white/20 transition-all shadow-xl"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/80 text-[11px] uppercase tracking-wider">
                      {entry.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-light text-white">
                    {entry.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {entry.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                    {entry.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-white/90">
                        <Check className="w-3.5 h-3.5 text-white/50 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/[0.06]">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-white hover:text-muted transition-colors border-b border-white/30 pb-1"
                  >
                    <span>Attiva questo pacchetto</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SEZIONE 3: MANUTENZIONE & CANONE RICORRENTE
         ========================================================================= */}
      <section id="gestione-tecnica" className="scroll-mt-28">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-[#0e0e0e] to-[#080808] border border-white/[0.08] shadow-2xl space-y-8">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Inclusa nei Piani Web &bull; Zero Preoccupazioni</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
              Gestione Tecnica, Hosting &amp; Conformità Legale
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Non ti lasciamo un sito da gestire da solo: ci occupiamo noi di tutta la manutenzione continua affinché rimanga sempre veloce, sicuro e protetto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-2">
              <h4 className="text-sm font-medium text-white">Hosting Serverless Rapido</h4>
              <p className="text-xs text-muted leading-relaxed">
                Infrastruttura ultraveloce con CDN globale e certificati SSL di sicurezza sempre attivi.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-2">
              <h4 className="text-sm font-medium text-white">Privacy &amp; Cookie GDPR</h4>
              <p className="text-xs text-muted leading-relaxed">
                Banner di consenso a norma e policy costantemente aggiornate secondo le leggi europee.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-2">
              <h4 className="text-sm font-medium text-white">Backup e Monitoraggio</h4>
              <p className="text-xs text-muted leading-relaxed">
                Salvataggi periodici dei dati e controllo costante del corretto funzionamento h24.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-2">
              <h4 className="text-sm font-medium text-white">Modifiche Mensili Incluse</h4>
              <p className="text-xs text-muted leading-relaxed">
                1–2 piccole variazioni mensili comprese (aggiornamento orari, sostituzione foto, nuovi prezzi).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SEZIONE 4: SOCIAL MEDIA MANAGEMENT
         ========================================================================= */}
      <section id="social-media" className="space-y-12 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-muted/60 block mb-2 font-mono">
              03 &bull; IN PARTNERSHIP CON COLLABORATORE P.IVA
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
              Gestione Social Media
            </h2>
          </div>
          <p className="text-sm text-muted max-w-md leading-relaxed">
            Piani editoriali coerenti con la direzione visiva del tuo marchio, curati con costanza, qualità cinematografica e copy ragionato.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOCIAL_PACKAGES.map((sPkg, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-[#0c0c0c] border border-white/[0.08] flex flex-col justify-between hover:border-white/20 transition-all shadow-xl"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-white/90 font-mono">
                    0{idx + 1} &bull; {sPkg.name}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/80 text-[11px] uppercase tracking-wider">
                    {sPkg.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-light text-white">
                    {sPkg.name}
                  </h3>
                  <p className="text-xs text-white/80 font-light">
                    {sPkg.subtitle}
                  </p>
                </div>

                <p className="text-xs text-muted leading-relaxed">
                  {sPkg.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                  <span className="text-[10px] uppercase tracking-wider text-muted/60 block font-medium">
                    Cosa comprende ogni mese
                  </span>
                  <div className="space-y-2">
                    {sPkg.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-white/90">
                        <Check className="w-3.5 h-3.5 text-white/50 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/[0.06]">
                <Link
                  href="/contact"
                  className="w-full py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Richiedi Piano Social</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SEZIONE 5: SERVIZI EXTRA & UPSELL
         ========================================================================= */}
      <section id="servizi-extra" className="space-y-12 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-muted/60 block mb-2 font-mono">
              04 &bull; MODULI COMPLEMENTARI
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
              Servizi Extra &amp; Upsell
            </h2>
          </div>
          <p className="text-sm text-muted max-w-md leading-relaxed">
            Componi il tuo progetto con elementi aggiuntivi attivabili singolarmente o insieme al pacchetto web principale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXTRA_SERVICES.map((extra, idx) => {
            const Icon = extra.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#0c0c0c] border border-white/[0.07] space-y-4 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-white">
                      {extra.title}
                    </h3>
                    <span className="text-[11px] text-muted/70 block uppercase tracking-wider mt-0.5">
                      {extra.spec}
                    </span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    {extra.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SEZIONE 6: LE "CARINERIE" (SIGNATURE VALUE-ADD)
         ========================================================================= */}
      <section id="le-carinerie" className="space-y-12 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-emerald-400 block mb-2 font-mono flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LO STANDARD LEMNIS &bull; VALORE AGGIUNTO INCLUSO</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
              Le Attenzioni che Fanno la Differenza
            </h2>
          </div>
          <p className="text-sm text-muted max-w-md leading-relaxed">
            Dettagli concreti pensati per rendere il percorso piacevole, azzerare lo stress e darti strumenti reali per partire col piede giusto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SIGNATURE_TOUCHES.map((touch, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-4 hover:border-white/20 transition-all group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-white/50 group-hover:text-emerald-400 transition-colors">
                  {touch.number}
                </span>
                <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-emerald-400 transition-colors" />
              </div>

              <h3 className="text-lg font-medium text-white leading-snug">
                {touch.title}
              </h3>

              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {touch.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          BOTTOM CTA STRIP
         ========================================================================= */}
      <div className="p-10 sm:p-14 rounded-3xl bg-[#0c0c0c] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="space-y-2 max-w-xl">
          <span className="text-xs uppercase tracking-widest text-muted/60 block">
            Pronto a Iniziare?
          </span>
          <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white">
            Raccontaci il tuo progetto in 5 minuti.
          </h2>
          <p className="text-xs sm:text-sm text-muted leading-relaxed">
            Puoi compilare il nostro questionario guidato privato oppure scriverci direttamente su WhatsApp per fissare un incontro a Forlì o in videochiamata.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
          <Link
            href="/onboarding"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black hover:bg-neutral-200 text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <span>Avvia Questionario Guidato</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/[0.04] border border-white/[0.1] hover:border-white text-white text-xs uppercase tracking-wider font-medium transition-colors"
          >
            Contattaci Direttamente
          </Link>
        </div>
      </div>
    </div>
  );
}
