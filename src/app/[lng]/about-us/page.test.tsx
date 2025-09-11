import { render, screen, act } from "@testing-library/react";
import About, { generateMetadata } from "./page";
import translations from "@/i18n/locales/en/pages";

describe("About Us", () => {

  const expectedHeaders = ["aboutWalcron", "aboutZoo", "vision"]

  it("should contains important keys", async () => {
    await act(async () => {
      render(<About params={Promise.resolve({ lng: "en" })} />);
    })
    //main
    expect(await screen.findByRole("main")).toBeInTheDocument();

    /* Start headers from config key */
    expect(screen.getByRole("heading", { name: "About Us" })).toBeInTheDocument();

    expectedHeaders.forEach(headers => {
      expect(
        screen.getByRole("heading", { name: (translations.aboutUs[headers]).title })
      ).toBeInTheDocument();
    })

    /* End headers from config key */
  });

  it("should have a class 'anchor-link-header' for sticky header handling", async () => {
    const componentContainer = await act(async () => {
      const { container } = render(<About params={Promise.resolve({ lng: "en" })} />);
      return container
    })

    //main
    expect(await screen.findByRole("main")).toBeInTheDocument();

    expectedHeaders.forEach((miniLink) => {
      expect(componentContainer.querySelector(`#${miniLink}`)).toHaveClass(
        "anchor-link-header"
      );
    });
  });

  it("should generate site headers", async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ lng: "en" }) })

    expect(metadata.title).toBe(translations.headers.aboutUs.title)
    expect(metadata.description).toBe(translations.headers.aboutUs.description)
  })
});
