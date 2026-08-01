import { AlertCircle, Check, Moon, Sun } from "lucide-react";
import type { Device } from "./types";
import { pick } from "./types";

const STEPS = [
  {
    n: 1,
    title: "Limpeza suave",
    focus: "Gel de limpeza low-pH",
    what: "Aplique em pele úmida e massageie por 40 segundos.",
    how: "Use água fria ou morna e seque sem esfregar.",
    why: "Remove impurezas sem agredir a barreira da pele.",
  },
  {
    n: 2,
    title: "Hidratante com ácido hialurônico",
    focus: "Hialurônico + niacinamida",
    what: "Espalhe uma quantidade do tamanho de uma ervilha.",
    how: "Aplique no rosto e pescoço com a pele levemente úmida.",
    why: "Hidratação profunda que ajuda a controlar a oleosidade.",
  },
  {
    n: 3,
    title: "Protetor solar FPS 30+",
    focus: "Toque seco",
    what: "Duas linhas do produto em todo o rosto.",
    how: "Reaplique a cada 2 horas em exposição ao sol.",
    why: "Proteção diária — o passo mais importante da manhã.",
  },
];

const DONE: Record<number, boolean> = { 1: true, 2: false, 3: false };

export function RoutineScreen({ device }: { device: Device }) {
  const cols = pick(device, "grid-cols-1", "grid-cols-1", "grid-cols-2");
  return (
    <div className="space-y-3">
      <div>
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Sua rotina</p>
        <h1 className="font-display text-xl text-sage-deep sm:text-2xl">Rotina da Ana</h1>
      </div>

      <p className="rounded-2xl border border-primary-soft bg-primary-soft/20 p-2.5 text-[11px] leading-relaxed text-foreground">
        Rotina para pele oleosa, com foco em controle de oleosidade e manchas. Comece devagar e
        observe como sua pele reage.
      </p>

      <div className="flex flex-wrap gap-1">
        {["Pele oleosa", "Sens. média", "Iniciante", "💰 Econômico"].map((c) => (
          <span
            key={c}
            className="inline-flex items-center rounded-full border border-border bg-cream px-2 py-0.5 text-[10px] font-medium text-foreground/80"
          >
            {c}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-1 rounded-full border border-border bg-cream p-1">
        <div className="flex items-center justify-center gap-1.5 rounded-full bg-card px-2 py-1.5 text-[11px] font-medium text-sage-deep shadow-soft">
          <Sun className="h-3.5 w-3.5 text-primary" aria-hidden /> Manhã
          <span className="rounded-full bg-primary-soft/50 px-1.5 py-0.5 text-[9px] font-semibold text-sage-deep">
            2/3
          </span>
        </div>
        <div className="flex items-center justify-center gap-1.5 rounded-full px-2 py-1.5 text-[11px] text-muted-foreground">
          <Moon className="h-3.5 w-3.5" aria-hidden /> Noite
          <span className="rounded-full bg-background px-1.5 py-0.5 text-[9px] font-semibold text-muted-foreground">
            1/2
          </span>
        </div>
      </div>

      <div className={`grid gap-2 ${cols}`}>
        {STEPS.map((s) => (
          <div
            key={s.n}
            className={`rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-bento)] ${
              DONE[s.n] ? "border-primary/50" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                  {s.n}
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Passo {s.n}
                  </p>
                  <h3 className="font-display text-[13px] leading-tight text-sage-deep">
                    {s.title}
                  </h3>
                  <p className="text-[10px] text-muted-foreground">{s.focus}</p>
                </div>
              </div>
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full border ${
                  DONE[s.n]
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground"
                }`}
              >
                <Check className="h-3.5 w-3.5" aria-hidden />
              </span>
            </div>
            <dl className="mt-2.5 space-y-1.5 text-[11px] leading-relaxed">
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-clay">
                  O que fazer
                </dt>
                <dd className="text-foreground">{s.what}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-clay">
                  Como aplicar
                </dt>
                <dd className="text-muted-foreground">{s.how}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-clay">
                  Por que importa
                </dt>
                <dd className="text-muted-foreground">{s.why}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-2 rounded-xl border border-warning/40 bg-warning/10 p-2.5 text-[11px] text-foreground">
        <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-warning" aria-hidden />
        <p>
          <span className="font-medium">Alergias:</span> evite produtos com fragrância e álcool em
          alta concentração.
        </p>
      </div>
    </div>
  );
}
