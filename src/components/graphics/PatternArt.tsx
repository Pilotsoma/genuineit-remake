/**
 * Seeded abstract "architecture" artwork for page heroes and cards. Each slug produces a
 * distinct but on-brand composition: contour lines, a node graph and a focal ring.
 * Purely decorative (aria-hidden).
 */

function hash(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function rng(seed: number) {
  let s = seed || 1;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

export function PatternArt({
  seed,
  className = "",
  tone = "dark",
  variant,
}: {
  seed: string;
  className?: string;
  tone?: "dark" | "light";
  variant?: "contour" | "graph" | "rings";
}) {
  const r = rng(hash(seed));
  const kind = variant ?? (["contour", "graph", "rings"] as const)[hash(seed) % 3];
  const W = 640;
  const H = 480;
  const line = tone === "dark" ? "#7fa6f5" : "#1455d9";
  const accent = tone === "dark" ? "#00c9e8" : "#007f94";
  const baseOpacity = tone === "dark" ? 0.22 : 0.16;

  const contours = Array.from({ length: 14 }, (_, i) => {
    const amp = 18 + r() * 30;
    const freq = 0.006 + r() * 0.006;
    const phase = r() * Math.PI * 2;
    const y0 = 40 + i * 30;
    let d = `M0 ${y0}`;
    for (let x = 0; x <= W; x += 16) {
      const y = y0 + Math.sin(x * freq + phase) * amp + Math.sin(x * freq * 2.3 + phase) * amp * 0.25;
      d += ` L${x} ${y.toFixed(1)}`;
    }
    return d;
  });

  const nodes = Array.from({ length: 18 }, () => ({ x: 40 + r() * (W - 80), y: 40 + r() * (H - 80) }));
  const edges: [number, number][] = [];
  nodes.forEach((a, i) => {
    const near = nodes
      .map((b, j) => ({ j, d: Math.hypot(a.x - b.x, a.y - b.y) }))
      .filter((o) => o.j !== i)
      .sort((p, q) => p.d - q.d)
      .slice(0, 2);
    near.forEach((n) => {
      if (!edges.some(([p, q]) => (p === n.j && q === i) || (p === i && q === n.j))) edges.push([i, n.j]);
    });
  });
  const focus = nodes[Math.floor(r() * nodes.length)];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      {kind === "contour" && (
        <g fill="none" stroke={line} strokeWidth="1">
          {contours.map((d, i) => (
            <path key={i} d={d} strokeOpacity={baseOpacity * (0.5 + (i % 4) * 0.2)} />
          ))}
        </g>
      )}
      {kind === "rings" && (
        <g fill="none" stroke={line}>
          {Array.from({ length: 9 }, (_, i) => (
            <circle key={i} cx={focus.x} cy={focus.y} r={30 + i * 38} strokeOpacity={baseOpacity * (1 - i * 0.07)} strokeDasharray={i % 2 ? "2 6" : undefined} />
          ))}
        </g>
      )}
      <g stroke={line} strokeWidth="1">
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} strokeOpacity={kind === "graph" ? baseOpacity * 1.6 : baseOpacity * 0.9} />
        ))}
      </g>
      <g>
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r={i % 5 === 0 ? 3.2 : 2} fill={i % 5 === 0 ? accent : line} opacity={i % 5 === 0 ? 0.9 : 0.45} />
        ))}
        <circle cx={focus.x} cy={focus.y} r={7} fill="none" stroke={accent} strokeWidth="1.5" opacity="0.9" />
        <circle cx={focus.x} cy={focus.y} r={3.5} fill={accent} />
      </g>
    </svg>
  );
}
