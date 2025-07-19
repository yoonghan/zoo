import { systemConfig } from "@/config/system";
import Sitemap, { dynamic } from "./sitemap";

describe("Sitemap XML", () => {
  it("should contains main and defined correctly for main", () => {
    const main = Sitemap().filter(
      (path) => path.url === `${systemConfig.url}/`
    );
    expect(main[0].priority).toBe(0.9);
    expect(main[0].changeFrequency).toBe("weekly");
    expect(main[0].alternates?.languages).toEqual({
      en: `${systemConfig.url}/en`,
      ms: `${systemConfig.url}/ms`,
      zh: `${systemConfig.url}/zh`,
    });
  });

  it("should contain about us with corrected languages", () => {
    const main = Sitemap().filter(
      (path) => path.url === `${systemConfig.url}/en/about-us`
    );
    expect(main[0].priority).toBe(0.3);
    expect(main[0].changeFrequency).toBe("weekly");
    expect(main[0].alternates?.languages).toEqual({
      en: `${systemConfig.url}/en/about-us`,
      ms: `${systemConfig.url}/ms/about-us`,
      zh: `${systemConfig.url}/zh/about-us`,
    });
  });

  it("should not contain site with /", () => {
    const main = Sitemap().filter(
      (path) => path.url === `${systemConfig.url}/en/`
    );
    expect(main.length).toBe(0);
  });

  it("should contain force-static export", () => {
    expect(dynamic).toBe("force-static");
  });
});
