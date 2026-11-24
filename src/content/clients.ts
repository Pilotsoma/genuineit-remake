import type { ClientLogo } from "@/types/content";

/**
 * Logos displayed on the legacy home page (/), /clients.php, /company-profile.php and /mission.php.
 * Legacy heading (verbatim): "Business Partners & Clients: We are partnered with below clients
 * to supply IT resources to meet their IT Needs."
 *
 * IMPORTANT: the legacy site does not state which organisations are end clients and which are
 * staffing / IT-services partners. `orgType` therefore describes the ORGANISATION only (e.g. a
 * state agency or a staffing firm), never the relationship. Do not add logos without approval.
 * Logo names were identified visually from the artwork; confirm in owner review.
 */

export const clientsDisclaimer =
  "All logos are trademarks and property of their respective owners, and GenuineIT has no authorization to make any changes to them.";

export const clientsIntro =
  "Business partners and clients: we partner with the organizations below to supply IT resources that meet their IT needs.";

const home = "/";
const clientsPage = "/clients.php";

const L = (
  id: string,
  name: string,
  file: string,
  width: number,
  height: number,
  orgType: ClientLogo["orgType"],
  shownOn: string[],
  extra: Partial<ClientLogo> = {},
): ClientLogo => ({ id, name, src: `/images/git-clients/${file}`, width, height, orgType, shownOn, ...extra });

const both = [home, clientsPage];

export const clientLogos: ClientLogo[] = [
  L("samsung", "Samsung", "gitc1.png", 195, 124, "Enterprise", both),
  L("noble-energy", "Noble Energy", "gitc2.png", 200, 53, "Enterprise", both),
  L("texas-concrete", "Texas Concrete", "gitc3.png", 139, 82, "Enterprise", both),
  L("us-flag", "U.S. flag graphic (organisation not identified)", "gitc4.png", 180, 137, "Public sector", both),
  L("hp", "HP", "gitc5.png", 200, 143, "Enterprise", [home], { dark: true }),
  L("amegy-mortgage", "Amegy Mortgage Capital", "gitc6.png", 200, 200, "Enterprise", [home], { namedInText: true }),
  L("texas-dir", "Texas Department of Information Resources", "gitc7.png", 139, 60, "Public sector", both),
  L("texas-oca", "Texas Office of Court Administration", "gitc8.png", 139, 82, "Public sector", both),
  L("texas-hhs", "Texas Health and Human Services", "gitc9.png", 400, 156, "Public sector", both),
  L("arkansas-gov", "State of Arkansas (Arkansas.gov)", "gitc10.png", 286, 68, "Public sector", both),
  L("michigan-gov", "State of Michigan (Michigan.gov)", "gitc11.png", 392, 97, "Public sector", both),
  L("iowa-gov", "State of Iowa (Iowa.gov)", "gitc12.png", 612, 462, "Public sector", both),
  L("delaware-gov", "State of Delaware (Delaware.gov)", "gitc13.png", 307, 87, "Public sector", both),
  L("deloitte", "Deloitte", "gitc14.png", 270, 162, "Staffing & IT services", both, { namedInText: true }),
  L("uri", "URI", "gitc15.png", 139, 60, "Staffing & IT services", both),
  L("riversand", "Riversand", "gitc16.png", 210, 74, "Enterprise", both),
  L("pag-consulting", "PAG Consulting Inc.", "gitc17.png", 468, 72, "Staffing & IT services", both, { namedInText: true, dark: true }),
  L("boss", "BOSS", "gitc18.png", 139, 60, "Enterprise", both),
  L("hexaware", "Hexaware", "gitc19.png", 200, 120, "Staffing & IT services", both),
  L("cognizant", "Cognizant", "gitc20.png", 180, 70, "Staffing & IT services", both),
  L("hcl", "HCL", "gitc21.png", 283, 235, "Staffing & IT services", both, { namedInText: true, dark: true }),
  L("birlasoft", "Birlasoft", "gitc22.png", 209, 100, "Staffing & IT services", both),
  L("sogeti", "Sogeti (part of Capgemini)", "gitc23.png", 1200, 621, "Staffing & IT services", both),
  L("ntt-data", "NTT DATA", "gitc24.png", 180, 70, "Staffing & IT services", both),
  L("leadigm", "LeadIGM", "gitc25.png", 200, 80, "Enterprise", both, { namedInText: true }),
  L("genesisit", "GenesisIT", "gitc26.png", 252, 63, "Staffing & IT services", both, { namedInText: true }),
  L("agreeya", "AgreeYa", "gitc27.png", 155, 68, "Staffing & IT services", both, { namedInText: true }),
  L("collabera", "Collabera", "gitc28.png", 233, 82, "Staffing & IT services", both),
  L("procom", "Procom", "gitc29.png", 177, 35, "Staffing & IT services", both, { namedInText: true }),
  L("beacon-hill", "Beacon Hill Staffing Group", "gitc30.png", 200, 120, "Staffing & IT services", both),
  L("smartdata", "smartData", "gitc31.png", 200, 120, "Staffing & IT services", both, { dark: true }),
  L("kforce", "Kforce", "gitc32.png", 200, 120, "Staffing & IT services", both),
  L("modis", "Modis", "gitc33.png", 342, 112, "Staffing & IT services", both, { namedInText: true }),
  L("experis", "Experis (ManpowerGroup)", "gitc34.png", 371, 136, "Staffing & IT services", both),
  L("infovision", "InfoVision", "gitc35.png", 200, 200, "Staffing & IT services", both),
  L("randstad", "Randstad", "gitc36.png", 600, 315, "Staffing & IT services", both, { dark: true }),
  L("robert-half", "Robert Half", "gitc37.png", 793, 419, "Staffing & IT services", both),
  L("matrix", "Matrix", "gitc38.png", 6670, 2009, "Staffing & IT services", both),
  L("apex-systems", "Apex Systems", "gitc39.png", 300, 150, "Staffing & IT services", both),
  L("chevron", "Chevron", "chevron.jpg", 195, 124, "Enterprise", [clientsPage]),
  L("championx", "ChampionX", "champion.png", 544, 91, "Enterprise", [clientsPage]),
  L("teksystems", "TEKsystems", "tek.jpg", 195, 124, "Staffing & IT services", [clientsPage]),
  L("kelly", "Kelly Services", "kell.jpg", 195, 124, "Staffing & IT services", [clientsPage]),
  L("allegis", "Allegis Group", "allegis.jpg", 195, 124, "Staffing & IT services", [clientsPage]),
];

/**
 * Names listed as text on the legacy /it-services.php page ("We are partnered with below
 * clients to supply IT resources to meet their IT Needs."), verbatim apart from spelling.
 */
export const itServicesPartnerNames = [
  "GenesisIT",
  "Procom Services",
  "AgreeYa",
  "PAG Consulting Inc.",
  "LeadIGM",
  "US Admissions",
  "US Concrete",
  "Amegy Mortgage",
  "WinWire Technologies",
  "Consulting Solutions International",
  "HCL",
  "Modis",
  "Disys",
  "Freddie Mac",
  "JPMorgan Chase & Co.",
  "Deloitte Consulting",
];

/** Selection for the home page trust band (logos rendered with original colours). */
export const featuredClientIds = [
  "samsung",
  "chevron",
  "deloitte",
  "cognizant",
  "texas-hhs",
  "noble-energy",
  "hcl",
  "ntt-data",
  "sogeti",
  "robert-half",
  "michigan-gov",
  "teksystems",
];
