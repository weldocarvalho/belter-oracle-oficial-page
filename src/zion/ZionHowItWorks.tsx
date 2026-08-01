import { HOW_IT_WORKS } from "./data";

const SPANS = ["md:bento-col-5", "md:bento-col-7", "md:bento-col-7", "md:bento-col-5"];

export function ZionHowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            Como funciona
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Em 4 passos, sua rotina está pronta.
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Da primeira resposta ao cartão de progresso, tudo pensado para gerar hábito.
          </p>
        </div>

        <ol className="bento-grid mt-12">
          {HOW_IT_WORKS.map((s, i) => (
            <li key={s.n} className={`bento-card bento-col-12 ${SPANS[i]}`}>
              <span className="font-display text-5xl font-semibold leading-none text-primary/30">
                {s.n}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-sage-deep">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
