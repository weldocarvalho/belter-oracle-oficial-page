import { FEATURES } from "./data";
import { Icon } from "./icons";

export function ZionFeatures() {
  return (
    <section id="recursos" className="scroll-mt-16 bg-[var(--cream)]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            Recursos
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Feito para gerar hábito, não hype.
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Funcionalidades reais — do motor de IA à rotina diária.
          </p>
        </div>

        <div className="bento-grid mt-12">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className={`bento-card bento-col-12 sm:bento-col-6 ${
                i % 4 === 3 ? "lg:bento-col-5" : "lg:bento-col-7"
              }`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                <Icon name={f.icon} className="h-4 w-4" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-sage-deep">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
