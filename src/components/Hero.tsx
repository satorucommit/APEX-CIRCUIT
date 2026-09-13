"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CountdownTimer from "./CountdownTimer";

const RED = "#e10600";

interface HeroProps {
  nextRace: {
    name: string;
    location: string;
    date: string;
    round?: number;
  };
}

export default function Hero({ nextRace }: HeroProps) {
  return (
    <section style={{ position: "relative", width: "100%", height: "100vh", minHeight: "680px", overflow: "hidden", backgroundColor: "#08090a" }}>
      <video
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(8,9,10,0.75) 0%, rgba(8,9,10,0.25) 35%, rgba(8,9,10,0.45) 70%, rgba(8,9,10,0.95) 100%)",
        }}
      />
      <div className="speed-lines" style={{ position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none" }} />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 24px",
          maxWidth: "1280px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: "920px" }}>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: "inline-block",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: RED,
              marginBottom: "18px",
            }}
          >
            2026 Championship — Round {String(nextRace.round || 7).padStart(2, "0")} • {nextRace.name}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display"
            style={{
              margin: 0,
              fontSize: "clamp(2.8rem, 7.5vw, 6.5rem)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
            }}
          >
            Speed Has
            <br />
            <span style={{ color: RED }}>No Limits</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            style={{
              marginTop: "22px",
              maxWidth: "520px",
              fontSize: "16px",
              lineHeight: 1.6,
              color: "var(--text-dim)",
            }}
          >
            Twelve rounds. Ten teams. One champion. Follow every overtake, every pit stop, and every podium of the Apex Circuit season.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "22px",
              marginTop: "34px",
              flexWrap: "wrap",
            }}
          >
            <CountdownTimer targetDate={nextRace.date} />
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link
                href="/schedule"
                style={{
                  padding: "13px 26px",
                  borderRadius: "8px",
                  background: RED,
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(225,6,0,0.4)",
                }}
              >
                Full Schedule
              </Link>
              <Link
                href="/standings"
                style={{
                  padding: "13px 26px",
                  borderRadius: "8px",
                  border: "1px solid var(--line)",
                  background: "rgba(16,18,20,0.6)",
                  backdropFilter: "blur(8px)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                }}
              >
                Standings
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative checkered flag accent in bottom corner */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "120px",
          height: "24px",
          backgroundImage: "repeating-linear-gradient(45deg, #08090a 25%, transparent 25%, transparent 75%, #08090a 75%, #08090a), repeating-linear-gradient(45deg, #08090a 25%, #17191c 25%, #17191c 75%, #08090a 75%, #08090a)",
          backgroundPosition: "0 0, 8px 8px",
          backgroundSize: "16px 16px",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
