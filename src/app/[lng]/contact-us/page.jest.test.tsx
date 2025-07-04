import { render, screen, act } from "@testing-library/react";
import ContactUs, { generateMetadata } from "./page";
import { zooProfile } from "@/config/profile";
import translations from "@/i18n/locales/en/pages";

/** Testing is limited for layout, as it renders whole html. The only best solution is via e2e test. */
describe("Contact Us", () => {
  it("should contains important keys", async () => {
    await act(async () => {
      render(<ContactUs params={Promise.resolve({ lng: "en" })} />);
    });

    //main
    expect(await screen.findByRole("main")).toBeInTheDocument();
    //h1
    expect(screen.getByRole("heading", { name: "Contact Zoo Negara" })).toBeInTheDocument();
  });

  it("should contain phone numbers", async () => {
    await act(async () => {
      render(<ContactUs params={Promise.resolve({ lng: "en" })} />);
    });

    //main
    expect(await screen.findByRole("main")).toBeInTheDocument();
    const { phoneNumber1, phoneNumber2 } = zooProfile.contactus;
    expect(screen.getByRole("link", { name: phoneNumber1 })).toHaveAttribute(
      "href",
      `tel:${phoneNumber1}`
    );

    expect(screen.getByRole("link", { name: phoneNumber2 })).toHaveAttribute(
      "href",
      `tel:${phoneNumber2}`
    );
  });

  it("should contain all defined administration info", async () => {
    await act(async () => {
      render(<ContactUs params={Promise.resolve({ lng: "en" })} />);
    });

    //main
    expect(await screen.findByRole("main")).toBeInTheDocument();

    const administrations = zooProfile.contactus.administration;
    if (administrations.length > 0) {
      administrations.forEach((administration) => {
        expect(
          screen.getByRole("heading", { name: translations.contactUs.translate.Administration })
        ).toBeInTheDocument();
        expect(
          screen.getByRole("link", { name: administration.email })
        ).toHaveAttribute("href", `mailto:${administration.email}`);
        expect(
          screen.getByText(translations.contactUs.translate.Administration_description)
        ).toBeInTheDocument();
      });
    }
  });

  it("should generate site headers", async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ lng: "en" }) })

    expect(metadata.title).toBe(translations.headers.contactUs.title)
    expect(metadata.description).toBe(translations.headers.contactUs.description)
  })
});
