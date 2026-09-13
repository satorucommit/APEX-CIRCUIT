"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { PageSection } from "@/components/PageTransition";
import { races } from "@/data/races";

interface TicketTier {
  id: string;
  name: string;
  badge: string;
  racingTag: string;
  price: number;
  popular?: boolean;
  description: string;
  features: string[];
}

const tiers: TicketTier[] = [
  {
    id: "general",
    name: "General Admission",
    racingTag: "Trackside Roamer",
    badge: "Entry Level",
    price: 185,
    popular: false,
    description: "Full weekend access to spectator banking, fan zones, and giant super-screens across the circuit perimeter.",
    features: [
      "Friday Practice, Saturday Quali & Sunday Race access",
      "Free roaming across all general admission mounds",
      "Access to Fanzone & interactive pit-stop challenges",
      "Giant screen live telemetry broadcast views",
      "Official Apex Circuit championship lanyard",
    ],
  },
  {
    id: "grandstand",
    name: "Reserved Grandstand",
    racingTag: "Pole Position View",
    badge: "Most Popular",
    price: 450,
    popular: true,
    description: "Numbered covered seat opposite key overtaking chicanes and pit entry with unobstructed high-speed sightlines.",
    features: [
      "Dedicated assigned covered grandstand seat (Fri-Sun)",
      "Prime view of start/finish straight or heavy braking zones",
      "Fast-track entry gates & dedicated food/drink concessions",
      "Thursday evening Pit Lane Walk access",
      "Free commemorative official race program & radio earpiece",
      "Access to post-race podium ceremony track invasion",
    ],
  },
  {
    id: "paddock-club",
    name: "VIP Paddock Club",
    racingTag: "VIP Paddock Club",
    badge: "Ultra Luxury",
    price: 1850,
    popular: false,
    description: "The gold standard in motorsport hospitality above team garages with gourmet catering and driver interviews.",
    features: [
      "Air-conditioned luxury suite above the pit garages",
      "All-day open champagne bar & multi-course gourmet cuisine",
      "Daily guided pit lane walks with team mechanics",
      "Exclusive Q&A appearances with drivers and team bosses",
      "Paddock tour & safety car fast lap raffle entry",
      "VIP parking pass & dedicated concierge arrival shuttle",
    ],
  },
];

