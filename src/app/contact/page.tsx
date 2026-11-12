import ContactForm from "@/components/forms/ContactForm";
import { AGENCY } from "@/data/agency";

export const metadata = {
  title: "Contatti &bull; LEMNIS",
  description: "Contatta lo studio creativo Lemnis a Forlì per nuovi progetti e collaborazioni.",
};

export default function ContactPage() {
  return (
    <div className="pt-36 pb-32 px-6 sm:px-12 max-w-[1720px] mx-auto">
      {/* Title */}
      <div className="mb-20 pb-12 border-b border-white/[0.08]">
        <span className="text-xs tracking-wider text-muted/60 uppercase block mb-6">
          Contatto Diretto
        </span>
        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-light tracking-tight text-white max-w-5xl leading-[0.88] mb-8">
          INIZIAMO DA QUI.
        </h1>
        <p className="text-muted text-lg sm:text-xl max-w-2xl leading-relaxed">
          Raccontaci brevemente il tuo progetto. Rispondiamo direttamente noi due entro 24 ore lavorative.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        {/* Left: Contact Form */}
        <div className="lg:col-span-8">
          <ContactForm />
        </div>

        {/* Right: Studio Coordinates */}
        <div className="lg:col-span-4 space-y-12 text-sm">
          <div className="space-y-2 border-b border-white/[0.08] pb-8">
            <span className="text-xs uppercase tracking-widest text-muted/60 block">
              Email Diretta
            </span>
            <a
              href={`mailto:${AGENCY.email}`}
              className="text-lg text-white hover:underline block"
            >
              {AGENCY.email}
            </a>
            <p className="text-xs text-muted pt-1">
              Per richieste di preventivo, collaborazioni o informazioni.
            </p>
          </div>

          <div className="space-y-2 border-b border-white/[0.08] pb-8">
            <span className="text-xs uppercase tracking-widest text-muted/60 block">
              Sede &amp; Incontri
            </span>
            <p className="text-white font-medium">
              Forlì (FC), Romagna
            </p>
            <p className="text-xs text-muted leading-relaxed">
              Disponibili per incontri di persona a Forlì, Cesena, Ravenna, Bologna e Milano, oppure da remoto.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-muted/60 block">
              Social &amp; Archivio
            </span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline block text-xs"
            >
              Instagram &bull; {AGENCY.instagram}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
