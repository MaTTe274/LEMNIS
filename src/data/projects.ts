import { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    slug: "atelier-vanguard",
    title: "Vanguard Studio",
    client: "Vanguard Eyewear",
    category: "foto",
    categoryLabel: "Still-Life & Lookbook",
    year: "2024",
    subtitle: "Shooting fotografico ad alta precisione e gestione della luce per collezione di occhiali in titanio e acetato.",
    heroImage: "/images/eyewear-still-life.jpg",
    gallery: [
      "/images/eyewear-still-life.jpg",
      "/images/romagna-sanctuary.jpg",
      "/images/editorial-fashion-portrait.jpg",
    ],
    challenge:
      "Far risaltare la texture del metallo satinato ed evitare riflessi incontrollati sulle lenti scure, mantenendo uno stile editoriale elegante.",
    solution:
      "Abbiamo costruito un set con fondale nero opaco e pannelli riflettenti a lama di luce, esaltando ogni micro-finitura della montatura.",
    results: [
      { label: "Asset Consegnati", value: "35 Scatti Master" },
      { label: "Destinazione", value: "E-Commerce & Social" },
      { label: "Grading", value: "Color Correction RAW" },
    ],
    servicesProvided: ["Allestimento Set", "Fotografia Full-Frame", "Gestione Riflessi Lenti", "Post-Produzione Dettagli"],
    artDirectionNotes: "Toni freddi, contrasto medio-alto e messa a fuoco selettiva sulle cerniere del titanio.",
  },
  {
    slug: "nocturne-cinematics",
    title: "Nocturne Soundscapes",
    client: "Nocturne Acoustic",
    category: "video",
    categoryLabel: "Brand Video & Audio Mix",
    year: "2024",
    subtitle: "Video promozionale dinamico girato in 4K con montaggio a ritmo musicale e riprese ad alto impatto emotivo.",
    heroImage: "/images/cinema-production.jpg",
    gallery: [
      "/images/cinema-production.jpg",
      "/images/dolomites-seceda.jpg",
      "/images/berlin-musicians.jpg",
    ],
    challenge:
      "Comunicare la sensazione di isolamento acustico e immersione sonora senza poter far ascoltare fisicamente il prodotto prima dell'acquisto.",
    solution:
      "Un montaggio sincopato che alterna riprese ambientali ad alta quota con sequenze ravvicinate a camera lenta e sound design a 32-bit.",
    results: [
      { label: "Formati Video", value: "16:9 + 9:16 Reel" },
      { label: "Risoluzione", value: "4K DCI" },
      { label: "Audio", value: "Sound Design Stereo" },
    ],
    servicesProvided: ["Sceneggiatura Scene", "Riprese con Stabilizzatore", "Montaggio a Ritmo", "Sound Design & Effetti"],
    artDirectionNotes: "Tagli su battuta sonora, contrasti marcati e dominante cromatica scura.",
  },
  {
    slug: "solaris-athletica",
    title: "Gen-Z Apparel",
    client: "Born Fashion Studio",
    category: "social-media",
    categoryLabel: "Curation Feed & Format 9:16",
    year: "2024",
    subtitle: "Shooting editoriale in-studio e pacchetto Reels verticali per il lancio di capsule streetwear contemporanea.",
    heroImage: "/images/hero-campaign.jpg",
    gallery: [
      "/images/hero-campaign.jpg",
      "/images/sunset-paddle.jpg",
      "/images/alpine-peaks.jpg",
    ],
    challenge:
      "Creare un'estetica energica e genuina che parlasse direttamente alla generazione Z senza sembrare pubblicità impostata o finta.",
    solution:
      "Allestimento di un set intimo e spontaneo, alternando primi piani espressivi con scatti di retro-abbigliamento e micro-clip per TikTok e Reels.",
    results: [
      { label: "Frequenza", value: "Pack 12 Reel + 20 Post" },
      { label: "Format", value: "9:16 Verticale + 4:5 Feed" },
      { label: "Feed", value: "Architettura Coordinata" },
    ],
    servicesProvided: ["Direzione sul Set", "Shooting Fotografico", "Montaggio Verticale 9:16", "Copywriting Social"],
    artDirectionNotes: "Luce morbida da interno, spontaneità dei modelli e abbinamento cromatico essenziale bianco/nero.",
  },
  {
    slug: "aethel-botanics",
    title: "No Luck Campaign",
    client: "Hustle Dynamics",
    category: "ads",
    categoryLabel: "Creatività Meta & TikTok Ads",
    year: "2024",
    subtitle: "Campagna pubblicitaria on-the-road con focus su tipografia bold e inquadrature automobilistiche ad alto impatto.",
    heroImage: "/images/streetwear-hustle.jpg",
    gallery: [
      "/images/streetwear-hustle.jpg",
      "/images/founder-studio.jpg",
      "/images/hero-campaign.jpg",
    ],
    challenge:
      "Catturare l'attenzione nei primi 2 secondi di feed scrolling senza ricorrere a ganci urlati o grafiche invasive.",
    solution:
      "Visual forte incentrato su claim serigrafati 'No luck, just Hustle' con inquadrature dall'abitacolo e contrasto volumetrico tra luce e ombra.",
    results: [
      { label: "Varianti Ads", value: "6 Ganci Testati" },
      { label: "Formati", value: "Stories, Reels, Caroselli" },
      { label: "Stile", value: "Editoriale & Dinamico" },
    ],
    servicesProvided: ["Ideazione Concetto Adv", "Shooting in Location", "Editing per Conversioni", "Adattamento Formati"],
    artDirectionNotes: "Luce selettiva sui tessuti, neri profondi degli interni e claim tipografico leggibile a colpo d'occhio.",
  },
  {
    slug: "lumina-ceramics",
    title: "Architectural Symmetry",
    client: "Lumina Spazi & Atelier",
    category: "web-ecommerce",
    categoryLabel: "E-Commerce & Digital Flagship",
    year: "2024",
    subtitle: "Piattaforma digitale sartoriale sviluppata in Next.js per valorizzare geometrie architettoniche e prodotti d'autore.",
    heroImage: "/images/architecture-dome.jpg",
    gallery: [
      "/images/architecture-dome.jpg",
      "/images/romagna-sanctuary.jpg",
      "/images/dolomites-seceda.jpg",
    ],
    challenge:
      "Progettare un'esperienza di navigazione che rispecchiasse la precisione geometrica dell'architettura moderna mantenendo prestazioni fulminee.",
    solution:
      "Interfaccia minimale dark mode con caricamento <0.8s, navigazione fluida senza refresh pesanti e schede tecniche dettagliate.",
    results: [
      { label: "Prestazioni", value: "99/100 Core Web Vitals" },
      { label: "Stack", value: "Next.js + Tailwind + Framer" },
      { label: "Checkout", value: "Apple Pay & Stripe Ready" },
    ],
    servicesProvided: ["UI/UX Minimalista", "Sviluppo Frontend Sartoriale", "Animazioni con Fisica", "Ottimizzazione SEO"],
    artDirectionNotes: "Spazi bianchi calcolati, griglia geometrica rigorosa e tipografia oversize che guida l'occhio.",
  },
];
