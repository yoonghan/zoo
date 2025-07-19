import ms from "./ms/translation";
import en from "./en/translation";
import zh from "./zh/translation";
import msPages from "./ms/pages";
import enPages from "./en/pages";
import zhPages from "./zh/pages";

import zooFaqEN from "./en/faq";
import zooFaqMS from "./ms/faq";

describe("i18n locales", () => {
  it("all ms, zh should have all en fields", () => {
    const enKeys = Object.keys(en);
    [ms, zh].forEach((lngJson) => {
      const lngKeys = Object.keys(lngJson);
      expect(lngKeys).toEqual(expect.arrayContaining(enKeys));
    });

    const enPagesKeys = Object.keys(enPages);
    [msPages, zhPages].forEach((lngJson) => {
      const lngPagesKeys = Object.keys(lngJson);
      expect(lngPagesKeys).toEqual(expect.arrayContaining(enPagesKeys));
    });
  });

  it("all faq should be defined in both languages, except chinese", () => {
    expect(zooFaqEN.length).toBe(zooFaqMS.length);
  });

  it("should contain {{time}} handlebar", () => {
    [ms, en, zh].forEach((lngJson) => {
      expect(lngJson["footer"]["lastAdmission"]).toContain("{{time}}");
    });
  });
});
