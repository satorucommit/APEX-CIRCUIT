"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
  duration?: number;
}

export default function StatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  sublabel,
  duration = 1.6,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-6 text-center border-r last:border-r-0 border-[rgba(255,255,255,0.08)]"
    >
      <div className="flex items-baseline gap-1">
        {prefix && (
          <span className="font-display text-2xl sm:text-3xl font-bold text-[#e10600]">
            {prefix}
          </span>
        )}
        <span className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#f4f4f2]">
          {displayValue}
        </span>
        {suffix && (
          <span className="font-display text-xl sm:text-2xl font-bold text-[#f5a623] ml-0.5">
            {suffix}
          </span>
        )}
      </div>
      <span className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#f4f4f2]">
        {label}
      </span>
      {sublabel && (
        <span className="text-[11px] text-[rgba(244,244,242,0.38)] tracking-wider uppercase mt-0.5">
          {sublabel}
        </span>
      )}
    </div>
  );
}
