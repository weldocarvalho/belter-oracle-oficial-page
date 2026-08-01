import { ArrowRight, BookOpen, Camera, ListChecks, Sun, TrendingUp, User } from "lucide-react";
import type { Device } from "./types";
import { pick } from "./types";

function Sparkline() {
  return (
    <svg viewBox="0 0 80 24" className="h-6 w-20" aria-hidden>
      <path
        d="M2 20 L10 16 L18 18 L26 12 L34 14 L42 9 L50 11 L58 7 L66 9 L74 5"
        fill="none"
        stroke="var(--primary)"
        strokeWidth={1.5}
      />
    </svg>
  );
}

function MiniCard({
  icon: Icon,
  title,
  preview,
  accent = "primary",
}: {
  icon: typeof Sun;
  title: string;
  preview: React.ReactNode;
  accent?: "primary" | "muted";
}) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-2.5 shadow-[var(--shadow-bento)]">
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full border ${
          accent === "primary"
            ? "border-primary/30 bg-primary/10 text-primary"
            : "border-border bg-muted/40 text-muted-foreground"
        }`}
      >
        <Icon className="h-3.5 w-3.5" aria-hidden />
      </span>
      <div className="mt-2">
        <h3 className="font-display text-xs font-semibold text-sage-deep">{title}</h3>
        <div className="mt-0.5 text-[10px] text-muted-foreground">{preview}</div>
      </div>
    </div>
  );
}

export function HomeScreen({ device }: { device: Device }) {
  const grid = pick(device, "grid-cols-2", "grid-cols-3", "grid-cols-3");
  return (
    <div className="space-y-3">
      <div>
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Boa tarde</p>
        <h1 className="font-display text-xl text-sage-deep sm:text-2xl">Olá, Ana</h1>
      </div>

      <div className="flex items-center justify-between gap-2 rounded-2xl bg-primary p-3 text-primary-foreground">
        <div>
          <p className="text-xs font-semibold">Check-in de hoje</p>
          <p className="text-[10px] opacity-75">Como sua pele está hoje?</p>
        </div>
        <ArrowRight className="h-4 w-4 flex-none" aria-hidden />
      </div>

      <div className={`grid gap-2 ${grid}`}>
        <MiniCard icon={Sun} title="Hoje" preview="2/6 passos feitos" />
        <MiniCard icon={ListChecks} title="Rotina" preview="Manhã 3 · Noite 2" />
        <MiniCard
          icon={TrendingUp}
          title="Progresso"
          preview={
            <span className="flex items-center gap-1">
              <Sparkline />
              <span>82</span>
            </span>
          }
        />
        <MiniCard icon={Camera} title="Selfie" preview="2 no diário" />
        <MiniCard icon={User} title="Perfil" preview="Há 3 dias" accent="muted" />
        <MiniCard icon={BookOpen} title="Dicas" preview="Rotina acessível" accent="muted" />
      </div>
    </div>
  );
}
