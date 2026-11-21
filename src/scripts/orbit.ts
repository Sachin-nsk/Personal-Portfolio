// Interactive "tech constellation": labelled hubs + small nodes drift, link up by distance,
// get pulled toward the cursor, and light up when a click-pulse wave passes through them.

const LABELS = ['Java', 'Spring Boot', 'Kafka', 'Oracle', 'MongoDB', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'Claude', 'PL/SQL', 'Python', 'Helm', 'MCP'];

type Node = { x: number; y: number; vx: number; vy: number; r: number; label?: string; lit: number; hue: number };
type Wave = { x: number; y: number; r: number };

export function initOrbit() {
  const canvas = document.getElementById('orbit') as HTMLCanvasElement | null;
  if (!canvas) return;
  const ctx = canvas.getContext('2d')!;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let w = 0, h = 0, dpr = 1, link = 150;
  let nodes: Node[] = [];
  let waves: Wave[] = [];
  let mouse: { x: number; y: number } | null = null;
  let visible = true;

  function build() {
    const r = canvas!.getBoundingClientRect();
    w = r.width; h = r.height; dpr = Math.min(devicePixelRatio || 1, 2);
    canvas!.width = w * dpr; canvas!.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    link = w < 700 ? 110 : 150;
    const small = Math.round(Math.min(80, (w * h) / 14000));
    nodes = [];
    const mk = (label?: string): Node => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: label ? 4.5 : 1.8 + Math.random() * 1.2, label, lit: 0, hue: Math.random(),
    });
    LABELS.forEach((l) => nodes.push(mk(l)));
    for (let i = 0; i < small; i++) nodes.push(mk());
  }

  const col = (hue: number, a: number) => {
    // blend neon green -> cyan -> pink
    const c = hue < 0.6 ? [0, 255, 163] : hue < 0.85 ? [0, 212, 255] : [255, 61, 242];
    return `rgba(${c[0]},${c[1]},${c[2]},${a})`;
  };

  let last = performance.now();
  function frame(now: number) {
    const dt = Math.min(2, (now - last) / 16.67); last = now;
    if (visible) { step(dt); draw(); }
    requestAnimationFrame(frame);
  }

  function step(dt: number) {
    for (const n of nodes) {
      if (mouse) {
        const dx = mouse.x - n.x, dy = mouse.y - n.y, d = Math.hypot(dx, dy);
        if (d < 220 && d > 1) { const f = (1 - d / 220) * 0.035; n.vx += (dx / d) * f; n.vy += (dy / d) * f; }
      }
      n.vx *= 0.995; n.vy *= 0.995;
      const sp = Math.hypot(n.vx, n.vy);
      if (sp < 0.08) { n.vx += (Math.random() - 0.5) * 0.02; n.vy += (Math.random() - 0.5) * 0.02; }
      if (sp > 1.4) { n.vx *= 1.4 / sp; n.vy *= 1.4 / sp; }
      n.x += n.vx * dt; n.y += n.vy * dt;
      if (n.x < -10) n.x = w + 10; if (n.x > w + 10) n.x = -10;
      if (n.y < -10) n.y = h + 10; if (n.y > h + 10) n.y = -10;
      n.lit = Math.max(0, n.lit - 0.02 * dt);
    }
    for (const wv of waves) {
      wv.r += 5 * dt;
      for (const n of nodes) { if (Math.abs(Math.hypot(n.x - wv.x, n.y - wv.y) - wv.r) < 22) n.lit = 1; }
    }
    waves = waves.filter((wv) => wv.r < Math.hypot(w, h));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j]; const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d > link) continue;
        const k = 1 - d / link; const lit = Math.max(a.lit, b.lit);
        ctx.strokeStyle = col(a.hue, 0.1 + k * 0.28 + lit * 0.5); ctx.lineWidth = 0.6 + lit * 1.2;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
    }
    for (const wv of waves) {
      ctx.strokeStyle = `rgba(0,255,163,${Math.max(0, 0.35 - wv.r / 2400)})`; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(wv.x, wv.y, wv.r, 0, 7); ctx.stroke();
    }
    ctx.textAlign = 'center';
    for (const n of nodes) {
      const near = mouse ? Math.max(0, 1 - Math.hypot(mouse.x - n.x, mouse.y - n.y) / 160) : 0;
      const g = Math.min(1, n.lit + near);
      ctx.shadowColor = col(n.hue, 1); ctx.shadowBlur = n.label ? 12 + g * 16 : 6 + g * 10;
      ctx.fillStyle = col(n.hue, n.label ? 0.95 : 0.55 + g * 0.45);
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r + g * 2, 0, 7); ctx.fill(); ctx.shadowBlur = 0;
      if (n.label) {
        ctx.font = `${w < 700 ? 10 : 12}px JetBrains Mono, monospace`;
        ctx.fillStyle = `rgba(214,226,238,${0.55 + g * 0.45})`;
        ctx.fillText(n.label, n.x, n.y - 11);
      }
    }
  }

  canvas.addEventListener('pointermove', (e) => { const r = canvas.getBoundingClientRect(); mouse = { x: e.clientX - r.left, y: e.clientY - r.top }; });
  canvas.addEventListener('pointerleave', () => (mouse = null));
  canvas.addEventListener('click', (e) => { const r = canvas.getBoundingClientRect(); waves.push({ x: e.clientX - r.left, y: e.clientY - r.top, r: 0 }); });
  new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(canvas);
  addEventListener('resize', build);
  build();
  if (reduce) { draw(); return; }
  requestAnimationFrame(frame);
}
