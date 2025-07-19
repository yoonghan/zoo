import translation from "@/i18n/locales/en/translation";
import { test, expect } from "@playwright/test";

const zooAnnouncement = translation["announcements"];

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page).toHaveTitle(/Zoo Negara/);
});

test("has announcement", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  if (zooAnnouncement.length > 0) {
    const announcement = page.getByTestId("announcement");
    await expect(announcement).toBeVisible();

    await page.getByLabel("Close Announcement").click();

    await expect(announcement).not.toBeVisible();
  }
});

test("links for contact zoo is valid", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "Contact Zoo Negara" }).click();
  await expect(page).toHaveTitle(/Contact Zoo Negara/);
});

test("links for career is valid", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "Careers" }).click();
  await expect(page).toHaveTitle(/Careers/);
});

test("links for faq is valid", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "FAQ" }).click();
  await expect(page).toHaveTitle(/Frequent Asked Questions/);
});
