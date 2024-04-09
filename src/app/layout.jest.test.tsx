import "@testing-library/jest-dom";
import { metadata } from "./layout";
import RootLayout from "./layout";

/** Testing is limited for layout, as it renders whole html. The only best solution is via e2e test. */
describe("Main Layout", () => {
  it("should contains a valid metadata with important keys", () => {
    const metaKeyShouldBeIncluded = ["title", "description"];
    const convertedMetaAsObject = metadata as any;

    const missingMetaKeys = metaKeyShouldBeIncluded.filter(
      (metaKey) => convertedMetaAsObject[metaKey] === undefined
    );

    expect(missingMetaKeys).toHaveLength(0);
  });

  it("can render a html page correctly as english", () => {
    expect(RootLayout({ children: <div>Hi</div> })?.props).toHaveProperty(
      "lang",
      "en"
    );
  });
});
