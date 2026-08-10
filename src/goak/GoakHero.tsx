import { ArrowRight, BarChart3, CreditCard, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { DeviceFrame } from "./screens/DeviceFrame";
import { CheckoutScreen } from "./screens/CheckoutScreen";

export function GoakHero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1000px 500px at 80% -10%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 60%), radial-gradient(800px 400px at -10% 30%, color-mix(in oklab, var(--clay) 14%, transparent), transparent 60%)",
        }}
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            Produto Belter Oracle Tech
          </span>
          <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            O ecossistema de vendas e gestão para{" "}
            <span className="text-primary">delivery e restaurantes</span>
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg text-muted-foreground">
            O Gòak Tech é um SaaS completo que junta cardápio digital, checkout próprio e
            inteligência financeira num só painel — do clique no anúncio ao lucro real de cada
            prato.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 border border-primary bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground shadow-[var(--shadow-glow)] transition hover:bg-transparent hover:text-primary"
            >
              Como funciona <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center border border-border bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-foreground transition hover:border-primary/50 hover:text-primary"
            >
              Voltar à Belter
            </Link>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-primary" aria-hidden /> Checkout Pix e cartão
              próprio
            </li>
            <li className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-primary" aria-hidden /> Funil com CMV e lucro real
            </li>
            <li className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-primary" aria-hidden /> Cozinha e entrega ao vivo
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/15 to-[var(--charcoal)]/10 blur-2xl" />
          <DeviceFrame device="mobile" path="goaktech.com.br/loja/checkout">
            <CheckoutScreen />
          </DeviceFrame>
        </div>
      </div>
    </section>
  );
}
