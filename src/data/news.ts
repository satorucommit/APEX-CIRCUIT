export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  category: "Race Report" | "Technical" | "Paddock" | "Championship" | "Interviews";
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  content: string[];
  imageUrl: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "news-01",
    slug: "monza-high-speed-low-downforce-showdown",
    title: "Temple of Speed Preview: How Teams Are Trimming Downforce For Monza",
    category: "Technical",
    date: "SEP 14, 2026",
    readTime: "4 min read",
    author: "Dominic Thorne, Lead Technical Analyst",
    excerpt: "With straight-line speeds expected to breach 355 km/h into the Prima Variante, teams prepare radical skinny rear wings and reduced rake angles for Round 07.",
    content: [
      "The Autodromo Nazionale Monza remains the ultimate litmus test for aerodynamic drag efficiency. Unlike Spa-Francorchamps, where the twisting second sector demands a compromise downforce level, Monza encourages technical directors to throw away virtually every element of wing-induced drag in pursuit of terminal straight-line speed.",
      "Apex Redline Racing will introduce a spoon-profile beam wing this weekend, seeking to balance Marcus Vance's braking stability into Rettifilo without sacrificing the top-end velocity needed to defend against Chrono Corse's formidable twin-turbo grunt.",
      "Chrono Corse, running on home soil in front of thousands of fervent fans, have reportedly revised their floor strakes to generate disproportionate ground-effect suction, allowing their engineers to run almost zero upper-wing angle of attack.",
      "'Monza is about braveness on the brakes and clean air in slipstreams,' remarked Championship leader Marcus Vance during the FIA press briefing. 'If your car slides even five millimeters through Ascari, your top speed down the back straight is ruined for the next two kilometers.'"
    ],
    imageUrl: "https://images.pexels.com/photos/12795/pexels-photo-12795.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "news-02",
    slug: "vance-vs-bellini-title-fight-intensifies",
    title: "Six Points Separate the Titans: The Psychology of the 2026 Title Battle",
    category: "Championship",
    date: "SEP 10, 2026",
    readTime: "6 min read",
    author: "Sarah Jenkins, Chief Motorsport Correspondent",
    excerpt: "Marcus Vance and Lorenzo Bellini enter the European season climax locked in a duel of psychological warfare, engineering prowess, and track limits.",
    content: [
      "Halfway through the 2026 campaign, the championship battle has boiled down to a breathless classic: Vance's calculating masterclasses against Bellini's raw, uncompromising aggression.",
      "With Bellini taking victories in Bahrain and Spa, and Vance asserting dominion in Melbourne, Silverstone, and Suzuka, neither driver has managed to break clear on the points table. The current gap stands at a razor-thin six points.",
      "Paddock insiders note that the psychological pressure is beginning to show in pitlane garage dynamics. Apex Redline's pit crew currently holds the season record with a 2.14s stationary stop, while Chrono Corse has countered with aggressive undercut strategies.",
      "With six rounds still remaining across three continents, reliability will inevitably hold the key. Valkyrie's Julian Weber also lurks within striking distance, ready to capitalize if the two frontrunners collide."
    ],
    imageUrl: "https://images.pexels.com/photos/3818936/pexels-photo-3818936.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "news-03",
    slug: "spa-francorchamps-rain-drama-recap",
    title: "Belgian GP Debrief: Bellini Outlasts Torrential Ardennes Showdown",
    category: "Race Report",
    date: "AUG 31, 2026",
    readTime: "5 min read",
    author: "Marc Van Houten, Paddock Reporter",
    excerpt: "A sudden Ardennes downpour scrambled the order on lap 31, handing Lorenzo Bellini a masterstroke victory as intermediate tires proved decisive.",
    content: [
      "The 2026 Belgian Grand Prix will be remembered as an instantaneous classic. When radar predicted rain on lap 28, the leading pack was separated by less than four seconds.",
      "As heavy rain hit the Kemmel Straight while Blanchimont remained bone-dry, driver skill replaced simulation models. Bellini was the first front-runner to gamble on intermediate compounds, executing an inch-perfect in-lap that leapfrogged Vance into the lead.",
      "Despite Vance closing the deficit to 1.1 seconds in the closing laps, Bellini defended with surgical precision through Bus Stop chicane to take his second victory of the 2026 season.",
      "Horizon GP celebrated their first podium of the season with Pierre Laurent putting in a breathtaking drive from ninth on the grid to clinch P3."
    ],
    imageUrl: "https://images.pexels.com/photos/1280560/pexels-photo-1280560.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "news-04",
    slug: "valkyrie-ground-effect-floor-evolution",
    title: "Technical Insight: Valkyrie Racing Unveils Revolutionary Venturi Tunnel Concept",
    category: "Technical",
    date: "AUG 22, 2026",
    readTime: "4 min read",
    author: "Dominic Thorne, Lead Technical Analyst",
    excerpt: "Elena Richter's aerodynamic team reveals an intricate carbon fiber floor edge wing designed to seal high-speed vortex structures.",
    content: [
      "Valkyrie Racing brought the most heavily anticipated aerodynamic package of the summer to Stuttgart's testing grounds this week. The VR-09's newly homologated underfloor features stepped knife-edge fences.",
      "The objective is simple: create an unbreakable suction seal around the floor periphery, preventing ambient dirty air from penetrating the high-speed Venturi low-pressure core.",
      "Julian Weber reported immediate gains in medium-speed downforce stability, which could prove decisive when the championship heads to Austin and Mexico City later this autumn."
    ],
    imageUrl: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "news-05",
    slug: "liam-oconnor-monaco-heroics-interview",
    title: "Exclusive Interview: Liam O'Connor on His Breakthrough Maiden Victory",
    category: "Interviews",
    date: "AUG 14, 2026",
    readTime: "7 min read",
    author: "Sarah Jenkins, Chief Motorsport Correspondent",
    excerpt: "Apex Redline's young sensation sits down to reflect on keeping his cool under torrential pressure between the Monte Carlo barriers.",
    content: [
      "At just 24 years old, Liam O'Connor wrote his name into motorsport history by capturing the Monaco Grand Prix in his sophomore championship season.",
      "'When you see the barriers scraping your mirrors at 260 km/h in the swimming pool section, your brain is screaming to lift,' O'Connor laughed during our sit-down interview.",
      "'Winning Monaco changes everything. It proves to the team and to myself that on any given Sunday, when everything clicks, I can beat anyone on this planet.'"
    ],
    imageUrl: "https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "news-06",
    slug: "fia-approves-active-aero-regulations-2027",
    title: "FIA Confirms Next-Gen Active Aerodynamics Architecture for 2027",
    category: "Paddock",
    date: "AUG 05, 2026",
    readTime: "5 min read",
    author: "Dominic Thorne, Lead Technical Analyst",
    excerpt: "Apex Circuit confirms variable flap geometries, sustainable e-fuel benchmarks, and enhanced telemetry feeds for the upcoming regulations cycle.",
    content: [
      "The World Motor Sport Council has formally ratified the 2027 technical regulations for Apex Circuit championships, heralding an era of unprecedented sustainable velocity.",
      "Key changes include 100% advanced drop-in synthetic biofuels, dual-state active aerodynamic wings, and electric MGU-K battery outputs scaled to over 350 kilowatts.",
      "Team principals have universally endorsed the roadmap, anticipating closer wheel-to-wheel slipstream battles and reduced turbulent wake."
    ],
    imageUrl: "https://images.pexels.com/photos/210158/pexels-photo-210158.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "news-07",
    slug: "night-racing-under-singapore-lights",
    title: "Marina Bay Street Circuit Prepares 1,600 Projectors for Night Spectacle",
    category: "Paddock",
    date: "JUL 28, 2026",
    readTime: "3 min read",
    author: "Marc Van Houten, Paddock Reporter",
    excerpt: "Logistics crews begin rigging the high-output bespoke lighting gantries across the equator ahead of October's premier nocturnal challenge.",
    content: [
      "As the calendar heads past the European summer, freight cargo is already en route to Singapore. Running under 1,600 specialized projector lamps, Marina Bay remains the most visually arresting grand prix on earth.",
      "Drivers must alter their circadian rhythms by four time zones, waking at dusk and conducting technical debriefs at 3 AM local time.",
      "The race presents brutal physiological challenges, with cockpit cockpit temperatures often exceeding 55°C during the two-hour physical slugfest."
    ],
    imageUrl: "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "news-08",
    slug: "cobalt-motorsports-home-soil-push",
    title: "Cobalt Motorsports Eyes Austin Breakthrough with Upgraded Engine Spec",
    category: "Championship",
    date: "JUL 19, 2026",
    readTime: "4 min read",
    author: "Sarah Jenkins, Chief Motorsport Correspondent",
    excerpt: "American outfit Cobalt aims for their maiden podium as Chase Montgomery readies for the Circuit of the Americas homecoming.",
    content: [
      "Wyatt Walker's squad has been one of the quiet revelations of 2026, frequently sparring with Horizon and Phantom in the fierce midfield sector.",
      "A new exhaust manifold and turbocharger turbine wheel will make its competitive debut in Austin, giving Montgomery and Ramos the extra straight-line speed needed to convert top-ten starts into championship podiums."
    ],
    imageUrl: "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];
