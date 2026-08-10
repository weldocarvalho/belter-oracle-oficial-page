import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { GOAK } from "./data";

export function GoakCta() {
  return (
    <section className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#E4E4E7] bg-[#F3F3F3] px-8 py-14 text-center text-[#1A1A1A] sm:px-12 sm:py-16">
          <div className="relative">
            <h2 className="font-display text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Quer ver o Gòak Tech funcionando?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-[#1A1A1A]/70">
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
                className="inline-flex items-center gap-2 border border-[#1A1A1A]/20 bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-[#1A1A1A] transition hover:border-[#1A1A1A]/40"
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
