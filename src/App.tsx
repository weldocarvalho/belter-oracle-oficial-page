import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { Products } from "./components/Products";
import { WhyUs } from "./components/WhyUs";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Products />
        <WhyUs />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
