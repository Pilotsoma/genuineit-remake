/**
 * Structured content model. Business content lives in src/content/** and is
 * rendered by components — never hard-coded inside UI components.
 */

export type ListItem = string | { title: string; text?: string };

export type Block =
  | { kind: "prose"; heading?: string; body: string[] }
  | {
      kind: "list";
      heading?: string;
      intro?: string;
      items: ListItem[];
      /** visual treatment; the renderer picks a sensible default per position */
      variant?: "check" | "grid" | "numbered" | "pills" | "columns" | "cards";
      outro?: string;
    }
  | { kind: "quote"; text: string; attribution?: string }
  | { kind: "split"; heading?: string; columns: { heading: string; items: ListItem[] }[] };

export type CatalogGroup = {
  id: string;
  title: string;
  description: string;
};

export type DetailPage = {
  slug: string;
  title: string;
  /** shorter label for menus */
  navTitle?: string;
  /** one/two sentence summary derived from source copy (cards, meta description) */
  summary: string;
  /** opening paragraph shown in the hero */
  lead: string;
  group: string;
  /** original URL on genuineitllc.com this page replaces */
  legacyPath: string;
  blocks: Block[];
  related?: { section: "services" | "solutions" | "industries"; slug: string }[];
  technologies?: string[];
  /** lucide icon name used on cards */
  icon?: string;
  /** flags shown to editors only (documented in docs/owner-approval-required.md) */
  reviewNotes?: string[];
  /** marks platform-era content that should be refreshed by the owner */
  legacyPlatform?: boolean;
  seoTitle?: string;
};

export type JobPosting = {
  id: string;
  title: string;
  openings: string;
  responsibilities: string[];
  /** "Educational Background and Experience needed" — verbatim */
  education: string[];
  applyInstructions: string;
  /** tags derived from the posting text for filtering (not new claims) */
  skills: string[];
  category: "Software Engineering" | "DevOps & Release" | "Enterprise Applications" | "Contact Center";
  /** status as known from the legacy site; not verified as currently open */
  status: "listed-unverified";
  legacySource: string;
};

export type LcaRecord = {
  id: string;
  order: number;
  serial: string;
  lcaNumber: string;
  title: string;
  location: string;
  status: string;
  document: { path: string; legacyPath: string; available: boolean } | null;
};

export type ClientLogo = {
  id: string;
  name: string;
  src: string;
  width: number;
  height: number;
  /** organisation type — describes the organisation, NOT the relationship */
  orgType: "Public sector" | "Enterprise" | "Staffing & IT services";
  /** whether the legacy site also named this organisation in text */
  namedInText?: boolean;
  /** pages on the legacy site that displayed this logo */
  shownOn: string[];
  dark?: boolean;
};
