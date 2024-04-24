import { zooMenu } from "@/config/menu";
import { zooProfile } from "@/config/profile";
import { test, expect } from "@playwright/test";

test.use({
  viewport: { width: 1600, height: 1200 },
});

test("has menu", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  zooMenu.map(async (menu) => {
    await expect(
      page.getByRole("menuitem", { name: menu.label, exact: true })
    ).toBeVisible();
  });

  const firstMenuHoverable = zooMenu.find(
    (menu) => (menu.items ?? []).length > 0
  );

  if (firstMenuHoverable !== undefined && firstMenuHoverable.items) {
    const mainMenuItem = page.getByRole("menuitem", {
      name: firstMenuHoverable.label,
      exact: true,
    });
    await mainMenuItem.hover();
    await expect(
      mainMenuItem.locator("..").getByRole("menuitem", {
        name: firstMenuHoverable.items[0].label,
        exact: true,
      })
    ).toBeVisible();
  }
});

test("can purchase ticket", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  const ticketUrl = zooProfile.ticket.admission.url;

  await page
    .getByRole("button", { name: zooProfile.ticket.admission.text })
    .click();
  expect(page.url()).toBe(
    ticketUrl.endsWith("/") ? ticketUrl : ticketUrl + "/"
  );
});
