import { STACK } from "./data";
import { Icon } from "./icons";

export function GoakStack() {
  return (
    <section id="tecnologias" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            Tecnologias
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Uma stack moderna e escalável.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {STACK.map((g) => (
            <div
              key={g.group}
              className="rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-bento)]"
            >
              <h3 className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                {g.group}
              </h3>
              <ul className="mt-5 space-y-4">
                {g.items.map((it) => (
                  <li key={it.name} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-primary">
                      <Icon name={it.icon} className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{it.name}</p>
                      <p className="text-xs leading-relaxed text-muted-foreground">{it.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
