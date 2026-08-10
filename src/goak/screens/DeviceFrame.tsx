import type { ReactNode } from "react";
import { Lock } from "lucide-react";
import type { Device } from "./types";

export function DeviceFrame({
  device,
  path,
  children,
}: {
  device: Device;
  path: string;
  children: ReactNode;
}) {
  if (device === "mobile") return <MobileFrame>{children}</MobileFrame>;
  return <DesktopFrame path={path}>{children}</DesktopFrame>;
}

function MobileFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[270px]">
      <div className="rounded-[2.7rem] border-[7px] border-charcoal bg-charcoal shadow-[0_32px_70px_-24px_rgba(22,29,41,0.55)]">
        <div className="relative overflow-hidden rounded-[2.2rem] bg-background">
          <span
            aria-hidden
            className="absolute left-1/2 top-[9px] z-30 h-[16px] w-[84px] -translate-x-1/2 rounded-full bg-charcoal"
          />
          <div className="h-[560px] overflow-y-auto rounded-[2.2rem] pt-[14px]">{children}</div>
        </div>
      </div>
    </div>
  );
}

function DesktopFrame({ path, children }: { path: string; children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[560px]">
      <div className="overflow-hidden rounded-2xl border border-[var(--silver)]/50 bg-card shadow-[var(--shadow-card)]">
        <div className="flex items-center gap-2 border-b border-[var(--silver)]/40 bg-[var(--cream)] px-4 py-2.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <div className="mx-auto flex items-center gap-1.5 rounded-full border border-[var(--silver)]/50 bg-card px-3 py-1 text-[11px] text-muted-foreground">
            <Lock className="h-3 w-3" aria-hidden /> {path}
          </div>
          <span className="w-10" aria-hidden />
        </div>
        <div className="h-[500px] overflow-y-auto bg-background">{children}</div>
      </div>
    </div>
  );
}
