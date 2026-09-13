import type { Metadata } from "next";
import StandingsClient from "./StandingsClient";

export const metadata: Metadata = {
  title: "Championship Standings | Apex Circuit",
  description: "Official 2026 World Driver and Constructor championship standings for the Apex Circuit racing series.",
};

export default function StandingsPage() {
  return <StandingsClient />;
}
