const ETAPAS = [
  { titulo: "Pedido recebido", concluida: true },
  { titulo: "Em preparo", concluida: true },
  { titulo: "Saiu para entrega", concluida: true, ativa: true },
  { titulo: "Entregue", concluida: false },
];

export function AcompanhamentoScreen() {
  return (
    <div className="space-y-3 p-3 text-[#1A1A1A]">
      <div className="rounded-2xl border border-zinc-200 bg-white p-3.5 shadow-sm">
        <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#E16349]">
          Acompanhamento do pedido
        </span>
        <h1 className="mt-1 text-sm font-semibold tracking-tight text-zinc-900">Naturaz Fitness</h1>
        <p className="mt-0.5 text-[9px] text-zinc-500">Pedido #8F21AB00</p>

        <div className="mt-3 rounded-xl border border-zinc-200 bg-zinc-50 p-3">
          <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Status atual
          </p>
          <p className="mt-1 text-xs font-semibold text-zinc-900">Saiu para entrega</p>
          <p className="mt-1 text-[9px] text-zinc-500">Seu pedido está a caminho.</p>
          <div className="mt-2 flex items-center gap-2 rounded-lg bg-white px-2.5 py-2 shadow-sm">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E16349] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#E16349]" />
            </span>
            <p className="text-[9px] font-semibold text-zinc-700">
              <span className="uppercase tracking-wide text-zinc-500">Entrega:</span>{" "}
              <span className="font-bold text-zinc-900">12 min</span>
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-3.5 shadow-sm">
        <p className="text-xs font-semibold text-zinc-900">Linha do tempo</p>
        <div className="mt-3 space-y-2.5">
          {ETAPAS.map((etapa, i) => (
            <div key={etapa.titulo} className="flex items-center gap-2.5">
              <div
                className={`flex h-4.5 w-4.5 items-center justify-center rounded-full border text-[8px] font-bold ${
                  etapa.concluida
                    ? "border-emerald-200 bg-emerald-100 text-emerald-700"
                    : "border-zinc-200 bg-white text-zinc-400"
                }`}
              >
                {i + 1}
              </div>
              <p
                className={`text-[10px] font-semibold ${etapa.ativa ? "text-zinc-900" : "text-zinc-600"}`}
              >
                {etapa.titulo}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3.5">
        <p className="text-[8px] font-semibold uppercase tracking-wider text-amber-900">
          Código de confirmação
        </p>
        <p className="mt-1 text-lg font-extrabold tracking-widest text-amber-900">4K9X</p>
        <p className="mt-1 text-[9px] text-amber-800">Informe ao entregador na hora da entrega.</p>
      </div>
    </div>
  );
}
