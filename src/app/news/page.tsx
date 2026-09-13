import type { Metadata } from "next";
import NewsClient from "./NewsClient";

export const metadata: Metadata = {
  title: "Official News & Press | Apex Circuit",
  description: "Stay ahead of the grid with breaking race reports, technical dissections, aerodynamic upgrades, and interviews from Apex Circuit.",
};

export default function NewsPage() {
  return <NewsClient />;
}
