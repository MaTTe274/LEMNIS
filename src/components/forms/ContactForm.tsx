"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";

const DISCIPLINES = [
  "Social Media",
  "Fotografia",
  "Video & Cinema",
  "Creatività Ads",
  "Siti Web & E-Commerce",
  "Direzione Completa",
];

const BUDGETS = ["Meno di €2.000", "€2.000 — €5.000", "€5.000 — €10.000", "Oltre €10.000"];

export default function ContactForm() {
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleDiscipline = (item: string) => {
    setSelectedDisciplines((prev) =>
      prev.includes(item) ? prev.filter((d) => d !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-20 text-center space-y-4"
        >
          <div className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center mx-auto mb-4">
            <Check className="w-5 h-5" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white">
            Messaggio Inviato.
          </h3>
          <p className="text-muted text-sm max-w-md mx-auto leading-relaxed">
            Abbiamo ricevuto la tua richiesta. Ti risponderemo direttamente entro 24 ore lavorative.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setSelectedDisciplines([]);
              setSelectedBudget("");
              setFormData({ name: "", company: "", email: "", message: "" });
            }}
            className="text-xs tracking-widest uppercase text-muted hover:text-white border-b border-muted hover:border-white pb-0.5 pt-4 transition-colors"
          >
            Invia un altro messaggio
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Step 1: Clean Disciplines Selection */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-muted/60 block">
              1. Ambiti di interesse
            </span>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {DISCIPLINES.map((discipline) => {
                const isSelected = selectedDisciplines.includes(discipline);
                return (
                  <button
                    type="button"
                    key={discipline}
                    onClick={() => toggleDiscipline(discipline)}
                    className={`px-4 py-2 rounded-full text-xs tracking-wide transition-all border ${
                      isSelected
                        ? "bg-white text-black border-white font-medium"
                        : "bg-transparent text-muted/80 border-white/10 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {discipline}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Clean Budget Selection */}
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-muted/60 block">
              2. Budget stimato
            </span>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {BUDGETS.map((b) => (
                <button
                  type="button"
                  key={b}
                  onClick={() => setSelectedBudget(b)}
                  className={`px-4 py-2 rounded-full text-xs transition-all border ${
                    selectedBudget === b
                      ? "bg-white text-black border-white font-medium"
                      : "bg-transparent text-muted/80 border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Pure Underline Inputs */}
          <div className="space-y-8 pt-4">
            <span className="text-xs uppercase tracking-widest text-muted/60 block">
              3. Recapiti e dettagli
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-b border-white/10 focus-within:border-white transition-colors pb-2">
                <label className="text-xs uppercase tracking-wider text-muted/60 block mb-1">
                  Nome *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Il tuo nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent text-white placeholder-muted/30 focus:outline-none text-base"
                />
              </div>

              <div className="border-b border-white/10 focus-within:border-white transition-colors pb-2">
                <label className="text-xs uppercase tracking-wider text-muted/60 block mb-1">
                  Azienda o Brand
                </label>
                <input
                  type="text"
                  placeholder="Nome azienda"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-transparent text-white placeholder-muted/30 focus:outline-none text-base"
                />
              </div>
            </div>

            <div className="border-b border-white/10 focus-within:border-white transition-colors pb-2">
              <label className="text-xs uppercase tracking-wider text-muted/60 block mb-1">
                Email *
              </label>
              <input
                type="email"
                required
                placeholder="nome@dominio.it"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent text-white placeholder-muted/30 focus:outline-none text-base"
              />
            </div>

            <div className="border-b border-white/10 focus-within:border-white transition-colors pb-2">
              <label className="text-xs uppercase tracking-wider text-muted/60 block mb-1">
                Note o Breve Descrizione
              </label>
              <textarea
                rows={2}
                placeholder="Raccontaci brevemente di cosa hai bisogno..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent text-white placeholder-muted/30 focus:outline-none text-base resize-none"
              />
            </div>
          </div>

          {/* Submit Link */}
          <div className="pt-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white hover:text-muted border-b border-white pb-1 transition-colors"
            >
              <span>Invia Richiesta di Contatto</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