export default function TicketsClient() {
  const [selectedRound, setSelectedRound] = useState<string>(races[6].id); // Monza default
  const [selectedTier, setSelectedTier] = useState<TicketTier | null>(null);
  const [quantity, setQuantity] = useState<number>(2);
  const [booked, setBooked] = useState<boolean>(false);

  const activeRace = races.find((r) => r.id === selectedRound) || races[6];

  const handleBook = (tier: TicketTier) => {
    setSelectedTier(tier);
    setBooked(false);
  };

  return (
    <div className="pt-28 pb-24 px-6 max-w-[1280px] mx-auto w-full">
      <PageSection>
        <SectionHeading
          eyebrow="Race Weekend Passes"
          title="Grand Prix Ticketing"
          description="Choose your vantage point for the 2026 Apex Circuit championship. From vibrant trackside roaming to covered grandstands and elite VIP hospitality."
        />

        {/* Round Selector Bar */}
        <div className="mb-12 p-6 rounded-2xl bg-[#101214] border border-[rgba(255,255,255,0.08)] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#e10600] font-bold">
              Select Championship Weekend
            </span>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-2xl">{activeRace.flag}</span>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white m-0">
                {activeRace.name}
              </h3>
              <span className="text-xs px-2.5 py-0.5 rounded bg-[rgba(255,255,255,0.06)] text-[rgba(244,244,242,0.7)] font-mono">
                {activeRace.dateRange}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <select
              value={selectedRound}
              onChange={(e) => setSelectedRound(e.target.value)}
              className="bg-[#17191c] border border-[rgba(255,255,255,0.15)] text-white text-xs font-bold uppercase tracking-wider rounded-lg px-4 py-2.5 outline-none focus:border-[#e10600]"
            >
              {races.map((r) => (
                <option key={r.id} value={r.id} className="bg-[#101214] text-white">
                  Round {String(r.round).padStart(2, "0")} — {r.name} ({r.city})
                </option>
              ))}
            </select>
          </div>
        </div>
      </PageSection>

      {/* 3 Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {tiers.map((tier, idx) => (
          <PageSection key={tier.id} delay={idx * 0.08} className="flex">
            <div
              className={`relative w-full rounded-2xl p-8 flex flex-col justify-between transition-all ${
                tier.popular
                  ? "bg-[#101214] border-2 border-[#e10600] shadow-[0_12px_48px_rgba(225,6,0,0.2)] lg:-translate-y-2"
                  : "bg-[#101214] border border-[rgba(255,255,255,0.08)] hover:border-white/20"
              }`}
            >
              {/* Popular Ribbon */}
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#e10600] text-white text-[11px] font-bold uppercase tracking-widest shadow-md">
                  Most Popular Pass
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#f5a623]">
                    {tier.racingTag}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-[rgba(244,244,242,0.5)] uppercase font-semibold">
                    {tier.badge}
                  </span>
                </div>

                <h3 className="font-display text-3xl font-bold uppercase tracking-tight text-white mt-1">
                  {tier.name}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[rgba(244,244,242,0.6)] leading-relaxed">
                  {tier.description}
                </p>

                {/* Price Display */}
                <div className="mt-6 pt-6 border-t border-[rgba(255,255,255,0.08)] flex items-baseline gap-1">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-white">
                    ${tier.price}
                  </span>
                  <span className="text-xs text-[rgba(244,244,242,0.4)] uppercase font-semibold">
                    / 3-Day Pass
                  </span>
                </div>

                {/* Feature Checklist */}
                <ul className="mt-8 space-y-3 text-xs sm:text-sm text-[rgba(244,244,242,0.75)] list-none p-0">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#e10600] font-bold mt-0.5">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.08)]">
                <button
                  type="button"
                  onClick={() => handleBook(tier)}
                  className={`w-full py-3.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    tier.popular
                      ? "bg-[#e10600] hover:bg-[#ff1f1a] text-white shadow-[0_4px_20px_rgba(225,6,0,0.4)]"
                      : "bg-[#17191c] hover:bg-white hover:text-black border border-[rgba(255,255,255,0.12)] text-white"
                  }`}
                >
                  Select {tier.name}
                </button>
              </div>
            </div>
          </PageSection>
        ))}
      </div>

      {/* Booking Checkout Modal */}
      <AnimatePresence>
        {selectedTier && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
            onClick={() => setSelectedTier(null)}
          >
            <div
              className="relative max-w-lg w-full bg-[#101214] border border-[rgba(255,255,255,0.12)] rounded-2xl p-6 sm:p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedTier(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm"
              >
                ✕
              </button>

              {!booked ? (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#e10600]" />
                    <span className="font-display text-xs font-bold uppercase tracking-widest text-[#e10600]">
                      Weekend Pass Booking
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white m-0">
                    {selectedTier.name}
                  </h3>

                  <div className="mt-3 p-4 rounded-xl bg-[#17191c] border border-[rgba(255,255,255,0.06)] flex items-center justify-between">
                    <div>
                      <div className="text-xs text-[rgba(244,244,242,0.4)] uppercase">Race Weekend</div>
                      <div className="font-bold text-white text-sm">{activeRace.name}</div>
                      <div className="text-xs text-[#f5a623]">{activeRace.dateRange}</div>
                    </div>
                    <div className="text-2xl">{activeRace.flag}</div>
                  </div>

                  {/* Quantity selector */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm font-semibold text-[rgba(244,244,242,0.7)]">Number of Passes:</span>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 rounded bg-white/10 text-white font-bold hover:bg-white/20"
                      >
                        -
                      </button>
                      <span className="font-display text-xl font-bold text-white">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity(Math.min(8, quantity + 1))}
                        className="w-8 h-8 rounded bg-white/10 text-white font-bold hover:bg-white/20"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Order summary */}
                  <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between">
                    <span className="text-sm text-[rgba(244,244,242,0.5)]">Total (Incl. FIA taxes):</span>
                    <span className="font-display text-3xl font-bold text-white">
                      ${selectedTier.price * quantity}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setBooked(true)}
                    className="mt-6 w-full py-3.5 rounded-lg bg-[#e10600] hover:bg-[#ff1f1a] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(225,6,0,0.4)]"
                  >
                    Confirm & Reserve Passes
                  </button>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="w-14 h-14 rounded-full bg-[#e10600]/20 border border-[#e10600] text-[#e10600] flex items-center justify-center text-2xl mx-auto mb-4">
                    ✓
                  </div>
                  <h3 className="font-display text-3xl font-bold uppercase tracking-tight text-white">
                    Passes Reserved!
                  </h3>
                  <p className="mt-2 text-sm text-[rgba(244,244,242,0.7)]">
                    Your {quantity}x {selectedTier.name} for the {activeRace.name} have been confirmed. An official digital credential has been issued.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedTier(null)}
                    className="mt-6 px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
