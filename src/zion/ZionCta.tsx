import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ZION } from "./data";

export function ZionCta() {
  return (
    <section className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-charcoal px-8 py-14 text-center text-charcoal-foreground sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(600px 300px at 50% -20%, color-mix(in oklab, var(--primary) 45%, transparent), transparent 70%)",
            }}
          />
          <div className="relative">
            <h2 className="font-display text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Quer ver o Zion funcionando?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-charcoal-foreground/70">
              Acesse o aplicativo real, veja a rotina gerada por IA e explore o produto em ação.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={ZION.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground transition hover:bg-transparent hover:text-primary"
              >
                Acessar o app <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 border border-charcoal-foreground/30 bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-charcoal-foreground transition hover:border-charcoal-foreground/70"
              >
                Ver todos os produtos <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
