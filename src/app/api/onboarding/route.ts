import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      businessName,
      legalDetails,
      publicAddress,
      openingHours,
      publicPhone,
      whatsapp,
      publicEmail,
      socialLinks,
      businessDescription,
      mainServices,
      uniqueSellingPoint,
      targetLocations,
      foundedHistory,
      logoStatus,
      colorPreferences,
      toneOfVoice,
      referenceWebsites,
      selectedPackage,
      features,
      photoManagement,
      mediaDriveLink,
      additionalNotes,
      hasDomain,
      domainProvider,
      desiredDomains,
      needEmails,
      formattedSummary,
    } = data;

    // Compile comprehensive formatted Markdown text ready for Claude / ChatGPT
    const formattedText =
      formattedSummary ||
      `# ONBOARDING CLIENTE — LEMNIS STUDIO
Data: ${new Date().toLocaleDateString("it-IT", { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}
Brand: ${businessName || "Non specificato"}

---

## STEP 1: DATI ATTIVITÀ & POLICY LEGALI
- **Nome Attività / Brand:** ${businessName || "-"}
- **Dati Fiscali & Sede Legale (P.IVA, C.F., Ragione Sociale):** ${legalDetails || "-"}
- **Sede Operativa Aperta al Pubblico:** ${publicAddress || "Uguale a sede legale o non applicabile"}
- **Giorni e Orari di Apertura:** ${openingHours || "-"}
- **Telefono Pubblico:** ${publicPhone || "-"}
- **WhatsApp per Contatto Rapido:** ${whatsapp || "-"}
- **Email Pubblica:** ${publicEmail || "-"}
- **Social & Google Maps:** ${socialLinks || "-"}

---

## STEP 2: ATTIVITÀ & TARGET
- **Cosa fa l'attività (Spiegazione al bancone):**
${businessDescription || "-"}

- **3-5 Servizi o Prodotti Principali:**
${mainServices || "-"}

- **Perché scegliere loro (Punti di forza vs Concorrenza):**
${uniqueSellingPoint || "-"}

- **Zone / Città di Lavoro (Target SEO locale):** ${targetLocations || "-"}
- **Storia / Anno di Fondazione:** ${foundedHistory || "Non specificato"}

---

## STEP 3: STILE, COLORI & TONO DI VOCE
- **Stato Logo:** ${logoStatus || "-"}
- **Colori & Palette:** ${colorPreferences || "A discrezione della direzione artistica"}
- **Tono di Voce:** ${toneOfVoice || "-"}
- **Siti Web di Riferimento / Ispirazione:** ${referenceWebsites || "Nessuno specificato"}

---

## STEP 4: STRUTTURA, FUNZIONI & FOTO
- **Pacchetto Scelto:** ${selectedPackage || "Da definire insieme"}
- **Funzionalità Richieste:** ${Array.isArray(features) && features.length > 0 ? features.join(", ") : "Nessuna selezionata"}
- **Gestione Foto & Materiale:** ${photoManagement || "-"}
- **Link Drive / Cloud:** ${mediaDriveLink || "Nessun link fornito"}
- **Note Aggiuntive:** ${additionalNotes || "Nessuna nota aggiuntiva"}

---

## STEP 5: DOMINIO & INFRASTRUTTURA
- **Dominio Esistente:** ${hasDomain || "-"}
- **Dettagli Dominio / Provider:** ${domainProvider || "-"}
- **Domini Desiderati (se da registrare):** ${desiredDomains || "-"}
- **Nuove Caselle Email Professionali:** ${needEmails || "No"}

====================================================
Generato automaticamente da Lemnis Studio Onboarding System
`;

    // Attempt delivery via Web3Forms if key is present, or send to webhook
    const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3FormsKey) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            subject: `Nuovo Onboarding Sito Web: ${businessName || "Nuovo Cliente"}`,
            from_name: "Lemnis Onboarding",
            message: formattedText,
            ...data,
          }),
        });
      } catch (err) {
        console.error("Web3Forms forward error (non-blocking):", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Dati di onboarding ricevuti con successo.",
      formattedText,
    });
  } catch (error) {
    console.error("Onboarding submission error:", error);
    return NextResponse.json(
      { success: false, error: "Errore durante l'elaborazione dei dati." },
      { status: 500 }
    );
  }
}

