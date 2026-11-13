import { ServiceDetail } from "@/types/service";

export const SERVICES: ServiceDetail[] = [
  // --------------------------------------------------------------------------
  // 01. SITI WEB & E-COMMERCE
  // --------------------------------------------------------------------------
  {
    slug: "web-ecommerce",
    idNumber: "01",
    title: "Siti Web & E-Commerce",
    tagline: "Design su misura, caricamento istantaneo, zero template anonimi.",
    leadParagraph:
      "Progettiamo e sviluppiamo siti web ed e-commerce sartoriali, curati sia nell'estetica tipografica che nelle prestazioni tecniche pure. Niente temi commerciali lenti o plugin ingombranti: costruiamo esperienze digitali d'avanguardia con Next.js, React e Shopify. Piattaforme che si aprono in meno di un secondo, micro-animazioni fluide e percorsi d'acquisto studiati per convertire visitatori in clienti fidelizzati.",
    target: {
      idealFor: [
        "Brand indipendenti e atelier che vogliono emergere rispetto alla mediocrità dei competitor",
        "E-Commerce D2C che desiderano scalare con un checkout rapido e senza frizioni",
        "Studi di architettura, design e professionisti che necessitano di un archivio portfolio d'autore",
        "Realtà manifatturiere ad alto valore aggiunto che vogliono comunicare la propria autorevolezza",
      ],
      triggers: [
        "Il sito attuale impiega più di 3 secondi a caricarsi e perde potenziali clienti prima ancora che vedano la pagina.",
        "Il sito è stato creato con un tema preconfezionato: appare identico a mille altri e non riflette la qualità del prodotto.",
        "La navigazione da smartphone è scomoda, con menu pesanti e layout che si rompono sui display moderni.",
        "Ogni piccola modifica a testi o prodotti richiede tempo infinito o interventi a pagamento di tecnici esterni.",
      ],
    },
    deliverables: [
      {
        title: "Start — Vetrina Express",
        description:
          "Sito one-page o fino a 3 pagine, mobile-first, testi SEO inclusi, pulsante WhatsApp, form contatti, mappa Google, link social e 1 revisione.",
        specs: "Sito essenziale ad attivazione rapida per professionisti e botteghe",
      },
      {
        title: "Business — Attività Completa",
        description:
          "5–7 pagine, SEO locale per singoli servizi, integrazione prenotazioni/preventivi, ottimizzazione Google Maps inclusa, report visite e 2 revisioni.",
        specs: "L'architettura multi-pagina più scelta per attrarre clienti sul territorio",
      },
      {
        title: "Store — E-Commerce Sartoriale",
        description:
          "Negozio online fino a 30 prodotti caricati, pagamenti (carte, PayPal, Apple Pay, Satispay, Klarna), spedizioni, email automatiche e video-tutorial.",
        specs: "Piattaforma di vendita diretta ad alte prestazioni senza frizioni",
      },
      {
        title: "Gestione Tecnica & Conformità Legale",
        description:
          "Hosting veloce, dominio, certificato SSL, backup regolari, licenza Privacy/Cookie Policy (GDPR) e 1–2 piccole modifiche mensili incluse.",
        specs: "Canone di manutenzione continua per zero pensieri tecnici",
      },
    ],
    deliverablesSpecs: {
      formats: ["Codice Sorgente TypeScript / Next.js / Tailwind", "Shopify Theme Files", "Figma File Master"],
      licensing: "Proprietà totale del codice sorgente e del repository Git, zero costi di licenza proprietaria",
      turnaround: "3-4 settimane per landing page o portfolio d'autore; 6-8 settimane per piattaforme e-commerce complesse",
      revisions: "2 round sul prototipo Figma + collaudo pre-lancio",
    },
    process: [
      {
        step: "01",
        phase: "ARCHITETTURA",
        title: "Albero del Sito & User Flow di Conversione",
        description:
          "Mappiamo la gerarchia dei contenuti, i percorsi di navigazione dell'utente e i punti chiave di conversione (richiesta preventivo o acquisto) per eliminare ogni frizione.",
        timeline: "Fase 01",
      },
      {
        step: "02",
        phase: "UI/UX DESIGN",
        title: "Progettazione Visiva su Misura in Figma",
        description:
          "Disegniamo l'interfaccia definitiva: tipografia monumentale, spaziature calibrate e micro-interazioni, coordinando il design direttamente con i nostri asset foto e video.",
        timeline: "Fase 02",
      },
      {
        step: "03",
        phase: "SVILUPPO WEB",
        title: "Coding Moderno, Animazioni & Pagamenti",
        description:
          "Scriviamo il codice in Next.js o personalizziamo il tema Shopify. Implementiamo le animazioni Framer Motion, colleghiamo i gateway di pagamento e ottimizziamo le velocità di caricamento.",
        timeline: "Fase 03",
      },
      {
        step: "04",
        phase: "COLLAUDO & RILASCIO",
        title: "Test Multi-Dispositivo, DNS & Messa Online",
        description:
          "Verifica su molteplici dispositivi fisici, configurazione del dominio e dei certificati SSL, test dei moduli di contatto, indicizzazione su Google Search Console e rilascio ufficiale.",
        timeline: "Fase 04",
      },
    ],
    faqs: [
      {
        question: "Saremo in grado di aggiornare testi e prodotti autonomamente?",
        answer:
          "Assolutamente sì. Progettiamo ogni sito pensando all'indipendenza del cliente. Che si tratti di Shopify o di un CMS moderno, potrai modificare prezzi, articoli e foto con facilità senza toccare una riga di codice. A progetto ultimato ti consegniamo video-guide registrate su misura.",
      },
      {
        question: "Qual è la differenza rispetto a un tema acquistato su WordPress o Shopify?",
        answer:
          "I temi commerciali generici contengono migliaia di righe di codice inutile e decine di plugin che appesantiscono la pagina e creano falle di sicurezza. Noi scriviamo codice su misura: il sito è leggerissimo (< 1s di caricamento), sicuro, premiato da Google e con un design che nessun concorrente potrà copiare.",
      },
      {
        question: "Chi è il proprietario del sito e del codice una volta online?",
        answer:
          "Tu sei il proprietario esclusivo al 100%. Ti consegniamo il repository Git completo e gli account del dominio e dell'hosting rimangono sempre intestati alla tua azienda, senza alcun vincolo di canone proprietario nei nostri confronti.",
      },
      {
        question: "Cosa succede dopo la messa online in caso di problemi tecnici?",
        answer:
          "Tutti i nostri progetti includono 30 giorni di supporto tecnico gratuito post-lancio: monitoriamo la stabilità, verifichiamo la corretta ricezione degli ordini/contatti e siamo a tua disposizione per qualsiasi necessità. Successivamente offriamo piani leggeri di manutenzione solo se richiesti.",
      },
    ],
    guarantees: [
      {
        title: "Lighthouse Score 90+ Garantito",
        description: "Caricamento istantaneo su mobile: velocità reale per non perdere clienti e favorire il posizionamento Google.",
      },
      {
        title: "30 Giorni di Assistenza Inclusa",
        description: "Supporto tecnico tempestivo post-lancio direttamente con gli sviluppatori del progetto.",
      },
      {
        title: "Zero Lock-In & Codice Proprietario",
        description: "Nessun canone vincolante: il codice sorgente e la piattaforma sono interamente tuoi.",
      },
    ],
    metrics: [
      { label: "Tecnologia", value: "Next.js / Shopify" },
      { label: "Prestazioni", value: "Caricamento < 1s" },
      { label: "Design", value: "100% Sartoriale" },
    ],
    heroMedia: {
      type: "image",
      url: "/images/architecture-dome.jpg",
      caption: "Sviluppo web sartoriale, animazioni fluide e massima velocità di navigazione.",
    },
  },

  // --------------------------------------------------------------------------
  // 02. SOCIAL MEDIA & CONTENT
  // --------------------------------------------------------------------------
  {
    slug: "social-media",
    idNumber: "02",
    title: "Social Media & Content",
    tagline: "Direzione artistica del feed, ritmo sincopato 9:16 e identità visiva riconoscibile nel flusso.",
    leadParagraph:
      "Trasformiamo i canali social da vetrine disordinate a presenze editoriali autorevoli. Curiamo l'estetica del profilo attraverso shooting programmati, video verticali ad alta ritenzione (Reels e TikTok) e una griglia visiva impeccabile. Non pubblichiamo per riempire uno spazio, ma per costruire un immaginario di marca solido, capace di distinguere il tuo brand nel rumore visivo del feed.",
    target: {
      idealFor: [
        "Brand moda, gioielleria e lifestyle indipendenti",
        "Studi di architettura, design di interni e gallerie",
        "Realtà manifatturiere d'eccellenza e botteghe contemporanee",
        "Brand Direct-to-Consumer (D2C) ad alto valore estetico",
      ],
      triggers: [
        "Il profilo Instagram è frammentato, disomogeneo e curato a intermittenza.",
        "La produzione interna richiede troppo tempo ed energie, sottraendo risorse al lavoro principale.",
        "I video verticali attuali perdono lo spettatore nei primi 2 secondi con alto tasso di abbandono.",
        "È in arrivo un rilancio o una nuova collezione e serve un'estetica all'altezza del prodotto reale.",
      ],
    },
    deliverables: [
      {
        title: "Social Start — Presenza & Cura",
        description:
          "Gestione Instagram e Facebook con 8 post/grafiche mensili, storie dedicate, piano editoriale ragionato, copy essenziale e report mensile dei risultati.",
        specs: "In partnership con collaboratore P.IVA dedicato",
      },
      {
        title: "Social Pro — Video & Meta Ads",
        description:
          "12 post mensili, 4 Reel cinematografici a ritmo musicale, storie settimanali costanti e gestione strategica di 1 campagna sponsorizzata locale Meta Ads.",
        specs: "Per attività che puntano a generare nuovi contatti di zona",
      },
      {
        title: "Direzione Artistica del Feed & Grid System",
        description:
          "Definizione delle linee guida visive su Instagram: palette cromatica, composizione della griglia, tipografia dedicata e ritmo tra pieni e vuoti.",
        specs: "Brand Social Guidebook + Template Griglia coordinata",
      },
      {
        title: "Kit Lancio Social & Copertura Eventi",
        description:
          "Grafiche pronte con mockup smartphone per annunciare il nuovo sito, aperture speciali, promozioni o nuovi prodotti ai follower del brand.",
        specs: "JPEG Ultra-Res sRGB + Grafiche PNG native per storie e feed",
      },
    ],
    deliverablesSpecs: {
      formats: ["MP4 H.265 / H.264 (1080x1920)", "JPEG Ultra-Res sRGB", "Template Figma"],
      licensing: "Diritti d'uso commerciale illimitati per tutti i canali digitali di proprietà del brand",
      turnaround: "Consegna dell'archivio mensile con 10 giorni d'anticipo rispetto alla prima pubblicazione",
      revisions: "2 round di revisione strutturati per ogni ciclo di contenuti mensili",
    },
    process: [
      {
        step: "01",
        phase: "STRATEGIA & ASCOLTO",
        title: "Audit Visivo & Moodboard",
        description:
          "Analizziamo il posizionamento attuale del brand e i benchmark di settore. Creiamo la moodboard stilistica con palette, tipografia e ritmo narrativo.",
        timeline: "Settimana 1",
      },
      {
        step: "02",
        phase: "PRODUZIONE SUL CAMPO",
        title: "Shooting Concentrato in Studio o Location",
        description:
          "Una sessione di scatto e ripresa intensiva per raccogliere l'intero fabbisogno del mese, ottimizzando tempi e risorse.",
        timeline: "Settimana 2",
      },
      {
        step: "03",
        phase: "POST-PRODUZIONE",
        title: "Montaggio, Color Grading & Sound FX",
        description:
          "Editing al millimetro, calibrazione colore DaVinci Resolve, sonorizzazione con tracce commerciali licenziate e stesura dei testi.",
        timeline: "Settimana 3",
      },
      {
        step: "04",
        phase: "RILASCIO & DISTRIBUZIONE",
        title: "Approvazione Condivisa & Archivio Master",
        description:
          "Revisione su piattaforma interattiva con note a timecode. Consegna dell'archivio pronto e ordinato su cloud privato.",
        timeline: "Settimana 4",
      },
    ],
    faqs: [
      {
        question: "Chi si occupa di pubblicare i post e moderare i commenti?",
        answer:
          "Siamo uno studio di produzione visiva e direzione artistica: prepariamo tutti i file, i copy e il calendario pronti per la pubblicazione. La moderazione delle risposte e dei messaggi diretti rimane solitamente in capo al brand, che conosce intimamente la propria clientela.",
      },
      {
        question: "Ogni quanto tempo serve organizzare una sessione di riprese?",
        answer:
          "Lavoriamo a sessioni concentrate: una giornata di shooting ogni 30 o 60 giorni è sufficiente a coprire l'intero piano di pubblicazione del periodo successivo, eliminando l'ansia e l'improvvisazione quotidiana.",
      },
      {
        question: "Possiamo utilizzare questi contenuti anche come inserzioni a pagamento (Ads)?",
        answer:
          "Sì. Tutti i video e le foto vengono prodotti con attrezzatura cinema e ceduti con licenza commerciale piena. Su richiesta, possiamo esportare varianti dedicate con ganci visivi specifici per l'advertising.",
      },
      {
        question: "Come vengono gestite le modifiche e le revisioni?",
        answer:
          "Ogni batch include 2 round di revisione. Condividiamo i video su una piattaforma di review in cui puoi fermare il video al secondo esatto e lasciare commenti precisi: applichiamo i feedback in 24-48 ore lavorative.",
      },
    ],
    guarantees: [
      {
        title: "Filiera Diretta 100%",
        description: "Zero intermediari o commerciali: pianifichi e ti confronti direttamente con chi crea e monta i contenuti.",
      },
      {
        title: "Puntualità Calendario",
        description: "Gli asset mensili vengono consegnati sempre con almeno 10 giorni di anticipo rispetto all'inizio del mese editoriale.",
      },
      {
        title: "Archiviazione Protetta 12 Mesi",
        description: "Tutti i file sorgente e master rimangono duplicati nei nostri server locali e cloud per un intero anno solare.",
      },
    ],
    metrics: [
      { label: "Formato Nativo", value: "9:16 Verticale" },
      { label: "Stile Montaggio", value: "Ritmo Sincopato" },
      { label: "Pianificazione", value: "Cadenza Mensile" },
    ],
    heroMedia: {
      type: "image",
      url: "/images/social-feed-mockup.jpg",
      caption: "Feed Instagram d'autore: griglia curata, ritmo visivo e coerenza estetica.",
    },
  },

  // --------------------------------------------------------------------------
  // 03. FOTOGRAFIA & STILL-LIFE
  // --------------------------------------------------------------------------
  {
    slug: "foto",
    idNumber: "03",
    title: "Fotografia & Still-Life",
    tagline: "Luce pura, composizione geometrica, rispetto della materia.",
    leadParagraph:
      "Dallo still-life di prodotto per cataloghi ed e-commerce ai lookbook per moda e lifestyle, fino alla documentazione di spazi architettonici e ambienti artigianali. Lavoriamo sulla consistenza dei materiali, sulla modulazione millimetrica della luce e sulla pulizia geometrica dell'inquadratura per restituire immagini ad altissima fedeltà, capaci di valorizzare il pregio tangibile del tuo lavoro.",
    target: {
      idealFor: [
        "Brand di moda, pelletteria, calzature e gioielli",
        "Aziende di arredamento, design del prodotto e superfici",
        "E-Commerce premium che necessitano di schede prodotto a conversione elevata",
        "Studi di architettura, interior design e hospitality d'eccellenza",
      ],
      triggers: [
        "I prodotti dal vivo appaiono molto più pregiati rispetto alle foto attuali del sito.",
        "Difficoltà a fotografare superfici complesse (vetri, metalli riflettenti, pelli lucide, tessuti tecnici).",
        "Servono immagini a risoluzione monumentale per cataloghi cartacei, fiere di settore o affissioni.",
        "Le schede e-commerce hanno sfondi con tonalità disomogenee e colori sballati.",
      ],
    },
    deliverables: [
      {
        title: "Still-Life di Prodotto (Packshot & Set Ambientati)",
        description:
          "Fotografie su fondali continui (bianco puro, nero o tinte a campione) e composizioni su set materici (marmi, legni, cemento, metalli). Gestione totale di ombre e riflessi.",
        specs: "File TIFF 16-bit Master + WebP/JPEG ottimizzati",
      },
      {
        title: "Lookbook Moda & Campagne Lifestyle",
        description:
          "Scatti con modelli in studio o in location esterna. Studio delle pose, styling coerente ed enfatizzazione della vestibilità e delle finiture sartoriali.",
        specs: "Full-Res Master sRGB & Adobe RGB",
      },
      {
        title: "Spazi, Architetture & Strutture di Lavoro",
        description:
          "Documentazione visiva di showroom, laboratori di produzione, ristoranti e boutique con ottiche grandangolari e correzione rigorosa delle linee prospettiche.",
        specs: "Fotografia ad alta gamma dinamica e zero distorsione",
      },
      {
        title: "Sviluppo RAW & Fotoritocco Fine-Art",
        description:
          "Elaborazione cromatica fine-art: pulizia micro-impurità del packaging, correzione polvere, ritocco pelle naturale senza effetto plastico e allineamento colore fedele.",
        specs: "Color grading con profilo X-Rite ColorChecker",
      },
    ],
    deliverablesSpecs: {
      formats: ["TIFF 16-bit Master (Stampa Fine-Art)", "JPEG Full-Res 300 DPI", "WebP Ottimizzati E-Commerce 72 DPI"],
      licensing: "Cessione integrale dei diritti commerciali d'uso senza limiti territoriali o temporali",
      turnaround: "Provini digitali entro 48 ore; consegna master ritoccati entro 5-7 giorni lavorativi",
      revisions: "2 round di fotoritocco sui file selezionati inclusi nella quotazione",
    },
    process: [
      {
        step: "01",
        phase: "PRE-PRODUZIONE",
        title: "Styling, Fondali & Schema Luci",
        description:
          "Analisi del prodotto e dei materiali. Definiamo in anticipo la tipologia di illuminazione e prepariamo i set di scatto.",
        timeline: "Fase 01",
      },
      {
        step: "02",
        phase: "SESSIONE DI SCATTO",
        title: "Scatto in Tethering con Monitor Calibrato Live",
        description:
          "Tutti gli scatti vengono inviati in tempo reale su monitor professionale calibrato. Puoi assistere sul set a Forlì o validare le inquadrature da remoto via streaming live.",
        timeline: "Fase 02",
      },
      {
        step: "03",
        phase: "SELEZIONE CONDIVISA",
        title: "Galleria Provini & Sviluppo Digitale",
        description:
          "Carichiamo i provini numerati su una galleria privata protetta. Selezioni comodamente gli scatti da portare a finitura e avviamo lo sviluppo RAW.",
        timeline: "Fase 03",
      },
      {
        step: "04",
        phase: "POST-PRODUZIONE MASTER",
        title: "Ritocco Fine-Art & Doppio Export",
        description:
          "Eseguiamo il ritocco al pixel, la correzione cromatica fedele e consegniamo le cartelle suddivise per destinazione d'uso (stampa di pregio e web leggero).",
        timeline: "Fase 04",
      },
    ],
    faqs: [
      {
        question: "Dobbiamo essere presenti di persona durante lo shooting?",
        answer:
          "Non necessariamente. Molti clienti ci spediscono i prodotti direttamente presso il nostro studio a Forlì. Durante lo shooting condividiamo una galleria live in tempo reale: puoi approvare inquadrature e riflessi dallo smartphone o dal PC ovunque ti trovi.",
      },
      {
        question: "I colori delle fotografie saranno esattamente identici alla realtà?",
        answer:
          "Sì. Utilizziamo target di calibrazione colorimetrica X-Rite ColorChecker su ogni set luci. Questo garantisce che i colori di tessuti, pelli o smalti corrispondano fedelmente alla realtà, prevenendo resi sull'e-commerce dovuti a discrepanze cromatiche.",
      },
      {
        question: "Fornite anche i file RAW grezzi non post-prodotti?",
        answer:
          "La nostra firma risiede nella cura del file finito: rilasciamo master TIFF e JPEG ad altissima risoluzione pienamente rifiniti. I negativi digitali RAW originali possono essere ceduti su richiesta specifica tramite accordo di archiviazione.",
      },
      {
        question: "Potete procurarvi modelli, mua o location esterne?",
        answer:
          "Certamente. Collaboriamo con un network selezionato di modelli, agenzie, truccatori e location scout in tutta l'Emilia-Romagna e sul territorio nazionale.",
      },
    ],
    guarantees: [
      {
        title: "Fedeltà Cromatica Certificata",
        description: "Scatti calibrati con ColorChecker per la massima corrispondenza tra prodotto fisico e resa su schermo.",
      },
      {
        title: "Doppio Export Pronto all'Uso",
        description: "Ricevi sia i pesanti master TIFF per la stampa ad alta risoluzione, sia i leggeri file WebP già compressi per l'e-commerce.",
      },
      {
        title: "Diritti Perpetui Senza Royalty",
        description: "Nessun vincolo di rinnovo annuale: le immagini prodotte sono tue per sempre, su qualsiasi supporto.",
      },
    ],
    metrics: [
      { label: "Sensore", value: "Full-Frame 50MP" },
      { label: "Cromia", value: "Calibrazione X-Rite" },
      { label: "Output", value: "TIFF 16-bit & WebP" },
    ],
    heroMedia: {
      type: "image",
      url: "/images/editorial-fashion-portrait.jpg",
      caption: "Fotografia editoriale d'autore: studio della luce e fedeltà materica.",
    },
  },

  // --------------------------------------------------------------------------
  // 04. VIDEO & CINEMA
  // --------------------------------------------------------------------------
  {
    slug: "video",
    idNumber: "04",
    title: "Video & Cinema",
    tagline: "Tensione narrativa, dinamismo visivo, cura maniacale del suono.",
    leadParagraph:
      "Video promozionali, brand film, spot commerciali e narrazioni di processo. Rifiutiamo la banalità dei video aziendali lenti e celebrativi: utilizziamo cineprese digitali con sensori cinema, lenti di carattere, movimenti di camera fluidi e un sound design meticoloso per costruire sequenze che trattengono lo sguardo e incidono l'identità del brand nella memoria dello spettatore.",
    target: {
      idealFor: [
        "Aziende manifatturiere e industriali di precisione che vogliono svecchiare la propria immagine",
        "Brand di abbigliamento, design, lusso e tecnologia",
        "Tenute vinicole, ristorazione d'autore e boutique hotel",
        "Realtà innovative che devono spiegare prodotti complessi con forza emotiva",
      ],
      triggers: [
        "Il video aziendale attuale dura 5 minuti, nessuno lo guarda fino alla fine e trasmette un'immagine datata.",
        "Partecipazione a fiere internazionali o lanci di prodotto in cui serve un video dal forte impatto visivo.",
        "Necessità di attrarre talenti qualificati (employer branding) mostrando l'eccellenza dell'ambiente di lavoro.",
        "Mancanza di asset video ad alta tensione per la testata del sito web o per campagne promozionali.",
      ],
    },
    deliverables: [
      {
        title: "Brand Film Principale (Master 16:9 4K)",
        description:
          "Video istituzionale o emozionale da 45s a 90s con narrazione visiva strutturata, ritmo incalzante, montaggio al fotogramma e color grading cinematografico.",
        specs: "Master Apple ProRes 422 HQ + MP4 4K H.265 ad alto bitrate",
      },
      {
        title: "Cutdown Verticali Social (9:16)",
        description:
          "Versioni rieditate da 15s e 30s studiate per Reels, TikTok e YouTube Shorts con inquadrature ribilanciate appositamente per il display verticale.",
        specs: "MP4 1080x1920 con audio masterizzato per smartphone",
      },
      {
        title: "Video Loop per Web & Showroom",
        description:
          "Sequenze ipnotiche in loop senza stacchi bruschi, ottimizzate per il video background della homepage o per i display di fiere e showroom.",
        specs: "Clip leggere ad alta fluidità senza audio (WebM / MP4)",
      },
      {
        title: "Sound Design, Mix Audio & Licenze Musicali",
        description:
          "Tracce musicali d'autore con licenza commerciale perpetua, registrazione voci con microfoni broadcast e sound FX ambientali per dare tridimensionalità.",
        specs: "Mix audio stereo masterizzato a -14 LUFS per standard web",
      },
    ],
    deliverablesSpecs: {
      formats: ["Apple ProRes 422 HQ (4K DCI / UHD)", "MP4 H.265 / H.264 Full Bitrate", "Versioni Clean Feed"],
      licensing: "Licenza commerciale mondiale a tempo indeterminato, compresi i diritti perpetui delle musiche",
      turnaround: "Prima bozza di montaggio entro 10-14 giorni; master finale entro 5 giorni dal feedback",
      revisions: "2 round di revisione frame-by-frame inclusi nel budget concordato",
    },
    process: [
      {
        step: "01",
        phase: "CONCEPT & SCRIPT",
        title: "Trattamento di Regia & Shotlist",
        description:
          "Scrittura del concept visivo, selezione della colonna sonora guida, stesura della lista inquadrature e piano di ripresa dettagliato per massimizzare la resa sul set.",
        timeline: "Fase 01",
      },
      {
        step: "02",
        phase: "PRODUZIONE",
        title: "Riprese con Troupe Leggera & Lenti Cinema",
        description:
          "Girato sul campo con camere cinema, gimbal stabilizzati a 3 assi, set luci continue LED modulari e registrazione audio wireless a 32-bit float.",
        timeline: "Fase 02",
      },
      {
        step: "03",
        phase: "POST-PRODUZIONE",
        title: "Montaggio al Ritmo & Sound Design",
        description:
          "Editing al fotogramma, color grading in DaVinci Resolve su profilo logaritmico e creazione degli effetti sonori che conferiscono spessore alle immagini.",
        timeline: "Fase 03",
      },
      {
        step: "04",
        phase: "FINALIZZAZIONE",
        title: "Revisione Interattiva & Master Multi-Formato",
        description:
          "Revisione su link protetto con commenti a schermo. Esportazione di tutti i formati concordati (16:9 orizzontale, 9:16 verticale, loop web) e consegna certificati audio.",
        timeline: "Fase 04",
      },
    ],
    faqs: [
      {
        question: "Quanto deve durare un video per essere davvero efficace oggi?",
        answer:
          "Nel panorama digitale odierno la sintesi è forza: un brand film efficace per il web si colloca generalmente tra i 45 e i 90 secondi. Per i formati social (Reels/TikTok) i tagli ideali sono di 15-30 secondi, focalizzati su un singolo concetto forte.",
      },
      {
        question: "Le musiche rischiano di essere bloccate per copyright su Instagram o YouTube?",
        answer:
          "Assolutamente no. Acquistiamo esclusivamente licenze commerciali dedicate su library d'autore internazionali. Ti forniamo i certificati di sincronizzazione ufficiali che blindano i diritti per sempre su qualsiasi piattaforma.",
      },
      {
        question: "Cosa comprende l'attrezzatura che portate sul set?",
        answer:
          "Operiamo come una crew cinema agile: camere professionali con sensori cinema 4K/6K, ottiche fisse di carattere, stabilizzatori a 3 assi, audio broadcast a 32-bit float e luci continue con softbox cinematografici.",
      },
      {
        question: "Fornite anche il girato grezzo (tutte le clip registrate)?",
        answer:
          "Il nostro valore è il rigore di montaggio. Su richiesta preventiva e con accordo dedicato per il supporto hardware, possiamo trasferire l'intero girato grezzo in formato logaritmico.",
      },
    ],
    guarantees: [
      {
        title: "Audio a 32-Bit Float & Sound Design Pulito",
        description: "Zero audio gracchiante o voci clippate: chiarezza vocale e spazialità sonora impeccabili.",
      },
      {
        title: "Musiche Licenziate a Vita",
        description: "Certificato di licenza incluso a tutela del brand: zero strike o blocchi copyright futuri.",
      },
      {
        title: "Tagli 9:16 Inclusi",
        description: "Non un banale ritaglio centrale, ma un montaggio riadattato alla fruizione da smartphone.",
      },
    ],
    metrics: [
      { label: "Risoluzione", value: "4K DCI Cinema" },
      { label: "Stabilizzazione", value: "Gimbal 3 Assi" },
      { label: "Audio", value: "Sound Design & Licenze" },
    ],
    heroMedia: {
      type: "image",
      url: "/images/cinema-production.jpg",
      caption: "Produzione cinema: camera rig 4K, lenti anamorfiche e soundstage d'autore.",
    },
  },

  // --------------------------------------------------------------------------
  // 05. CREATIVITÀ PER ADS & PAID SOCIAL
  // --------------------------------------------------------------------------
  {
    slug: "ads",
    idNumber: "05",
    title: "Creatività per Ads & Paid Social",
    tagline: "Asset visivi ingegnerizzati per bloccare lo scroll e convertire l'attenzione in fatturato.",
    leadParagraph:
      "Nelle campagne pubblicitarie moderne l'algoritmo premia solo ciò che la gente non skippa. I vecchi annunci patinati non funzionano più: progettiamo e produciamo asset visivi modulari per Meta (Instagram/Facebook) e TikTok basati su ganci visivi immediati, dimostrazioni di prodotto e storytelling sincero. Riduciamo il costo di acquisizione cliente (CPA) trasformando lo scetticismo iniziale in desiderio d'acquisto.",
    target: {
      idealFor: [
        "E-Commerce B2C e brand Direct-to-Consumer (moda, cosmetica, food, design)",
        "Aziende B2B con percorsi di lead generation strutturati",
        "Brand in fase di scale-up che vogliono abbattere il CPA (costo per acquisizione)",
        "Media buyer e agenzie di growth che necessitano di un flusso continuo di creatività performanti",
      ],
      triggers: [
        "Creative Fatigue: le inserzioni attive hanno un calo di vendite e un costo per acquisto in continuo aumento.",
        "Il media buyer è bravo ma mancano video e grafiche capaci di attirare l'attenzione nei feed.",
        "Tasso di aggancio (Hook Rate) inferiore al 20%: gli utenti scorrono oltre nei primi 2 secondi.",
        "Lancio di un nuovo prodotto o ingresso in un nuovo mercato senza un posizionamento pubblicitario testato.",
      ],
    },
    deliverables: [
      {
        title: "Matrice di Hook Testing (3-5 Varianti di Apertura)",
        description:
          "Sviluppo di 3-5 diverse aperture per i primi 2 secondi del video (problema/soluzione, curiosità visiva, shock estetico, prima/dopo) montate sullo stesso corpo video per individuare l'annuncio vincente con il minor costo di test.",
        specs: "Matrice modulare esportata in cartelle con naming univoco",
      },
      {
        title: "Video Ads Short-Form Dinamici (9:16 & 4:5)",
        description:
          "Spot verticali da 15s a 40s dal montaggio rapido, con sovrimpressioni testuali ad alto contrasto leggibili anche a volume disattivato e grafiche native per Meta/TikTok.",
        specs: "File MP4 1080x1920 (9:16) e 1080x1350 (4:5) ad alto bitrate",
      },
      {
        title: "Static Ads & Caroselli ad Alta Conversione",
        description:
          "Inserzioni statiche curate nel design: confronti con competitor, breakdown delle caratteristiche, focus sui dettagli materici e riprova sociale con recensioni verificate.",
        specs: "Asset JPEG/PNG 1:1 e 4:5 conformi alle linee guida pubblicitarie",
      },
      {
        title: "Copywriting Pubblicitario & Scheda per Media Buyer",
        description:
          "Testi per le inserzioni (headline sintetiche, testi principali con gestione obiezioni e call to action chiare) uniti a una scheda tecnica con raccomandazioni di pubblico e testing.",
        specs: "Documento operativo con copy, angoli e indicazioni di budget",
      },
    ],
    deliverablesSpecs: {
      formats: ["MP4 1080x1920 (9:16)", "MP4 1080x1350 (4:5)", "Statici PNG/JPEG 1:1 e 4:5"],
      licensing: "Buyout pubblicitario totale senza limiti di budget speso o di durata delle campagne",
      turnaround: "Consegna del pacchetto creativo di test entro 7-10 giorni lavorativi dal brief",
      revisions: "2 round di rifinitura inclusi prima del lancio operativo",
    },
    process: [
      {
        step: "01",
        phase: "ANALISI DATI & ANGOLI",
        title: "Mappatura del Pubblico & Obiezioni",
        description:
          "Analizziamo lo storico delle tue inserzioni, le recensioni dei clienti e gli annunci dei competitor per identificare le leve persuasive e i punti di frizione all'acquisto.",
        timeline: "Fase 01",
      },
      {
        step: "02",
        phase: "RIPRESE MODULARI",
        title: "Shooting Focalizzato su Texture & Gesti",
        description:
          "Riprese rapide e dinamiche: dettagli ravvicinati, unboxing, utilizzo reale, reazioni autentiche e inquadrature studiate per catturare l'occhio nei primi fotogrammi.",
        timeline: "Fase 02",
      },
      {
        step: "03",
        phase: "MONTAGGIO VARIANTI",
        title: "Editing Sincopato, Testi Nativi & Hook",
        description:
          "Montaggio ad alta densità con grafiche native, sottotitoli a comparsa immediata e generazione sistematica delle diverse combinazioni di aperture visive.",
        timeline: "Fase 03",
      },
      {
        step: "04",
        phase: "RILASCIO & ITERAZIONE",
        title: "Consegna Pacchetto Ads & Analisi Dati",
        description:
          "Consegna degli asset pronti per il caricamento nel Business Manager. Analisi dopo 14 giorni dei tassi di aggancio (Hook Rate) per pianificare le iterazioni vincenti.",
        timeline: "Fase 04",
      },
    ],
    faqs: [
      {
        question: "Gestite voi direttamente le campagne e il budget pubblicitario?",
        answer:
          "Il nostro core business è la produzione creativa: creiamo gli asset visivi, i video e i testi che fanno convertire le campagne. Collaboriamo fluidamente con il tuo media buyer interno o la tua agenzia marketing. Se non ne hai uno, possiamo indicarti professionisti di nostra totale fiducia.",
      },
      {
        question: "Perché è fondamentale testare più hook (ganci iniziali)?",
        answer:
          "Sulle piattaforme Meta e TikTok, oltre il 70% del successo di un'inserzione si decide nei primi 1.8 secondi. Producendo 4 varianti di hook per lo stesso video, quadruplichi le possibilità di trovare la creatività vincente senza dover sostenere il costo di girare 4 spot completamente differenti.",
      },
      {
        question: "I video sembreranno spot finti o contenuti autentici?",
        answer:
          "Uniamo la qualità visiva del cinema con la spontaneità dei linguaggi social moderni: immagini nitide e luce perfetta, ma con un ritmo spontaneo e senza la patina aziendale noiosa che spinge gli utenti a saltare l'annuncio.",
      },
      {
        question: "Cosa succede se un angolo creativo non produce risultati?",
        answer:
          "La forza della nostra metodologia modulare è la velocità di risposta: analizziamo dove gli utenti abbandonano il video e possiamo sostituire il gancio iniziale o la call to action in meno di 48 ore, proteggendo il tuo investimento pubblicitario.",
      },
    ],
    guarantees: [
      {
        title: "Zero Royalties sul Budget Pubblicitario",
        description: "Non applichiamo percentuali sul tuo budget speso in advertising: la creatività è tua al 100%.",
      },
      {
        title: "Layout a Prova di Safe-Zone",
        description: "Testi e loghi posizionati rigorosamente al di fuori delle barre d'interfaccia di Instagram e TikTok.",
      },
      {
        title: "Approccio Data-Informed",
        description: "Ogni video è strutturato su metriche oggettive di retention e hook-rate, non su semplici gusti personali.",
      },
    ],
    metrics: [
      { label: "Approccio", value: "Matrice Hook Test" },
      { label: "Piattaforme", value: "Meta & TikTok Ads" },
      { label: "Obiettivo", value: "Abbattimento CPA" },
    ],
    heroMedia: {
      type: "image",
      url: "/images/streetwear-hustle.jpg",
      caption: "Asset creativi modulari pensati per il traffico a pagamento.",
    },
  },
];
