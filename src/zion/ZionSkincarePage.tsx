import { useEffect } from "react";
import { ZionHeader } from "./ZionHeader";
import { ZionHero } from "./ZionHero";
import { ZionHowItWorks } from "./ZionHowItWorks";
import { ZionScreens } from "./ZionScreens";
import { ZionStack } from "./ZionStack";
import { ZionEngineering } from "./ZionEngineering";
import { ZionCta } from "./ZionCta";
import { ZionFooter } from "./ZionFooter";

export function ZionSkincarePage() {
  useEffect(() => {
    document.title = "Zion Skincare — Rotina de skincare personalizada por IA | Belter Oracle Tech";
  }, []);

  return (
    <div className="zion-theme min-h-screen bg-background text-foreground">
      <ZionHeader />
      <main>
        <ZionHero />
        <ZionStack />
        <ZionHowItWorks />
        <ZionScreens />
        <ZionEngineering />
        <ZionCta />
      </main>
      <ZionFooter />
    </div>
  );
}
