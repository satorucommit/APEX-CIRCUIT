export interface Race {
  id: string;
  round: number;
  slug: string;
  name: string;
  circuit: string;
  city: string;
  country: string;
  flag: string;
  dateRange: string;
  date: string; // ISO format for countdown timer
  laps: number;
  circuitLength: string;
  lapRecord: {
    time: string;
    driver: string;
    year: number;
  };
  status: "COMPLETED" | "LIVE" | "UPCOMING";
  winner?: {
    driver: string;
    team: string;
    time: string;
  };
  podium?: string[];
  trackSvgPath?: string;
  description: string;
}

export const races: Race[] = [
  {
    id: "round-01",
    round: 1,
    slug: "australian-grand-prix",
    name: "Australian Grand Prix",
    circuit: "Albert Park Circuit",
    city: "Melbourne",
    country: "Australia",
    flag: "🇦🇺",
    dateRange: "MAR 13 – 15, 2026",
    date: "2026-03-15T05:00:00Z",
    laps: 58,
    circuitLength: "5.278 km",
    lapRecord: {
      time: "1:19.813",
      driver: "Marcus Vance",
      year: 2025,
    },
    status: "COMPLETED",
    winner: {
      driver: "Marcus Vance",
      team: "Apex Redline Racing",
      time: "1:24:41.284",
    },
    podium: ["Marcus Vance", "Lorenzo Bellini", "Julian Weber"],
    description: "The season-opening blast around the scenic lakeside park in Melbourne, featuring high average speeds and sudden wall proximity.",
  },
  {
    id: "round-02",
    round: 2,
    slug: "bahrain-grand-prix",
    name: "Bahrain Grand Prix",
    circuit: "Sakhir International Circuit",
    city: "Sakhir",
    country: "Bahrain",
    flag: "🇧🇭",
    dateRange: "MAR 27 – 29, 2026",
    date: "2026-03-29T15:00:00Z",
    laps: 57,
    circuitLength: "5.412 km",
    lapRecord: {
      time: "1:31.447",
      driver: "Lorenzo Bellini",
      year: 2025,
    },
    status: "COMPLETED",
    winner: {
      driver: "Lorenzo Bellini",
      team: "Chrono Corse",
      time: "1:31:05.192",
    },
    podium: ["Lorenzo Bellini", "Marcus Vance", "Carlos Santana"],
    description: "A twilight desert spectacle demanding extreme traction control and rear tire endurance into tricky hairpin braking zones.",
  },
  {
    id: "round-03",
    round: 3,
    slug: "japanese-grand-prix",
    name: "Japanese Grand Prix",
    circuit: "Suzuka International Racing Course",
    city: "Suzuka",
    country: "Japan",
    flag: "🇯🇵",
    dateRange: "APR 10 – 12, 2026",
    date: "2026-04-12T05:00:00Z",
    laps: 53,
    circuitLength: "5.807 km",
    lapRecord: {
      time: "1:30.983",
      driver: "Julian Weber",
      year: 2024,
    },
    status: "COMPLETED",
    winner: {
      driver: "Julian Weber",
      team: "Valkyrie Racing",
      time: "1:28:34.901",
    },
    podium: ["Julian Weber", "Lorenzo Bellini", "Marcus Vance"],
    description: "The legendary figure-eight ribbon of tarmac testing pure aerodynamic downforce through the relentless Esses and 130R.",
  },
  {
    id: "round-04",
    round: 4,
    slug: "monaco-grand-prix",
    name: "Monaco Grand Prix",
    circuit: "Circuit de Monaco",
    city: "Monte Carlo",
    country: "Monaco",
    flag: "🇲🇨",
    dateRange: "MAY 22 – 24, 2026",
    date: "2026-05-24T13:00:00Z",
    laps: 78,
    circuitLength: "3.337 km",
    lapRecord: {
      time: "1:12.909",
      driver: "Liam O'Connor",
      year: 2026,
    },
    status: "COMPLETED",
    winner: {
      driver: "Liam O'Connor",
      team: "Apex Redline Racing",
      time: "1:44:18.012",
    },
    podium: ["Liam O'Connor", "Carlos Santana", "Ethan Brooks"],
    description: "The crown jewel of motorsport: razor-thin street margins, yacht-lined harbors, and zero margin for error between Armco barriers.",
  },
  {
    id: "round-05",
    round: 5,
    slug: "british-grand-prix",
    name: "British Grand Prix",
    circuit: "Silverstone Circuit",
    city: "Silverstone",
    country: "United Kingdom",
    flag: "🇬🇧",
    dateRange: "JUL 03 – 05, 2026",
    date: "2026-07-05T14:00:00Z",
    laps: 52,
    circuitLength: "5.891 km",
    lapRecord: {
      time: "1:27.097",
      driver: "Marcus Vance",
      year: 2024,
    },
    status: "COMPLETED",
    winner: {
      driver: "Marcus Vance",
      team: "Apex Redline Racing",
      time: "1:21:55.772",
    },
    podium: ["Marcus Vance", "Julian Weber", "Ethan Brooks"],
    description: "The cradle of grand prix racing featuring the iconic Maggotts-Becketts-Chapel high-G complex that pushes drivers to 5G peaks.",
  },
  {
    id: "round-06",
    round: 6,
    slug: "belgian-grand-prix",
    name: "Belgian Grand Prix",
    circuit: "Circuit de Spa-Francorchamps",
    city: "Stavelot",
    country: "Belgium",
    flag: "🇧🇪",
    dateRange: "AUG 28 – 30, 2026",
    date: "2026-08-30T13:00:00Z",
    laps: 44,
    circuitLength: "7.004 km",
    lapRecord: {
      time: "1:46.286",
      driver: "Lorenzo Bellini",
      year: 2025,
    },
    status: "COMPLETED",
    winner: {
      driver: "Lorenzo Bellini",
      team: "Chrono Corse",
      time: "1:26:02.441",
    },
    podium: ["Lorenzo Bellini", "Marcus Vance", "Pierre Laurent"],
    description: "A rollercoaster through the Ardennes forest featuring the heart-stopping uphill compression of Eau Rouge and Raidillon.",
  },
  {
    id: "round-07",
    round: 7,
    slug: "italian-grand-prix",
    name: "Italian Grand Prix",
    circuit: "Autodromo Nazionale Monza",
    city: "Monza",
    country: "Italy",
    flag: "🇮🇹",
    dateRange: "SEP 18 – 20, 2026",
    date: "2026-09-20T13:00:00Z", // Target countdown race!
    laps: 53,
    circuitLength: "5.793 km",
    lapRecord: {
      time: "1:21.046",
      driver: "Marcus Vance",
      year: 2024,
    },
    status: "UPCOMING",
    description: "The Temple of Speed. Teams trim wings to the absolute legal limit for speeds surpassing 350 km/h down the historic Curva Grande.",
  },
  {
    id: "round-08",
    round: 8,
    slug: "singapore-grand-prix",
    name: "Singapore Grand Prix",
    circuit: "Marina Bay Street Circuit",
    city: "Singapore",
    country: "Singapore",
    flag: "🇸🇬",
    dateRange: "OCT 02 – 04, 2026",
    date: "2026-10-04T12:00:00Z",
    laps: 62,
    circuitLength: "4.940 km",
    lapRecord: {
      time: "1:35.867",
      driver: "Lorenzo Bellini",
      year: 2025,
    },
    status: "UPCOMING",
    description: "The grueling nocturnal street race under thousands of floodlights, demanding 100% concentration in sweltering 80% humidity.",
  },
  {
    id: "round-09",
    round: 9,
    slug: "united-states-grand-prix",
    name: "United States Grand Prix",
    circuit: "Circuit of the Americas",
    city: "Austin, Texas",
    country: "United States",
    flag: "🇺🇸",
    dateRange: "OCT 23 – 25, 2026",
    date: "2026-10-25T19:00:00Z",
    laps: 56,
    circuitLength: "5.513 km",
    lapRecord: {
      time: "1:36.169",
      driver: "Julian Weber",
      year: 2024,
    },
    status: "UPCOMING",
    description: "Featuring the breathtaking 133-foot climb up into the blind Turn 1 apex followed by rapid-fire esses inspired by Silverstone.",
  },
  {
    id: "round-10",
    round: 10,
    slug: "mexico-city-grand-prix",
    name: "Mexico City Grand Prix",
    circuit: "Autódromo Hermanos Rodríguez",
    city: "Mexico City",
    country: "Mexico",
    flag: "🇲🇽",
    dateRange: "NOV 06 – 08, 2026",
    date: "2026-11-08T20:00:00Z",
    laps: 71,
    circuitLength: "4.304 km",
    lapRecord: {
      time: "1:17.774",
      driver: "Marcus Vance",
      year: 2025,
    },
    status: "UPCOMING",
    description: "Sitting 2,200 meters above sea level where the thin air starves engines of cooling and cars roar through the iconic baseball stadium.",
  },
  {
    id: "round-11",
    round: 11,
    slug: "sao-paulo-grand-prix",
    name: "São Paulo Grand Prix",
    circuit: "Autódromo José Carlos Pace (Interlagos)",
    city: "São Paulo",
    country: "Brazil",
    flag: "🇧🇷",
    dateRange: "NOV 20 – 22, 2026",
    date: "2026-11-22T17:00:00Z",
    laps: 71,
    circuitLength: "4.309 km",
    lapRecord: {
      time: "1:10.540",
      driver: "Liam O'Connor",
      year: 2025,
    },
    status: "UPCOMING",
    description: "An anti-clockwise cauldron of passionate fans, unpredictable micro-climates, and the famous Senna ‘S’ downhill switchback.",
  },
  {
    id: "round-12",
    round: 12,
    slug: "abu-dhabi-grand-prix",
    name: "Abu Dhabi Grand Prix (Season Finale)",
    circuit: "Yas Marina Circuit",
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    dateRange: "DEC 04 – 06, 2026",
    date: "2026-12-06T13:00:00Z",
    laps: 58,
    circuitLength: "5.281 km",
    lapRecord: {
      time: "1:26.103",
      driver: "Marcus Vance",
      year: 2024,
    },
    status: "UPCOMING",
    description: "The championship climax under the desert stars with a twilight-to-night transformation and fireworks over the marina.",
  },
];

export const getNextRace = (): Race => {
  const upcoming = races.find((r) => r.status === "UPCOMING" || r.status === "LIVE");
  return upcoming || races[6];
};
