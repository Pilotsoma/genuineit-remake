import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { sitemapPaths } from "./helpers";

// Automated WCAG 2.x A/AA checks with axe-core on every route. Automated checks cover only
// part of WCAG; see docs/accessibility-report.md for manual checks.
for (const path of sitemapPaths()) {
  test(`axe: ${path}`, async ({ page }) => {
    await page.goto(path);
    await page.evaluate(() => document.querySelectorAll("[data-reveal]").forEach((e) => e.classList.add("is-visible")));
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
    const serious = results.violations
      .filter((v) => v.impact === "serious" || v.impact === "critical")
      .map((v) => `${v.id}: ${v.nodes.length} node(s) — ${v.nodes.slice(0, 3).map((n) => n.target.join(" ")).join(" | ")}`);
    expect(serious, serious.join("\n")).toEqual([]);
  });
}
