import Link from "next/link";

const RED = "#e10600";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        background: "var(--surface)",
        borderTop: "1px solid var(--line)",
        paddingTop: "64px",
        paddingBottom: "40px",
        marginTop: "100px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[rgba(255,255,255,0.08)]">
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 text-decoration-none">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12h4l2-6h6l2 6h4M3 12l2 8h14l2-8" stroke={RED} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-display text-xl font-bold tracking-wider text-white">
                APEX CIRCUIT
              </span>
            </Link>
            <p className="mt-4 text-sm text-[rgba(244,244,242,0.6)] max-w-sm leading-relaxed">
              The premier international open-wheel motorsport championship. Pushing aerodynamic boundaries, synthetic power unit efficiency, and relentless driver mastery.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#e10600]/10 text-[#e10600] border border-[#e10600]/30">
                2026 Season Active
              </span>
              <span className="text-xs text-[rgba(244,244,242,0.4)]">
                12 Grand Prix Rounds
              </span>
            </div>
          </div>

          {/* Column 2: Championship */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[#f5a623] mb-4">
              Championship
            </h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0 text-sm">
              <li>
                <Link href="/schedule" className="text-[rgba(244,244,242,0.6)] hover:text-white transition-colors">
                  Race Calendar
                </Link>
              </li>
              <li>
                <Link href="/standings" className="text-[rgba(244,244,242,0.6)] hover:text-white transition-colors">
                  Driver Standings
                </Link>
              </li>
              <li>
                <Link href="/standings" className="text-[rgba(244,244,242,0.6)] hover:text-white transition-colors">
                  Constructor Standings
                </Link>
              </li>
              <li>
                <Link href="/teams" className="text-[rgba(244,244,242,0.6)] hover:text-white transition-colors">
                  Teams & Drivers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Media */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[rgba(244,244,242,0.4)] mb-4">
              Media & Content
            </h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0 text-sm">
              <li>
                <Link href="/news" className="text-[rgba(244,244,242,0.6)] hover:text-white transition-colors">
                  Latest News & Reports
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-[rgba(244,244,242,0.6)] hover:text-white transition-colors">
                  Photo & Video Gallery
                </Link>
              </li>
              <li>
                <Link href="/news/monza-high-speed-low-downforce-showdown" className="text-[rgba(244,244,242,0.6)] hover:text-white transition-colors">
                  Technical Analysis
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[rgba(244,244,242,0.6)] hover:text-white transition-colors">
                  Press Accreditation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Info & Experience */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-[rgba(244,244,242,0.4)] mb-4">
              Experience
            </h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0 text-sm">
              <li>
                <Link href="/tickets" className="text-[#e10600] font-semibold hover:text-[#ff4d47] transition-colors">
                  Buy Race Passes
                </Link>
              </li>
              <li>
                <Link href="/tickets" className="text-[rgba(244,244,242,0.6)] hover:text-white transition-colors">
                  VIP Paddock Club
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[rgba(244,244,242,0.6)] hover:text-white transition-colors">
                  Contact & Support
                </Link>
              </li>
              <li>
                <span className="text-[rgba(244,244,242,0.4)] cursor-not-allowed">
                  Sim Racing League (Soon)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[rgba(244,244,242,0.38)]">
          <div>
            © {new Date().getFullYear()} Apex Circuit Championship Ltd. All rights reserved. Fictional motorsport platform demo.
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apex Circuit on X/Twitter"
              className="text-[rgba(244,244,242,0.6)] hover:text-[#e10600] transition-colors"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apex Circuit on YouTube"
              className="text-[rgba(244,244,242,0.6)] hover:text-[#e10600] transition-colors"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apex Circuit on Instagram"
              className="text-[rgba(244,244,242,0.6)] hover:text-[#e10600] transition-colors"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
