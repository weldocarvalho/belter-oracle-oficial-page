import type { ReactNode } from "react";
import { Home, ListChecks, Sun, TrendingUp, User } from "lucide-react";
import type { Device, ScreenId } from "./types";

const NAV = [
  { id: "home", label: "Início", icon: Home },
  { id: "checkin", label: "Hoje", icon: Sun },
  { id: "routine", label: "Rotina", icon: ListChecks },
  { id: "progress", label: "Progresso", icon: TrendingUp },
  { id: "profile", label: "Perfil", icon: User },
] as const;

export function AppShell({
  device,
  active,
  children,
}: {
  device: Device;
  active: ScreenId;
  children: ReactNode;
}) {
  return (
    <div className="flex h-full bg-background text-foreground">
      {device === "desktop" && <DesktopSidebar active={active} />}
      <div className="flex min-w-0 flex-1 flex-col">
        <AppTopBar />
        <div className="min-h-0 flex-1">
          <div className="h-full overflow-y-auto px-3 pb-3 pt-2">{children}</div>
        </div>
        {device !== "desktop" && <MobileNav active={active} />}
      </div>
    </div>
  );
}

function AppTopBar() {
  return (
    <header className="px-3 pb-1 pt-3">
      <div className="flex items-center justify-between rounded-xl border border-[var(--silver)]/40 bg-card px-3 py-2">
        <span className="flex items-center gap-2">
          <span
            aria-hidden
            className="flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 text-[9px] font-semibold uppercase text-primary"
          >
            Z
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.06em] text-sage-deep">
            Zion Skincare
          </span>
        </span>
        <span
          aria-hidden
          className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-[10px] font-semibold text-primary"
        >
          A
        </span>
      </div>
    </header>
  );
}

function DesktopSidebar({ active }: { active: ScreenId }) {
  return (
    <aside className="flex w-14 shrink-0 flex-col items-center gap-1.5 border-r border-[var(--silver)]/40 bg-card py-3">
      {NAV.map((it) => {
        const isActive = it.id === active;
        const Icon = it.icon;
        return (
          <span
            key={it.id}
            title={it.label}
            aria-hidden
            className={`flex h-9 w-9 items-center justify-center rounded-xl transition-colors ${
              isActive ? "bg-primary/10 text-primary" : "text-muted-foreground"
            }`}
          >
            <Icon className="h-4 w-4" />
          </span>
        );
      })}
    </aside>
  );
}

function MobileNav({ active }: { active: ScreenId }) {
  return (
    <nav aria-label="Navegação" className="px-3 pb-3 pt-1">
      <div
        className="grid gap-1 rounded-2xl border border-[var(--silver)]/40 bg-card p-1 shadow-[var(--shadow-soft)]"
        style={{ gridTemplateColumns: `repeat(${NAV.length}, minmax(0, 1fr))` }}
      >
        {NAV.map((it) => {
          const isActive = it.id === active;
          const Icon = it.icon;
          return (
            <span
              key={it.id}
              aria-hidden
              className={`relative flex flex-col items-center justify-center gap-1 rounded-xl px-1 py-1.5 text-[9px] font-medium ${
                isActive ? "bg-primary/10 text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className={`h-4 w-4 ${isActive ? "stroke-[2.25]" : "stroke-[1.75]"}`} />
              <span>{it.label}</span>
            </span>
          );
        })}
      </div>
    </nav>
  );
}
