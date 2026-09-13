import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import TeamCard from "@/components/TeamCard";
import { PageSection } from "@/components/PageTransition";
import { teams } from "@/data/teams";

export const metadata: Metadata = {
  title: "Teams & Constructors | Apex Circuit",
  description: "Meet all 10 constructor teams competing in the 2026 Apex Circuit championship. Explore technical specifications, car models, and driver rosters.",
};

export default function TeamsPage() {
  return (
    <div className="pt-28 pb-24 px-6 max-w-[1280px] mx-auto w-full">
      <PageSection>
        <SectionHeading
          eyebrow="The Paddock"
          title="Constructors Grid"
          description="Ten elite motorsport outfits, combining composite carbon engineering, advanced hybrid propulsion, and aerodynamic mastery."
        />
      </PageSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {teams.map((team, index) => (
          <PageSection key={team.id} delay={index * 0.05}>
            <TeamCard team={team} />
          </PageSection>
        ))}
      </div>
    </div>
  );
}
