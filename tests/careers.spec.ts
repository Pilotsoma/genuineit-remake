import { test, expect } from "@playwright/test";

test("careers search and category filters", async ({ page }) => {
  await page.goto("/careers/");
  const list = page.locator("#positions ul.grid > li");
  await expect(list).toHaveCount(8);
  await page.getByLabel("Search positions by title or skill").fill("Sitecore");
  await expect(list).toHaveCount(2); // Sitecore developer + DevOps (Sitecore templates)
  await page.getByLabel("Search positions by title or skill").fill("");
  await page.getByRole("button", { name: "Contact Center" }).click();
  await expect(list).toHaveCount(1);
  await expect(page.getByRole("button", { name: "Contact Center" })).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("button", { name: "All", exact: true }).click();
  await expect(list).toHaveCount(8);
});

test("job detail preserves legal wording and application route", async ({ page }) => {
  await page.goto("/careers/git-job-001/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Software Developer");
  await expect(page.getByText("These minimum prerequisites for the offered position clearly make it a specialty occupation.")).toBeVisible();
  await expect(page.getByText("Mail resume to GenuineIT, 9894 Bissonnet St., # 827, Houston, TX 77036.")).toBeVisible();
  await expect(page.getByRole("link", { name: "Email careers team" })).toHaveAttribute("href", /^mailto:careers@genuineitllc\.com/);
  // no JobPosting structured data while status is unverified
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join(" ");
  expect(ld).not.toContain("JobPosting");
});
