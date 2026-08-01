import { Brain, Users, Rocket, Gem } from "lucide-react";

const VALUES = [
  {
    icon: Brain,
    title: "Inteligência de verdade",
    text: "Usamos IA onde ela agrega valor real — não como enfeite. Cada modelo é escolhido para melhorar a experiência do usuário de forma mensurável.",
  },
  {
    icon: Users,
    title: "Foco no usuário",
    text: "Design simples e honesto. Nenhum recurso desnecessário, nenhuma promessa exagerada. O produto fala por si.",
  },
  {
    icon: Rocket,
    title: "Evolução contínua",
    text: "Lançamos rápido, medimos, ajustamos. Nossos produtos crescem com base em dados reais de uso, não em achismo.",
  },
  {
    icon: Gem,
    title: "Qualidade técnica",
    text: "Arquiteturas modernas, código limpo e infraestrutura escalável. Construímos software que aguenta o crescimento.",
  },
];

export function WhyUs() {
  return (
    <section id="sobre" className="scroll-mt-16 border-y border-border/60 bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              Por que a Belter Oracle
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Uma empresa de tecnologia feita por quem ama construir.
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Acreditamos que bom software transforma vidas. Por isso dedicamos cada linha de código
              a resolver um problema real — com inteligência, simplicidade e um padrão de qualidade
              inegociável.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <v.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
