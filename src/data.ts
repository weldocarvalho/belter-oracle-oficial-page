export const SITE = {
  name: "Belter Oracle Tech",
  tagline: "Produtos digitais com inteligência artificial",
  description:
    "Somos uma empresa de tecnologia construindo SaaS inteligentes que resolvem problemas reais.",
  url: "https://belter-oracle.com.br",
  email: "contato@belter-oracle.com.br",
  privacyPath: "/politica-de-privacidade",
  /** Preencha com o CNPJ da empresa para que ele apareça na Política de Privacidade. */
  cnpj: "" as string,
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
      "Descubra em minutos a rotina de cuidados ideal para a sua pele, com recomendações simples.",
    highlights: [
      "Rotina personalizada por IA",
      "Análise do seu tipo de pele",
      "Recomendações seguras",
    ],
  },
  {
    slug: "goak-tech",
    name: "Gòak Tech",
    url: "/goak-tech",
    internal: true,
    status: "disponivel",
    statusLabel: "Disponível",
    tagline: "Vendas e gestão inteligente para delivery e restaurantes",
    description:
      "Cardápio digital, checkout próprio com Pix e cartão, e um painel que mostra o lucro real de cada prato — do anúncio à entrega.",
    highlights: [
      "Checkout Pix e cartão próprio",
      "Funil com CMV e lucro real",
      "Cozinha e entrega em tempo real",
    ],
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
