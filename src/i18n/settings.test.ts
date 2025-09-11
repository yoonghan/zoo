import { getOptions, fallbackLng, languages, cookieName } from "./settings";

describe("i18n settings", () => {
  it("should be able to get all options", () => {
    expect(getOptions()).toStrictEqual({
      supportedLngs: ["en", "ms", "zh"],
      fallbackLng: "en",
      lng: "en",
      fallbackNS: "translation",
      defaultNS: "translation",
      ns: "translation",
    });
  });

  it("should set all the values correctly", () => {
    expect(cookieName).toBe("i18next");
    expect(fallbackLng).toBe("en");
    expect(languages).toEqual(["en", "ms", "zh"]);
  });
});
