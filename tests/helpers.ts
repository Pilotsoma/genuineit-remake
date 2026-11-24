import { readFileSync } from "node:fs";

/** All public routes, taken from the generated sitemap (single source of truth). */
export function sitemapPaths(): string[] {
  const xml = readFileSync("out/sitemap.xml", "utf8");
  return Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g)).map((m) => new URL(m[1]).pathname);
}

export const legacyRedirects: { from: string; to: string }[] = JSON.parse(readFileSync("docs/legacy-redirects.json", "utf8")).redirects;

export type Lca = { serial: string; lcaNumber: string; title: string; document: { path: string; available: boolean } | null };
export const lcaRecords: Lca[] = JSON.parse(readFileSync("src/content/compliance/lca-records.json", "utf8"));
