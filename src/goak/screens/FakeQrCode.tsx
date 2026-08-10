// QR Code ilustrativo — padrão determinístico, não codifica nenhum dado real
// e não é escaneável. Usado só para compor o mockup da tela de pagamento.
const GRID = 17;

function isFinderZone(x: number, y: number) {
  const zones: Array<[number, number]> = [
    [0, 0],
    [GRID - 7, 0],
    [0, GRID - 7],
  ];
  return zones.find(([zx, zy]) => x >= zx && x < zx + 7 && y >= zy && y < zy + 7);
}

function finderFilled(x: number, y: number, zx: number, zy: number) {
  const lx = x - zx;
  const ly = y - zy;
  if (lx === 0 || lx === 6 || ly === 0 || ly === 6) return true;
  return lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4;
}

function noiseFilled(x: number, y: number) {
  return (x * 31 + y * 17 + x * y * 7) % 5 < 2;
}

const CELLS: { x: number; y: number }[] = [];
for (let y = 0; y < GRID; y++) {
  for (let x = 0; x < GRID; x++) {
    const zone = isFinderZone(x, y);
    const filled = zone ? finderFilled(x, y, zone[0], zone[1]) : noiseFilled(x, y);
    if (filled) CELLS.push({ x, y });
  }
}

export function FakeQrCode({ size = 96 }: { size?: number }) {
  return (
    <svg
      viewBox={`0 0 ${GRID} ${GRID}`}
      width={size}
      height={size}
      role="img"
      aria-label="QR code ilustrativo (não funcional)"
    >
      <rect width={GRID} height={GRID} fill="#ffffff" />
      {CELLS.map((c) => (
        <rect key={`${c.x}-${c.y}`} x={c.x} y={c.y} width={1} height={1} fill="var(--charcoal)" />
      ))}
    </svg>
  );
}
