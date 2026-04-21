import { act, render, screen } from "@testing-library/react"
import { zooProfile } from "@/config/profile"
import en from "@/i18n/locales/en/translation"
import { TranslatedFooter } from "./TranslatedFooter"

describe("TranslatedFooter", () => {
	it("should render a translated Footer in english", async () => {
		await act(async () => {
			render(<TranslatedFooter params={Promise.resolve({ lng: "en" })} />)
		})

		expect(
			await screen.findByText(`${en.footer.operationHours}:`),
		).toBeInTheDocument()
		//able to set time

		expect(
			screen.getByText(
				`(${en.footer.lastAdmission})`.replace(
					"{{time}}",
					zooProfile.operatingTime.lastAdmissionTime,
				),
			),
		).toBeInTheDocument()
	})
})