export const GOAK = {
  name: "Gòak Tech",
  short: "Gòak",
  appUrl: "https://optimus-prod-snowy.vercel.app",
  tagline: "O ecossistema de vendas e gestão para delivery e restaurantes",
  description:
    "Um SaaS completo que junta cardápio digital, checkout próprio e inteligência financeira num só painel — do clique no anúncio ao lucro real.",
  developer: {
    name: "Weldo Carvalho",
    role: "Desenvolvedor de software · Belter Oracle Tech",
    github: "https://github.com/weldocarvalho",
    linkedin: "https://www.linkedin.com/in/weldocarvalho/",
  },
} as const;

export const HOW_IT_WORKS = [
  {
    n: "01",
    title: "O anúncio vira cardápio",
    text: "O cliente clica no anúncio do Meta Ads e cai direto numa vitrine leve, feita para converter — sem precisar baixar nenhum aplicativo.",
  },
  {
    n: "02",
    title: "Paga na hora, sem sair da loja",
    text: "Pix ou cartão via Mercado Pago Connect: o dinheiro cai direto na conta do restaurante, com o pedido já registrado e o estoque deduzido.",
  },
  {
    n: "03",
    title: "A cozinha recebe em tempo real",
    text: "Esteira de pedidos com status (Pendente → Preparando → Pronto → Saiu para entrega) e atribuição de entregador em um clique.",
  },
  {
    n: "04",
    title: "O cliente acompanha tudo",
    text: "Status ao vivo com estimativa de chegada, código de confirmação na entrega e notificação por WhatsApp em cada etapa do pedido.",
  },
] as const;

export const STACK = [
  {
    group: "Frontend",
    items: [
      {
        icon: "nextjs",
        name: "Next.js 16",
        note: "App Router, Server Actions e Server Components",
      },
      { icon: "react", name: "React 19", note: "UI componentizada com hooks e streaming" },
      { icon: "ts", name: "TypeScript", note: "Tipagem ponta a ponta, das actions ao banco" },
      {
        icon: "tailwind",
        name: "Tailwind CSS v4",
        note: "Design system consistente entre loja e admin",
      },
    ],
  },
  {
    group: "Backend e dados",
    items: [
      { icon: "supabase", name: "Supabase", note: "Auth, Postgres, Storage e RPCs atômicas" },
      { icon: "realtime", name: "Supabase Realtime", note: "Status do pedido e cozinha ao vivo" },
      { icon: "webpush", name: "Web Push", note: "Notificações no navegador do cliente" },
    ],
  },
  {
    group: "Pagamentos e integrações",
    items: [
      {
        icon: "mercadopago",
        name: "Mercado Pago Connect",
        note: "Pix e cartão, dinheiro direto no lojista",
      },
      { icon: "stripe", name: "Stripe", note: "Assinatura SaaS da própria plataforma" },
      {
        icon: "whatsapp",
        name: "WhatsApp Business Cloud API",
        note: "Notificações de status do pedido",
      },
      {
        icon: "metaads",
        name: "Meta Ads (Pixel + Conversions API)",
        note: "Rastreamento do funil de vendas",
      },
    ],
  },
  {
    group: "Qualidade e infraestrutura",
    items: [
      { icon: "vercel", name: "Vercel", note: "Deploy contínuo com edge functions" },
      {
        icon: "tests",
        name: "Testes de homologação",
        note: "6 blocos + iterações de banco via node:test",
      },
      { icon: "quality", name: "ESLint", note: "Padronização e checagem contínua de código" },
    ],
  },
] as const;

export const ENGINEERING = [
  {
    icon: "webpush",
    title: "Status sincronizado em três canais",
    text: "Cada mudança de status dispara ao mesmo tempo uma atualização via Supabase Realtime, uma notificação Web Push no navegador e uma mensagem de template no WhatsApp Business.",
  },
  {
    icon: "estoque",
    title: "Estoque dedutivo automático",
    text: "Cada venda dispara uma RPC atômica no Postgres que desconta os insumos da ficha técnica do produto, sem N+1 e sem estoque fantasma.",
  },
  {
    icon: "funil",
    title: "Funil com lucro real, não só vendas",
    text: "Visita → checkout iniciado → compra paga são cruzados com o CMV da ficha técnica e o custo do anúncio para apontar onde vale investir.",
  },
  {
    icon: "pagamento",
    title: "Pagamento direto na conta do lojista",
    text: "Mercado Pago Connect via OAuth: cada restaurante conecta sua própria conta e recebe o dinheiro direto.",
  },
] as const;
