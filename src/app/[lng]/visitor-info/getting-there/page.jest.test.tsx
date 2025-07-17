import { act, render, screen } from "@testing-library/react";
import GettingThere, { generateMetadata } from "./page";
import translations from "@/i18n/locales/en/pages";

describe("Getting There", () => {
  it("should contains important keys", async () => {
    await act(async () => {
      render(<GettingThere params={Promise.resolve({ lng: "en" })} />);
    })
    //main
    expect(await screen.findByRole("main")).toBeInTheDocument();
    //h1
    expect(screen.getByRole("heading", { name: "Getting There" })).toBeInTheDocument();

    expect(screen.getByRole("heading", { name: "Drive" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Address" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Train" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Public Bus" })).toBeInTheDocument();

    expect(screen.getByRole("link", { name: translations.gettingThere.viewBtnText })).toBeInTheDocument();
  });

  it("should generate site headers", async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ lng: "en" }) })

    expect(metadata.title).toBe(translations.headers.gettingThere.title)
    expect(metadata.description).toBe(translations.headers.gettingThere.description)
  })
});
