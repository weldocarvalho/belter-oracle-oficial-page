import { useEffect } from "react";
import { GoakHeader } from "./GoakHeader";
import { GoakHero } from "./GoakHero";
import { GoakStack } from "./GoakStack";
import { GoakHowItWorks } from "./GoakHowItWorks";
import { GoakScreens } from "./GoakScreens";
import { GoakEngineering } from "./GoakEngineering";
import { GoakCta } from "./GoakCta";
import { GoakFooter } from "./GoakFooter";

export function GoakTechPage() {
  useEffect(() => {
    document.title = "Gòak Tech — Vendas e gestão inteligente para delivery | Belter Oracle Tech";
  }, []);

  return (
    <div className="goak-theme min-h-screen bg-background text-foreground">
      <GoakHeader />
      <main>
        <GoakHero />
        <GoakStack />
        <GoakHowItWorks />
        <GoakScreens />
        <GoakEngineering />
        <GoakCta />
      </main>
      <GoakFooter />
    </div>
  );
}
