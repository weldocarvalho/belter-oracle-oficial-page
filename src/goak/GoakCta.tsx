import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { GOAK } from "./data";

export function GoakCta() {
  return (
    <section className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#18181B] px-8 py-14 text-center text-[#F8F8F8] sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(600px 300px at 50% -20%, color-mix(in oklab, #E16349 45%, transparent), transparent 70%)",
            }}
          />
          <div className="relative">
            <h2 className="font-display text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Quer ver o Gòak Tech funcionando?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-[#F8F8F8]/70">
              Acesse o aplicativo real, veja o painel de métricas e explore o produto em ação.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={GOAK.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#E16349] bg-[#E16349] px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-transparent hover:text-[#E16349]"
              >
                Acessar o app <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 border border-[#F8F8F8]/30 bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#F8F8F8] transition hover:border-[#F8F8F8]/70"
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
