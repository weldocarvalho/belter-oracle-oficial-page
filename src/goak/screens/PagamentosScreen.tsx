const INTEGRACOES = [
  {
    nome: "Mercado Pago",
    status: "conectado",
    detalhe: "Conta vinculada: loja@restaurante.com.br",
  },
  { nome: "WhatsApp Business", status: "conectado", detalhe: "Número vinculado: (11) 90000-0000" },
  { nome: "Meta Ads", status: "pendente", detalhe: "Nenhuma conta de anúncios vinculada ainda." },
];

export function PagamentosScreen() {
  return (
    <div className="space-y-3 p-4 text-[#1A1A1A]">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
          Painel administrativo
        </p>
        <h1 className="mt-0.5 text-lg font-bold tracking-tight">Pagamentos e integrações</h1>
        <p className="mt-1 text-[10px] text-zinc-500">
          Conecte a conta do Mercado Pago do estabelecimento para processar Pix e cartão direto na
          conta do lojista.
        </p>
      </div>

      <div className="space-y-2.5">
        {INTEGRACOES.map((it) => (
          <div key={it.nome} className="rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-[8px] font-bold uppercase tracking-wider text-zinc-500">
                  {it.nome}
                </p>
                <p className="mt-0.5 text-xs font-semibold text-zinc-900">
                  {it.status === "conectado" ? "Conta conectada" : "Conta não conectada"}
                </p>
              </div>
              <span
                className={`rounded-full border px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider ${
                  it.status === "conectado"
                    ? "border-emerald-100 bg-emerald-50 text-emerald-600"
                    : "border-red-100 bg-red-50 text-red-600"
                }`}
              >
                {it.status}
              </span>
            </div>
            <p className="mt-2 text-[9px] text-zinc-500">{it.detalhe}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-dashed border-zinc-200 bg-white p-3 text-[9px] text-zinc-500">
        Callbacks OAuth próprios para Mercado Pago, WhatsApp Business e Meta Ads — cada restaurante
        conecta a própria conta.
      </div>
    </div>
  );
}
