import { test, expect } from "@playwright/test";
import { sitemapPaths, legacyRedirects } from "./helpers";

test("all internal links and downloads resolve", async ({ request }) => {
  test.setTimeout(240_000);
  const targets = new Map<string, string>(); // href -> first page found on
  const external = new Set<string>();
  for (const path of sitemapPaths()) {
    const html = await (await request.get(path)).text();
    for (const m of html.matchAll(/href="([^"#]+)(#[^"]*)?"/g)) {
      const href = m[1].replace(/&amp;/g, "&");
      if (href.startsWith("mailto:") || href.startsWith("tel:")) continue;
      if (/^https?:/.test(href)) {
        external.add(href);
        continue;
      }
      if (href.startsWith("/_next/")) continue;
      if (!targets.has(href)) targets.set(href, path);
    }
  }
  const failures: string[] = [];
  for (const [href, from] of targets) {
    const res = await request.get(href, { maxRedirects: 0 });
    if (res.status() !== 200) failures.push(`${href} (${res.status()}) linked from ${from}`);
  }
  console.log(`checked ${targets.size} internal links; ${external.size} external links (not crawled)`);
  expect(failures).toEqual([]);
});

test.describe("legacy redirects", () => {
  for (const r of legacyRedirects) {
    test(`${r.from} → ${r.to}`, async ({ request }) => {
      const res = await request.get(r.from, { maxRedirects: 0 });
      expect(res.status()).toBe(301);
      expect(res.headers()["location"]).toBe(r.to);
      const target = await request.get(r.to);
      expect(target.status()).toBe(200);
    });
  }
});

test("brochure, flyer and employee documents are retained at original URLs", async ({ request }) => {
  for (const url of [
    "/images/docs/git-brocture.pdf",
    "/images/GenuineIT-Flyer.pdf",
    "/images/docs-2018/GIT-TimeSheet.pdf",
    "/images/docs-2018/Mileage_logsheet.xlsx",
    "/images/docs-2018/Performance-Report-Sample.docx",
    "/images/logo.png",
  ]) {
    const res = await request.get(url);
    expect(res.status(), url).toBe(200);
    expect((await res.body()).length, url).toBeGreaterThan(1000);
  }
});
