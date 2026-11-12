import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center px-6 sm:px-12 max-w-[1720px] mx-auto pt-36 pb-20">
      <div className="space-y-6">
        <span className="text-xs tracking-wider text-muted/60 uppercase">
          404 &bull; Pagina Non Trovata
        </span>
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-light tracking-tight text-white leading-[0.88]">
          PAGINA INESISTENTE.
        </h1>
        <p className="text-muted text-base sm:text-lg max-w-lg">
          La risorsa richiesta è stata spostata o non è più disponibile.
        </p>

        <div className="pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase border-b border-white pb-1 text-white hover:text-muted transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Ritorna alla Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
