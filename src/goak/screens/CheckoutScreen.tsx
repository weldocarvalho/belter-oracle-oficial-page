import { FakeQrCode } from "./FakeQrCode";

export function CheckoutScreen() {
  return (
    <div className="flex h-full flex-col text-[#1A1A1A]">
      <div className="border-b border-zinc-100 p-3.5">
        <p className="text-xs font-extrabold tracking-tight text-zinc-900">Pagamento</p>
        <p className="mt-0.5 text-[8px] font-bold uppercase tracking-wider text-zinc-400">
          Etapa 3 de 3 · Pix ou cartão
        </p>
      </div>

      <div className="flex-1 space-y-3 p-3.5">
        <div className="flex items-center justify-between rounded-xl bg-zinc-50 px-3 py-2 text-[9px] font-medium">
          <span className="text-zinc-500">Resumo da compra</span>
          <span className="font-bold text-zinc-900">R$ 58,90</span>
        </div>

        <button
          type="button"
          className="w-full rounded-2xl border border-[#E9B31E] bg-[#FFC72C] px-3.5 py-3 text-left"
        >
          <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-900">Pix</div>
          <div className="text-[10px] font-medium text-zinc-900">QR Code e copia e cola</div>
        </button>

        <button
          type="button"
          className="w-full rounded-2xl border border-zinc-200 bg-white px-3.5 py-3 text-left shadow-sm"
        >
          <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-900">
            Cartão de crédito
          </div>
          <div className="text-[10px] font-medium text-zinc-900">Checkout do Mercado Pago</div>
        </button>

        <div className="space-y-2.5 rounded-2xl border border-zinc-200 bg-white p-3">
          <p className="text-[10px] font-semibold text-zinc-800">Seu Pix foi gerado</p>
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-lg border border-zinc-200 bg-white p-1.5">
            <FakeQrCode size={88} />
          </div>
          <button
            type="button"
            className="w-full rounded-xl bg-[#E16349] px-3 py-2 text-center text-[8px] font-semibold uppercase tracking-wider text-white"
          >
            Copiar código Pix
          </button>
        </div>
      </div>

      <div className="space-y-2.5 border-t border-zinc-100 p-3.5">
        <div className="flex items-center justify-between">
          <span className="text-[8px] font-bold uppercase tracking-wider text-zinc-400">
            Subtotal líquido
          </span>
          <span className="font-mono text-sm font-extrabold tracking-tight text-zinc-900">
            R$ 58,90
          </span>
        </div>
        <div className="w-full rounded-xl bg-zinc-900 py-3 text-center text-[9px] font-extrabold uppercase tracking-wider text-white">
          Escolher pagamento
        </div>
      </div>
    </div>
  );
}
