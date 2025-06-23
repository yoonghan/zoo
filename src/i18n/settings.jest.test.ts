import { getOptions } from "./settings";

describe("i18n settings", () => {
  it("should be able to get all options", () => {
    expect(getOptions()).toStrictEqual({
        supportedLngs: ["en", "bm"],
        fallbackLng: "en",
        lng: "en",
        fallbackNS: "translation",
        defaultNS: "translation",
        ns: "translation"
    })
  })
});