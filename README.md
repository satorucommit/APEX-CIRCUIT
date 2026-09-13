# 🏎️ APEX CIRCUIT — Official Motorsport Championship Platform

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

**Apex Circuit** is a premier motorsport tournament platform — a high-octane digital hub featuring live telemetry, looping onboard F1 video reels, interactive race calendar, driver & constructor standings, team dossiers, newsroom, and race-weekend ticketing.

Built with a carbon-fiber dark theme (`#08090a`), racing-red accents (`#e10600`), condensed technical typography (`Rajdhani`), and kinetic micro-animations.

---

## ⚡ Key Features

- **Full-Screen Video Hero**: 1080p looping racetrack footage (`public/hero.mp4`), speed-lines overlay, and live `CountdownTimer` with rolling-odometer digit transitions.
- **Onboard F1 Telemetry Feed**: Real-time HUD overlay (Speed, RPM, Gear, Throttle/Brake, DRS, Purple Sectors) with continuous video loop.
- **Race Calendar (`/schedule`)**: 12-round international season calendar with interactive status filters (`ALL`, `UPCOMING`, `COMPLETED`), circuit telemetry, lap records, and race winners.
- **Championship Standings (`/standings`)**: Driver (20) and Constructor (10) championship tables toggled with a smooth Framer Motion `layoutId` sliding pill, rank color-coding (P1 in `--red`, P2/P3 in `--amber`), and trend deltas.
- **Constructors & Team Dossiers (`/teams`, `/teams/[slug]`)**: 10-team grid with livery color swatches, technical specifications, and dedicated team profiles with ambient brand glow and 2-up driver lineups.
- **Driver Profiles (`/drivers/[slug]`)**: 20 driver profiles featuring massive watermark driver numerals, nationality flags, season points, podiums, wins, poles, and career milestones.
- **Newsroom (`/news`, `/news/[slug]`)**: 8 motorsport press reports with category filters (`Race Report`, `Technical`, `Championship`, `Interviews`, `Paddock`) and single-column editorial view.
- **Trackside Gallery (`/gallery`)**: Masonry photo and video highlights with looping F1 video reels and interactive fullscreen Lightbox modal.
- **Grand Prix Passes (`/tickets`)**: 3 pricing tiers (*Trackside*, *Pole Position Grandstand*, *VIP Paddock Club*) with race weekend selector and interactive booking checkout modal.
- **Press & Transmission (`/contact`)**: Inquiries and press accreditation form, Silverstone headquarters details, and tactical circuit radar map graphic.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Server Components by default)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/postcss`
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (shared-layout `layoutId`, rolling-odometer digits, scroll-triggered reveals)
- **Typography:** Google Fonts via `next/font/google` (`Rajdhani` for display, `Inter` for body)
- **Language:** TypeScript 5
- **Data Layer:** Local structured TypeScript fixtures (`src/data/*.ts`)

---

## 📁 Project Structure

```
apex-circuit/
├── public/
│   ├── hero.mp4                     # 1080p looping hero video
│   ├── favicon.svg                  # Racing chevron emblem
│   └── videos/                      # Looping F1 race video reels
│       ├── f1-monza-onboard.mp4
│       ├── f1-pitstop.mp4
│       ├── f1-start-turn1.mp4
│       └── f1-overtake-chicane.mp4
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout, fonts & Navbar/Footer
│   │   ├── globals.css              # Tailwind v4 import & design tokens
│   │   ├── page.tsx                 # Home page
│   │   ├── schedule/page.tsx        # Race calendar
│   │   ├── standings/page.tsx       # Driver & constructor standings
│   │   ├── teams/page.tsx           # 10-team grid
│   │   ├── teams/[slug]/page.tsx    # Individual team dossier
│   │   ├── drivers/[slug]/page.tsx  # Driver profile
│   │   ├── news/page.tsx            # Newsroom
│   │   ├── news/[slug]/page.tsx     # Single article view
│   │   ├── gallery/page.tsx         # Trackside gallery & video reels
│   │   ├── tickets/page.tsx         # Ticketing & weekend passes
│   │   └── contact/page.tsx         # Press & contact transmission
│   ├── components/
│   │   ├── Navbar.tsx               # Floating pill nav with spring highlight
│   │   ├── Footer.tsx               # 4-column footer
│   │   ├── Hero.tsx                 # Kinetic video hero
│   │   ├── CountdownTimer.tsx       # Rolling-odometer digit transition
│   │   ├── StatCounter.tsx          # Scroll-triggered rolling counter
│   │   ├── RaceCard.tsx             # Round card with circuit info
│   │   ├── StandingsTable.tsx       # Ranked standings table
│   │   ├── DriverCard.tsx           # Driver card with stats
│   │   ├── TeamCard.tsx             # Constructor card
│   │   ├── NewsCard.tsx             # Editorial card
│   │   ├── SectionHeading.tsx       # Standard section header
│   │   └── PageTransition.tsx       # Motion wrapper
│   └── data/
│       ├── races.ts                 # 12-round calendar fixture
│       ├── teams.ts                 # 10 constructor teams fixture
│       ├── drivers.ts               # 20 drivers fixture
│       ├── standings.ts             # Driver & constructor points
│       └── news.ts                  # 8 articles fixture
├── next.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

---

## 🚦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/satorucommit/APEX-CIRCUIT.git
cd APEX-CIRCUIT
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the platform.

### 4. Build for production

```bash
npm run build
npm run start
```

---

## 🎨 Design System

| Token | Value | Purpose |
|---|---|---|
| `--bg` | `#08090a` | App background, near-black |
| `--surface` | `#101214` | Cards and panels |
| `--surface-2` | `#17191c` | Raised panels and row alternates |
| `--line` | `rgba(255,255,255,0.08)` | Hairline borders |
| `--red` | `#e10600` | Primary racing accent, CTAs, P1 highlight |
| `--red-dim` | `#7a0300` | Pressed/hover-dark states |
| `--amber` | `#f5a623` | Secondary accent, P2/P3, warning tags |
| `--text` | `#f4f4f2` | Primary text |
| `--text-dim` | `rgba(244,244,242,0.6)` | Secondary text |
| `--text-faint` | `rgba(244,244,242,0.38)` | Tertiary labels |

---

## 📄 License

MIT License. Designed and engineered for motorsport enthusiasts.
