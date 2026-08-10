import { useState } from "react";
import { DeviceFrame } from "./screens/DeviceFrame";
import { SCREENS, type ScreenId } from "./screens/types";
import { MetricasScreen } from "./screens/MetricasScreen";
import { CozinhaScreen } from "./screens/CozinhaScreen";
import { PagamentosScreen } from "./screens/PagamentosScreen";
import { AcompanhamentoScreen } from "./screens/AcompanhamentoScreen";
import { CheckoutScreen } from "./screens/CheckoutScreen";

function ScreenContent({ id }: { id: ScreenId }) {
  if (id === "metricas") return <MetricasScreen />;
  if (id === "cozinha") return <CozinhaScreen />;
  if (id === "pagamentos") return <PagamentosScreen />;
  if (id === "acompanhamento") return <AcompanhamentoScreen />;
  return <CheckoutScreen />;
}

export function GoakScreens() {
  const [screenId, setScreenId] = useState<ScreenId>("metricas");
  const screen = SCREENS.find((s) => s.id === screenId) ?? SCREENS[0];

  return (
    <section id="telas" className="scroll-mt-16">
      <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            Telas do app
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tudo pensado na melhor gestão e na melhor experiência do usuário.
          </h2>
        </div>

        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-1.5 rounded-full border border-border bg-cream p-1">
            {SCREENS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setScreenId(s.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  screenId === s.id
                    ? "bg-card text-sage-deep shadow-soft"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <span className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
            {screen.device === "desktop"
              ? "Painel administrativo (versão Desktop)"
              : "Experiência do cliente (versão Mobile)"}
          </span>

          <DeviceFrame device={screen.device} path={screen.path}>
            <ScreenContent id={screenId} />
          </DeviceFrame>
        </div>
      </div>
    </section>
  );
}
