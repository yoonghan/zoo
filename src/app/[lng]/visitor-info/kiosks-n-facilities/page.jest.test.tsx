import { render, act, screen } from "@testing-library/react";
import KiosksAndFacilities, { generateMetadata } from "./page";
import translations from "@/i18n/locales/en/pages";

describe("ShopsAndFacilities", () => {
  it("should contains important keys", async () => {
    await act(async () => {
      render(<KiosksAndFacilities params={Promise.resolve({ lng: "en" })} />);
    })
    //main
    expect(await screen.findByRole("main")).toBeInTheDocument();
    //h1
    expect(
      screen.getByRole("heading", { name: "Kiosks And Facilities" })
    ).toBeInTheDocument();

    expect(screen.getByText(translations.kiosksNFacilities.food.restaurants[0].title)).toBeInTheDocument()
    expect(screen.getByText(translations.kiosksNFacilities.souvenir.shops[0].title)).toBeInTheDocument()
    expect(screen.getByText(translations.kiosksNFacilities.facilities.facilities[0].title)).toBeInTheDocument()
  });

  it("should generate site headers", async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ lng: "en" }) })

    expect(metadata.title).toBe(translations.headers.kiosksNFacilities.title)
    expect(metadata.description).toBe(translations.headers.kiosksNFacilities.description)
  })
});
