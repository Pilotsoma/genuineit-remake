/**
 * Original abstract "digital globe" artwork, generated at build time as inline SVG.
 * Deterministic (seeded) so server and client markup match; motion is CSS-only and
 * disabled under prefers-reduced-motion.
 */

function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

type P = { x: number; y: number; z: number };

export function NetworkGlobe({ className = "" }: { className?: string }) {
  const R = 230;
  const cx = 300;
  const cy = 300;
  const tilt = 0.38;
  const rand = rng(7);

  // Fibonacci-ish distribution of nodes on the sphere
  const nodes: P[] = [];
  const N = 64;
  for (let i = 0; i < N; i++) {
    const y = 1 - (i / (N - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = i * 2.39996 + rand() * 0.25;
    nodes.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r });
  }
  const project = (p: P) => {
    // rotate around X for tilt
    const y = p.y * Math.cos(tilt) - p.z * Math.sin(tilt);
    const z = p.y * Math.sin(tilt) + p.z * Math.cos(tilt);
    return { x: cx + p.x * R, y: cy + y * R, z };
  };
  const proj = nodes.map(project);

  // connect nearby front-facing nodes
  const links: [number, number][] = [];
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      const a = nodes[i];
      const b = nodes[j];
      const d = Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
      if (d < 0.46 && proj[i].z > -0.15 && proj[j].z > -0.15) links.push([i, j]);
    }
  }

  // great-circle style arcs between distant hubs
  const hubs = [3, 11, 19, 27, 36, 44, 52, 58].filter((i) => proj[i].z > 0);
  const arcs: string[] = [];
  for (let k = 0; k < hubs.length - 1; k += 1) {
    const a = proj[hubs[k]];
    const b = proj[hubs[k + 1]];
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2;
    const dx = mx - cx;
    const dy = my - cy;
    const len = Math.hypot(dx, dy) || 1;
    const lift = 70 + rand() * 40;
    arcs.push(`M${a.x.toFixed(1)} ${a.y.toFixed(1)} Q${(mx + (dx / len) * lift).toFixed(1)} ${(my + (dy / len) * lift).toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`);
  }

  const latitudes = [-0.75, -0.45, -0.15, 0.15, 0.45, 0.75];
  const longitudes = [0, 30, 60, 90, 120, 150];

  return (
    <svg viewBox="0 0 600 600" className={className} role="img" aria-label="Abstract illustration of a connected digital globe">
      <defs>
        <radialGradient id="ng-core" cx="42%" cy="38%" r="70%">
          <stop offset="0%" stopColor="#1455d9" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#10243d" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#081426" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ng-halo" cx="50%" cy="50%" r="50%">
          <stop offset="70%" stopColor="#00c9e8" stopOpacity="0" />
          <stop offset="86%" stopColor="#00c9e8" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#00c9e8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ng-arc" x1="0" x2="1">
          <stop offset="0%" stopColor="#00c9e8" stopOpacity="0" />
          <stop offset="50%" stopColor="#00c9e8" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#2f6bea" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      <circle cx={cx} cy={cy} r={R + 46} fill="url(#ng-halo)" />
      <circle cx={cx} cy={cy} r={R} fill="url(#ng-core)" stroke="#2f6bea" strokeOpacity="0.35" />

      <g fill="none" stroke="#7fa6f5" strokeOpacity="0.16" strokeWidth="1">
        {latitudes.map((lat) => {
          const r = Math.sqrt(1 - lat * lat) * R;
          const y = cy + lat * R * Math.cos(tilt);
          return <ellipse key={lat} cx={cx} cy={y} rx={r} ry={r * Math.sin(tilt)} />;
        })}
        {longitudes.map((deg) => {
          const rx = Math.abs(Math.cos((deg * Math.PI) / 180)) * R;
          return <ellipse key={deg} cx={cx} cy={cy} rx={Math.max(rx, 1)} ry={R} />;
        })}
      </g>

      <g stroke="#9cc0ff" strokeWidth="0.9">
        {links.map(([i, j]) => {
          const a = proj[i];
          const b = proj[j];
          const o = Math.max(0.05, Math.min(0.5, (a.z + b.z) / 2 + 0.15));
          return <line key={`${i}-${j}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} strokeOpacity={o * 0.6} />;
        })}
      </g>

      <g fill="none" stroke="url(#ng-arc)" strokeWidth="1.6" strokeLinecap="round">
        {arcs.map((d, i) => (
          <path key={i} d={d} className="ng-arc" style={{ animationDelay: `${i * 0.9}s` }} pathLength={1} />
        ))}
      </g>

      <g>
        {proj.map((p, i) => {
          if (p.z < -0.2) return null;
          const hub = hubs.includes(i);
          const o = Math.max(0.25, Math.min(1, p.z + 0.55));
          return (
            <g key={i}>
              {hub && <circle cx={p.x} cy={p.y} r={9} fill="#00c9e8" opacity={0.18} className="ng-pulse" style={{ animationDelay: `${(i % 5) * 0.7}s` }} />}
              <circle cx={p.x} cy={p.y} r={hub ? 3.4 : 1.9} fill={hub ? "#00c9e8" : "#cfe0ff"} opacity={o} />
            </g>
          );
        })}
      </g>

      <style>{`
        .ng-arc { stroke-dasharray: 0.22 0.78; stroke-dashoffset: 1; }
        .ng-pulse { transform-box: fill-box; transform-origin: center; }
        @media (prefers-reduced-motion: no-preference) {
          .ng-arc { animation: ng-flow 6s linear infinite; }
          .ng-pulse { animation: ng-pulse 3.6s ease-out infinite; }
        }
        @keyframes ng-flow { to { stroke-dashoffset: 0; } }
        @keyframes ng-pulse { 0% { transform: scale(0.6); opacity: .35 } 70% { transform: scale(1.9); opacity: 0 } 100% { opacity: 0 } }
      `}</style>
    </svg>
  );
}
