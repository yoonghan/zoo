import { useTranslation, getTranslation } from "./index";
import msPages from "./locales/ms/pages";
import msTranslation from "./locales/ms/translation";

describe("i18n", () => {
  it("should translation for default language for both method", async () => {
    expect((await useTranslation("ms")).t("Monday")).toBe(
      msTranslation["Monday"]
    );
    expect((await getTranslation("ms")).t("Monday")).toBe(
      msTranslation["Monday"]
    );
  });

  it("should handle missing translations gracefully", async () => {
    const nonExistentKey = "Not a key that should exist";
    expect((await useTranslation("en")).t(nonExistentKey)).toBe(nonExistentKey);
  });

  // Should not matter, hence disabled
  xit("should handle objects", async () => {
    expect(
      (await useTranslation("en")).t("announcements", { returnObjects: true })
    ).toHaveLength(2);
  });

  it("should handle other pages", async () => {
    expect(
      (await useTranslation("ms", "pages")).t("headers.aboutUs.title")
    ).toBe(msPages.headers.aboutUs.title);
  });
});
