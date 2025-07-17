import { zooMenu } from "@/config/menu";
import { zooProfile } from "@/config/profile";
import { test, expect } from "@playwright/test";
import en from "@/i18n/locales/en/translation";

test.use({
  viewport: { width: 1600, height: 1200 },
});

const convertToMenuLabel = (menuLabel: string) => {
  const label = menuLabel.replace("menu.", "")
  return (en["menu"] as any)[label]
}

test("has menu", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  zooMenu.forEach(async (menu) => {
    await expect(
      page.getByRole("menuitem", { name: convertToMenuLabel(menu.label), exact: true })
    ).toBeVisible();
  });

  const firstMenuHoverable = zooMenu.find(
    (menu) => (menu.items ?? []).length > 0
  );

  if (firstMenuHoverable !== undefined && firstMenuHoverable.items) {
    const mainMenuItem = page.getByRole("menuitem", {
      name: convertToMenuLabel(firstMenuHoverable.label),
      exact: true,
    });
    await mainMenuItem.hover();
    await expect(
      mainMenuItem.locator("..").getByRole("menuitem", {
        name: convertToMenuLabel(firstMenuHoverable.items[0].label),
        exact: true,
      })
    ).toBeVisible();
  }
});

test("can purchase ticket", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  const ticketUrl = zooProfile.ticket.admission.url;

  await page
    .getByRole("link", { name: en["menu"]["Buy Ticket"] })
    .click();
  expect(page.url()).toBe(
    ticketUrl.endsWith("/") ? ticketUrl : ticketUrl + "/"
  );
});
