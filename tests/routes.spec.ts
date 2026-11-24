import { test, expect } from "@playwright/test";
import { sitemapPaths } from "./helpers";

const paths = sitemapPaths();

test.describe("every public route", () => {
  for (const path of paths) {
    test(`renders ${path}`, async ({ page }) => {
      const errors: string[] = [];
      page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
      page.on("pageerror", (e) => errors.push(e.message));
      const res = await page.goto(path);
      expect(res?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("header[data-site-header]")).toBeVisible();
      await expect(page.locator("footer[data-site-footer]")).toBeVisible();
      // SEO basics
      const title = await page.title();
      expect(title.length).toBeGreaterThan(10);
      expect(title).toContain("GenuineIT");
      const desc = await page.locator('meta[name="description"]').getAttribute("content");
      expect(desc && desc.length).toBeGreaterThan(50);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
      expect(canonical).toMatch(new RegExp(`${path.replace(/[/.]/g, "\\$&")}$`));
      expect(await page.locator('meta[property="og:image"]').count()).toBeGreaterThan(0);
      // structured data parses
      for (const s of await page.locator('script[type="application/ld+json"]').allTextContents()) JSON.parse(s);
      // all images have alt text and load
      const broken = await page.evaluate(() =>
        Array.from(document.images)
          .filter((img) => !img.hasAttribute("alt") || (img.complete && img.naturalWidth === 0 && img.loading !== "lazy"))
          .map((img) => img.src),
      );
      expect(broken).toEqual([]);
      expect(errors).toEqual([]);
    });
  }
});

test("page titles and descriptions are unique", async ({ request }) => {
  const titles = new Map<string, string>();
  const descs = new Map<string, string>();
  for (const path of paths) {
    const html = await (await request.get(path)).text();
    const t = html.match(/<title>(.*?)<\/title>/)?.[1] ?? "";
    const d = html.match(/<meta name="description" content="(.*?)"/)?.[1] ?? "";
    expect(titles.has(t), `duplicate title "${t}" on ${path} and ${titles.get(t)}`).toBe(false);
    expect(descs.has(d), `duplicate description on ${path} and ${descs.get(d)}`).toBe(false);
    titles.set(t, path);
    descs.set(d, path);
  }
});

test("404 page for unknown URLs", async ({ page }) => {
  const res = await page.goto("/this-page-does-not-exist/");
  expect(res?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("couldn’t find");
});

test("robots.txt and sitemap.xml", async ({ request }) => {
  const robots = await (await request.get("/robots.txt")).text();
  expect(robots).toContain("Sitemap:");
  expect(robots).toContain("Disallow: /api/");
  expect(paths.length).toBeGreaterThan(70);
});
