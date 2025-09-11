import translations from "@/i18n/locales/en/pages";
import Home, { generateMetadata } from "./page";
import { render, screen, act } from "@testing-library/react";

/** Testing is limited for layout, as it renders whole html. The only best solution is via e2e test. */
describe("Main Homepage", () => {
  it("should contains 3 important keys", async () => {
    await act(async () => {
      render(<Home params={Promise.resolve({ lng: "en" })} />);
    })
    //main
    expect(await screen.findByRole("main")).toBeInTheDocument();
    //headers
    expect(
      screen.getByRole("heading", { name: "Welcome to Zoo Negara" })
    ).toBeInTheDocument();
  });

  it("should generate site headers", async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ lng: "en" }) })

    expect(metadata.title).toBe(translations.headers.default)
    expect(metadata.description).toBe(translations.headers.defaultDescription)
  })
});
