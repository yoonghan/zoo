import { expect, test } from "@playwright/test"
import { systemConfig } from "@/config/system"

test.describe("important! SEO urls", () => {
	test("should be able to see sitemap.xml", async ({ page }) => {
		await page.goto("http://localhost:3000/sitemap.xml")
		expect(await page.content()).toContain(`${systemConfig.url}/`)
	})
})