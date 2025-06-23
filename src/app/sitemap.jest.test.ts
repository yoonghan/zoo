import { systemConfig } from "@/config/system";
import Sitemap, { dynamic } from "./sitemap";
import { languages } from "@/i18n/settings";

describe("Sitemap XML", () => {
  it("should contains main and defined correctly for main", () => {
    languages.forEach((lng) => {
      const main = Sitemap().filter(
        (path) => path.url === `${systemConfig.url}/${lng}/`
      );
      expect(main[0].priority).toBe(0.9);
      expect(main[0].changeFrequency).toBe("weekly");
    });
  });

  it("should contain default without language", () => {
    const main = Sitemap().filter(
        (path) => path.url === `${systemConfig.url}/`
      );
      expect(main[0].priority).toBe(0.9);
      expect(main[0].changeFrequency).toBe("weekly");
  });

  it("should contain force-static export", () => {
    expect(dynamic).toBe("force-static");
  });
});
