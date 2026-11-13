import type { Metadata } from "next";
import OnboardingClient from "@/components/onboarding/OnboardingClient";

export const metadata: Metadata = {
  title: "Onboarding Progetto &bull; LEMNIS Studio",
  description:
    "Questionario riservato per l'avvio della progettazione del tuo nuovo sito web con Lemnis Studio.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function OnboardingPage() {
  return <OnboardingClient />;
}

