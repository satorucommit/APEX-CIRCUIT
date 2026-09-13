"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const RED = "#e10600";

const links = [
  { label: "Schedule", href: "/schedule" },
  { label: "Standings", href: "/standings" },
  { label: "Teams", href: "/teams" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "18px",
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
          padding: "0 20px",
        }}
      >
        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "26px",
            padding: "8px 8px 8px 18px",
            borderRadius: "999px",
            border: "1px solid var(--line)",
            background: "rgba(8,9,10,0.7)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
            maxWidth: "100%",
          }}
        >
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 12h4l2-6h6l2 6h4M3 12l2 8h14l2-8" stroke={RED} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-display" style={{ fontSize: "17px", fontWeight: 700, color: "#fff", letterSpacing: "0.01em" }}>
              APEX CIRCUIT
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: "2px" }} onMouseLeave={() => setHovered(null)}>
            {links.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHovered(link.href)}
                  style={{
                    position: "relative",
                    padding: "8px 14px",
                    borderRadius: "999px",
                    fontSize: "13px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    color: active ? "#fff" : "var(--text-dim)",
                    textDecoration: "none",
                  }}
                >
                  {hovered === link.href && (
                    <motion.span
                      layoutId="nav-hover"
                      style={{ position: "absolute", inset: 0, borderRadius: "999px", background: "rgba(255,255,255,0.08)" }}
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  )}
                  {active && (
                    <span
                      style={{
                        position: "absolute",
                        left: "14px",
                        right: "14px",
                        bottom: "3px",
                        height: "2px",
                        background: RED,
                        borderRadius: "2px",
                      }}
                    />
                  )}
                  <span style={{ position: "relative", zIndex: 1 }}>{link.label}</span>
                </Link>
              );
            })}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Link href="/tickets" style={{ textDecoration: "none" }}>
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  color: "#fff",
                  background: RED,
                  boxShadow: "0 4px 20px rgba(225,6,0,0.4)",
                  whiteSpace: "nowrap",
                }}
              >
                Get Tickets
              </motion.span>
            </Link>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label="Toggle Navigation Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10"
              style={{ width: "36px", height: "36px" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed top-[80px] left-4 right-4 z-40 bg-[#101214]/95 backdrop-blur-2xl border border-[rgba(255,255,255,0.1)] rounded-2xl p-6 shadow-2xl flex flex-col gap-3"
          >
            {links.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-between ${
                    active ? "bg-[#e10600]/10 text-white border-l-2 border-[#e10600]" : "text-[rgba(244,244,242,0.7)] hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="text-xs text-[#e10600]">Active</span>}
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t border-[rgba(255,255,255,0.08)] flex justify-between items-center text-xs text-[rgba(244,244,242,0.4)]">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">
                Contact & Press
              </Link>
              <span className="font-display font-bold text-white">APEX CIRCUIT 2026</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
