import { test, expect } from "@playwright/test";

const widths = [320, 375, 390, 430, 768, 1024, 1280, 1440, 1920];
const pages = [
  "/",
  "/services/",
  "/services/it-staffing/",
  "/services/application-development/",
  "/solutions/oracle-applications/",
  "/industries/",
  "/industries/energy-utilities/",
  "/company/about/",
  "/company/clients-partners/",
  "/careers/",
  "/careers/git-job-002/",
  "/compliance/lca/",
  "/contact/",
];

test.describe("no horizontal overflow", () => {
  test.skip(({ isMobile }) => isMobile, "runs once with explicit widths");
  for (const w of widths) {
    test(`at ${w}px`, async ({ page }) => {
      await page.setViewportSize({ width: w, height: 900 });
      const offenders: string[] = [];
      for (const p of pages) {
        await page.goto(p);
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        if (overflow > 0) offenders.push(`${p} (+${overflow}px)`);
      }
      expect(offenders).toEqual([]);
    });
  }
});

test("touch targets in mobile nav are at least 44px", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile only");
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  const small = await page.locator("#mobile-nav a:visible, #mobile-nav button:visible").evaluateAll((els) =>
    els.filter((e) => e.getBoundingClientRect().height < 44).map((e) => e.textContent?.trim()),
  );
  expect(small).toEqual([]);
});
