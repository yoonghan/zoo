import { render, screen, act } from "@testing-library/react";
import Faq, { generateMetadata } from "./page";
import translations from "@/i18n/locales/en/pages";

describe("Frequent Asked Questions", () => {
  it("should contains important keys", async () => {
    await act(async () => {
      render(<Faq params={Promise.resolve({ lng: "en" })} />);
    })
    //main
    expect(await screen.findByRole("main")).toBeInTheDocument();
    //h1
    expect(
      screen.getByRole("heading", { name: "Frequent Asked Questions" })
    ).toBeInTheDocument();

    expect(
      screen.getByText("How to reach Zoo Negara?")
    ).toBeInTheDocument();
  });

  it("should generate site headers", async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ lng: "en" }) })

    expect(metadata.title).toBe(translations.headers.frequentAskedQuestions.title)
    expect(metadata.description).toBe(translations.headers.frequentAskedQuestions.description)
  })
});
