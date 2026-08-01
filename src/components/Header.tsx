import { Hexagon } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Hexagon className="h-4.5 w-4.5" aria-hidden />
          </span>
          <span className="font-display text-base font-semibold tracking-tight text-foreground">
            Belter Oracle <span className="text-primary">Tech</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-foreground/70 md:flex">
          <a href="#produtos" className="transition hover:text-foreground">
            Produtos
          </a>
          <a href="#sobre" className="transition hover:text-foreground">
            Sobre
          </a>
          <a href="#contato" className="transition hover:text-foreground">
            Contato
          </a>
        </nav>

        <a
          href="#produtos"
          className="inline-flex items-center border border-primary bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-primary-foreground transition hover:bg-transparent hover:text-primary"
        >
          Conheça os produtos
        </a>
      </div>
    </header>
  );
}
