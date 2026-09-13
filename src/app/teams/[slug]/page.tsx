import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import DriverCard from "@/components/DriverCard";
import { PageSection } from "@/components/PageTransition";
import { teams } from "@/data/teams";
import { drivers } from "@/data/drivers";

interface TeamDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return teams.map((team) => ({
    slug: team.slug,
  }));
}

export async function generateMetadata({ params }: TeamDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const team = teams.find((t) => t.slug === slug);
  if (!team) return { title: "Team Not Found | Apex Circuit" };

  return {
    title: `${team.name} | Apex Circuit`,
    description: team.description,
  };
}

export default async function TeamDetailPage({ params }: TeamDetailPageProps) {
  const { slug } = await params;
  const team = teams.find((t) => t.slug === slug);

  if (!team) {
    notFound();
  }

  const teamDrivers = drivers.filter((d) => team.driverIds.includes(d.id));

  return (
    <div className="pt-24 pb-24 px-6 max-w-[1280px] mx-auto w-full">
      {/* Back Link */}
      <PageSection>
        <Link
          href="/teams"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[rgba(244,244,242,0.5)] hover:text-white mb-8 transition-colors"
        >
          <span>←</span>
          <span>Back to All Teams</span>
        </Link>
      </PageSection>

      {/* Hero Band with Team Brand Ambient Glow */}
      <PageSection>
        <div className="relative overflow-hidden rounded-2xl bg-[#101214] border border-[rgba(255,255,255,0.08)] p-8 sm:p-12 mb-12">
          {/* Ambient Glow */}
          <div
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[100px] opacity-25 pointer-events-none"
            style={{ backgroundColor: team.color }}
          />
          <div className="speed-lines absolute inset-0 opacity-20 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-3.5 h-3.5 rounded-full shadow-lg"
                  style={{ backgroundColor: team.color }}
                />
                <span className="font-display text-sm font-bold uppercase tracking-widest text-[#f5a623]">
                  Constructor Standing P{team.standing}
                </span>
                <span className="text-xs text-[rgba(244,244,242,0.4)]">•</span>
                <span className="text-xs text-[rgba(244,244,242,0.6)] font-mono">
                  {team.base}
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#f4f4f2] m-0">
                {team.name}
              </h1>

              <p className="mt-4 text-base text-[rgba(244,244,242,0.7)] leading-relaxed max-w-2xl">
                {team.description}
              </p>

              {/* Technical Spec Tags */}
              <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono">
                <div className="px-3 py-1.5 rounded-md bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]">
                  <span className="text-[rgba(244,244,242,0.4)]">CHASSIS: </span>
                  <span className="text-white font-bold">{team.carModel}</span>
                </div>
                <div className="px-3 py-1.5 rounded-md bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]">
                  <span className="text-[rgba(244,244,242,0.4)]">POWER UNIT: </span>
                  <span className="text-white font-bold">{team.powerUnit}</span>
                </div>
                <div className="px-3 py-1.5 rounded-md bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]">
                  <span className="text-[rgba(244,244,242,0.4)]">TEAM BOSS: </span>
                  <span className="text-white font-bold">{team.principal}</span>
                </div>
              </div>
            </div>

            {/* Season Metrics Grid */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-[#17191c] border border-[rgba(255,255,255,0.06)] text-center">
                <div className="font-display text-3xl font-bold text-[#f4f4f2]">
                  {team.seasonPoints}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[rgba(244,244,242,0.4)] mt-1">
                  Championship Points
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#17191c] border border-[rgba(255,255,255,0.06)] text-center">
                <div className="font-display text-3xl font-bold text-[#e10600]">
                  {team.seasonWins}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[rgba(244,244,242,0.4)] mt-1">
                  Grand Prix Wins
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#17191c] border border-[rgba(255,255,255,0.06)] text-center">
                <div className="font-display text-3xl font-bold text-[#f5a623]">
                  {team.seasonPodiums}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[rgba(244,244,242,0.4)] mt-1">
                  Podium Finishes
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#17191c] border border-[rgba(255,255,255,0.06)] text-center">
                <div className="font-display text-3xl font-bold text-[#f4f4f2]">
                  {team.championships}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[rgba(244,244,242,0.4)] mt-1">
                  World Titles
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Driver Lineup (2-up DriverCard row) */}
      <PageSection>
        <SectionHeading
          eyebrow="Cockpit Lineup"
          title="Official Drivers"
          description={`The two registered pilots campaigning the ${team.carModel} across the 2026 championship calendar.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {teamDrivers.map((driver) => (
            <DriverCard key={driver.id} driver={driver} />
          ))}
        </div>
      </PageSection>

      {/* Telemetry Snapshot */}
      <PageSection className="mt-14">
        <div className="p-6 rounded-xl bg-[#101214] border border-[rgba(255,255,255,0.06)] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-[rgba(244,244,242,0.4)]">
              Pole Positions
            </div>
            <div className="font-display text-2xl font-bold text-[#f4f4f2] mt-1">
              {team.stats.poles}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-[rgba(244,244,242,0.4)]">
              Fastest Laps
            </div>
            <div className="font-display text-2xl font-bold text-[#f5a623] mt-1">
              {team.stats.fastestLaps}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-[rgba(244,244,242,0.4)]">
              Avg. Pit Stop Time
            </div>
            <div className="font-display text-2xl font-bold text-[#e10600] mt-1">
              {team.stats.pitStopAvg}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-[rgba(244,244,242,0.4)]">
              Trap Velocity
            </div>
            <div className="font-display text-2xl font-bold text-[#f4f4f2] mt-1">
              {team.stats.topSpeed}
            </div>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
