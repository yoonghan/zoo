import { systemConfig } from "@/config/system";
import { generateSiteMeta } from "./generateMeta";

describe("generateSiteMeta", () => {
  it("returns correct metadata for English", () => {
    const meta = generateSiteMeta("en", "Test Title", "Test Description");
    expect(meta).toEqual({
      metadataBase: new URL(systemConfig.url),
      title: "Test Title",
      description: "Test Description",
      alternates: {
        languages: {
          id: "/ms",
          en: "/en",
          ms: "/ms"
        }
      }
    });
  });

  it("returns correct metadata for non-English language", () => {
    const meta = generateSiteMeta("ms", "Judul Uji", "Deskripsi Uji");
    expect(meta).toEqual({
      metadataBase: new URL(systemConfig.url),
      title: "Judul Uji",
      description: "Deskripsi Uji",
      alternates: {
        canonical: "/",
        languages: {
          id: "/ms",
          en: "/en",
          ms: "/ms"
        }
      }
    });
  });
});