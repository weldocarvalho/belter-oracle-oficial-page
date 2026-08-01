import { Check, X } from "lucide-react";

const PROBLEMS = [
  {
    title: "Informação contraditória",
    text: "Cada influenciador, um protocolo. No fim, ninguém sabe o que aplicar de verdade.",
  },
  {
    title: "Rotinas genéricas",
    text: "Fórmulas prontas que ignoram o seu tipo de pele, sensibilidade e rotina.",
  },
  {
    title: "Custo escondido",
    text: "Produtos caros e desnecessários empilhados no armário, sem resultado.",
  },
];

const SOLUTIONS = [
  {
    title: "Personalização de verdade",
    text: "A IA considera tipo de pele, sensibilidade, clima, rotina e orçamento.",
  },
  {
    title: "Simplicidade honesta",
    text: "3 a 5 passos por período, com o quê, como e porquê de cada um.",
  },
  {
    title: "Que cabe no bolso",
    text: "Recomendações por faixa de preço: econômico, intermediário e premium.",
  },
];

export function ZionProblem() {
  return (
    <section className="bg-[var(--cream)]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            O problema
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Por que a maioria das rotinas falha?
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Porque não foram feitas para você. O Zion resolve isso.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-bento)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-clay/30 bg-clay/10 text-clay">
                <X className="h-4 w-4" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SOLUTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                <Check className="h-4 w-4" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-sage-deep">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
