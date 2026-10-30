type Point = { day: number; total: number; resolved: number };

/** Lightweight SVG area chart: no chart library, so the bundle stays small. */
export function VolumeChart({ data }: { data: Point[] }) {
  const w = 640;
  const h = 220;
  const pad = { t: 12, r: 8, b: 24, l: 36 };
  const max = Math.ceil(Math.max(...data.map((d) => d.total)) / 100) * 100;
  const x = (i: number) => pad.l + (i / (data.length - 1)) * (w - pad.l - pad.r);
  const y = (v: number) => pad.t + (1 - v / max) * (h - pad.t - pad.b);

  const line = (key: "total" | "resolved") =>
    data.map((d, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(d[key]).toFixed(1)}`).join(" ");
  const area = (key: "total" | "resolved") =>
    `${line(key)} L${x(data.length - 1)},${y(0)} L${x(0)},${y(0)} Z`;
  const ticks = [0, max / 2, max];

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="h-auto w-full"
      role="img"
      aria-label="Conversations per day over the last 30 days, with the share resolved by AI"
    >
      {ticks.map((t) => (
        <g key={t}>
          <line x1={pad.l} x2={w - pad.r} y1={y(t)} y2={y(t)} className="stroke-night-line" strokeDasharray="3 4" />
          <text x={pad.l - 8} y={y(t) + 4} textAnchor="end" className="fill-white/40 font-mono text-[10px]">
            {t}
          </text>
        </g>
      ))}
      {[1, 10, 20, 30].map((d) => (
        <text key={d} x={x(d - 1)} y={h - 6} textAnchor={d === 1 ? "start" : d === 30 ? "end" : "middle"} className="fill-white/40 font-mono text-[10px]">
          {`Oct ${d}`}
        </text>
      ))}
      <path d={area("total")} className="fill-white/[0.06]" />
      <path d={area("resolved")} className="fill-accent/20" />
      <path
        d={line("total")}
        pathLength={1}
        strokeDasharray="1"
        className="animate-draw fill-none stroke-white/50"
        strokeWidth="1.5"
      />
      <path
        d={line("resolved")}
        pathLength={1}
        strokeDasharray="1"
        className="animate-draw fill-none stroke-accent"
        strokeWidth="2"
      />
    </svg>
  );
}

export function Sparkline({ values, className = "" }: { values: number[]; className?: string }) {
  const w = 96;
  const h = 28;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const d = values
    .map((v, i) => {
      const px = (i / (values.length - 1)) * w;
      const py = h - 2 - ((v - min) / (max - min || 1)) * (h - 4);
      return `${i ? "L" : "M"}${px.toFixed(1)},${py.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} aria-hidden="true" className={className}>
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
