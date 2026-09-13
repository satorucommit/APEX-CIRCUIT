export interface DriverStanding {
  position: number;
  driverId: string;
  driverName: string;
  code: string;
  number: number;
  teamId: string;
  teamName: string;
  teamColor: string;
  points: number;
  wins: number;
  podiums: number;
  poles: number;
  delta: number; // e.g. +1, -1, 0
}

export interface ConstructorStanding {
  position: number;
  teamId: string;
  teamName: string;
  shortName: string;
  color: string;
  points: number;
  wins: number;
  podiums: number;
  delta: number;
}

export const driverStandings: DriverStanding[] = [
  { position: 1, driverId: "marcus-vance", driverName: "Marcus Vance", code: "VAN", number: 44, teamId: "apex-redline", teamName: "Apex Redline Racing", teamColor: "#e10600", points: 154, wins: 3, podiums: 5, poles: 3, delta: 0 },
  { position: 2, driverId: "lorenzo-bellini", driverName: "Lorenzo Bellini", code: "BEL", number: 16, teamId: "chrono-corse", teamName: "Chrono Corse", teamColor: "#d91424", points: 148, wins: 2, podiums: 6, poles: 3, delta: 0 },
  { position: 3, driverId: "julian-weber", driverName: "Julian Weber", code: "WEB", number: 4, teamId: "valkyrie-racing", teamName: "Valkyrie Racing", teamColor: "#00e5a3", points: 122, wins: 1, podiums: 4, poles: 1, delta: 1 },
  { position: 4, driverId: "liam-oconnor", driverName: "Liam O'Connor", code: "OCO", number: 11, teamId: "apex-redline", teamName: "Apex Redline Racing", teamColor: "#e10600", points: 92, wins: 1, podiums: 3, poles: 1, delta: -1 },
  { position: 5, driverId: "carlos-santana", driverName: "Carlos Santana", code: "SAN", number: 55, teamId: "chrono-corse", teamName: "Chrono Corse", teamColor: "#d91424", points: 88, wins: 0, podiums: 2, poles: 1, delta: 0 },
  { position: 6, driverId: "ethan-brooks", driverName: "Ethan Brooks", code: "BRK", number: 63, teamId: "valkyrie-racing", teamName: "Valkyrie Racing", teamColor: "#00e5a3", points: 76, wins: 0, podiums: 2, poles: 1, delta: 2 },
  { position: 7, driverId: "pierre-laurent", driverName: "Pierre Laurent", code: "LAU", number: 10, teamId: "horizon-gp", teamName: "Horizon Grand Prix", teamColor: "#0055ff", points: 64, wins: 0, podiums: 1, poles: 1, delta: -1 },
  { position: 8, driverId: "kenzo-takahashi", driverName: "Kenzo Takahashi", code: "TAK", number: 7, teamId: "phantom-velocity", teamName: "Phantom Velocity", teamColor: "#8b5cf6", points: 58, wins: 0, podiums: 1, poles: 0, delta: 1 },
  { position: 9, driverId: "chase-montgomery", driverName: "Chase Montgomery", code: "MON", number: 17, teamId: "cobalt-motorsports", teamName: "Cobalt Motorsports", teamColor: "#06b6d4", points: 46, wins: 0, podiums: 1, poles: 0, delta: -1 },
  { position: 10, driverId: "lucas-silva", driverName: "Lucas Silva", code: "SIL", number: 23, teamId: "horizon-gp", teamName: "Horizon Grand Prix", teamColor: "#0055ff", points: 41, wins: 0, podiums: 0, poles: 0, delta: 0 },
  { position: 11, driverId: "zachary-reed", driverName: "Zachary Reed", code: "REE", number: 3, teamId: "phantom-velocity", teamName: "Phantom Velocity", teamColor: "#8b5cf6", points: 36, wins: 0, podiums: 0, poles: 0, delta: 1 },
  { position: 12, driverId: "oliver-sterling", driverName: "Oliver Sterling", code: "STE", number: 81, teamId: "obsidian-dynamics", teamName: "Obsidian Dynamics", teamColor: "#f5a623", points: 34, wins: 0, podiums: 0, poles: 0, delta: -1 },
  { position: 13, driverId: "diego-ramos", driverName: "Diego Ramos", code: "RAM", number: 28, teamId: "cobalt-motorsports", teamName: "Cobalt Motorsports", teamColor: "#06b6d4", points: 30, wins: 0, podiums: 0, poles: 0, delta: 0 },
  { position: 14, driverId: "noah-van-dijk", driverName: "Noah Van Dijk", code: "DIJ", number: 33, teamId: "obsidian-dynamics", teamName: "Obsidian Dynamics", teamColor: "#f5a623", points: 28, wins: 0, podiums: 0, poles: 0, delta: 0 },
  { position: 15, driverId: "felix-lindner", driverName: "Felix Lindner", code: "LIN", number: 77, teamId: "zenith-grand-prix", teamName: "Zenith Grand Prix", teamColor: "#84cc16", points: 20, wins: 0, podiums: 0, poles: 0, delta: 0 },
  { position: 16, driverId: "viktor-novak", driverName: "Viktor Novak", code: "NOV", number: 22, teamId: "zenith-grand-prix", teamName: "Zenith Grand Prix", teamColor: "#84cc16", points: 14, wins: 0, podiums: 0, poles: 0, delta: 0 },
  { position: 17, driverId: "rashid-al-falasi", driverName: "Rashid Al-Falasi", code: "FAL", number: 99, teamId: "solar-wing", teamName: "Solar Wing Racing", teamColor: "#eab308", points: 12, wins: 0, podiums: 0, poles: 0, delta: 0 },
  { position: 18, driverId: "tyler-chen", driverName: "Tyler Chen", code: "CHE", number: 18, teamId: "solar-wing", teamName: "Solar Wing Racing", teamColor: "#eab308", points: 8, wins: 0, podiums: 0, poles: 0, delta: 0 },
  { position: 19, driverId: "henrik-berg", driverName: "Henrik Berg", code: "BER", number: 8, teamId: "solitude-racing", teamName: "Solitude Racing", teamColor: "#38bdf8", points: 6, wins: 0, podiums: 0, poles: 0, delta: 0 },
  { position: 20, driverId: "mikko-koskinen", driverName: "Mikko Koskinen", code: "KOS", number: 94, teamId: "solitude-racing", teamName: "Solitude Racing", teamColor: "#38bdf8", points: 2, wins: 0, podiums: 0, poles: 0, delta: 0 },
];

