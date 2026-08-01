export const ZION = {
  name: "Zion Skincare",
  short: "Zion",
  appUrl: "https://zionskincare.belter-oracle.com.br",
  tagline: "Sua rotina de skincare, personalizada por inteligência artificial",
  description:
    "Um SaaS completo que transforma o que você conta sobre a sua pele em uma rotina simples, segura e que cabe no bolso — com IA em cada etapa.",
  developer: {
    name: "Welde Carvalho",
    role: "Desenvolvedor de software · Belter Oracle Tech",
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/",
  },
} as const;

export const HOW_IT_WORKS = [
  {
    n: "01",
    title: "Conte sobre a sua pele",
    text: "Um questionário adaptativo de ~2 minutos. Quer mais precisão? Envie uma selfie: um modelo de visão analisa o rosto e pré-preenche o perfil.",
  },
  {
    n: "02",
    title: "A IA monta a sua rotina",
    text: "O Gemini 2.5 gera o plano e um validador determinístico com 7 regras garante segurança: SPF obrigatório, sem conflitos de ativos, seguro para gravidez e alergias.",
  },
  {
    n: "03",
    title: "Siga, passo a passo",
    text: "Manhã e noite, com o quê fazer, como aplicar e por que importa. Cada passo tem check diário para você manter a constância sem pensar.",
  },
  {
    n: "04",
    title: "Acompanhe a evolução",
    text: "Um check-in diário alimenta o Skin Score de 0 a 100, com gráficos, streaks e conquistas — e um cartão pronto para compartilhar.",
  },
] as const;

export const FEATURES = [
  {
    icon: "sparkles",
    title: "Rotina gerada por IA",
    text: "Gemini 2.5 Pro com fallback para Flash, retry com backoff e geração estruturada via tool calling.",
  },
  {
    icon: "camera",
    title: "Análise de selfie",
    text: "Visão computacional identifica tipo, tom e preocupações. A foto é descartada após a análise — nunca é persistida.",
  },
  {
    icon: "shield",
    title: "Validação regulatória",
    text: "SPF obrigatório, sem alegações terapêuticas e sem ingredientes contraindicados. Linguagem em conformidade com ANVISA/CDC.",
  },
  {
    icon: "sun",
    title: "Check-in diário",
    text: "4 sliders (1–10) + sono + notas alimentam o Skin Score com sinais objetivos do dia a dia.",
  },
  {
    icon: "trend",
    title: "Skin Score 0–100",
    text: "Sinais ponderados + bônus de adesão à rotina, com gráfico dos últimos 14 dias e estatísticas de constância.",
  },
  {
    icon: "flame",
    title: "Streaks e conquistas",
    text: "Constância semanal e mensal, dias perfeitos, streak atual e conquistas desbloqueáveis.",
  },
  {
    icon: "share",
    title: "Cartão para Stories",
    text: "Gera um PNG 1080×1350 no cliente com score, streaks e disclaimer, pronto para compartilhar ou baixar.",
  },
  {
    icon: "gift",
    title: "Programa de indicação",
    text: "Código de 8 caracteres e recompensa de 7 dias de trial para quem indica e quem é indicado.",
  },
] as const;

export const STACK = [
  {
    group: "Frontend",
    items: [
      { icon: "react", name: "React 19", note: "UI componentizada com hooks e Server Functions" },
      { icon: "ts", name: "TypeScript", note: "Tipagem ponta a ponta, do banco à UI" },
      { icon: "router", name: "TanStack Router & Start", note: "Routing tipado e SSR full-stack" },
      { icon: "tailwind", name: "Tailwind CSS v4", note: "Design system com tokens e bento grid" },
      { icon: "shadcn", name: "shadcn/ui", note: "Componentes acessíveis sobre Radix UI" },
      { icon: "vite", name: "Vite", note: "Build e dev server de alta performance" },
    ],
  },
  {
    group: "Inteligência artificial",
    items: [
      { icon: "ai", name: "OpenRouter", note: "Gateway com fallback e retry para modelos" },
      {
        icon: "gemini",
        name: "Gemini 2.5 Pro/Flash",
        note: "Geração de rotina + visão para selfies",
      },
      {
        icon: "validator",
        name: "Validador determinístico",
        note: "7 regras de segurança pós-geração",
      },
    ],
  },
  {
    group: "Backend e dados",
    items: [
      { icon: "supabase", name: "Supabase", note: "Auth por OTP, Postgres, RPCs e Realtime" },
      { icon: "nitro", name: "Nitro", note: "API routes e webhooks no servidor" },
      { icon: "paddle", name: "Paddle", note: "Checkout e assinaturas com webhooks" },
    ],
  },
  {
    group: "Qualidade e infraestrutura",
    items: [
      { icon: "vercel", name: "Vercel", note: "Deploy com cron e edge functions" },
      { icon: "docker", name: "Docker", note: "Imagens reproduzíveis de build" },
      { icon: "vitest", name: "Vitest", note: "Testes unitários no motor de IA" },
      { icon: "quality", name: "ESLint + Prettier", note: "Lint, formatação e typecheck" },
    ],
  },
] as const;

export const ENGINEERING = [
  {
    icon: "loop",
    title: "Geração com validação em loop",
    text: "A IA gera a rotina, um validador determinístico checa 7 regras (SPF, conflitos de ativos, gravidez, alergias) e, se algo falha, o sistema re-prompta e, por fim, auto-corrige de forma determinística. Alucinação é tratada como bug.",
  },
  {
    icon: "paywall",
    title: "Paywall no servidor",
    text: "A checagem de assinatura acontece antes de chamar a IA — sem pagamento ativo, nenhum token é gasto. Inclui grace period, bypass admin e reatividade em tempo real.",
  },
  {
    icon: "lock",
    title: "Segurança por design",
    text: "Acesso via RPCs (has_active_subscription, owns_profile), anti open-redirect no login, anti-duplicação de assinatura no webhook e auditoria com motivo obrigatório em concessões manuais.",
  },
  {
    icon: "realtime",
    title: "Experiência reativa",
    text: "Sessão hidratada no cliente, cache offline em localStorage e atualização em tempo real do status da assinatura via Supabase Realtime.",
  },
] as const;
