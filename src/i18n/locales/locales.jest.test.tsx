import ms from "./ms/translation.json";
import en from "./en/translation.json";

import zooFaqEN from "./en/faq";
import zooFaqMS from "./ms/faq";

describe("i18n locales", () => {
  it("all ms should have all en fields", () => {
    const enKeys = Object.keys(en);
    const msKeys = Object.keys(ms);
    expect(msKeys).toEqual(expect.arrayContaining(enKeys));


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