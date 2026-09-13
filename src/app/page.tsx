import Hero from "@/components/Hero";
import StatCounter from "@/components/StatCounter";
import RaceCard from "@/components/RaceCard";
import StandingsTable from "@/components/StandingsTable";
import NewsCard from "@/components/NewsCard";
import TeamCard from "@/components/TeamCard";
import SectionHeading from "@/components/SectionHeading";
import { PageSection } from "@/components/PageTransition";
import { getNextRace } from "@/data/races";
import { driverStandings } from "@/data/standings";
import { newsArticles } from "@/data/news";
import { teams } from "@/data/teams";
import Link from "next/link";

export default function HomePage() {
  const nextRace = getNextRace();
  const topNews = newsArticles.slice(0, 3);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section with looping background video */}
      <Hero
        nextRace={{
          name: nextRace.name,
          location: `${nextRace.city}, ${nextRace.country}`,
          date: nextRace.date,
          round: nextRace.round,
        }}
      />

      {/* 2. Stat Strip */}
      <section className="w-full bg-[#101214] border-y border-[rgba(255,255,255,0.08)] relative z-20">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 lg:grid-cols-4">
          <StatCounter
            value={12}
            label="Grand Prix Rounds"
            sublabel="Across 5 Continents"
          />
          <StatCounter
            value={10}
            label="Constructors"
            sublabel="Engineering Vanguard"
          />
          <StatCounter
            value={20}
            label="Elite Drivers"
            sublabel="Single-Seat Maestros"
          />
          <StatCounter
            value={354}
            suffix="km/h"
            label="Peak Top Speed"
            sublabel="Monza Trap Telemetry"
          />
        </div>
      </section>

      {/* Main Content Area with Speed Lines */}
      <div className="max-w-[1280px] mx-auto px-6 py-20 w-full flex flex-col gap-28 relative">
        {/* Background Speed Line Grid Motif */}
        <div className="speed-lines absolute inset-0 opacity-15 pointer-events-none" />

        {/* 3. Next Race Spotlight */}
        <PageSection className="relative z-10">
          <SectionHeading
            eyebrow="Next On The Calendar"
            title="Round 07 Spotlight"
            description="The European season reaches crescendo at the legendary Autodromo Nazionale Monza. Prepare for high-octane drafting and downforce limits."
            linkText="Full 2026 Calendar"
            linkHref="/schedule"
          />
          <div className="mt-6">
            <RaceCard race={nextRace} spotlight={true} />
          </div>
        </PageSection>

        {/* 4. Live Onboard Telemetry & F1 Race Video Loop Reel */}
        <PageSection className="relative z-10">
          <SectionHeading
            eyebrow="Cockpit Telemetry"
            title="Onboard Race Feed"
            description="Direct visual feed from the ARR-26 Vanguard cutting through Monza's Curva Grande. Live telemetry overlays and continuous high-definition loop."
            linkText="View Video Gallery"
            linkHref="/gallery"
          />
          <div className="mt-6 relative overflow-hidden rounded-2xl bg-[#101214] border border-[rgba(255,255,255,0.1)] shadow-2xl">
            <div className="relative aspect-video w-full max-h-[560px] overflow-hidden bg-black">
              {/* Looping F1 Race Video */}
              <video
                src="/videos/f1-monza-onboard.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090a]/90 via-transparent to-[#08090a]/40 pointer-events-none" />
              <div className="speed-lines absolute inset-0 opacity-20 pointer-events-none" />

              {/* F1 HUD / Telemetry Overlay */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#e10600] text-white shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  LIVE ONBOARD LOOP
                </span>
                <span className="font-mono text-xs text-white/80 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  CAR #44 • VANCE (P1)
                </span>
              </div>

              <div className="absolute top-4 right-4 z-10 font-mono text-xs text-emerald-400 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                DRS ACTIVE • SECTOR 2 PURPLE
              </div>

              {/* Bottom Telemetry Gauges */}
              <div className="absolute bottom-4 inset-x-4 z-10 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-[10px] font-mono text-white/50 uppercase">SPEED</div>
                    <div className="font-display text-3xl font-bold text-white leading-none">
                      348 <span className="text-xs text-[#f5a623]">KM/H</span>
                    </div>
                  </div>
                  <div className="h-8 w-[1px] bg-white/10" />
                  <div>
                    <div className="text-[10px] font-mono text-white/50 uppercase">GEAR</div>
                    <div className="font-display text-3xl font-bold text-[#e10600] leading-none">
                      7
                    </div>
                  </div>
                  <div className="h-8 w-[1px] bg-white/10" />
                  <div>
                    <div className="text-[10px] font-mono text-white/50 uppercase">RPM</div>
                    <div className="font-display text-2xl font-bold text-white leading-none">
                      12,450
                    </div>
                  </div>
                  <div className="h-8 w-[1px] bg-white/10 hidden sm:block" />
                  <div className="hidden sm:block">
                    <div className="text-[10px] font-mono text-white/50 uppercase">THROTTLE / BRAKE</div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-16 h-2 bg-emerald-500 rounded-full" />
                      <div className="w-4 h-2 bg-rose-500 rounded-full" />
                    </div>
                  </div>
                </div>

                <Link
                  href="/gallery"
                  className="px-4 py-2 rounded-lg bg-[#e10600] hover:bg-[#ff1f1a] text-white text-xs font-bold uppercase tracking-wider transition-all"
                >
                  All Race Reels →
                </Link>
              </div>
            </div>
          </div>
        </PageSection>

        {/* 5. Standings Preview */}
        <PageSection className="relative z-10">
          <SectionHeading
            eyebrow="Championship Hunt"
            title="World Driver Standings"
            description="Marcus Vance and Lorenzo Bellini fight tooth and nail for the title, with Julian Weber lurking in striking range."
            linkText="View Full Standings"
            linkHref="/standings"
          />
          <div className="mt-6">
            <StandingsTable drivers={driverStandings} type="drivers" limit={5} />
          </div>
        </PageSection>

        {/* 6. Latest News */}
        <PageSection className="relative z-10">
          <SectionHeading
            eyebrow="Inside The Paddock"
            title="Headlines & Reports"
            description="Race debriefs, aerodynamic technical breakthroughs, and exclusive driver access from the world of Apex Circuit."
            linkText="All News Articles"
            linkHref="/news"
          />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {topNews.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </PageSection>

        {/* 7. Teams Strip */}
        <PageSection className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block w-2 h-2 bg-[#e10600]" />
                <span className="font-display text-xs font-bold tracking-[0.2em] text-[#e10600] uppercase">
                  Constructor Grid
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#f4f4f2] m-0">
                The 2026 Contenders
              </h2>
            </div>
            <Link
              href="/teams"
              className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[rgba(244,244,242,0.7)] hover:text-white pb-1 border-b border-[rgba(255,255,255,0.15)] hover:border-[#e10600] transition-colors"
            >
              All 10 Teams & Specs →
            </Link>
          </div>

          {/* Horizontally scrollable row with custom scrollbar */}
          <div className="flex items-stretch gap-5 overflow-x-auto pb-6 pt-2 snap-x no-scrollbar">
            {teams.map((team) => (
              <TeamCard key={team.id} team={team} compact={true} />
            ))}
          </div>
        </PageSection>

        {/* Call to Action Banner: Race Weekend Passes */}
        <PageSection className="relative z-10">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#17191c] via-[#101214] to-[#17191c] border border-[rgba(255,255,255,0.1)] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="speed-lines absolute inset-0 opacity-25 pointer-events-none" />
            <div className="relative z-10 max-w-xl">
              <span className="font-display text-xs font-bold tracking-[0.2em] text-[#f5a623] uppercase">
                Feel The Roar Trackside
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white mt-2">
                Secure Your Weekend Passes
              </h3>
              <p className="mt-3 text-sm text-[rgba(244,244,242,0.65)] leading-relaxed">
                Experience 350 km/h flybys, pit lane walks, and exclusive VIP hospitality. Grandstand seats and Paddock Club access are selling rapidly.
              </p>
            </div>
            <div className="relative z-10 shrink-0 flex flex-col sm:flex-row gap-4">
              <Link
                href="/tickets"
                className="px-8 py-4 rounded-lg bg-[#e10600] hover:bg-[#ff1f1a] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-[0_4px_24px_rgba(225,6,0,0.4)] text-center"
              >
                Explore Race Tickets
              </Link>
              <Link
                href="/schedule"
                className="px-8 py-4 rounded-lg border border-[rgba(255,255,255,0.15)] hover:border-white/40 text-white font-bold text-sm uppercase tracking-wider transition-colors text-center"
              >
                Calendar Dates
              </Link>
            </div>
          </div>
        </PageSection>
      </div>
    </div>
  );
}
