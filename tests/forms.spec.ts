import { test, expect } from "@playwright/test";

for (const path of ["/contact/", "/contact/business-inquiries/", "/services/it-staffing/", "/contact/partnerships/"]) {
  test(`form validation on ${path}`, async ({ page }) => {
    await page.goto(path);
    const form = page.locator("form").first();
    await form.getByRole("button", { name: /send|submit/i }).click();
    await expect(form.getByRole("alert")).toContainText("Please correct");
    await expect(form.getByLabel(/full name/i)).toHaveAttribute("aria-invalid", "true");
    await expect(form.getByLabel(/full name/i)).toBeFocused();
  });
}

test("form never reports success when delivery is not configured", async ({ page }) => {
  await page.goto("/contact/business-inquiries/");
  const form = page.locator("form").first();
  await form.getByLabel(/full name/i).fill("Test Person");
  await form.getByLabel(/business email/i).fill("test@example.com");
  await form.getByLabel(/company name/i).fill("Example Co");
  await form.getByLabel(/^message/i).fill("We would like to discuss staff augmentation for an SAP project.");
  await form.getByLabel(/I agree/i).check();
  const req = page.waitForRequest((r) => r.url().endsWith("/api/inquiry.php") && r.method() === "POST");
  await form.getByRole("button", { name: /send inquiry/i }).click();
  const body = JSON.parse((await req).postData() || "{}");
  expect(body.website).toBe(""); // honeypot empty
  expect(body.elapsed).toBeGreaterThan(0);
  await expect(form.getByRole("alert")).toContainText("temporarily unavailable");
  await expect(page.getByText("your message was sent")).toHaveCount(0);
});
