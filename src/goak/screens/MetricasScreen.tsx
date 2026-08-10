const KPIS = [
  { label: "Faturamento líquido", value: "R$ 4.812,00", note: "Dinheiro real processado hoje" },
  { label: "CMV (custo de mercadoria)", value: "R$ 1.443,60", note: "30% do faturamento" },
  { label: "Margem de contribuição", value: "R$ 3.368,40", note: "Antes do custo do anúncio" },
];

const FUNIL = [
  { n: "1", label: "Visitas ao cardápio", value: "482 acessos", tone: "neutral" },
  { n: "2", label: "Intenções de compra", value: "96 (20%)", tone: "info" },
  { n: "3", label: "Pedidos pagos", value: "41 (8,5%)", tone: "ok" },
];

export function MetricasScreen() {
  return (
    <div className="space-y-4 p-4 text-[#1A1A1A]">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
          Painel administrativo
        </p>
        <h1 className="mt-0.5 text-lg font-bold tracking-tight">Métricas</h1>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {KPIS.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm"
          >
            <p className="text-[8px] font-semibold uppercase tracking-wider text-zinc-500">
              {kpi.label}
            </p>
            <p className="mt-1 font-mono text-sm font-bold tracking-tight text-[#1A1A1A]">
              {kpi.value}
            </p>
            <p className="mt-1 text-[8px] font-medium text-zinc-500">{kpi.note}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
          Funil de vendas líquido
        </p>
        <div className="mt-3 flex flex-col gap-1">
          {FUNIL.map((f, i) => (
            <div
              key={f.n}
              style={{ marginLeft: i * 16, marginRight: i * 16 }}
              className={`flex items-center justify-between rounded-lg border p-2.5 text-[10px] font-semibold ${
                f.tone === "ok"
                  ? "border-[#C8DCCE] bg-[#EAF2EC] text-[#2D5138]"
                  : f.tone === "info"
                    ? "border-blue-200/60 bg-[#EBF1F5] text-blue-950"
                    : "border-zinc-200/60 bg-[#F3F3F3] text-[#1A1A1A]"
              }`}
            >
              <span className="uppercase tracking-tight">
                {f.n}. {f.label}
              </span>
              <span className="rounded-md bg-white/70 px-2 py-0.5 font-mono">{f.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
          Direcionador de orçamento
        </p>
        <p className="mt-1.5 text-xs leading-relaxed text-zinc-700">
          <span className="font-bold text-[#E16349]">Açaí Turbinado</span> tem margem de 70% e custo
          de anúncio baixo — invista mais hoje.
        </p>
      </div>
    </div>
  );
}
