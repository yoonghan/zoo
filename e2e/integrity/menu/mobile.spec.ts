import { zooMenu } from "@/config/menu";
import { zooProfile } from "@/config/profile";
import { test, expect } from "@playwright/test";
import en from "@/i18n/locales/en/translation";

test.use({
  viewport: { width: 900, height: 1200 },
});

const convertToMenuLabel = (menuLabel: string) => {
  const label = menuLabel.replace("menu.", "")
  return (en["menu"] as any)[label]
}


test("has menu", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(
    page.getByRole("link", { name: "Zoo Negara", exact: true })
  ).toBeVisible();

  if (zooMenu.length > 0) {
    const firstTopMenuItem = page
      .getByRole("menuitem", { name: convertToMenuLabel(zooMenu[0].label) })
      .locator("../../../..");
    const hamburgerMenu = page.getByLabel("Main Menu");

    await expect(firstTopMenuItem).not.toBeVisible();

    await hamburgerMenu.click();

    await expect(firstTopMenuItem).toBeVisible();

    await hamburgerMenu.click();

    await expect(firstTopMenuItem).not.toBeVisible();
  }
});

test("menu that has child will be expanded (with +) and child is clickable", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");

  await page.getByLabel("Main Menu").click();

  const firstMenuWithItemsAreNotLinkable = zooMenu.find(
    (menu) => (menu.items ?? []).length > 0
  );

  if (firstMenuWithItemsAreNotLinkable) {
    await page
      .getByRole("menuitem", {
        name: `+ ${convertToMenuLabel(firstMenuWithItemsAreNotLinkable.label)}`,
        exact: true,
      })
      .click();

    const items = firstMenuWithItemsAreNotLinkable.items;
    if (items !== undefined) {
      await page
        .getByRole("menuitem", {
          name: convertToMenuLabel(items[0].label),
          exact: true,
        })
        .click();
      expect(page.url, items[0].url);
    }
  }
});

test("menu that had no child can be clicked", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.getByLabel("Main Menu").click();

  const firstMenuWithNoItemsClickable = zooMenu.find(
    (menu) => (menu.items ?? []).length === 0
  );

  if (firstMenuWithNoItemsClickable) {
    await page
      .getByRole("menuitem", {
        name: convertToMenuLabel(firstMenuWithNoItemsClickable.label),
        exact: true,
      })
      .click();
    expect(page.url, firstMenuWithNoItemsClickable.url);
  }
});

test("can purchase ticket", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  const ticketUrl = zooProfile.ticket.admission.url;

  await page
    .getByRole("link", { name: "Buy Ticket" })
    .click();
  expect(page.url()).toBe(
    ticketUrl.endsWith("/") ? ticketUrl : ticketUrl + "/"
  );
});
