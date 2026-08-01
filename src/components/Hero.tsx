import { Sparkles, ArrowRight, ShieldCheck, Cpu } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 480px at 85% -10%, color-mix(in oklab, var(--primary) 16%, transparent), transparent 60%), radial-gradient(700px 420px at -10% 20%, color-mix(in oklab, var(--clay) 14%, transparent), transparent 60%)",
        }}
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-28">
        <div>
          <span className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            <Sparkles className="h-3.5 w-3.5" aria-hidden /> Empresa de tecnologia
          </span>
          <h1 className="mt-6 font-display text-balance text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Produtos digitais que unem <span className="text-primary">inteligência</span> e{" "}
            <span className="text-primary">resultado</span>
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg text-muted-foreground">
            {`A Belter Oracle Tech desenvolve SaaS inteligentes que resolvem problemas reais do
            dia a dia. Cada produto nasce de uma ideia simples, evolui com dados e IA, e entrega
            valor desde o primeiro uso.`}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#produtos"
              className="inline-flex items-center justify-center gap-2 border border-primary bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground shadow-[var(--shadow-glow)] transition hover:bg-transparent hover:text-primary"
            >
              Conheça nossos produtos <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center border border-border bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-foreground transition hover:border-primary/50 hover:text-primary"
            >
              Nossa história
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-primary" aria-hidden /> 3 produtos em operação
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" aria-hidden /> IA no centro de tudo
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" aria-hidden /> Feito para escalar
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/15 to-[var(--charcoal)]/10 blur-2xl" />
          <div className="rounded-[2rem] border border-[var(--silver)]/30 bg-card p-6 shadow-[var(--shadow-bento)] sm:p-8">
            <div className="flex items-center gap-3 border-b border-border/60 pb-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <HexagonGlyph />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-foreground">
                  Belter Oracle Tech
                </p>
                <p className="text-xs text-muted-foreground">Ecossistema de produtos SaaS</p>
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              {[
                { label: "Zion Skincare", value: "Disponível", tone: "ok" },
                { label: "Gòak Tech", value: "Disponível", tone: "ok" },
                { label: "Desviciar", value: "Em breve", tone: "soon" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-xl border border-border/60 bg-background px-4 py-3"
                >
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                  <span
                    className={
                      item.tone === "ok"
                        ? "inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                        : "inline-flex items-center gap-1.5 rounded-full bg-[var(--clay)]/10 px-3 py-1 text-xs font-semibold text-[var(--clay)]"
                    }
                  >
                    {item.tone === "ok" && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HexagonGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M12 2 21 7v10l-9 5-9-5V7l9-5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
