const STATS = [
  { value: "3", label: "produtos em desenvolvimento" },
  { value: "100%", label: "nacional — orgulho BR" },
  { value: "IA", label: "no centro de cada produto" },
  { value: "24/7", label: "disponibilidade dos serviços" },
];

export function TrustBar() {
  return (
    <section aria-label="Números da empresa" className="border-y border-border/60 bg-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 sm:px-8 md:grid-cols-4">
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
