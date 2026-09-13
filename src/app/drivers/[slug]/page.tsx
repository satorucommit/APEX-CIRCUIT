import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { PageSection } from "@/components/PageTransition";
import { drivers } from "@/data/drivers";
import { teams } from "@/data/teams";

interface DriverDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return drivers.map((driver) => ({
    slug: driver.slug,
  }));
}

export async function generateMetadata({ params }: DriverDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const driver = drivers.find((d) => d.slug === slug);
  if (!driver) return { title: "Driver Not Found | Apex Circuit" };

  return {
    title: `${driver.name} #${driver.number} | Apex Circuit`,
    description: driver.bio,
  };
}

export default async function DriverDetailPage({ params }: DriverDetailPageProps) {
  const { slug } = await params;
  const driver = drivers.find((d) => d.slug === slug);

  if (!driver) {
    notFound();
  }

  const team = teams.find((t) => t.id === driver.teamId);

  return (
    <div className="pt-24 pb-24 px-6 max-w-[1280px] mx-auto w-full">
      {/* Back Link */}
      <PageSection>
        <Link
          href="/standings"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[rgba(244,244,242,0.5)] hover:text-white mb-8 transition-colors"
        >
          <span>←</span>
          <span>Back to Standings</span>
        </Link>
      </PageSection>

      {/* Hero Profile Card with Massive Watermark Numeral */}
      <PageSection>
        <div className="relative overflow-hidden rounded-2xl bg-[#101214] border border-[rgba(255,255,255,0.08)] p-8 sm:p-14 mb-12">
          {/* Ambient Glow using driver team color */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[110px] opacity-20 pointer-events-none"
            style={{ backgroundColor: driver.teamColor }}
          />

          {/* Huge Watermark Numeral in font-display */}
          <div
            className="font-display absolute -right-4 -bottom-14 text-[160px] sm:text-[240px] md:text-[320px] font-bold text-white pointer-events-none select-none leading-none z-0"
            style={{ opacity: 0.035 }}
          >
            {driver.number}
          </div>

          <div className="speed-lines absolute inset-0 opacity-15 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Avatar / Number Emblem */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-2xl bg-[#17191c] border-2 border-[rgba(255,255,255,0.1)] flex flex-col items-center justify-center p-6 shadow-2xl overflow-hidden">
                <div className="speed-lines absolute inset-0 opacity-40 pointer-events-none" />
                <span
                  className="w-full h-1 absolute top-0 left-0"
                  style={{ backgroundColor: driver.teamColor }}
                />
                <span className="text-4xl sm:text-5xl mb-2">{driver.flag}</span>
                <span className="font-display text-5xl sm:text-6xl font-bold tracking-tight text-white">
                  #{driver.number}
                </span>
                <span className="font-mono text-sm tracking-widest text-[#e10600] font-bold uppercase mt-1">
                  {driver.code}
                </span>
              </div>
            </div>

            {/* Profile Info */}
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span
                  className={`font-display text-xs font-bold uppercase tracking-widest px-3 py-1 rounded ${
                    driver.standing === 1
                      ? "bg-[#e10600] text-white"
                      : driver.standing <= 3
                      ? "bg-[#f5a623] text-black"
                      : "bg-[rgba(255,255,255,0.08)] text-[rgba(244,244,242,0.8)]"
                  }`}
                >
                  P{driver.standing} in World Championship
                </span>

                <Link
                  href={`/teams/${driver.teamId}`}
                  className="text-xs font-semibold uppercase tracking-wider text-[rgba(244,244,242,0.6)] hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: driver.teamColor }}
                  />
                  {driver.teamName}
                </Link>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#f4f4f2] m-0">
                {driver.name}
              </h1>

              <div className="flex items-center gap-3 text-sm text-[rgba(244,244,242,0.5)] mt-2 font-mono">
                <span>{driver.country}</span>
                <span>•</span>
                <span>Age {driver.age}</span>
                <span>•</span>
                <span>{driver.careerStarts} Career Starts</span>
              </div>

              <p className="mt-5 text-base text-[rgba(244,244,242,0.75)] leading-relaxed max-w-2xl">
                {driver.bio}
              </p>

              {/* 2026 Season Stats Grid */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 rounded-xl bg-[#17191c] border border-[rgba(255,255,255,0.06)] text-center">
                  <div className="font-display text-3xl font-bold text-[#f4f4f2]">
                    {driver.points}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-[rgba(244,244,242,0.4)] mt-1 font-bold">
                    Season Points
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#17191c] border border-[rgba(255,255,255,0.06)] text-center">
                  <div className="font-display text-3xl font-bold text-[#e10600]">
                    {driver.wins}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-[rgba(244,244,242,0.4)] mt-1 font-bold">
                    Season Wins
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#17191c] border border-[rgba(255,255,255,0.06)] text-center">
                  <div className="font-display text-3xl font-bold text-[#f5a623]">
                    {driver.podiums}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-[rgba(244,244,242,0.4)] mt-1 font-bold">
                    Season Podiums
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#17191c] border border-[rgba(255,255,255,0.06)] text-center">
                  <div className="font-display text-3xl font-bold text-[#f4f4f2]">
                    {driver.poles}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-[rgba(244,244,242,0.4)] mt-1 font-bold">
                    Pole Positions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Career Milestones & Team Association */}
      <PageSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-[#101214] border border-[rgba(255,255,255,0.08)]">
            <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white mb-4">
              Career Telemetry
            </h3>
            <ul className="space-y-3 text-sm text-[rgba(244,244,242,0.7)] list-none p-0">
              <li className="flex justify-between py-2 border-b border-[rgba(255,255,255,0.05)]">
                <span className="text-[rgba(244,244,242,0.4)]">World Championship Titles</span>
                <span className="font-bold text-white">{driver.worldChampionships}</span>
              </li>
              <li className="flex justify-between py-2 border-b border-[rgba(255,255,255,0.05)]">
                <span className="text-[rgba(244,244,242,0.4)]">Fastest Laps Registered</span>
                <span className="font-bold text-[#f5a623]">{driver.fastestLaps}</span>
              </li>
              <li className="flex justify-between py-2 border-b border-[rgba(255,255,255,0.05)]">
                <span className="text-[rgba(244,244,242,0.4)]">Championship Starts</span>
                <span className="font-bold text-white">{driver.careerStarts}</span>
              </li>
              <li className="flex justify-between py-2 border-b border-[rgba(255,255,255,0.05)]">
                <span className="text-[rgba(244,244,242,0.4)]">Permanent Super License Number</span>
                <span className="font-bold text-[#e10600]">#{driver.number}</span>
              </li>
            </ul>
          </div>

          {team && (
            <div className="p-8 rounded-xl bg-[#101214] border border-[rgba(255,255,255,0.08)] flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#f5a623] font-bold">
                  Representing Team
                </span>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white mt-1">
                  {team.name}
                </h3>
                <p className="mt-2 text-sm text-[rgba(244,244,242,0.6)] leading-relaxed">
                  Campaigning the {team.carModel} with power from the {team.powerUnit}.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between">
                <span className="text-xs text-[rgba(244,244,242,0.5)]">
                  Constructor Rank: P{team.standing} ({team.seasonPoints} PTS)
                </span>
                <Link
                  href={`/teams/${team.slug}`}
                  className="text-xs font-bold uppercase tracking-wider text-[#e10600] hover:text-white transition-colors"
                >
                  View Team Profile →
                </Link>
              </div>
            </div>
          )}
        </div>
      </PageSection>
    </div>
  );
}
