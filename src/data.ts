export const SITE = {
  name: "Belter Oracle Tech",
  tagline: "Produtos digitais com inteligência artificial",
  description:
    "Somos uma empresa de tecnologia construindo SaaS inteligentes que resolvem problemas reais.",
  url: "https://belter-oracle.com.br",
  email: "contato@belter-oracle.com.br",
} as const;

export type Product = {
  slug: string;
  name: string;
  url: string;
  internal?: boolean;
  status: "disponivel" | "em-breve";
  statusLabel: string;
  tagline: string;
  description: string;
  highlights: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "zion-skincare",
    name: "Zion Skincare",
    url: "/zion-skincare",
    internal: true,
    status: "disponivel",
    statusLabel: "Disponível",
    tagline: "Sua rotina de skincare personalizada por IA",
    description:
      "Descubra em minutos a rotina de cuidados ideal para a sua pele, com recomendações simples, honestas e que cabem no seu bolso.",
    highlights: [
      "Rotina personalizada por IA",
      "Análise do seu tipo de pele",
      "Recomendações acessíveis",
    ],
  },
  {
    slug: "goak-tech",
    name: "Gòak Tech",
    url: "https://goak-tech.belter-oracle.com.br",
    status: "disponivel",
    statusLabel: "Disponível",
    tagline: "Tecnologia que conecta você ao que importa",
    description:
      "Uma solução inteligente para conectar pessoas e informações de forma simples e eficiente, com a qualidade técnica que você espera.",
    highlights: ["Plataforma inteligente", "Experiência fluida", "Feito para escalar"],
  },
  {
    slug: "desviciar",
    name: "Desviciar",
    url: "https://desvicio.belter-oracle.com.br",
    status: "em-breve",
    statusLabel: "Em breve",
    tagline: "Liberte-se. Um dia de cada vez.",
    description:
      "Apoio diário e acompanhamento inteligente para ajudar você a deixar hábitos indesejados e retomar o controle da sua vida.",
    highlights: ["Acompanhamento diário", "Metas de progresso", "Suporte por IA"],
  },
];
