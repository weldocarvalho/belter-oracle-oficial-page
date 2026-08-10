import {
  Atom,
  BadgeCheck,
  Bell,
  ChefHat,
  CreditCard,
  Database,
  FileCode2,
  Filter,
  FlaskConical,
  Layers,
  MessageCircle,
  Palette,
  RadioTower,
  Repeat,
  Share2,
  ShieldCheck,
  Cloud,
  Wallet,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  nextjs: Layers,
  react: Atom,
  ts: FileCode2,
  tailwind: Palette,
  supabase: Database,
  realtime: RadioTower,
  webpush: Bell,
  mercadopago: Wallet,
  stripe: CreditCard,
  whatsapp: MessageCircle,
  metaads: Share2,
  vercel: Cloud,
  tests: FlaskConical,
  quality: BadgeCheck,
  checkout: ShieldCheck,
  estoque: Repeat,
  funil: Filter,
  pagamento: Wallet,
  cozinha: ChefHat,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = ICONS[name] ?? ShieldCheck;
  return <Cmp className={className} aria-hidden />;
}
