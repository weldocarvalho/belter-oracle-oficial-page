export type Device = "mobile" | "desktop";

export type ScreenId = "metricas" | "cozinha" | "pagamentos" | "acompanhamento" | "checkout";

export interface ScreenMeta {
  id: ScreenId;
  label: string;
  device: Device;
  path: string;
}

export const SCREENS: ScreenMeta[] = [
  {
    id: "metricas",
    label: "Métricas",
    device: "desktop",
    path: "app.goaktech.com.br/admin/metricas",
  },
  { id: "cozinha", label: "Cozinha", device: "desktop", path: "app.goaktech.com.br/admin/cozinha" },
  {
    id: "pagamentos",
    label: "Pagamentos",
    device: "desktop",
    path: "app.goaktech.com.br/admin/pagamentos",
  },
  {
    id: "acompanhamento",
    label: "Acompanhamento",
    device: "mobile",
    path: "goaktech.com.br/loja/acompanhar",
  },
  { id: "checkout", label: "Checkout", device: "mobile", path: "goaktech.com.br/loja/checkout" },
];
