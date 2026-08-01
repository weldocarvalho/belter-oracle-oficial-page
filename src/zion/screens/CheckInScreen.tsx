import { Save } from "lucide-react";

const SLIDERS = [
  { label: "Hidratação", value: 7, max: 10 },
  { label: "Oleosidade", value: 4, max: 10 },
  { label: "Vermelhidão", value: 3, max: 10 },
  { label: "Estresse", value: 6, max: 10 },
];

function Slider({ value, max }: { value: number; max: number }) {
  const pct = (value / max) * 100;
  return (
    <div className="relative mt-1.5 h-1.5 rounded-full bg-[var(--silver)]/50">
      <div
        className="absolute inset-y-0 left-0 rounded-full bg-primary"
        style={{ width: `${pct}%` }}
      />
      <span
        aria-hidden
        className="absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-primary bg-card shadow-soft"
        style={{ left: `calc(${pct}% - 7px)` }}
      />
    </div>
  );
}

export function CheckInScreen() {
  return (
    <div className="space-y-3">
      <div>
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Diário</p>
        <h1 className="font-display text-xl text-sage-deep sm:text-2xl">Check-in de hoje</h1>
      </div>

      <div className="rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-bento)]">
        <h2 className="font-display text-sm text-sage-deep">Como sua pele está hoje?</h2>
        <div className="mt-3 space-y-3">
          {SLIDERS.map((s) => (
            <div key={s.label}>
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-foreground">{s.label}</span>
                <span className="font-semibold text-sage-deep">{s.value}/10</span>
              </div>
              <Slider value={s.value} max={s.max} />
              <div className="mt-0.5 flex justify-between text-[9px] text-muted-foreground">
                <span>Baixo</span>
                <span>Alto</span>
              </div>
            </div>
          ))}

          <div>
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-foreground">Sono</span>
              <span className="font-semibold text-sage-deep">7,5h</span>
            </div>
            <Slider value={7.5} max={12} />
          </div>

          <div>
            <label className="text-xs font-medium text-foreground">Anotações</label>
            <div className="mt-1.5 rounded-xl border border-border bg-background px-3 py-2 text-xs text-muted-foreground">
              Como você se sente hoje?
            </div>
          </div>
        </div>

        <div className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground shadow-soft">
          <Save className="h-3.5 w-3.5" aria-hidden /> Salvar check-in
        </div>
      </div>
    </div>
  );
}
