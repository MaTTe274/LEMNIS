"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  Unlock,
  Check,
  ChevronRight,
  ChevronLeft,
  Copy,
  Download,
  RotateCcw,
  Sparkles,
  ArrowUpRight,
  Globe,
  Camera,
  Layers,
  Palette,
  MessageSquare,
  ShieldCheck,
  Building2,
  FileText,
  Clock,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";

/**
 * ============================================================================
 * CODICE DI ACCESSO RISERVATO AI CLIENTI LEMNIS
 * Modificabile in qualsiasi momento da questa costante.
 * ============================================================================
 */
export const CLIENT_ACCESS_CODE = "LEMNIS2026";
export const DEFAULT_WEB3FORMS_KEY = "111cfb85-799a-4330-b2e1-a1d91db3a71f";

const STORAGE_KEY = "lemnis_onboarding_draft";
const AUTH_KEY = "lemnis_onboarding_unlocked";

export interface OnboardingData {
  // Step 1: Dati Attività & Contatti
  businessName: string;
  legalDetails: string;
  publicAddress: string;
  openingHours: string;
  publicPhone: string;
  whatsapp: string;
  sameWhatsapp: boolean;
  publicEmail: string;
  socialLinks: string;

  // Step 2: Attività & Clienti
  businessDescription: string;
  mainServices: string;
  uniqueSellingPoint: string;
  targetLocations: string;
  foundedHistory: string;

  // Step 3: Stile, Colori & Gusti
  logoStatus: string;
  colorPreferences: string;
  toneOfVoice: string;
  referenceWebsites: string;

  // Step 4: Struttura, Funzioni & Foto
  selectedPackage: string;
  features: string[];
  photoManagement: string;
  mediaDriveLink: string;
  additionalNotes: string;

  // Step 5: Dominio & Riepilogo
  hasDomain: string;
  domainProvider: string;
  desiredDomains: string;
  needEmails: string;
}

const INITIAL_DATA: OnboardingData = {
  businessName: "",
  legalDetails: "",
  publicAddress: "",
  openingHours: "",
  publicPhone: "",
  whatsapp: "",
  sameWhatsapp: false,
  publicEmail: "",
  socialLinks: "",

  businessDescription: "",
  mainServices: "",
  uniqueSellingPoint: "",
  targetLocations: "",
  foundedHistory: "",

  logoStatus: "Sì, lo allego/invio via link",
  colorPreferences: "",
  toneOfVoice: "Amichevole e Diretto",
  referenceWebsites: "",

  selectedPackage: "Business — Attività Completa",
  features: [
    "Modulo richiesta preventivo / contatti",
    "Pulsante WhatsApp fisso",
    "Mappa Google interattiva",
    "Sezione Recensioni Google",
  ],
  photoManagement: "Ho già foto/video e inserisco qui il link Drive/WeTransfer",
  mediaDriveLink: "",
  additionalNotes: "",

  hasDomain: "No, dobbiamo registrarlo noi",
  domainProvider: "",
  desiredDomains: "",
  needEmails: "Sì",
};

// Preset colori cliccabili
const COLOR_PRESETS = [
  {
    name: "Elegante Scuro & Oro",
    desc: "Nero profondo, bronzo, oro satinato. Look lussuoso e autorevole.",
    preview: ["#0a0a0a", "#c5a059", "#1f1f1f"],
  },
  {
    name: "Pulito Bianco & Blu Tech",
    desc: "Sfondo chiaro, blu navy e accenti ciano. Rassicurante e corporate.",
    preview: ["#f8fafc", "#0f172a", "#2563eb"],
  },
  {
    name: "Caldo & Artigianale",
    desc: "Toni terra, sabbia, verde salvia e legno. Naturale e materico.",
    preview: ["#1c1917", "#78716c", "#577054"],
  },
  {
    name: "Moderno & Minimale",
    desc: "Monocromatico puro, nero, grafite e bianco gesso. Tipografico e netto.",
    preview: ["#000000", "#525252", "#ffffff"],
  },
  {
    name: "Fate voi (Lemnis Direction)",
    desc: "Affidati interamente alla direzione visiva e artistica del nostro studio.",
    preview: ["#080808", "#ffffff", "#10b981"],
  },
];

// Opzioni tono di voce
const TONE_OPTIONS = [
  {
    title: "Amichevole e Diretto",
    desc: "Linguaggio caldo, chiaro, accogliente e trasparente. Ideale per botteghe, atelier, professionisti e ristorazione.",
  },
  {
    title: "Formale e Istituzionale",
    desc: "Tono autorevole, composto e rigoroso. Perfetto per studi legali, notarili, cliniche private e finanza.",
  },
  {
    title: "Tecnico e Professionale",
    desc: "Focus su competenze, precisione, certificazioni e metriche concrete. Ottimo per ingegneria, edilizia e manifattura.",
  },
  {
    title: "Giovane e Dinamico",
    desc: "Fresco, contemporaneo, visivo e diretto al punto con ritmo incalzante. Ideale per streetwear, fitness e brand digitali.",
  },
];

// Opzioni pacchetto
const PACKAGE_OPTIONS = [
  {
    title: "Start — Vetrina Express",
    badge: "Essenziale & Veloce",
    desc: "Sito monopagina moderno con presentazione chiara dell'attività, orari, galleria e contatti rapidi.",
  },
  {
    title: "Business — Attività Completa",
    badge: "Consigliato",
    desc: "Sito multi-pagina sartoriale: home, pagine servizi dettagliate, chi siamo, portfolio lavori e SEO locale avanzata.",
  },
  {
    title: "Store — E-Commerce",
    badge: "Vendita Online",
    desc: "Piattaforma e-commerce completa con catalogo prodotti, checkout rapido, pagamenti digitali e gestione ordini.",
  },
  {
    title: "Non ricordo / Da definire insieme",
    badge: "Consulenza",
    desc: "Definiremo insieme l'architettura ideale durante la prima chiamata di allineamento.",
  },
];

