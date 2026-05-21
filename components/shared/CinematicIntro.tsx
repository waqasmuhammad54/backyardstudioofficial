"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CinematicIntro() {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof sessionStorage !== "undefined" && sessionStorage.getItem("intro_seen")) return;
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
    const t = setTimeout(finish, 12000);
    return () => clearTimeout(t);
  }, [visible]);

  useEffect(() => {
    if (visible && videoRef.current) {
      videoRef.current.play().catch(() => finish());
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cinematic-intro"
          initial={{ opacity: 1 }}
          animate={{ opacity: fadeOut ? 0 : 1 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
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
          }}
        >
          <video
            ref={videoRef}
            src="/logo-animation.mp4"
            muted
            playsInline
            onEnded={finish}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          <motion.p
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            tap to skip
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
