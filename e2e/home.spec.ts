import { zooAnnouncement } from '@/config/announcements';
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page).toHaveTitle(/Zoo Negara/);
});

test('has announcement', async({page}) => {
  await page.goto('http://localhost:3000/');
  if(zooAnnouncement.length > 0) {
    const announcement = page.getByTestId("announcement")
    await expect(announcement).toBeVisible();

    await page.getByLabel("Close Announcement").click()

    await expect(announcement).not.toBeVisible();
  }
});