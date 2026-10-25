"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot  = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    if (!finePointer.matches) return;

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;
    let raf: number;

    if (dot.current) dot.current.style.display = "block";
    if (ring.current) ring.current.style.display = "block";

    const onMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onOver = (event: PointerEvent) => {
      if ((event.target as Element | null)?.closest("a, button, [data-cursor]")) {
        ring.current?.classList.add("hovering");
      }
    };
    const onOut = (event: PointerEvent) => {
      const from = event.target as Element | null;
      const to = event.relatedTarget as Element | null;
      if (from?.closest("a, button, [data-cursor]") && !to?.closest("a, button, [data-cursor]")) {
        ring.current?.classList.remove("hovering");
      }
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("pointerout", onOut, { passive: true });

    raf = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" aria-hidden style={{ display: "none" }} />
      <div ref={ring} className="cursor-ring" aria-hidden style={{ display: "none" }} />
    </>
  );
}
