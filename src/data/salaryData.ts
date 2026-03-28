// Data source: Levels.fyi (https://www.levels.fyi)
// All salary data sourced from Levels.fyi as of March 28, 2026
// Total compensation = Base + Stock (annualized) + Bonus
// All figures in USD, United States

export type SeniorityLevel =
  | "Entry Level"
  | "Mid Level"
  | "Senior"
  | "Staff"
  | "Senior Staff / Principal"
  | "Distinguished / Fellow"
  | "VP / Executive";

export type CompanyTier =
  | "Core Big Tech"
  | "Next-Tier Large Tech"
  | "Semiconductor / Infrastructure"
  | "Enterprise Software / Cloud"
  | "Consumer Internet / Platform"
  | "Cybersecurity"
  | "Fintech"
  | "Major Private Tech";

export type RoleCategory =
  | "Software Engineer"
  | "AI / ML Engineer"
  | "Data Scientist";

export interface LevelData {
  levelName: string;
  normalizedSeniority: SeniorityLevel;
  medianTotal: number;
  base?: number;
  stock?: number;
  bonus?: number;
}

export interface CompanyData {
  company: string;
  slug: string;
  tier: CompanyTier;
  tiers: CompanyTier[]; // company can belong to multiple tiers
  medianTotal: number;
  range: string;
  levels: LevelData[];
  lastUpdated: string;
  isPrivate: boolean;
  roles: RoleCategory[];
}

