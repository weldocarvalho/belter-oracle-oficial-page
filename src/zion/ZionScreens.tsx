import { useState } from "react";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import type { Device, ScreenId } from "./screens/types";
import { DeviceFrame } from "./screens/DeviceFrame";
import { AppShell } from "./screens/AppChrome";
import { HomeScreen } from "./screens/HomeScreen";
import { RoutineScreen } from "./screens/RoutineScreen";
import { CheckInScreen } from "./screens/CheckInScreen";
import { ProgressScreen } from "./screens/ProgressScreen";

const SCREENS: { id: ScreenId; label: string }[] = [
  { id: "home", label: "Início" },
  { id: "routine", label: "Rotina" },
  { id: "checkin", label: "Check-in" },
  { id: "progress", label: "Progresso" },
];

const DEVICES: { id: Device; label: string; icon: typeof Smartphone }[] = [
  { id: "mobile", label: "Celular", icon: Smartphone },
  { id: "tablet", label: "Tablet", icon: Tablet },
  { id: "desktop", label: "Desktop", icon: Monitor },
];

function ScreenContent({ id, device }: { id: ScreenId; device: Device }) {
  if (id === "home") return <HomeScreen device={device} />;
  if (id === "routine") return <RoutineScreen device={device} />;
  if (id === "checkin") return <CheckInScreen />;
  return <ProgressScreen />;
}

export function ZionScreens() {
  const [screen, setScreen] = useState<ScreenId>("home");
  const [device, setDevice] = useState<Device>("mobile");

  return (
    <section id="telas" className="scroll-mt-16">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            Telas do app
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Um app que se adapta a cada tela.
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Reconstrução fiel das principais telas, com o mesmo layout do produto — no celular, no
            tablet e no desktop.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-1.5 rounded-full border border-border bg-cream p-1">
            {SCREENS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setScreen(s.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  screen === s.id
                    ? "bg-card text-sage-deep shadow-soft"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="flex gap-1.5 rounded-full border border-border bg-cream p-1 lg:hidden">
            {DEVICES.map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => setDevice(d.id)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  device === d.id
                    ? "bg-card text-sage-deep shadow-soft"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <d.icon className="h-4 w-4" aria-hidden />
                {d.label}
              </button>
            ))}
          </div>

          <div className="hidden w-full items-start justify-center gap-8 lg:flex">
            {DEVICES.map((d) => (
              <DeviceFrame key={d.id} device={d.id}>
                <AppShell device={d.id} active={screen}>
                  <ScreenContent id={screen} device={d.id} />
                </AppShell>
              </DeviceFrame>
            ))}
          </div>

          <div className="w-full lg:hidden">
            <DeviceFrame device={device}>
              <AppShell device={device} active={screen}>
                <ScreenContent id={screen} device={device} />
              </AppShell>
            </DeviceFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
