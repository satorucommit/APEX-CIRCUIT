import type { Metadata } from "next";
import TicketsClient from "./TicketsClient";

export const metadata: Metadata = {
  title: "Official Race Passes & Tickets | Apex Circuit",
  description: "Secure your 2026 race passes for Apex Circuit championships. General Admission, Pole Position Grandstands, and VIP Paddock Club hospitality.",
};

export default function TicketsPage() {
  return <TicketsClient />;
}