export const constructorStandings: ConstructorStanding[] = [
  { position: 1, teamId: "apex-redline", teamName: "Apex Redline Racing", shortName: "Apex Redline", color: "#e10600", points: 246, wins: 4, podiums: 8, delta: 0 },
  { position: 2, teamId: "chrono-corse", teamName: "Chrono Corse", shortName: "Chrono Corse", color: "#d91424", points: 236, wins: 2, podiums: 8, delta: 0 },
  { position: 3, teamId: "valkyrie-racing", teamName: "Valkyrie Racing", shortName: "Valkyrie", color: "#00e5a3", points: 198, wins: 1, podiums: 6, delta: 0 },
  { position: 4, teamId: "horizon-gp", teamName: "Horizon Grand Prix", shortName: "Horizon GP", color: "#0055ff", points: 105, wins: 0, podiums: 1, delta: 1 },
  { position: 5, teamId: "phantom-velocity", teamName: "Phantom Velocity", shortName: "Phantom", color: "#8b5cf6", points: 94, wins: 0, podiums: 1, delta: -1 },
  { position: 6, teamId: "cobalt-motorsports", teamName: "Cobalt Motorsports", shortName: "Cobalt", color: "#06b6d4", points: 76, wins: 0, podiums: 1, delta: 0 },
  { position: 7, teamId: "obsidian-dynamics", teamName: "Obsidian Dynamics", shortName: "Obsidian", color: "#f5a623", points: 62, wins: 0, podiums: 0, delta: 0 },
  { position: 8, teamId: "zenith-grand-prix", teamName: "Zenith Grand Prix", shortName: "Zenith GP", color: "#84cc16", points: 34, wins: 0, podiums: 0, delta: 0 },
  { position: 9, teamId: "solar-wing", teamName: "Solar Wing Racing", shortName: "Solar Wing", color: "#eab308", points: 20, wins: 0, podiums: 0, delta: 0 },
  { position: 10, teamId: "solitude-racing", teamName: "Solitude Racing", shortName: "Solitude", color: "#38bdf8", points: 8, wins: 0, podiums: 0, delta: 0 },
];
