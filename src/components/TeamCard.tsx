"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Team } from "@/data/teams";

interface TeamCardProps {
  team: Team;
  compact?: boolean;
}

export default function TeamCard({ team, compact = false }: TeamCardProps) {
  if (compact) {
    return (
      <motion.div
        whileHover={{ y: -3, scale: 1.02 }}
        className="group shrink-0 w-64 rounded-xl bg-[#101214] border border-[rgba(255,255,255,0.08)] hover:border-[#e10600]/60 p-5 transition-all flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="font-display text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-[rgba(255,255,255,0.06)] text-[rgba(244,244,242,0.6)]">
              POS #{team.standing}
            </span>
            <span
              className="w-3.5 h-3.5 rounded-full"
              style={{ backgroundColor: team.color, boxShadow: `0 0 10px ${team.color}88` }}
            />
          </div>
          <h4 className="font-display text-lg font-bold uppercase tracking-tight text-[#f4f4f2] group-hover:text-white transition-colors">
            {team.name}
          </h4>
          <p className="text-xs text-[rgba(244,244,242,0.5)] mt-0.5">
            {team.carModel}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between">
          <span className="font-display text-base font-bold text-[#f4f4f2]">
            {team.seasonPoints} PTS
          </span>
          <Link
            href={`/teams/${team.slug}`}
            className="text-xs font-bold uppercase tracking-wider text-[#e10600] group-hover:text-white transition-colors"
          >
            Team Info →
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-xl bg-[#101214] border border-[rgba(255,255,255,0.08)] hover:border-[#e10600]/50 transition-all p-6 flex flex-col justify-between"
    >
      {/* Ambient glow */}
      <div
        className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-3xl opacity-15 pointer-events-none transition-opacity group-hover:opacity-35"
        style={{ backgroundColor: team.color }}
      />

      <div>
        {/* Top bar: Standing + Color swatch */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span
            className={`font-display text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded ${
              team.standing === 1
                ? "bg-[#e10600] text-white"
                : team.standing <= 3
                ? "bg-[#f5a623] text-black"
                : "bg-[rgba(255,255,255,0.08)] text-[rgba(244,244,242,0.7)]"
            }`}
          >
            P{team.standing} CONSTRUCTOR
          </span>

          <div className="flex items-center gap-2">
            <span
              className="w-4 h-4 rounded-full border border-white/20"
              style={{ backgroundColor: team.color, boxShadow: `0 0 12px ${team.color}aa` }}
            />
            <span
              className="w-2.5 h-2.5 rounded-full opacity-70"
              style={{ backgroundColor: team.accentColor }}
            />
          </div>
        </div>

        {/* Team Names */}
        <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#f4f4f2] group-hover:text-white transition-colors">
          {team.name}
        </h3>
        <p className="text-xs font-mono text-[#f5a623] uppercase tracking-wider mt-1">
          {team.carModel} • {team.base}
        </p>

        <p className="text-xs text-[rgba(244,244,242,0.6)] mt-3 line-clamp-2 leading-relaxed">
          {team.description}
        </p>

        {/* Technical Specs */}
        <div className="mt-4 pt-3 border-t border-[rgba(255,255,255,0.06)] grid grid-cols-2 gap-2 text-xs">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-[rgba(244,244,242,0.4)]">
              Team Principal
            </div>
            <div className="font-semibold text-[rgba(244,244,242,0.8)] mt-0.5">
              {team.principal}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-[rgba(244,244,242,0.4)]">
              Power Unit
            </div>
            <div className="font-semibold text-[rgba(244,244,242,0.8)] mt-0.5 truncate">
              {team.powerUnit}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between">
        <div>
          <span className="font-display text-xl font-bold text-[#f4f4f2]">
            {team.seasonPoints}
          </span>
          <span className="text-xs text-[rgba(244,244,242,0.4)] ml-1 font-semibold">
            PTS
          </span>
        </div>

        <Link
          href={`/teams/${team.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#e10600] group-hover:text-white transition-colors"
        >
          <span>Team Dossier</span>
          <span>→</span>
        </Link>
      </div>
    </motion.div>
  );
}
