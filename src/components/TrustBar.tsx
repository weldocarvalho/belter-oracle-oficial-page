const STATS = [
  { value: "3", label: "produtos em desenvolvimento" },
  { value: "IA", label: "no centro de cada produto" },
  { value: "24/7", label: "disponibilidade dos serviços" },
];

export function TrustBar() {
  return (
    <section aria-label="Números da empresa" className="border-y border-border/60 bg-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-6 px-5 py-12 sm:px-8">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-3xl font-bold tracking-tight text-primary">{s.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
