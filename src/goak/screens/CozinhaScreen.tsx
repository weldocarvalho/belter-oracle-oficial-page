const COLUNAS = [
  {
    titulo: "Pendente",
    pedidos: [
      {
        id: "8F21AB",
        cliente: "Marina",
        itens: "1x Açaí 500ml",
        acao: "Aceitar Pedido",
        estilo: "bg-[#1A1A1A] text-white",
      },
    ],
  },
  {
    titulo: "Preparando",
    pedidos: [
      {
        id: "C930DE",
        cliente: "Rafael",
        itens: "2x Combo Burger",
        acao: "Concluir Preparo",
        estilo: "bg-[#E16349] text-white",
      },
    ],
  },
  {
    titulo: "Pronto",
    pedidos: [
      {
        id: "77A1F0",
        cliente: "Bia",
        itens: "1x Temaki Salmão",
        acao: "Despachar",
        estilo: "border border-emerald-200 bg-emerald-100 text-emerald-800",
      },
    ],
  },
];

export function CozinhaScreen() {
  return (
    <div className="space-y-3 p-4 text-[#1A1A1A]">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
          Painel administrativo
        </p>
        <h1 className="mt-0.5 text-lg font-bold tracking-tight">Cozinha</h1>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {COLUNAS.map((coluna) => (
          <div key={coluna.titulo} className="flex flex-col gap-2 rounded-2xl bg-[#F3F3F3] p-2">
            <p className="px-1 text-[9px] font-bold uppercase tracking-wider text-zinc-500">
              {coluna.titulo}
            </p>
            {coluna.pedidos.map((pedido) => (
              <div
                key={pedido.id}
                className="rounded-xl border border-zinc-200 bg-white p-2.5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[8px] font-semibold text-zinc-500">
                    #{pedido.id}
                  </span>
                </div>
                <p className="mt-1 text-[9px] font-bold uppercase text-[#1A1A1A]">
                  {pedido.cliente}
                </p>
                <p className="mt-0.5 text-[9px] text-zinc-600">{pedido.itens}</p>
                <button
                  type="button"
                  className={`mt-2 w-full rounded-lg py-1.5 text-[8px] font-semibold uppercase tracking-wide ${pedido.estilo}`}
                >
                  {pedido.acao}
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-3 text-[10px] text-zinc-500">
        Esteira atualizada em tempo real via Supabase Realtime — sem precisar dar refresh na página.
      </div>
    </div>
  );
}
