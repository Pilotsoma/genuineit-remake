import { test, expect } from "@playwright/test";

test("desktop mega menu opens, navigates and closes with Escape", async ({ page, isMobile }) => {
  test.skip(isMobile, "desktop only");
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Services" });
  await trigger.click();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  const menu = page.getByRole("region", { name: "Services menu" });
  await expect(menu).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(menu).toBeHidden();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await menu.getByRole("link", { name: "Cloud Services" }).first().click();
  await expect(page).toHaveURL(/\/services\/cloud-services\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Cloud Services");
});

test("keyboard users can reach the skip link and main content", async ({ page, isMobile }) => {
  test.skip(isMobile, "desktop only");
  await page.goto("/services/");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to content" });
  await expect(skip).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main$/);
});

test("mobile navigation opens, expands groups and navigates", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile only");
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open menu" });
  await toggle.click();
  const nav = page.getByRole("navigation", { name: "Mobile" });
  await expect(nav).toBeVisible();
  await nav.getByRole("button", { name: "Industries" }).click();
  await nav.getByRole("link", { name: "Manufacturing" }).click();
  await expect(page).toHaveURL(/\/industries\/manufacturing\/$/);
  await expect(nav).toBeHidden();
});

test("breadcrumbs on inner pages", async ({ page }) => {
  await page.goto("/solutions/sap/");
  const bc = page.getByRole("navigation", { name: "Breadcrumb" });
  await expect(bc.getByRole("link", { name: "Home" })).toBeVisible();
  await expect(bc.getByRole("link", { name: "Solutions" })).toHaveAttribute("href", "/solutions/");
});
