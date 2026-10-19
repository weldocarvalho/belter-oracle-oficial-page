import { Github, Hexagon, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { ZION } from "./data";
import { SITE } from "../data";

export function ZionFooter() {
  const year = new Date().getFullYear();
  const d = ZION.developer;
  return (
    <footer className="border-t border-border/60 bg-charcoal text-charcoal-foreground">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Hexagon className="h-4.5 w-4.5" aria-hidden />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-charcoal-foreground">
                Belter Oracle <span className="text-primary">Tech</span>
              </span>
            </div>
            <p className="mt-3 max-w-md text-sm text-charcoal-foreground/60">
              Projeto idealizado e construído por{" "}
              <span className="font-medium text-charcoal-foreground">{d.name}</span> — {d.role}.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <a
                href={d.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-charcoal-foreground/25 px-4 py-2 text-sm text-charcoal-foreground/80 transition hover:border-charcoal-foreground/70 hover:text-charcoal-foreground"
              >
                <Github className="h-4 w-4" aria-hidden /> GitHub
              </a>
              <a
                href={d.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-charcoal-foreground/25 px-4 py-2 text-sm text-charcoal-foreground/80 transition hover:border-charcoal-foreground/70 hover:text-charcoal-foreground"
              >
                <Linkedin className="h-4 w-4" aria-hidden /> LinkedIn
              </a>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-charcoal-foreground/45">
              <Link to="/" className="transition hover:text-charcoal-foreground">
                Voltar ao site
              </Link>
              <Link to={SITE.privacyPath} className="transition hover:text-charcoal-foreground">
                Política de Privacidade
              </Link>
              <a
                href={ZION.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-charcoal-foreground"
              >
                Acessar o app
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-charcoal-foreground/15 pt-6 text-xs text-charcoal-foreground/45 sm:flex-row">
          <p>© {year} Belter Oracle Tech. Todos os direitos reservados.</p>
          <p>{ZION.name} · Produto Belter Oracle Tech</p>
        </div>
      </div>
    </footer>
  );
}
