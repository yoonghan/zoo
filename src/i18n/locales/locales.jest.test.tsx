import bm from "./bm/translation.json";
import en from "./en/translation.json";

import zooAnnouncementEN from "./en/announcements";
import zooAnnouncementBM from "./bm/announcements";

import zooFaqEN from "./en/faq";
import zooFaqBM from "./bm/faq";

describe("i18n locales", () => {
  it("all bm should have all en fields", () => {
    const enKeys = Object.keys(en);
    const bmKeys = Object.keys(bm);
    expect(bmKeys).toEqual(expect.arrayContaining(enKeys));
  });

  it("all announcement should be defined in both languages", () => {
    expect(zooAnnouncementBM.length).toBe(zooAnnouncementEN.length);
  })

  it("all faq should be defined in both languages", () => {
    expect(zooFaqEN.length).toBe(zooFaqBM.length);
  })
});