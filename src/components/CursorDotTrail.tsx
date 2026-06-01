import { useEffect, useRef, useState } from "react";

const TRAIL_LENGTH = 10;
const LERP_HEAD = 0.35;
const LERP_TRAIL = 0.28;

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, label, summary, [data-cursor-hover]";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isTouchPrimary() {
  return window.matchMedia("(pointer: coarse)").matches;
}

export const CursorDotTrail = () => {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  const headRef = useRef<HTMLDivElement>(null);
  const trailWrapRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const target = useRef({ x: 0, y: 0 });
  const head = useRef({ x: 0, y: 0 });
  const trail = useRef(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 })),
  );
  const hovering = useRef(false);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const canUse =
      !prefersReducedMotion() &&
      !isTouchPrimary() &&
      window.matchMedia("(min-width: 768px)").matches;

    setEnabled(canUse);
    if (!canUse) return;

    document.documentElement.classList.add("custom-cursor-active");

    const setPosition = (el: HTMLElement | null, x: number, y: number) => {
      if (!el) return;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const tick = () => {
      head.current.x += (target.current.x - head.current.x) * LERP_HEAD;
      head.current.y += (target.current.y - head.current.y) * LERP_HEAD;

      if (!hovering.current) {
        trail.current[0].x += (head.current.x - trail.current[0].x) * LERP_TRAIL;
        trail.current[0].y += (head.current.y - trail.current[0].y) * LERP_TRAIL;

        for (let i = 1; i < TRAIL_LENGTH; i++) {
          trail.current[i].x += (trail.current[i - 1].x - trail.current[i].x) * LERP_TRAIL;
          trail.current[i].y += (trail.current[i - 1].y - trail.current[i].y) * LERP_TRAIL;
        }

        trailRefs.current.forEach((el, i) => {
          const t = trail.current[i];
          const scale = 1 - i * 0.07;
          if (!el) return;
          el.style.transform = `translate3d(${t.x}px, ${t.y}px, 0) translate(-50%, -50%) scale(${Math.max(scale, 0.25)})`;
        });
      }

      setPosition(headRef.current, head.current.x, head.current.y);

      if (headRef.current) {
        headRef.current.dataset.hovering = hovering.current ? "true" : "false";
      }
      if (trailWrapRef.current) {
        trailWrapRef.current.style.opacity = hovering.current ? "0" : "1";
      }

      rafId.current = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      const el = document.elementFromPoint(e.clientX, e.clientY);
      hovering.current =
        !!el?.closest(INTERACTIVE_SELECTOR) &&
        !el.closest("[data-cursor-ignore]");
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    rafId.current = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none"
      aria-hidden
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        ref={trailWrapRef}
        className="transition-opacity duration-200 ease-out"
      >
        {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              trailRefs.current[i] = el;
            }}
            className="absolute left-0 top-0 rounded-full bg-foreground will-change-transform"
            style={{
              width: `${Math.max(5 - i * 0.35, 2.5)}px`,
              height: `${Math.max(5 - i * 0.35, 2.5)}px`,
              opacity: Math.max(0.12, 0.55 - i * 0.045),
            }}
          />
        ))}
      </div>

      {/* Head: dot (default) → reticle ring + center dot on hover */}
      <div
        ref={headRef}
        data-hovering="false"
        className="group absolute left-0 top-0 will-change-transform"
      >
        {/* Default pointer dot */}
        <div
          className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground shadow-[0_0_12px_hsl(var(--foreground)/0.35)] transition-all duration-200 ease-out group-data-[hovering=true]:scale-0 group-data-[hovering=true]:opacity-0 dark:shadow-[0_0_12px_hsl(var(--foreground)/0.4)]"
          aria-hidden
        />

        {/* Gun-sight / scope reticle on interactive hover */}
        <div
          className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 scale-50 items-center justify-center opacity-0 transition-all duration-200 ease-out group-data-[hovering=true]:scale-100 group-data-[hovering=true]:opacity-100"
          aria-hidden
        >
          <div className="absolute inset-0 rounded-full border-2 border-foreground" />
          <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
        </div>
      </div>
    </div>
  );
};
