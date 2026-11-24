import { test, expect } from "@playwright/test";
import { lcaRecords } from "./helpers";

test("LCA directory lists every source record in original order", async ({ page }) => {
  await page.goto("/compliance/lca/");
  const rows = page.locator("table tbody tr");
  await expect(rows).toHaveCount(75);
  expect(lcaRecords.length).toBe(75);
  const serials = await page.locator("table tbody tr th").allTextContents();
  expect(serials).toEqual(lcaRecords.map((r) => r.serial));
  // duplicates in the source are preserved, not merged
  expect(serials.filter((s) => s === "GIT-LCA-54")).toHaveLength(2);
});

test("LCA search by number and by title", async ({ page }) => {
  await page.goto("/compliance/lca/");
  const search = page.getByLabel("Search by LCA number, serial number or job title");
  await search.fill("I-200-25199-184003");
  await expect(page.locator("table tbody tr")).toHaveCount(1);
  await search.fill("ETL DEVELOPER");
  const n = lcaRecords.filter((r) => r.title.toLowerCase().includes("etl developer")).length;
  await expect(page.locator("table tbody tr")).toHaveCount(n);
  await search.fill("zzzz-no-match");
  await expect(page.getByText("No records match")).toBeVisible();
});

test("every available LCA PDF downloads as a PDF", async ({ request }) => {
  test.setTimeout(180_000);
  const withDocs = lcaRecords.filter((r) => r.document?.available);
  expect(withDocs.length).toBe(70);
  for (const r of withDocs) {
    const res = await request.get(encodeURI(r.document!.path));
    expect(res.status(), r.document!.path).toBe(200);
    const body = await res.body();
    expect(body.subarray(0, 5).toString(), r.document!.path).toBe("%PDF-");
  }
});

test("records whose PDF is missing at source are clearly marked", async ({ page }) => {
  await page.goto("/compliance/lca/");
  await expect(page.locator("table").getByText("Document pending")).toHaveCount(lcaRecords.filter((r) => !r.document?.available).length);
});
