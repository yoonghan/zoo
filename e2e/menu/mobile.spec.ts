import { zooMenu } from '@/config/menu';
import { test, expect } from '@playwright/test';

test.use({
  viewport: { width: 900, height: 1200 },
});

test('has menu', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole("link", {name: "Zoo Negara Malaysia"})).toBeVisible()

  if(zooMenu.length > 0) {
    const firstTopMenuItem = page.getByRole("menuitem", { name: zooMenu[0].label }).locator("../../../..")
    const hamburgerMenu = page.getByLabel("Main Menu")

    await expect(firstTopMenuItem).not.toBeVisible()
    
    await hamburgerMenu.click()

    await expect(firstTopMenuItem).toBeVisible()

    // hover should work in desktop, hence not covered.

    await hamburgerMenu.click()

    await expect(firstTopMenuItem).not.toBeVisible()
  }
});