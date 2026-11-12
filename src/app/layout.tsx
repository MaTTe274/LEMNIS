import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "LEMNIS &bull; Creative Force &amp; Production Studio",
  description:
    "Direzione creativa, Social Media Architecture, Fotografia Editoriale, Produzione Video Cinematica e Performance Ads per brand contemporanei.",
  keywords: [
    "creative agency",
    "social media agency",
    "editorial photography",
    "cinematic commercials",
    "performance ads",
    "milan creative studio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="dark scroll-smooth">
      <body className="bg-background text-foreground selection:bg-white selection:text-black">
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

