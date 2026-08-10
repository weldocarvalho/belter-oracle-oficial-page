import { ENGINEERING } from "./data";
import { Icon } from "./icons";

export function GoakEngineering() {
  return (
    <section id="engenharia" className="scroll-mt-16 bg-[var(--cream)]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            Engenharia
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Por trás dos panos.
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Decisões técnicas que tornam o produto seguro e confiável.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {ENGINEERING.map((e) => (
            <div
              key={e.title}
              className="rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-bento)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-charcoal text-charcoal-foreground">
                <Icon name={e.icon} className="h-4 w-4" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-sage-deep">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
