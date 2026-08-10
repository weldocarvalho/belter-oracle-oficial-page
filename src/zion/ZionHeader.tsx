import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ZION } from "./data";

const NAV = [
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#telas", label: "Telas" },
  { href: "#engenharia", label: "Engenharia" },
];

export function ZionHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/50 bg-primary/10 font-display text-base font-bold text-primary">
            Z
          </span>
          <span className="hidden font-display text-base font-semibold tracking-tight text-foreground sm:inline">
            Zion <span className="text-primary">Skincare</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-foreground/70 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="transition hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="hidden items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition hover:text-foreground sm:inline-flex"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden /> Belter
          </Link>
          <a
            href={ZION.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-primary bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-primary-foreground transition hover:bg-transparent hover:text-primary"
          >
            Acessar o app <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </header>
  );
}
