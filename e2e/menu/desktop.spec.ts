import { zooMenu } from '@/config/menu';
import { test, expect } from '@playwright/test';

test.use({
  viewport: { width: 1600, height: 1200 },
});

test('has menu', async ({ page, isMobile }) => {
  await page.goto('http://localhost:3000/');
  
  zooMenu.map(async (menu) => {
    await expect(page.getByRole("menuitem", { name: menu.label })).toBeVisible();
  })

  const firstMenuHoverable = zooMenu.find(menu => (menu.items ?? []).length > 0)

  if(firstMenuHoverable !== undefined && firstMenuHoverable.items) {
    const mainMenuItem = page.getByRole("menuitem", {name: firstMenuHoverable.label})
    await mainMenuItem.hover()
    expect(mainMenuItem.locator("..").getByRole("menuitem", {name: firstMenuHoverable.items[0].label})).toBeVisible()
  }
});