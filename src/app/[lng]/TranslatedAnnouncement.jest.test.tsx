import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import { TranslatedAnnouncement } from "./TranslatedAnnouncement";
import en from "@/i18n/locales/en/translation.json"

describe("TranslatedAnnouncement", () => {
  it('should be able to translate announcement', async () => {
    const keyword = "announcements"

    await act(async () => {
      render(<TranslatedAnnouncement params={Promise.resolve({ lng: "en" })} />)
    })

    expect((await screen.findByTestId("announcement")).textContent)
      .toBe("This is NOT the official website of the zoo. Please visit the official website zoonegara.my for more information.")
  })
});