export const salaryData: CompanyData[] = [
  // ═══════════════════════════════════════════════════════
  // CORE BIG TECH
  // ═══════════════════════════════════════════════════════
  {
    company: "Nvidia",
    slug: "nvidia",
    tier: "Core Big Tech",
    tiers: ["Core Big Tech", "Semiconductor / Infrastructure"],
    medianTotal: 370000,
    range: "$175K - $1.04M+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer", "AI / ML Engineer"],
    levels: [
      { levelName: "IC1", normalizedSeniority: "Entry Level", medianTotal: 174709 },
      { levelName: "IC2", normalizedSeniority: "Mid Level", medianTotal: 205929 },
      { levelName: "IC3 (Senior)", normalizedSeniority: "Senior", medianTotal: 316798 },
      { levelName: "IC4", normalizedSeniority: "Staff", medianTotal: 363469 },
      { levelName: "IC5", normalizedSeniority: "Senior Staff / Principal", medianTotal: 587975 },
      { levelName: "IC6", normalizedSeniority: "Distinguished / Fellow", medianTotal: 600625 },
      { levelName: "IC7", normalizedSeniority: "VP / Executive", medianTotal: 1035000 },
    ],
  },
  {
    company: "Apple",
    slug: "apple",
    tier: "Core Big Tech",
    tiers: ["Core Big Tech"],
    medianTotal: 318000,
    range: "$184K - $795K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer", "AI / ML Engineer"],
    levels: [
      { levelName: "ICT2 (Junior)", normalizedSeniority: "Entry Level", medianTotal: 184114 },
      { levelName: "ICT3", normalizedSeniority: "Mid Level", medianTotal: 238062 },
      { levelName: "ICT4 (Senior)", normalizedSeniority: "Senior", medianTotal: 335716 },
      { levelName: "ICT5", normalizedSeniority: "Staff", medianTotal: 509280 },
      { levelName: "ICT6", normalizedSeniority: "Senior Staff / Principal", medianTotal: 795350 },
    ],
  },
  {
    company: "Microsoft",
    slug: "microsoft",
    tier: "Core Big Tech",
    tiers: ["Core Big Tech", "Enterprise Software / Cloud"],
    medianTotal: 220000,
    range: "$158K - $1.08M+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer", "AI / ML Engineer", "Data Scientist"],
    levels: [
      { levelName: "59 (SDE)", normalizedSeniority: "Entry Level", medianTotal: 157854 },
      { levelName: "60", normalizedSeniority: "Entry Level", medianTotal: 175087 },
      { levelName: "61 (SDE II)", normalizedSeniority: "Mid Level", medianTotal: 197506 },
      { levelName: "62", normalizedSeniority: "Mid Level", medianTotal: 203451 },
      { levelName: "63 (Senior)", normalizedSeniority: "Senior", medianTotal: 229283 },
      { levelName: "64", normalizedSeniority: "Senior", medianTotal: 274608 },
      { levelName: "65 (Principal)", normalizedSeniority: "Staff", medianTotal: 326555 },
      { levelName: "66", normalizedSeniority: "Senior Staff / Principal", medianTotal: 496231 },
      { levelName: "67 (Partner)", normalizedSeniority: "Senior Staff / Principal", medianTotal: 543172 },
      { levelName: "68", normalizedSeniority: "Distinguished / Fellow", medianTotal: 867113 },
      { levelName: "69 (Distinguished)", normalizedSeniority: "Distinguished / Fellow", medianTotal: 1045428 },
      { levelName: "70 (Tech Fellow)", normalizedSeniority: "VP / Executive", medianTotal: 1080000 },
    ],
  },
  {
    company: "Alphabet (Google)",
    slug: "google",
    tier: "Core Big Tech",
    tiers: ["Core Big Tech", "Enterprise Software / Cloud"],
    medianTotal: 333000,
    range: "$211K - $1.98M+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer", "AI / ML Engineer", "Data Scientist"],
    levels: [
      { levelName: "L3 (SWE II)", normalizedSeniority: "Entry Level", medianTotal: 210254 },
      { levelName: "L4 (SWE III)", normalizedSeniority: "Mid Level", medianTotal: 302987 },
      { levelName: "L5 (Senior SWE)", normalizedSeniority: "Senior", medianTotal: 427974 },
      { levelName: "L6 (Staff SWE)", normalizedSeniority: "Staff", medianTotal: 578220 },
      { levelName: "L7 (Senior Staff)", normalizedSeniority: "Senior Staff / Principal", medianTotal: 995921 },
      { levelName: "L8 (Principal)", normalizedSeniority: "Distinguished / Fellow", medianTotal: 1409875 },
      { levelName: "L9 (Distinguished)", normalizedSeniority: "VP / Executive", medianTotal: 1983500 },
    ],
  },
  {
    company: "Amazon",
    slug: "amazon",
    tier: "Core Big Tech",
    tiers: ["Core Big Tech", "Enterprise Software / Cloud"],
    medianTotal: 265000,
    range: "$183K - $1.66M+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer", "AI / ML Engineer", "Data Scientist"],
    levels: [
      { levelName: "L4 (SDE I)", normalizedSeniority: "Entry Level", medianTotal: 183049 },
      { levelName: "L5 (SDE II)", normalizedSeniority: "Mid Level", medianTotal: 273750 },
      { levelName: "L6 (SDE III)", normalizedSeniority: "Senior", medianTotal: 378315 },
      { levelName: "L7 (Principal)", normalizedSeniority: "Staff", medianTotal: 715425 },
      { levelName: "L8 (Sr. Principal)", normalizedSeniority: "Senior Staff / Principal", medianTotal: 1374091 },
      { levelName: "L10 (VP/Distinguished)", normalizedSeniority: "VP / Executive", medianTotal: 1660500 },
    ],
  },
  {
    company: "Meta",
    slug: "meta",
    tier: "Core Big Tech",
    tiers: ["Core Big Tech"],
    medianTotal: 403050,
    range: "$183K - $3.67M+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer", "AI / ML Engineer", "Data Scientist"],
    levels: [
      { levelName: "E3 (Entry)", normalizedSeniority: "Entry Level", medianTotal: 182645 },
      { levelName: "E4", normalizedSeniority: "Mid Level", medianTotal: 310705 },
      { levelName: "E5 (Senior)", normalizedSeniority: "Senior", medianTotal: 462168 },
      { levelName: "E6 (Staff)", normalizedSeniority: "Staff", medianTotal: 753805 },
      { levelName: "E7 (Senior Staff)", normalizedSeniority: "Senior Staff / Principal", medianTotal: 1625833 },
      { levelName: "E8 (Principal)", normalizedSeniority: "Distinguished / Fellow", medianTotal: 2767151 },
      { levelName: "E9 (Distinguished)", normalizedSeniority: "VP / Executive", medianTotal: 3673750 },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // NEXT-TIER LARGE U.S. TECH
  // ═══════════════════════════════════════════════════════
  {
    company: "Oracle",
    slug: "oracle",
    tier: "Next-Tier Large Tech",
    tiers: ["Next-Tier Large Tech", "Enterprise Software / Cloud"],
    medianTotal: 206000,
    range: "$138K - $972K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer", "Data Scientist"],
    levels: [
      { levelName: "IC-1", normalizedSeniority: "Entry Level", medianTotal: 138183 },
      { levelName: "IC-2", normalizedSeniority: "Mid Level", medianTotal: 175165 },
      { levelName: "IC-3", normalizedSeniority: "Senior", medianTotal: 208700 },
      { levelName: "IC-4", normalizedSeniority: "Staff", medianTotal: 274926 },
      { levelName: "IC-5", normalizedSeniority: "Senior Staff / Principal", medianTotal: 377389 },
      { levelName: "IC-6", normalizedSeniority: "Distinguished / Fellow", medianTotal: 972222 },
    ],
  },
  {
    company: "Salesforce",
    slug: "salesforce",
    tier: "Next-Tier Large Tech",
    tiers: ["Next-Tier Large Tech", "Enterprise Software / Cloud"],
    medianTotal: 254000,
    range: "$177K - $1.15M+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer", "Data Scientist"],
    levels: [
      { levelName: "Associate MTS", normalizedSeniority: "Entry Level", medianTotal: 176626 },
      { levelName: "MTS", normalizedSeniority: "Mid Level", medianTotal: 208407 },
      { levelName: "Senior MTS", normalizedSeniority: "Senior", medianTotal: 252733 },
      { levelName: "Lead MTS", normalizedSeniority: "Staff", medianTotal: 322424 },
      { levelName: "Principal MTS", normalizedSeniority: "Senior Staff / Principal", medianTotal: 411100 },
      { levelName: "Architect", normalizedSeniority: "Distinguished / Fellow", medianTotal: 458527 },
      { levelName: "Principal Architect", normalizedSeniority: "VP / Executive", medianTotal: 1145289 },
    ],
  },
  {
    company: "Adobe",
    slug: "adobe",
    tier: "Next-Tier Large Tech",
    tiers: ["Next-Tier Large Tech", "Enterprise Software / Cloud"],
    medianTotal: 265000,
    range: "$172K - $511K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer", "AI / ML Engineer"],
    levels: [
      { levelName: "P10", normalizedSeniority: "Entry Level", medianTotal: 171911 },
      { levelName: "P20", normalizedSeniority: "Mid Level", medianTotal: 209578 },
      { levelName: "P30", normalizedSeniority: "Senior", medianTotal: 268130 },
      { levelName: "P40", normalizedSeniority: "Staff", medianTotal: 269124 },
      { levelName: "P50", normalizedSeniority: "Senior Staff / Principal", medianTotal: 360603 },
      { levelName: "P60", normalizedSeniority: "Distinguished / Fellow", medianTotal: 511250 },
    ],
  },
  {
    company: "Netflix",
    slug: "netflix",
    tier: "Next-Tier Large Tech",
    tiers: ["Next-Tier Large Tech", "Consumer Internet / Platform"],
    medianTotal: 485000,
    range: "$219K - $1.22M+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer", "Data Scientist"],
    levels: [
      { levelName: "L3", normalizedSeniority: "Entry Level", medianTotal: 218985 },
      { levelName: "L4", normalizedSeniority: "Mid Level", medianTotal: 338100 },
      { levelName: "L5 (Senior)", normalizedSeniority: "Senior", medianTotal: 523000 },
      { levelName: "L6 (Staff)", normalizedSeniority: "Staff", medianTotal: 705000 },
      { levelName: "L7 (Senior Staff)", normalizedSeniority: "Senior Staff / Principal", medianTotal: 1217500 },
    ],
  },
  {
    company: "IBM",
    slug: "ibm",
    tier: "Next-Tier Large Tech",
    tiers: ["Next-Tier Large Tech"],
    medianTotal: 149250,
    range: "$141K - $483K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer", "AI / ML Engineer", "Data Scientist"],
    levels: [
      { levelName: "Band 6", normalizedSeniority: "Entry Level", medianTotal: 140723 },
      { levelName: "Band 7", normalizedSeniority: "Mid Level", medianTotal: 160553 },
      { levelName: "Band 8", normalizedSeniority: "Senior", medianTotal: 192628 },
      { levelName: "Band 9", normalizedSeniority: "Staff", medianTotal: 199000 },
      { levelName: "Band 10", normalizedSeniority: "Senior Staff / Principal", medianTotal: 405125 },
      { levelName: "Band D (Distinguished)", normalizedSeniority: "Distinguished / Fellow", medianTotal: 483398 },
    ],
  },
  {
    company: "Cisco",
    slug: "cisco",
    tier: "Next-Tier Large Tech",
    tiers: ["Next-Tier Large Tech"],
    medianTotal: 235000,
    range: "$121K - $661K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer"],
    levels: [
      { levelName: "Grade 4", normalizedSeniority: "Entry Level", medianTotal: 121207 },
      { levelName: "Grade 6", normalizedSeniority: "Entry Level", medianTotal: 147214 },
      { levelName: "Grade 8", normalizedSeniority: "Mid Level", medianTotal: 184912 },
      { levelName: "Grade 10", normalizedSeniority: "Senior", medianTotal: 232769 },
      { levelName: "Grade 11", normalizedSeniority: "Staff", medianTotal: 300872 },
      { levelName: "Grade 12", normalizedSeniority: "Senior Staff / Principal", medianTotal: 382774 },
      { levelName: "Grade 13", normalizedSeniority: "Distinguished / Fellow", medianTotal: 446771 },
      { levelName: "Distinguished Engineer", normalizedSeniority: "VP / Executive", medianTotal: 661000 },
    ],
  },
  {
    company: "Dell Technologies",
    slug: "dell-technologies",
    tier: "Next-Tier Large Tech",
    tiers: ["Next-Tier Large Tech"],
    medianTotal: 162000,
    range: "$117K - $371K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer"],
    levels: [
      { levelName: "L5", normalizedSeniority: "Entry Level", medianTotal: 116668 },
      { levelName: "L6", normalizedSeniority: "Entry Level", medianTotal: 131405 },
      { levelName: "L7", normalizedSeniority: "Mid Level", medianTotal: 162611 },
      { levelName: "L8", normalizedSeniority: "Senior", medianTotal: 214429 },
      { levelName: "L9", normalizedSeniority: "Staff", medianTotal: 282178 },
      { levelName: "L10", normalizedSeniority: "Senior Staff / Principal", medianTotal: 370634 },
      { levelName: "L11", normalizedSeniority: "Distinguished / Fellow", medianTotal: 360375 },
    ],
  },
  {
    company: "Intel",
    slug: "intel",
    tier: "Next-Tier Large Tech",
    tiers: ["Next-Tier Large Tech", "Semiconductor / Infrastructure"],
    medianTotal: 225000,
    range: "$131K - $818K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer", "AI / ML Engineer"],
    levels: [
      { levelName: "Grade 3", normalizedSeniority: "Entry Level", medianTotal: 130537 },
      { levelName: "Grade 5", normalizedSeniority: "Entry Level", medianTotal: 131981 },
      { levelName: "Grade 6", normalizedSeniority: "Mid Level", medianTotal: 163736 },
      { levelName: "Grade 7", normalizedSeniority: "Senior", medianTotal: 210671 },
      { levelName: "Grade 8", normalizedSeniority: "Staff", medianTotal: 261924 },
      { levelName: "Grade 9", normalizedSeniority: "Senior Staff / Principal", medianTotal: 326502 },
      { levelName: "Grade 10", normalizedSeniority: "Distinguished / Fellow", medianTotal: 482250 },
      { levelName: "Grade 11", normalizedSeniority: "Distinguished / Fellow", medianTotal: 644667 },
      { levelName: "Fellow", normalizedSeniority: "VP / Executive", medianTotal: 818056 },
    ],
  },
  {
    company: "HP",
    slug: "hp",
    tier: "Next-Tier Large Tech",
    tiers: ["Next-Tier Large Tech"],
    medianTotal: 150000,
    range: "$140K - $150K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer"],
    levels: [
      { levelName: "Software Engineer", normalizedSeniority: "Mid Level", medianTotal: 150000 },
    ],
  },
  {
    company: "AMD",
    slug: "amd",
    tier: "Next-Tier Large Tech",
    tiers: ["Next-Tier Large Tech", "Semiconductor / Infrastructure"],
    medianTotal: 256000,
    range: "$147K - $520K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer", "AI / ML Engineer"],
    levels: [
      { levelName: "L5", normalizedSeniority: "Entry Level", medianTotal: 147419 },
      { levelName: "L6", normalizedSeniority: "Mid Level", medianTotal: 182266 },
      { levelName: "L7", normalizedSeniority: "Senior", medianTotal: 240012 },
      { levelName: "L8", normalizedSeniority: "Staff", medianTotal: 328094 },
      { levelName: "L9", normalizedSeniority: "Senior Staff / Principal", medianTotal: 374000 },
      { levelName: "L10", normalizedSeniority: "Distinguished / Fellow", medianTotal: 519750 },
    ],
  },
  {
    company: "Qualcomm",
    slug: "qualcomm",
    tier: "Next-Tier Large Tech",
    tiers: ["Next-Tier Large Tech", "Semiconductor / Infrastructure"],
    medianTotal: 217500,
    range: "$129K - $490K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer", "AI / ML Engineer"],
    levels: [
      { levelName: "Associate Engineer", normalizedSeniority: "Entry Level", medianTotal: 128881 },
      { levelName: "Engineer", normalizedSeniority: "Mid Level", medianTotal: 168966 },
      { levelName: "Senior Engineer", normalizedSeniority: "Senior", medianTotal: 200684 },
      { levelName: "Staff Engineer", normalizedSeniority: "Staff", medianTotal: 242601 },
      { levelName: "Senior Staff Engineer", normalizedSeniority: "Senior Staff / Principal", medianTotal: 412002 },
      { levelName: "Principal Engineer", normalizedSeniority: "Distinguished / Fellow", medianTotal: 490083 },
    ],
  },
  {
    company: "Palantir",
    slug: "palantir",
    tier: "Next-Tier Large Tech",
    tiers: ["Next-Tier Large Tech"],
    medianTotal: 225000,
    range: "$225K - $239K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer", "Data Scientist"],
    levels: [
      { levelName: "Software Engineer", normalizedSeniority: "Mid Level", medianTotal: 239321 },
    ],
  },
  {
    company: "Uber",
    slug: "uber",
    tier: "Next-Tier Large Tech",
    tiers: ["Next-Tier Large Tech", "Consumer Internet / Platform"],
    medianTotal: 428000,
    range: "$204K - $1.58M+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer", "AI / ML Engineer", "Data Scientist"],
    levels: [
      { levelName: "L3 (SWE I)", normalizedSeniority: "Entry Level", medianTotal: 203620 },
      { levelName: "L4 (SWE II)", normalizedSeniority: "Mid Level", medianTotal: 288412 },
      { levelName: "L5a (Senior)", normalizedSeniority: "Senior", medianTotal: 470397 },
      { levelName: "L5b (Staff)", normalizedSeniority: "Staff", medianTotal: 715650 },
      { levelName: "L6 (Sr. Staff)", normalizedSeniority: "Senior Staff / Principal", medianTotal: 799438 },
      { levelName: "L7 (Principal)", normalizedSeniority: "Distinguished / Fellow", medianTotal: 1581720 },
    ],
  },
  {
    company: "Airbnb",
    slug: "airbnb",
    tier: "Next-Tier Large Tech",
    tiers: ["Next-Tier Large Tech", "Consumer Internet / Platform"],
    medianTotal: 529450,
    range: "$194K - $1.10M+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer", "Data Scientist"],
    levels: [
      { levelName: "G7", normalizedSeniority: "Entry Level", medianTotal: 193500 },
      { levelName: "G8", normalizedSeniority: "Mid Level", medianTotal: 285067 },
      { levelName: "G9 (Senior)", normalizedSeniority: "Senior", medianTotal: 462555 },
      { levelName: "G10 (Staff)", normalizedSeniority: "Staff", medianTotal: 629300 },
      { levelName: "G11 (Sr. Staff)", normalizedSeniority: "Senior Staff / Principal", medianTotal: 1095750 },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // SEMICONDUCTOR / INFRASTRUCTURE
  // ═══════════════════════════════════════════════════════
  {
    company: "Broadcom",
    slug: "broadcom",
    tier: "Semiconductor / Infrastructure",
    tiers: ["Semiconductor / Infrastructure"],
    medianTotal: 510000,
    range: "$153K - $881K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer"],
    levels: [
      { levelName: "ICB 1", normalizedSeniority: "Entry Level", medianTotal: 153378 },
      { levelName: "ICB 2", normalizedSeniority: "Mid Level", medianTotal: 244935 },
      { levelName: "ICB 3", normalizedSeniority: "Senior", medianTotal: 281425 },
      { levelName: "ICB 4", normalizedSeniority: "Staff", medianTotal: 415284 },
      { levelName: "ICB 5", normalizedSeniority: "Senior Staff / Principal", medianTotal: 651176 },
      { levelName: "ICB 6", normalizedSeniority: "Distinguished / Fellow", medianTotal: 868648 },
      { levelName: "ICB 7", normalizedSeniority: "VP / Executive", medianTotal: 881233 },
    ],
  },
  {
    company: "Micron Technology",
    slug: "micron-technology",
    tier: "Semiconductor / Infrastructure",
    tiers: ["Semiconductor / Infrastructure"],
    medianTotal: 160000,
    range: "$94K - $358K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer"],
    levels: [
      { levelName: "E1", normalizedSeniority: "Entry Level", medianTotal: 93653 },
      { levelName: "E2", normalizedSeniority: "Entry Level", medianTotal: 107169 },
      { levelName: "E3", normalizedSeniority: "Mid Level", medianTotal: 129875 },
      { levelName: "E4", normalizedSeniority: "Senior", medianTotal: 182567 },
      { levelName: "E5", normalizedSeniority: "Staff", medianTotal: 286786 },
      { levelName: "F1", normalizedSeniority: "Senior Staff / Principal", medianTotal: 358375 },
    ],
  },
  {
    company: "Applied Materials",
    slug: "applied-materials",
    tier: "Semiconductor / Infrastructure",
    tiers: ["Semiconductor / Infrastructure"],
    medianTotal: 173000,
    range: "$119K - $261K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer"],
    levels: [
      { levelName: "Software Engineer I", normalizedSeniority: "Entry Level", medianTotal: 118676 },
      { levelName: "Software Engineer II", normalizedSeniority: "Mid Level", medianTotal: 142177 },
      { levelName: "Software Engineer III", normalizedSeniority: "Senior", medianTotal: 159221 },
      { levelName: "Software Engineer IV", normalizedSeniority: "Staff", medianTotal: 227875 },
      { levelName: "Software Engineer V", normalizedSeniority: "Senior Staff / Principal", medianTotal: 261250 },
    ],
  },
  {
    company: "Lam Research",
    slug: "lam-research",
    tier: "Semiconductor / Infrastructure",
    tiers: ["Semiconductor / Infrastructure"],
    medianTotal: 165000,
    range: "$150K - $165K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer"],
    levels: [
      { levelName: "Software Engineer", normalizedSeniority: "Mid Level", medianTotal: 165000 },
    ],
  },
  {
    company: "KLA",
    slug: "kla",
    tier: "Semiconductor / Infrastructure",
    tiers: ["Semiconductor / Infrastructure"],
    medianTotal: 178000,
    range: "$124K - $297K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer"],
    levels: [
      { levelName: "P1", normalizedSeniority: "Entry Level", medianTotal: 123553 },
      { levelName: "P2", normalizedSeniority: "Mid Level", medianTotal: 165512 },
      { levelName: "P3", normalizedSeniority: "Senior", medianTotal: 187058 },
      { levelName: "P4", normalizedSeniority: "Staff", medianTotal: 238230 },
      { levelName: "P5", normalizedSeniority: "Senior Staff / Principal", medianTotal: 296846 },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // ENTERPRISE SOFTWARE / CLOUD
  // ═══════════════════════════════════════════════════════
  {
    company: "ServiceNow",
    slug: "servicenow",
    tier: "Enterprise Software / Cloud",
    tiers: ["Enterprise Software / Cloud"],
    medianTotal: 262600,
    range: "$151K - $627K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer"],
    levels: [
      { levelName: "IC1", normalizedSeniority: "Entry Level", medianTotal: 151271 },
      { levelName: "IC2", normalizedSeniority: "Mid Level", medianTotal: 180072 },
      { levelName: "IC3", normalizedSeniority: "Senior", medianTotal: 237273 },
      { levelName: "IC4", normalizedSeniority: "Staff", medianTotal: 307789 },
      { levelName: "IC5", normalizedSeniority: "Senior Staff / Principal", medianTotal: 367940 },
      { levelName: "IC6", normalizedSeniority: "Distinguished / Fellow", medianTotal: 627100 },
    ],
  },
  {
    company: "Snowflake",
    slug: "snowflake",
    tier: "Enterprise Software / Cloud",
    tiers: ["Enterprise Software / Cloud"],
    medianTotal: 334600,
    range: "$238K - $883K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer", "Data Scientist"],
    levels: [
      { levelName: "IC1", normalizedSeniority: "Entry Level", medianTotal: 237806 },
      { levelName: "IC2 (Senior)", normalizedSeniority: "Senior", medianTotal: 344955 },
      { levelName: "IC3 (Staff)", normalizedSeniority: "Staff", medianTotal: 553401 },
      { levelName: "IC4 (Sr. Staff)", normalizedSeniority: "Senior Staff / Principal", medianTotal: 648400 },
      { levelName: "IC5 (Principal)", normalizedSeniority: "Distinguished / Fellow", medianTotal: 883000 },
    ],
  },
  {
    company: "Datadog",
    slug: "datadog",
    tier: "Enterprise Software / Cloud",
    tiers: ["Enterprise Software / Cloud"],
    medianTotal: 350000,
    range: "$184K - $576K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer"],
    levels: [
      { levelName: "Software Engineer I", normalizedSeniority: "Entry Level", medianTotal: 184125 },
      { levelName: "Software Engineer II", normalizedSeniority: "Mid Level", medianTotal: 258746 },
      { levelName: "Senior Software Engineer", normalizedSeniority: "Senior", medianTotal: 438217 },
      { levelName: "Staff Software Engineer", normalizedSeniority: "Staff", medianTotal: 575643 },
    ],
  },
  {
    company: "Workday",
    slug: "workday",
    tier: "Enterprise Software / Cloud",
    tiers: ["Enterprise Software / Cloud"],
    medianTotal: 258000,
    range: "$141K - $529K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer"],
    levels: [
      { levelName: "P1", normalizedSeniority: "Entry Level", medianTotal: 140527 },
      { levelName: "P2", normalizedSeniority: "Mid Level", medianTotal: 181500 },
      { levelName: "P3", normalizedSeniority: "Senior", medianTotal: 220340 },
      { levelName: "P4", normalizedSeniority: "Staff", medianTotal: 312552 },
      { levelName: "P5", normalizedSeniority: "Senior Staff / Principal", medianTotal: 398282 },
      { levelName: "P6", normalizedSeniority: "Distinguished / Fellow", medianTotal: 528923 },
    ],
  },
  {
    company: "Intuit",
    slug: "intuit",
    tier: "Enterprise Software / Cloud",
    tiers: ["Enterprise Software / Cloud", "Fintech"],
    medianTotal: 330000,
    range: "$158K - $1.13M+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer", "AI / ML Engineer", "Data Scientist"],
    levels: [
      { levelName: "Software Engineer 1", normalizedSeniority: "Entry Level", medianTotal: 158302 },
      { levelName: "Software Engineer 2", normalizedSeniority: "Mid Level", medianTotal: 203765 },
      { levelName: "Senior Software Engineer", normalizedSeniority: "Senior", medianTotal: 263211 },
      { levelName: "Staff Software Engineer", normalizedSeniority: "Staff", medianTotal: 344096 },
      { levelName: "Senior Staff SWE", normalizedSeniority: "Senior Staff / Principal", medianTotal: 472107 },
      { levelName: "Architect", normalizedSeniority: "Distinguished / Fellow", medianTotal: 615056 },
      { levelName: "Distinguished Principal", normalizedSeniority: "VP / Executive", medianTotal: 1125000 },
    ],
  },
  {
    company: "Autodesk",
    slug: "autodesk",
    tier: "Enterprise Software / Cloud",
    tiers: ["Enterprise Software / Cloud"],
    medianTotal: 168500,
    range: "$135K - $458K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer"],
    levels: [
      { levelName: "Grade 8", normalizedSeniority: "Entry Level", medianTotal: 134785 },
      { levelName: "Grade 9", normalizedSeniority: "Entry Level", medianTotal: 161866 },
      { levelName: "Grade 10", normalizedSeniority: "Mid Level", medianTotal: 166052 },
      { levelName: "Grade 11", normalizedSeniority: "Mid Level", medianTotal: 172474 },
      { levelName: "Grade 12", normalizedSeniority: "Senior", medianTotal: 197574 },
      { levelName: "Grade 13", normalizedSeniority: "Staff", medianTotal: 267323 },
      { levelName: "Grade 14", normalizedSeniority: "Senior Staff / Principal", medianTotal: 314434 },
      { levelName: "Grade 15", normalizedSeniority: "Distinguished / Fellow", medianTotal: 457833 },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // CONSUMER INTERNET / PLATFORM
  // ═══════════════════════════════════════════════════════
  {
    company: "DoorDash",
    slug: "doordash",
    tier: "Consumer Internet / Platform",
    tiers: ["Consumer Internet / Platform"],
    medianTotal: 340000,
    range: "$179K - $849K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer", "Data Scientist"],
    levels: [
      { levelName: "E3", normalizedSeniority: "Entry Level", medianTotal: 178933 },
      { levelName: "E4", normalizedSeniority: "Mid Level", medianTotal: 272545 },
      { levelName: "E5 (Senior)", normalizedSeniority: "Senior", medianTotal: 379732 },
      { levelName: "E6 (Staff)", normalizedSeniority: "Staff", medianTotal: 580234 },
      { levelName: "E7 (Sr. Staff)", normalizedSeniority: "Senior Staff / Principal", medianTotal: 849250 },
    ],
  },
  {
    company: "Snap",
    slug: "snap",
    tier: "Consumer Internet / Platform",
    tiers: ["Consumer Internet / Platform"],
    medianTotal: 375000,
    range: "$197K - $969K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer", "AI / ML Engineer"],
    levels: [
      { levelName: "L3", normalizedSeniority: "Entry Level", medianTotal: 196654 },
      { levelName: "L4", normalizedSeniority: "Mid Level", medianTotal: 362044 },
      { levelName: "L5 (Senior)", normalizedSeniority: "Senior", medianTotal: 539721 },
      { levelName: "L6 (Staff)", normalizedSeniority: "Staff", medianTotal: 580000 },
      { levelName: "L7 (Sr. Staff)", normalizedSeniority: "Senior Staff / Principal", medianTotal: 969000 },
    ],
  },
  {
    company: "Pinterest",
    slug: "pinterest",
    tier: "Consumer Internet / Platform",
    tiers: ["Consumer Internet / Platform"],
    medianTotal: 445000,
    range: "$212K - $1.15M+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer", "AI / ML Engineer", "Data Scientist"],
    levels: [
      { levelName: "IC13", normalizedSeniority: "Entry Level", medianTotal: 211652 },
      { levelName: "IC14", normalizedSeniority: "Mid Level", medianTotal: 303599 },
      { levelName: "IC15 (Senior)", normalizedSeniority: "Senior", medianTotal: 427297 },
      { levelName: "IC16 (Staff)", normalizedSeniority: "Staff", medianTotal: 746468 },
      { levelName: "IC17 (Sr. Staff)", normalizedSeniority: "Senior Staff / Principal", medianTotal: 1147316 },
    ],
  },
  {
    company: "Reddit",
    slug: "reddit",
    tier: "Consumer Internet / Platform",
    tiers: ["Consumer Internet / Platform"],
    medianTotal: 540000,
    range: "$148K - $850K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer", "Data Scientist"],
    levels: [
      { levelName: "IC1", normalizedSeniority: "Entry Level", medianTotal: 147500 },
      { levelName: "IC2", normalizedSeniority: "Entry Level", medianTotal: 151374 },
      { levelName: "IC3", normalizedSeniority: "Mid Level", medianTotal: 278650 },
      { levelName: "IC4 (Senior)", normalizedSeniority: "Senior", medianTotal: 462190 },
      { levelName: "IC5 (Staff)", normalizedSeniority: "Staff", medianTotal: 691114 },
      { levelName: "IC6 (Sr. Staff)", normalizedSeniority: "Senior Staff / Principal", medianTotal: 850000 },
    ],
  },
  {
    company: "eBay",
    slug: "ebay",
    tier: "Consumer Internet / Platform",
    tiers: ["Consumer Internet / Platform"],
    medianTotal: 280000,
    range: "$138K - $877K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer"],
    levels: [
      { levelName: "SE 1", normalizedSeniority: "Entry Level", medianTotal: 137603 },
      { levelName: "SE 2", normalizedSeniority: "Mid Level", medianTotal: 168331 },
      { levelName: "SE 3", normalizedSeniority: "Senior", medianTotal: 233902 },
      { levelName: "MTS 1", normalizedSeniority: "Staff", medianTotal: 271872 },
      { levelName: "MTS 2", normalizedSeniority: "Staff", medianTotal: 308262 },
      { levelName: "Senior MTS", normalizedSeniority: "Senior Staff / Principal", medianTotal: 399429 },
      { levelName: "Principal MTS", normalizedSeniority: "Distinguished / Fellow", medianTotal: 501900 },
      { levelName: "Distinguished MTS", normalizedSeniority: "VP / Executive", medianTotal: 876500 },
    ],
  },
  {
    company: "Spotify",
    slug: "spotify",
    tier: "Consumer Internet / Platform",
    tiers: ["Consumer Internet / Platform"],
    medianTotal: 211000,
    range: "$138K - $390K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer", "Data Scientist"],
    levels: [
      { levelName: "Associate Engineer", normalizedSeniority: "Entry Level", medianTotal: 137729 },
      { levelName: "Engineer I", normalizedSeniority: "Entry Level", medianTotal: 160485 },
      { levelName: "Engineer II", normalizedSeniority: "Mid Level", medianTotal: 205197 },
      { levelName: "Senior Engineer", normalizedSeniority: "Senior", medianTotal: 271669 },
      { levelName: "Staff Engineer", normalizedSeniority: "Staff", medianTotal: 390226 },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // CYBERSECURITY
  // ═══════════════════════════════════════════════════════
  {
    company: "Palo Alto Networks",
    slug: "palo-alto-networks",
    tier: "Cybersecurity",
    tiers: ["Cybersecurity"],
    medianTotal: 243600,
    range: "$170K - $697K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer"],
    levels: [
      { levelName: "Software Engineer", normalizedSeniority: "Entry Level", medianTotal: 170244 },
      { levelName: "Staff Software Engineer", normalizedSeniority: "Mid Level", medianTotal: 207067 },
      { levelName: "Sr Staff Engineer", normalizedSeniority: "Senior", medianTotal: 270577 },
      { levelName: "Principal Engineer", normalizedSeniority: "Staff", medianTotal: 309600 },
      { levelName: "Architect", normalizedSeniority: "Senior Staff / Principal", medianTotal: 465091 },
      { levelName: "Distinguished Engineer", normalizedSeniority: "Distinguished / Fellow", medianTotal: 696500 },
    ],
  },
  {
    company: "CrowdStrike",
    slug: "crowdstrike",
    tier: "Cybersecurity",
    tiers: ["Cybersecurity"],
    medianTotal: 312000,
    range: "$143K - $567K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer"],
    levels: [
      { levelName: "Engineer I", normalizedSeniority: "Entry Level", medianTotal: 142831 },
      { levelName: "Engineer II", normalizedSeniority: "Mid Level", medianTotal: 175304 },
      { levelName: "Engineer III", normalizedSeniority: "Senior", medianTotal: 258300 },
      { levelName: "Senior Engineer I", normalizedSeniority: "Staff", medianTotal: 338210 },
      { levelName: "Senior Engineer II", normalizedSeniority: "Senior Staff / Principal", medianTotal: 422125 },
      { levelName: "Principal Engineer", normalizedSeniority: "Distinguished / Fellow", medianTotal: 566667 },
    ],
  },
  {
    company: "Cloudflare",
    slug: "cloudflare",
    tier: "Cybersecurity",
    tiers: ["Cybersecurity"],
    medianTotal: 205000,
    range: "$141K - $285K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer"],
    levels: [
      { levelName: "L1", normalizedSeniority: "Entry Level", medianTotal: 141477 },
      { levelName: "L2", normalizedSeniority: "Mid Level", medianTotal: 159485 },
      { levelName: "L3", normalizedSeniority: "Senior", medianTotal: 202387 },
      { levelName: "L4", normalizedSeniority: "Staff", medianTotal: 245167 },
      { levelName: "L5", normalizedSeniority: "Senior Staff / Principal", medianTotal: 285000 },
    ],
  },
  {
    company: "Fortinet",
    slug: "fortinet",
    tier: "Cybersecurity",
    tiers: ["Cybersecurity"],
    medianTotal: 93208,
    range: "$76K - $174K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer"],
    levels: [
      { levelName: "P1", normalizedSeniority: "Entry Level", medianTotal: 76458 },
      { levelName: "P2", normalizedSeniority: "Entry Level", medianTotal: 82274 },
      { levelName: "P3", normalizedSeniority: "Mid Level", medianTotal: 99801 },
      { levelName: "P4", normalizedSeniority: "Senior", medianTotal: 130835 },
      { levelName: "P5", normalizedSeniority: "Staff", medianTotal: 173844 },
      { levelName: "P6", normalizedSeniority: "Senior Staff / Principal", medianTotal: 170900 },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // FINTECH
  // ═══════════════════════════════════════════════════════
  {
    company: "PayPal",
    slug: "paypal",
    tier: "Fintech",
    tiers: ["Fintech"],
    medianTotal: 221000,
    range: "$169K - $504K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer", "Data Scientist"],
    levels: [
      { levelName: "CL5", normalizedSeniority: "Entry Level", medianTotal: 169192 },
      { levelName: "CL6", normalizedSeniority: "Senior", medianTotal: 255140 },
      { levelName: "CL7", normalizedSeniority: "Staff", medianTotal: 320627 },
      { levelName: "CL8", normalizedSeniority: "Senior Staff / Principal", medianTotal: 428167 },
      { levelName: "CL9", normalizedSeniority: "Distinguished / Fellow", medianTotal: 503778 },
    ],
  },
  {
    company: "Block (Square)",
    slug: "block",
    tier: "Fintech",
    tiers: ["Fintech"],
    medianTotal: 315000,
    range: "$159K - $636K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer"],
    levels: [
      { levelName: "Level 3", normalizedSeniority: "Entry Level", medianTotal: 159445 },
      { levelName: "Level 4", normalizedSeniority: "Mid Level", medianTotal: 237971 },
      { levelName: "Level 5", normalizedSeniority: "Senior", medianTotal: 279819 },
      { levelName: "Level 6", normalizedSeniority: "Staff", medianTotal: 408799 },
      { levelName: "Level 7", normalizedSeniority: "Senior Staff / Principal", medianTotal: 635583 },
    ],
  },
  {
    company: "Stripe",
    slug: "stripe",
    tier: "Fintech",
    tiers: ["Fintech", "Major Private Tech"],
    medianTotal: 296000,
    range: "$211K - $934K+",
    lastUpdated: "2026-03-28",
    isPrivate: true,
    roles: ["Software Engineer"],
    levels: [
      { levelName: "L1", normalizedSeniority: "Entry Level", medianTotal: 211344 },
      { levelName: "L2", normalizedSeniority: "Mid Level", medianTotal: 277114 },
      { levelName: "L3 (Senior)", normalizedSeniority: "Senior", medianTotal: 413816 },
      { levelName: "L4 (Staff)", normalizedSeniority: "Staff", medianTotal: 632983 },
      { levelName: "L5 (Sr. Staff)", normalizedSeniority: "Senior Staff / Principal", medianTotal: 934226 },
      { levelName: "L6 (Principal)", normalizedSeniority: "Distinguished / Fellow", medianTotal: 860000 },
    ],
  },
  {
    company: "Coinbase",
    slug: "coinbase",
    tier: "Fintech",
    tiers: ["Fintech"],
    medianTotal: 297230,
    range: "$204K - $1.19M+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer"],
    levels: [
      { levelName: "IC3", normalizedSeniority: "Entry Level", medianTotal: 203995 },
      { levelName: "IC4", normalizedSeniority: "Mid Level", medianTotal: 275021 },
      { levelName: "IC5 (Senior)", normalizedSeniority: "Senior", medianTotal: 408939 },
      { levelName: "IC6 (Staff)", normalizedSeniority: "Staff", medianTotal: 550670 },
      { levelName: "IC7 (Sr. Staff)", normalizedSeniority: "Senior Staff / Principal", medianTotal: 748205 },
      { levelName: "IC8 (Principal)", normalizedSeniority: "Distinguished / Fellow", medianTotal: 1186000 },
    ],
  },
  {
    company: "Robinhood",
    slug: "robinhood",
    tier: "Fintech",
    tiers: ["Fintech"],
    medianTotal: 425450,
    range: "$202K - $542K+",
    lastUpdated: "2026-03-28",
    isPrivate: false,
    roles: ["Software Engineer"],
    levels: [
      { levelName: "L1", normalizedSeniority: "Entry Level", medianTotal: 202451 },
      { levelName: "L2", normalizedSeniority: "Mid Level", medianTotal: 294540 },
      { levelName: "L3 (Senior)", normalizedSeniority: "Senior", medianTotal: 419853 },
      { levelName: "L4 (Staff)", normalizedSeniority: "Staff", medianTotal: 534333 },
      { levelName: "L5 (Sr. Staff)", normalizedSeniority: "Senior Staff / Principal", medianTotal: 542292 },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // MAJOR PRIVATE TECH
  // ═══════════════════════════════════════════════════════
  {
    company: "OpenAI",
    slug: "openai",
    tier: "Major Private Tech",
    tiers: ["Major Private Tech"],
    medianTotal: 555000,
    range: "$249K - $1.43M+",
    lastUpdated: "2026-03-28",
    isPrivate: true,
    roles: ["Software Engineer", "AI / ML Engineer"],
    levels: [
      { levelName: "L2", normalizedSeniority: "Entry Level", medianTotal: 248929 },
      { levelName: "L3", normalizedSeniority: "Mid Level", medianTotal: 322778 },
      { levelName: "L4 (Senior)", normalizedSeniority: "Senior", medianTotal: 654636 },
      { levelName: "L5 (Staff)", normalizedSeniority: "Staff", medianTotal: 1425375 },
      { levelName: "L6 (Sr. Staff)", normalizedSeniority: "Senior Staff / Principal", medianTotal: 1237725 },
    ],
  },
  {
    company: "SpaceX",
    slug: "spacex",
    tier: "Major Private Tech",
    tiers: ["Major Private Tech"],
    medianTotal: 183000,
    range: "$184K - $404K+",
    lastUpdated: "2026-03-28",
    isPrivate: true,
    roles: ["Software Engineer"],
    levels: [
      { levelName: "L1", normalizedSeniority: "Entry Level", medianTotal: 183958 },
      { levelName: "L2", normalizedSeniority: "Mid Level", medianTotal: 236578 },
      { levelName: "L3 (Senior)", normalizedSeniority: "Senior", medianTotal: 385903 },
      { levelName: "L4 (Staff)", normalizedSeniority: "Staff", medianTotal: 403571 },
    ],
  },
  {
    company: "Databricks",
    slug: "databricks",
    tier: "Major Private Tech",
    tiers: ["Major Private Tech", "Enterprise Software / Cloud"],
    medianTotal: 280000,
    range: "$248K - $1.65M+",
    lastUpdated: "2026-03-28",
    isPrivate: true,
    roles: ["Software Engineer", "AI / ML Engineer", "Data Scientist"],
    levels: [
      { levelName: "L3", normalizedSeniority: "Entry Level", medianTotal: 247640 },
      { levelName: "L4 (Senior)", normalizedSeniority: "Senior", medianTotal: 408876 },
      { levelName: "L5 (Staff)", normalizedSeniority: "Staff", medianTotal: 634644 },
      { levelName: "L6 (Sr. Staff)", normalizedSeniority: "Senior Staff / Principal", medianTotal: 1007750 },
      { levelName: "L7 (Principal)", normalizedSeniority: "Distinguished / Fellow", medianTotal: 1652975 },
    ],
  },
  {
    company: "Anthropic",
    slug: "anthropic",
    tier: "Major Private Tech",
    tiers: ["Major Private Tech"],
    medianTotal: 570000,
    range: "$550K - $759K+",
    lastUpdated: "2026-03-28",
    isPrivate: true,
    roles: ["Software Engineer", "AI / ML Engineer"],
    levels: [
      { levelName: "Senior Software Engineer", normalizedSeniority: "Senior", medianTotal: 550361 },
      { levelName: "Lead Software Engineer", normalizedSeniority: "Staff", medianTotal: 759413 },
    ],
  },
  {
    company: "Anduril",
    slug: "anduril-industries",
    tier: "Major Private Tech",
    tiers: ["Major Private Tech"],
    medianTotal: 274500,
    range: "$205K - $517K+",
    lastUpdated: "2026-03-28",
    isPrivate: true,
    roles: ["Software Engineer", "AI / ML Engineer"],
    levels: [
      { levelName: "L3", normalizedSeniority: "Entry Level", medianTotal: 205410 },
      { levelName: "L4", normalizedSeniority: "Mid Level", medianTotal: 283368 },
      { levelName: "L5 (Senior)", normalizedSeniority: "Senior", medianTotal: 360969 },
      { levelName: "L6 (Staff)", normalizedSeniority: "Staff", medianTotal: 415000 },
      { levelName: "L7 (Sr. Staff)", normalizedSeniority: "Senior Staff / Principal", medianTotal: 516837 },
    ],
  },
  {
    company: "Epic Games",
    slug: "epic-games",
    tier: "Major Private Tech",
    tiers: ["Major Private Tech"],
    medianTotal: 218000,
    range: "$117K - $406K+",
    lastUpdated: "2026-03-28",
    isPrivate: true,
    roles: ["Software Engineer"],
    levels: [
      { levelName: "L1", normalizedSeniority: "Entry Level", medianTotal: 116554 },
      { levelName: "L2", normalizedSeniority: "Mid Level", medianTotal: 136995 },
      { levelName: "L3 (Senior)", normalizedSeniority: "Senior", medianTotal: 225898 },
      { levelName: "L4 (Staff)", normalizedSeniority: "Staff", medianTotal: 303758 },
      { levelName: "L5 (Sr. Staff)", normalizedSeniority: "Senior Staff / Principal", medianTotal: 406400 },
    ],
  },
];

// Note: Zscaler, Okta - excluded from US data as Levels.fyi defaults to India for these companies
// HP and Lam Research have limited level data on Levels.fyi

export const allTiers: CompanyTier[] = [
  "Core Big Tech",
  "Next-Tier Large Tech",
  "Semiconductor / Infrastructure",
  "Enterprise Software / Cloud",
  "Consumer Internet / Platform",
  "Cybersecurity",
  "Fintech",
  "Major Private Tech",
];

export const allSeniorityLevels: SeniorityLevel[] = [
  "Entry Level",
  "Mid Level",
  "Senior",
  "Staff",
  "Senior Staff / Principal",
  "Distinguished / Fellow",
  "VP / Executive",
];

export const tierColors: Record<CompanyTier, string> = {
  "Core Big Tech": "#6366f1",
  "Next-Tier Large Tech": "#8b5cf6",
  "Semiconductor / Infrastructure": "#06b6d4",
  "Enterprise Software / Cloud": "#10b981",
  "Consumer Internet / Platform": "#f59e0b",
  "Cybersecurity": "#ef4444",
  "Fintech": "#ec4899",
  "Major Private Tech": "#f97316",
};

export const seniorityOrder: Record<SeniorityLevel, number> = {
  "Entry Level": 0,
  "Mid Level": 1,
  "Senior": 2,
  "Staff": 3,
  "Senior Staff / Principal": 4,
  "Distinguished / Fellow": 5,
  "VP / Executive": 6,
};

export function formatSalary(amount: number): string {
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(2)}M`;
  }
  return `$${(amount / 1000).toFixed(0)}K`;
}

export function getCompanyLevelsForSeniority(
  company: CompanyData,
  seniority: SeniorityLevel
): LevelData[] {
  return company.levels.filter((l) => l.normalizedSeniority === seniority);
}

export function getMedianForSeniority(
  company: CompanyData,
  seniority: SeniorityLevel
): number | null {
  const levels = getCompanyLevelsForSeniority(company, seniority);
  if (levels.length === 0) return null;
  const sorted = [...levels].sort((a, b) => a.medianTotal - b.medianTotal);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid].medianTotal
    : Math.round((sorted[mid - 1].medianTotal + sorted[mid].medianTotal) / 2);
}
