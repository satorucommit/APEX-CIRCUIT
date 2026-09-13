"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Race } from "@/data/races";

interface RaceCardProps {
  race: Race;
  spotlight?: boolean;
}

export default function RaceCard({ race, spotlight = false }: RaceCardProps) {
  const isCompleted = race.status === "COMPLETED";
  const isLive = race.status === "LIVE";
  const isUpcoming = race.status === "UPCOMING";

  return (
    <motion.div
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className={`relative overflow-hidden rounded-xl border transition-all ${
        spotlight
          ? "bg-[#101214] border-[#e10600]/40 shadow-[0_12px_40px_rgba(225,6,0,0.12)] p-6 sm:p-8"
          : isCompleted
          ? "bg-[#101214]/60 border-[rgba(255,255,255,0.06)] opacity-85 hover:opacity-100 p-6"
          : "bg-[#101214] border-[rgba(255,255,255,0.1)] hover:border-[#e10600]/50 p-6"
      }`}
    >
      {/* Carbon fiber speed line accent */}
      <div className="speed-lines absolute inset-0 opacity-20 pointer-events-none" />

      {/* Top Bar: Round number + Status Tag */}
      <div className="relative z-10 flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#f4f4f2]">
            ROUND {String(race.round).padStart(2, "0")}
          </span>
          <span className="text-xl" role="img" aria-label={race.country}>
            {race.flag}
          </span>
        </div>

        {/* Status Tag */}
        <div>
          {isLive && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#e10600]/20 text-[#e10600] border border-[#e10600]">
              <span className="w-2 h-2 rounded-full bg-[#e10600] animate-ping" />
              LIVE NOW
            </span>
          )}
          {isUpcoming && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#f5a623] border border-[#f5a623]/60 bg-[#f5a623]/10">
              UPCOMING
            </span>
          )}
          {isCompleted && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider text-[rgba(244,244,242,0.45)] border border-[rgba(255,255,255,0.08)] bg-white/5">
              COMPLETED
            </span>
          )}
        </div>
      </div>

      {/* Main Info */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className={spotlight ? "md:col-span-8" : "md:col-span-7"}>
          <div className="text-xs font-bold uppercase tracking-widest text-[#e10600] mb-1">
            {race.dateRange}
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#f4f4f2] m-0">
            {race.name}
          </h3>
          <p className="text-sm text-[rgba(244,244,242,0.6)] mt-1 flex items-center gap-2">
            <span>{race.circuit}</span>
            <span className="text-[rgba(255,255,255,0.2)]">•</span>
            <span>{race.city}, {race.country}</span>
          </p>

          {isCompleted && race.winner && (
            <div className="mt-4 pt-3 border-t border-[rgba(255,255,255,0.06)] flex items-center gap-3 text-xs">
              <span className="text-[rgba(244,244,242,0.4)] uppercase font-semibold">P1 Winner:</span>
              <span className="font-bold text-[#f4f4f2] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e10600]" />
                {race.winner.driver} ({race.winner.team})
              </span>
              <span className="text-[rgba(244,244,242,0.4)] ml-auto font-mono">
                {race.winner.time}
              </span>
            </div>
          )}

          {spotlight && (
            <p className="mt-3 text-xs sm:text-sm text-[rgba(244,244,242,0.5)] line-clamp-2 leading-relaxed">
              {race.description}
            </p>
          )}
        </div>

        {/* Circuit telemetry and mini track graphic */}
        <div className={`${spotlight ? "md:col-span-4" : "md:col-span-5"} flex items-center justify-between md:justify-end gap-6`}>
          <div className="text-right">
            <div className="text-[11px] uppercase tracking-wider text-[rgba(244,244,242,0.38)]">
              Length / Laps
            </div>
            <div className="font-display text-sm sm:text-base font-bold text-[#f4f4f2] mt-0.5">
              {race.circuitLength} • {race.laps} LAPS
            </div>
            <div className="text-[11px] text-[rgba(244,244,242,0.4)] mt-0.5">
              Lap Record: <span className="text-[#f5a623]">{race.lapRecord.time}</span>
            </div>
          </div>

          {/* Circuit outline SVG graphic */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 relative flex items-center justify-center p-2 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)]">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-current text-[rgba(244,244,242,0.4)] hover:text-[#e10600] transition-colors" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              {/* Stylized circuit silhouette */}
              <path d="M 20 40 C 20 20, 50 15, 75 25 C 90 30, 85 60, 80 75 C 75 88, 45 85, 35 70 C 25 55, 35 45, 20 40 Z" />
              <circle cx="20" cy="40" r="3" fill="#e10600" />
            </svg>
          </div>
        </div>
      </div>

      {/* Spotlight Action */}
      {spotlight && (
        <div className="relative z-10 mt-6 pt-4 border-t border-[rgba(255,255,255,0.08)] flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs uppercase tracking-widest text-[#f5a623] font-bold">
            Official Weekend Schedule Available
          </span>
          <Link
            href="/schedule"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#e10600] hover:bg-[#ff1f1a] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_4px_16px_rgba(225,6,0,0.3)]"
          >
            View Weekend Schedule →
          </Link>
        </div>
      )}
    </motion.div>
  );
}
