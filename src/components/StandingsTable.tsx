"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { DriverStanding, ConstructorStanding } from "@/data/standings";

interface StandingsTableProps {
  drivers?: DriverStanding[];
  constructors?: ConstructorStanding[];
  type?: "drivers" | "constructors";
  limit?: number;
}

export default function StandingsTable({
  drivers,
  constructors,
  type = "drivers",
  limit,
}: StandingsTableProps) {
  const isDriver = type === "drivers";
  const rawList = isDriver ? drivers || [] : constructors || [];
  const list = limit ? rawList.slice(0, limit) : rawList;

  const getPositionStyle = (pos: number) => {
    if (pos === 1) return "text-[#e10600] font-bold";
    if (pos === 2 || pos === 3) return "text-[#f5a623] font-bold";
    return "text-[rgba(244,244,242,0.45)] font-semibold";
  };

  const renderDelta = (delta: number) => {
    if (delta > 0) {
      return (
        <span className="inline-flex items-center text-[11px] font-bold text-emerald-400 gap-0.5">
          <span>▲</span>
          <span>{delta}</span>
        </span>
      );
    }
    if (delta < 0) {
      return (
        <span className="inline-flex items-center text-[11px] font-bold text-rose-500 gap-0.5">
          <span>▼</span>
          <span>{Math.abs(delta)}</span>
        </span>
      );
    }
    return (
      <span className="text-[11px] font-medium text-[rgba(244,244,242,0.25)]">
        —
      </span>
    );
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[620px] flex flex-col gap-2">
        {/* Table Header */}
        <div className="grid grid-cols-12 px-5 py-3 text-[11px] uppercase tracking-widest text-[rgba(244,244,242,0.4)] font-bold border-b border-[rgba(255,255,255,0.06)]">
          <div className="col-span-1 text-center">POS</div>
          <div className="col-span-6">{isDriver ? "DRIVER & TEAM" : "CONSTRUCTOR"}</div>
          <div className="col-span-2 text-center">TREND</div>
          <div className="col-span-1 text-center">WINS</div>
          <div className="col-span-2 text-right pr-2">PTS</div>
        </div>

        {/* Rows */}
        {list.map((item) => {
          const pos = item.position;
          const posClass = getPositionStyle(pos);

          if (isDriver) {
            const driver = item as DriverStanding;
            return (
              <motion.div
                key={driver.driverId}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="group relative grid grid-cols-12 items-center px-5 py-3.5 rounded-lg bg-[#101214] border border-[rgba(255,255,255,0.06)] hover:border-[#e10600]/40 transition-colors cursor-pointer"
              >
                {/* Active red indicator on hover */}
                <div className="absolute left-0 top-1 bottom-1 w-1 rounded-r bg-transparent group-hover:bg-[#e10600] transition-colors" />

                {/* POS */}
                <div className="col-span-1 text-center">
                  <span className={`font-display text-xl sm:text-2xl ${posClass}`}>
                    {pos}
                  </span>
                </div>

                {/* Driver & Team */}
                <div className="col-span-6 flex items-center gap-3">
                  <span
                    className="w-1.5 h-7 rounded-full shrink-0"
                    style={{ backgroundColor: driver.teamColor }}
                  />
                  <div className="flex flex-col">
                    <Link
                      href={`/drivers/${driver.driverId}`}
                      className="text-sm sm:text-base font-bold text-[#f4f4f2] group-hover:text-[#e10600] transition-colors inline-flex items-center gap-2"
                    >
                      <span>{driver.driverName}</span>
                      <span className="font-mono text-xs font-semibold px-1.5 py-0.5 rounded bg-[rgba(255,255,255,0.06)] text-[rgba(244,244,242,0.6)]">
                        #{driver.number}
                      </span>
                    </Link>
                    <span className="text-xs text-[rgba(244,244,242,0.45)]">
                      {driver.teamName}
                    </span>
                  </div>
                </div>

                {/* Delta */}
                <div className="col-span-2 text-center">
                  {renderDelta(driver.delta)}
                </div>

                {/* Wins */}
                <div className="col-span-1 text-center font-display text-sm text-[rgba(244,244,242,0.7)] font-semibold">
                  {driver.wins}
                </div>

                {/* PTS */}
                <div className="col-span-2 text-right pr-2">
                  <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#f4f4f2]">
                    {driver.points}
                  </span>
                </div>
              </motion.div>
            );
          } else {
            const team = item as ConstructorStanding;
            return (
              <motion.div
                key={team.teamId}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="group relative grid grid-cols-12 items-center px-5 py-3.5 rounded-lg bg-[#101214] border border-[rgba(255,255,255,0.06)] hover:border-[#e10600]/40 transition-colors cursor-pointer"
              >
                <div className="absolute left-0 top-1 bottom-1 w-1 rounded-r bg-transparent group-hover:bg-[#e10600] transition-colors" />

                <div className="col-span-1 text-center">
                  <span className={`font-display text-xl sm:text-2xl ${posClass}`}>
                    {pos}
                  </span>
                </div>

                <div className="col-span-6 flex items-center gap-3">
                  <span
                    className="w-1.5 h-7 rounded-full shrink-0"
                    style={{ backgroundColor: team.color }}
                  />
                  <div className="flex flex-col">
                    <Link
                      href={`/teams/${team.teamId}`}
                      className="text-sm sm:text-base font-bold text-[#f4f4f2] group-hover:text-[#e10600] transition-colors"
                    >
                      {team.teamName}
                    </Link>
                    <span className="text-xs text-[rgba(244,244,242,0.45)]">
                      {team.shortName}
                    </span>
                  </div>
                </div>

                <div className="col-span-2 text-center">
                  {renderDelta(team.delta)}
                </div>

                <div className="col-span-1 text-center font-display text-sm text-[rgba(244,244,242,0.7)] font-semibold">
                  {team.wins}
                </div>

                <div className="col-span-2 text-right pr-2">
                  <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#f4f4f2]">
                    {team.points}
                  </span>
                </div>
              </motion.div>
            );
          }
        })}
      </div>
    </div>
  );
}
