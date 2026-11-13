import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inizia Progetto &bull; LEMNIS Studio",
  robots: {
    index: false,
    follow: false,
  },
};

export default function IniziaProgettoPage() {
  redirect("/onboarding");
}

