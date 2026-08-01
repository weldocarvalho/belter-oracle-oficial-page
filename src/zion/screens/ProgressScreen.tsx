import { CalendarCheck, Flame, Lock, Sparkles, Trophy } from "lucide-react";

const TILES = [
  { icon: Flame, label: "Streak atual", value: "6 dias" },
  { icon: Trophy, label: "Melhor streak", value: "12 dias" },
  { icon: CalendarCheck, label: "Dias perfeitos", value: "8" },
  { icon: null, label: "Consistência", value: "72%" },
];

const WEEKDAYS = ["D", "S", "T", "Q", "Q", "S", "S"];
const WEEK_DATES = ["26", "27", "28", "29", "30", "31", "01"];
const WEEK_COLORS = [
  "bg-primary",
  "bg-primary/70",
  "bg-primary-soft",
  "bg-primary",
  "bg-primary-soft",
  "bg-primary/70",
  "bg-primary",
];

export function ProgressScreen() {
  return (
    <div className="space-y-3">
      <div>
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Progresso</p>
        <h1 className="font-display text-xl text-sage-deep sm:text-2xl">Sua evolução</h1>
      </div>

      <div className="rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-bento)]">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-sm text-sage-deep">Skin Score</h2>
          <div className="text-right">
            <p className="text-[9px] uppercase tracking-wider text-muted-foreground">Hoje</p>
            <p className="font-display text-lg text-sage-deep">82</p>
          </div>
        </div>
        <p className="mt-0.5 text-[10px] text-muted-foreground">Últimos 14 dias</p>
        <svg
          viewBox="0 0 320 90"
          className="mt-1.5 w-full"
          role="img"
          aria-label="Gráfico do Skin Score"
        >
          {[0, 25, 50, 75, 100].map((g) => {
            const y = 74 - (g / 100) * 66;
            return (
              <line
                key={g}
                x1={8}
                x2={312}
                y1={y}
                y2={y}
                stroke="var(--border)"
                strokeDasharray="2 4"
                strokeWidth={0.5}
              />
            );
          })}
          <path
            d="M8 40 L32 44 L56 36 L80 38 L104 30 L128 32 L152 26 L176 28 L200 20 L224 22 L248 16 L272 18 L296 12 L312 14"
            fill="none"
            stroke="var(--primary)"
            strokeWidth={2}
          />
          {[
            [8, 40],
            [104, 30],
            [200, 20],
            [312, 14],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r={2.5} fill="var(--primary)" />
          ))}
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {TILES.map((t) => (
          <div key={t.label} className="rounded-xl border border-border bg-cream/60 p-2.5">
            <div className="flex items-center gap-1.5 text-clay">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-card">
                {t.icon ? (
                  <t.icon className="h-3 w-3" aria-hidden />
                ) : (
                  <span className="text-[8px] font-bold">%</span>
                )}
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-wider">{t.label}</span>
            </div>
            <p className="mt-1 font-display text-base leading-tight text-sage-deep">{t.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-bento)]">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-clay">Esta semana</p>
        <div className="mt-2 grid grid-cols-7 gap-1">
          {WEEKDAYS.map((d, i) => (
            <div key={`${d}-${i}`} className="flex flex-col items-center gap-1">
              <span className="text-[9px] text-muted-foreground">{d}</span>
              <div
                className={`h-7 w-full rounded-md ${WEEK_COLORS[i]} ${
                  i === 6 ? "ring-2 ring-sage-deep ring-offset-1 ring-offset-card" : ""
                }`}
              />
              <span className="text-[9px] text-muted-foreground">{WEEK_DATES[i]}</span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[10px] font-semibold uppercase tracking-wider text-clay">
          Conquistas
        </p>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <Achievement label="7 dias seguidos" achieved />
          <Achievement label="30 dias seguidos" />
          <Achievement label="Rotina refinada" achieved />
          <Achievement label="10 selfies" />
        </div>
      </div>
    </div>
  );
}

function Achievement({ label, achieved }: { label: string; achieved?: boolean }) {
  return (
    <div
      className={`flex flex-col items-center gap-1 rounded-xl border p-2 text-center ${
        achieved ? "border-primary/30 bg-primary/5" : "border-border bg-cream/40 opacity-60"
      }`}
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full ${
          achieved ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"
        }`}
      >
        {achieved ? (
          <Sparkles className="h-3 w-3" aria-hidden />
        ) : (
          <Lock className="h-2.5 w-2.5" aria-hidden />
        )}
      </span>
      <span className="text-[9px] leading-tight text-foreground">{label}</span>
    </div>
  );
}
