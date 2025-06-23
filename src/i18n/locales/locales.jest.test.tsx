import bm from "./bm/translation.json";
import en from "./en/translation.json";

describe("i18n locales", () => {
  it("all bm should have all en fields", () => {
    const enKeys = Object.keys(en);
    const bmKeys = Object.keys(bm);
    expect(bmKeys).toEqual(expect.arrayContaining(enKeys));
  });
});