// Funzionalità selezionabili
const AVAILABLE_FEATURES = [
  {
    name: "Modulo richiesta preventivo / contatti",
    desc: "Form guidato che invia le richieste clienti direttamente alla tua email e su WhatsApp.",
  },
  {
    name: "Pulsante WhatsApp fisso",
    desc: "Pulsante galleggiante sempre visibile per chattare subito con te in 1 click dallo smartphone.",
  },
  {
    name: "Mappa Google interattiva",
    desc: "Integrazione con navigatore GPS per far arrivare facilmente i clienti alla tua sede fisica.",
  },
  {
    name: "Galleria fotografica lavori",
    desc: "Griglia elegante dei migliori scatti o progetti realizzati, ottimizzata per smartphone.",
  },
  {
    name: "Sezione Recensioni Google",
    desc: "Badge con stelle e recensioni verificate per trasmettere immediata fiducia ai visitatori.",
  },
  {
    name: "Menu / Listino prezzi digitale",
    desc: "Consultabile comodamente da cellulare tramite QR Code o link diretto, senza PDF pesanti.",
  },
  {
    name: "Sistema prenotazione appuntamenti",
    desc: "Calendario interattivo per consentire ai clienti di prenotare date e orari disponibili.",
  },
];

export default function OnboardingClient() {
  // Gate State
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [passcodeInput, setPasscodeInput] = useState<string>("");
  const [passcodeError, setPasscodeError] = useState<string>("");

  // Form State
  const [formData, setFormData] = useState<OnboardingData>(INITIAL_DATA);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formattedSummary, setFormattedSummary] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [emailStatus, setEmailStatus] = useState<"idle" | "sent" | "error">("idle");
  const [emailErrorMsg, setEmailErrorMsg] = useState<string>("");

  // 1. Inizializzazione da localStorage
  useEffect(() => {
    try {
      const savedAuth = localStorage.getItem(AUTH_KEY);
      if (savedAuth === "true") {
        setIsUnlocked(true);
      }

      const savedDraft = localStorage.getItem(STORAGE_KEY);
      if (savedDraft) {
        const parsed = JSON.parse(savedDraft);
        setFormData((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // LocalStorage non disponibile o errore parsing
    }
  }, []);

  // 2. Auto-salvataggio su localStorage a ogni modifica
  const updateField = <K extends keyof OnboardingData>(
    field: K,
    value: OnboardingData[K]
  ) => {
    setFormData((prev) => {
      const next = { ...prev, [field]: value };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        setIsSaving(true);
        setTimeout(() => setIsSaving(false), 800);
      } catch {
        // Ignora errori di storage
      }
      return next;
    });

    // Rimuove l'errore per il campo se presente
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  // Toggle funzionalità
  const toggleFeature = (featureName: string) => {
    const current = formData.features;
    const exists = current.includes(featureName);
    const updated = exists
      ? current.filter((f) => f !== featureName)
      : [...current, featureName];
    updateField("features", updated);
  };

  // Verifica codice di accesso
  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcodeInput.trim().toUpperCase() === CLIENT_ACCESS_CODE.toUpperCase()) {
      setIsUnlocked(true);
      setPasscodeError("");
      try {
        localStorage.setItem(AUTH_KEY, "true");
      } catch {
        // Storage non disponibile
      }
    } else {
      setPasscodeError("Codice non valido. Verifica le maiuscole o contattaci.");
    }
  };

  // Validazione Step per Step
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.businessName.trim()) {
        newErrors.businessName = "Inserisci il nome della tua attività o del tuo brand.";
      }
      if (!formData.legalDetails.trim()) {
        newErrors.legalDetails = "Dati fiscali e sede legale obbligatori per legge per la pubblicazione.";
      }
    }

    if (step === 2) {
      if (!formData.businessDescription.trim()) {
        newErrors.businessDescription = "Scrivi almeno due righe per spiegare cosa fa la tua attività.";
      }
      if (!formData.mainServices.trim()) {
        newErrors.mainServices = "Indica almeno 2 o 3 servizi/prodotti principali su cui vuoi puntare.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Navigazione
  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 5) {
        setCurrentStep((prev) => prev + 1);
        window.scrollTo({ top: 120, behavior: "smooth" });
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 120, behavior: "smooth" });
    }
  };

  // Generatore del testo formattato (per Claude / ChatGPT / WhatsApp)
  const generateMarkdownSummary = (data: OnboardingData): string => {
    return `# ONBOARDING PROGETTO SITO WEB — LEMNIS STUDIO
Compilato il: ${new Date().toLocaleDateString("it-IT", { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}
Brand: ${data.businessName || "Non specificato"}

====================================================
1. DATI ATTIVITÀ & POLICY LEGALI
====================================================
- Nome Attività / Insegna: ${data.businessName || "-"}
- Dati Fiscali & Sede Legale (P.IVA, C.F., Ragione Sociale): ${data.legalDetails || "-"}
- Sede Operativa / Negozio al Pubblico: ${data.publicAddress || "Uguale a sede legale o solo online"}
- Giorni e Orari di Apertura: ${data.openingHours || "Non indicati"}
- Telefono Fisso / Cellulare Pubblico: ${data.publicPhone || "Non indicato"}
- WhatsApp Contatto Rapido: ${data.whatsapp || (data.sameWhatsapp ? data.publicPhone : "Non indicato")}
- Email Pubblica: ${data.publicEmail || "Non indicata"}
- Social & Google Maps: ${data.socialLinks || "Nessun link fornito"}

====================================================
2. ATTIVITÀ, SERVIZI & TARGET SEO LOCALE
====================================================
- Cosa fa l'attività (Spiegazione semplice):
${data.businessDescription || "-"}

- Servizi / Prodotti Principali (3-5 focus):
${data.mainServices || "-"}

- Perché scegliere loro (Punti di forza vs Concorrenza):
${data.uniqueSellingPoint || "Non specificato"}

- Zone / Città di Lavoro (Target Geografico):
${data.targetLocations || "Non specificato"}

- Anno di Fondazione o Curiosità / Storia:
${data.foundedHistory || "Non specificato"}

====================================================
3. STILE, COLORI & TONO DI VOCE
====================================================
- Situazione Logo: ${data.logoStatus || "-"}
- Colori & Palette Preferiti: ${data.colorPreferences || "A discrezione della direzione artistica"}
- Tono di Voce del Sito: ${data.toneOfVoice || "-"}
- Siti Web di Riferimento / Ispirazione:
${data.referenceWebsites || "Nessuno specificato"}

====================================================
4. PACCHETTO, FUNZIONALITÀ & FOTO
====================================================
- Pacchetto Scelto: ${data.selectedPackage || "Da concordare"}
- Funzionalità Richieste:
${data.features.length > 0 ? data.features.map((f) => `  * ${f}`).join("\n") : "  * Nessuna specifica"}
- Gestione Materiale Fotografico: ${data.photoManagement || "-"}
- Link Google Drive / Dropbox / WeTransfer: ${data.mediaDriveLink || "Nessun link inserito"}
- Note Aggiuntive del Cliente:
${data.additionalNotes || "Nessuna nota aggiuntiva"}

====================================================
5. DOMINIO & INFRASTRUTTURA
====================================================
- Situazione Dominio: ${data.hasDomain || "-"}
- Dominio e Provider Registrato: ${data.domainProvider || "N/A"}
- Domini Desiderati (se da registrare): ${data.desiredDomains || "N/A"}
- Nuove Email Professionali: ${data.needEmails || "No"}

====================================================
Note per Lemnis Studio:
Questo testo è pronto per essere incollato direttamente su Claude o ChatGPT per generare copy, sitemap e architettura del sito web.
`;
  };

  // Invio finale
  const handleSubmit = async () => {
    setIsSubmitting(true);
    const summary = generateMarkdownSummary(formData);
    setFormattedSummary(summary);

    const apiKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY || DEFAULT_WEB3FORMS_KEY;

    // 1. Invio Diretto Client-Side a Web3Forms (supportato dal piano free direttamente da browser)
    try {
      const web3Res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          subject: `Nuovo Onboarding Sito: ${formData.businessName || "Nuovo Cliente"}`,
          from_name: "Lemnis Studio Onboarding",
          name: formData.businessName || "Cliente Lemnis",
          email: formData.publicEmail || "studio@lemnis.it",
          phone: formData.publicPhone || "-",
          message: summary,
        }),
      });

      const web3Data = await web3Res.json();
      if (web3Data && web3Data.success) {
        setEmailStatus("sent");
      } else {
        setEmailStatus("error");
        setEmailErrorMsg(web3Data?.message || "Impossibile inviare la notifica email.");
      }
    } catch (err) {
      console.error("Client fetch error verso Web3Forms:", err);
      setEmailStatus("error");
      setEmailErrorMsg("Errore di rete durante l'invio della notifica email.");
    }

    // 2. Backup su server API route
    try {
      await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, formattedSummary: summary }),
      });
    } catch (err) {
      console.warn("Invio API non bloccante:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 100, behavior: "smooth" });
    }
  };

  // Copia negli appunti
  const handleCopy = () => {
    navigator.clipboard.writeText(formattedSummary || generateMarkdownSummary(formData));
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Scarica file .txt
  const handleDownload = () => {
    const text = formattedSummary || generateMarkdownSummary(formData);
    const filename = `onboarding-${(formData.businessName || "lemnis-cliente")
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")}.txt`;
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Reset del modulo
  const handleReset = () => {
    const confirmReset = window.confirm(
      "Sei sicuro di voler azzerare tutte le risposte inserite e ricominciare da capo?"
    );
    if (confirmReset) {
      setFormData(INITIAL_DATA);
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        // Ignora
      }
      setCurrentStep(1);
      window.scrollTo({ top: 100, behavior: "smooth" });
    }
  };

  // --------------------------------------------------------------------------
  // SCHERMATA 1: GATE DI ACCESSO RISERVATO
  // --------------------------------------------------------------------------
  if (!isUnlocked) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md p-8 sm:p-10 rounded-3xl bg-[#0c0c0c] border border-white/[0.08] shadow-2xl text-center space-y-6"
        >
          <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.1] text-white flex items-center justify-center mx-auto shadow-inner">
            <Lock className="w-6 h-6 text-white" />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-widest text-muted/60 block">
              Lemnis Studio &bull; Area Riservata
            </span>
            <h1 className="text-2xl sm:text-3xl font-light tracking-tight text-white">
              Accesso Onboarding.
            </h1>
            <p className="text-xs sm:text-sm text-muted leading-relaxed pt-1">
              Inserisci il codice di sicurezza fornito dal nostro team per iniziare a configurare il tuo nuovo sito web.
            </p>
          </div>

          <form onSubmit={handleUnlock} className="space-y-4 pt-2">
            <div>
              <input
                type="text"
                value={passcodeInput}
                onChange={(e) => {
                  setPasscodeInput(e.target.value);
                  setPasscodeError("");
                }}
                placeholder="ES. LEMNIS2026"
                autoFocus
                className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.12] focus:border-white text-white text-center text-lg tracking-widest font-mono uppercase focus:outline-none transition-colors"
              />
              {passcodeError && (
                <p className="text-rose-400 text-xs mt-2 text-center">
                  {passcodeError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-white text-black text-xs uppercase tracking-wider font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
            >
              <span>Sblocca Questionario</span>
              <Unlock className="w-4 h-4" />
            </button>
          </form>

          <p className="text-[11px] text-muted/50 border-t border-white/[0.06] pt-4">
            Non hai il codice? Richiedilo direttamente su WhatsApp a Luca o via email a{" "}
            <a href="mailto:studio@lemnis.it" className="text-white hover:underline">
              studio@lemnis.it
            </a>
          </p>
        </motion.div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // SCHERMATA 2: SUCCESSO CELEBRATIVO DOPO L'INVIO
  // --------------------------------------------------------------------------
  if (isSubmitted) {
    return (
      <div className="pt-36 pb-32 px-6 sm:px-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-12 rounded-3xl bg-[#0c0c0c] border border-white/[0.1] shadow-2xl space-y-8"
        >
          {/* Badge & Titolo */}
          <div className="space-y-4 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-2">
              <Check className="w-8 h-8" />
            </div>
            <span className="text-xs uppercase tracking-widest text-emerald-400 block font-medium">
              Invio Completato con Successo
            </span>
            <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white max-w-2xl mx-auto leading-tight">
              Perfetto! Abbiamo ricevuto tutto il materiale.
            </h1>
            <p className="text-muted text-base max-w-xl mx-auto leading-relaxed">
              Il nostro team tecnico è già al lavoro per analizzare le tue risposte e impostare la struttura visiva del tuo nuovo sito.
            </p>
          </div>

          {/* Banner Notifica Email */}
          {emailStatus === "sent" && (
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-3">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                <strong>Email recapitata con successo!</strong> La scheda completa è arrivata alla casella di posta di Lemnis Studio.
              </span>
            </div>
          )}

          {emailStatus === "error" && (
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-amber-300">Stato notifica email:</span>
                <span>{emailErrorMsg}</span>
              </div>
              <p className="text-[11px] text-muted">
                Nessun problema: il questionario è comunque salvato. Puoi inoltrarlo direttamente su WhatsApp a Luca con il pulsante qui sotto.
              </p>
            </div>
          )}

          {/* Azioni di Copia & Download */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <button
              onClick={handleCopy}
              className={`p-4 rounded-2xl border text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2.5 transition-all ${
                copied
                  ? "bg-emerald-500 text-black border-emerald-400 font-semibold"
                  : "bg-white text-black border-white hover:bg-neutral-200"
              }`}
            >
              <Copy className="w-4 h-4" />
              <span>{copied ? "Riepilogo Copiato negli Appunti!" : "Copia riepilogo risposte"}</span>
            </button>

            <button
              onClick={handleDownload}
              className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.1] hover:border-white text-white text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2.5 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Scarica riepilogo (.txt)</span>
            </button>
          </div>
          <p className="text-center text-[11px] text-muted/60">
            Consiglio: puoi incollare il riepilogo direttamente su WhatsApp per inviarlo anche a Luca.
          </p>

          {/* Box con i Prossimi Passi */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-white/90 font-medium">
              I Prossimi Passi Insieme:
            </h3>
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3.5">
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-mono text-white shrink-0 mt-0.5">
                  1
                </span>
                <p className="text-muted leading-relaxed">
                  <strong className="text-white font-medium">Prepariamo la prima bozza grafica:</strong> Elaboriamo la struttura, la palette e i testi chiave entro pochi giorni lavorativi.
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-mono text-white shrink-0 mt-0.5">
                  2
                </span>
                <p className="text-muted leading-relaxed">
                  <strong className="text-white font-medium">Ti inviamo il link privato:</strong> Potrai navigare il sito in anteprima direttamente dal tuo smartphone e da computer.
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-mono text-white shrink-0 mt-0.5">
                  3
                </span>
                <p className="text-muted leading-relaxed">
                  <strong className="text-white font-medium">Rifiniture finali e pubblicazione:</strong> Facciamo insieme gli ultimi ritocchi prima di pubblicare il sito online e collegare il dominio.
                </p>
              </div>
            </div>
          </div>

          {/* Link Diretto a WhatsApp / Home */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
            <a
              href="https://wa.me/393273413550?text=Ciao%20Luca,%20ho%20appena%20compilato%20il%20questionario%20onboarding%20su%20Lemnis!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Scrivi subito a Luca su WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
              }}
              className="text-xs uppercase tracking-wider text-muted hover:text-white transition-colors"
            >
              Torna al modulo
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // SCHERMATA 3: IL FORM DEI 5 STEP
  // --------------------------------------------------------------------------
  return (
    <div className="pt-32 pb-32 px-5 sm:px-10 max-w-4xl mx-auto">
      {/* Intestazione */}
      <div className="mb-10 pb-8 border-b border-white/[0.08] space-y-3">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted/70">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Lemnis Studio &bull; Onboarding Guidato</span>
          </span>

          {/* Indicatore auto-salvataggio */}
          <div className="flex items-center gap-2 text-[11px] text-muted/60">
            <span className={`w-1.5 h-1.5 rounded-full transition-colors ${isSaving ? "bg-amber-400" : "bg-emerald-400"}`} />
            <span>{isSaving ? "Salvataggio..." : "Salvataggio automatico attivo"}</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
          Costruiamo il tuo nuovo sito.
        </h1>
        <p className="text-muted text-sm sm:text-base leading-relaxed max-w-2xl">
          Compila questo questionario guidato (richiede circa 5 minuti). Non preoccuparti di scrivere testi perfetti: ci penseremo noi a trasformare le tue risposte in un sito professionale.
        </p>
      </div>

      {/* Progress Bar in 5 Step */}
      <div className="mb-10 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="text-white font-medium uppercase tracking-wider">
            Step 0{currentStep} di 05 &mdash;{" "}
            {currentStep === 1 && "Dati Attività & Contatti"}
            {currentStep === 2 && "La tua Attività & I tuoi Clienti"}
            {currentStep === 3 && "Stile, Colori & Gusti Estetici"}
            {currentStep === 4 && "Struttura, Funzioni & Foto"}
            {currentStep === 5 && "Dominio & Riepilogo Finale"}
          </span>
          <span className="text-muted font-mono">{currentStep * 20}%</span>
        </div>

        <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white transition-all duration-300 origin-left"
            style={{ width: `${currentStep * 20}%` }}
          />
        </div>

        {/* Step Tabs Cliccabili per navigare indietro rapidamente */}
        <div className="grid grid-cols-5 gap-1.5 pt-1 text-[10px] text-center uppercase tracking-wider">
          {["Contatti", "Attività", "Stile", "Funzioni", "Riepilogo"].map((label, idx) => {
            const stepNum = idx + 1;
            const isCompleted = currentStep > stepNum;
            const isCurrent = currentStep === stepNum;
            return (
              <button
                key={label}
                type="button"
                onClick={() => {
                  if (stepNum <= currentStep || validateStep(currentStep)) {
                    setCurrentStep(stepNum);
                  }
                }}
                className={`py-1.5 rounded-lg border transition-all ${
                  isCurrent
                    ? "bg-white/[0.1] text-white border-white/30 font-medium"
                    : isCompleted
                    ? "bg-white/[0.03] text-emerald-400 border-white/[0.08]"
                    : "text-muted/40 border-transparent hover:text-muted"
                }`}
              >
                <span className="hidden sm:inline">0{stepNum}. </span>
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Box Principale del Form */}
      <div className="p-6 sm:p-10 rounded-3xl bg-[#0c0c0c] border border-white/[0.08] shadow-2xl relative">
        <AnimatePresence mode="wait">
          {/* ================================================================
              STEP 1: Dati Attività & Contatti
             ================================================================ */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              <div className="border-b border-white/[0.06] pb-4">
                <span className="text-xs uppercase tracking-widest text-muted/60 block mb-1">
                  Passo 1 di 5
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-white">
                  Dati Attività &amp; Contatti
                </h2>
                <p className="text-xs text-muted mt-1">
                  Servono per la corretta esposizione legale nel footer e per collegare i moduli di contatto del sito.
                </p>
              </div>

              <div className="space-y-6">
                {/* Nome Attività */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-white/90 flex items-center justify-between">
                    <span>Nome dell&apos;Attività / Brand *</span>
                    <span className="text-[10px] text-muted">Obbligatorio</span>
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => updateField("businessName", e.target.value)}
                    placeholder="Es. Officina Meccanica Rossi, Studio Legale Bianchi, Atelier Sole..."
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border text-white text-sm focus:outline-none transition-colors ${
                      errors.businessName ? "border-rose-500" : "border-white/[0.1] focus:border-white"
                    }`}
                  />
                  {errors.businessName && (
                    <p className="text-rose-400 text-xs">{errors.businessName}</p>
                  )}
                </div>

                {/* Dati Fiscali & Sede Legale */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-white/90 flex items-center justify-between">
                    <span>Ragione Sociale, Partita IVA / C.F. &amp; Sede Legale *</span>
                    <span className="text-[10px] text-muted">Obbligatorio per legge</span>
                  </label>
                  <textarea
                    rows={3}
                    value={formData.legalDetails}
                    onChange={(e) => updateField("legalDetails", e.target.value)}
                    placeholder="Es. Rossi S.r.l. &bull; P.IVA 01234567890 &bull; Via Garibaldi 12, 47121 Forlì (FC)"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm focus:outline-none transition-colors ${
                      errors.legalDetails ? "border-rose-500" : "border-white/[0.1] focus:border-white"
                    }`}
                  />
                  <p className="text-[11px] text-muted/60 leading-relaxed">
                    Nota: La legge italiana impone di inserire Partita IVA e indirizzo della sede legale nel footer e nella Privacy Policy del sito web.
                  </p>
                  {errors.legalDetails && (
                    <p className="text-rose-400 text-xs">{errors.legalDetails}</p>
                  )}
                </div>

                {/* Sede Fisica Aperta al Pubblico */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-white/90 block">
                    Indirizzo Sede / Negozio aperta al pubblico (se diversa dalla sede legale)
                  </label>
                  <input
                    type="text"
                    value={formData.publicAddress}
                    onChange={(e) => updateField("publicAddress", e.target.value)}
                    placeholder="Es. Corso della Repubblica 45, Forlì (oppure lascia vuoto se coincide)"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-white text-white text-sm focus:outline-none transition-colors"
                  />
                </div>

                {/* Giorni e Orari */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-white/90 block">
                    Giorni e Orari di Apertura
                  </label>
                  <input
                    type="text"
                    value={formData.openingHours}
                    onChange={(e) => updateField("openingHours", e.target.value)}
                    placeholder="Es. Lun - Ven: 08:30-12:30 / 14:30-19:00 &bull; Sabato: 09:00-12:30 &bull; Domenica chiuso"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-white text-white text-sm focus:outline-none transition-colors"
                  />
                </div>

                {/* Telefono e WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-white/90 block">
                      Telefono da mostrare sul sito
                    </label>
                    <input
                      type="tel"
                      value={formData.publicPhone}
                      onChange={(e) => updateField("publicPhone", e.target.value)}
                      placeholder="Es. 0543 123456 / 340 1234567"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-white text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs uppercase tracking-wider text-white/90 block">
                        Numero WhatsApp
                      </label>
                      <label className="flex items-center gap-1.5 text-[11px] text-muted hover:text-white cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.sameWhatsapp}
                          onChange={(e) => {
                            const checked = e.target.checked;
                            updateField("sameWhatsapp", checked);
                            if (checked && formData.publicPhone) {
                              updateField("whatsapp", formData.publicPhone);
                            }
                          }}
                          className="rounded border-white/20 bg-white/5 text-white"
                        />
                        <span>Uguale al numero a fianco</span>
                      </label>
                    </div>
                    <input
                      type="tel"
                      disabled={formData.sameWhatsapp}
                      value={formData.sameWhatsapp ? formData.publicPhone : formData.whatsapp}
                      onChange={(e) => updateField("whatsapp", e.target.value)}
                      placeholder="Es. 340 1234567"
                      className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-white text-white text-sm focus:outline-none transition-colors ${
                        formData.sameWhatsapp ? "opacity-60 cursor-not-allowed" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Email pubblica */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-white/90 block">
                    Email Pubblica da mostrare sul sito
                  </label>
                  <input
                    type="email"
                    value={formData.publicEmail}
                    onChange={(e) => updateField("publicEmail", e.target.value)}
                    placeholder="Es. info@tuaazienda.it"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-white text-white text-sm focus:outline-none transition-colors"
                  />
                </div>

                {/* Social & Google Maps */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-white/90 block">
                    Link ai Profili Social &amp; Scheda Google Maps
                  </label>
                  <textarea
                    rows={2}
                    value={formData.socialLinks}
                    onChange={(e) => updateField("socialLinks", e.target.value)}
                    placeholder="Incolla i tuoi link Instagram, Facebook, TikTok o il link alla tua scheda Google Maps..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-white text-white text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* ================================================================
              STEP 2: La tua Attività & I tuoi Clienti
             ================================================================ */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              <div className="border-b border-white/[0.06] pb-4">
                <span className="text-xs uppercase tracking-widest text-muted/60 block mb-1">
                  Passo 2 di 5
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-white">
                  La tua Attività &amp; I tuoi Clienti
                </h2>
                <p className="text-xs text-muted mt-1">
                  Utilizzeremo queste informazioni per redigere i testi del sito e per indicizzarti su Google nelle ricerche locali.
                </p>
              </div>

              <div className="space-y-6">
                {/* Cosa fa l'attività */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-white/90 flex items-center justify-between">
                    <span>Cosa fa la tua attività? *</span>
                    <span className="text-[10px] text-muted">Spiegazione al bancone</span>
                  </label>
                  <textarea
                    rows={3}
                    value={formData.businessDescription}
                    onChange={(e) => updateField("businessDescription", e.target.value)}
                    placeholder="Descrivilo in 2 o 3 righe semplici, proprio come lo racconteresti a un cliente che entra per la prima volta nel tuo locale o ufficio..."
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm focus:outline-none transition-colors ${
                      errors.businessDescription ? "border-rose-500" : "border-white/[0.1] focus:border-white"
                    }`}
                  />
                  {errors.businessDescription && (
                    <p className="text-rose-400 text-xs">{errors.businessDescription}</p>
                  )}
                </div>

                {/* 3-5 Servizi Principali */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-white/90 flex items-center justify-between">
                    <span>Quali sono i 3-5 servizi o prodotti principali su cui vuoi puntare? *</span>
                    <span className="text-[10px] text-muted">Obbligatorio</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.mainServices}
                    onChange={(e) => updateField("mainServices", e.target.value)}
                    placeholder="1. Riparazione e tagliandi rapidi multimarca&#10;2. Revisione periodica e collaudi&#10;3. Sostituzione pneumatici e assetto ruote&#10;4. Sanificazione abitacolo all'ozono..."
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm focus:outline-none transition-colors ${
                      errors.mainServices ? "border-rose-500" : "border-white/[0.1] focus:border-white"
                    }`}
                  />
                  {errors.mainServices && (
                    <p className="text-rose-400 text-xs">{errors.mainServices}</p>
                  )}
                </div>

                {/* Punti di forza */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-white/90 block">
                    Perché un cliente dovrebbe scegliere te invece della concorrenza?
                  </label>
                  <textarea
                    rows={3}
                    value={formData.uniqueSellingPoint}
                    onChange={(e) => updateField("uniqueSellingPoint", e.target.value)}
                    placeholder="Es. Oltre 30 anni di esperienza in famiglia, preventivi chiari senza sorprese, rapidità di consegna, ricambi originali garantiti, auto di cortesia gratuita..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-white text-white text-sm focus:outline-none transition-colors"
                  />
                </div>

                {/* Zone di lavoro */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-white/90 block">
                    In quali città o zone lavori principalmente?
                  </label>
                  <input
                    type="text"
                    value={formData.targetLocations}
                    onChange={(e) => updateField("targetLocations", e.target.value)}
                    placeholder="Es. Forlì, Cesena, Faenza, Ravenna e provincia"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-white text-white text-sm focus:outline-none transition-colors"
                  />
                  <p className="text-[11px] text-muted/60">
                    Nota: Ci serve per ottimizzare il posizionamento SEO su Google e farti trovare dalle persone della tua zona che cercano i tuoi servizi.
                  </p>
                </div>

                {/* Anno di fondazione / Curiosità */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-white/90 block">
                    Anno di fondazione o breve storia / curiosità dell&apos;attività (facoltativo)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.foundedHistory}
                    onChange={(e) => updateField("foundedHistory", e.target.value)}
                    placeholder="Es. Attività fondata nel 1994 da mio padre, oggi gestita dalla seconda generazione con attrezzature digitali 4.0..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-white text-white text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* ================================================================
              STEP 3: Stile, Colori & Gusti Estetici
             ================================================================ */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              <div className="border-b border-white/[0.06] pb-4">
                <span className="text-xs uppercase tracking-widest text-muted/60 block mb-1">
                  Passo 3 di 5
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-white">
                  Stile, Colori &amp; Gusti Estetici
                </h2>
                <p className="text-xs text-muted mt-1">
                  Aiutaci a comprendere l&apos;atmosfera visiva che desideri trasmettere a chi visiterà il tuo sito.
                </p>
              </div>

              <div className="space-y-7">
                {/* Logo status */}
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-wider text-white/90 block">
                    Hai già un logo aziendale?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { value: "Sì, lo allego/invio via link", label: "Sì, ho già il logo", sub: "Lo allego o invio via link" },
                      { value: "Sì, ma va sistemato", label: "Sì, ma va rinnovato", sub: "Ho una vecchia versione da sistemare" },
                      { value: "No, mi serve anche il logo", label: "No, mi serve il logo", sub: "Vorrei crearlo insieme a voi" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => updateField("logoStatus", opt.value)}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          formData.logoStatus === opt.value
                            ? "bg-white/[0.08] border-white text-white shadow-lg shadow-white/5"
                            : "bg-white/[0.02] border-white/[0.08] text-muted hover:border-white/30 hover:text-white"
                        }`}
                      >
                        <span className="text-xs font-medium block text-white">{opt.label}</span>
                        <span className="text-[11px] text-muted block mt-0.5">{opt.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Colori e Preset Visivi */}
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-wider text-white/90 block">
                    Quali colori rappresentano la tua attività o ti piacerebbe usare?
                  </label>

                  {/* Preset cliccabili */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {COLOR_PRESETS.map((preset) => (
                      <button
                        key={preset.name}
                        type="button"
                        onClick={() => updateField("colorPreferences", preset.name)}
                        className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 ${
                          formData.colorPreferences === preset.name
                            ? "bg-white/[0.08] border-white text-white"
                            : "bg-white/[0.02] border-white/[0.06] text-muted hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {/* Swatch dots */}
                        <div className="flex items-center gap-1 shrink-0 mt-1">
                          {preset.preview.map((c, i) => (
                            <span
                              key={i}
                              className="w-3 h-3 rounded-full border border-white/20"
                              style={{ backgroundColor: c }}
                            />
                          ))}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs font-medium text-white">{preset.name}</h4>
                          <p className="text-[11px] text-muted leading-tight mt-0.5">{preset.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Campo libero */}
                  <div className="pt-2">
                    <input
                      type="text"
                      value={formData.colorPreferences}
                      onChange={(e) => updateField("colorPreferences", e.target.value)}
                      placeholder="Oppure scrivi qui i tuoi colori (es. Grigio scuro e Giallo ocra, Verde salvia e Bianco caldo...)"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-white text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Tono di voce */}
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-wider text-white/90 block">
                    Che tono di voce vuoi dare al sito?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {TONE_OPTIONS.map((tone) => (
                      <button
                        key={tone.title}
                        type="button"
                        onClick={() => updateField("toneOfVoice", tone.title)}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          formData.toneOfVoice === tone.title
                            ? "bg-white/[0.08] border-white text-white shadow-lg shadow-white/5"
                            : "bg-white/[0.02] border-white/[0.08] text-muted hover:border-white/30 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-medium text-white">{tone.title}</h4>
                          {formData.toneOfVoice === tone.title && (
                            <Check className="w-3.5 h-3.5 text-white" />
                          )}
                        </div>
                        <p className="text-[11px] text-muted leading-relaxed mt-1">{tone.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Siti di Riferimento */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-white/90 block">
                    Ci sono 1 o 2 siti web che ti piacciono particolarmente?
                  </label>
                  <textarea
                    rows={3}
                    value={formData.referenceWebsites}
                    onChange={(e) => updateField("referenceWebsites", e.target.value)}
                    placeholder="Incolla qui i link (anche di concorrenti o di settori completamente diversi) e dicci brevemente cosa ti piace (es. i colori, la chiarezza dei menu, le foto grandi...)"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-white text-white text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* ================================================================
              STEP 4: Struttura, Funzioni & Foto
             ================================================================ */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              <div className="border-b border-white/[0.06] pb-4">
                <span className="text-xs uppercase tracking-widest text-muted/60 block mb-1">
                  Passo 4 di 5
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-white">
                  Struttura, Funzioni &amp; Foto
                </h2>
                <p className="text-xs text-muted mt-1">
                  Seleziona le caratteristiche tecniche e indicaci come gestiremo il materiale fotografico.
                </p>
              </div>

              <div className="space-y-7">
                {/* Pacchetto scelto */}
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-wider text-white/90 block">
                    Pacchetto Concordato o Preferito
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PACKAGE_OPTIONS.map((pkg) => (
                      <button
                        key={pkg.title}
                        type="button"
                        onClick={() => updateField("selectedPackage", pkg.title)}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          formData.selectedPackage === pkg.title
                            ? "bg-white/[0.08] border-white text-white shadow-lg shadow-white/5"
                            : "bg-white/[0.02] border-white/[0.08] text-muted hover:border-white/30 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-xs font-medium text-white">{pkg.title}</h4>
                          <span className="text-[10px] uppercase tracking-wider text-white/60 px-2 py-0.5 rounded-full bg-white/[0.06]">
                            {pkg.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-muted leading-relaxed">{pkg.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Funzionalità (Checkbox Card) */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs uppercase tracking-wider text-white/90 block">
                      Quali funzionalità vuoi includere nel sito?
                    </label>
                    <span className="text-[10px] text-muted">Scelta multipla</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {AVAILABLE_FEATURES.map((feat) => {
                      const isSelected = formData.features.includes(feat.name);
                      return (
                        <button
                          key={feat.name}
                          type="button"
                          onClick={() => toggleFeature(feat.name)}
                          className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 ${
                            isSelected
                              ? "bg-white/[0.07] border-white text-white"
                              : "bg-white/[0.02] border-white/[0.06] text-muted hover:border-white/20 hover:text-white"
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                              isSelected
                                ? "bg-white border-white text-black"
                                : "border-white/30 bg-transparent text-transparent"
                            }`}
                          >
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-xs font-medium text-white">{feat.name}</h4>
                            <p className="text-[11px] text-muted leading-tight mt-0.5">{feat.desc}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Gestione Foto */}
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-wider text-white/90 block">
                    Come gestiamo le foto e i video del sito?
                  </label>
                  <div className="space-y-2">
                    {[
                      {
                        value: "Ho già foto/video e inserisco qui il link Drive/WeTransfer",
                        label: "Ho già foto/video digitali",
                        desc: "Inserirò qui sotto il link di Google Drive, Dropbox o WeTransfer",
                      },
                      {
                        value: "Ve le mando su WhatsApp",
                        label: "Ve le invio su WhatsApp",
                        desc: "Vi inoltrerò le foto direttamente in chat a piena risoluzione",
                      },
                      {
                        value: "Venite voi a scattarle in negozio",
                        label: "Venite voi a scattarle (Servizio fotografico Lemnis)",
                        desc: "Concordiamo uno shooting professionale in-house con luci e fotocamere cinema",
                      },
                      {
                        value: "Usate foto professionali d'archivio",
                        label: "Usate foto d'archivio / generate ad hoc",
                        desc: "Selezioniamo noi immagini coerenti ad altissima risoluzione per il tuo settore",
                      },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => updateField("photoManagement", opt.value)}
                        className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                          formData.photoManagement === opt.value
                            ? "bg-white/[0.08] border-white text-white shadow-lg shadow-white/5"
                            : "bg-white/[0.02] border-white/[0.08] text-muted hover:border-white/30 hover:text-white"
                        }`}
                      >
                        <div>
                          <h4 className="text-xs font-medium text-white">{opt.label}</h4>
                          <p className="text-[11px] text-muted mt-0.5">{opt.desc}</p>
                        </div>
                        {formData.photoManagement === opt.value && (
                          <Check className="w-4 h-4 text-white shrink-0 ml-3" />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Campo Link Cloud (condizionale) */}
                  {formData.photoManagement ===
                    "Ho già foto/video e inserisco qui il link Drive/WeTransfer" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="pt-2 space-y-1.5"
                    >
                      <label className="text-[11px] uppercase tracking-wider text-muted block">
                        Incolla il link alla cartella Google Drive / Dropbox / WeTransfer:
                      </label>
                      <input
                        type="url"
                        value={formData.mediaDriveLink}
                        onChange={(e) => updateField("mediaDriveLink", e.target.value)}
                        placeholder="https://drive.google.com/drive/folders/... oppure https://we.tl/..."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.15] focus:border-white text-white text-sm focus:outline-none transition-colors"
                      />
                    </motion.div>
                  )}
                </div>

                {/* Note aggiuntive */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-white/90 block">
                    Note o richieste particolari aggiuntive (facoltativo)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.additionalNotes}
                    onChange={(e) => updateField("additionalNotes", e.target.value)}
                    placeholder="Qualsiasi altra informazione utile, dubbi o idee che vuoi condividere con il nostro team..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-white text-white text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* ================================================================
              STEP 5: Dominio & Riepilogo Finale
             ================================================================ */}
          {currentStep === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              <div className="border-b border-white/[0.06] pb-4">
                <span className="text-xs uppercase tracking-widest text-muted/60 block mb-1">
                  Passo 5 di 5
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-white">
                  Dominio &amp; Riepilogo Finale
                </h2>
                <p className="text-xs text-muted mt-1">
                  Verifica i dati del dominio e controlla il riepilogo prima di avviare il progetto.
                </p>
              </div>

              <div className="space-y-6">
                {/* Dominio esistente? */}
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-wider text-white/90 block">
                    Hai già un dominio web registrato (es. www.tuaazienda.it)?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { value: "Sì, ho già un dominio", label: "Sì, ho già il dominio", desc: "Registrato su Aruba, Register, GoDaddy..." },
                      { value: "No, dobbiamo registrarlo noi", label: "No, dobbiamo registrarlo noi", desc: "Ci occuperemo noi della registrazione" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => updateField("hasDomain", opt.value)}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          formData.hasDomain === opt.value
                            ? "bg-white/[0.08] border-white text-white shadow-lg shadow-white/5"
                            : "bg-white/[0.02] border-white/[0.08] text-muted hover:border-white/30 hover:text-white"
                        }`}
                      >
                        <h4 className="text-xs font-medium text-white">{opt.label}</h4>
                        <p className="text-[11px] text-muted mt-0.5">{opt.desc}</p>
                      </button>
                    ))}
                  </div>

                  {/* Condizionale: Dominio presente */}
                  {formData.hasDomain === "Sì, ho già un dominio" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="pt-2 space-y-1.5"
                    >
                      <label className="text-[11px] uppercase tracking-wider text-muted block">
                        Qual è il dominio e su quale provider si trova?
                      </label>
                      <input
                        type="text"
                        value={formData.domainProvider}
                        onChange={(e) => updateField("domainProvider", e.target.value)}
                        placeholder="Es. www.officinarossi.it registrato su Aruba (oppure Register, Serverplan...)"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-white text-white text-sm focus:outline-none transition-colors"
                      />
                    </motion.div>
                  )}

                  {/* Condizionale: Dominio da registrare */}
                  {formData.hasDomain === "No, dobbiamo registrarlo noi" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="pt-2 space-y-1.5"
                    >
                      <label className="text-[11px] uppercase tracking-wider text-muted block">
                        Scrivi 2 o 3 nomi a dominio che ti piacerebbero in ordine di preferenza:
                      </label>
                      <input
                        type="text"
                        value={formData.desiredDomains}
                        onChange={(e) => updateField("desiredDomains", e.target.value)}
                        placeholder="Es. 1. officinarossi.it &bull; 2. rossi-forli.it &bull; 3. autofficinarossi.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-white text-white text-sm focus:outline-none transition-colors"
                      />
                    </motion.div>
                  )}
                </div>

                {/* Caselle Email */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-white/90 block">
                    Hai bisogno di creare nuove caselle email professionali (es. info@tuaazienda.it)?
                  </label>
                  <div className="flex gap-4">
                    {["Sì", "No"].map((choice) => (
                      <button
                        key={choice}
                        type="button"
                        onClick={() => updateField("needEmails", choice)}
                        className={`px-6 py-2.5 rounded-xl border text-xs font-medium transition-colors ${
                          formData.needEmails === choice
                            ? "bg-white text-black border-white"
                            : "bg-white/[0.03] text-muted border-white/[0.08] hover:text-white"
                        }`}
                      >
                        {choice}
                      </button>
                    ))}
                  </div>
                </div>

                {/* BOX RIEPILOGO COMPLETO */}
                <div className="pt-4 border-t border-white/[0.08] space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-white/80 font-medium">
                      Riepilogo Dati Inseriti
                    </span>
                    <span className="text-[10px] text-muted">Controlla prima di inviare</span>
                  </div>

                  <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-5 text-xs text-muted">
                    {/* Step 1 Recap */}
                    <div className="border-b border-white/[0.04] pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <strong className="text-white text-xs font-medium">1. Attività &amp; Contatti</strong>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="text-[11px] text-muted hover:text-white underline"
                        >
                          Modifica
                        </button>
                      </div>
                      <p><span className="text-white/60">Brand:</span> <span className="text-white">{formData.businessName || "-"}</span></p>
                      <p><span className="text-white/60">Dati Legali:</span> <span className="text-white">{formData.legalDetails || "-"}</span></p>
                      <p><span className="text-white/60">Tel / WhatsApp:</span> <span className="text-white">{formData.publicPhone || "-"} / {formData.whatsapp || (formData.sameWhatsapp ? formData.publicPhone : "-")}</span></p>
                      <p><span className="text-white/60">Email:</span> <span className="text-white">{formData.publicEmail || "-"}</span></p>
                    </div>

                    {/* Step 2 Recap */}
                    <div className="border-b border-white/[0.04] pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <strong className="text-white text-xs font-medium">2. Servizi &amp; Target</strong>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(2)}
                          className="text-[11px] text-muted hover:text-white underline"
                        >
                          Modifica
                        </button>
                      </div>
                      <p><span className="text-white/60">Attività:</span> <span className="text-white line-clamp-2">{formData.businessDescription || "-"}</span></p>
                      <p><span className="text-white/60">Servizi Chiave:</span> <span className="text-white line-clamp-2">{formData.mainServices || "-"}</span></p>
                      <p><span className="text-white/60">Zone:</span> <span className="text-white">{formData.targetLocations || "-"}</span></p>
                    </div>

                    {/* Step 3 Recap */}
                    <div className="border-b border-white/[0.04] pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <strong className="text-white text-xs font-medium">3. Stile &amp; Tono</strong>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(3)}
                          className="text-[11px] text-muted hover:text-white underline"
                        >
                          Modifica
                        </button>
                      </div>
                      <p><span className="text-white/60">Logo:</span> <span className="text-white">{formData.logoStatus}</span></p>
                      <p><span className="text-white/60">Colori:</span> <span className="text-white">{formData.colorPreferences || "Lemnis Direction"}</span></p>
                      <p><span className="text-white/60">Tono di Voce:</span> <span className="text-white">{formData.toneOfVoice}</span></p>
                    </div>

                    {/* Step 4 & 5 Recap */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <strong className="text-white text-xs font-medium">4. Funzioni &amp; Dominio</strong>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(4)}
                          className="text-[11px] text-muted hover:text-white underline"
                        >
                          Modifica
                        </button>
                      </div>
                      <p><span className="text-white/60">Pacchetto:</span> <span className="text-white">{formData.selectedPackage}</span></p>
                      <p><span className="text-white/60">Funzioni ({formData.features.length}):</span> <span className="text-white">{formData.features.join(", ")}</span></p>
                      <p><span className="text-white/60">Foto:</span> <span className="text-white">{formData.photoManagement}</span></p>
                      <p><span className="text-white/60">Dominio:</span> <span className="text-white">{formData.hasDomain} ({formData.domainProvider || formData.desiredDomains || "N/A"})</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Barra di Navigazione Bottoni Inferiore */}
        <div className="flex items-center justify-between pt-8 mt-8 border-t border-white/[0.08]">
          {/* Tasto Indietro */}
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white text-xs uppercase tracking-wider font-medium transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Indietro</span>
            </button>
          ) : (
            <div />
          )}

          {/* Tasto Avanti / Invia */}
          {currentStep < 5 ? (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs uppercase tracking-wider font-semibold transition-colors shadow-lg shadow-white/5 ml-auto"
            >
              <span>Continua</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              disabled={isSubmitting}
              onClick={handleSubmit}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black hover:bg-neutral-200 text-xs uppercase tracking-wider font-semibold transition-all shadow-xl shadow-white/10 ml-auto disabled:opacity-50"
            >
              <span>{isSubmitting ? "Invio in corso..." : "Invia i dati e avvia il progetto"}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Footer del Modulo: Reset discreto & Assistenza */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted/50 px-2">
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 hover:text-rose-400 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Azzera modulo e ricomincia</span>
        </button>

        <div className="flex items-center gap-4 text-center sm:text-right">
          <span>Hai dubbi o domande?</span>
          <a
            href="https://wa.me/393273413550"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            Scrivi a Luca su WhatsApp &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

