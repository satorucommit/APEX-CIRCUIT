"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { PageSection } from "@/components/PageTransition";

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 px-6 max-w-[1280px] mx-auto w-full">
      <PageSection>
        <SectionHeading
          eyebrow="Communications"
          title="Contact & Press Office"
          description="Get in touch with the Apex Circuit league administration, submit press accreditation inquiries, or request commercial partnership portfolios."
        />
      </PageSection>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-4 items-start">
        {/* Left Column: Form */}
        <PageSection className="lg:col-span-7">
          <div className="rounded-2xl bg-[#101214] border border-[rgba(255,255,255,0.08)] p-8 sm:p-10 relative overflow-hidden">
            <div className="speed-lines absolute inset-0 opacity-15 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#e10600]" />
                <span className="font-display text-xs font-bold uppercase tracking-widest text-[#e10600]">
                  Official Correspondence
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-6">
                Send A Transmission
              </h3>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[rgba(244,244,242,0.6)] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Adrian Newey"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-lg bg-[#17191c] border border-[rgba(255,255,255,0.1)] text-white placeholder-[rgba(244,244,242,0.3)] text-sm focus:outline-none focus:border-[#e10600] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[rgba(244,244,242,0.6)] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@team.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-lg bg-[#17191c] border border-[rgba(255,255,255,0.1)] text-white placeholder-[rgba(244,244,242,0.3)] text-sm focus:outline-none focus:border-[#e10600] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[rgba(244,244,242,0.6)] mb-2">
                        Inquiry Nature
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-lg bg-[#17191c] border border-[rgba(255,255,255,0.1)] text-white text-sm focus:outline-none focus:border-[#e10600] transition-colors"
                      >
                        <option value="General Inquiry">General Championship Inquiry</option>
                        <option value="Media & Press">Media & Press Accreditation</option>
                        <option value="Commercial & Sponsorship">Sponsorship & Commercial</option>
                        <option value="VIP Ticketing Support">VIP Paddock Club Assistance</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[rgba(244,244,242,0.6)] mb-2">
                      Your Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Specify your inquiry, media outlet credentials, or event queries..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-lg bg-[#17191c] border border-[rgba(255,255,255,0.1)] text-white placeholder-[rgba(244,244,242,0.3)] text-sm focus:outline-none focus:border-[#e10600] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg bg-[#e10600] hover:bg-[#ff1f1a] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_4px_24px_rgba(225,6,0,0.35)] mt-2 cursor-pointer"
                  >
                    Submit Transmission →
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#e10600]/20 border border-[#e10600] text-[#e10600] flex items-center justify-center text-3xl mx-auto mb-4">
                    ✓
                  </div>
                  <h4 className="font-display text-2xl font-bold uppercase tracking-tight text-white">
                    Transmission Dispatched
                  </h4>
                  <p className="mt-2 text-sm text-[rgba(244,244,242,0.7)] max-w-md mx-auto">
                    Thank you, {formData.name}. Your inquiry has been routed to the Apex Circuit communications desk. A delegate will respond within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", category: "General Inquiry", message: "" });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Send Another Transmission
                  </button>
                </div>
              )}
            </div>
          </div>
        </PageSection>

        {/* Right Column: Press / HQ Details + Map Placeholder */}
        <PageSection className="lg:col-span-5 flex flex-col gap-6">
          {/* League HQ */}
          <div className="rounded-2xl bg-[#101214] border border-[rgba(255,255,255,0.08)] p-8">
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[#f5a623] mb-4">
              Championship Headquarters
            </h4>
            <div className="space-y-4 text-sm text-[rgba(244,244,242,0.75)]">
              <div>
                <div className="text-xs uppercase text-[rgba(244,244,242,0.4)] font-semibold">Address</div>
                <div className="text-white font-medium mt-0.5">
                  Apex Circuit House, Pitlane Way<br />
                  Silverstone Technology Park, NN12 8FU<br />
                  United Kingdom
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <div className="text-xs uppercase text-[rgba(244,244,242,0.4)] font-semibold">Press Office</div>
                  <div className="text-white font-mono text-xs mt-0.5">press@apexcircuit.com</div>
                </div>
                <div>
                  <div className="text-xs uppercase text-[rgba(244,244,242,0.4)] font-semibold">Partnerships</div>
                  <div className="text-white font-mono text-xs mt-0.5">sponsor@apexcircuit.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Map & Coordinates Block */}
          <div className="relative rounded-2xl bg-[#101214] border border-[rgba(255,255,255,0.08)] p-6 overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="font-display text-xs font-bold uppercase tracking-widest text-[#e10600]">
                Telemetry Coordinates
              </span>
              <span className="font-mono text-[11px] text-[rgba(244,244,242,0.4)]">
                52.0786° N, 1.0169° W
              </span>
            </div>

            {/* Radar / Tactical Circuit Map Graphic */}
            <div className="relative aspect-[16/9] w-full rounded-xl bg-[#17191c] border border-[rgba(255,255,255,0.06)] flex items-center justify-center overflow-hidden">
              <div className="speed-lines absolute inset-0 opacity-25" />
              {/* Concentric radar rings */}
              <div className="absolute w-40 h-40 rounded-full border border-white/5" />
              <div className="absolute w-24 h-24 rounded-full border border-white/10" />
              <div className="absolute w-12 h-12 rounded-full border border-[#e10600]/30 animate-pulse" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#e10600] z-10 shadow-[0_0_12px_#e10600]" />

              <div className="absolute bottom-3 left-3 text-[10px] font-mono uppercase tracking-wider text-[rgba(244,244,242,0.5)]">
                Silverstone GP Operations Center
              </div>
            </div>
          </div>
        </PageSection>
      </div>
    </div>
  );
}
