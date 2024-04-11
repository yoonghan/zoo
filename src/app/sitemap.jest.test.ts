import { systemConfig } from "@/config/system";
import Sitemap from "./sitemap";

describe("Sitemap XML", () => {
  it("should contains main and defined correctly", () => {
    const main = Sitemap().filter(
      (path) => path.url === `${systemConfig.url}/`
    );
    expect(main).toHaveLength(1);
    expect(main[0].priority).toBe(0.9);
    expect(main[0].changeFrequency).toBe("weekly");
  });
});
