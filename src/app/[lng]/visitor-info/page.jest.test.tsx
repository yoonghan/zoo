import { render, screen, act } from "@testing-library/react";
import VisitorInfo, { generateMetadata } from "./page";
import translations from "@/i18n/locales/en/pages";

describe("Visitor Info", () => {
  it("should contains important keys", async () => {
    await act(async () => {
      render(<VisitorInfo params={Promise.resolve({ lng: "en" })} />);
    })
    //main
    expect(await screen.findByRole("main")).toBeInTheDocument();
    //h1
    expect(screen.getByRole("heading", { name: translations.visitorInfo.title })).toBeInTheDocument();

    //mini menu
    expect(screen.getByRole("heading", { name: translations.visitorInfo.openingHours.title })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: translations.visitorInfo.admissionTicket.title })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: translations.visitorInfo.rental.title })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: translations.visitorInfo.tramRide.title })).toBeInTheDocument();

    //array works
    expect(screen.getByText(translations.visitorInfo.rental.facilities[0].title)).toBeInTheDocument();
    expect(screen.getByText(translations.visitorInfo.additionalInformationNotes[0])).toBeInTheDocument();
  });


  it("should generate site headers", async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ lng: "en" }) })

    expect(metadata.title).toBe(translations.headers.visitorInfo.title)
    expect(metadata.description).toBe(translations.headers.visitorInfo.description)
  })
});
