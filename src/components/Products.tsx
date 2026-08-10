import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { PRODUCTS, type Product } from "../data";

const STATUS_STYLES: Record<Product["status"], string> = {
  disponivel: "bg-primary/10 text-primary",
  "em-breve": "bg-[var(--clay)]/10 text-[var(--clay)]",
};

export function Products() {
  return (
    <section id="produtos" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            Nossos produtos
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Três ideias. Três soluções. Um só padrão de qualidade.
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Cada produto é um SaaS independente, com identidade própria e a mesma obsessão por
            simplicidade e resultado.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PRODUCTS.map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-bento)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 font-display text-lg font-bold text-primary">
                  {p.name.charAt(0)}
                </span>
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${STATUS_STYLES[p.status]}`}
                >
                  {p.statusLabel}
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{p.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{p.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

              <ul className="mt-5 space-y-2">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-border/60 pt-5">
                {p.status === "disponivel" ? (
                  p.internal ? (
                    <Link
                      to={p.url}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:gap-2.5"
                    >
                      Conhecer {p.name} <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </Link>
                  ) : (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:gap-2.5"
                    >
                      Conhecer {p.name} <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </a>
                  )
                ) : (
                  <span className="text-sm font-medium text-muted-foreground">
                    Em breve você conhecerá
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
