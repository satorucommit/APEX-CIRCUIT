"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Driver } from "@/data/drivers";

interface DriverCardProps {
  driver: Driver;
}

export default function DriverCard({ driver }: DriverCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative overflow-hidden rounded-xl bg-[#101214] border border-[rgba(255,255,255,0.08)] hover:border-[#e10600]/60 transition-all p-6"
    >
      {/* Subtle brand color glow in top-right */}
      <div
        className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-40"
        style={{ backgroundColor: driver.teamColor }}
      />

      {/* Large watermark driver number */}
      <div className="absolute right-3 top-3 font-display text-7xl font-bold text-[rgba(255,255,255,0.03)] group-hover:text-[rgba(255,255,255,0.06)] pointer-events-none transition-colors select-none">
        {driver.number}
      </div>

      {/* Header: Standing Rank Badge & Flag */}
      <div className="relative z-10 flex items-center justify-between gap-3 mb-6">
        <span
          className={`font-display text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded ${
            driver.standing === 1
              ? "bg-[#e10600] text-white"
              : driver.standing <= 3
              ? "bg-[#f5a623] text-black"
              : "bg-[rgba(255,255,255,0.08)] text-[rgba(244,244,242,0.7)]"
          }`}
        >
          RANK #{driver.standing}
        </span>
        <span className="text-2xl" role="img" aria-label={driver.country}>
          {driver.flag}
        </span>
      </div>

      {/* Driver Identity */}
      <div className="relative z-10">
        <div className="text-xs uppercase tracking-wider text-[rgba(244,244,242,0.4)] font-semibold mb-1">
          {driver.teamName}
        </div>
        <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#f4f4f2] group-hover:text-white transition-colors">
          {driver.name}
        </h3>
        <p className="text-xs text-[rgba(244,244,242,0.6)] mt-2 line-clamp-2 leading-relaxed">
          {driver.bio}
        </p>
      </div>

      {/* Stat Grid */}
      <div className="relative z-10 mt-6 pt-4 border-t border-[rgba(255,255,255,0.06)] grid grid-cols-3 gap-2 text-center">
        <div className="p-2 rounded bg-[rgba(255,255,255,0.02)]">
          <div className="font-display text-lg font-bold text-[#f4f4f2]">
            {driver.points}
          </div>
          <div className="text-[10px] uppercase tracking-wider text-[rgba(244,244,242,0.4)]">
            PTS
          </div>
        </div>
        <div className="p-2 rounded bg-[rgba(255,255,255,0.02)]">
          <div className="font-display text-lg font-bold text-[#f5a623]">
            {driver.podiums}
          </div>
          <div className="text-[10px] uppercase tracking-wider text-[rgba(244,244,242,0.4)]">
            PODIUMS
          </div>
        </div>
        <div className="p-2 rounded bg-[rgba(255,255,255,0.02)]">
          <div className="font-display text-lg font-bold text-[#e10600]">
            {driver.wins}
          </div>
          <div className="text-[10px] uppercase tracking-wider text-[rgba(244,244,242,0.4)]">
            WINS
          </div>
        </div>
      </div>

      {/* View Dossier Link */}
      <div className="relative z-10 mt-5 text-right">
        <Link
          href={`/drivers/${driver.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#e10600] group-hover:text-white transition-colors"
        >
          <span>Driver Dossier</span>
          <span>→</span>
        </Link>
      </div>
    </motion.div>
  );
}
