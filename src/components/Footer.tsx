import { Hexagon } from "lucide-react";
import { Link } from "react-router-dom";
import { PRODUCTS, SITE } from "../data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-charcoal text-charcoal-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Hexagon className="h-4.5 w-4.5" aria-hidden />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-charcoal-foreground">
              Belter Oracle <span className="text-primary">Tech</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-charcoal-foreground/60">
            Produtos digitais com inteligência artificial, construídos com paixão e padrão de
            qualidade.
          </p>
        </div>

        <div>
          <h3 className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Produtos
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-charcoal-foreground/60">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                {p.status === "disponivel" ? (
                  p.internal ? (
                    <Link to={p.url} className="transition-colors hover:text-charcoal-foreground">
                      {p.name}
                    </Link>
                  ) : (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-charcoal-foreground"
                    >
                      {p.name}
                    </a>
                  )
                ) : (
                  <span className="cursor-default">{p.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            Contato
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-charcoal-foreground/60">
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="transition-colors hover:text-charcoal-foreground"
              >
                {SITE.email}
              </a>
            </li>
            <li>
              <a href={SITE.url} className="transition-colors hover:text-charcoal-foreground">
                {SITE.url.replace("https://", "")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-charcoal-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-charcoal-foreground/45 sm:flex-row sm:px-8">
          <p>© {year} Belter Oracle Tech. Todos os direitos reservados.</p>
          <p>Feito com inteligência.</p>
        </div>
      </div>
    </footer>
  );
}
