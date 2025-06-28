import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import { TranslatedMenu } from "./TranslatedMenu";
import en from "@/i18n/locales/en/translation";

describe("TranslatedMenu", () => {
    it('should render a translated Menu with menu in English', async () => {
        await act(async () => {
            render(<TranslatedMenu params={Promise.resolve({ lng: "en" })} />)
        })

        expect(await screen.findAllByText(en["menu"]["about-us"])).toHaveLength(2)
        expect(screen.getAllByRole("link", { name: "BM" })).toHaveLength(2)
        expect(screen.getAllByRole("button", { name: "Buy Ticket" })).toHaveLength(2)
        expect(screen.getByText("Zoo Negara")).toBeInTheDocument()
    })
})