import { zooAnnouncement } from "@/config/announcements";
import { test, expect } from "@playwright/test";
import footerLabel from "@/components/Footer/constant";

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

test("links for contact us is valid", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: footerLabel.contactUs }).click();
  await expect(page).toHaveTitle(/Contact Us/);
});

test("links for career is valid", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: footerLabel.careers }).click();
  await expect(page).toHaveTitle(/Careers/);
});

test("links for certificates is valid", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: footerLabel.certificates }).click();
  await expect(page).toHaveTitle(/Accreditation \/ Certification/);
});

test("links for faq is valid", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: footerLabel.faq }).click();
  await expect(page).toHaveTitle(/Frequent Asked Questions/);
});
