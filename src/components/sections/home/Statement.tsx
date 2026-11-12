"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { appleEase } from "@/lib/animations";

export default function Statement() {
  return (
    <section className="py-32 sm:py-44 px-6 sm:px-12 max-w-[1720px] mx-auto border-b border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Label & Editorial Set Photo */}
        <div className="lg:col-span-4 space-y-8">
          <span className="text-xs tracking-wider text-muted uppercase block">
            Manifesto
          </span>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, ease: appleEase }}
            className="relative aspect-[3/4] rounded-lg overflow-hidden bg-neutral-900 border border-white/[0.06] group"
          >
            <Image
              src="/images/romagna-sanctuary.jpg"
              alt="Territorio e Radici &bull; Romagna"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <span className="text-xs uppercase tracking-wider text-white/90">
                Territorio &bull; Colline di Romagna
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Large Manifesto Quote and 3 Columns */}
        <div className="lg:col-span-8 space-y-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: appleEase }}
            className="text-3xl sm:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-white/95"
          >
            Non esistono contenuti neutri: ciò che non suscita una reazione immediata si dissolve nell&apos;istante in cui compare sullo schermo. Eliminiamo il superfluo per dare spazio solo a immagini che possiedono peso, ritmo e chiarezza.
          </motion.p>

          {/* Three Clean Columns Without Card Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-12 border-t border-white/[0.08] text-sm leading-relaxed text-muted">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: appleEase }}
              className="space-y-2"
            >
              <span className="text-xs text-white block uppercase tracking-wider font-medium">
                01 &bull; Autenticità
              </span>
              <p>
                Rifiutiamo i format preconfezionati. Ogni inquadratura nasce dalle coordinate reali del brand e dalla sua materia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: appleEase }}
              className="space-y-2"
            >
              <span className="text-xs text-white block uppercase tracking-wider font-medium">
                02 &bull; Filiera Diretta
              </span>
              <p>
                Nessun intermediario a fare da filtro. Il dialogo avviene direttamente con chi si occupa della produzione e della post.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: appleEase }}
              className="space-y-2"
            >
              <span className="text-xs text-white block uppercase tracking-wider font-medium">
                03 &bull; Rigore Visivo
              </span>
              <p>
                Luce controllata, composizioni stabili e sound design calibrato al millisecondo per trasmettere autorevolezza.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
