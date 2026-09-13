import type { Metadata } from "next";
import ScheduleClient from "./ScheduleClient";

export const metadata: Metadata = {
  title: "Race Calendar 2026 | Apex Circuit",
  description: "Explore the full 12-round calendar of the 2026 Apex Circuit championship, including race dates, circuit lengths, lap records, and winners.",
};

export default function SchedulePage() {
  return <ScheduleClient />;
}
