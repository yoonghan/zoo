import { useTranslation, getTranslation } from "./index"

describe("i18n", () => {
  it("should translation for default language for both method", async () => {
    expect((await useTranslation("ms")).t("Monday")).toBe("Isnin");
    expect((await getTranslation("ms")).t("Monday")).toBe("Isnin");
  });

  it("should handle missing translations gracefully", async () => {
    const nonExistentKey = "Not a key that should exist";
    expect((await useTranslation("en")).t(nonExistentKey)).toBe(nonExistentKey);
  });

  it("should handle objects", async () => {
    expect((await useTranslation("en")).t("announcements", { returnObjects: true })).toHaveLength(2);
  });

});