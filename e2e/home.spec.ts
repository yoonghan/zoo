import { zooAnnouncement } from '@/config/announcements';
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page).toHaveTitle(/Zoo Negara/);
});

test('has announcement', async({page}) => {
  await page.goto('http://localhost:3000/');
  if(zooAnnouncement.length > 0) {
    await expect(page.getByText(zooAnnouncement[0])).toBeVisible();

    await page.getByRole("button", {name: "Close Announcement"}).click()

    await expect(page.getByText(zooAnnouncement[0])).not.toBeVisible();
  }
});