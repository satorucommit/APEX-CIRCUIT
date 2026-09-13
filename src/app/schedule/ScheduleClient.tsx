"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import RaceCard from "@/components/RaceCard";
import { PageSection } from "@/components/PageTransition";
import { races } from "@/data/races";

export default function ScheduleClient() {
  const [filter, setFilter] = useState<"ALL" | "UPCOMING" | "COMPLETED">("ALL");

  const filteredRaces = races.filter((race) => {
    if (filter === "ALL") return true;
    if (filter === "UPCOMING") return race.status === "UPCOMING" || race.status === "LIVE";
    if (filter === "COMPLETED") return race.status === "COMPLETED";
    return true;
  });

  return (
    <div className="pt-28 pb-24 px-6 max-w-[1280px] mx-auto w-full">
      {/* Header */}
      <PageSection>
        <SectionHeading
          eyebrow="2026 Season"
          title="Race Calendar"
          description="Twelve world-class circuits, from the glamorous harbor chicane of Monaco to the high-G curves of Silverstone and the temple of speed in Monza."
        />

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {(["ALL", "UPCOMING", "COMPLETED"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === f
                  ? "bg-[#e10600] text-white shadow-[0_2px_12px_rgba(225,6,0,0.3)]"
                  : "bg-[#101214] border border-[rgba(255,255,255,0.08)] text-[rgba(244,244,242,0.6)] hover:text-white hover:border-white/20"
              }`}
            >
              {f === "ALL" ? "All 12 Rounds" : f === "UPCOMING" ? "Upcoming Rounds" : "Completed Races"}
            </button>
          ))}
        </div>
      </PageSection>

      {/* Race Cards List */}
      <div className="flex flex-col gap-4">
        {filteredRaces.map((race, index) => (
          <PageSection key={race.id} delay={index * 0.04}>
            <RaceCard race={race} />
          </PageSection>
        ))}
      </div>
    </div>
  );
}
