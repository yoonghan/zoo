import ms from "./ms/translation";
import en from "./en/translation";
import msPages from "./ms/pages";
import enPages from "./en/pages";

import zooFaqEN from "./en/faq";
import zooFaqMS from "./ms/faq";

describe("i18n locales", () => {
  it("all ms should have all en fields", () => {
    const enKeys = Object.keys(en);
    const msKeys = Object.keys(ms);
    expect(msKeys).toEqual(expect.arrayContaining(enKeys));

    const enPagesKeys = Object.keys(enPages);
    const msPagesKeys = Object.keys(msPages);
    expect(msPagesKeys).toEqual(expect.arrayContaining(enPagesKeys));
  });

  it("all faq should be defined in both languages", () => {
    expect(zooFaqEN.length).toBe(zooFaqMS.length);
  })

  it('should contain {{time}} handlebar', () => {
    [ms, en].forEach(lngJson => {
      expect(lngJson["footer"]["lastAdmission"]).toContain("{{time}}")
    })
  })
});