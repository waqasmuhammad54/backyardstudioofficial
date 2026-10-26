"use client";
import { useEffect, useRef, useState } from "react";

export default function CinematicIntro() {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (
      (typeof sessionStorage !== "undefined" && sessionStorage.getItem("intro_seen")) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;
    setVisible(true);
  }, []);

  const finish = () => {
    setFadeOut(true);
    setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("intro_seen", "1");
    }, 900);
  };

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(finish, 3000);
    return () => clearTimeout(t);
  }, [visible]);

  useEffect(() => {
    if (visible && videoRef.current) {
      videoRef.current.play().catch(() => finish());
    }
  }, [visible]);

  if (!visible) return null;

  return (
        <div
          onClick={finish}
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            overflow: "hidden",
            opacity: fadeOut ? 0 : 1,
            transition: "opacity .9s cubic-bezier(.76,0,.24,1)",
          }}
        >
          <video
            ref={videoRef}
            src="/logo-animation.mp4"
            muted
            playsInline
            preload="metadata"
            onEnded={finish}
            onError={finish}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          <p
            style={{
              position: "absolute",
              bottom: "2rem",
              right: "2.5rem",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(212,160,23,0.4)",
              pointerEvents: "none",
            }}
          >
            tap to skip
          </p>
        </div>
  );
}
