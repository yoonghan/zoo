import { render, screen, act } from "@testing-library/react";
import Career, { generateMetadata } from "./page";
import { zooProfile } from "@/config/profile";
import translations from "@/i18n/locales/en/pages";

describe("Career", () => {
  it("should contains important keys", async () => {
    await act(async () => {
      render(<Career params={Promise.resolve({ lng: "en" })} />);
    });

    //main
    expect(screen.getByRole("main")).toBeInTheDocument();
    //h1
    expect(
      screen.getByRole("heading", { name: translations.careers.title })
    ).toBeInTheDocument();

    //to link zoo
    expect(
      screen.getByRole("link", { name: translations.careers.officialCareerLinkText })
    ).toHaveAttribute("href", zooProfile.careerLink);


    //email to HR
    expect(
      screen.getByRole("link", { name: translations.careers.emailToZoo })
    ).toHaveAttribute("href", `mailto:${zooProfile.contactus.hrEmail}`);
  });

  it("should generate site headers", async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ lng: "en" }) })

    expect(metadata.title).toBe(translations.headers.careers.title)
    expect(metadata.description).toBe(translations.headers.careers.description)
  })
});
