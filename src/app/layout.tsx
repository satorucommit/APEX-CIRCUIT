import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-rajdhani" });

export const metadata: Metadata = {
  title: "Apex Circuit | Official Championship",
  description: "The official home of the Apex Circuit motorsport championship. Follow live standings, calendar, teams, drivers, and race tickets.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${rajdhani.variable}`}>
      <body className="min-h-screen bg-[#08090a] text-[#f4f4f2] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
