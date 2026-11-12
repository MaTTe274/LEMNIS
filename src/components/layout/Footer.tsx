"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AGENCY } from "@/data/agency";

export default function Footer() {
  const [localTime, setLocalTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("it-IT", {
        timeZone: "Europe/Rome",
        hour: "2-digit",
        minute: "2-digit",
      });
      setLocalTime(formatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-[#050505] text-foreground border-t border-white/[0.08] pt-28 pb-12">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-12">
        {/* Massive Callout */}
        <div className="mb-24">
          <span className="text-xs uppercase tracking-widest text-muted/60 block mb-6">
            Nuove Collaborazioni
          </span>

          <h2 className="text-5xl sm:text-7xl lg:text-[8.5vw] font-light leading-[0.88] tracking-tight text-white mb-10">
            PARLIAMO DEL <br />
            <span className="text-muted/60">TUO PROSSIMO PROGETTO.</span>
          </h2>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm sm:text-base tracking-wider uppercase text-white hover:text-muted border-b border-white pb-1 transition-colors"
          >
            <span>Scrivici un messaggio</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Studio Info Grid — Clean sans-serif */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-16 border-t border-white/[0.08] text-sm">
          <div>
            <span className="text-muted/60 text-xs uppercase tracking-widest block mb-4">
              Studio
            </span>
            <p className="text-white mb-1">Forlì (FC), Romagna</p>
            <p className="text-muted text-xs">
              Ora locale: <span className="text-white">{localTime || "--:--"} CET</span>
            </p>
          </div>

          <div>
            <span className="text-muted/60 text-xs uppercase tracking-widest block mb-4">
              Discipline
            </span>
            <ul className="space-y-2 text-xs text-muted">
              <li>
                <Link href="/services/social-media" className="hover:text-white transition-colors">
                  01. Social Media
                </Link>
              </li>
              <li>
                <Link href="/services/foto" className="hover:text-white transition-colors">
                  02. Fotografia
                </Link>
              </li>
              <li>
                <Link href="/services/video" className="hover:text-white transition-colors">
                  03. Video &amp; Cinema
                </Link>
              </li>
              <li>
                <Link href="/services/ads" className="hover:text-white transition-colors">
                  04. Creatività Ads
                </Link>
              </li>
              <li>
                <Link href="/services/web-ecommerce" className="hover:text-white transition-colors">
                  05. Siti Web &amp; E-Commerce
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-muted/60 text-xs uppercase tracking-widest block mb-4">
              Contatto
            </span>
            <ul className="space-y-2 text-xs text-muted">
              <li>
                <a
                  href={`mailto:${AGENCY.email}`}
                  className="hover:text-white transition-colors"
                >
                  {AGENCY.email}
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Instagram &bull; {AGENCY.instagram}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-muted/60 text-xs uppercase tracking-widest block mb-4">
              Chi Siamo
            </span>
            <p className="text-muted leading-relaxed text-xs">
              Due creativi di vent&apos;anni a Forlì. Direzione visiva, produzioni cinema e foto, sviluppo web e modelli AI di frontiera, 100% in-house.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-xs text-muted/50">
          <div>
            &copy; {new Date().getFullYear()} {AGENCY.name} &bull; FORLÌ, ITALIA.
          </div>
          <div className="mt-4 sm:mt-0 uppercase tracking-wider">
            PRODUZIONE VISIVA IN-HOUSE
          </div>
        </div>
      </div>
    </footer>
  );
}
