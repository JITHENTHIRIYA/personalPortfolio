import { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
}

const SPACING = 30;
const RADIUS = 1.2;
const REPEL_RADIUS = 100;
const REPEL_STRENGTH = 4;
const RETURN_SPEED = 0.08;
const DAMPING = 0.75;

export const DotBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const buildGrid = () => {
      const dots: Dot[] = [];
      const cols = Math.ceil(canvas.width / SPACING) + 1;
      const rows = Math.ceil(canvas.height / SPACING) + 1;
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * SPACING;
          const y = row * SPACING;
          dots.push({ x, y, originX: x, originY: y, vx: 0, vy: 0 });
        }
      }
      dotsRef.current = dots;
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      buildGrid();
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      const isDark = document.documentElement.classList.contains("dark");
      const rgb = isDark ? "255, 255, 255" : "0, 0, 0";
      const highlightRgb = isDark ? "200, 220, 255" : "0, 0, 0";

      // Draw radial spotlight glow at cursor position
      if (mx > 0 && my > 0) {
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, REPEL_RADIUS * 2.5);
        gradient.addColorStop(0, `rgba(${rgb}, 0.06)`);
        gradient.addColorStop(0.3, `rgba(${highlightRgb}, 0.03)`);
        gradient.addColorStop(1, `rgba(${rgb}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      for (const dot of dotsRef.current) {
        const dx = dot.x - mx;
        const dy = dot.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < REPEL_RADIUS && dist > 0) {
          const force = ((REPEL_RADIUS - dist) / REPEL_RADIUS) * REPEL_STRENGTH;
          dot.vx += (dx / dist) * force;
          dot.vy += (dy / dist) * force;
        }

        // Spring return to origin
        dot.vx += (dot.originX - dot.x) * RETURN_SPEED;
        dot.vy += (dot.originY - dot.y) * RETURN_SPEED;

        // Damping
        dot.vx *= DAMPING;
        dot.vy *= DAMPING;

        dot.x += dot.vx;
        dot.y += dot.vy;

        // Opacity: brighten dots near cursor
        const proximity = Math.max(0, 1 - dist / (REPEL_RADIUS * 1.5));
        const alpha = 0.18 + proximity * 0.45;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${alpha})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};
