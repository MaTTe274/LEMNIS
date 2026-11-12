"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/services", label: "Servizi" },
  { href: "/work", label: "Lavori" },
  { href: "/about", label: "Chi Siamo" },
  { href: "/contact", label: "Contatti" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "py-4 bg-[#080808]/90 backdrop-blur-md border-b border-white/[0.06]"
            : "py-6 bg-[#080808]/40 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-[1720px] mx-auto px-6 sm:px-12 flex items-center justify-between">
          {/* Logo mark */}
          <Link
            href="/"
            className="flex items-center gap-2 text-foreground text-sm tracking-wider uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-white transition-transform duration-300 hover:scale-125" />
            <span className="font-semibold tracking-[0.18em] text-white">LEMNIS</span>
            <span className="text-muted/60 text-xs normal-case tracking-normal hidden sm:inline ml-1">
              Forlì
            </span>
          </Link>

          {/* Desktop Nav — Clean, no code font */}
          <nav className="hidden md:flex items-center space-x-10 text-xs uppercase tracking-widest">
            {NAV_LINKS.map((link) => {
              const isActive = pathname ? pathname.startsWith(link.href) : false;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors duration-200 relative py-1 ${
                    isActive ? "text-white font-medium" : "text-muted hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-white"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Clean Contact Action & Mobile Toggle */}
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-white/80 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
            >
              <span>Inizia un Progetto</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-1 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-2xl flex flex-col justify-between px-8 py-24 md:hidden"
          >
            <div className="space-y-8">
              <span className="text-xs tracking-wider text-muted/60 uppercase">
                Menu
              </span>
              <div className="flex flex-col space-y-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-3xl font-light tracking-tight text-white hover:text-muted transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/[0.08] space-y-2 text-xs text-muted">
              <p className="uppercase tracking-wider">Forlì, Romagna</p>
              <p className="text-white">studio@lemnis.it</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
