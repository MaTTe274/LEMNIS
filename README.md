# LEMNIS &bull; Creative Force & Production Studio

Sito web per agenzia creativa d'alto profilo specializzata in **Social Media**, **Foto**, **Video** e **Ads**.

Realizzato con **Next.js 15 (App Router)**, **Tailwind CSS**, **Framer Motion** e scorrimento inerziale **Lenis**.
Estetica: **Brutalismo editoriale & minimalismo Apple** (Dark mode nativa, tipografia sans-serif oversize, micro-interazioni con fisica e bordi satinati).

---

## Struttura del Progetto

```
lemnis/
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout con Lenis smooth scroll, CustomCursor e Navbar
│   │   ├── page.tsx               # Homepage (Hero, Manifesto, Services Accordion, Works, Metrics)
│   │   ├── services/
│   │   │   ├── page.tsx           # Hub panoramico discipline
│   │   │   └── [slug]/page.tsx    # Scheda singola disciplina (Social, Foto, Video, Ads)
│   │   ├── work/
│   │   │   ├── page.tsx           # Archivio portfolio con filtri
│   │   │   └── [slug]/page.tsx    # Case study approfondito con gallery, challenge & ROI
│   │   ├── about/
│   │   │   └── page.tsx           # Filosofia dello studio, dotazione tecnica e principi
│   │   ├── contact/
│   │   │   └── page.tsx           # Brief interattivo con selettore servizi e budget
│   │   ├── not-found.tsx          # 404 minimalista
│   │   └── globals.css            # Stili globali, Lenis styles, palette e typography
│   │
│   ├── components/
│   │   ├── ui/                    # CustomCursor, Magnetic, SectionHeading, TextReveal
│   │   ├── layout/                # Navbar, Footer, SmoothScroll (Lenis)
│   │   ├── sections/home/         # Hero, Statement, ServicesAccordion, FeaturedWorks, MetricsStrip
│   │   └── forms/                 # ContactForm con selettore tag
│   │
│   ├── data/                      # Dati tipizzati (services.ts, projects.ts, agency.ts)
│   ├── lib/                       # Utility (utils.ts per `cn()`, animations.ts)
│   └── types/                     # Definizioni TypeScript (service.ts, project.ts)
```

---

## Comandi di Sviluppo

```bash
# Avvia il server di sviluppo (http://localhost:3000)
npm run dev

# Compilazione per la produzione
npm run build

# Avvia la build di produzione
npm start
```

---

## 4 Discipline Trattate

1. **Social Media Architecture:** Creazione feed, format verticali TikTok/Reels ad alta ritenzione, community culture.
2. **Editorial & Commercial Photography:** Still life di precisione, moda, ritocco fine-art e cattura medio formato 100MP.
3. **Cinematic Video & Commercials:** Spot broadcast, lenti anamorfiche 6K, sound design e color grading d'autore.
4. **Performance Ads & Scale:** Ingegneria creativa e media buying multi-canale (Meta, TikTok) a elevato ROAS.

