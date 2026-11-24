import { test } from "@playwright/test";

// Captures review screenshots into docs/screenshots/. Run with: npx playwright test screenshots
const shots: [string, string][] = [
  ["home", "/"],
  ["services-overview", "/services/"],
  ["service-detail", "/services/application-integration/"],
  ["it-staffing", "/services/it-staffing/"],
  ["solution-detail", "/solutions/oracle-applications/"],
  ["industries-overview", "/industries/"],
  ["industry-detail", "/industries/energy-utilities/"],
  ["about", "/company/about/"],
  ["clients-partners", "/company/clients-partners/"],
  ["careers", "/careers/"],
  ["job-detail", "/careers/git-job-004/"],
  ["lca", "/compliance/lca/"],
  ["contact", "/contact/"],
];

for (const [name, path] of shots) {
  test(`screenshot ${name}`, async ({ page }, info) => {
    await page.goto(path);
    await page.evaluate(() => document.querySelectorAll("[data-reveal]").forEach((e) => e.classList.add("is-visible")));
    await page.waitForTimeout(300);
    await page.screenshot({ path: `docs/screenshots/${info.project.name}/${name}.jpg`, fullPage: true, type: "jpeg", quality: 72 });
  });
}
