"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function DigitColumn({ value, label, isUrgent = false }: { value: number; label: string; isUrgent?: boolean }) {
  const formattedValue = String(value).padStart(2, "0");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(16, 18, 20, 0.85)",
        border: isUrgent ? "1px solid rgba(225, 6, 0, 0.4)" : "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "8px",
        padding: "10px 14px",
        minWidth: "68px",
        backdropFilter: "blur(12px)",
        boxShadow: isUrgent ? "0 4px 20px rgba(225, 6, 0, 0.15)" : "0 4px 16px rgba(0,0,0,0.3)",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "36px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={formattedValue}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -24, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-display"
            style={{
              display: "block",
              fontSize: "28px",
              fontWeight: 700,
              lineHeight: 1,
              color: isUrgent ? "var(--red)" : "#ffffff",
              letterSpacing: "0.02em",
            }}
          >
            {formattedValue}
          </motion.span>
        </AnimatePresence>
      </div>
      <span
        style={{
          fontSize: "11px",
          fontWeight: 600,
          textTransform: "lowercase",
          letterSpacing: "0.06em",
          color: isUrgent ? "rgba(225, 6, 0, 0.85)" : "var(--text-faint)",
          marginTop: "2px",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 6,
    hours: 14,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    setMounted(true);

    const calculateTime = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Default future offset fallback
        setTimeLeft({ days: 4, hours: 18, minutes: 24, seconds: 45 });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) {
    return (
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <DigitColumn value={6} label="days" />
        <DigitColumn value={14} label="hrs" />
        <DigitColumn value={42} label="mins" />
        <DigitColumn value={18} label="secs" isUrgent />
      </div>
    );
  }

  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <DigitColumn value={timeLeft.days} label="days" />
      <DigitColumn value={timeLeft.hours} label="hrs" />
      <DigitColumn value={timeLeft.minutes} label="mins" />
      <DigitColumn value={timeLeft.seconds} label="secs" isUrgent />
    </div>
  );
}
