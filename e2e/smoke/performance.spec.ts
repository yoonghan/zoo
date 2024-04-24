import { test, expect, Page } from "@playwright/test";

const assertCumulativeLayoutShift = async (page: Page) => {
  const cummulativeLayoutShift: number = await page.evaluate(() => {
    return new Promise((resolve) => {
      let CLS = 0;

      new PerformanceObserver((l) => {
        const entries = l.getEntries();

        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            CLS += entry.value;
          }
        });

        resolve(CLS);
      }).observe({
        type: "layout-shift",
        buffered: true,
      });
    });
  });

  expect(cummulativeLayoutShift).toBeLessThan(0.1);
};

const assertLargestContentfulPaint = async (page: Page) => {
  const largestContentfulPaint: number = await page.evaluate(() => {
    return new Promise((resolve) => {
      let LCP = 0;

      new PerformanceObserver((l) => {
        const entries = l.getEntries();

        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            LCP += entry.renderTime;
          }
        });

        resolve(LCP);
      }).observe({
        type: "largest-contentful-paint",
        buffered: true,
      });
    });
  });

  //until images can load better
  expect(largestContentfulPaint).toBeLessThan(10000);
};

const assertFirstContentfulPaint = async (page: Page) => {
  const firstContentfulPaint = await page.evaluate(
    () =>
      window.performance
        .getEntriesByType("paint")
        .find(({ name }) => name === "first-contentful-paint")?.startTime
  );
  expect(firstContentfulPaint).toBeLessThan(2000);
};

const checkPerformance = async (page: Page) => {
  await page.waitForLoadState("networkidle");
  const CLS = assertCumulativeLayoutShift(page);
  const LCP = assertLargestContentfulPaint(page);
  const FCP = assertFirstContentfulPaint(page);

  await Promise.all([CLS, LCP, FCP]);
};

test("homepage", async ({ context }) => {
  const page = await context.newPage();

  await page.goto("/");
  await page.goto("/about-us");

  await checkPerformance(page);
});
