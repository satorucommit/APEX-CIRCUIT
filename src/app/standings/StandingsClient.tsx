"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import StandingsTable from "@/components/StandingsTable";
import { PageSection } from "@/components/PageTransition";
import { driverStandings, constructorStandings } from "@/data/standings";

export default function StandingsClient() {
  const [activeTab, setActiveTab] = useState<"drivers" | "constructors">("drivers");

  return (
    <div className="pt-28 pb-24 px-6 max-w-[1280px] mx-auto w-full">
      <PageSection>
        <SectionHeading
          eyebrow="Championship Tables"
          title="Season Standings"
          description="Live points table tracking every overtake and sprint finish. Drivers and constructors vie for the ultimate crown in open-wheel motorsport."
        />

        {/* Tabs with layoutId animated sliding pill */}
        <div className="inline-flex items-center p-1.5 rounded-full bg-[#101214] border border-[rgba(255,255,255,0.08)] mb-8">
          <button
            type="button"
            onClick={() => setActiveTab("drivers")}
            className="relative px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            style={{ color: activeTab === "drivers" ? "#ffffff" : "var(--text-dim)" }}
          >
            {activeTab === "drivers" && (
              <motion.span
                layoutId="standings-tab-pill"
                className="absolute inset-0 rounded-full bg-[#e10600]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">Driver Standings (20)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("constructors")}
            className="relative px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            style={{ color: activeTab === "constructors" ? "#ffffff" : "var(--text-dim)" }}
          >
            {activeTab === "constructors" && (
              <motion.span
                layoutId="standings-tab-pill"
                className="absolute inset-0 rounded-full bg-[#e10600]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">Constructor Standings (10)</span>
          </button>
        </div>
      </PageSection>

      {/* Render the Table */}
      <PageSection>
        {activeTab === "drivers" ? (
          <div>
            <div className="mb-4 flex items-center justify-between text-xs text-[rgba(244,244,242,0.5)]">
              <span>Showing all 20 active championship drivers</span>
              <span>Updated after Round 06 (Spa-Francorchamps)</span>
            </div>
            <StandingsTable drivers={driverStandings} type="drivers" />
          </div>
        ) : (
          <div>
            <div className="mb-4 flex items-center justify-between text-xs text-[rgba(244,244,242,0.5)]">
              <span>Showing all 10 constructor teams</span>
              <span>Updated after Round 06 (Spa-Francorchamps)</span>
            </div>
            <StandingsTable constructors={constructorStandings} type="constructors" />
          </div>
        )}
      </PageSection>

      {/* Championship Scoring Regulation Note */}
      <PageSection className="mt-16">
        <div className="p-6 rounded-xl bg-[#101214] border border-[rgba(255,255,255,0.06)] text-xs text-[rgba(244,244,242,0.5)] leading-relaxed">
          <span className="text-[#f5a623] font-bold uppercase tracking-wider mr-2">
            Points System:
          </span>
          P1: 25 pts • P2: 18 pts • P3: 15 pts • P4: 12 pts • P5: 10 pts • P6: 8 pts • P7: 6 pts • P8: 4 pts • P9: 2 pts • P10: 1 pt. Fastest Lap bonus: +1 pt if finishing within the top 10.
        </div>
      </PageSection>
    </div>
  );
}
